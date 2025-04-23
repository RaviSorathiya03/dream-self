# 🧠 AI Image Generation Platform

This is a full-stack AI-powered web app that lets users upload training images, personalize an AI model using [Fal.ai](https://fal.ai), and generate images using text prompts based on their likeness — similar to PhotoAI or ProfilePicture.AI.

Built using a **Turborepo** monorepo architecture, the platform includes:

- Image uploading and R2 cloud storage (Cloudflare)
- Personalized model training with Fal.ai
- Text prompt image generation based on user likeness
- Frontend in **Next.js**
- Backend in **Express.js**
- PostgreSQL + Prisma for data modeling

---

## ✨ Features

- Upload multiple training images
- Train personalized AI models (one per user)
- Generate images using text prompts
- Store training and generated image metadata in DB
- Cloud-native and serverless-ready
- Clean and scalable monorepo setup

---

## 🧱 Tech Stack

| Layer         | Tech Used                     |
|---------------|-------------------------------|
| Frontend      | Next.js + Tailwind CSS        |
| Backend       | Node.js + Express             |
| ORM / DB      | Prisma + PostgreSQL           |
| File Storage  | Cloudflare R2 (S3 Compatible) |
| AI API        | Fal.ai                        |
| Monorepo Tool | Turborepo                     |

---

## 🏗️ Monorepo Structure

