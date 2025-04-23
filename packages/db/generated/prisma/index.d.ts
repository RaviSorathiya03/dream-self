
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Modals
 * 
 */
export type Modals = $Result.DefaultSelection<Prisma.$ModalsPayload>
/**
 * Model TrainingImages
 * 
 */
export type TrainingImages = $Result.DefaultSelection<Prisma.$TrainingImagesPayload>
/**
 * Model OutputImage
 * 
 */
export type OutputImage = $Result.DefaultSelection<Prisma.$OutputImagePayload>
/**
 * Model Packs
 * 
 */
export type Packs = $Result.DefaultSelection<Prisma.$PacksPayload>
/**
 * Model PackPrompt
 * 
 */
export type PackPrompt = $Result.DefaultSelection<Prisma.$PackPromptPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ModelTrainingStatus: {
  Pending: 'Pending',
  Generated: 'Generated',
  Failed: 'Failed'
};

export type ModelTrainingStatus = (typeof ModelTrainingStatus)[keyof typeof ModelTrainingStatus]


export const OutputImagesStatus: {
  Pending: 'Pending',
  Generated: 'Generated',
  Failed: 'Failed'
};

export type OutputImagesStatus = (typeof OutputImagesStatus)[keyof typeof OutputImagesStatus]


export const Gender: {
  Man: 'Man',
  Women: 'Women',
  Others: 'Others'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Ethnicity: {
  White: 'White',
  Black: 'Black',
  Asian_American: 'Asian_American',
  East_Asian: 'East_Asian',
  South_East_Asian: 'South_East_Asian',
  South_Asian: 'South_Asian',
  Middle_Eastern: 'Middle_Eastern',
  Pacific: 'Pacific',
  Hispanic: 'Hispanic'
};

export type Ethnicity = (typeof Ethnicity)[keyof typeof Ethnicity]


export const eyeColor: {
  Brown: 'Brown',
  Blue: 'Blue',
  Hazel: 'Hazel',
  Gray: 'Gray'
};

export type eyeColor = (typeof eyeColor)[keyof typeof eyeColor]

}

export type ModelTrainingStatus = $Enums.ModelTrainingStatus

export const ModelTrainingStatus: typeof $Enums.ModelTrainingStatus

export type OutputImagesStatus = $Enums.OutputImagesStatus

export const OutputImagesStatus: typeof $Enums.OutputImagesStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Ethnicity = $Enums.Ethnicity

export const Ethnicity: typeof $Enums.Ethnicity

export type eyeColor = $Enums.eyeColor

export const eyeColor: typeof $Enums.eyeColor

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modals`: Exposes CRUD operations for the **Modals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modals
    * const modals = await prisma.modals.findMany()
    * ```
    */
  get modals(): Prisma.ModalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainingImages`: Exposes CRUD operations for the **TrainingImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingImages
    * const trainingImages = await prisma.trainingImages.findMany()
    * ```
    */
  get trainingImages(): Prisma.TrainingImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outputImage`: Exposes CRUD operations for the **OutputImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutputImages
    * const outputImages = await prisma.outputImage.findMany()
    * ```
    */
  get outputImage(): Prisma.OutputImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packs`: Exposes CRUD operations for the **Packs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packs
    * const packs = await prisma.packs.findMany()
    * ```
    */
  get packs(): Prisma.PacksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packPrompt`: Exposes CRUD operations for the **PackPrompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackPrompts
    * const packPrompts = await prisma.packPrompt.findMany()
    * ```
    */
  get packPrompt(): Prisma.PackPromptDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Modals: 'Modals',
    TrainingImages: 'TrainingImages',
    OutputImage: 'OutputImage',
    Packs: 'Packs',
    PackPrompt: 'PackPrompt'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "modals" | "trainingImages" | "outputImage" | "packs" | "packPrompt"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Modals: {
        payload: Prisma.$ModalsPayload<ExtArgs>
        fields: Prisma.ModalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload>
          }
          findFirst: {
            args: Prisma.ModalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload>
          }
          findMany: {
            args: Prisma.ModalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload>[]
          }
          create: {
            args: Prisma.ModalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload>
          }
          createMany: {
            args: Prisma.ModalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload>[]
          }
          delete: {
            args: Prisma.ModalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload>
          }
          update: {
            args: Prisma.ModalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload>
          }
          deleteMany: {
            args: Prisma.ModalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload>[]
          }
          upsert: {
            args: Prisma.ModalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalsPayload>
          }
          aggregate: {
            args: Prisma.ModalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModals>
          }
          groupBy: {
            args: Prisma.ModalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModalsCountArgs<ExtArgs>
            result: $Utils.Optional<ModalsCountAggregateOutputType> | number
          }
        }
      }
      TrainingImages: {
        payload: Prisma.$TrainingImagesPayload<ExtArgs>
        fields: Prisma.TrainingImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload>
          }
          findFirst: {
            args: Prisma.TrainingImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload>
          }
          findMany: {
            args: Prisma.TrainingImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload>[]
          }
          create: {
            args: Prisma.TrainingImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload>
          }
          createMany: {
            args: Prisma.TrainingImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload>[]
          }
          delete: {
            args: Prisma.TrainingImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload>
          }
          update: {
            args: Prisma.TrainingImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload>
          }
          deleteMany: {
            args: Prisma.TrainingImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainingImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload>[]
          }
          upsert: {
            args: Prisma.TrainingImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingImagesPayload>
          }
          aggregate: {
            args: Prisma.TrainingImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingImages>
          }
          groupBy: {
            args: Prisma.TrainingImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingImagesCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingImagesCountAggregateOutputType> | number
          }
        }
      }
      OutputImage: {
        payload: Prisma.$OutputImagePayload<ExtArgs>
        fields: Prisma.OutputImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutputImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutputImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          findFirst: {
            args: Prisma.OutputImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutputImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          findMany: {
            args: Prisma.OutputImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>[]
          }
          create: {
            args: Prisma.OutputImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          createMany: {
            args: Prisma.OutputImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutputImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>[]
          }
          delete: {
            args: Prisma.OutputImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          update: {
            args: Prisma.OutputImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          deleteMany: {
            args: Prisma.OutputImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutputImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutputImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>[]
          }
          upsert: {
            args: Prisma.OutputImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagePayload>
          }
          aggregate: {
            args: Prisma.OutputImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutputImage>
          }
          groupBy: {
            args: Prisma.OutputImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutputImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutputImageCountArgs<ExtArgs>
            result: $Utils.Optional<OutputImageCountAggregateOutputType> | number
          }
        }
      }
      Packs: {
        payload: Prisma.$PacksPayload<ExtArgs>
        fields: Prisma.PacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          findFirst: {
            args: Prisma.PacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          findMany: {
            args: Prisma.PacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>[]
          }
          create: {
            args: Prisma.PacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          createMany: {
            args: Prisma.PacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>[]
          }
          delete: {
            args: Prisma.PacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          update: {
            args: Prisma.PacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          deleteMany: {
            args: Prisma.PacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>[]
          }
          upsert: {
            args: Prisma.PacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          aggregate: {
            args: Prisma.PacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacks>
          }
          groupBy: {
            args: Prisma.PacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacksCountArgs<ExtArgs>
            result: $Utils.Optional<PacksCountAggregateOutputType> | number
          }
        }
      }
      PackPrompt: {
        payload: Prisma.$PackPromptPayload<ExtArgs>
        fields: Prisma.PackPromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackPromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackPromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          findFirst: {
            args: Prisma.PackPromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackPromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          findMany: {
            args: Prisma.PackPromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>[]
          }
          create: {
            args: Prisma.PackPromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          createMany: {
            args: Prisma.PackPromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackPromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>[]
          }
          delete: {
            args: Prisma.PackPromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          update: {
            args: Prisma.PackPromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          deleteMany: {
            args: Prisma.PackPromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackPromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackPromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>[]
          }
          upsert: {
            args: Prisma.PackPromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptPayload>
          }
          aggregate: {
            args: Prisma.PackPromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackPrompt>
          }
          groupBy: {
            args: Prisma.PackPromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackPromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackPromptCountArgs<ExtArgs>
            result: $Utils.Optional<PackPromptCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    modals?: ModalsOmit
    trainingImages?: TrainingImagesOmit
    outputImage?: OutputImageOmit
    packs?: PacksOmit
    packPrompt?: PackPromptOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ModalsCountOutputType
   */

  export type ModalsCountOutputType = {
    images: number
    outputImages: number
  }

  export type ModalsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ModalsCountOutputTypeCountImagesArgs
    outputImages?: boolean | ModalsCountOutputTypeCountOutputImagesArgs
  }

  // Custom InputTypes
  /**
   * ModalsCountOutputType without action
   */
  export type ModalsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModalsCountOutputType
     */
    select?: ModalsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModalsCountOutputType without action
   */
  export type ModalsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingImagesWhereInput
  }

  /**
   * ModalsCountOutputType without action
   */
  export type ModalsCountOutputTypeCountOutputImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputImageWhereInput
  }


  /**
   * Count Type PacksCountOutputType
   */

  export type PacksCountOutputType = {
    packPrompts: number
  }

  export type PacksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packPrompts?: boolean | PacksCountOutputTypeCountPackPromptsArgs
  }

  // Custom InputTypes
  /**
   * PacksCountOutputType without action
   */
  export type PacksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacksCountOutputType
     */
    select?: PacksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacksCountOutputType without action
   */
  export type PacksCountOutputTypeCountPackPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackPromptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Modals
   */

  export type AggregateModals = {
    _count: ModalsCountAggregateOutputType | null
    _avg: ModalsAvgAggregateOutputType | null
    _sum: ModalsSumAggregateOutputType | null
    _min: ModalsMinAggregateOutputType | null
    _max: ModalsMaxAggregateOutputType | null
  }

  export type ModalsAvgAggregateOutputType = {
    age: number | null
  }

  export type ModalsSumAggregateOutputType = {
    age: number | null
  }

  export type ModalsMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.Gender | null
    age: number | null
    ethnicity: $Enums.Ethnicity | null
    eyeColor: $Enums.eyeColor | null
    Bald: boolean | null
    zipUrl: string | null
    triggerWord: string | null
    tensorPath: string | null
    status: $Enums.ModelTrainingStatus | null
    falaiRequestId: string | null
    falaiResponseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModalsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.Gender | null
    age: number | null
    ethnicity: $Enums.Ethnicity | null
    eyeColor: $Enums.eyeColor | null
    Bald: boolean | null
    zipUrl: string | null
    triggerWord: string | null
    tensorPath: string | null
    status: $Enums.ModelTrainingStatus | null
    falaiRequestId: string | null
    falaiResponseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModalsCountAggregateOutputType = {
    id: number
    name: number
    type: number
    age: number
    ethnicity: number
    eyeColor: number
    Bald: number
    zipUrl: number
    triggerWord: number
    tensorPath: number
    status: number
    falaiRequestId: number
    falaiResponseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModalsAvgAggregateInputType = {
    age?: true
  }

  export type ModalsSumAggregateInputType = {
    age?: true
  }

  export type ModalsMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    age?: true
    ethnicity?: true
    eyeColor?: true
    Bald?: true
    zipUrl?: true
    triggerWord?: true
    tensorPath?: true
    status?: true
    falaiRequestId?: true
    falaiResponseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModalsMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    age?: true
    ethnicity?: true
    eyeColor?: true
    Bald?: true
    zipUrl?: true
    triggerWord?: true
    tensorPath?: true
    status?: true
    falaiRequestId?: true
    falaiResponseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModalsCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    age?: true
    ethnicity?: true
    eyeColor?: true
    Bald?: true
    zipUrl?: true
    triggerWord?: true
    tensorPath?: true
    status?: true
    falaiRequestId?: true
    falaiResponseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modals to aggregate.
     */
    where?: ModalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modals to fetch.
     */
    orderBy?: ModalsOrderByWithRelationInput | ModalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modals
    **/
    _count?: true | ModalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModalsMaxAggregateInputType
  }

  export type GetModalsAggregateType<T extends ModalsAggregateArgs> = {
        [P in keyof T & keyof AggregateModals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModals[P]>
      : GetScalarType<T[P], AggregateModals[P]>
  }




  export type ModalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModalsWhereInput
    orderBy?: ModalsOrderByWithAggregationInput | ModalsOrderByWithAggregationInput[]
    by: ModalsScalarFieldEnum[] | ModalsScalarFieldEnum
    having?: ModalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModalsCountAggregateInputType | true
    _avg?: ModalsAvgAggregateInputType
    _sum?: ModalsSumAggregateInputType
    _min?: ModalsMinAggregateInputType
    _max?: ModalsMaxAggregateInputType
  }

  export type ModalsGroupByOutputType = {
    id: string
    name: string
    type: $Enums.Gender
    age: number
    ethnicity: $Enums.Ethnicity
    eyeColor: $Enums.eyeColor
    Bald: boolean
    zipUrl: string
    triggerWord: string | null
    tensorPath: string | null
    status: $Enums.ModelTrainingStatus | null
    falaiRequestId: string | null
    falaiResponseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ModalsCountAggregateOutputType | null
    _avg: ModalsAvgAggregateOutputType | null
    _sum: ModalsSumAggregateOutputType | null
    _min: ModalsMinAggregateOutputType | null
    _max: ModalsMaxAggregateOutputType | null
  }

  type GetModalsGroupByPayload<T extends ModalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModalsGroupByOutputType[P]>
            : GetScalarType<T[P], ModalsGroupByOutputType[P]>
        }
      >
    >


  export type ModalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethnicity?: boolean
    eyeColor?: boolean
    Bald?: boolean
    zipUrl?: boolean
    triggerWord?: boolean
    tensorPath?: boolean
    status?: boolean
    falaiRequestId?: boolean
    falaiResponseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Modals$imagesArgs<ExtArgs>
    outputImages?: boolean | Modals$outputImagesArgs<ExtArgs>
    _count?: boolean | ModalsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modals"]>

  export type ModalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethnicity?: boolean
    eyeColor?: boolean
    Bald?: boolean
    zipUrl?: boolean
    triggerWord?: boolean
    tensorPath?: boolean
    status?: boolean
    falaiRequestId?: boolean
    falaiResponseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["modals"]>

  export type ModalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethnicity?: boolean
    eyeColor?: boolean
    Bald?: boolean
    zipUrl?: boolean
    triggerWord?: boolean
    tensorPath?: boolean
    status?: boolean
    falaiRequestId?: boolean
    falaiResponseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["modals"]>

  export type ModalsSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethnicity?: boolean
    eyeColor?: boolean
    Bald?: boolean
    zipUrl?: boolean
    triggerWord?: boolean
    tensorPath?: boolean
    status?: boolean
    falaiRequestId?: boolean
    falaiResponseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "age" | "ethnicity" | "eyeColor" | "Bald" | "zipUrl" | "triggerWord" | "tensorPath" | "status" | "falaiRequestId" | "falaiResponseId" | "createdAt" | "updatedAt", ExtArgs["result"]["modals"]>
  export type ModalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Modals$imagesArgs<ExtArgs>
    outputImages?: boolean | Modals$outputImagesArgs<ExtArgs>
    _count?: boolean | ModalsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Modals"
    objects: {
      images: Prisma.$TrainingImagesPayload<ExtArgs>[]
      outputImages: Prisma.$OutputImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.Gender
      age: number
      ethnicity: $Enums.Ethnicity
      eyeColor: $Enums.eyeColor
      Bald: boolean
      zipUrl: string
      triggerWord: string | null
      tensorPath: string | null
      status: $Enums.ModelTrainingStatus | null
      falaiRequestId: string | null
      falaiResponseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modals"]>
    composites: {}
  }

  type ModalsGetPayload<S extends boolean | null | undefined | ModalsDefaultArgs> = $Result.GetResult<Prisma.$ModalsPayload, S>

  type ModalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModalsCountAggregateInputType | true
    }

  export interface ModalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Modals'], meta: { name: 'Modals' } }
    /**
     * Find zero or one Modals that matches the filter.
     * @param {ModalsFindUniqueArgs} args - Arguments to find a Modals
     * @example
     * // Get one Modals
     * const modals = await prisma.modals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModalsFindUniqueArgs>(args: SelectSubset<T, ModalsFindUniqueArgs<ExtArgs>>): Prisma__ModalsClient<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModalsFindUniqueOrThrowArgs} args - Arguments to find a Modals
     * @example
     * // Get one Modals
     * const modals = await prisma.modals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModalsFindUniqueOrThrowArgs>(args: SelectSubset<T, ModalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModalsClient<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalsFindFirstArgs} args - Arguments to find a Modals
     * @example
     * // Get one Modals
     * const modals = await prisma.modals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModalsFindFirstArgs>(args?: SelectSubset<T, ModalsFindFirstArgs<ExtArgs>>): Prisma__ModalsClient<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalsFindFirstOrThrowArgs} args - Arguments to find a Modals
     * @example
     * // Get one Modals
     * const modals = await prisma.modals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModalsFindFirstOrThrowArgs>(args?: SelectSubset<T, ModalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModalsClient<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modals
     * const modals = await prisma.modals.findMany()
     * 
     * // Get first 10 Modals
     * const modals = await prisma.modals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modalsWithIdOnly = await prisma.modals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModalsFindManyArgs>(args?: SelectSubset<T, ModalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modals.
     * @param {ModalsCreateArgs} args - Arguments to create a Modals.
     * @example
     * // Create one Modals
     * const Modals = await prisma.modals.create({
     *   data: {
     *     // ... data to create a Modals
     *   }
     * })
     * 
     */
    create<T extends ModalsCreateArgs>(args: SelectSubset<T, ModalsCreateArgs<ExtArgs>>): Prisma__ModalsClient<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modals.
     * @param {ModalsCreateManyArgs} args - Arguments to create many Modals.
     * @example
     * // Create many Modals
     * const modals = await prisma.modals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModalsCreateManyArgs>(args?: SelectSubset<T, ModalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modals and returns the data saved in the database.
     * @param {ModalsCreateManyAndReturnArgs} args - Arguments to create many Modals.
     * @example
     * // Create many Modals
     * const modals = await prisma.modals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modals and only return the `id`
     * const modalsWithIdOnly = await prisma.modals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModalsCreateManyAndReturnArgs>(args?: SelectSubset<T, ModalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Modals.
     * @param {ModalsDeleteArgs} args - Arguments to delete one Modals.
     * @example
     * // Delete one Modals
     * const Modals = await prisma.modals.delete({
     *   where: {
     *     // ... filter to delete one Modals
     *   }
     * })
     * 
     */
    delete<T extends ModalsDeleteArgs>(args: SelectSubset<T, ModalsDeleteArgs<ExtArgs>>): Prisma__ModalsClient<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modals.
     * @param {ModalsUpdateArgs} args - Arguments to update one Modals.
     * @example
     * // Update one Modals
     * const modals = await prisma.modals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModalsUpdateArgs>(args: SelectSubset<T, ModalsUpdateArgs<ExtArgs>>): Prisma__ModalsClient<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modals.
     * @param {ModalsDeleteManyArgs} args - Arguments to filter Modals to delete.
     * @example
     * // Delete a few Modals
     * const { count } = await prisma.modals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModalsDeleteManyArgs>(args?: SelectSubset<T, ModalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modals
     * const modals = await prisma.modals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModalsUpdateManyArgs>(args: SelectSubset<T, ModalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modals and returns the data updated in the database.
     * @param {ModalsUpdateManyAndReturnArgs} args - Arguments to update many Modals.
     * @example
     * // Update many Modals
     * const modals = await prisma.modals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modals and only return the `id`
     * const modalsWithIdOnly = await prisma.modals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModalsUpdateManyAndReturnArgs>(args: SelectSubset<T, ModalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Modals.
     * @param {ModalsUpsertArgs} args - Arguments to update or create a Modals.
     * @example
     * // Update or create a Modals
     * const modals = await prisma.modals.upsert({
     *   create: {
     *     // ... data to create a Modals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modals we want to update
     *   }
     * })
     */
    upsert<T extends ModalsUpsertArgs>(args: SelectSubset<T, ModalsUpsertArgs<ExtArgs>>): Prisma__ModalsClient<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalsCountArgs} args - Arguments to filter Modals to count.
     * @example
     * // Count the number of Modals
     * const count = await prisma.modals.count({
     *   where: {
     *     // ... the filter for the Modals we want to count
     *   }
     * })
    **/
    count<T extends ModalsCountArgs>(
      args?: Subset<T, ModalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModalsAggregateArgs>(args: Subset<T, ModalsAggregateArgs>): Prisma.PrismaPromise<GetModalsAggregateType<T>>

    /**
     * Group by Modals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModalsGroupByArgs['orderBy'] }
        : { orderBy?: ModalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Modals model
   */
  readonly fields: ModalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Modals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Modals$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Modals$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outputImages<T extends Modals$outputImagesArgs<ExtArgs> = {}>(args?: Subset<T, Modals$outputImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Modals model
   */
  interface ModalsFieldRefs {
    readonly id: FieldRef<"Modals", 'String'>
    readonly name: FieldRef<"Modals", 'String'>
    readonly type: FieldRef<"Modals", 'Gender'>
    readonly age: FieldRef<"Modals", 'Int'>
    readonly ethnicity: FieldRef<"Modals", 'Ethnicity'>
    readonly eyeColor: FieldRef<"Modals", 'eyeColor'>
    readonly Bald: FieldRef<"Modals", 'Boolean'>
    readonly zipUrl: FieldRef<"Modals", 'String'>
    readonly triggerWord: FieldRef<"Modals", 'String'>
    readonly tensorPath: FieldRef<"Modals", 'String'>
    readonly status: FieldRef<"Modals", 'ModelTrainingStatus'>
    readonly falaiRequestId: FieldRef<"Modals", 'String'>
    readonly falaiResponseId: FieldRef<"Modals", 'String'>
    readonly createdAt: FieldRef<"Modals", 'DateTime'>
    readonly updatedAt: FieldRef<"Modals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Modals findUnique
   */
  export type ModalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalsInclude<ExtArgs> | null
    /**
     * Filter, which Modals to fetch.
     */
    where: ModalsWhereUniqueInput
  }

  /**
   * Modals findUniqueOrThrow
   */
  export type ModalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalsInclude<ExtArgs> | null
    /**
     * Filter, which Modals to fetch.
     */
    where: ModalsWhereUniqueInput
  }

  /**
   * Modals findFirst
   */
  export type ModalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalsInclude<ExtArgs> | null
    /**
     * Filter, which Modals to fetch.
     */
    where?: ModalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modals to fetch.
     */
    orderBy?: ModalsOrderByWithRelationInput | ModalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modals.
     */
    cursor?: ModalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modals.
     */
    distinct?: ModalsScalarFieldEnum | ModalsScalarFieldEnum[]
  }

  /**
   * Modals findFirstOrThrow
   */
  export type ModalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalsInclude<ExtArgs> | null
    /**
     * Filter, which Modals to fetch.
     */
    where?: ModalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modals to fetch.
     */
    orderBy?: ModalsOrderByWithRelationInput | ModalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modals.
     */
    cursor?: ModalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modals.
     */
    distinct?: ModalsScalarFieldEnum | ModalsScalarFieldEnum[]
  }

  /**
   * Modals findMany
   */
  export type ModalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalsInclude<ExtArgs> | null
    /**
     * Filter, which Modals to fetch.
     */
    where?: ModalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modals to fetch.
     */
    orderBy?: ModalsOrderByWithRelationInput | ModalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modals.
     */
    cursor?: ModalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modals.
     */
    skip?: number
    distinct?: ModalsScalarFieldEnum | ModalsScalarFieldEnum[]
  }

  /**
   * Modals create
   */
  export type ModalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalsInclude<ExtArgs> | null
    /**
     * The data needed to create a Modals.
     */
    data: XOR<ModalsCreateInput, ModalsUncheckedCreateInput>
  }

  /**
   * Modals createMany
   */
  export type ModalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modals.
     */
    data: ModalsCreateManyInput | ModalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Modals createManyAndReturn
   */
  export type ModalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * The data used to create many Modals.
     */
    data: ModalsCreateManyInput | ModalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Modals update
   */
  export type ModalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalsInclude<ExtArgs> | null
    /**
     * The data needed to update a Modals.
     */
    data: XOR<ModalsUpdateInput, ModalsUncheckedUpdateInput>
    /**
     * Choose, which Modals to update.
     */
    where: ModalsWhereUniqueInput
  }

  /**
   * Modals updateMany
   */
  export type ModalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modals.
     */
    data: XOR<ModalsUpdateManyMutationInput, ModalsUncheckedUpdateManyInput>
    /**
     * Filter which Modals to update
     */
    where?: ModalsWhereInput
    /**
     * Limit how many Modals to update.
     */
    limit?: number
  }

  /**
   * Modals updateManyAndReturn
   */
  export type ModalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * The data used to update Modals.
     */
    data: XOR<ModalsUpdateManyMutationInput, ModalsUncheckedUpdateManyInput>
    /**
     * Filter which Modals to update
     */
    where?: ModalsWhereInput
    /**
     * Limit how many Modals to update.
     */
    limit?: number
  }

  /**
   * Modals upsert
   */
  export type ModalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalsInclude<ExtArgs> | null
    /**
     * The filter to search for the Modals to update in case it exists.
     */
    where: ModalsWhereUniqueInput
    /**
     * In case the Modals found by the `where` argument doesn't exist, create a new Modals with this data.
     */
    create: XOR<ModalsCreateInput, ModalsUncheckedCreateInput>
    /**
     * In case the Modals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModalsUpdateInput, ModalsUncheckedUpdateInput>
  }

  /**
   * Modals delete
   */
  export type ModalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalsInclude<ExtArgs> | null
    /**
     * Filter which Modals to delete.
     */
    where: ModalsWhereUniqueInput
  }

  /**
   * Modals deleteMany
   */
  export type ModalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modals to delete
     */
    where?: ModalsWhereInput
    /**
     * Limit how many Modals to delete.
     */
    limit?: number
  }

  /**
   * Modals.images
   */
  export type Modals$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
    where?: TrainingImagesWhereInput
    orderBy?: TrainingImagesOrderByWithRelationInput | TrainingImagesOrderByWithRelationInput[]
    cursor?: TrainingImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingImagesScalarFieldEnum | TrainingImagesScalarFieldEnum[]
  }

  /**
   * Modals.outputImages
   */
  export type Modals$outputImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    where?: OutputImageWhereInput
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    cursor?: OutputImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputImageScalarFieldEnum | OutputImageScalarFieldEnum[]
  }

  /**
   * Modals without action
   */
  export type ModalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modals
     */
    select?: ModalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modals
     */
    omit?: ModalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalsInclude<ExtArgs> | null
  }


  /**
   * Model TrainingImages
   */

  export type AggregateTrainingImages = {
    _count: TrainingImagesCountAggregateOutputType | null
    _min: TrainingImagesMinAggregateOutputType | null
    _max: TrainingImagesMaxAggregateOutputType | null
  }

  export type TrainingImagesMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    modelId: string | null
  }

  export type TrainingImagesMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    modelId: string | null
  }

  export type TrainingImagesCountAggregateOutputType = {
    id: number
    imageUrl: number
    modelId: number
    _all: number
  }


  export type TrainingImagesMinAggregateInputType = {
    id?: true
    imageUrl?: true
    modelId?: true
  }

  export type TrainingImagesMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    modelId?: true
  }

  export type TrainingImagesCountAggregateInputType = {
    id?: true
    imageUrl?: true
    modelId?: true
    _all?: true
  }

  export type TrainingImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingImages to aggregate.
     */
    where?: TrainingImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingImages to fetch.
     */
    orderBy?: TrainingImagesOrderByWithRelationInput | TrainingImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingImages
    **/
    _count?: true | TrainingImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingImagesMaxAggregateInputType
  }

  export type GetTrainingImagesAggregateType<T extends TrainingImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingImages[P]>
      : GetScalarType<T[P], AggregateTrainingImages[P]>
  }




  export type TrainingImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingImagesWhereInput
    orderBy?: TrainingImagesOrderByWithAggregationInput | TrainingImagesOrderByWithAggregationInput[]
    by: TrainingImagesScalarFieldEnum[] | TrainingImagesScalarFieldEnum
    having?: TrainingImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingImagesCountAggregateInputType | true
    _min?: TrainingImagesMinAggregateInputType
    _max?: TrainingImagesMaxAggregateInputType
  }

  export type TrainingImagesGroupByOutputType = {
    id: string
    imageUrl: string
    modelId: string
    _count: TrainingImagesCountAggregateOutputType | null
    _min: TrainingImagesMinAggregateOutputType | null
    _max: TrainingImagesMaxAggregateOutputType | null
  }

  type GetTrainingImagesGroupByPayload<T extends TrainingImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingImagesGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingImagesGroupByOutputType[P]>
        }
      >
    >


  export type TrainingImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    modelId?: boolean
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingImages"]>

  export type TrainingImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    modelId?: boolean
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingImages"]>

  export type TrainingImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    modelId?: boolean
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingImages"]>

  export type TrainingImagesSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    modelId?: boolean
  }

  export type TrainingImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "modelId", ExtArgs["result"]["trainingImages"]>
  export type TrainingImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }
  export type TrainingImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }
  export type TrainingImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }

  export type $TrainingImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingImages"
    objects: {
      modal: Prisma.$ModalsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      modelId: string
    }, ExtArgs["result"]["trainingImages"]>
    composites: {}
  }

  type TrainingImagesGetPayload<S extends boolean | null | undefined | TrainingImagesDefaultArgs> = $Result.GetResult<Prisma.$TrainingImagesPayload, S>

  type TrainingImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingImagesCountAggregateInputType | true
    }

  export interface TrainingImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingImages'], meta: { name: 'TrainingImages' } }
    /**
     * Find zero or one TrainingImages that matches the filter.
     * @param {TrainingImagesFindUniqueArgs} args - Arguments to find a TrainingImages
     * @example
     * // Get one TrainingImages
     * const trainingImages = await prisma.trainingImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingImagesFindUniqueArgs>(args: SelectSubset<T, TrainingImagesFindUniqueArgs<ExtArgs>>): Prisma__TrainingImagesClient<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainingImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingImagesFindUniqueOrThrowArgs} args - Arguments to find a TrainingImages
     * @example
     * // Get one TrainingImages
     * const trainingImages = await prisma.trainingImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingImagesClient<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImagesFindFirstArgs} args - Arguments to find a TrainingImages
     * @example
     * // Get one TrainingImages
     * const trainingImages = await prisma.trainingImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingImagesFindFirstArgs>(args?: SelectSubset<T, TrainingImagesFindFirstArgs<ExtArgs>>): Prisma__TrainingImagesClient<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImagesFindFirstOrThrowArgs} args - Arguments to find a TrainingImages
     * @example
     * // Get one TrainingImages
     * const trainingImages = await prisma.trainingImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingImagesClient<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainingImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingImages
     * const trainingImages = await prisma.trainingImages.findMany()
     * 
     * // Get first 10 TrainingImages
     * const trainingImages = await prisma.trainingImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingImagesWithIdOnly = await prisma.trainingImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainingImagesFindManyArgs>(args?: SelectSubset<T, TrainingImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainingImages.
     * @param {TrainingImagesCreateArgs} args - Arguments to create a TrainingImages.
     * @example
     * // Create one TrainingImages
     * const TrainingImages = await prisma.trainingImages.create({
     *   data: {
     *     // ... data to create a TrainingImages
     *   }
     * })
     * 
     */
    create<T extends TrainingImagesCreateArgs>(args: SelectSubset<T, TrainingImagesCreateArgs<ExtArgs>>): Prisma__TrainingImagesClient<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainingImages.
     * @param {TrainingImagesCreateManyArgs} args - Arguments to create many TrainingImages.
     * @example
     * // Create many TrainingImages
     * const trainingImages = await prisma.trainingImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingImagesCreateManyArgs>(args?: SelectSubset<T, TrainingImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainingImages and returns the data saved in the database.
     * @param {TrainingImagesCreateManyAndReturnArgs} args - Arguments to create many TrainingImages.
     * @example
     * // Create many TrainingImages
     * const trainingImages = await prisma.trainingImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainingImages and only return the `id`
     * const trainingImagesWithIdOnly = await prisma.trainingImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrainingImages.
     * @param {TrainingImagesDeleteArgs} args - Arguments to delete one TrainingImages.
     * @example
     * // Delete one TrainingImages
     * const TrainingImages = await prisma.trainingImages.delete({
     *   where: {
     *     // ... filter to delete one TrainingImages
     *   }
     * })
     * 
     */
    delete<T extends TrainingImagesDeleteArgs>(args: SelectSubset<T, TrainingImagesDeleteArgs<ExtArgs>>): Prisma__TrainingImagesClient<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainingImages.
     * @param {TrainingImagesUpdateArgs} args - Arguments to update one TrainingImages.
     * @example
     * // Update one TrainingImages
     * const trainingImages = await prisma.trainingImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingImagesUpdateArgs>(args: SelectSubset<T, TrainingImagesUpdateArgs<ExtArgs>>): Prisma__TrainingImagesClient<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainingImages.
     * @param {TrainingImagesDeleteManyArgs} args - Arguments to filter TrainingImages to delete.
     * @example
     * // Delete a few TrainingImages
     * const { count } = await prisma.trainingImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingImagesDeleteManyArgs>(args?: SelectSubset<T, TrainingImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingImages
     * const trainingImages = await prisma.trainingImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingImagesUpdateManyArgs>(args: SelectSubset<T, TrainingImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingImages and returns the data updated in the database.
     * @param {TrainingImagesUpdateManyAndReturnArgs} args - Arguments to update many TrainingImages.
     * @example
     * // Update many TrainingImages
     * const trainingImages = await prisma.trainingImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainingImages and only return the `id`
     * const trainingImagesWithIdOnly = await prisma.trainingImages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainingImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainingImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrainingImages.
     * @param {TrainingImagesUpsertArgs} args - Arguments to update or create a TrainingImages.
     * @example
     * // Update or create a TrainingImages
     * const trainingImages = await prisma.trainingImages.upsert({
     *   create: {
     *     // ... data to create a TrainingImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingImages we want to update
     *   }
     * })
     */
    upsert<T extends TrainingImagesUpsertArgs>(args: SelectSubset<T, TrainingImagesUpsertArgs<ExtArgs>>): Prisma__TrainingImagesClient<$Result.GetResult<Prisma.$TrainingImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrainingImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImagesCountArgs} args - Arguments to filter TrainingImages to count.
     * @example
     * // Count the number of TrainingImages
     * const count = await prisma.trainingImages.count({
     *   where: {
     *     // ... the filter for the TrainingImages we want to count
     *   }
     * })
    **/
    count<T extends TrainingImagesCountArgs>(
      args?: Subset<T, TrainingImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainingImagesAggregateArgs>(args: Subset<T, TrainingImagesAggregateArgs>): Prisma.PrismaPromise<GetTrainingImagesAggregateType<T>>

    /**
     * Group by TrainingImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainingImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingImagesGroupByArgs['orderBy'] }
        : { orderBy?: TrainingImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainingImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingImages model
   */
  readonly fields: TrainingImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modal<T extends ModalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModalsDefaultArgs<ExtArgs>>): Prisma__ModalsClient<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrainingImages model
   */
  interface TrainingImagesFieldRefs {
    readonly id: FieldRef<"TrainingImages", 'String'>
    readonly imageUrl: FieldRef<"TrainingImages", 'String'>
    readonly modelId: FieldRef<"TrainingImages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrainingImages findUnique
   */
  export type TrainingImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
    /**
     * Filter, which TrainingImages to fetch.
     */
    where: TrainingImagesWhereUniqueInput
  }

  /**
   * TrainingImages findUniqueOrThrow
   */
  export type TrainingImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
    /**
     * Filter, which TrainingImages to fetch.
     */
    where: TrainingImagesWhereUniqueInput
  }

  /**
   * TrainingImages findFirst
   */
  export type TrainingImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
    /**
     * Filter, which TrainingImages to fetch.
     */
    where?: TrainingImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingImages to fetch.
     */
    orderBy?: TrainingImagesOrderByWithRelationInput | TrainingImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingImages.
     */
    cursor?: TrainingImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingImages.
     */
    distinct?: TrainingImagesScalarFieldEnum | TrainingImagesScalarFieldEnum[]
  }

  /**
   * TrainingImages findFirstOrThrow
   */
  export type TrainingImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
    /**
     * Filter, which TrainingImages to fetch.
     */
    where?: TrainingImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingImages to fetch.
     */
    orderBy?: TrainingImagesOrderByWithRelationInput | TrainingImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingImages.
     */
    cursor?: TrainingImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingImages.
     */
    distinct?: TrainingImagesScalarFieldEnum | TrainingImagesScalarFieldEnum[]
  }

  /**
   * TrainingImages findMany
   */
  export type TrainingImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
    /**
     * Filter, which TrainingImages to fetch.
     */
    where?: TrainingImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingImages to fetch.
     */
    orderBy?: TrainingImagesOrderByWithRelationInput | TrainingImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingImages.
     */
    cursor?: TrainingImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingImages.
     */
    skip?: number
    distinct?: TrainingImagesScalarFieldEnum | TrainingImagesScalarFieldEnum[]
  }

  /**
   * TrainingImages create
   */
  export type TrainingImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingImages.
     */
    data: XOR<TrainingImagesCreateInput, TrainingImagesUncheckedCreateInput>
  }

  /**
   * TrainingImages createMany
   */
  export type TrainingImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingImages.
     */
    data: TrainingImagesCreateManyInput | TrainingImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingImages createManyAndReturn
   */
  export type TrainingImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * The data used to create many TrainingImages.
     */
    data: TrainingImagesCreateManyInput | TrainingImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingImages update
   */
  export type TrainingImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingImages.
     */
    data: XOR<TrainingImagesUpdateInput, TrainingImagesUncheckedUpdateInput>
    /**
     * Choose, which TrainingImages to update.
     */
    where: TrainingImagesWhereUniqueInput
  }

  /**
   * TrainingImages updateMany
   */
  export type TrainingImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingImages.
     */
    data: XOR<TrainingImagesUpdateManyMutationInput, TrainingImagesUncheckedUpdateManyInput>
    /**
     * Filter which TrainingImages to update
     */
    where?: TrainingImagesWhereInput
    /**
     * Limit how many TrainingImages to update.
     */
    limit?: number
  }

  /**
   * TrainingImages updateManyAndReturn
   */
  export type TrainingImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * The data used to update TrainingImages.
     */
    data: XOR<TrainingImagesUpdateManyMutationInput, TrainingImagesUncheckedUpdateManyInput>
    /**
     * Filter which TrainingImages to update
     */
    where?: TrainingImagesWhereInput
    /**
     * Limit how many TrainingImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingImages upsert
   */
  export type TrainingImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingImages to update in case it exists.
     */
    where: TrainingImagesWhereUniqueInput
    /**
     * In case the TrainingImages found by the `where` argument doesn't exist, create a new TrainingImages with this data.
     */
    create: XOR<TrainingImagesCreateInput, TrainingImagesUncheckedCreateInput>
    /**
     * In case the TrainingImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingImagesUpdateInput, TrainingImagesUncheckedUpdateInput>
  }

  /**
   * TrainingImages delete
   */
  export type TrainingImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
    /**
     * Filter which TrainingImages to delete.
     */
    where: TrainingImagesWhereUniqueInput
  }

  /**
   * TrainingImages deleteMany
   */
  export type TrainingImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingImages to delete
     */
    where?: TrainingImagesWhereInput
    /**
     * Limit how many TrainingImages to delete.
     */
    limit?: number
  }

  /**
   * TrainingImages without action
   */
  export type TrainingImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingImages
     */
    select?: TrainingImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingImages
     */
    omit?: TrainingImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingImagesInclude<ExtArgs> | null
  }


  /**
   * Model OutputImage
   */

  export type AggregateOutputImage = {
    _count: OutputImageCountAggregateOutputType | null
    _min: OutputImageMinAggregateOutputType | null
    _max: OutputImageMaxAggregateOutputType | null
  }

  export type OutputImageMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    imageUrl: string | null
    status: $Enums.OutputImagesStatus | null
    modelId: string | null
    falaiRequestId: string | null
    falaiResponseId: string | null
  }

  export type OutputImageMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    imageUrl: string | null
    status: $Enums.OutputImagesStatus | null
    modelId: string | null
    falaiRequestId: string | null
    falaiResponseId: string | null
  }

  export type OutputImageCountAggregateOutputType = {
    id: number
    prompt: number
    imageUrl: number
    status: number
    modelId: number
    falaiRequestId: number
    falaiResponseId: number
    _all: number
  }


  export type OutputImageMinAggregateInputType = {
    id?: true
    prompt?: true
    imageUrl?: true
    status?: true
    modelId?: true
    falaiRequestId?: true
    falaiResponseId?: true
  }

  export type OutputImageMaxAggregateInputType = {
    id?: true
    prompt?: true
    imageUrl?: true
    status?: true
    modelId?: true
    falaiRequestId?: true
    falaiResponseId?: true
  }

  export type OutputImageCountAggregateInputType = {
    id?: true
    prompt?: true
    imageUrl?: true
    status?: true
    modelId?: true
    falaiRequestId?: true
    falaiResponseId?: true
    _all?: true
  }

  export type OutputImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutputImage to aggregate.
     */
    where?: OutputImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutputImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutputImages
    **/
    _count?: true | OutputImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutputImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutputImageMaxAggregateInputType
  }

  export type GetOutputImageAggregateType<T extends OutputImageAggregateArgs> = {
        [P in keyof T & keyof AggregateOutputImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutputImage[P]>
      : GetScalarType<T[P], AggregateOutputImage[P]>
  }




  export type OutputImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputImageWhereInput
    orderBy?: OutputImageOrderByWithAggregationInput | OutputImageOrderByWithAggregationInput[]
    by: OutputImageScalarFieldEnum[] | OutputImageScalarFieldEnum
    having?: OutputImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutputImageCountAggregateInputType | true
    _min?: OutputImageMinAggregateInputType
    _max?: OutputImageMaxAggregateInputType
  }

  export type OutputImageGroupByOutputType = {
    id: string
    prompt: string
    imageUrl: string
    status: $Enums.OutputImagesStatus
    modelId: string
    falaiRequestId: string | null
    falaiResponseId: string | null
    _count: OutputImageCountAggregateOutputType | null
    _min: OutputImageMinAggregateOutputType | null
    _max: OutputImageMaxAggregateOutputType | null
  }

  type GetOutputImageGroupByPayload<T extends OutputImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutputImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutputImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutputImageGroupByOutputType[P]>
            : GetScalarType<T[P], OutputImageGroupByOutputType[P]>
        }
      >
    >


  export type OutputImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    imageUrl?: boolean
    status?: boolean
    modelId?: boolean
    falaiRequestId?: boolean
    falaiResponseId?: boolean
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputImage"]>

  export type OutputImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    imageUrl?: boolean
    status?: boolean
    modelId?: boolean
    falaiRequestId?: boolean
    falaiResponseId?: boolean
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputImage"]>

  export type OutputImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    imageUrl?: boolean
    status?: boolean
    modelId?: boolean
    falaiRequestId?: boolean
    falaiResponseId?: boolean
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputImage"]>

  export type OutputImageSelectScalar = {
    id?: boolean
    prompt?: boolean
    imageUrl?: boolean
    status?: boolean
    modelId?: boolean
    falaiRequestId?: boolean
    falaiResponseId?: boolean
  }

  export type OutputImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "imageUrl" | "status" | "modelId" | "falaiRequestId" | "falaiResponseId", ExtArgs["result"]["outputImage"]>
  export type OutputImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }
  export type OutputImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }
  export type OutputImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modal?: boolean | ModalsDefaultArgs<ExtArgs>
  }

  export type $OutputImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutputImage"
    objects: {
      modal: Prisma.$ModalsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string
      imageUrl: string
      status: $Enums.OutputImagesStatus
      modelId: string
      falaiRequestId: string | null
      falaiResponseId: string | null
    }, ExtArgs["result"]["outputImage"]>
    composites: {}
  }

  type OutputImageGetPayload<S extends boolean | null | undefined | OutputImageDefaultArgs> = $Result.GetResult<Prisma.$OutputImagePayload, S>

  type OutputImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutputImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutputImageCountAggregateInputType | true
    }

  export interface OutputImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutputImage'], meta: { name: 'OutputImage' } }
    /**
     * Find zero or one OutputImage that matches the filter.
     * @param {OutputImageFindUniqueArgs} args - Arguments to find a OutputImage
     * @example
     * // Get one OutputImage
     * const outputImage = await prisma.outputImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutputImageFindUniqueArgs>(args: SelectSubset<T, OutputImageFindUniqueArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutputImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutputImageFindUniqueOrThrowArgs} args - Arguments to find a OutputImage
     * @example
     * // Get one OutputImage
     * const outputImage = await prisma.outputImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutputImageFindUniqueOrThrowArgs>(args: SelectSubset<T, OutputImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutputImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageFindFirstArgs} args - Arguments to find a OutputImage
     * @example
     * // Get one OutputImage
     * const outputImage = await prisma.outputImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutputImageFindFirstArgs>(args?: SelectSubset<T, OutputImageFindFirstArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutputImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageFindFirstOrThrowArgs} args - Arguments to find a OutputImage
     * @example
     * // Get one OutputImage
     * const outputImage = await prisma.outputImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutputImageFindFirstOrThrowArgs>(args?: SelectSubset<T, OutputImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutputImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutputImages
     * const outputImages = await prisma.outputImage.findMany()
     * 
     * // Get first 10 OutputImages
     * const outputImages = await prisma.outputImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outputImageWithIdOnly = await prisma.outputImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutputImageFindManyArgs>(args?: SelectSubset<T, OutputImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutputImage.
     * @param {OutputImageCreateArgs} args - Arguments to create a OutputImage.
     * @example
     * // Create one OutputImage
     * const OutputImage = await prisma.outputImage.create({
     *   data: {
     *     // ... data to create a OutputImage
     *   }
     * })
     * 
     */
    create<T extends OutputImageCreateArgs>(args: SelectSubset<T, OutputImageCreateArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutputImages.
     * @param {OutputImageCreateManyArgs} args - Arguments to create many OutputImages.
     * @example
     * // Create many OutputImages
     * const outputImage = await prisma.outputImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutputImageCreateManyArgs>(args?: SelectSubset<T, OutputImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutputImages and returns the data saved in the database.
     * @param {OutputImageCreateManyAndReturnArgs} args - Arguments to create many OutputImages.
     * @example
     * // Create many OutputImages
     * const outputImage = await prisma.outputImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutputImages and only return the `id`
     * const outputImageWithIdOnly = await prisma.outputImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutputImageCreateManyAndReturnArgs>(args?: SelectSubset<T, OutputImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutputImage.
     * @param {OutputImageDeleteArgs} args - Arguments to delete one OutputImage.
     * @example
     * // Delete one OutputImage
     * const OutputImage = await prisma.outputImage.delete({
     *   where: {
     *     // ... filter to delete one OutputImage
     *   }
     * })
     * 
     */
    delete<T extends OutputImageDeleteArgs>(args: SelectSubset<T, OutputImageDeleteArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutputImage.
     * @param {OutputImageUpdateArgs} args - Arguments to update one OutputImage.
     * @example
     * // Update one OutputImage
     * const outputImage = await prisma.outputImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutputImageUpdateArgs>(args: SelectSubset<T, OutputImageUpdateArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutputImages.
     * @param {OutputImageDeleteManyArgs} args - Arguments to filter OutputImages to delete.
     * @example
     * // Delete a few OutputImages
     * const { count } = await prisma.outputImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutputImageDeleteManyArgs>(args?: SelectSubset<T, OutputImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutputImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutputImages
     * const outputImage = await prisma.outputImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutputImageUpdateManyArgs>(args: SelectSubset<T, OutputImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutputImages and returns the data updated in the database.
     * @param {OutputImageUpdateManyAndReturnArgs} args - Arguments to update many OutputImages.
     * @example
     * // Update many OutputImages
     * const outputImage = await prisma.outputImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutputImages and only return the `id`
     * const outputImageWithIdOnly = await prisma.outputImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutputImageUpdateManyAndReturnArgs>(args: SelectSubset<T, OutputImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutputImage.
     * @param {OutputImageUpsertArgs} args - Arguments to update or create a OutputImage.
     * @example
     * // Update or create a OutputImage
     * const outputImage = await prisma.outputImage.upsert({
     *   create: {
     *     // ... data to create a OutputImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutputImage we want to update
     *   }
     * })
     */
    upsert<T extends OutputImageUpsertArgs>(args: SelectSubset<T, OutputImageUpsertArgs<ExtArgs>>): Prisma__OutputImageClient<$Result.GetResult<Prisma.$OutputImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutputImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageCountArgs} args - Arguments to filter OutputImages to count.
     * @example
     * // Count the number of OutputImages
     * const count = await prisma.outputImage.count({
     *   where: {
     *     // ... the filter for the OutputImages we want to count
     *   }
     * })
    **/
    count<T extends OutputImageCountArgs>(
      args?: Subset<T, OutputImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutputImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutputImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutputImageAggregateArgs>(args: Subset<T, OutputImageAggregateArgs>): Prisma.PrismaPromise<GetOutputImageAggregateType<T>>

    /**
     * Group by OutputImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutputImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutputImageGroupByArgs['orderBy'] }
        : { orderBy?: OutputImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutputImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutputImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutputImage model
   */
  readonly fields: OutputImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutputImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutputImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modal<T extends ModalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModalsDefaultArgs<ExtArgs>>): Prisma__ModalsClient<$Result.GetResult<Prisma.$ModalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutputImage model
   */
  interface OutputImageFieldRefs {
    readonly id: FieldRef<"OutputImage", 'String'>
    readonly prompt: FieldRef<"OutputImage", 'String'>
    readonly imageUrl: FieldRef<"OutputImage", 'String'>
    readonly status: FieldRef<"OutputImage", 'OutputImagesStatus'>
    readonly modelId: FieldRef<"OutputImage", 'String'>
    readonly falaiRequestId: FieldRef<"OutputImage", 'String'>
    readonly falaiResponseId: FieldRef<"OutputImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OutputImage findUnique
   */
  export type OutputImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter, which OutputImage to fetch.
     */
    where: OutputImageWhereUniqueInput
  }

  /**
   * OutputImage findUniqueOrThrow
   */
  export type OutputImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter, which OutputImage to fetch.
     */
    where: OutputImageWhereUniqueInput
  }

  /**
   * OutputImage findFirst
   */
  export type OutputImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter, which OutputImage to fetch.
     */
    where?: OutputImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutputImages.
     */
    cursor?: OutputImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutputImages.
     */
    distinct?: OutputImageScalarFieldEnum | OutputImageScalarFieldEnum[]
  }

  /**
   * OutputImage findFirstOrThrow
   */
  export type OutputImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter, which OutputImage to fetch.
     */
    where?: OutputImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutputImages.
     */
    cursor?: OutputImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutputImages.
     */
    distinct?: OutputImageScalarFieldEnum | OutputImageScalarFieldEnum[]
  }

  /**
   * OutputImage findMany
   */
  export type OutputImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter, which OutputImages to fetch.
     */
    where?: OutputImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImageOrderByWithRelationInput | OutputImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutputImages.
     */
    cursor?: OutputImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    distinct?: OutputImageScalarFieldEnum | OutputImageScalarFieldEnum[]
  }

  /**
   * OutputImage create
   */
  export type OutputImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * The data needed to create a OutputImage.
     */
    data: XOR<OutputImageCreateInput, OutputImageUncheckedCreateInput>
  }

  /**
   * OutputImage createMany
   */
  export type OutputImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutputImages.
     */
    data: OutputImageCreateManyInput | OutputImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutputImage createManyAndReturn
   */
  export type OutputImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * The data used to create many OutputImages.
     */
    data: OutputImageCreateManyInput | OutputImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutputImage update
   */
  export type OutputImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * The data needed to update a OutputImage.
     */
    data: XOR<OutputImageUpdateInput, OutputImageUncheckedUpdateInput>
    /**
     * Choose, which OutputImage to update.
     */
    where: OutputImageWhereUniqueInput
  }

  /**
   * OutputImage updateMany
   */
  export type OutputImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutputImages.
     */
    data: XOR<OutputImageUpdateManyMutationInput, OutputImageUncheckedUpdateManyInput>
    /**
     * Filter which OutputImages to update
     */
    where?: OutputImageWhereInput
    /**
     * Limit how many OutputImages to update.
     */
    limit?: number
  }

  /**
   * OutputImage updateManyAndReturn
   */
  export type OutputImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * The data used to update OutputImages.
     */
    data: XOR<OutputImageUpdateManyMutationInput, OutputImageUncheckedUpdateManyInput>
    /**
     * Filter which OutputImages to update
     */
    where?: OutputImageWhereInput
    /**
     * Limit how many OutputImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutputImage upsert
   */
  export type OutputImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * The filter to search for the OutputImage to update in case it exists.
     */
    where: OutputImageWhereUniqueInput
    /**
     * In case the OutputImage found by the `where` argument doesn't exist, create a new OutputImage with this data.
     */
    create: XOR<OutputImageCreateInput, OutputImageUncheckedCreateInput>
    /**
     * In case the OutputImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutputImageUpdateInput, OutputImageUncheckedUpdateInput>
  }

  /**
   * OutputImage delete
   */
  export type OutputImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
    /**
     * Filter which OutputImage to delete.
     */
    where: OutputImageWhereUniqueInput
  }

  /**
   * OutputImage deleteMany
   */
  export type OutputImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutputImages to delete
     */
    where?: OutputImageWhereInput
    /**
     * Limit how many OutputImages to delete.
     */
    limit?: number
  }

  /**
   * OutputImage without action
   */
  export type OutputImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImage
     */
    select?: OutputImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImage
     */
    omit?: OutputImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImageInclude<ExtArgs> | null
  }


  /**
   * Model Packs
   */

  export type AggregatePacks = {
    _count: PacksCountAggregateOutputType | null
    _min: PacksMinAggregateOutputType | null
    _max: PacksMaxAggregateOutputType | null
  }

  export type PacksMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PacksMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PacksCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PacksMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PacksMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PacksCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packs to aggregate.
     */
    where?: PacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PacksOrderByWithRelationInput | PacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packs
    **/
    _count?: true | PacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacksMaxAggregateInputType
  }

  export type GetPacksAggregateType<T extends PacksAggregateArgs> = {
        [P in keyof T & keyof AggregatePacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacks[P]>
      : GetScalarType<T[P], AggregatePacks[P]>
  }




  export type PacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacksWhereInput
    orderBy?: PacksOrderByWithAggregationInput | PacksOrderByWithAggregationInput[]
    by: PacksScalarFieldEnum[] | PacksScalarFieldEnum
    having?: PacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacksCountAggregateInputType | true
    _min?: PacksMinAggregateInputType
    _max?: PacksMaxAggregateInputType
  }

  export type PacksGroupByOutputType = {
    id: string
    name: string
    _count: PacksCountAggregateOutputType | null
    _min: PacksMinAggregateOutputType | null
    _max: PacksMaxAggregateOutputType | null
  }

  type GetPacksGroupByPayload<T extends PacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacksGroupByOutputType[P]>
            : GetScalarType<T[P], PacksGroupByOutputType[P]>
        }
      >
    >


  export type PacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    packPrompts?: boolean | Packs$packPromptsArgs<ExtArgs>
    _count?: boolean | PacksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packs"]>

  export type PacksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["packs"]>

  export type PacksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["packs"]>

  export type PacksSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["packs"]>
  export type PacksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packPrompts?: boolean | Packs$packPromptsArgs<ExtArgs>
    _count?: boolean | PacksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Packs"
    objects: {
      packPrompts: Prisma.$PackPromptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["packs"]>
    composites: {}
  }

  type PacksGetPayload<S extends boolean | null | undefined | PacksDefaultArgs> = $Result.GetResult<Prisma.$PacksPayload, S>

  type PacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacksCountAggregateInputType | true
    }

  export interface PacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Packs'], meta: { name: 'Packs' } }
    /**
     * Find zero or one Packs that matches the filter.
     * @param {PacksFindUniqueArgs} args - Arguments to find a Packs
     * @example
     * // Get one Packs
     * const packs = await prisma.packs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacksFindUniqueArgs>(args: SelectSubset<T, PacksFindUniqueArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Packs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacksFindUniqueOrThrowArgs} args - Arguments to find a Packs
     * @example
     * // Get one Packs
     * const packs = await prisma.packs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacksFindUniqueOrThrowArgs>(args: SelectSubset<T, PacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Packs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksFindFirstArgs} args - Arguments to find a Packs
     * @example
     * // Get one Packs
     * const packs = await prisma.packs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacksFindFirstArgs>(args?: SelectSubset<T, PacksFindFirstArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Packs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksFindFirstOrThrowArgs} args - Arguments to find a Packs
     * @example
     * // Get one Packs
     * const packs = await prisma.packs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacksFindFirstOrThrowArgs>(args?: SelectSubset<T, PacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packs
     * const packs = await prisma.packs.findMany()
     * 
     * // Get first 10 Packs
     * const packs = await prisma.packs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packsWithIdOnly = await prisma.packs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacksFindManyArgs>(args?: SelectSubset<T, PacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Packs.
     * @param {PacksCreateArgs} args - Arguments to create a Packs.
     * @example
     * // Create one Packs
     * const Packs = await prisma.packs.create({
     *   data: {
     *     // ... data to create a Packs
     *   }
     * })
     * 
     */
    create<T extends PacksCreateArgs>(args: SelectSubset<T, PacksCreateArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packs.
     * @param {PacksCreateManyArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const packs = await prisma.packs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacksCreateManyArgs>(args?: SelectSubset<T, PacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packs and returns the data saved in the database.
     * @param {PacksCreateManyAndReturnArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const packs = await prisma.packs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packs and only return the `id`
     * const packsWithIdOnly = await prisma.packs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacksCreateManyAndReturnArgs>(args?: SelectSubset<T, PacksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Packs.
     * @param {PacksDeleteArgs} args - Arguments to delete one Packs.
     * @example
     * // Delete one Packs
     * const Packs = await prisma.packs.delete({
     *   where: {
     *     // ... filter to delete one Packs
     *   }
     * })
     * 
     */
    delete<T extends PacksDeleteArgs>(args: SelectSubset<T, PacksDeleteArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Packs.
     * @param {PacksUpdateArgs} args - Arguments to update one Packs.
     * @example
     * // Update one Packs
     * const packs = await prisma.packs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacksUpdateArgs>(args: SelectSubset<T, PacksUpdateArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packs.
     * @param {PacksDeleteManyArgs} args - Arguments to filter Packs to delete.
     * @example
     * // Delete a few Packs
     * const { count } = await prisma.packs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacksDeleteManyArgs>(args?: SelectSubset<T, PacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packs
     * const packs = await prisma.packs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacksUpdateManyArgs>(args: SelectSubset<T, PacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs and returns the data updated in the database.
     * @param {PacksUpdateManyAndReturnArgs} args - Arguments to update many Packs.
     * @example
     * // Update many Packs
     * const packs = await prisma.packs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packs and only return the `id`
     * const packsWithIdOnly = await prisma.packs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PacksUpdateManyAndReturnArgs>(args: SelectSubset<T, PacksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Packs.
     * @param {PacksUpsertArgs} args - Arguments to update or create a Packs.
     * @example
     * // Update or create a Packs
     * const packs = await prisma.packs.upsert({
     *   create: {
     *     // ... data to create a Packs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Packs we want to update
     *   }
     * })
     */
    upsert<T extends PacksUpsertArgs>(args: SelectSubset<T, PacksUpsertArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksCountArgs} args - Arguments to filter Packs to count.
     * @example
     * // Count the number of Packs
     * const count = await prisma.packs.count({
     *   where: {
     *     // ... the filter for the Packs we want to count
     *   }
     * })
    **/
    count<T extends PacksCountArgs>(
      args?: Subset<T, PacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacksAggregateArgs>(args: Subset<T, PacksAggregateArgs>): Prisma.PrismaPromise<GetPacksAggregateType<T>>

    /**
     * Group by Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacksGroupByArgs['orderBy'] }
        : { orderBy?: PacksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Packs model
   */
  readonly fields: PacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Packs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    packPrompts<T extends Packs$packPromptsArgs<ExtArgs> = {}>(args?: Subset<T, Packs$packPromptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Packs model
   */
  interface PacksFieldRefs {
    readonly id: FieldRef<"Packs", 'String'>
    readonly name: FieldRef<"Packs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Packs findUnique
   */
  export type PacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where: PacksWhereUniqueInput
  }

  /**
   * Packs findUniqueOrThrow
   */
  export type PacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where: PacksWhereUniqueInput
  }

  /**
   * Packs findFirst
   */
  export type PacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where?: PacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PacksOrderByWithRelationInput | PacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PacksScalarFieldEnum | PacksScalarFieldEnum[]
  }

  /**
   * Packs findFirstOrThrow
   */
  export type PacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where?: PacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PacksOrderByWithRelationInput | PacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PacksScalarFieldEnum | PacksScalarFieldEnum[]
  }

  /**
   * Packs findMany
   */
  export type PacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where?: PacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PacksOrderByWithRelationInput | PacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packs.
     */
    cursor?: PacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    distinct?: PacksScalarFieldEnum | PacksScalarFieldEnum[]
  }

  /**
   * Packs create
   */
  export type PacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * The data needed to create a Packs.
     */
    data: XOR<PacksCreateInput, PacksUncheckedCreateInput>
  }

  /**
   * Packs createMany
   */
  export type PacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packs.
     */
    data: PacksCreateManyInput | PacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Packs createManyAndReturn
   */
  export type PacksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * The data used to create many Packs.
     */
    data: PacksCreateManyInput | PacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Packs update
   */
  export type PacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * The data needed to update a Packs.
     */
    data: XOR<PacksUpdateInput, PacksUncheckedUpdateInput>
    /**
     * Choose, which Packs to update.
     */
    where: PacksWhereUniqueInput
  }

  /**
   * Packs updateMany
   */
  export type PacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packs.
     */
    data: XOR<PacksUpdateManyMutationInput, PacksUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PacksWhereInput
    /**
     * Limit how many Packs to update.
     */
    limit?: number
  }

  /**
   * Packs updateManyAndReturn
   */
  export type PacksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * The data used to update Packs.
     */
    data: XOR<PacksUpdateManyMutationInput, PacksUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PacksWhereInput
    /**
     * Limit how many Packs to update.
     */
    limit?: number
  }

  /**
   * Packs upsert
   */
  export type PacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * The filter to search for the Packs to update in case it exists.
     */
    where: PacksWhereUniqueInput
    /**
     * In case the Packs found by the `where` argument doesn't exist, create a new Packs with this data.
     */
    create: XOR<PacksCreateInput, PacksUncheckedCreateInput>
    /**
     * In case the Packs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacksUpdateInput, PacksUncheckedUpdateInput>
  }

  /**
   * Packs delete
   */
  export type PacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter which Packs to delete.
     */
    where: PacksWhereUniqueInput
  }

  /**
   * Packs deleteMany
   */
  export type PacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packs to delete
     */
    where?: PacksWhereInput
    /**
     * Limit how many Packs to delete.
     */
    limit?: number
  }

  /**
   * Packs.packPrompts
   */
  export type Packs$packPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    where?: PackPromptWhereInput
    orderBy?: PackPromptOrderByWithRelationInput | PackPromptOrderByWithRelationInput[]
    cursor?: PackPromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackPromptScalarFieldEnum | PackPromptScalarFieldEnum[]
  }

  /**
   * Packs without action
   */
  export type PacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
  }


  /**
   * Model PackPrompt
   */

  export type AggregatePackPrompt = {
    _count: PackPromptCountAggregateOutputType | null
    _min: PackPromptMinAggregateOutputType | null
    _max: PackPromptMaxAggregateOutputType | null
  }

  export type PackPromptMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    packId: string | null
  }

  export type PackPromptMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    packId: string | null
  }

  export type PackPromptCountAggregateOutputType = {
    id: number
    prompt: number
    packId: number
    _all: number
  }


  export type PackPromptMinAggregateInputType = {
    id?: true
    prompt?: true
    packId?: true
  }

  export type PackPromptMaxAggregateInputType = {
    id?: true
    prompt?: true
    packId?: true
  }

  export type PackPromptCountAggregateInputType = {
    id?: true
    prompt?: true
    packId?: true
    _all?: true
  }

  export type PackPromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackPrompt to aggregate.
     */
    where?: PackPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptOrderByWithRelationInput | PackPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackPrompts
    **/
    _count?: true | PackPromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackPromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackPromptMaxAggregateInputType
  }

  export type GetPackPromptAggregateType<T extends PackPromptAggregateArgs> = {
        [P in keyof T & keyof AggregatePackPrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackPrompt[P]>
      : GetScalarType<T[P], AggregatePackPrompt[P]>
  }




  export type PackPromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackPromptWhereInput
    orderBy?: PackPromptOrderByWithAggregationInput | PackPromptOrderByWithAggregationInput[]
    by: PackPromptScalarFieldEnum[] | PackPromptScalarFieldEnum
    having?: PackPromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackPromptCountAggregateInputType | true
    _min?: PackPromptMinAggregateInputType
    _max?: PackPromptMaxAggregateInputType
  }

  export type PackPromptGroupByOutputType = {
    id: string
    prompt: string
    packId: string
    _count: PackPromptCountAggregateOutputType | null
    _min: PackPromptMinAggregateOutputType | null
    _max: PackPromptMaxAggregateOutputType | null
  }

  type GetPackPromptGroupByPayload<T extends PackPromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackPromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackPromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackPromptGroupByOutputType[P]>
            : GetScalarType<T[P], PackPromptGroupByOutputType[P]>
        }
      >
    >


  export type PackPromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    packId?: boolean
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packPrompt"]>

  export type PackPromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    packId?: boolean
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packPrompt"]>

  export type PackPromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    packId?: boolean
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packPrompt"]>

  export type PackPromptSelectScalar = {
    id?: boolean
    prompt?: boolean
    packId?: boolean
  }

  export type PackPromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "packId", ExtArgs["result"]["packPrompt"]>
  export type PackPromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }
  export type PackPromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }
  export type PackPromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }

  export type $PackPromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackPrompt"
    objects: {
      pack: Prisma.$PacksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string
      packId: string
    }, ExtArgs["result"]["packPrompt"]>
    composites: {}
  }

  type PackPromptGetPayload<S extends boolean | null | undefined | PackPromptDefaultArgs> = $Result.GetResult<Prisma.$PackPromptPayload, S>

  type PackPromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackPromptCountAggregateInputType | true
    }

  export interface PackPromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackPrompt'], meta: { name: 'PackPrompt' } }
    /**
     * Find zero or one PackPrompt that matches the filter.
     * @param {PackPromptFindUniqueArgs} args - Arguments to find a PackPrompt
     * @example
     * // Get one PackPrompt
     * const packPrompt = await prisma.packPrompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackPromptFindUniqueArgs>(args: SelectSubset<T, PackPromptFindUniqueArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackPrompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackPromptFindUniqueOrThrowArgs} args - Arguments to find a PackPrompt
     * @example
     * // Get one PackPrompt
     * const packPrompt = await prisma.packPrompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackPromptFindUniqueOrThrowArgs>(args: SelectSubset<T, PackPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackPrompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptFindFirstArgs} args - Arguments to find a PackPrompt
     * @example
     * // Get one PackPrompt
     * const packPrompt = await prisma.packPrompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackPromptFindFirstArgs>(args?: SelectSubset<T, PackPromptFindFirstArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackPrompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptFindFirstOrThrowArgs} args - Arguments to find a PackPrompt
     * @example
     * // Get one PackPrompt
     * const packPrompt = await prisma.packPrompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackPromptFindFirstOrThrowArgs>(args?: SelectSubset<T, PackPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackPrompts
     * const packPrompts = await prisma.packPrompt.findMany()
     * 
     * // Get first 10 PackPrompts
     * const packPrompts = await prisma.packPrompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packPromptWithIdOnly = await prisma.packPrompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackPromptFindManyArgs>(args?: SelectSubset<T, PackPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackPrompt.
     * @param {PackPromptCreateArgs} args - Arguments to create a PackPrompt.
     * @example
     * // Create one PackPrompt
     * const PackPrompt = await prisma.packPrompt.create({
     *   data: {
     *     // ... data to create a PackPrompt
     *   }
     * })
     * 
     */
    create<T extends PackPromptCreateArgs>(args: SelectSubset<T, PackPromptCreateArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackPrompts.
     * @param {PackPromptCreateManyArgs} args - Arguments to create many PackPrompts.
     * @example
     * // Create many PackPrompts
     * const packPrompt = await prisma.packPrompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackPromptCreateManyArgs>(args?: SelectSubset<T, PackPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PackPrompts and returns the data saved in the database.
     * @param {PackPromptCreateManyAndReturnArgs} args - Arguments to create many PackPrompts.
     * @example
     * // Create many PackPrompts
     * const packPrompt = await prisma.packPrompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PackPrompts and only return the `id`
     * const packPromptWithIdOnly = await prisma.packPrompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackPromptCreateManyAndReturnArgs>(args?: SelectSubset<T, PackPromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PackPrompt.
     * @param {PackPromptDeleteArgs} args - Arguments to delete one PackPrompt.
     * @example
     * // Delete one PackPrompt
     * const PackPrompt = await prisma.packPrompt.delete({
     *   where: {
     *     // ... filter to delete one PackPrompt
     *   }
     * })
     * 
     */
    delete<T extends PackPromptDeleteArgs>(args: SelectSubset<T, PackPromptDeleteArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackPrompt.
     * @param {PackPromptUpdateArgs} args - Arguments to update one PackPrompt.
     * @example
     * // Update one PackPrompt
     * const packPrompt = await prisma.packPrompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackPromptUpdateArgs>(args: SelectSubset<T, PackPromptUpdateArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackPrompts.
     * @param {PackPromptDeleteManyArgs} args - Arguments to filter PackPrompts to delete.
     * @example
     * // Delete a few PackPrompts
     * const { count } = await prisma.packPrompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackPromptDeleteManyArgs>(args?: SelectSubset<T, PackPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackPrompts
     * const packPrompt = await prisma.packPrompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackPromptUpdateManyArgs>(args: SelectSubset<T, PackPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackPrompts and returns the data updated in the database.
     * @param {PackPromptUpdateManyAndReturnArgs} args - Arguments to update many PackPrompts.
     * @example
     * // Update many PackPrompts
     * const packPrompt = await prisma.packPrompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PackPrompts and only return the `id`
     * const packPromptWithIdOnly = await prisma.packPrompt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PackPromptUpdateManyAndReturnArgs>(args: SelectSubset<T, PackPromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PackPrompt.
     * @param {PackPromptUpsertArgs} args - Arguments to update or create a PackPrompt.
     * @example
     * // Update or create a PackPrompt
     * const packPrompt = await prisma.packPrompt.upsert({
     *   create: {
     *     // ... data to create a PackPrompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackPrompt we want to update
     *   }
     * })
     */
    upsert<T extends PackPromptUpsertArgs>(args: SelectSubset<T, PackPromptUpsertArgs<ExtArgs>>): Prisma__PackPromptClient<$Result.GetResult<Prisma.$PackPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptCountArgs} args - Arguments to filter PackPrompts to count.
     * @example
     * // Count the number of PackPrompts
     * const count = await prisma.packPrompt.count({
     *   where: {
     *     // ... the filter for the PackPrompts we want to count
     *   }
     * })
    **/
    count<T extends PackPromptCountArgs>(
      args?: Subset<T, PackPromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackPromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackPromptAggregateArgs>(args: Subset<T, PackPromptAggregateArgs>): Prisma.PrismaPromise<GetPackPromptAggregateType<T>>

    /**
     * Group by PackPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackPromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackPromptGroupByArgs['orderBy'] }
        : { orderBy?: PackPromptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackPrompt model
   */
  readonly fields: PackPromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackPrompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackPromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pack<T extends PacksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacksDefaultArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PackPrompt model
   */
  interface PackPromptFieldRefs {
    readonly id: FieldRef<"PackPrompt", 'String'>
    readonly prompt: FieldRef<"PackPrompt", 'String'>
    readonly packId: FieldRef<"PackPrompt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PackPrompt findUnique
   */
  export type PackPromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompt to fetch.
     */
    where: PackPromptWhereUniqueInput
  }

  /**
   * PackPrompt findUniqueOrThrow
   */
  export type PackPromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompt to fetch.
     */
    where: PackPromptWhereUniqueInput
  }

  /**
   * PackPrompt findFirst
   */
  export type PackPromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompt to fetch.
     */
    where?: PackPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptOrderByWithRelationInput | PackPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackPrompts.
     */
    cursor?: PackPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackPrompts.
     */
    distinct?: PackPromptScalarFieldEnum | PackPromptScalarFieldEnum[]
  }

  /**
   * PackPrompt findFirstOrThrow
   */
  export type PackPromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompt to fetch.
     */
    where?: PackPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptOrderByWithRelationInput | PackPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackPrompts.
     */
    cursor?: PackPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackPrompts.
     */
    distinct?: PackPromptScalarFieldEnum | PackPromptScalarFieldEnum[]
  }

  /**
   * PackPrompt findMany
   */
  export type PackPromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompts to fetch.
     */
    where?: PackPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptOrderByWithRelationInput | PackPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackPrompts.
     */
    cursor?: PackPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    distinct?: PackPromptScalarFieldEnum | PackPromptScalarFieldEnum[]
  }

  /**
   * PackPrompt create
   */
  export type PackPromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * The data needed to create a PackPrompt.
     */
    data: XOR<PackPromptCreateInput, PackPromptUncheckedCreateInput>
  }

  /**
   * PackPrompt createMany
   */
  export type PackPromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackPrompts.
     */
    data: PackPromptCreateManyInput | PackPromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackPrompt createManyAndReturn
   */
  export type PackPromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * The data used to create many PackPrompts.
     */
    data: PackPromptCreateManyInput | PackPromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackPrompt update
   */
  export type PackPromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * The data needed to update a PackPrompt.
     */
    data: XOR<PackPromptUpdateInput, PackPromptUncheckedUpdateInput>
    /**
     * Choose, which PackPrompt to update.
     */
    where: PackPromptWhereUniqueInput
  }

  /**
   * PackPrompt updateMany
   */
  export type PackPromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackPrompts.
     */
    data: XOR<PackPromptUpdateManyMutationInput, PackPromptUncheckedUpdateManyInput>
    /**
     * Filter which PackPrompts to update
     */
    where?: PackPromptWhereInput
    /**
     * Limit how many PackPrompts to update.
     */
    limit?: number
  }

  /**
   * PackPrompt updateManyAndReturn
   */
  export type PackPromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * The data used to update PackPrompts.
     */
    data: XOR<PackPromptUpdateManyMutationInput, PackPromptUncheckedUpdateManyInput>
    /**
     * Filter which PackPrompts to update
     */
    where?: PackPromptWhereInput
    /**
     * Limit how many PackPrompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackPrompt upsert
   */
  export type PackPromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * The filter to search for the PackPrompt to update in case it exists.
     */
    where: PackPromptWhereUniqueInput
    /**
     * In case the PackPrompt found by the `where` argument doesn't exist, create a new PackPrompt with this data.
     */
    create: XOR<PackPromptCreateInput, PackPromptUncheckedCreateInput>
    /**
     * In case the PackPrompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackPromptUpdateInput, PackPromptUncheckedUpdateInput>
  }

  /**
   * PackPrompt delete
   */
  export type PackPromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
    /**
     * Filter which PackPrompt to delete.
     */
    where: PackPromptWhereUniqueInput
  }

  /**
   * PackPrompt deleteMany
   */
  export type PackPromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackPrompts to delete
     */
    where?: PackPromptWhereInput
    /**
     * Limit how many PackPrompts to delete.
     */
    limit?: number
  }

  /**
   * PackPrompt without action
   */
  export type PackPromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompt
     */
    select?: PackPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompt
     */
    omit?: PackPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ModalsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    age: 'age',
    ethnicity: 'ethnicity',
    eyeColor: 'eyeColor',
    Bald: 'Bald',
    zipUrl: 'zipUrl',
    triggerWord: 'triggerWord',
    tensorPath: 'tensorPath',
    status: 'status',
    falaiRequestId: 'falaiRequestId',
    falaiResponseId: 'falaiResponseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModalsScalarFieldEnum = (typeof ModalsScalarFieldEnum)[keyof typeof ModalsScalarFieldEnum]


  export const TrainingImagesScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    modelId: 'modelId'
  };

  export type TrainingImagesScalarFieldEnum = (typeof TrainingImagesScalarFieldEnum)[keyof typeof TrainingImagesScalarFieldEnum]


  export const OutputImageScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    imageUrl: 'imageUrl',
    status: 'status',
    modelId: 'modelId',
    falaiRequestId: 'falaiRequestId',
    falaiResponseId: 'falaiResponseId'
  };

  export type OutputImageScalarFieldEnum = (typeof OutputImageScalarFieldEnum)[keyof typeof OutputImageScalarFieldEnum]


  export const PacksScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PacksScalarFieldEnum = (typeof PacksScalarFieldEnum)[keyof typeof PacksScalarFieldEnum]


  export const PackPromptScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    packId: 'packId'
  };

  export type PackPromptScalarFieldEnum = (typeof PackPromptScalarFieldEnum)[keyof typeof PackPromptScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Ethnicity'
   */
  export type EnumEthnicityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Ethnicity'>
    


  /**
   * Reference to a field of type 'Ethnicity[]'
   */
  export type ListEnumEthnicityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Ethnicity[]'>
    


  /**
   * Reference to a field of type 'eyeColor'
   */
  export type EnumeyeColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'eyeColor'>
    


  /**
   * Reference to a field of type 'eyeColor[]'
   */
  export type ListEnumeyeColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'eyeColor[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ModelTrainingStatus'
   */
  export type EnumModelTrainingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelTrainingStatus'>
    


  /**
   * Reference to a field of type 'ModelTrainingStatus[]'
   */
  export type ListEnumModelTrainingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelTrainingStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OutputImagesStatus'
   */
  export type EnumOutputImagesStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutputImagesStatus'>
    


  /**
   * Reference to a field of type 'OutputImagesStatus[]'
   */
  export type ListEnumOutputImagesStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutputImagesStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type ModalsWhereInput = {
    AND?: ModalsWhereInput | ModalsWhereInput[]
    OR?: ModalsWhereInput[]
    NOT?: ModalsWhereInput | ModalsWhereInput[]
    id?: StringFilter<"Modals"> | string
    name?: StringFilter<"Modals"> | string
    type?: EnumGenderFilter<"Modals"> | $Enums.Gender
    age?: IntFilter<"Modals"> | number
    ethnicity?: EnumEthnicityFilter<"Modals"> | $Enums.Ethnicity
    eyeColor?: EnumeyeColorFilter<"Modals"> | $Enums.eyeColor
    Bald?: BoolFilter<"Modals"> | boolean
    zipUrl?: StringFilter<"Modals"> | string
    triggerWord?: StringNullableFilter<"Modals"> | string | null
    tensorPath?: StringNullableFilter<"Modals"> | string | null
    status?: EnumModelTrainingStatusNullableFilter<"Modals"> | $Enums.ModelTrainingStatus | null
    falaiRequestId?: StringNullableFilter<"Modals"> | string | null
    falaiResponseId?: StringNullableFilter<"Modals"> | string | null
    createdAt?: DateTimeFilter<"Modals"> | Date | string
    updatedAt?: DateTimeFilter<"Modals"> | Date | string
    images?: TrainingImagesListRelationFilter
    outputImages?: OutputImageListRelationFilter
  }

  export type ModalsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethnicity?: SortOrder
    eyeColor?: SortOrder
    Bald?: SortOrder
    zipUrl?: SortOrder
    triggerWord?: SortOrderInput | SortOrder
    tensorPath?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    falaiRequestId?: SortOrderInput | SortOrder
    falaiResponseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: TrainingImagesOrderByRelationAggregateInput
    outputImages?: OutputImageOrderByRelationAggregateInput
  }

  export type ModalsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    falaiRequestId?: string
    AND?: ModalsWhereInput | ModalsWhereInput[]
    OR?: ModalsWhereInput[]
    NOT?: ModalsWhereInput | ModalsWhereInput[]
    name?: StringFilter<"Modals"> | string
    type?: EnumGenderFilter<"Modals"> | $Enums.Gender
    age?: IntFilter<"Modals"> | number
    ethnicity?: EnumEthnicityFilter<"Modals"> | $Enums.Ethnicity
    eyeColor?: EnumeyeColorFilter<"Modals"> | $Enums.eyeColor
    Bald?: BoolFilter<"Modals"> | boolean
    zipUrl?: StringFilter<"Modals"> | string
    triggerWord?: StringNullableFilter<"Modals"> | string | null
    tensorPath?: StringNullableFilter<"Modals"> | string | null
    status?: EnumModelTrainingStatusNullableFilter<"Modals"> | $Enums.ModelTrainingStatus | null
    falaiResponseId?: StringNullableFilter<"Modals"> | string | null
    createdAt?: DateTimeFilter<"Modals"> | Date | string
    updatedAt?: DateTimeFilter<"Modals"> | Date | string
    images?: TrainingImagesListRelationFilter
    outputImages?: OutputImageListRelationFilter
  }, "id" | "falaiRequestId">

  export type ModalsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethnicity?: SortOrder
    eyeColor?: SortOrder
    Bald?: SortOrder
    zipUrl?: SortOrder
    triggerWord?: SortOrderInput | SortOrder
    tensorPath?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    falaiRequestId?: SortOrderInput | SortOrder
    falaiResponseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModalsCountOrderByAggregateInput
    _avg?: ModalsAvgOrderByAggregateInput
    _max?: ModalsMaxOrderByAggregateInput
    _min?: ModalsMinOrderByAggregateInput
    _sum?: ModalsSumOrderByAggregateInput
  }

  export type ModalsScalarWhereWithAggregatesInput = {
    AND?: ModalsScalarWhereWithAggregatesInput | ModalsScalarWhereWithAggregatesInput[]
    OR?: ModalsScalarWhereWithAggregatesInput[]
    NOT?: ModalsScalarWhereWithAggregatesInput | ModalsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Modals"> | string
    name?: StringWithAggregatesFilter<"Modals"> | string
    type?: EnumGenderWithAggregatesFilter<"Modals"> | $Enums.Gender
    age?: IntWithAggregatesFilter<"Modals"> | number
    ethnicity?: EnumEthnicityWithAggregatesFilter<"Modals"> | $Enums.Ethnicity
    eyeColor?: EnumeyeColorWithAggregatesFilter<"Modals"> | $Enums.eyeColor
    Bald?: BoolWithAggregatesFilter<"Modals"> | boolean
    zipUrl?: StringWithAggregatesFilter<"Modals"> | string
    triggerWord?: StringNullableWithAggregatesFilter<"Modals"> | string | null
    tensorPath?: StringNullableWithAggregatesFilter<"Modals"> | string | null
    status?: EnumModelTrainingStatusNullableWithAggregatesFilter<"Modals"> | $Enums.ModelTrainingStatus | null
    falaiRequestId?: StringNullableWithAggregatesFilter<"Modals"> | string | null
    falaiResponseId?: StringNullableWithAggregatesFilter<"Modals"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Modals"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Modals"> | Date | string
  }

  export type TrainingImagesWhereInput = {
    AND?: TrainingImagesWhereInput | TrainingImagesWhereInput[]
    OR?: TrainingImagesWhereInput[]
    NOT?: TrainingImagesWhereInput | TrainingImagesWhereInput[]
    id?: StringFilter<"TrainingImages"> | string
    imageUrl?: StringFilter<"TrainingImages"> | string
    modelId?: StringFilter<"TrainingImages"> | string
    modal?: XOR<ModalsScalarRelationFilter, ModalsWhereInput>
  }

  export type TrainingImagesOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    modelId?: SortOrder
    modal?: ModalsOrderByWithRelationInput
  }

  export type TrainingImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingImagesWhereInput | TrainingImagesWhereInput[]
    OR?: TrainingImagesWhereInput[]
    NOT?: TrainingImagesWhereInput | TrainingImagesWhereInput[]
    imageUrl?: StringFilter<"TrainingImages"> | string
    modelId?: StringFilter<"TrainingImages"> | string
    modal?: XOR<ModalsScalarRelationFilter, ModalsWhereInput>
  }, "id">

  export type TrainingImagesOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    modelId?: SortOrder
    _count?: TrainingImagesCountOrderByAggregateInput
    _max?: TrainingImagesMaxOrderByAggregateInput
    _min?: TrainingImagesMinOrderByAggregateInput
  }

  export type TrainingImagesScalarWhereWithAggregatesInput = {
    AND?: TrainingImagesScalarWhereWithAggregatesInput | TrainingImagesScalarWhereWithAggregatesInput[]
    OR?: TrainingImagesScalarWhereWithAggregatesInput[]
    NOT?: TrainingImagesScalarWhereWithAggregatesInput | TrainingImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainingImages"> | string
    imageUrl?: StringWithAggregatesFilter<"TrainingImages"> | string
    modelId?: StringWithAggregatesFilter<"TrainingImages"> | string
  }

  export type OutputImageWhereInput = {
    AND?: OutputImageWhereInput | OutputImageWhereInput[]
    OR?: OutputImageWhereInput[]
    NOT?: OutputImageWhereInput | OutputImageWhereInput[]
    id?: StringFilter<"OutputImage"> | string
    prompt?: StringFilter<"OutputImage"> | string
    imageUrl?: StringFilter<"OutputImage"> | string
    status?: EnumOutputImagesStatusFilter<"OutputImage"> | $Enums.OutputImagesStatus
    modelId?: StringFilter<"OutputImage"> | string
    falaiRequestId?: StringNullableFilter<"OutputImage"> | string | null
    falaiResponseId?: StringNullableFilter<"OutputImage"> | string | null
    modal?: XOR<ModalsScalarRelationFilter, ModalsWhereInput>
  }

  export type OutputImageOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    modelId?: SortOrder
    falaiRequestId?: SortOrderInput | SortOrder
    falaiResponseId?: SortOrderInput | SortOrder
    modal?: ModalsOrderByWithRelationInput
  }

  export type OutputImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    falaiRequestId?: string
    AND?: OutputImageWhereInput | OutputImageWhereInput[]
    OR?: OutputImageWhereInput[]
    NOT?: OutputImageWhereInput | OutputImageWhereInput[]
    prompt?: StringFilter<"OutputImage"> | string
    imageUrl?: StringFilter<"OutputImage"> | string
    status?: EnumOutputImagesStatusFilter<"OutputImage"> | $Enums.OutputImagesStatus
    modelId?: StringFilter<"OutputImage"> | string
    falaiResponseId?: StringNullableFilter<"OutputImage"> | string | null
    modal?: XOR<ModalsScalarRelationFilter, ModalsWhereInput>
  }, "id" | "falaiRequestId">

  export type OutputImageOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    modelId?: SortOrder
    falaiRequestId?: SortOrderInput | SortOrder
    falaiResponseId?: SortOrderInput | SortOrder
    _count?: OutputImageCountOrderByAggregateInput
    _max?: OutputImageMaxOrderByAggregateInput
    _min?: OutputImageMinOrderByAggregateInput
  }

  export type OutputImageScalarWhereWithAggregatesInput = {
    AND?: OutputImageScalarWhereWithAggregatesInput | OutputImageScalarWhereWithAggregatesInput[]
    OR?: OutputImageScalarWhereWithAggregatesInput[]
    NOT?: OutputImageScalarWhereWithAggregatesInput | OutputImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutputImage"> | string
    prompt?: StringWithAggregatesFilter<"OutputImage"> | string
    imageUrl?: StringWithAggregatesFilter<"OutputImage"> | string
    status?: EnumOutputImagesStatusWithAggregatesFilter<"OutputImage"> | $Enums.OutputImagesStatus
    modelId?: StringWithAggregatesFilter<"OutputImage"> | string
    falaiRequestId?: StringNullableWithAggregatesFilter<"OutputImage"> | string | null
    falaiResponseId?: StringNullableWithAggregatesFilter<"OutputImage"> | string | null
  }

  export type PacksWhereInput = {
    AND?: PacksWhereInput | PacksWhereInput[]
    OR?: PacksWhereInput[]
    NOT?: PacksWhereInput | PacksWhereInput[]
    id?: StringFilter<"Packs"> | string
    name?: StringFilter<"Packs"> | string
    packPrompts?: PackPromptListRelationFilter
  }

  export type PacksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    packPrompts?: PackPromptOrderByRelationAggregateInput
  }

  export type PacksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PacksWhereInput | PacksWhereInput[]
    OR?: PacksWhereInput[]
    NOT?: PacksWhereInput | PacksWhereInput[]
    name?: StringFilter<"Packs"> | string
    packPrompts?: PackPromptListRelationFilter
  }, "id">

  export type PacksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PacksCountOrderByAggregateInput
    _max?: PacksMaxOrderByAggregateInput
    _min?: PacksMinOrderByAggregateInput
  }

  export type PacksScalarWhereWithAggregatesInput = {
    AND?: PacksScalarWhereWithAggregatesInput | PacksScalarWhereWithAggregatesInput[]
    OR?: PacksScalarWhereWithAggregatesInput[]
    NOT?: PacksScalarWhereWithAggregatesInput | PacksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Packs"> | string
    name?: StringWithAggregatesFilter<"Packs"> | string
  }

  export type PackPromptWhereInput = {
    AND?: PackPromptWhereInput | PackPromptWhereInput[]
    OR?: PackPromptWhereInput[]
    NOT?: PackPromptWhereInput | PackPromptWhereInput[]
    id?: StringFilter<"PackPrompt"> | string
    prompt?: StringFilter<"PackPrompt"> | string
    packId?: StringFilter<"PackPrompt"> | string
    pack?: XOR<PacksScalarRelationFilter, PacksWhereInput>
  }

  export type PackPromptOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
    pack?: PacksOrderByWithRelationInput
  }

  export type PackPromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackPromptWhereInput | PackPromptWhereInput[]
    OR?: PackPromptWhereInput[]
    NOT?: PackPromptWhereInput | PackPromptWhereInput[]
    prompt?: StringFilter<"PackPrompt"> | string
    packId?: StringFilter<"PackPrompt"> | string
    pack?: XOR<PacksScalarRelationFilter, PacksWhereInput>
  }, "id">

  export type PackPromptOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
    _count?: PackPromptCountOrderByAggregateInput
    _max?: PackPromptMaxOrderByAggregateInput
    _min?: PackPromptMinOrderByAggregateInput
  }

  export type PackPromptScalarWhereWithAggregatesInput = {
    AND?: PackPromptScalarWhereWithAggregatesInput | PackPromptScalarWhereWithAggregatesInput[]
    OR?: PackPromptScalarWhereWithAggregatesInput[]
    NOT?: PackPromptScalarWhereWithAggregatesInput | PackPromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackPrompt"> | string
    prompt?: StringWithAggregatesFilter<"PackPrompt"> | string
    packId?: StringWithAggregatesFilter<"PackPrompt"> | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ModalsCreateInput = {
    id?: string
    name: string
    type: $Enums.Gender
    age: number
    ethnicity: $Enums.Ethnicity
    eyeColor: $Enums.eyeColor
    Bald: boolean
    zipUrl: string
    triggerWord?: string | null
    tensorPath?: string | null
    status?: $Enums.ModelTrainingStatus | null
    falaiRequestId?: string | null
    falaiResponseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: TrainingImagesCreateNestedManyWithoutModalInput
    outputImages?: OutputImageCreateNestedManyWithoutModalInput
  }

  export type ModalsUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.Gender
    age: number
    ethnicity: $Enums.Ethnicity
    eyeColor: $Enums.eyeColor
    Bald: boolean
    zipUrl: string
    triggerWord?: string | null
    tensorPath?: string | null
    status?: $Enums.ModelTrainingStatus | null
    falaiRequestId?: string | null
    falaiResponseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: TrainingImagesUncheckedCreateNestedManyWithoutModalInput
    outputImages?: OutputImageUncheckedCreateNestedManyWithoutModalInput
  }

  export type ModalsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    ethnicity?: EnumEthnicityFieldUpdateOperationsInput | $Enums.Ethnicity
    eyeColor?: EnumeyeColorFieldUpdateOperationsInput | $Enums.eyeColor
    Bald?: BoolFieldUpdateOperationsInput | boolean
    zipUrl?: StringFieldUpdateOperationsInput | string
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumModelTrainingStatusFieldUpdateOperationsInput | $Enums.ModelTrainingStatus | null
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: TrainingImagesUpdateManyWithoutModalNestedInput
    outputImages?: OutputImageUpdateManyWithoutModalNestedInput
  }

  export type ModalsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    ethnicity?: EnumEthnicityFieldUpdateOperationsInput | $Enums.Ethnicity
    eyeColor?: EnumeyeColorFieldUpdateOperationsInput | $Enums.eyeColor
    Bald?: BoolFieldUpdateOperationsInput | boolean
    zipUrl?: StringFieldUpdateOperationsInput | string
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumModelTrainingStatusFieldUpdateOperationsInput | $Enums.ModelTrainingStatus | null
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: TrainingImagesUncheckedUpdateManyWithoutModalNestedInput
    outputImages?: OutputImageUncheckedUpdateManyWithoutModalNestedInput
  }

  export type ModalsCreateManyInput = {
    id?: string
    name: string
    type: $Enums.Gender
    age: number
    ethnicity: $Enums.Ethnicity
    eyeColor: $Enums.eyeColor
    Bald: boolean
    zipUrl: string
    triggerWord?: string | null
    tensorPath?: string | null
    status?: $Enums.ModelTrainingStatus | null
    falaiRequestId?: string | null
    falaiResponseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModalsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    ethnicity?: EnumEthnicityFieldUpdateOperationsInput | $Enums.Ethnicity
    eyeColor?: EnumeyeColorFieldUpdateOperationsInput | $Enums.eyeColor
    Bald?: BoolFieldUpdateOperationsInput | boolean
    zipUrl?: StringFieldUpdateOperationsInput | string
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumModelTrainingStatusFieldUpdateOperationsInput | $Enums.ModelTrainingStatus | null
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModalsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    ethnicity?: EnumEthnicityFieldUpdateOperationsInput | $Enums.Ethnicity
    eyeColor?: EnumeyeColorFieldUpdateOperationsInput | $Enums.eyeColor
    Bald?: BoolFieldUpdateOperationsInput | boolean
    zipUrl?: StringFieldUpdateOperationsInput | string
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumModelTrainingStatusFieldUpdateOperationsInput | $Enums.ModelTrainingStatus | null
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingImagesCreateInput = {
    id?: string
    imageUrl: string
    modal: ModalsCreateNestedOneWithoutImagesInput
  }

  export type TrainingImagesUncheckedCreateInput = {
    id?: string
    imageUrl: string
    modelId: string
  }

  export type TrainingImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    modal?: ModalsUpdateOneRequiredWithoutImagesNestedInput
  }

  export type TrainingImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingImagesCreateManyInput = {
    id?: string
    imageUrl: string
    modelId: string
  }

  export type TrainingImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputImageCreateInput = {
    id?: string
    prompt: string
    imageUrl: string
    status?: $Enums.OutputImagesStatus
    falaiRequestId?: string | null
    falaiResponseId?: string | null
    modal: ModalsCreateNestedOneWithoutOutputImagesInput
  }

  export type OutputImageUncheckedCreateInput = {
    id?: string
    prompt: string
    imageUrl: string
    status?: $Enums.OutputImagesStatus
    modelId: string
    falaiRequestId?: string | null
    falaiResponseId?: string | null
  }

  export type OutputImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusFieldUpdateOperationsInput | $Enums.OutputImagesStatus
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
    modal?: ModalsUpdateOneRequiredWithoutOutputImagesNestedInput
  }

  export type OutputImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusFieldUpdateOperationsInput | $Enums.OutputImagesStatus
    modelId?: StringFieldUpdateOperationsInput | string
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputImageCreateManyInput = {
    id?: string
    prompt: string
    imageUrl: string
    status?: $Enums.OutputImagesStatus
    modelId: string
    falaiRequestId?: string | null
    falaiResponseId?: string | null
  }

  export type OutputImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusFieldUpdateOperationsInput | $Enums.OutputImagesStatus
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusFieldUpdateOperationsInput | $Enums.OutputImagesStatus
    modelId?: StringFieldUpdateOperationsInput | string
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacksCreateInput = {
    id?: string
    name: string
    packPrompts?: PackPromptCreateNestedManyWithoutPackInput
  }

  export type PacksUncheckedCreateInput = {
    id?: string
    name: string
    packPrompts?: PackPromptUncheckedCreateNestedManyWithoutPackInput
  }

  export type PacksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packPrompts?: PackPromptUpdateManyWithoutPackNestedInput
  }

  export type PacksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packPrompts?: PackPromptUncheckedUpdateManyWithoutPackNestedInput
  }

  export type PacksCreateManyInput = {
    id?: string
    name: string
  }

  export type PacksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PacksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptCreateInput = {
    id?: string
    prompt: string
    pack: PacksCreateNestedOneWithoutPackPromptsInput
  }

  export type PackPromptUncheckedCreateInput = {
    id?: string
    prompt: string
    packId: string
  }

  export type PackPromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    pack?: PacksUpdateOneRequiredWithoutPackPromptsNestedInput
  }

  export type PackPromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    packId?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptCreateManyInput = {
    id?: string
    prompt: string
    packId: string
  }

  export type PackPromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    packId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumEthnicityFilter<$PrismaModel = never> = {
    equals?: $Enums.Ethnicity | EnumEthnicityFieldRefInput<$PrismaModel>
    in?: $Enums.Ethnicity[] | ListEnumEthnicityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Ethnicity[] | ListEnumEthnicityFieldRefInput<$PrismaModel>
    not?: NestedEnumEthnicityFilter<$PrismaModel> | $Enums.Ethnicity
  }

  export type EnumeyeColorFilter<$PrismaModel = never> = {
    equals?: $Enums.eyeColor | EnumeyeColorFieldRefInput<$PrismaModel>
    in?: $Enums.eyeColor[] | ListEnumeyeColorFieldRefInput<$PrismaModel>
    notIn?: $Enums.eyeColor[] | ListEnumeyeColorFieldRefInput<$PrismaModel>
    not?: NestedEnumeyeColorFilter<$PrismaModel> | $Enums.eyeColor
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumModelTrainingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTrainingStatus | EnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModelTrainingStatus[] | ListEnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModelTrainingStatus[] | ListEnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModelTrainingStatusNullableFilter<$PrismaModel> | $Enums.ModelTrainingStatus | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TrainingImagesListRelationFilter = {
    every?: TrainingImagesWhereInput
    some?: TrainingImagesWhereInput
    none?: TrainingImagesWhereInput
  }

  export type OutputImageListRelationFilter = {
    every?: OutputImageWhereInput
    some?: OutputImageWhereInput
    none?: OutputImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrainingImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutputImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModalsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethnicity?: SortOrder
    eyeColor?: SortOrder
    Bald?: SortOrder
    zipUrl?: SortOrder
    triggerWord?: SortOrder
    tensorPath?: SortOrder
    status?: SortOrder
    falaiRequestId?: SortOrder
    falaiResponseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModalsAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type ModalsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethnicity?: SortOrder
    eyeColor?: SortOrder
    Bald?: SortOrder
    zipUrl?: SortOrder
    triggerWord?: SortOrder
    tensorPath?: SortOrder
    status?: SortOrder
    falaiRequestId?: SortOrder
    falaiResponseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModalsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethnicity?: SortOrder
    eyeColor?: SortOrder
    Bald?: SortOrder
    zipUrl?: SortOrder
    triggerWord?: SortOrder
    tensorPath?: SortOrder
    status?: SortOrder
    falaiRequestId?: SortOrder
    falaiResponseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModalsSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumEthnicityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Ethnicity | EnumEthnicityFieldRefInput<$PrismaModel>
    in?: $Enums.Ethnicity[] | ListEnumEthnicityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Ethnicity[] | ListEnumEthnicityFieldRefInput<$PrismaModel>
    not?: NestedEnumEthnicityWithAggregatesFilter<$PrismaModel> | $Enums.Ethnicity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEthnicityFilter<$PrismaModel>
    _max?: NestedEnumEthnicityFilter<$PrismaModel>
  }

  export type EnumeyeColorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.eyeColor | EnumeyeColorFieldRefInput<$PrismaModel>
    in?: $Enums.eyeColor[] | ListEnumeyeColorFieldRefInput<$PrismaModel>
    notIn?: $Enums.eyeColor[] | ListEnumeyeColorFieldRefInput<$PrismaModel>
    not?: NestedEnumeyeColorWithAggregatesFilter<$PrismaModel> | $Enums.eyeColor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumeyeColorFilter<$PrismaModel>
    _max?: NestedEnumeyeColorFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumModelTrainingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTrainingStatus | EnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModelTrainingStatus[] | ListEnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModelTrainingStatus[] | ListEnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModelTrainingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ModelTrainingStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumModelTrainingStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumModelTrainingStatusNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ModalsScalarRelationFilter = {
    is?: ModalsWhereInput
    isNot?: ModalsWhereInput
  }

  export type TrainingImagesCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    modelId?: SortOrder
  }

  export type TrainingImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    modelId?: SortOrder
  }

  export type TrainingImagesMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    modelId?: SortOrder
  }

  export type EnumOutputImagesStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImagesStatus | EnumOutputImagesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImagesStatus[] | ListEnumOutputImagesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImagesStatus[] | ListEnumOutputImagesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImagesStatusFilter<$PrismaModel> | $Enums.OutputImagesStatus
  }

  export type OutputImageCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    modelId?: SortOrder
    falaiRequestId?: SortOrder
    falaiResponseId?: SortOrder
  }

  export type OutputImageMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    modelId?: SortOrder
    falaiRequestId?: SortOrder
    falaiResponseId?: SortOrder
  }

  export type OutputImageMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    modelId?: SortOrder
    falaiRequestId?: SortOrder
    falaiResponseId?: SortOrder
  }

  export type EnumOutputImagesStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImagesStatus | EnumOutputImagesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImagesStatus[] | ListEnumOutputImagesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImagesStatus[] | ListEnumOutputImagesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImagesStatusWithAggregatesFilter<$PrismaModel> | $Enums.OutputImagesStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutputImagesStatusFilter<$PrismaModel>
    _max?: NestedEnumOutputImagesStatusFilter<$PrismaModel>
  }

  export type PackPromptListRelationFilter = {
    every?: PackPromptWhereInput
    some?: PackPromptWhereInput
    none?: PackPromptWhereInput
  }

  export type PackPromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PacksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PacksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PacksScalarRelationFilter = {
    is?: PacksWhereInput
    isNot?: PacksWhereInput
  }

  export type PackPromptCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
  }

  export type PackPromptMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
  }

  export type PackPromptMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TrainingImagesCreateNestedManyWithoutModalInput = {
    create?: XOR<TrainingImagesCreateWithoutModalInput, TrainingImagesUncheckedCreateWithoutModalInput> | TrainingImagesCreateWithoutModalInput[] | TrainingImagesUncheckedCreateWithoutModalInput[]
    connectOrCreate?: TrainingImagesCreateOrConnectWithoutModalInput | TrainingImagesCreateOrConnectWithoutModalInput[]
    createMany?: TrainingImagesCreateManyModalInputEnvelope
    connect?: TrainingImagesWhereUniqueInput | TrainingImagesWhereUniqueInput[]
  }

  export type OutputImageCreateNestedManyWithoutModalInput = {
    create?: XOR<OutputImageCreateWithoutModalInput, OutputImageUncheckedCreateWithoutModalInput> | OutputImageCreateWithoutModalInput[] | OutputImageUncheckedCreateWithoutModalInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutModalInput | OutputImageCreateOrConnectWithoutModalInput[]
    createMany?: OutputImageCreateManyModalInputEnvelope
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
  }

  export type TrainingImagesUncheckedCreateNestedManyWithoutModalInput = {
    create?: XOR<TrainingImagesCreateWithoutModalInput, TrainingImagesUncheckedCreateWithoutModalInput> | TrainingImagesCreateWithoutModalInput[] | TrainingImagesUncheckedCreateWithoutModalInput[]
    connectOrCreate?: TrainingImagesCreateOrConnectWithoutModalInput | TrainingImagesCreateOrConnectWithoutModalInput[]
    createMany?: TrainingImagesCreateManyModalInputEnvelope
    connect?: TrainingImagesWhereUniqueInput | TrainingImagesWhereUniqueInput[]
  }

  export type OutputImageUncheckedCreateNestedManyWithoutModalInput = {
    create?: XOR<OutputImageCreateWithoutModalInput, OutputImageUncheckedCreateWithoutModalInput> | OutputImageCreateWithoutModalInput[] | OutputImageUncheckedCreateWithoutModalInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutModalInput | OutputImageCreateOrConnectWithoutModalInput[]
    createMany?: OutputImageCreateManyModalInputEnvelope
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEthnicityFieldUpdateOperationsInput = {
    set?: $Enums.Ethnicity
  }

  export type EnumeyeColorFieldUpdateOperationsInput = {
    set?: $Enums.eyeColor
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumModelTrainingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ModelTrainingStatus | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TrainingImagesUpdateManyWithoutModalNestedInput = {
    create?: XOR<TrainingImagesCreateWithoutModalInput, TrainingImagesUncheckedCreateWithoutModalInput> | TrainingImagesCreateWithoutModalInput[] | TrainingImagesUncheckedCreateWithoutModalInput[]
    connectOrCreate?: TrainingImagesCreateOrConnectWithoutModalInput | TrainingImagesCreateOrConnectWithoutModalInput[]
    upsert?: TrainingImagesUpsertWithWhereUniqueWithoutModalInput | TrainingImagesUpsertWithWhereUniqueWithoutModalInput[]
    createMany?: TrainingImagesCreateManyModalInputEnvelope
    set?: TrainingImagesWhereUniqueInput | TrainingImagesWhereUniqueInput[]
    disconnect?: TrainingImagesWhereUniqueInput | TrainingImagesWhereUniqueInput[]
    delete?: TrainingImagesWhereUniqueInput | TrainingImagesWhereUniqueInput[]
    connect?: TrainingImagesWhereUniqueInput | TrainingImagesWhereUniqueInput[]
    update?: TrainingImagesUpdateWithWhereUniqueWithoutModalInput | TrainingImagesUpdateWithWhereUniqueWithoutModalInput[]
    updateMany?: TrainingImagesUpdateManyWithWhereWithoutModalInput | TrainingImagesUpdateManyWithWhereWithoutModalInput[]
    deleteMany?: TrainingImagesScalarWhereInput | TrainingImagesScalarWhereInput[]
  }

  export type OutputImageUpdateManyWithoutModalNestedInput = {
    create?: XOR<OutputImageCreateWithoutModalInput, OutputImageUncheckedCreateWithoutModalInput> | OutputImageCreateWithoutModalInput[] | OutputImageUncheckedCreateWithoutModalInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutModalInput | OutputImageCreateOrConnectWithoutModalInput[]
    upsert?: OutputImageUpsertWithWhereUniqueWithoutModalInput | OutputImageUpsertWithWhereUniqueWithoutModalInput[]
    createMany?: OutputImageCreateManyModalInputEnvelope
    set?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    disconnect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    delete?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    update?: OutputImageUpdateWithWhereUniqueWithoutModalInput | OutputImageUpdateWithWhereUniqueWithoutModalInput[]
    updateMany?: OutputImageUpdateManyWithWhereWithoutModalInput | OutputImageUpdateManyWithWhereWithoutModalInput[]
    deleteMany?: OutputImageScalarWhereInput | OutputImageScalarWhereInput[]
  }

  export type TrainingImagesUncheckedUpdateManyWithoutModalNestedInput = {
    create?: XOR<TrainingImagesCreateWithoutModalInput, TrainingImagesUncheckedCreateWithoutModalInput> | TrainingImagesCreateWithoutModalInput[] | TrainingImagesUncheckedCreateWithoutModalInput[]
    connectOrCreate?: TrainingImagesCreateOrConnectWithoutModalInput | TrainingImagesCreateOrConnectWithoutModalInput[]
    upsert?: TrainingImagesUpsertWithWhereUniqueWithoutModalInput | TrainingImagesUpsertWithWhereUniqueWithoutModalInput[]
    createMany?: TrainingImagesCreateManyModalInputEnvelope
    set?: TrainingImagesWhereUniqueInput | TrainingImagesWhereUniqueInput[]
    disconnect?: TrainingImagesWhereUniqueInput | TrainingImagesWhereUniqueInput[]
    delete?: TrainingImagesWhereUniqueInput | TrainingImagesWhereUniqueInput[]
    connect?: TrainingImagesWhereUniqueInput | TrainingImagesWhereUniqueInput[]
    update?: TrainingImagesUpdateWithWhereUniqueWithoutModalInput | TrainingImagesUpdateWithWhereUniqueWithoutModalInput[]
    updateMany?: TrainingImagesUpdateManyWithWhereWithoutModalInput | TrainingImagesUpdateManyWithWhereWithoutModalInput[]
    deleteMany?: TrainingImagesScalarWhereInput | TrainingImagesScalarWhereInput[]
  }

  export type OutputImageUncheckedUpdateManyWithoutModalNestedInput = {
    create?: XOR<OutputImageCreateWithoutModalInput, OutputImageUncheckedCreateWithoutModalInput> | OutputImageCreateWithoutModalInput[] | OutputImageUncheckedCreateWithoutModalInput[]
    connectOrCreate?: OutputImageCreateOrConnectWithoutModalInput | OutputImageCreateOrConnectWithoutModalInput[]
    upsert?: OutputImageUpsertWithWhereUniqueWithoutModalInput | OutputImageUpsertWithWhereUniqueWithoutModalInput[]
    createMany?: OutputImageCreateManyModalInputEnvelope
    set?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    disconnect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    delete?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    connect?: OutputImageWhereUniqueInput | OutputImageWhereUniqueInput[]
    update?: OutputImageUpdateWithWhereUniqueWithoutModalInput | OutputImageUpdateWithWhereUniqueWithoutModalInput[]
    updateMany?: OutputImageUpdateManyWithWhereWithoutModalInput | OutputImageUpdateManyWithWhereWithoutModalInput[]
    deleteMany?: OutputImageScalarWhereInput | OutputImageScalarWhereInput[]
  }

  export type ModalsCreateNestedOneWithoutImagesInput = {
    create?: XOR<ModalsCreateWithoutImagesInput, ModalsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ModalsCreateOrConnectWithoutImagesInput
    connect?: ModalsWhereUniqueInput
  }

  export type ModalsUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ModalsCreateWithoutImagesInput, ModalsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ModalsCreateOrConnectWithoutImagesInput
    upsert?: ModalsUpsertWithoutImagesInput
    connect?: ModalsWhereUniqueInput
    update?: XOR<XOR<ModalsUpdateToOneWithWhereWithoutImagesInput, ModalsUpdateWithoutImagesInput>, ModalsUncheckedUpdateWithoutImagesInput>
  }

  export type ModalsCreateNestedOneWithoutOutputImagesInput = {
    create?: XOR<ModalsCreateWithoutOutputImagesInput, ModalsUncheckedCreateWithoutOutputImagesInput>
    connectOrCreate?: ModalsCreateOrConnectWithoutOutputImagesInput
    connect?: ModalsWhereUniqueInput
  }

  export type EnumOutputImagesStatusFieldUpdateOperationsInput = {
    set?: $Enums.OutputImagesStatus
  }

  export type ModalsUpdateOneRequiredWithoutOutputImagesNestedInput = {
    create?: XOR<ModalsCreateWithoutOutputImagesInput, ModalsUncheckedCreateWithoutOutputImagesInput>
    connectOrCreate?: ModalsCreateOrConnectWithoutOutputImagesInput
    upsert?: ModalsUpsertWithoutOutputImagesInput
    connect?: ModalsWhereUniqueInput
    update?: XOR<XOR<ModalsUpdateToOneWithWhereWithoutOutputImagesInput, ModalsUpdateWithoutOutputImagesInput>, ModalsUncheckedUpdateWithoutOutputImagesInput>
  }

  export type PackPromptCreateNestedManyWithoutPackInput = {
    create?: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput> | PackPromptCreateWithoutPackInput[] | PackPromptUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptCreateOrConnectWithoutPackInput | PackPromptCreateOrConnectWithoutPackInput[]
    createMany?: PackPromptCreateManyPackInputEnvelope
    connect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
  }

  export type PackPromptUncheckedCreateNestedManyWithoutPackInput = {
    create?: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput> | PackPromptCreateWithoutPackInput[] | PackPromptUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptCreateOrConnectWithoutPackInput | PackPromptCreateOrConnectWithoutPackInput[]
    createMany?: PackPromptCreateManyPackInputEnvelope
    connect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
  }

  export type PackPromptUpdateManyWithoutPackNestedInput = {
    create?: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput> | PackPromptCreateWithoutPackInput[] | PackPromptUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptCreateOrConnectWithoutPackInput | PackPromptCreateOrConnectWithoutPackInput[]
    upsert?: PackPromptUpsertWithWhereUniqueWithoutPackInput | PackPromptUpsertWithWhereUniqueWithoutPackInput[]
    createMany?: PackPromptCreateManyPackInputEnvelope
    set?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    disconnect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    delete?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    connect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    update?: PackPromptUpdateWithWhereUniqueWithoutPackInput | PackPromptUpdateWithWhereUniqueWithoutPackInput[]
    updateMany?: PackPromptUpdateManyWithWhereWithoutPackInput | PackPromptUpdateManyWithWhereWithoutPackInput[]
    deleteMany?: PackPromptScalarWhereInput | PackPromptScalarWhereInput[]
  }

  export type PackPromptUncheckedUpdateManyWithoutPackNestedInput = {
    create?: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput> | PackPromptCreateWithoutPackInput[] | PackPromptUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptCreateOrConnectWithoutPackInput | PackPromptCreateOrConnectWithoutPackInput[]
    upsert?: PackPromptUpsertWithWhereUniqueWithoutPackInput | PackPromptUpsertWithWhereUniqueWithoutPackInput[]
    createMany?: PackPromptCreateManyPackInputEnvelope
    set?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    disconnect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    delete?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    connect?: PackPromptWhereUniqueInput | PackPromptWhereUniqueInput[]
    update?: PackPromptUpdateWithWhereUniqueWithoutPackInput | PackPromptUpdateWithWhereUniqueWithoutPackInput[]
    updateMany?: PackPromptUpdateManyWithWhereWithoutPackInput | PackPromptUpdateManyWithWhereWithoutPackInput[]
    deleteMany?: PackPromptScalarWhereInput | PackPromptScalarWhereInput[]
  }

  export type PacksCreateNestedOneWithoutPackPromptsInput = {
    create?: XOR<PacksCreateWithoutPackPromptsInput, PacksUncheckedCreateWithoutPackPromptsInput>
    connectOrCreate?: PacksCreateOrConnectWithoutPackPromptsInput
    connect?: PacksWhereUniqueInput
  }

  export type PacksUpdateOneRequiredWithoutPackPromptsNestedInput = {
    create?: XOR<PacksCreateWithoutPackPromptsInput, PacksUncheckedCreateWithoutPackPromptsInput>
    connectOrCreate?: PacksCreateOrConnectWithoutPackPromptsInput
    upsert?: PacksUpsertWithoutPackPromptsInput
    connect?: PacksWhereUniqueInput
    update?: XOR<XOR<PacksUpdateToOneWithWhereWithoutPackPromptsInput, PacksUpdateWithoutPackPromptsInput>, PacksUncheckedUpdateWithoutPackPromptsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumEthnicityFilter<$PrismaModel = never> = {
    equals?: $Enums.Ethnicity | EnumEthnicityFieldRefInput<$PrismaModel>
    in?: $Enums.Ethnicity[] | ListEnumEthnicityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Ethnicity[] | ListEnumEthnicityFieldRefInput<$PrismaModel>
    not?: NestedEnumEthnicityFilter<$PrismaModel> | $Enums.Ethnicity
  }

  export type NestedEnumeyeColorFilter<$PrismaModel = never> = {
    equals?: $Enums.eyeColor | EnumeyeColorFieldRefInput<$PrismaModel>
    in?: $Enums.eyeColor[] | ListEnumeyeColorFieldRefInput<$PrismaModel>
    notIn?: $Enums.eyeColor[] | ListEnumeyeColorFieldRefInput<$PrismaModel>
    not?: NestedEnumeyeColorFilter<$PrismaModel> | $Enums.eyeColor
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumModelTrainingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTrainingStatus | EnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModelTrainingStatus[] | ListEnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModelTrainingStatus[] | ListEnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModelTrainingStatusNullableFilter<$PrismaModel> | $Enums.ModelTrainingStatus | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumEthnicityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Ethnicity | EnumEthnicityFieldRefInput<$PrismaModel>
    in?: $Enums.Ethnicity[] | ListEnumEthnicityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Ethnicity[] | ListEnumEthnicityFieldRefInput<$PrismaModel>
    not?: NestedEnumEthnicityWithAggregatesFilter<$PrismaModel> | $Enums.Ethnicity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEthnicityFilter<$PrismaModel>
    _max?: NestedEnumEthnicityFilter<$PrismaModel>
  }

  export type NestedEnumeyeColorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.eyeColor | EnumeyeColorFieldRefInput<$PrismaModel>
    in?: $Enums.eyeColor[] | ListEnumeyeColorFieldRefInput<$PrismaModel>
    notIn?: $Enums.eyeColor[] | ListEnumeyeColorFieldRefInput<$PrismaModel>
    not?: NestedEnumeyeColorWithAggregatesFilter<$PrismaModel> | $Enums.eyeColor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumeyeColorFilter<$PrismaModel>
    _max?: NestedEnumeyeColorFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumModelTrainingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTrainingStatus | EnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModelTrainingStatus[] | ListEnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModelTrainingStatus[] | ListEnumModelTrainingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModelTrainingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ModelTrainingStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumModelTrainingStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumModelTrainingStatusNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOutputImagesStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImagesStatus | EnumOutputImagesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImagesStatus[] | ListEnumOutputImagesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImagesStatus[] | ListEnumOutputImagesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImagesStatusFilter<$PrismaModel> | $Enums.OutputImagesStatus
  }

  export type NestedEnumOutputImagesStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImagesStatus | EnumOutputImagesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImagesStatus[] | ListEnumOutputImagesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImagesStatus[] | ListEnumOutputImagesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImagesStatusWithAggregatesFilter<$PrismaModel> | $Enums.OutputImagesStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutputImagesStatusFilter<$PrismaModel>
    _max?: NestedEnumOutputImagesStatusFilter<$PrismaModel>
  }

  export type TrainingImagesCreateWithoutModalInput = {
    id?: string
    imageUrl: string
  }

  export type TrainingImagesUncheckedCreateWithoutModalInput = {
    id?: string
    imageUrl: string
  }

  export type TrainingImagesCreateOrConnectWithoutModalInput = {
    where: TrainingImagesWhereUniqueInput
    create: XOR<TrainingImagesCreateWithoutModalInput, TrainingImagesUncheckedCreateWithoutModalInput>
  }

  export type TrainingImagesCreateManyModalInputEnvelope = {
    data: TrainingImagesCreateManyModalInput | TrainingImagesCreateManyModalInput[]
    skipDuplicates?: boolean
  }

  export type OutputImageCreateWithoutModalInput = {
    id?: string
    prompt: string
    imageUrl: string
    status?: $Enums.OutputImagesStatus
    falaiRequestId?: string | null
    falaiResponseId?: string | null
  }

  export type OutputImageUncheckedCreateWithoutModalInput = {
    id?: string
    prompt: string
    imageUrl: string
    status?: $Enums.OutputImagesStatus
    falaiRequestId?: string | null
    falaiResponseId?: string | null
  }

  export type OutputImageCreateOrConnectWithoutModalInput = {
    where: OutputImageWhereUniqueInput
    create: XOR<OutputImageCreateWithoutModalInput, OutputImageUncheckedCreateWithoutModalInput>
  }

  export type OutputImageCreateManyModalInputEnvelope = {
    data: OutputImageCreateManyModalInput | OutputImageCreateManyModalInput[]
    skipDuplicates?: boolean
  }

  export type TrainingImagesUpsertWithWhereUniqueWithoutModalInput = {
    where: TrainingImagesWhereUniqueInput
    update: XOR<TrainingImagesUpdateWithoutModalInput, TrainingImagesUncheckedUpdateWithoutModalInput>
    create: XOR<TrainingImagesCreateWithoutModalInput, TrainingImagesUncheckedCreateWithoutModalInput>
  }

  export type TrainingImagesUpdateWithWhereUniqueWithoutModalInput = {
    where: TrainingImagesWhereUniqueInput
    data: XOR<TrainingImagesUpdateWithoutModalInput, TrainingImagesUncheckedUpdateWithoutModalInput>
  }

  export type TrainingImagesUpdateManyWithWhereWithoutModalInput = {
    where: TrainingImagesScalarWhereInput
    data: XOR<TrainingImagesUpdateManyMutationInput, TrainingImagesUncheckedUpdateManyWithoutModalInput>
  }

  export type TrainingImagesScalarWhereInput = {
    AND?: TrainingImagesScalarWhereInput | TrainingImagesScalarWhereInput[]
    OR?: TrainingImagesScalarWhereInput[]
    NOT?: TrainingImagesScalarWhereInput | TrainingImagesScalarWhereInput[]
    id?: StringFilter<"TrainingImages"> | string
    imageUrl?: StringFilter<"TrainingImages"> | string
    modelId?: StringFilter<"TrainingImages"> | string
  }

  export type OutputImageUpsertWithWhereUniqueWithoutModalInput = {
    where: OutputImageWhereUniqueInput
    update: XOR<OutputImageUpdateWithoutModalInput, OutputImageUncheckedUpdateWithoutModalInput>
    create: XOR<OutputImageCreateWithoutModalInput, OutputImageUncheckedCreateWithoutModalInput>
  }

  export type OutputImageUpdateWithWhereUniqueWithoutModalInput = {
    where: OutputImageWhereUniqueInput
    data: XOR<OutputImageUpdateWithoutModalInput, OutputImageUncheckedUpdateWithoutModalInput>
  }

  export type OutputImageUpdateManyWithWhereWithoutModalInput = {
    where: OutputImageScalarWhereInput
    data: XOR<OutputImageUpdateManyMutationInput, OutputImageUncheckedUpdateManyWithoutModalInput>
  }

  export type OutputImageScalarWhereInput = {
    AND?: OutputImageScalarWhereInput | OutputImageScalarWhereInput[]
    OR?: OutputImageScalarWhereInput[]
    NOT?: OutputImageScalarWhereInput | OutputImageScalarWhereInput[]
    id?: StringFilter<"OutputImage"> | string
    prompt?: StringFilter<"OutputImage"> | string
    imageUrl?: StringFilter<"OutputImage"> | string
    status?: EnumOutputImagesStatusFilter<"OutputImage"> | $Enums.OutputImagesStatus
    modelId?: StringFilter<"OutputImage"> | string
    falaiRequestId?: StringNullableFilter<"OutputImage"> | string | null
    falaiResponseId?: StringNullableFilter<"OutputImage"> | string | null
  }

  export type ModalsCreateWithoutImagesInput = {
    id?: string
    name: string
    type: $Enums.Gender
    age: number
    ethnicity: $Enums.Ethnicity
    eyeColor: $Enums.eyeColor
    Bald: boolean
    zipUrl: string
    triggerWord?: string | null
    tensorPath?: string | null
    status?: $Enums.ModelTrainingStatus | null
    falaiRequestId?: string | null
    falaiResponseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outputImages?: OutputImageCreateNestedManyWithoutModalInput
  }

  export type ModalsUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    type: $Enums.Gender
    age: number
    ethnicity: $Enums.Ethnicity
    eyeColor: $Enums.eyeColor
    Bald: boolean
    zipUrl: string
    triggerWord?: string | null
    tensorPath?: string | null
    status?: $Enums.ModelTrainingStatus | null
    falaiRequestId?: string | null
    falaiResponseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outputImages?: OutputImageUncheckedCreateNestedManyWithoutModalInput
  }

  export type ModalsCreateOrConnectWithoutImagesInput = {
    where: ModalsWhereUniqueInput
    create: XOR<ModalsCreateWithoutImagesInput, ModalsUncheckedCreateWithoutImagesInput>
  }

  export type ModalsUpsertWithoutImagesInput = {
    update: XOR<ModalsUpdateWithoutImagesInput, ModalsUncheckedUpdateWithoutImagesInput>
    create: XOR<ModalsCreateWithoutImagesInput, ModalsUncheckedCreateWithoutImagesInput>
    where?: ModalsWhereInput
  }

  export type ModalsUpdateToOneWithWhereWithoutImagesInput = {
    where?: ModalsWhereInput
    data: XOR<ModalsUpdateWithoutImagesInput, ModalsUncheckedUpdateWithoutImagesInput>
  }

  export type ModalsUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    ethnicity?: EnumEthnicityFieldUpdateOperationsInput | $Enums.Ethnicity
    eyeColor?: EnumeyeColorFieldUpdateOperationsInput | $Enums.eyeColor
    Bald?: BoolFieldUpdateOperationsInput | boolean
    zipUrl?: StringFieldUpdateOperationsInput | string
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumModelTrainingStatusFieldUpdateOperationsInput | $Enums.ModelTrainingStatus | null
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outputImages?: OutputImageUpdateManyWithoutModalNestedInput
  }

  export type ModalsUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    ethnicity?: EnumEthnicityFieldUpdateOperationsInput | $Enums.Ethnicity
    eyeColor?: EnumeyeColorFieldUpdateOperationsInput | $Enums.eyeColor
    Bald?: BoolFieldUpdateOperationsInput | boolean
    zipUrl?: StringFieldUpdateOperationsInput | string
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumModelTrainingStatusFieldUpdateOperationsInput | $Enums.ModelTrainingStatus | null
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outputImages?: OutputImageUncheckedUpdateManyWithoutModalNestedInput
  }

  export type ModalsCreateWithoutOutputImagesInput = {
    id?: string
    name: string
    type: $Enums.Gender
    age: number
    ethnicity: $Enums.Ethnicity
    eyeColor: $Enums.eyeColor
    Bald: boolean
    zipUrl: string
    triggerWord?: string | null
    tensorPath?: string | null
    status?: $Enums.ModelTrainingStatus | null
    falaiRequestId?: string | null
    falaiResponseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: TrainingImagesCreateNestedManyWithoutModalInput
  }

  export type ModalsUncheckedCreateWithoutOutputImagesInput = {
    id?: string
    name: string
    type: $Enums.Gender
    age: number
    ethnicity: $Enums.Ethnicity
    eyeColor: $Enums.eyeColor
    Bald: boolean
    zipUrl: string
    triggerWord?: string | null
    tensorPath?: string | null
    status?: $Enums.ModelTrainingStatus | null
    falaiRequestId?: string | null
    falaiResponseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: TrainingImagesUncheckedCreateNestedManyWithoutModalInput
  }

  export type ModalsCreateOrConnectWithoutOutputImagesInput = {
    where: ModalsWhereUniqueInput
    create: XOR<ModalsCreateWithoutOutputImagesInput, ModalsUncheckedCreateWithoutOutputImagesInput>
  }

  export type ModalsUpsertWithoutOutputImagesInput = {
    update: XOR<ModalsUpdateWithoutOutputImagesInput, ModalsUncheckedUpdateWithoutOutputImagesInput>
    create: XOR<ModalsCreateWithoutOutputImagesInput, ModalsUncheckedCreateWithoutOutputImagesInput>
    where?: ModalsWhereInput
  }

  export type ModalsUpdateToOneWithWhereWithoutOutputImagesInput = {
    where?: ModalsWhereInput
    data: XOR<ModalsUpdateWithoutOutputImagesInput, ModalsUncheckedUpdateWithoutOutputImagesInput>
  }

  export type ModalsUpdateWithoutOutputImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    ethnicity?: EnumEthnicityFieldUpdateOperationsInput | $Enums.Ethnicity
    eyeColor?: EnumeyeColorFieldUpdateOperationsInput | $Enums.eyeColor
    Bald?: BoolFieldUpdateOperationsInput | boolean
    zipUrl?: StringFieldUpdateOperationsInput | string
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumModelTrainingStatusFieldUpdateOperationsInput | $Enums.ModelTrainingStatus | null
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: TrainingImagesUpdateManyWithoutModalNestedInput
  }

  export type ModalsUncheckedUpdateWithoutOutputImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    ethnicity?: EnumEthnicityFieldUpdateOperationsInput | $Enums.Ethnicity
    eyeColor?: EnumeyeColorFieldUpdateOperationsInput | $Enums.eyeColor
    Bald?: BoolFieldUpdateOperationsInput | boolean
    zipUrl?: StringFieldUpdateOperationsInput | string
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumModelTrainingStatusFieldUpdateOperationsInput | $Enums.ModelTrainingStatus | null
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: TrainingImagesUncheckedUpdateManyWithoutModalNestedInput
  }

  export type PackPromptCreateWithoutPackInput = {
    id?: string
    prompt: string
  }

  export type PackPromptUncheckedCreateWithoutPackInput = {
    id?: string
    prompt: string
  }

  export type PackPromptCreateOrConnectWithoutPackInput = {
    where: PackPromptWhereUniqueInput
    create: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput>
  }

  export type PackPromptCreateManyPackInputEnvelope = {
    data: PackPromptCreateManyPackInput | PackPromptCreateManyPackInput[]
    skipDuplicates?: boolean
  }

  export type PackPromptUpsertWithWhereUniqueWithoutPackInput = {
    where: PackPromptWhereUniqueInput
    update: XOR<PackPromptUpdateWithoutPackInput, PackPromptUncheckedUpdateWithoutPackInput>
    create: XOR<PackPromptCreateWithoutPackInput, PackPromptUncheckedCreateWithoutPackInput>
  }

  export type PackPromptUpdateWithWhereUniqueWithoutPackInput = {
    where: PackPromptWhereUniqueInput
    data: XOR<PackPromptUpdateWithoutPackInput, PackPromptUncheckedUpdateWithoutPackInput>
  }

  export type PackPromptUpdateManyWithWhereWithoutPackInput = {
    where: PackPromptScalarWhereInput
    data: XOR<PackPromptUpdateManyMutationInput, PackPromptUncheckedUpdateManyWithoutPackInput>
  }

  export type PackPromptScalarWhereInput = {
    AND?: PackPromptScalarWhereInput | PackPromptScalarWhereInput[]
    OR?: PackPromptScalarWhereInput[]
    NOT?: PackPromptScalarWhereInput | PackPromptScalarWhereInput[]
    id?: StringFilter<"PackPrompt"> | string
    prompt?: StringFilter<"PackPrompt"> | string
    packId?: StringFilter<"PackPrompt"> | string
  }

  export type PacksCreateWithoutPackPromptsInput = {
    id?: string
    name: string
  }

  export type PacksUncheckedCreateWithoutPackPromptsInput = {
    id?: string
    name: string
  }

  export type PacksCreateOrConnectWithoutPackPromptsInput = {
    where: PacksWhereUniqueInput
    create: XOR<PacksCreateWithoutPackPromptsInput, PacksUncheckedCreateWithoutPackPromptsInput>
  }

  export type PacksUpsertWithoutPackPromptsInput = {
    update: XOR<PacksUpdateWithoutPackPromptsInput, PacksUncheckedUpdateWithoutPackPromptsInput>
    create: XOR<PacksCreateWithoutPackPromptsInput, PacksUncheckedCreateWithoutPackPromptsInput>
    where?: PacksWhereInput
  }

  export type PacksUpdateToOneWithWhereWithoutPackPromptsInput = {
    where?: PacksWhereInput
    data: XOR<PacksUpdateWithoutPackPromptsInput, PacksUncheckedUpdateWithoutPackPromptsInput>
  }

  export type PacksUpdateWithoutPackPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PacksUncheckedUpdateWithoutPackPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingImagesCreateManyModalInput = {
    id?: string
    imageUrl: string
  }

  export type OutputImageCreateManyModalInput = {
    id?: string
    prompt: string
    imageUrl: string
    status?: $Enums.OutputImagesStatus
    falaiRequestId?: string | null
    falaiResponseId?: string | null
  }

  export type TrainingImagesUpdateWithoutModalInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingImagesUncheckedUpdateWithoutModalInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingImagesUncheckedUpdateManyWithoutModalInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type OutputImageUpdateWithoutModalInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusFieldUpdateOperationsInput | $Enums.OutputImagesStatus
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputImageUncheckedUpdateWithoutModalInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusFieldUpdateOperationsInput | $Enums.OutputImagesStatus
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputImageUncheckedUpdateManyWithoutModalInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusFieldUpdateOperationsInput | $Enums.OutputImagesStatus
    falaiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    falaiResponseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackPromptCreateManyPackInput = {
    id?: string
    prompt: string
  }

  export type PackPromptUpdateWithoutPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptUncheckedUpdateWithoutPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptUncheckedUpdateManyWithoutPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}