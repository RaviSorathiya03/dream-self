import express from "express";
const app = express();
import { prismaClient } from "db/client";
import {TrainModel, GenerateImage, GenerateImagesFromPrompt} from "common/types"
import { FalAiModel } from "./models/FalAiModal";
app.use(express.json());


const falaiClient = new FalAiModel();


app.post('/ai/training', async(req, res)=>{
    try {
        const parsedBody = TrainModel.safeParse(req.body);
        if(!parsedBody.success){
            res.status(403).json("Invalid Inputs")
            return
        }

        const images = req.body.images;

        const { request_id, response_url} = await falaiClient.trainModel("", parsedBody.data.name)

        const response = await prismaClient.modals.create({
            data: {
                name: parsedBody.data.name,
                type: parsedBody.data.type,
                age: parsedBody.data.age,
                ethnicity: parsedBody.data.ethinicity,
                eyeColor: parsedBody.data.eyeColor,
                Bald: parsedBody.data.bald, 
                falaiRequestId: request_id,
                falaiResponseId: response_url    
            }
        })

        res.json({
            message: "Model is Created Successfully"
        })

        return
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        })
    }
})

app.post('/ai/generate', async(req, res)=>{
    try {
        const parsedBody = GenerateImage.safeParse(req.body);
        if(!parsedBody.success){
            res.status(403).json({
                message: "Incorrect Input"
            })
            return
        }

        const model = await prismaClient.modals.findUnique({
            where:{
                id: parsedBody.data.modelId
            }
        })

        if(!model?.tensorPath && !model){
            res.status(400).json({
                message: "Model Not Found"
            })
            return
        }

        const {request_id, response_url} = await falaiClient.generateImage(parsedBody.data.prompt, model?.tensorPath ?? "")

        const data = await prismaClient.outputImage.create({
            data:{
                prompt: parsedBody.data.prompt,
                modelId: parsedBody.data.modelId,
                imageUrl: "",
                falaiRequestId: request_id,
                falaiResponseId: response_url
            }
        })

        res.status(200).json({
            image: data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        })
    }
})

app.post('/pack/generate', async(req, res)=>{
   try {
    const parsedBody = GenerateImagesFromPrompt.safeParse(req.body);
    if(!parsedBody.success){
        res.status(403).json({
            message: "Something went wrong"
        })
        return
    }
    const prompts = await prismaClient.packPrompt.findMany({
        where:{
            packId: parsedBody.data.packId
        }
    })

    const images = await prismaClient.outputImage.createManyAndReturn({
        data: prompts.map((prompt)=>({
            prompt: prompt.prompt,
            modelId: parsedBody.data.modelId,
            imageUrl: ""
        }))
    })
    
    res.json({
        images: images.map((image)=> image.id)
    })
    return
   } catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Something went wrong"
    })
   }
})

app.get('/pack/bulk', async(req, res)=>{
    try {
        const packs = await prismaClient.packs.findMany({
            where: {}
        })

        res.status(200).json({
            packs: packs
        })
        return
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        })
    }
})

app.get('/image/bulk', async(req, res)=>{
    try {
        const images = await prismaClient.outputImage.findMany({
            where:{

            }
        })

        res.json({
            images: images
        })

        return
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something Went Wrong"
        })
    }
})

app.post("/fal-ai/webhook/train", async(req, res)=>{
    try {
        const data = await prismaClient.modals.update({
            where:{
                falaiRequestId: req.body.request_id
            }, data:{
                status: "Generated",
                tensorPath: req.body.tensor_path
            }
        })

        res.status(200).json({
            data: data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                message: "something went wrong"
            }
        )
    }
})

app.post("/fal-ai/webhook/image", async(req, res)=>{
   try {
    console.log(req.body);
    const requestId = req.body.request_id;
    await prismaClient.outputImage.update({
        where: {
            falaiRequestId: requestId
        }, data:{
            imageUrl: req.body.image_url
        }
    })
    res.json({
        message: "Webhook Recieved"
    })
   } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "something went wrong"
        })
   }
})


app.listen(8080, ()=>{
    console.log("server is running for the port 8080")
})