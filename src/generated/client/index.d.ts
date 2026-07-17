
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model ShipmentStep
 * 
 */
export type ShipmentStep = $Result.DefaultSelection<Prisma.$ShipmentStepPayload>
/**
 * Model MarketSignal
 * 
 */
export type MarketSignal = $Result.DefaultSelection<Prisma.$MarketSignalPayload>
/**
 * Model PricingRecommendation
 * 
 */
export type PricingRecommendation = $Result.DefaultSelection<Prisma.$PricingRecommendationPayload>
/**
 * Model StructuralRisk
 * 
 */
export type StructuralRisk = $Result.DefaultSelection<Prisma.$StructuralRiskPayload>
/**
 * Model IndustryNews
 * 
 */
export type IndustryNews = $Result.DefaultSelection<Prisma.$IndustryNewsPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model CncMachineTelemetry
 * 
 */
export type CncMachineTelemetry = $Result.DefaultSelection<Prisma.$CncMachineTelemetryPayload>
/**
 * Model IndianMetalIndex
 * 
 */
export type IndianMetalIndex = $Result.DefaultSelection<Prisma.$IndianMetalIndexPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Materials
 * const materials = await prisma.material.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Materials
   * const materials = await prisma.material.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentStep`: Exposes CRUD operations for the **ShipmentStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentSteps
    * const shipmentSteps = await prisma.shipmentStep.findMany()
    * ```
    */
  get shipmentStep(): Prisma.ShipmentStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketSignal`: Exposes CRUD operations for the **MarketSignal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketSignals
    * const marketSignals = await prisma.marketSignal.findMany()
    * ```
    */
  get marketSignal(): Prisma.MarketSignalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingRecommendation`: Exposes CRUD operations for the **PricingRecommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingRecommendations
    * const pricingRecommendations = await prisma.pricingRecommendation.findMany()
    * ```
    */
  get pricingRecommendation(): Prisma.PricingRecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.structuralRisk`: Exposes CRUD operations for the **StructuralRisk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StructuralRisks
    * const structuralRisks = await prisma.structuralRisk.findMany()
    * ```
    */
  get structuralRisk(): Prisma.StructuralRiskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.industryNews`: Exposes CRUD operations for the **IndustryNews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndustryNews
    * const industryNews = await prisma.industryNews.findMany()
    * ```
    */
  get industryNews(): Prisma.IndustryNewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cncMachineTelemetry`: Exposes CRUD operations for the **CncMachineTelemetry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CncMachineTelemetries
    * const cncMachineTelemetries = await prisma.cncMachineTelemetry.findMany()
    * ```
    */
  get cncMachineTelemetry(): Prisma.CncMachineTelemetryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indianMetalIndex`: Exposes CRUD operations for the **IndianMetalIndex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndianMetalIndices
    * const indianMetalIndices = await prisma.indianMetalIndex.findMany()
    * ```
    */
  get indianMetalIndex(): Prisma.IndianMetalIndexDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Material: 'Material',
    Order: 'Order',
    Shipment: 'Shipment',
    ShipmentStep: 'ShipmentStep',
    MarketSignal: 'MarketSignal',
    PricingRecommendation: 'PricingRecommendation',
    StructuralRisk: 'StructuralRisk',
    IndustryNews: 'IndustryNews',
    InventoryItem: 'InventoryItem',
    CncMachineTelemetry: 'CncMachineTelemetry',
    IndianMetalIndex: 'IndianMetalIndex'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "material" | "order" | "shipment" | "shipmentStep" | "marketSignal" | "pricingRecommendation" | "structuralRisk" | "industryNews" | "inventoryItem" | "cncMachineTelemetry" | "indianMetalIndex"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      ShipmentStep: {
        payload: Prisma.$ShipmentStepPayload<ExtArgs>
        fields: Prisma.ShipmentStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload>
          }
          findFirst: {
            args: Prisma.ShipmentStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload>
          }
          findMany: {
            args: Prisma.ShipmentStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload>[]
          }
          create: {
            args: Prisma.ShipmentStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload>
          }
          createMany: {
            args: Prisma.ShipmentStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload>[]
          }
          delete: {
            args: Prisma.ShipmentStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload>
          }
          update: {
            args: Prisma.ShipmentStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentStepPayload>
          }
          aggregate: {
            args: Prisma.ShipmentStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentStep>
          }
          groupBy: {
            args: Prisma.ShipmentStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentStepCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentStepCountAggregateOutputType> | number
          }
        }
      }
      MarketSignal: {
        payload: Prisma.$MarketSignalPayload<ExtArgs>
        fields: Prisma.MarketSignalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketSignalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketSignalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload>
          }
          findFirst: {
            args: Prisma.MarketSignalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketSignalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload>
          }
          findMany: {
            args: Prisma.MarketSignalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload>[]
          }
          create: {
            args: Prisma.MarketSignalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload>
          }
          createMany: {
            args: Prisma.MarketSignalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketSignalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload>[]
          }
          delete: {
            args: Prisma.MarketSignalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload>
          }
          update: {
            args: Prisma.MarketSignalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload>
          }
          deleteMany: {
            args: Prisma.MarketSignalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketSignalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketSignalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload>[]
          }
          upsert: {
            args: Prisma.MarketSignalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSignalPayload>
          }
          aggregate: {
            args: Prisma.MarketSignalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketSignal>
          }
          groupBy: {
            args: Prisma.MarketSignalGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketSignalGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketSignalCountArgs<ExtArgs>
            result: $Utils.Optional<MarketSignalCountAggregateOutputType> | number
          }
        }
      }
      PricingRecommendation: {
        payload: Prisma.$PricingRecommendationPayload<ExtArgs>
        fields: Prisma.PricingRecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingRecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingRecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload>
          }
          findFirst: {
            args: Prisma.PricingRecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingRecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload>
          }
          findMany: {
            args: Prisma.PricingRecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload>[]
          }
          create: {
            args: Prisma.PricingRecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload>
          }
          createMany: {
            args: Prisma.PricingRecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingRecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload>[]
          }
          delete: {
            args: Prisma.PricingRecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload>
          }
          update: {
            args: Prisma.PricingRecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload>
          }
          deleteMany: {
            args: Prisma.PricingRecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingRecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingRecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload>[]
          }
          upsert: {
            args: Prisma.PricingRecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRecommendationPayload>
          }
          aggregate: {
            args: Prisma.PricingRecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingRecommendation>
          }
          groupBy: {
            args: Prisma.PricingRecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingRecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingRecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<PricingRecommendationCountAggregateOutputType> | number
          }
        }
      }
      StructuralRisk: {
        payload: Prisma.$StructuralRiskPayload<ExtArgs>
        fields: Prisma.StructuralRiskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StructuralRiskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StructuralRiskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload>
          }
          findFirst: {
            args: Prisma.StructuralRiskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StructuralRiskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload>
          }
          findMany: {
            args: Prisma.StructuralRiskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload>[]
          }
          create: {
            args: Prisma.StructuralRiskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload>
          }
          createMany: {
            args: Prisma.StructuralRiskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StructuralRiskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload>[]
          }
          delete: {
            args: Prisma.StructuralRiskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload>
          }
          update: {
            args: Prisma.StructuralRiskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload>
          }
          deleteMany: {
            args: Prisma.StructuralRiskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StructuralRiskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StructuralRiskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload>[]
          }
          upsert: {
            args: Prisma.StructuralRiskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuralRiskPayload>
          }
          aggregate: {
            args: Prisma.StructuralRiskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStructuralRisk>
          }
          groupBy: {
            args: Prisma.StructuralRiskGroupByArgs<ExtArgs>
            result: $Utils.Optional<StructuralRiskGroupByOutputType>[]
          }
          count: {
            args: Prisma.StructuralRiskCountArgs<ExtArgs>
            result: $Utils.Optional<StructuralRiskCountAggregateOutputType> | number
          }
        }
      }
      IndustryNews: {
        payload: Prisma.$IndustryNewsPayload<ExtArgs>
        fields: Prisma.IndustryNewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndustryNewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndustryNewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload>
          }
          findFirst: {
            args: Prisma.IndustryNewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndustryNewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload>
          }
          findMany: {
            args: Prisma.IndustryNewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload>[]
          }
          create: {
            args: Prisma.IndustryNewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload>
          }
          createMany: {
            args: Prisma.IndustryNewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndustryNewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload>[]
          }
          delete: {
            args: Prisma.IndustryNewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload>
          }
          update: {
            args: Prisma.IndustryNewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload>
          }
          deleteMany: {
            args: Prisma.IndustryNewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndustryNewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndustryNewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload>[]
          }
          upsert: {
            args: Prisma.IndustryNewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryNewsPayload>
          }
          aggregate: {
            args: Prisma.IndustryNewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndustryNews>
          }
          groupBy: {
            args: Prisma.IndustryNewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndustryNewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndustryNewsCountArgs<ExtArgs>
            result: $Utils.Optional<IndustryNewsCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      CncMachineTelemetry: {
        payload: Prisma.$CncMachineTelemetryPayload<ExtArgs>
        fields: Prisma.CncMachineTelemetryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CncMachineTelemetryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CncMachineTelemetryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload>
          }
          findFirst: {
            args: Prisma.CncMachineTelemetryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CncMachineTelemetryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload>
          }
          findMany: {
            args: Prisma.CncMachineTelemetryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload>[]
          }
          create: {
            args: Prisma.CncMachineTelemetryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload>
          }
          createMany: {
            args: Prisma.CncMachineTelemetryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CncMachineTelemetryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload>[]
          }
          delete: {
            args: Prisma.CncMachineTelemetryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload>
          }
          update: {
            args: Prisma.CncMachineTelemetryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload>
          }
          deleteMany: {
            args: Prisma.CncMachineTelemetryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CncMachineTelemetryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CncMachineTelemetryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload>[]
          }
          upsert: {
            args: Prisma.CncMachineTelemetryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CncMachineTelemetryPayload>
          }
          aggregate: {
            args: Prisma.CncMachineTelemetryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCncMachineTelemetry>
          }
          groupBy: {
            args: Prisma.CncMachineTelemetryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CncMachineTelemetryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CncMachineTelemetryCountArgs<ExtArgs>
            result: $Utils.Optional<CncMachineTelemetryCountAggregateOutputType> | number
          }
        }
      }
      IndianMetalIndex: {
        payload: Prisma.$IndianMetalIndexPayload<ExtArgs>
        fields: Prisma.IndianMetalIndexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndianMetalIndexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndianMetalIndexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload>
          }
          findFirst: {
            args: Prisma.IndianMetalIndexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndianMetalIndexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload>
          }
          findMany: {
            args: Prisma.IndianMetalIndexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload>[]
          }
          create: {
            args: Prisma.IndianMetalIndexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload>
          }
          createMany: {
            args: Prisma.IndianMetalIndexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndianMetalIndexCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload>[]
          }
          delete: {
            args: Prisma.IndianMetalIndexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload>
          }
          update: {
            args: Prisma.IndianMetalIndexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload>
          }
          deleteMany: {
            args: Prisma.IndianMetalIndexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndianMetalIndexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndianMetalIndexUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload>[]
          }
          upsert: {
            args: Prisma.IndianMetalIndexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndianMetalIndexPayload>
          }
          aggregate: {
            args: Prisma.IndianMetalIndexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndianMetalIndex>
          }
          groupBy: {
            args: Prisma.IndianMetalIndexGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndianMetalIndexGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndianMetalIndexCountArgs<ExtArgs>
            result: $Utils.Optional<IndianMetalIndexCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    material?: MaterialOmit
    order?: OrderOmit
    shipment?: ShipmentOmit
    shipmentStep?: ShipmentStepOmit
    marketSignal?: MarketSignalOmit
    pricingRecommendation?: PricingRecommendationOmit
    structuralRisk?: StructuralRiskOmit
    industryNews?: IndustryNewsOmit
    inventoryItem?: InventoryItemOmit
    cncMachineTelemetry?: CncMachineTelemetryOmit
    indianMetalIndex?: IndianMetalIndexOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    orders: number
    shipments: number
    inventoryItems: number
    marketSignals: number
    structuralRisks: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | MaterialCountOutputTypeCountOrdersArgs
    shipments?: boolean | MaterialCountOutputTypeCountShipmentsArgs
    inventoryItems?: boolean | MaterialCountOutputTypeCountInventoryItemsArgs
    marketSignals?: boolean | MaterialCountOutputTypeCountMarketSignalsArgs
    structuralRisks?: boolean | MaterialCountOutputTypeCountStructuralRisksArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountInventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountMarketSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketSignalWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountStructuralRisksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StructuralRiskWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    pricingRecommendations: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricingRecommendations?: boolean | OrderCountOutputTypeCountPricingRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPricingRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRecommendationWhereInput
  }


  /**
   * Count Type ShipmentCountOutputType
   */

  export type ShipmentCountOutputType = {
    steps: number
  }

  export type ShipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | ShipmentCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCountOutputType
     */
    select?: ShipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentStepWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    id: number | null
    currentCost: number | null
    marketCost: number | null
  }

  export type MaterialSumAggregateOutputType = {
    id: number | null
    currentCost: number | null
    marketCost: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: number | null
    name: string | null
    currentCost: number | null
    marketCost: number | null
    supplier: string | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: number | null
    name: string | null
    currentCost: number | null
    marketCost: number | null
    supplier: string | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    name: number
    currentCost: number
    marketCost: number
    supplier: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    id?: true
    currentCost?: true
    marketCost?: true
  }

  export type MaterialSumAggregateInputType = {
    id?: true
    currentCost?: true
    marketCost?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    name?: true
    currentCost?: true
    marketCost?: true
    supplier?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    name?: true
    currentCost?: true
    marketCost?: true
    supplier?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    name?: true
    currentCost?: true
    marketCost?: true
    supplier?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: number
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentCost?: boolean
    marketCost?: boolean
    supplier?: boolean
    orders?: boolean | Material$ordersArgs<ExtArgs>
    shipments?: boolean | Material$shipmentsArgs<ExtArgs>
    inventoryItems?: boolean | Material$inventoryItemsArgs<ExtArgs>
    marketSignals?: boolean | Material$marketSignalsArgs<ExtArgs>
    structuralRisks?: boolean | Material$structuralRisksArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentCost?: boolean
    marketCost?: boolean
    supplier?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentCost?: boolean
    marketCost?: boolean
    supplier?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    name?: boolean
    currentCost?: boolean
    marketCost?: boolean
    supplier?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "currentCost" | "marketCost" | "supplier", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Material$ordersArgs<ExtArgs>
    shipments?: boolean | Material$shipmentsArgs<ExtArgs>
    inventoryItems?: boolean | Material$inventoryItemsArgs<ExtArgs>
    marketSignals?: boolean | Material$marketSignalsArgs<ExtArgs>
    structuralRisks?: boolean | Material$structuralRisksArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
      inventoryItems: Prisma.$InventoryItemPayload<ExtArgs>[]
      marketSignals: Prisma.$MarketSignalPayload<ExtArgs>[]
      structuralRisks: Prisma.$StructuralRiskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      currentCost: number
      marketCost: number
      supplier: string
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Material$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Material$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipments<T extends Material$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Material$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryItems<T extends Material$inventoryItemsArgs<ExtArgs> = {}>(args?: Subset<T, Material$inventoryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marketSignals<T extends Material$marketSignalsArgs<ExtArgs> = {}>(args?: Subset<T, Material$marketSignalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    structuralRisks<T extends Material$structuralRisksArgs<ExtArgs> = {}>(args?: Subset<T, Material$structuralRisksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'Int'>
    readonly name: FieldRef<"Material", 'String'>
    readonly currentCost: FieldRef<"Material", 'Float'>
    readonly marketCost: FieldRef<"Material", 'Float'>
    readonly supplier: FieldRef<"Material", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.orders
   */
  export type Material$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Material.shipments
   */
  export type Material$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Material.inventoryItems
   */
  export type Material$inventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * Material.marketSignals
   */
  export type Material$marketSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
    where?: MarketSignalWhereInput
    orderBy?: MarketSignalOrderByWithRelationInput | MarketSignalOrderByWithRelationInput[]
    cursor?: MarketSignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketSignalScalarFieldEnum | MarketSignalScalarFieldEnum[]
  }

  /**
   * Material.structuralRisks
   */
  export type Material$structuralRisksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
    where?: StructuralRiskWhereInput
    orderBy?: StructuralRiskOrderByWithRelationInput | StructuralRiskOrderByWithRelationInput[]
    cursor?: StructuralRiskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StructuralRiskScalarFieldEnum | StructuralRiskScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    materialId: number | null
  }

  export type OrderSumAggregateOutputType = {
    materialId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    client: string | null
    margin: string | null
    materialId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    client: string | null
    margin: string | null
    materialId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    client: number
    margin: number
    materialId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    materialId?: true
  }

  export type OrderSumAggregateInputType = {
    materialId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    client?: true
    margin?: true
    materialId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    client?: true
    margin?: true
    materialId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    client?: true
    margin?: true
    materialId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    client: string
    margin: string
    materialId: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client?: boolean
    margin?: boolean
    materialId?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    pricingRecommendations?: boolean | Order$pricingRecommendationsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client?: boolean
    margin?: boolean
    materialId?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client?: boolean
    margin?: boolean
    materialId?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    client?: boolean
    margin?: boolean
    materialId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client" | "margin" | "materialId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    pricingRecommendations?: boolean | Order$pricingRecommendationsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
      pricingRecommendations: Prisma.$PricingRecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      client: string
      margin: string
      materialId: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pricingRecommendations<T extends Order$pricingRecommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Order$pricingRecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly client: FieldRef<"Order", 'String'>
    readonly margin: FieldRef<"Order", 'String'>
    readonly materialId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.pricingRecommendations
   */
  export type Order$pricingRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
    where?: PricingRecommendationWhereInput
    orderBy?: PricingRecommendationOrderByWithRelationInput | PricingRecommendationOrderByWithRelationInput[]
    cursor?: PricingRecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingRecommendationScalarFieldEnum | PricingRecommendationScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentAvgAggregateOutputType = {
    id: number | null
    materialId: number | null
  }

  export type ShipmentSumAggregateOutputType = {
    id: number | null
    materialId: number | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: number | null
    materialId: number | null
    qty: string | null
    supplier: string | null
    currentNode: string | null
    eta: string | null
    status: string | null
    gemmaAnnotation: string | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: number | null
    materialId: number | null
    qty: string | null
    supplier: string | null
    currentNode: string | null
    eta: string | null
    status: string | null
    gemmaAnnotation: string | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    materialId: number
    qty: number
    supplier: number
    currentNode: number
    eta: number
    status: number
    gemmaAnnotation: number
    _all: number
  }


  export type ShipmentAvgAggregateInputType = {
    id?: true
    materialId?: true
  }

  export type ShipmentSumAggregateInputType = {
    id?: true
    materialId?: true
  }

  export type ShipmentMinAggregateInputType = {
    id?: true
    materialId?: true
    qty?: true
    supplier?: true
    currentNode?: true
    eta?: true
    status?: true
    gemmaAnnotation?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    materialId?: true
    qty?: true
    supplier?: true
    currentNode?: true
    eta?: true
    status?: true
    gemmaAnnotation?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    materialId?: true
    qty?: true
    supplier?: true
    currentNode?: true
    eta?: true
    status?: true
    gemmaAnnotation?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _avg?: ShipmentAvgAggregateInputType
    _sum?: ShipmentSumAggregateInputType
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: number
    materialId: number
    qty: string
    supplier: string
    currentNode: string
    eta: string
    status: string
    gemmaAnnotation: string
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    qty?: boolean
    supplier?: boolean
    currentNode?: boolean
    eta?: boolean
    status?: boolean
    gemmaAnnotation?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    steps?: boolean | Shipment$stepsArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    qty?: boolean
    supplier?: boolean
    currentNode?: boolean
    eta?: boolean
    status?: boolean
    gemmaAnnotation?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    qty?: boolean
    supplier?: boolean
    currentNode?: boolean
    eta?: boolean
    status?: boolean
    gemmaAnnotation?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    id?: boolean
    materialId?: boolean
    qty?: boolean
    supplier?: boolean
    currentNode?: boolean
    eta?: boolean
    status?: boolean
    gemmaAnnotation?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materialId" | "qty" | "supplier" | "currentNode" | "eta" | "status" | "gemmaAnnotation", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    steps?: boolean | Shipment$stepsArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
      steps: Prisma.$ShipmentStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      materialId: number
      qty: string
      supplier: string
      currentNode: string
      eta: string
      status: string
      gemmaAnnotation: string
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments and returns the data updated in the database.
     * @param {ShipmentUpdateManyAndReturnArgs} args - Arguments to update many Shipments.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
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
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    steps<T extends Shipment$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'Int'>
    readonly materialId: FieldRef<"Shipment", 'Int'>
    readonly qty: FieldRef<"Shipment", 'String'>
    readonly supplier: FieldRef<"Shipment", 'String'>
    readonly currentNode: FieldRef<"Shipment", 'String'>
    readonly eta: FieldRef<"Shipment", 'String'>
    readonly status: FieldRef<"Shipment", 'String'>
    readonly gemmaAnnotation: FieldRef<"Shipment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment updateManyAndReturn
   */
  export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment.steps
   */
  export type Shipment$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
    where?: ShipmentStepWhereInput
    orderBy?: ShipmentStepOrderByWithRelationInput | ShipmentStepOrderByWithRelationInput[]
    cursor?: ShipmentStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentStepScalarFieldEnum | ShipmentStepScalarFieldEnum[]
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentStep
   */

  export type AggregateShipmentStep = {
    _count: ShipmentStepCountAggregateOutputType | null
    _avg: ShipmentStepAvgAggregateOutputType | null
    _sum: ShipmentStepSumAggregateOutputType | null
    _min: ShipmentStepMinAggregateOutputType | null
    _max: ShipmentStepMaxAggregateOutputType | null
  }

  export type ShipmentStepAvgAggregateOutputType = {
    id: number | null
    shipmentId: number | null
    sequence: number | null
  }

  export type ShipmentStepSumAggregateOutputType = {
    id: number | null
    shipmentId: number | null
    sequence: number | null
  }

  export type ShipmentStepMinAggregateOutputType = {
    id: number | null
    shipmentId: number | null
    name: string | null
    status: string | null
    sequence: number | null
  }

  export type ShipmentStepMaxAggregateOutputType = {
    id: number | null
    shipmentId: number | null
    name: string | null
    status: string | null
    sequence: number | null
  }

  export type ShipmentStepCountAggregateOutputType = {
    id: number
    shipmentId: number
    name: number
    status: number
    sequence: number
    _all: number
  }


  export type ShipmentStepAvgAggregateInputType = {
    id?: true
    shipmentId?: true
    sequence?: true
  }

  export type ShipmentStepSumAggregateInputType = {
    id?: true
    shipmentId?: true
    sequence?: true
  }

  export type ShipmentStepMinAggregateInputType = {
    id?: true
    shipmentId?: true
    name?: true
    status?: true
    sequence?: true
  }

  export type ShipmentStepMaxAggregateInputType = {
    id?: true
    shipmentId?: true
    name?: true
    status?: true
    sequence?: true
  }

  export type ShipmentStepCountAggregateInputType = {
    id?: true
    shipmentId?: true
    name?: true
    status?: true
    sequence?: true
    _all?: true
  }

  export type ShipmentStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentStep to aggregate.
     */
    where?: ShipmentStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentSteps to fetch.
     */
    orderBy?: ShipmentStepOrderByWithRelationInput | ShipmentStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentSteps
    **/
    _count?: true | ShipmentStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentStepMaxAggregateInputType
  }

  export type GetShipmentStepAggregateType<T extends ShipmentStepAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentStep[P]>
      : GetScalarType<T[P], AggregateShipmentStep[P]>
  }




  export type ShipmentStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentStepWhereInput
    orderBy?: ShipmentStepOrderByWithAggregationInput | ShipmentStepOrderByWithAggregationInput[]
    by: ShipmentStepScalarFieldEnum[] | ShipmentStepScalarFieldEnum
    having?: ShipmentStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentStepCountAggregateInputType | true
    _avg?: ShipmentStepAvgAggregateInputType
    _sum?: ShipmentStepSumAggregateInputType
    _min?: ShipmentStepMinAggregateInputType
    _max?: ShipmentStepMaxAggregateInputType
  }

  export type ShipmentStepGroupByOutputType = {
    id: number
    shipmentId: number
    name: string
    status: string
    sequence: number
    _count: ShipmentStepCountAggregateOutputType | null
    _avg: ShipmentStepAvgAggregateOutputType | null
    _sum: ShipmentStepSumAggregateOutputType | null
    _min: ShipmentStepMinAggregateOutputType | null
    _max: ShipmentStepMaxAggregateOutputType | null
  }

  type GetShipmentStepGroupByPayload<T extends ShipmentStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentStepGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentStepGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    name?: boolean
    status?: boolean
    sequence?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentStep"]>

  export type ShipmentStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    name?: boolean
    status?: boolean
    sequence?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentStep"]>

  export type ShipmentStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    name?: boolean
    status?: boolean
    sequence?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentStep"]>

  export type ShipmentStepSelectScalar = {
    id?: boolean
    shipmentId?: boolean
    name?: boolean
    status?: boolean
    sequence?: boolean
  }

  export type ShipmentStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipmentId" | "name" | "status" | "sequence", ExtArgs["result"]["shipmentStep"]>
  export type ShipmentStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type ShipmentStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type ShipmentStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $ShipmentStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentStep"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shipmentId: number
      name: string
      status: string
      sequence: number
    }, ExtArgs["result"]["shipmentStep"]>
    composites: {}
  }

  type ShipmentStepGetPayload<S extends boolean | null | undefined | ShipmentStepDefaultArgs> = $Result.GetResult<Prisma.$ShipmentStepPayload, S>

  type ShipmentStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentStepCountAggregateInputType | true
    }

  export interface ShipmentStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentStep'], meta: { name: 'ShipmentStep' } }
    /**
     * Find zero or one ShipmentStep that matches the filter.
     * @param {ShipmentStepFindUniqueArgs} args - Arguments to find a ShipmentStep
     * @example
     * // Get one ShipmentStep
     * const shipmentStep = await prisma.shipmentStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentStepFindUniqueArgs>(args: SelectSubset<T, ShipmentStepFindUniqueArgs<ExtArgs>>): Prisma__ShipmentStepClient<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentStepFindUniqueOrThrowArgs} args - Arguments to find a ShipmentStep
     * @example
     * // Get one ShipmentStep
     * const shipmentStep = await prisma.shipmentStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentStepFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentStepClient<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentStepFindFirstArgs} args - Arguments to find a ShipmentStep
     * @example
     * // Get one ShipmentStep
     * const shipmentStep = await prisma.shipmentStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentStepFindFirstArgs>(args?: SelectSubset<T, ShipmentStepFindFirstArgs<ExtArgs>>): Prisma__ShipmentStepClient<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentStepFindFirstOrThrowArgs} args - Arguments to find a ShipmentStep
     * @example
     * // Get one ShipmentStep
     * const shipmentStep = await prisma.shipmentStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentStepFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentStepClient<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentSteps
     * const shipmentSteps = await prisma.shipmentStep.findMany()
     * 
     * // Get first 10 ShipmentSteps
     * const shipmentSteps = await prisma.shipmentStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentStepWithIdOnly = await prisma.shipmentStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentStepFindManyArgs>(args?: SelectSubset<T, ShipmentStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentStep.
     * @param {ShipmentStepCreateArgs} args - Arguments to create a ShipmentStep.
     * @example
     * // Create one ShipmentStep
     * const ShipmentStep = await prisma.shipmentStep.create({
     *   data: {
     *     // ... data to create a ShipmentStep
     *   }
     * })
     * 
     */
    create<T extends ShipmentStepCreateArgs>(args: SelectSubset<T, ShipmentStepCreateArgs<ExtArgs>>): Prisma__ShipmentStepClient<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentSteps.
     * @param {ShipmentStepCreateManyArgs} args - Arguments to create many ShipmentSteps.
     * @example
     * // Create many ShipmentSteps
     * const shipmentStep = await prisma.shipmentStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentStepCreateManyArgs>(args?: SelectSubset<T, ShipmentStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShipmentSteps and returns the data saved in the database.
     * @param {ShipmentStepCreateManyAndReturnArgs} args - Arguments to create many ShipmentSteps.
     * @example
     * // Create many ShipmentSteps
     * const shipmentStep = await prisma.shipmentStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShipmentSteps and only return the `id`
     * const shipmentStepWithIdOnly = await prisma.shipmentStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentStepCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShipmentStep.
     * @param {ShipmentStepDeleteArgs} args - Arguments to delete one ShipmentStep.
     * @example
     * // Delete one ShipmentStep
     * const ShipmentStep = await prisma.shipmentStep.delete({
     *   where: {
     *     // ... filter to delete one ShipmentStep
     *   }
     * })
     * 
     */
    delete<T extends ShipmentStepDeleteArgs>(args: SelectSubset<T, ShipmentStepDeleteArgs<ExtArgs>>): Prisma__ShipmentStepClient<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentStep.
     * @param {ShipmentStepUpdateArgs} args - Arguments to update one ShipmentStep.
     * @example
     * // Update one ShipmentStep
     * const shipmentStep = await prisma.shipmentStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentStepUpdateArgs>(args: SelectSubset<T, ShipmentStepUpdateArgs<ExtArgs>>): Prisma__ShipmentStepClient<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentSteps.
     * @param {ShipmentStepDeleteManyArgs} args - Arguments to filter ShipmentSteps to delete.
     * @example
     * // Delete a few ShipmentSteps
     * const { count } = await prisma.shipmentStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentStepDeleteManyArgs>(args?: SelectSubset<T, ShipmentStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentSteps
     * const shipmentStep = await prisma.shipmentStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentStepUpdateManyArgs>(args: SelectSubset<T, ShipmentStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentSteps and returns the data updated in the database.
     * @param {ShipmentStepUpdateManyAndReturnArgs} args - Arguments to update many ShipmentSteps.
     * @example
     * // Update many ShipmentSteps
     * const shipmentStep = await prisma.shipmentStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShipmentSteps and only return the `id`
     * const shipmentStepWithIdOnly = await prisma.shipmentStep.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShipmentStepUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShipmentStep.
     * @param {ShipmentStepUpsertArgs} args - Arguments to update or create a ShipmentStep.
     * @example
     * // Update or create a ShipmentStep
     * const shipmentStep = await prisma.shipmentStep.upsert({
     *   create: {
     *     // ... data to create a ShipmentStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentStep we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentStepUpsertArgs>(args: SelectSubset<T, ShipmentStepUpsertArgs<ExtArgs>>): Prisma__ShipmentStepClient<$Result.GetResult<Prisma.$ShipmentStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentStepCountArgs} args - Arguments to filter ShipmentSteps to count.
     * @example
     * // Count the number of ShipmentSteps
     * const count = await prisma.shipmentStep.count({
     *   where: {
     *     // ... the filter for the ShipmentSteps we want to count
     *   }
     * })
    **/
    count<T extends ShipmentStepCountArgs>(
      args?: Subset<T, ShipmentStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShipmentStepAggregateArgs>(args: Subset<T, ShipmentStepAggregateArgs>): Prisma.PrismaPromise<GetShipmentStepAggregateType<T>>

    /**
     * Group by ShipmentStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentStepGroupByArgs} args - Group by arguments.
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
      T extends ShipmentStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentStepGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShipmentStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentStep model
   */
  readonly fields: ShipmentStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShipmentStep model
   */
  interface ShipmentStepFieldRefs {
    readonly id: FieldRef<"ShipmentStep", 'Int'>
    readonly shipmentId: FieldRef<"ShipmentStep", 'Int'>
    readonly name: FieldRef<"ShipmentStep", 'String'>
    readonly status: FieldRef<"ShipmentStep", 'String'>
    readonly sequence: FieldRef<"ShipmentStep", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentStep findUnique
   */
  export type ShipmentStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentStep to fetch.
     */
    where: ShipmentStepWhereUniqueInput
  }

  /**
   * ShipmentStep findUniqueOrThrow
   */
  export type ShipmentStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentStep to fetch.
     */
    where: ShipmentStepWhereUniqueInput
  }

  /**
   * ShipmentStep findFirst
   */
  export type ShipmentStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentStep to fetch.
     */
    where?: ShipmentStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentSteps to fetch.
     */
    orderBy?: ShipmentStepOrderByWithRelationInput | ShipmentStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentSteps.
     */
    cursor?: ShipmentStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentSteps.
     */
    distinct?: ShipmentStepScalarFieldEnum | ShipmentStepScalarFieldEnum[]
  }

  /**
   * ShipmentStep findFirstOrThrow
   */
  export type ShipmentStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentStep to fetch.
     */
    where?: ShipmentStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentSteps to fetch.
     */
    orderBy?: ShipmentStepOrderByWithRelationInput | ShipmentStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentSteps.
     */
    cursor?: ShipmentStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentSteps.
     */
    distinct?: ShipmentStepScalarFieldEnum | ShipmentStepScalarFieldEnum[]
  }

  /**
   * ShipmentStep findMany
   */
  export type ShipmentStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentSteps to fetch.
     */
    where?: ShipmentStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentSteps to fetch.
     */
    orderBy?: ShipmentStepOrderByWithRelationInput | ShipmentStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentSteps.
     */
    cursor?: ShipmentStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentSteps.
     */
    distinct?: ShipmentStepScalarFieldEnum | ShipmentStepScalarFieldEnum[]
  }

  /**
   * ShipmentStep create
   */
  export type ShipmentStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentStep.
     */
    data: XOR<ShipmentStepCreateInput, ShipmentStepUncheckedCreateInput>
  }

  /**
   * ShipmentStep createMany
   */
  export type ShipmentStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentSteps.
     */
    data: ShipmentStepCreateManyInput | ShipmentStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentStep createManyAndReturn
   */
  export type ShipmentStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * The data used to create many ShipmentSteps.
     */
    data: ShipmentStepCreateManyInput | ShipmentStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentStep update
   */
  export type ShipmentStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentStep.
     */
    data: XOR<ShipmentStepUpdateInput, ShipmentStepUncheckedUpdateInput>
    /**
     * Choose, which ShipmentStep to update.
     */
    where: ShipmentStepWhereUniqueInput
  }

  /**
   * ShipmentStep updateMany
   */
  export type ShipmentStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentSteps.
     */
    data: XOR<ShipmentStepUpdateManyMutationInput, ShipmentStepUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentSteps to update
     */
    where?: ShipmentStepWhereInput
    /**
     * Limit how many ShipmentSteps to update.
     */
    limit?: number
  }

  /**
   * ShipmentStep updateManyAndReturn
   */
  export type ShipmentStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * The data used to update ShipmentSteps.
     */
    data: XOR<ShipmentStepUpdateManyMutationInput, ShipmentStepUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentSteps to update
     */
    where?: ShipmentStepWhereInput
    /**
     * Limit how many ShipmentSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentStep upsert
   */
  export type ShipmentStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentStep to update in case it exists.
     */
    where: ShipmentStepWhereUniqueInput
    /**
     * In case the ShipmentStep found by the `where` argument doesn't exist, create a new ShipmentStep with this data.
     */
    create: XOR<ShipmentStepCreateInput, ShipmentStepUncheckedCreateInput>
    /**
     * In case the ShipmentStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentStepUpdateInput, ShipmentStepUncheckedUpdateInput>
  }

  /**
   * ShipmentStep delete
   */
  export type ShipmentStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
    /**
     * Filter which ShipmentStep to delete.
     */
    where: ShipmentStepWhereUniqueInput
  }

  /**
   * ShipmentStep deleteMany
   */
  export type ShipmentStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentSteps to delete
     */
    where?: ShipmentStepWhereInput
    /**
     * Limit how many ShipmentSteps to delete.
     */
    limit?: number
  }

  /**
   * ShipmentStep without action
   */
  export type ShipmentStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentStep
     */
    select?: ShipmentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentStep
     */
    omit?: ShipmentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentStepInclude<ExtArgs> | null
  }


  /**
   * Model MarketSignal
   */

  export type AggregateMarketSignal = {
    _count: MarketSignalCountAggregateOutputType | null
    _avg: MarketSignalAvgAggregateOutputType | null
    _sum: MarketSignalSumAggregateOutputType | null
    _min: MarketSignalMinAggregateOutputType | null
    _max: MarketSignalMaxAggregateOutputType | null
  }

  export type MarketSignalAvgAggregateOutputType = {
    id: number | null
    materialId: number | null
  }

  export type MarketSignalSumAggregateOutputType = {
    id: number | null
    materialId: number | null
  }

  export type MarketSignalMinAggregateOutputType = {
    id: number | null
    title: string | null
    source: string | null
    date: string | null
    relevance: string | null
    tag: string | null
    desc: string | null
    materialId: number | null
  }

  export type MarketSignalMaxAggregateOutputType = {
    id: number | null
    title: string | null
    source: string | null
    date: string | null
    relevance: string | null
    tag: string | null
    desc: string | null
    materialId: number | null
  }

  export type MarketSignalCountAggregateOutputType = {
    id: number
    title: number
    source: number
    date: number
    relevance: number
    tag: number
    desc: number
    materialId: number
    _all: number
  }


  export type MarketSignalAvgAggregateInputType = {
    id?: true
    materialId?: true
  }

  export type MarketSignalSumAggregateInputType = {
    id?: true
    materialId?: true
  }

  export type MarketSignalMinAggregateInputType = {
    id?: true
    title?: true
    source?: true
    date?: true
    relevance?: true
    tag?: true
    desc?: true
    materialId?: true
  }

  export type MarketSignalMaxAggregateInputType = {
    id?: true
    title?: true
    source?: true
    date?: true
    relevance?: true
    tag?: true
    desc?: true
    materialId?: true
  }

  export type MarketSignalCountAggregateInputType = {
    id?: true
    title?: true
    source?: true
    date?: true
    relevance?: true
    tag?: true
    desc?: true
    materialId?: true
    _all?: true
  }

  export type MarketSignalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketSignal to aggregate.
     */
    where?: MarketSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSignals to fetch.
     */
    orderBy?: MarketSignalOrderByWithRelationInput | MarketSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketSignals
    **/
    _count?: true | MarketSignalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketSignalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketSignalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketSignalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketSignalMaxAggregateInputType
  }

  export type GetMarketSignalAggregateType<T extends MarketSignalAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketSignal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketSignal[P]>
      : GetScalarType<T[P], AggregateMarketSignal[P]>
  }




  export type MarketSignalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketSignalWhereInput
    orderBy?: MarketSignalOrderByWithAggregationInput | MarketSignalOrderByWithAggregationInput[]
    by: MarketSignalScalarFieldEnum[] | MarketSignalScalarFieldEnum
    having?: MarketSignalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketSignalCountAggregateInputType | true
    _avg?: MarketSignalAvgAggregateInputType
    _sum?: MarketSignalSumAggregateInputType
    _min?: MarketSignalMinAggregateInputType
    _max?: MarketSignalMaxAggregateInputType
  }

  export type MarketSignalGroupByOutputType = {
    id: number
    title: string
    source: string
    date: string
    relevance: string
    tag: string
    desc: string
    materialId: number | null
    _count: MarketSignalCountAggregateOutputType | null
    _avg: MarketSignalAvgAggregateOutputType | null
    _sum: MarketSignalSumAggregateOutputType | null
    _min: MarketSignalMinAggregateOutputType | null
    _max: MarketSignalMaxAggregateOutputType | null
  }

  type GetMarketSignalGroupByPayload<T extends MarketSignalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketSignalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketSignalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketSignalGroupByOutputType[P]>
            : GetScalarType<T[P], MarketSignalGroupByOutputType[P]>
        }
      >
    >


  export type MarketSignalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    source?: boolean
    date?: boolean
    relevance?: boolean
    tag?: boolean
    desc?: boolean
    materialId?: boolean
    material?: boolean | MarketSignal$materialArgs<ExtArgs>
  }, ExtArgs["result"]["marketSignal"]>

  export type MarketSignalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    source?: boolean
    date?: boolean
    relevance?: boolean
    tag?: boolean
    desc?: boolean
    materialId?: boolean
    material?: boolean | MarketSignal$materialArgs<ExtArgs>
  }, ExtArgs["result"]["marketSignal"]>

  export type MarketSignalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    source?: boolean
    date?: boolean
    relevance?: boolean
    tag?: boolean
    desc?: boolean
    materialId?: boolean
    material?: boolean | MarketSignal$materialArgs<ExtArgs>
  }, ExtArgs["result"]["marketSignal"]>

  export type MarketSignalSelectScalar = {
    id?: boolean
    title?: boolean
    source?: boolean
    date?: boolean
    relevance?: boolean
    tag?: boolean
    desc?: boolean
    materialId?: boolean
  }

  export type MarketSignalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "source" | "date" | "relevance" | "tag" | "desc" | "materialId", ExtArgs["result"]["marketSignal"]>
  export type MarketSignalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MarketSignal$materialArgs<ExtArgs>
  }
  export type MarketSignalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MarketSignal$materialArgs<ExtArgs>
  }
  export type MarketSignalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MarketSignal$materialArgs<ExtArgs>
  }

  export type $MarketSignalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketSignal"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      source: string
      date: string
      relevance: string
      tag: string
      desc: string
      materialId: number | null
    }, ExtArgs["result"]["marketSignal"]>
    composites: {}
  }

  type MarketSignalGetPayload<S extends boolean | null | undefined | MarketSignalDefaultArgs> = $Result.GetResult<Prisma.$MarketSignalPayload, S>

  type MarketSignalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketSignalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketSignalCountAggregateInputType | true
    }

  export interface MarketSignalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketSignal'], meta: { name: 'MarketSignal' } }
    /**
     * Find zero or one MarketSignal that matches the filter.
     * @param {MarketSignalFindUniqueArgs} args - Arguments to find a MarketSignal
     * @example
     * // Get one MarketSignal
     * const marketSignal = await prisma.marketSignal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketSignalFindUniqueArgs>(args: SelectSubset<T, MarketSignalFindUniqueArgs<ExtArgs>>): Prisma__MarketSignalClient<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketSignal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketSignalFindUniqueOrThrowArgs} args - Arguments to find a MarketSignal
     * @example
     * // Get one MarketSignal
     * const marketSignal = await prisma.marketSignal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketSignalFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketSignalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketSignalClient<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketSignal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSignalFindFirstArgs} args - Arguments to find a MarketSignal
     * @example
     * // Get one MarketSignal
     * const marketSignal = await prisma.marketSignal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketSignalFindFirstArgs>(args?: SelectSubset<T, MarketSignalFindFirstArgs<ExtArgs>>): Prisma__MarketSignalClient<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketSignal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSignalFindFirstOrThrowArgs} args - Arguments to find a MarketSignal
     * @example
     * // Get one MarketSignal
     * const marketSignal = await prisma.marketSignal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketSignalFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketSignalFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketSignalClient<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketSignals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSignalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketSignals
     * const marketSignals = await prisma.marketSignal.findMany()
     * 
     * // Get first 10 MarketSignals
     * const marketSignals = await prisma.marketSignal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketSignalWithIdOnly = await prisma.marketSignal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketSignalFindManyArgs>(args?: SelectSubset<T, MarketSignalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketSignal.
     * @param {MarketSignalCreateArgs} args - Arguments to create a MarketSignal.
     * @example
     * // Create one MarketSignal
     * const MarketSignal = await prisma.marketSignal.create({
     *   data: {
     *     // ... data to create a MarketSignal
     *   }
     * })
     * 
     */
    create<T extends MarketSignalCreateArgs>(args: SelectSubset<T, MarketSignalCreateArgs<ExtArgs>>): Prisma__MarketSignalClient<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketSignals.
     * @param {MarketSignalCreateManyArgs} args - Arguments to create many MarketSignals.
     * @example
     * // Create many MarketSignals
     * const marketSignal = await prisma.marketSignal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketSignalCreateManyArgs>(args?: SelectSubset<T, MarketSignalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketSignals and returns the data saved in the database.
     * @param {MarketSignalCreateManyAndReturnArgs} args - Arguments to create many MarketSignals.
     * @example
     * // Create many MarketSignals
     * const marketSignal = await prisma.marketSignal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketSignals and only return the `id`
     * const marketSignalWithIdOnly = await prisma.marketSignal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketSignalCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketSignalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketSignal.
     * @param {MarketSignalDeleteArgs} args - Arguments to delete one MarketSignal.
     * @example
     * // Delete one MarketSignal
     * const MarketSignal = await prisma.marketSignal.delete({
     *   where: {
     *     // ... filter to delete one MarketSignal
     *   }
     * })
     * 
     */
    delete<T extends MarketSignalDeleteArgs>(args: SelectSubset<T, MarketSignalDeleteArgs<ExtArgs>>): Prisma__MarketSignalClient<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketSignal.
     * @param {MarketSignalUpdateArgs} args - Arguments to update one MarketSignal.
     * @example
     * // Update one MarketSignal
     * const marketSignal = await prisma.marketSignal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketSignalUpdateArgs>(args: SelectSubset<T, MarketSignalUpdateArgs<ExtArgs>>): Prisma__MarketSignalClient<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketSignals.
     * @param {MarketSignalDeleteManyArgs} args - Arguments to filter MarketSignals to delete.
     * @example
     * // Delete a few MarketSignals
     * const { count } = await prisma.marketSignal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketSignalDeleteManyArgs>(args?: SelectSubset<T, MarketSignalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSignalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketSignals
     * const marketSignal = await prisma.marketSignal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketSignalUpdateManyArgs>(args: SelectSubset<T, MarketSignalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketSignals and returns the data updated in the database.
     * @param {MarketSignalUpdateManyAndReturnArgs} args - Arguments to update many MarketSignals.
     * @example
     * // Update many MarketSignals
     * const marketSignal = await prisma.marketSignal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketSignals and only return the `id`
     * const marketSignalWithIdOnly = await prisma.marketSignal.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarketSignalUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketSignalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketSignal.
     * @param {MarketSignalUpsertArgs} args - Arguments to update or create a MarketSignal.
     * @example
     * // Update or create a MarketSignal
     * const marketSignal = await prisma.marketSignal.upsert({
     *   create: {
     *     // ... data to create a MarketSignal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketSignal we want to update
     *   }
     * })
     */
    upsert<T extends MarketSignalUpsertArgs>(args: SelectSubset<T, MarketSignalUpsertArgs<ExtArgs>>): Prisma__MarketSignalClient<$Result.GetResult<Prisma.$MarketSignalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSignalCountArgs} args - Arguments to filter MarketSignals to count.
     * @example
     * // Count the number of MarketSignals
     * const count = await prisma.marketSignal.count({
     *   where: {
     *     // ... the filter for the MarketSignals we want to count
     *   }
     * })
    **/
    count<T extends MarketSignalCountArgs>(
      args?: Subset<T, MarketSignalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketSignalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSignalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketSignalAggregateArgs>(args: Subset<T, MarketSignalAggregateArgs>): Prisma.PrismaPromise<GetMarketSignalAggregateType<T>>

    /**
     * Group by MarketSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSignalGroupByArgs} args - Group by arguments.
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
      T extends MarketSignalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketSignalGroupByArgs['orderBy'] }
        : { orderBy?: MarketSignalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketSignalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketSignalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketSignal model
   */
  readonly fields: MarketSignalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketSignal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketSignalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MarketSignal$materialArgs<ExtArgs> = {}>(args?: Subset<T, MarketSignal$materialArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MarketSignal model
   */
  interface MarketSignalFieldRefs {
    readonly id: FieldRef<"MarketSignal", 'Int'>
    readonly title: FieldRef<"MarketSignal", 'String'>
    readonly source: FieldRef<"MarketSignal", 'String'>
    readonly date: FieldRef<"MarketSignal", 'String'>
    readonly relevance: FieldRef<"MarketSignal", 'String'>
    readonly tag: FieldRef<"MarketSignal", 'String'>
    readonly desc: FieldRef<"MarketSignal", 'String'>
    readonly materialId: FieldRef<"MarketSignal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MarketSignal findUnique
   */
  export type MarketSignalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
    /**
     * Filter, which MarketSignal to fetch.
     */
    where: MarketSignalWhereUniqueInput
  }

  /**
   * MarketSignal findUniqueOrThrow
   */
  export type MarketSignalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
    /**
     * Filter, which MarketSignal to fetch.
     */
    where: MarketSignalWhereUniqueInput
  }

  /**
   * MarketSignal findFirst
   */
  export type MarketSignalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
    /**
     * Filter, which MarketSignal to fetch.
     */
    where?: MarketSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSignals to fetch.
     */
    orderBy?: MarketSignalOrderByWithRelationInput | MarketSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketSignals.
     */
    cursor?: MarketSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketSignals.
     */
    distinct?: MarketSignalScalarFieldEnum | MarketSignalScalarFieldEnum[]
  }

  /**
   * MarketSignal findFirstOrThrow
   */
  export type MarketSignalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
    /**
     * Filter, which MarketSignal to fetch.
     */
    where?: MarketSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSignals to fetch.
     */
    orderBy?: MarketSignalOrderByWithRelationInput | MarketSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketSignals.
     */
    cursor?: MarketSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketSignals.
     */
    distinct?: MarketSignalScalarFieldEnum | MarketSignalScalarFieldEnum[]
  }

  /**
   * MarketSignal findMany
   */
  export type MarketSignalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
    /**
     * Filter, which MarketSignals to fetch.
     */
    where?: MarketSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSignals to fetch.
     */
    orderBy?: MarketSignalOrderByWithRelationInput | MarketSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketSignals.
     */
    cursor?: MarketSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketSignals.
     */
    distinct?: MarketSignalScalarFieldEnum | MarketSignalScalarFieldEnum[]
  }

  /**
   * MarketSignal create
   */
  export type MarketSignalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketSignal.
     */
    data: XOR<MarketSignalCreateInput, MarketSignalUncheckedCreateInput>
  }

  /**
   * MarketSignal createMany
   */
  export type MarketSignalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketSignals.
     */
    data: MarketSignalCreateManyInput | MarketSignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketSignal createManyAndReturn
   */
  export type MarketSignalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * The data used to create many MarketSignals.
     */
    data: MarketSignalCreateManyInput | MarketSignalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketSignal update
   */
  export type MarketSignalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketSignal.
     */
    data: XOR<MarketSignalUpdateInput, MarketSignalUncheckedUpdateInput>
    /**
     * Choose, which MarketSignal to update.
     */
    where: MarketSignalWhereUniqueInput
  }

  /**
   * MarketSignal updateMany
   */
  export type MarketSignalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketSignals.
     */
    data: XOR<MarketSignalUpdateManyMutationInput, MarketSignalUncheckedUpdateManyInput>
    /**
     * Filter which MarketSignals to update
     */
    where?: MarketSignalWhereInput
    /**
     * Limit how many MarketSignals to update.
     */
    limit?: number
  }

  /**
   * MarketSignal updateManyAndReturn
   */
  export type MarketSignalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * The data used to update MarketSignals.
     */
    data: XOR<MarketSignalUpdateManyMutationInput, MarketSignalUncheckedUpdateManyInput>
    /**
     * Filter which MarketSignals to update
     */
    where?: MarketSignalWhereInput
    /**
     * Limit how many MarketSignals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketSignal upsert
   */
  export type MarketSignalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketSignal to update in case it exists.
     */
    where: MarketSignalWhereUniqueInput
    /**
     * In case the MarketSignal found by the `where` argument doesn't exist, create a new MarketSignal with this data.
     */
    create: XOR<MarketSignalCreateInput, MarketSignalUncheckedCreateInput>
    /**
     * In case the MarketSignal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketSignalUpdateInput, MarketSignalUncheckedUpdateInput>
  }

  /**
   * MarketSignal delete
   */
  export type MarketSignalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
    /**
     * Filter which MarketSignal to delete.
     */
    where: MarketSignalWhereUniqueInput
  }

  /**
   * MarketSignal deleteMany
   */
  export type MarketSignalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketSignals to delete
     */
    where?: MarketSignalWhereInput
    /**
     * Limit how many MarketSignals to delete.
     */
    limit?: number
  }

  /**
   * MarketSignal.material
   */
  export type MarketSignal$materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
  }

  /**
   * MarketSignal without action
   */
  export type MarketSignalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSignal
     */
    select?: MarketSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSignal
     */
    omit?: MarketSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSignalInclude<ExtArgs> | null
  }


  /**
   * Model PricingRecommendation
   */

  export type AggregatePricingRecommendation = {
    _count: PricingRecommendationCountAggregateOutputType | null
    _min: PricingRecommendationMinAggregateOutputType | null
    _max: PricingRecommendationMaxAggregateOutputType | null
  }

  export type PricingRecommendationMinAggregateOutputType = {
    id: string | null
    trigger: string | null
    action: string | null
    confidence: string | null
    accepted: boolean | null
    rejected: boolean | null
    expanded: boolean | null
    orderId: string | null
  }

  export type PricingRecommendationMaxAggregateOutputType = {
    id: string | null
    trigger: string | null
    action: string | null
    confidence: string | null
    accepted: boolean | null
    rejected: boolean | null
    expanded: boolean | null
    orderId: string | null
  }

  export type PricingRecommendationCountAggregateOutputType = {
    id: number
    trigger: number
    action: number
    confidence: number
    reasoning: number
    accepted: number
    rejected: number
    expanded: number
    orderId: number
    _all: number
  }


  export type PricingRecommendationMinAggregateInputType = {
    id?: true
    trigger?: true
    action?: true
    confidence?: true
    accepted?: true
    rejected?: true
    expanded?: true
    orderId?: true
  }

  export type PricingRecommendationMaxAggregateInputType = {
    id?: true
    trigger?: true
    action?: true
    confidence?: true
    accepted?: true
    rejected?: true
    expanded?: true
    orderId?: true
  }

  export type PricingRecommendationCountAggregateInputType = {
    id?: true
    trigger?: true
    action?: true
    confidence?: true
    reasoning?: true
    accepted?: true
    rejected?: true
    expanded?: true
    orderId?: true
    _all?: true
  }

  export type PricingRecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingRecommendation to aggregate.
     */
    where?: PricingRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRecommendations to fetch.
     */
    orderBy?: PricingRecommendationOrderByWithRelationInput | PricingRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingRecommendations
    **/
    _count?: true | PricingRecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingRecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingRecommendationMaxAggregateInputType
  }

  export type GetPricingRecommendationAggregateType<T extends PricingRecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingRecommendation[P]>
      : GetScalarType<T[P], AggregatePricingRecommendation[P]>
  }




  export type PricingRecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRecommendationWhereInput
    orderBy?: PricingRecommendationOrderByWithAggregationInput | PricingRecommendationOrderByWithAggregationInput[]
    by: PricingRecommendationScalarFieldEnum[] | PricingRecommendationScalarFieldEnum
    having?: PricingRecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingRecommendationCountAggregateInputType | true
    _min?: PricingRecommendationMinAggregateInputType
    _max?: PricingRecommendationMaxAggregateInputType
  }

  export type PricingRecommendationGroupByOutputType = {
    id: string
    trigger: string
    action: string
    confidence: string
    reasoning: JsonValue
    accepted: boolean
    rejected: boolean
    expanded: boolean
    orderId: string | null
    _count: PricingRecommendationCountAggregateOutputType | null
    _min: PricingRecommendationMinAggregateOutputType | null
    _max: PricingRecommendationMaxAggregateOutputType | null
  }

  type GetPricingRecommendationGroupByPayload<T extends PricingRecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingRecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingRecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingRecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], PricingRecommendationGroupByOutputType[P]>
        }
      >
    >


  export type PricingRecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trigger?: boolean
    action?: boolean
    confidence?: boolean
    reasoning?: boolean
    accepted?: boolean
    rejected?: boolean
    expanded?: boolean
    orderId?: boolean
    order?: boolean | PricingRecommendation$orderArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRecommendation"]>

  export type PricingRecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trigger?: boolean
    action?: boolean
    confidence?: boolean
    reasoning?: boolean
    accepted?: boolean
    rejected?: boolean
    expanded?: boolean
    orderId?: boolean
    order?: boolean | PricingRecommendation$orderArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRecommendation"]>

  export type PricingRecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trigger?: boolean
    action?: boolean
    confidence?: boolean
    reasoning?: boolean
    accepted?: boolean
    rejected?: boolean
    expanded?: boolean
    orderId?: boolean
    order?: boolean | PricingRecommendation$orderArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRecommendation"]>

  export type PricingRecommendationSelectScalar = {
    id?: boolean
    trigger?: boolean
    action?: boolean
    confidence?: boolean
    reasoning?: boolean
    accepted?: boolean
    rejected?: boolean
    expanded?: boolean
    orderId?: boolean
  }

  export type PricingRecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trigger" | "action" | "confidence" | "reasoning" | "accepted" | "rejected" | "expanded" | "orderId", ExtArgs["result"]["pricingRecommendation"]>
  export type PricingRecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | PricingRecommendation$orderArgs<ExtArgs>
  }
  export type PricingRecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | PricingRecommendation$orderArgs<ExtArgs>
  }
  export type PricingRecommendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | PricingRecommendation$orderArgs<ExtArgs>
  }

  export type $PricingRecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingRecommendation"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trigger: string
      action: string
      confidence: string
      reasoning: Prisma.JsonValue
      accepted: boolean
      rejected: boolean
      expanded: boolean
      orderId: string | null
    }, ExtArgs["result"]["pricingRecommendation"]>
    composites: {}
  }

  type PricingRecommendationGetPayload<S extends boolean | null | undefined | PricingRecommendationDefaultArgs> = $Result.GetResult<Prisma.$PricingRecommendationPayload, S>

  type PricingRecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingRecommendationCountAggregateInputType | true
    }

  export interface PricingRecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingRecommendation'], meta: { name: 'PricingRecommendation' } }
    /**
     * Find zero or one PricingRecommendation that matches the filter.
     * @param {PricingRecommendationFindUniqueArgs} args - Arguments to find a PricingRecommendation
     * @example
     * // Get one PricingRecommendation
     * const pricingRecommendation = await prisma.pricingRecommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingRecommendationFindUniqueArgs>(args: SelectSubset<T, PricingRecommendationFindUniqueArgs<ExtArgs>>): Prisma__PricingRecommendationClient<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PricingRecommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingRecommendationFindUniqueOrThrowArgs} args - Arguments to find a PricingRecommendation
     * @example
     * // Get one PricingRecommendation
     * const pricingRecommendation = await prisma.pricingRecommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingRecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingRecommendationClient<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingRecommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRecommendationFindFirstArgs} args - Arguments to find a PricingRecommendation
     * @example
     * // Get one PricingRecommendation
     * const pricingRecommendation = await prisma.pricingRecommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingRecommendationFindFirstArgs>(args?: SelectSubset<T, PricingRecommendationFindFirstArgs<ExtArgs>>): Prisma__PricingRecommendationClient<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingRecommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRecommendationFindFirstOrThrowArgs} args - Arguments to find a PricingRecommendation
     * @example
     * // Get one PricingRecommendation
     * const pricingRecommendation = await prisma.pricingRecommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingRecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingRecommendationClient<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PricingRecommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingRecommendations
     * const pricingRecommendations = await prisma.pricingRecommendation.findMany()
     * 
     * // Get first 10 PricingRecommendations
     * const pricingRecommendations = await prisma.pricingRecommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingRecommendationWithIdOnly = await prisma.pricingRecommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingRecommendationFindManyArgs>(args?: SelectSubset<T, PricingRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PricingRecommendation.
     * @param {PricingRecommendationCreateArgs} args - Arguments to create a PricingRecommendation.
     * @example
     * // Create one PricingRecommendation
     * const PricingRecommendation = await prisma.pricingRecommendation.create({
     *   data: {
     *     // ... data to create a PricingRecommendation
     *   }
     * })
     * 
     */
    create<T extends PricingRecommendationCreateArgs>(args: SelectSubset<T, PricingRecommendationCreateArgs<ExtArgs>>): Prisma__PricingRecommendationClient<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PricingRecommendations.
     * @param {PricingRecommendationCreateManyArgs} args - Arguments to create many PricingRecommendations.
     * @example
     * // Create many PricingRecommendations
     * const pricingRecommendation = await prisma.pricingRecommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingRecommendationCreateManyArgs>(args?: SelectSubset<T, PricingRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingRecommendations and returns the data saved in the database.
     * @param {PricingRecommendationCreateManyAndReturnArgs} args - Arguments to create many PricingRecommendations.
     * @example
     * // Create many PricingRecommendations
     * const pricingRecommendation = await prisma.pricingRecommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingRecommendations and only return the `id`
     * const pricingRecommendationWithIdOnly = await prisma.pricingRecommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingRecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PricingRecommendation.
     * @param {PricingRecommendationDeleteArgs} args - Arguments to delete one PricingRecommendation.
     * @example
     * // Delete one PricingRecommendation
     * const PricingRecommendation = await prisma.pricingRecommendation.delete({
     *   where: {
     *     // ... filter to delete one PricingRecommendation
     *   }
     * })
     * 
     */
    delete<T extends PricingRecommendationDeleteArgs>(args: SelectSubset<T, PricingRecommendationDeleteArgs<ExtArgs>>): Prisma__PricingRecommendationClient<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PricingRecommendation.
     * @param {PricingRecommendationUpdateArgs} args - Arguments to update one PricingRecommendation.
     * @example
     * // Update one PricingRecommendation
     * const pricingRecommendation = await prisma.pricingRecommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingRecommendationUpdateArgs>(args: SelectSubset<T, PricingRecommendationUpdateArgs<ExtArgs>>): Prisma__PricingRecommendationClient<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PricingRecommendations.
     * @param {PricingRecommendationDeleteManyArgs} args - Arguments to filter PricingRecommendations to delete.
     * @example
     * // Delete a few PricingRecommendations
     * const { count } = await prisma.pricingRecommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingRecommendationDeleteManyArgs>(args?: SelectSubset<T, PricingRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingRecommendations
     * const pricingRecommendation = await prisma.pricingRecommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingRecommendationUpdateManyArgs>(args: SelectSubset<T, PricingRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingRecommendations and returns the data updated in the database.
     * @param {PricingRecommendationUpdateManyAndReturnArgs} args - Arguments to update many PricingRecommendations.
     * @example
     * // Update many PricingRecommendations
     * const pricingRecommendation = await prisma.pricingRecommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingRecommendations and only return the `id`
     * const pricingRecommendationWithIdOnly = await prisma.pricingRecommendation.updateManyAndReturn({
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
    updateManyAndReturn<T extends PricingRecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PricingRecommendation.
     * @param {PricingRecommendationUpsertArgs} args - Arguments to update or create a PricingRecommendation.
     * @example
     * // Update or create a PricingRecommendation
     * const pricingRecommendation = await prisma.pricingRecommendation.upsert({
     *   create: {
     *     // ... data to create a PricingRecommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingRecommendation we want to update
     *   }
     * })
     */
    upsert<T extends PricingRecommendationUpsertArgs>(args: SelectSubset<T, PricingRecommendationUpsertArgs<ExtArgs>>): Prisma__PricingRecommendationClient<$Result.GetResult<Prisma.$PricingRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PricingRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRecommendationCountArgs} args - Arguments to filter PricingRecommendations to count.
     * @example
     * // Count the number of PricingRecommendations
     * const count = await prisma.pricingRecommendation.count({
     *   where: {
     *     // ... the filter for the PricingRecommendations we want to count
     *   }
     * })
    **/
    count<T extends PricingRecommendationCountArgs>(
      args?: Subset<T, PricingRecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingRecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingRecommendationAggregateArgs>(args: Subset<T, PricingRecommendationAggregateArgs>): Prisma.PrismaPromise<GetPricingRecommendationAggregateType<T>>

    /**
     * Group by PricingRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRecommendationGroupByArgs} args - Group by arguments.
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
      T extends PricingRecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingRecommendationGroupByArgs['orderBy'] }
        : { orderBy?: PricingRecommendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingRecommendation model
   */
  readonly fields: PricingRecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingRecommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingRecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends PricingRecommendation$orderArgs<ExtArgs> = {}>(args?: Subset<T, PricingRecommendation$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PricingRecommendation model
   */
  interface PricingRecommendationFieldRefs {
    readonly id: FieldRef<"PricingRecommendation", 'String'>
    readonly trigger: FieldRef<"PricingRecommendation", 'String'>
    readonly action: FieldRef<"PricingRecommendation", 'String'>
    readonly confidence: FieldRef<"PricingRecommendation", 'String'>
    readonly reasoning: FieldRef<"PricingRecommendation", 'Json'>
    readonly accepted: FieldRef<"PricingRecommendation", 'Boolean'>
    readonly rejected: FieldRef<"PricingRecommendation", 'Boolean'>
    readonly expanded: FieldRef<"PricingRecommendation", 'Boolean'>
    readonly orderId: FieldRef<"PricingRecommendation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PricingRecommendation findUnique
   */
  export type PricingRecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which PricingRecommendation to fetch.
     */
    where: PricingRecommendationWhereUniqueInput
  }

  /**
   * PricingRecommendation findUniqueOrThrow
   */
  export type PricingRecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which PricingRecommendation to fetch.
     */
    where: PricingRecommendationWhereUniqueInput
  }

  /**
   * PricingRecommendation findFirst
   */
  export type PricingRecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which PricingRecommendation to fetch.
     */
    where?: PricingRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRecommendations to fetch.
     */
    orderBy?: PricingRecommendationOrderByWithRelationInput | PricingRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingRecommendations.
     */
    cursor?: PricingRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRecommendations.
     */
    distinct?: PricingRecommendationScalarFieldEnum | PricingRecommendationScalarFieldEnum[]
  }

  /**
   * PricingRecommendation findFirstOrThrow
   */
  export type PricingRecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which PricingRecommendation to fetch.
     */
    where?: PricingRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRecommendations to fetch.
     */
    orderBy?: PricingRecommendationOrderByWithRelationInput | PricingRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingRecommendations.
     */
    cursor?: PricingRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRecommendations.
     */
    distinct?: PricingRecommendationScalarFieldEnum | PricingRecommendationScalarFieldEnum[]
  }

  /**
   * PricingRecommendation findMany
   */
  export type PricingRecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which PricingRecommendations to fetch.
     */
    where?: PricingRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRecommendations to fetch.
     */
    orderBy?: PricingRecommendationOrderByWithRelationInput | PricingRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingRecommendations.
     */
    cursor?: PricingRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRecommendations.
     */
    distinct?: PricingRecommendationScalarFieldEnum | PricingRecommendationScalarFieldEnum[]
  }

  /**
   * PricingRecommendation create
   */
  export type PricingRecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingRecommendation.
     */
    data: XOR<PricingRecommendationCreateInput, PricingRecommendationUncheckedCreateInput>
  }

  /**
   * PricingRecommendation createMany
   */
  export type PricingRecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingRecommendations.
     */
    data: PricingRecommendationCreateManyInput | PricingRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingRecommendation createManyAndReturn
   */
  export type PricingRecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many PricingRecommendations.
     */
    data: PricingRecommendationCreateManyInput | PricingRecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingRecommendation update
   */
  export type PricingRecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingRecommendation.
     */
    data: XOR<PricingRecommendationUpdateInput, PricingRecommendationUncheckedUpdateInput>
    /**
     * Choose, which PricingRecommendation to update.
     */
    where: PricingRecommendationWhereUniqueInput
  }

  /**
   * PricingRecommendation updateMany
   */
  export type PricingRecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingRecommendations.
     */
    data: XOR<PricingRecommendationUpdateManyMutationInput, PricingRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which PricingRecommendations to update
     */
    where?: PricingRecommendationWhereInput
    /**
     * Limit how many PricingRecommendations to update.
     */
    limit?: number
  }

  /**
   * PricingRecommendation updateManyAndReturn
   */
  export type PricingRecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * The data used to update PricingRecommendations.
     */
    data: XOR<PricingRecommendationUpdateManyMutationInput, PricingRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which PricingRecommendations to update
     */
    where?: PricingRecommendationWhereInput
    /**
     * Limit how many PricingRecommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingRecommendation upsert
   */
  export type PricingRecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingRecommendation to update in case it exists.
     */
    where: PricingRecommendationWhereUniqueInput
    /**
     * In case the PricingRecommendation found by the `where` argument doesn't exist, create a new PricingRecommendation with this data.
     */
    create: XOR<PricingRecommendationCreateInput, PricingRecommendationUncheckedCreateInput>
    /**
     * In case the PricingRecommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingRecommendationUpdateInput, PricingRecommendationUncheckedUpdateInput>
  }

  /**
   * PricingRecommendation delete
   */
  export type PricingRecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
    /**
     * Filter which PricingRecommendation to delete.
     */
    where: PricingRecommendationWhereUniqueInput
  }

  /**
   * PricingRecommendation deleteMany
   */
  export type PricingRecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingRecommendations to delete
     */
    where?: PricingRecommendationWhereInput
    /**
     * Limit how many PricingRecommendations to delete.
     */
    limit?: number
  }

  /**
   * PricingRecommendation.order
   */
  export type PricingRecommendation$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * PricingRecommendation without action
   */
  export type PricingRecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRecommendation
     */
    select?: PricingRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRecommendation
     */
    omit?: PricingRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRecommendationInclude<ExtArgs> | null
  }


  /**
   * Model StructuralRisk
   */

  export type AggregateStructuralRisk = {
    _count: StructuralRiskCountAggregateOutputType | null
    _avg: StructuralRiskAvgAggregateOutputType | null
    _sum: StructuralRiskSumAggregateOutputType | null
    _min: StructuralRiskMinAggregateOutputType | null
    _max: StructuralRiskMaxAggregateOutputType | null
  }

  export type StructuralRiskAvgAggregateOutputType = {
    id: number | null
    materialId: number | null
  }

  export type StructuralRiskSumAggregateOutputType = {
    id: number | null
    materialId: number | null
  }

  export type StructuralRiskMinAggregateOutputType = {
    id: number | null
    trend: string | null
    status: string | null
    title: string | null
    description: string | null
    gemmaAdvisory: string | null
    materialId: number | null
  }

  export type StructuralRiskMaxAggregateOutputType = {
    id: number | null
    trend: string | null
    status: string | null
    title: string | null
    description: string | null
    gemmaAdvisory: string | null
    materialId: number | null
  }

  export type StructuralRiskCountAggregateOutputType = {
    id: number
    trend: number
    status: number
    title: number
    description: number
    gemmaAdvisory: number
    materialId: number
    _all: number
  }


  export type StructuralRiskAvgAggregateInputType = {
    id?: true
    materialId?: true
  }

  export type StructuralRiskSumAggregateInputType = {
    id?: true
    materialId?: true
  }

  export type StructuralRiskMinAggregateInputType = {
    id?: true
    trend?: true
    status?: true
    title?: true
    description?: true
    gemmaAdvisory?: true
    materialId?: true
  }

  export type StructuralRiskMaxAggregateInputType = {
    id?: true
    trend?: true
    status?: true
    title?: true
    description?: true
    gemmaAdvisory?: true
    materialId?: true
  }

  export type StructuralRiskCountAggregateInputType = {
    id?: true
    trend?: true
    status?: true
    title?: true
    description?: true
    gemmaAdvisory?: true
    materialId?: true
    _all?: true
  }

  export type StructuralRiskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StructuralRisk to aggregate.
     */
    where?: StructuralRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StructuralRisks to fetch.
     */
    orderBy?: StructuralRiskOrderByWithRelationInput | StructuralRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StructuralRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StructuralRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StructuralRisks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StructuralRisks
    **/
    _count?: true | StructuralRiskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StructuralRiskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StructuralRiskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StructuralRiskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StructuralRiskMaxAggregateInputType
  }

  export type GetStructuralRiskAggregateType<T extends StructuralRiskAggregateArgs> = {
        [P in keyof T & keyof AggregateStructuralRisk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStructuralRisk[P]>
      : GetScalarType<T[P], AggregateStructuralRisk[P]>
  }




  export type StructuralRiskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StructuralRiskWhereInput
    orderBy?: StructuralRiskOrderByWithAggregationInput | StructuralRiskOrderByWithAggregationInput[]
    by: StructuralRiskScalarFieldEnum[] | StructuralRiskScalarFieldEnum
    having?: StructuralRiskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StructuralRiskCountAggregateInputType | true
    _avg?: StructuralRiskAvgAggregateInputType
    _sum?: StructuralRiskSumAggregateInputType
    _min?: StructuralRiskMinAggregateInputType
    _max?: StructuralRiskMaxAggregateInputType
  }

  export type StructuralRiskGroupByOutputType = {
    id: number
    trend: string
    status: string
    title: string
    description: string
    gemmaAdvisory: string
    materialId: number | null
    _count: StructuralRiskCountAggregateOutputType | null
    _avg: StructuralRiskAvgAggregateOutputType | null
    _sum: StructuralRiskSumAggregateOutputType | null
    _min: StructuralRiskMinAggregateOutputType | null
    _max: StructuralRiskMaxAggregateOutputType | null
  }

  type GetStructuralRiskGroupByPayload<T extends StructuralRiskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StructuralRiskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StructuralRiskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StructuralRiskGroupByOutputType[P]>
            : GetScalarType<T[P], StructuralRiskGroupByOutputType[P]>
        }
      >
    >


  export type StructuralRiskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trend?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    gemmaAdvisory?: boolean
    materialId?: boolean
    material?: boolean | StructuralRisk$materialArgs<ExtArgs>
  }, ExtArgs["result"]["structuralRisk"]>

  export type StructuralRiskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trend?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    gemmaAdvisory?: boolean
    materialId?: boolean
    material?: boolean | StructuralRisk$materialArgs<ExtArgs>
  }, ExtArgs["result"]["structuralRisk"]>

  export type StructuralRiskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trend?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    gemmaAdvisory?: boolean
    materialId?: boolean
    material?: boolean | StructuralRisk$materialArgs<ExtArgs>
  }, ExtArgs["result"]["structuralRisk"]>

  export type StructuralRiskSelectScalar = {
    id?: boolean
    trend?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    gemmaAdvisory?: boolean
    materialId?: boolean
  }

  export type StructuralRiskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trend" | "status" | "title" | "description" | "gemmaAdvisory" | "materialId", ExtArgs["result"]["structuralRisk"]>
  export type StructuralRiskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | StructuralRisk$materialArgs<ExtArgs>
  }
  export type StructuralRiskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | StructuralRisk$materialArgs<ExtArgs>
  }
  export type StructuralRiskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | StructuralRisk$materialArgs<ExtArgs>
  }

  export type $StructuralRiskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StructuralRisk"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trend: string
      status: string
      title: string
      description: string
      gemmaAdvisory: string
      materialId: number | null
    }, ExtArgs["result"]["structuralRisk"]>
    composites: {}
  }

  type StructuralRiskGetPayload<S extends boolean | null | undefined | StructuralRiskDefaultArgs> = $Result.GetResult<Prisma.$StructuralRiskPayload, S>

  type StructuralRiskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StructuralRiskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StructuralRiskCountAggregateInputType | true
    }

  export interface StructuralRiskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StructuralRisk'], meta: { name: 'StructuralRisk' } }
    /**
     * Find zero or one StructuralRisk that matches the filter.
     * @param {StructuralRiskFindUniqueArgs} args - Arguments to find a StructuralRisk
     * @example
     * // Get one StructuralRisk
     * const structuralRisk = await prisma.structuralRisk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StructuralRiskFindUniqueArgs>(args: SelectSubset<T, StructuralRiskFindUniqueArgs<ExtArgs>>): Prisma__StructuralRiskClient<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StructuralRisk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StructuralRiskFindUniqueOrThrowArgs} args - Arguments to find a StructuralRisk
     * @example
     * // Get one StructuralRisk
     * const structuralRisk = await prisma.structuralRisk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StructuralRiskFindUniqueOrThrowArgs>(args: SelectSubset<T, StructuralRiskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StructuralRiskClient<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StructuralRisk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuralRiskFindFirstArgs} args - Arguments to find a StructuralRisk
     * @example
     * // Get one StructuralRisk
     * const structuralRisk = await prisma.structuralRisk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StructuralRiskFindFirstArgs>(args?: SelectSubset<T, StructuralRiskFindFirstArgs<ExtArgs>>): Prisma__StructuralRiskClient<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StructuralRisk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuralRiskFindFirstOrThrowArgs} args - Arguments to find a StructuralRisk
     * @example
     * // Get one StructuralRisk
     * const structuralRisk = await prisma.structuralRisk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StructuralRiskFindFirstOrThrowArgs>(args?: SelectSubset<T, StructuralRiskFindFirstOrThrowArgs<ExtArgs>>): Prisma__StructuralRiskClient<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StructuralRisks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuralRiskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StructuralRisks
     * const structuralRisks = await prisma.structuralRisk.findMany()
     * 
     * // Get first 10 StructuralRisks
     * const structuralRisks = await prisma.structuralRisk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const structuralRiskWithIdOnly = await prisma.structuralRisk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StructuralRiskFindManyArgs>(args?: SelectSubset<T, StructuralRiskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StructuralRisk.
     * @param {StructuralRiskCreateArgs} args - Arguments to create a StructuralRisk.
     * @example
     * // Create one StructuralRisk
     * const StructuralRisk = await prisma.structuralRisk.create({
     *   data: {
     *     // ... data to create a StructuralRisk
     *   }
     * })
     * 
     */
    create<T extends StructuralRiskCreateArgs>(args: SelectSubset<T, StructuralRiskCreateArgs<ExtArgs>>): Prisma__StructuralRiskClient<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StructuralRisks.
     * @param {StructuralRiskCreateManyArgs} args - Arguments to create many StructuralRisks.
     * @example
     * // Create many StructuralRisks
     * const structuralRisk = await prisma.structuralRisk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StructuralRiskCreateManyArgs>(args?: SelectSubset<T, StructuralRiskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StructuralRisks and returns the data saved in the database.
     * @param {StructuralRiskCreateManyAndReturnArgs} args - Arguments to create many StructuralRisks.
     * @example
     * // Create many StructuralRisks
     * const structuralRisk = await prisma.structuralRisk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StructuralRisks and only return the `id`
     * const structuralRiskWithIdOnly = await prisma.structuralRisk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StructuralRiskCreateManyAndReturnArgs>(args?: SelectSubset<T, StructuralRiskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StructuralRisk.
     * @param {StructuralRiskDeleteArgs} args - Arguments to delete one StructuralRisk.
     * @example
     * // Delete one StructuralRisk
     * const StructuralRisk = await prisma.structuralRisk.delete({
     *   where: {
     *     // ... filter to delete one StructuralRisk
     *   }
     * })
     * 
     */
    delete<T extends StructuralRiskDeleteArgs>(args: SelectSubset<T, StructuralRiskDeleteArgs<ExtArgs>>): Prisma__StructuralRiskClient<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StructuralRisk.
     * @param {StructuralRiskUpdateArgs} args - Arguments to update one StructuralRisk.
     * @example
     * // Update one StructuralRisk
     * const structuralRisk = await prisma.structuralRisk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StructuralRiskUpdateArgs>(args: SelectSubset<T, StructuralRiskUpdateArgs<ExtArgs>>): Prisma__StructuralRiskClient<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StructuralRisks.
     * @param {StructuralRiskDeleteManyArgs} args - Arguments to filter StructuralRisks to delete.
     * @example
     * // Delete a few StructuralRisks
     * const { count } = await prisma.structuralRisk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StructuralRiskDeleteManyArgs>(args?: SelectSubset<T, StructuralRiskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StructuralRisks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuralRiskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StructuralRisks
     * const structuralRisk = await prisma.structuralRisk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StructuralRiskUpdateManyArgs>(args: SelectSubset<T, StructuralRiskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StructuralRisks and returns the data updated in the database.
     * @param {StructuralRiskUpdateManyAndReturnArgs} args - Arguments to update many StructuralRisks.
     * @example
     * // Update many StructuralRisks
     * const structuralRisk = await prisma.structuralRisk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StructuralRisks and only return the `id`
     * const structuralRiskWithIdOnly = await prisma.structuralRisk.updateManyAndReturn({
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
    updateManyAndReturn<T extends StructuralRiskUpdateManyAndReturnArgs>(args: SelectSubset<T, StructuralRiskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StructuralRisk.
     * @param {StructuralRiskUpsertArgs} args - Arguments to update or create a StructuralRisk.
     * @example
     * // Update or create a StructuralRisk
     * const structuralRisk = await prisma.structuralRisk.upsert({
     *   create: {
     *     // ... data to create a StructuralRisk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StructuralRisk we want to update
     *   }
     * })
     */
    upsert<T extends StructuralRiskUpsertArgs>(args: SelectSubset<T, StructuralRiskUpsertArgs<ExtArgs>>): Prisma__StructuralRiskClient<$Result.GetResult<Prisma.$StructuralRiskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StructuralRisks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuralRiskCountArgs} args - Arguments to filter StructuralRisks to count.
     * @example
     * // Count the number of StructuralRisks
     * const count = await prisma.structuralRisk.count({
     *   where: {
     *     // ... the filter for the StructuralRisks we want to count
     *   }
     * })
    **/
    count<T extends StructuralRiskCountArgs>(
      args?: Subset<T, StructuralRiskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StructuralRiskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StructuralRisk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuralRiskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StructuralRiskAggregateArgs>(args: Subset<T, StructuralRiskAggregateArgs>): Prisma.PrismaPromise<GetStructuralRiskAggregateType<T>>

    /**
     * Group by StructuralRisk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuralRiskGroupByArgs} args - Group by arguments.
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
      T extends StructuralRiskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StructuralRiskGroupByArgs['orderBy'] }
        : { orderBy?: StructuralRiskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StructuralRiskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStructuralRiskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StructuralRisk model
   */
  readonly fields: StructuralRiskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StructuralRisk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StructuralRiskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends StructuralRisk$materialArgs<ExtArgs> = {}>(args?: Subset<T, StructuralRisk$materialArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StructuralRisk model
   */
  interface StructuralRiskFieldRefs {
    readonly id: FieldRef<"StructuralRisk", 'Int'>
    readonly trend: FieldRef<"StructuralRisk", 'String'>
    readonly status: FieldRef<"StructuralRisk", 'String'>
    readonly title: FieldRef<"StructuralRisk", 'String'>
    readonly description: FieldRef<"StructuralRisk", 'String'>
    readonly gemmaAdvisory: FieldRef<"StructuralRisk", 'String'>
    readonly materialId: FieldRef<"StructuralRisk", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StructuralRisk findUnique
   */
  export type StructuralRiskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
    /**
     * Filter, which StructuralRisk to fetch.
     */
    where: StructuralRiskWhereUniqueInput
  }

  /**
   * StructuralRisk findUniqueOrThrow
   */
  export type StructuralRiskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
    /**
     * Filter, which StructuralRisk to fetch.
     */
    where: StructuralRiskWhereUniqueInput
  }

  /**
   * StructuralRisk findFirst
   */
  export type StructuralRiskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
    /**
     * Filter, which StructuralRisk to fetch.
     */
    where?: StructuralRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StructuralRisks to fetch.
     */
    orderBy?: StructuralRiskOrderByWithRelationInput | StructuralRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StructuralRisks.
     */
    cursor?: StructuralRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StructuralRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StructuralRisks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StructuralRisks.
     */
    distinct?: StructuralRiskScalarFieldEnum | StructuralRiskScalarFieldEnum[]
  }

  /**
   * StructuralRisk findFirstOrThrow
   */
  export type StructuralRiskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
    /**
     * Filter, which StructuralRisk to fetch.
     */
    where?: StructuralRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StructuralRisks to fetch.
     */
    orderBy?: StructuralRiskOrderByWithRelationInput | StructuralRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StructuralRisks.
     */
    cursor?: StructuralRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StructuralRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StructuralRisks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StructuralRisks.
     */
    distinct?: StructuralRiskScalarFieldEnum | StructuralRiskScalarFieldEnum[]
  }

  /**
   * StructuralRisk findMany
   */
  export type StructuralRiskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
    /**
     * Filter, which StructuralRisks to fetch.
     */
    where?: StructuralRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StructuralRisks to fetch.
     */
    orderBy?: StructuralRiskOrderByWithRelationInput | StructuralRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StructuralRisks.
     */
    cursor?: StructuralRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StructuralRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StructuralRisks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StructuralRisks.
     */
    distinct?: StructuralRiskScalarFieldEnum | StructuralRiskScalarFieldEnum[]
  }

  /**
   * StructuralRisk create
   */
  export type StructuralRiskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
    /**
     * The data needed to create a StructuralRisk.
     */
    data: XOR<StructuralRiskCreateInput, StructuralRiskUncheckedCreateInput>
  }

  /**
   * StructuralRisk createMany
   */
  export type StructuralRiskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StructuralRisks.
     */
    data: StructuralRiskCreateManyInput | StructuralRiskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StructuralRisk createManyAndReturn
   */
  export type StructuralRiskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * The data used to create many StructuralRisks.
     */
    data: StructuralRiskCreateManyInput | StructuralRiskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StructuralRisk update
   */
  export type StructuralRiskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
    /**
     * The data needed to update a StructuralRisk.
     */
    data: XOR<StructuralRiskUpdateInput, StructuralRiskUncheckedUpdateInput>
    /**
     * Choose, which StructuralRisk to update.
     */
    where: StructuralRiskWhereUniqueInput
  }

  /**
   * StructuralRisk updateMany
   */
  export type StructuralRiskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StructuralRisks.
     */
    data: XOR<StructuralRiskUpdateManyMutationInput, StructuralRiskUncheckedUpdateManyInput>
    /**
     * Filter which StructuralRisks to update
     */
    where?: StructuralRiskWhereInput
    /**
     * Limit how many StructuralRisks to update.
     */
    limit?: number
  }

  /**
   * StructuralRisk updateManyAndReturn
   */
  export type StructuralRiskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * The data used to update StructuralRisks.
     */
    data: XOR<StructuralRiskUpdateManyMutationInput, StructuralRiskUncheckedUpdateManyInput>
    /**
     * Filter which StructuralRisks to update
     */
    where?: StructuralRiskWhereInput
    /**
     * Limit how many StructuralRisks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StructuralRisk upsert
   */
  export type StructuralRiskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
    /**
     * The filter to search for the StructuralRisk to update in case it exists.
     */
    where: StructuralRiskWhereUniqueInput
    /**
     * In case the StructuralRisk found by the `where` argument doesn't exist, create a new StructuralRisk with this data.
     */
    create: XOR<StructuralRiskCreateInput, StructuralRiskUncheckedCreateInput>
    /**
     * In case the StructuralRisk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StructuralRiskUpdateInput, StructuralRiskUncheckedUpdateInput>
  }

  /**
   * StructuralRisk delete
   */
  export type StructuralRiskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
    /**
     * Filter which StructuralRisk to delete.
     */
    where: StructuralRiskWhereUniqueInput
  }

  /**
   * StructuralRisk deleteMany
   */
  export type StructuralRiskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StructuralRisks to delete
     */
    where?: StructuralRiskWhereInput
    /**
     * Limit how many StructuralRisks to delete.
     */
    limit?: number
  }

  /**
   * StructuralRisk.material
   */
  export type StructuralRisk$materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
  }

  /**
   * StructuralRisk without action
   */
  export type StructuralRiskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuralRisk
     */
    select?: StructuralRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuralRisk
     */
    omit?: StructuralRiskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuralRiskInclude<ExtArgs> | null
  }


  /**
   * Model IndustryNews
   */

  export type AggregateIndustryNews = {
    _count: IndustryNewsCountAggregateOutputType | null
    _avg: IndustryNewsAvgAggregateOutputType | null
    _sum: IndustryNewsSumAggregateOutputType | null
    _min: IndustryNewsMinAggregateOutputType | null
    _max: IndustryNewsMaxAggregateOutputType | null
  }

  export type IndustryNewsAvgAggregateOutputType = {
    id: number | null
  }

  export type IndustryNewsSumAggregateOutputType = {
    id: number | null
  }

  export type IndustryNewsMinAggregateOutputType = {
    id: number | null
    title: string | null
    source: string | null
    date: string | null
    summary: string | null
    category: string | null
    image: string | null
    url: string | null
  }

  export type IndustryNewsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    source: string | null
    date: string | null
    summary: string | null
    category: string | null
    image: string | null
    url: string | null
  }

  export type IndustryNewsCountAggregateOutputType = {
    id: number
    title: number
    source: number
    date: number
    summary: number
    category: number
    image: number
    url: number
    _all: number
  }


  export type IndustryNewsAvgAggregateInputType = {
    id?: true
  }

  export type IndustryNewsSumAggregateInputType = {
    id?: true
  }

  export type IndustryNewsMinAggregateInputType = {
    id?: true
    title?: true
    source?: true
    date?: true
    summary?: true
    category?: true
    image?: true
    url?: true
  }

  export type IndustryNewsMaxAggregateInputType = {
    id?: true
    title?: true
    source?: true
    date?: true
    summary?: true
    category?: true
    image?: true
    url?: true
  }

  export type IndustryNewsCountAggregateInputType = {
    id?: true
    title?: true
    source?: true
    date?: true
    summary?: true
    category?: true
    image?: true
    url?: true
    _all?: true
  }

  export type IndustryNewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryNews to aggregate.
     */
    where?: IndustryNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryNews to fetch.
     */
    orderBy?: IndustryNewsOrderByWithRelationInput | IndustryNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndustryNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndustryNews
    **/
    _count?: true | IndustryNewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndustryNewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndustryNewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndustryNewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndustryNewsMaxAggregateInputType
  }

  export type GetIndustryNewsAggregateType<T extends IndustryNewsAggregateArgs> = {
        [P in keyof T & keyof AggregateIndustryNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndustryNews[P]>
      : GetScalarType<T[P], AggregateIndustryNews[P]>
  }




  export type IndustryNewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryNewsWhereInput
    orderBy?: IndustryNewsOrderByWithAggregationInput | IndustryNewsOrderByWithAggregationInput[]
    by: IndustryNewsScalarFieldEnum[] | IndustryNewsScalarFieldEnum
    having?: IndustryNewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndustryNewsCountAggregateInputType | true
    _avg?: IndustryNewsAvgAggregateInputType
    _sum?: IndustryNewsSumAggregateInputType
    _min?: IndustryNewsMinAggregateInputType
    _max?: IndustryNewsMaxAggregateInputType
  }

  export type IndustryNewsGroupByOutputType = {
    id: number
    title: string
    source: string
    date: string
    summary: string
    category: string
    image: string
    url: string
    _count: IndustryNewsCountAggregateOutputType | null
    _avg: IndustryNewsAvgAggregateOutputType | null
    _sum: IndustryNewsSumAggregateOutputType | null
    _min: IndustryNewsMinAggregateOutputType | null
    _max: IndustryNewsMaxAggregateOutputType | null
  }

  type GetIndustryNewsGroupByPayload<T extends IndustryNewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndustryNewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndustryNewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndustryNewsGroupByOutputType[P]>
            : GetScalarType<T[P], IndustryNewsGroupByOutputType[P]>
        }
      >
    >


  export type IndustryNewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    source?: boolean
    date?: boolean
    summary?: boolean
    category?: boolean
    image?: boolean
    url?: boolean
  }, ExtArgs["result"]["industryNews"]>

  export type IndustryNewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    source?: boolean
    date?: boolean
    summary?: boolean
    category?: boolean
    image?: boolean
    url?: boolean
  }, ExtArgs["result"]["industryNews"]>

  export type IndustryNewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    source?: boolean
    date?: boolean
    summary?: boolean
    category?: boolean
    image?: boolean
    url?: boolean
  }, ExtArgs["result"]["industryNews"]>

  export type IndustryNewsSelectScalar = {
    id?: boolean
    title?: boolean
    source?: boolean
    date?: boolean
    summary?: boolean
    category?: boolean
    image?: boolean
    url?: boolean
  }

  export type IndustryNewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "source" | "date" | "summary" | "category" | "image" | "url", ExtArgs["result"]["industryNews"]>

  export type $IndustryNewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndustryNews"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      source: string
      date: string
      summary: string
      category: string
      image: string
      url: string
    }, ExtArgs["result"]["industryNews"]>
    composites: {}
  }

  type IndustryNewsGetPayload<S extends boolean | null | undefined | IndustryNewsDefaultArgs> = $Result.GetResult<Prisma.$IndustryNewsPayload, S>

  type IndustryNewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndustryNewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndustryNewsCountAggregateInputType | true
    }

  export interface IndustryNewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndustryNews'], meta: { name: 'IndustryNews' } }
    /**
     * Find zero or one IndustryNews that matches the filter.
     * @param {IndustryNewsFindUniqueArgs} args - Arguments to find a IndustryNews
     * @example
     * // Get one IndustryNews
     * const industryNews = await prisma.industryNews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndustryNewsFindUniqueArgs>(args: SelectSubset<T, IndustryNewsFindUniqueArgs<ExtArgs>>): Prisma__IndustryNewsClient<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndustryNews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndustryNewsFindUniqueOrThrowArgs} args - Arguments to find a IndustryNews
     * @example
     * // Get one IndustryNews
     * const industryNews = await prisma.industryNews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndustryNewsFindUniqueOrThrowArgs>(args: SelectSubset<T, IndustryNewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndustryNewsClient<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndustryNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryNewsFindFirstArgs} args - Arguments to find a IndustryNews
     * @example
     * // Get one IndustryNews
     * const industryNews = await prisma.industryNews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndustryNewsFindFirstArgs>(args?: SelectSubset<T, IndustryNewsFindFirstArgs<ExtArgs>>): Prisma__IndustryNewsClient<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndustryNews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryNewsFindFirstOrThrowArgs} args - Arguments to find a IndustryNews
     * @example
     * // Get one IndustryNews
     * const industryNews = await prisma.industryNews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndustryNewsFindFirstOrThrowArgs>(args?: SelectSubset<T, IndustryNewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndustryNewsClient<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndustryNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryNewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndustryNews
     * const industryNews = await prisma.industryNews.findMany()
     * 
     * // Get first 10 IndustryNews
     * const industryNews = await prisma.industryNews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const industryNewsWithIdOnly = await prisma.industryNews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndustryNewsFindManyArgs>(args?: SelectSubset<T, IndustryNewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndustryNews.
     * @param {IndustryNewsCreateArgs} args - Arguments to create a IndustryNews.
     * @example
     * // Create one IndustryNews
     * const IndustryNews = await prisma.industryNews.create({
     *   data: {
     *     // ... data to create a IndustryNews
     *   }
     * })
     * 
     */
    create<T extends IndustryNewsCreateArgs>(args: SelectSubset<T, IndustryNewsCreateArgs<ExtArgs>>): Prisma__IndustryNewsClient<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndustryNews.
     * @param {IndustryNewsCreateManyArgs} args - Arguments to create many IndustryNews.
     * @example
     * // Create many IndustryNews
     * const industryNews = await prisma.industryNews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndustryNewsCreateManyArgs>(args?: SelectSubset<T, IndustryNewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndustryNews and returns the data saved in the database.
     * @param {IndustryNewsCreateManyAndReturnArgs} args - Arguments to create many IndustryNews.
     * @example
     * // Create many IndustryNews
     * const industryNews = await prisma.industryNews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndustryNews and only return the `id`
     * const industryNewsWithIdOnly = await prisma.industryNews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndustryNewsCreateManyAndReturnArgs>(args?: SelectSubset<T, IndustryNewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndustryNews.
     * @param {IndustryNewsDeleteArgs} args - Arguments to delete one IndustryNews.
     * @example
     * // Delete one IndustryNews
     * const IndustryNews = await prisma.industryNews.delete({
     *   where: {
     *     // ... filter to delete one IndustryNews
     *   }
     * })
     * 
     */
    delete<T extends IndustryNewsDeleteArgs>(args: SelectSubset<T, IndustryNewsDeleteArgs<ExtArgs>>): Prisma__IndustryNewsClient<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndustryNews.
     * @param {IndustryNewsUpdateArgs} args - Arguments to update one IndustryNews.
     * @example
     * // Update one IndustryNews
     * const industryNews = await prisma.industryNews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndustryNewsUpdateArgs>(args: SelectSubset<T, IndustryNewsUpdateArgs<ExtArgs>>): Prisma__IndustryNewsClient<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndustryNews.
     * @param {IndustryNewsDeleteManyArgs} args - Arguments to filter IndustryNews to delete.
     * @example
     * // Delete a few IndustryNews
     * const { count } = await prisma.industryNews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndustryNewsDeleteManyArgs>(args?: SelectSubset<T, IndustryNewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryNewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndustryNews
     * const industryNews = await prisma.industryNews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndustryNewsUpdateManyArgs>(args: SelectSubset<T, IndustryNewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryNews and returns the data updated in the database.
     * @param {IndustryNewsUpdateManyAndReturnArgs} args - Arguments to update many IndustryNews.
     * @example
     * // Update many IndustryNews
     * const industryNews = await prisma.industryNews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndustryNews and only return the `id`
     * const industryNewsWithIdOnly = await prisma.industryNews.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndustryNewsUpdateManyAndReturnArgs>(args: SelectSubset<T, IndustryNewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndustryNews.
     * @param {IndustryNewsUpsertArgs} args - Arguments to update or create a IndustryNews.
     * @example
     * // Update or create a IndustryNews
     * const industryNews = await prisma.industryNews.upsert({
     *   create: {
     *     // ... data to create a IndustryNews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndustryNews we want to update
     *   }
     * })
     */
    upsert<T extends IndustryNewsUpsertArgs>(args: SelectSubset<T, IndustryNewsUpsertArgs<ExtArgs>>): Prisma__IndustryNewsClient<$Result.GetResult<Prisma.$IndustryNewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndustryNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryNewsCountArgs} args - Arguments to filter IndustryNews to count.
     * @example
     * // Count the number of IndustryNews
     * const count = await prisma.industryNews.count({
     *   where: {
     *     // ... the filter for the IndustryNews we want to count
     *   }
     * })
    **/
    count<T extends IndustryNewsCountArgs>(
      args?: Subset<T, IndustryNewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndustryNewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndustryNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryNewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndustryNewsAggregateArgs>(args: Subset<T, IndustryNewsAggregateArgs>): Prisma.PrismaPromise<GetIndustryNewsAggregateType<T>>

    /**
     * Group by IndustryNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryNewsGroupByArgs} args - Group by arguments.
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
      T extends IndustryNewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndustryNewsGroupByArgs['orderBy'] }
        : { orderBy?: IndustryNewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndustryNewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustryNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndustryNews model
   */
  readonly fields: IndustryNewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndustryNews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndustryNewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IndustryNews model
   */
  interface IndustryNewsFieldRefs {
    readonly id: FieldRef<"IndustryNews", 'Int'>
    readonly title: FieldRef<"IndustryNews", 'String'>
    readonly source: FieldRef<"IndustryNews", 'String'>
    readonly date: FieldRef<"IndustryNews", 'String'>
    readonly summary: FieldRef<"IndustryNews", 'String'>
    readonly category: FieldRef<"IndustryNews", 'String'>
    readonly image: FieldRef<"IndustryNews", 'String'>
    readonly url: FieldRef<"IndustryNews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IndustryNews findUnique
   */
  export type IndustryNewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * Filter, which IndustryNews to fetch.
     */
    where: IndustryNewsWhereUniqueInput
  }

  /**
   * IndustryNews findUniqueOrThrow
   */
  export type IndustryNewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * Filter, which IndustryNews to fetch.
     */
    where: IndustryNewsWhereUniqueInput
  }

  /**
   * IndustryNews findFirst
   */
  export type IndustryNewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * Filter, which IndustryNews to fetch.
     */
    where?: IndustryNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryNews to fetch.
     */
    orderBy?: IndustryNewsOrderByWithRelationInput | IndustryNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryNews.
     */
    cursor?: IndustryNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryNews.
     */
    distinct?: IndustryNewsScalarFieldEnum | IndustryNewsScalarFieldEnum[]
  }

  /**
   * IndustryNews findFirstOrThrow
   */
  export type IndustryNewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * Filter, which IndustryNews to fetch.
     */
    where?: IndustryNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryNews to fetch.
     */
    orderBy?: IndustryNewsOrderByWithRelationInput | IndustryNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryNews.
     */
    cursor?: IndustryNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryNews.
     */
    distinct?: IndustryNewsScalarFieldEnum | IndustryNewsScalarFieldEnum[]
  }

  /**
   * IndustryNews findMany
   */
  export type IndustryNewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * Filter, which IndustryNews to fetch.
     */
    where?: IndustryNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryNews to fetch.
     */
    orderBy?: IndustryNewsOrderByWithRelationInput | IndustryNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndustryNews.
     */
    cursor?: IndustryNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryNews.
     */
    distinct?: IndustryNewsScalarFieldEnum | IndustryNewsScalarFieldEnum[]
  }

  /**
   * IndustryNews create
   */
  export type IndustryNewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * The data needed to create a IndustryNews.
     */
    data: XOR<IndustryNewsCreateInput, IndustryNewsUncheckedCreateInput>
  }

  /**
   * IndustryNews createMany
   */
  export type IndustryNewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndustryNews.
     */
    data: IndustryNewsCreateManyInput | IndustryNewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndustryNews createManyAndReturn
   */
  export type IndustryNewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * The data used to create many IndustryNews.
     */
    data: IndustryNewsCreateManyInput | IndustryNewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndustryNews update
   */
  export type IndustryNewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * The data needed to update a IndustryNews.
     */
    data: XOR<IndustryNewsUpdateInput, IndustryNewsUncheckedUpdateInput>
    /**
     * Choose, which IndustryNews to update.
     */
    where: IndustryNewsWhereUniqueInput
  }

  /**
   * IndustryNews updateMany
   */
  export type IndustryNewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndustryNews.
     */
    data: XOR<IndustryNewsUpdateManyMutationInput, IndustryNewsUncheckedUpdateManyInput>
    /**
     * Filter which IndustryNews to update
     */
    where?: IndustryNewsWhereInput
    /**
     * Limit how many IndustryNews to update.
     */
    limit?: number
  }

  /**
   * IndustryNews updateManyAndReturn
   */
  export type IndustryNewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * The data used to update IndustryNews.
     */
    data: XOR<IndustryNewsUpdateManyMutationInput, IndustryNewsUncheckedUpdateManyInput>
    /**
     * Filter which IndustryNews to update
     */
    where?: IndustryNewsWhereInput
    /**
     * Limit how many IndustryNews to update.
     */
    limit?: number
  }

  /**
   * IndustryNews upsert
   */
  export type IndustryNewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * The filter to search for the IndustryNews to update in case it exists.
     */
    where: IndustryNewsWhereUniqueInput
    /**
     * In case the IndustryNews found by the `where` argument doesn't exist, create a new IndustryNews with this data.
     */
    create: XOR<IndustryNewsCreateInput, IndustryNewsUncheckedCreateInput>
    /**
     * In case the IndustryNews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndustryNewsUpdateInput, IndustryNewsUncheckedUpdateInput>
  }

  /**
   * IndustryNews delete
   */
  export type IndustryNewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
    /**
     * Filter which IndustryNews to delete.
     */
    where: IndustryNewsWhereUniqueInput
  }

  /**
   * IndustryNews deleteMany
   */
  export type IndustryNewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryNews to delete
     */
    where?: IndustryNewsWhereInput
    /**
     * Limit how many IndustryNews to delete.
     */
    limit?: number
  }

  /**
   * IndustryNews without action
   */
  export type IndustryNewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryNews
     */
    select?: IndustryNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryNews
     */
    omit?: IndustryNewsOmit<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    minThreshold: number | null
    materialId: number | null
  }

  export type InventoryItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    minThreshold: number | null
    materialId: number | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    sku: string | null
    quantity: number | null
    unit: string | null
    location: string | null
    minThreshold: number | null
    status: string | null
    image: string | null
    lastUpdated: Date | null
    materialId: number | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    sku: string | null
    quantity: number | null
    unit: string | null
    location: string | null
    minThreshold: number | null
    status: string | null
    image: string | null
    lastUpdated: Date | null
    materialId: number | null
  }

  export type InventoryItemCountAggregateOutputType = {
    id: number
    name: number
    category: number
    sku: number
    quantity: number
    unit: number
    location: number
    minThreshold: number
    status: number
    image: number
    lastUpdated: number
    materialId: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    id?: true
    quantity?: true
    minThreshold?: true
    materialId?: true
  }

  export type InventoryItemSumAggregateInputType = {
    id?: true
    quantity?: true
    minThreshold?: true
    materialId?: true
  }

  export type InventoryItemMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    sku?: true
    quantity?: true
    unit?: true
    location?: true
    minThreshold?: true
    status?: true
    image?: true
    lastUpdated?: true
    materialId?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    sku?: true
    quantity?: true
    unit?: true
    location?: true
    minThreshold?: true
    status?: true
    image?: true
    lastUpdated?: true
    materialId?: true
  }

  export type InventoryItemCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    sku?: true
    quantity?: true
    unit?: true
    location?: true
    minThreshold?: true
    status?: true
    image?: true
    lastUpdated?: true
    materialId?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    id: number
    name: string
    category: string
    sku: string
    quantity: number
    unit: string
    location: string
    minThreshold: number
    status: string
    image: string
    lastUpdated: Date
    materialId: number | null
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    sku?: boolean
    quantity?: boolean
    unit?: boolean
    location?: boolean
    minThreshold?: boolean
    status?: boolean
    image?: boolean
    lastUpdated?: boolean
    materialId?: boolean
    material?: boolean | InventoryItem$materialArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    sku?: boolean
    quantity?: boolean
    unit?: boolean
    location?: boolean
    minThreshold?: boolean
    status?: boolean
    image?: boolean
    lastUpdated?: boolean
    materialId?: boolean
    material?: boolean | InventoryItem$materialArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    sku?: boolean
    quantity?: boolean
    unit?: boolean
    location?: boolean
    minThreshold?: boolean
    status?: boolean
    image?: boolean
    lastUpdated?: boolean
    materialId?: boolean
    material?: boolean | InventoryItem$materialArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    sku?: boolean
    quantity?: boolean
    unit?: boolean
    location?: boolean
    minThreshold?: boolean
    status?: boolean
    image?: boolean
    lastUpdated?: boolean
    materialId?: boolean
  }

  export type InventoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "sku" | "quantity" | "unit" | "location" | "minThreshold" | "status" | "image" | "lastUpdated" | "materialId", ExtArgs["result"]["inventoryItem"]>
  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | InventoryItem$materialArgs<ExtArgs>
  }
  export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | InventoryItem$materialArgs<ExtArgs>
  }
  export type InventoryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | InventoryItem$materialArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string
      sku: string
      quantity: number
      unit: string
      location: string
      minThreshold: number
      status: string
      image: string
      lastUpdated: Date
      materialId: number | null
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryItems and returns the data saved in the database.
     * @param {InventoryItemCreateManyAndReturnArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems and returns the data updated in the database.
     * @param {InventoryItemUpdateManyAndReturnArgs} args - Arguments to update many InventoryItems.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends InventoryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
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
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends InventoryItem$materialArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$materialArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InventoryItem model
   */
  interface InventoryItemFieldRefs {
    readonly id: FieldRef<"InventoryItem", 'Int'>
    readonly name: FieldRef<"InventoryItem", 'String'>
    readonly category: FieldRef<"InventoryItem", 'String'>
    readonly sku: FieldRef<"InventoryItem", 'String'>
    readonly quantity: FieldRef<"InventoryItem", 'Int'>
    readonly unit: FieldRef<"InventoryItem", 'String'>
    readonly location: FieldRef<"InventoryItem", 'String'>
    readonly minThreshold: FieldRef<"InventoryItem", 'Int'>
    readonly status: FieldRef<"InventoryItem", 'String'>
    readonly image: FieldRef<"InventoryItem", 'String'>
    readonly lastUpdated: FieldRef<"InventoryItem", 'DateTime'>
    readonly materialId: FieldRef<"InventoryItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem createManyAndReturn
   */
  export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItem updateManyAndReturn
   */
  export type InventoryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to delete.
     */
    limit?: number
  }

  /**
   * InventoryItem.material
   */
  export type InventoryItem$materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model CncMachineTelemetry
   */

  export type AggregateCncMachineTelemetry = {
    _count: CncMachineTelemetryCountAggregateOutputType | null
    _avg: CncMachineTelemetryAvgAggregateOutputType | null
    _sum: CncMachineTelemetrySumAggregateOutputType | null
    _min: CncMachineTelemetryMinAggregateOutputType | null
    _max: CncMachineTelemetryMaxAggregateOutputType | null
  }

  export type CncMachineTelemetryAvgAggregateOutputType = {
    id: number | null
    airTemp: number | null
    processTemp: number | null
    rotationalSpeed: number | null
    torque: number | null
    toolWear: number | null
  }

  export type CncMachineTelemetrySumAggregateOutputType = {
    id: number | null
    airTemp: number | null
    processTemp: number | null
    rotationalSpeed: number | null
    torque: number | null
    toolWear: number | null
  }

  export type CncMachineTelemetryMinAggregateOutputType = {
    id: number | null
    machineId: string | null
    airTemp: number | null
    processTemp: number | null
    rotationalSpeed: number | null
    torque: number | null
    toolWear: number | null
    machineFailure: boolean | null
    twf: boolean | null
    hdf: boolean | null
    pwf: boolean | null
    osf: boolean | null
    rnf: boolean | null
    timestamp: Date | null
  }

  export type CncMachineTelemetryMaxAggregateOutputType = {
    id: number | null
    machineId: string | null
    airTemp: number | null
    processTemp: number | null
    rotationalSpeed: number | null
    torque: number | null
    toolWear: number | null
    machineFailure: boolean | null
    twf: boolean | null
    hdf: boolean | null
    pwf: boolean | null
    osf: boolean | null
    rnf: boolean | null
    timestamp: Date | null
  }

  export type CncMachineTelemetryCountAggregateOutputType = {
    id: number
    machineId: number
    airTemp: number
    processTemp: number
    rotationalSpeed: number
    torque: number
    toolWear: number
    machineFailure: number
    twf: number
    hdf: number
    pwf: number
    osf: number
    rnf: number
    timestamp: number
    _all: number
  }


  export type CncMachineTelemetryAvgAggregateInputType = {
    id?: true
    airTemp?: true
    processTemp?: true
    rotationalSpeed?: true
    torque?: true
    toolWear?: true
  }

  export type CncMachineTelemetrySumAggregateInputType = {
    id?: true
    airTemp?: true
    processTemp?: true
    rotationalSpeed?: true
    torque?: true
    toolWear?: true
  }

  export type CncMachineTelemetryMinAggregateInputType = {
    id?: true
    machineId?: true
    airTemp?: true
    processTemp?: true
    rotationalSpeed?: true
    torque?: true
    toolWear?: true
    machineFailure?: true
    twf?: true
    hdf?: true
    pwf?: true
    osf?: true
    rnf?: true
    timestamp?: true
  }

  export type CncMachineTelemetryMaxAggregateInputType = {
    id?: true
    machineId?: true
    airTemp?: true
    processTemp?: true
    rotationalSpeed?: true
    torque?: true
    toolWear?: true
    machineFailure?: true
    twf?: true
    hdf?: true
    pwf?: true
    osf?: true
    rnf?: true
    timestamp?: true
  }

  export type CncMachineTelemetryCountAggregateInputType = {
    id?: true
    machineId?: true
    airTemp?: true
    processTemp?: true
    rotationalSpeed?: true
    torque?: true
    toolWear?: true
    machineFailure?: true
    twf?: true
    hdf?: true
    pwf?: true
    osf?: true
    rnf?: true
    timestamp?: true
    _all?: true
  }

  export type CncMachineTelemetryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CncMachineTelemetry to aggregate.
     */
    where?: CncMachineTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CncMachineTelemetries to fetch.
     */
    orderBy?: CncMachineTelemetryOrderByWithRelationInput | CncMachineTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CncMachineTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CncMachineTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CncMachineTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CncMachineTelemetries
    **/
    _count?: true | CncMachineTelemetryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CncMachineTelemetryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CncMachineTelemetrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CncMachineTelemetryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CncMachineTelemetryMaxAggregateInputType
  }

  export type GetCncMachineTelemetryAggregateType<T extends CncMachineTelemetryAggregateArgs> = {
        [P in keyof T & keyof AggregateCncMachineTelemetry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCncMachineTelemetry[P]>
      : GetScalarType<T[P], AggregateCncMachineTelemetry[P]>
  }




  export type CncMachineTelemetryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CncMachineTelemetryWhereInput
    orderBy?: CncMachineTelemetryOrderByWithAggregationInput | CncMachineTelemetryOrderByWithAggregationInput[]
    by: CncMachineTelemetryScalarFieldEnum[] | CncMachineTelemetryScalarFieldEnum
    having?: CncMachineTelemetryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CncMachineTelemetryCountAggregateInputType | true
    _avg?: CncMachineTelemetryAvgAggregateInputType
    _sum?: CncMachineTelemetrySumAggregateInputType
    _min?: CncMachineTelemetryMinAggregateInputType
    _max?: CncMachineTelemetryMaxAggregateInputType
  }

  export type CncMachineTelemetryGroupByOutputType = {
    id: number
    machineId: string
    airTemp: number
    processTemp: number
    rotationalSpeed: number
    torque: number
    toolWear: number
    machineFailure: boolean
    twf: boolean
    hdf: boolean
    pwf: boolean
    osf: boolean
    rnf: boolean
    timestamp: Date
    _count: CncMachineTelemetryCountAggregateOutputType | null
    _avg: CncMachineTelemetryAvgAggregateOutputType | null
    _sum: CncMachineTelemetrySumAggregateOutputType | null
    _min: CncMachineTelemetryMinAggregateOutputType | null
    _max: CncMachineTelemetryMaxAggregateOutputType | null
  }

  type GetCncMachineTelemetryGroupByPayload<T extends CncMachineTelemetryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CncMachineTelemetryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CncMachineTelemetryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CncMachineTelemetryGroupByOutputType[P]>
            : GetScalarType<T[P], CncMachineTelemetryGroupByOutputType[P]>
        }
      >
    >


  export type CncMachineTelemetrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    machineId?: boolean
    airTemp?: boolean
    processTemp?: boolean
    rotationalSpeed?: boolean
    torque?: boolean
    toolWear?: boolean
    machineFailure?: boolean
    twf?: boolean
    hdf?: boolean
    pwf?: boolean
    osf?: boolean
    rnf?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["cncMachineTelemetry"]>

  export type CncMachineTelemetrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    machineId?: boolean
    airTemp?: boolean
    processTemp?: boolean
    rotationalSpeed?: boolean
    torque?: boolean
    toolWear?: boolean
    machineFailure?: boolean
    twf?: boolean
    hdf?: boolean
    pwf?: boolean
    osf?: boolean
    rnf?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["cncMachineTelemetry"]>

  export type CncMachineTelemetrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    machineId?: boolean
    airTemp?: boolean
    processTemp?: boolean
    rotationalSpeed?: boolean
    torque?: boolean
    toolWear?: boolean
    machineFailure?: boolean
    twf?: boolean
    hdf?: boolean
    pwf?: boolean
    osf?: boolean
    rnf?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["cncMachineTelemetry"]>

  export type CncMachineTelemetrySelectScalar = {
    id?: boolean
    machineId?: boolean
    airTemp?: boolean
    processTemp?: boolean
    rotationalSpeed?: boolean
    torque?: boolean
    toolWear?: boolean
    machineFailure?: boolean
    twf?: boolean
    hdf?: boolean
    pwf?: boolean
    osf?: boolean
    rnf?: boolean
    timestamp?: boolean
  }

  export type CncMachineTelemetryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "machineId" | "airTemp" | "processTemp" | "rotationalSpeed" | "torque" | "toolWear" | "machineFailure" | "twf" | "hdf" | "pwf" | "osf" | "rnf" | "timestamp", ExtArgs["result"]["cncMachineTelemetry"]>

  export type $CncMachineTelemetryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CncMachineTelemetry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      machineId: string
      airTemp: number
      processTemp: number
      rotationalSpeed: number
      torque: number
      toolWear: number
      machineFailure: boolean
      twf: boolean
      hdf: boolean
      pwf: boolean
      osf: boolean
      rnf: boolean
      timestamp: Date
    }, ExtArgs["result"]["cncMachineTelemetry"]>
    composites: {}
  }

  type CncMachineTelemetryGetPayload<S extends boolean | null | undefined | CncMachineTelemetryDefaultArgs> = $Result.GetResult<Prisma.$CncMachineTelemetryPayload, S>

  type CncMachineTelemetryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CncMachineTelemetryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CncMachineTelemetryCountAggregateInputType | true
    }

  export interface CncMachineTelemetryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CncMachineTelemetry'], meta: { name: 'CncMachineTelemetry' } }
    /**
     * Find zero or one CncMachineTelemetry that matches the filter.
     * @param {CncMachineTelemetryFindUniqueArgs} args - Arguments to find a CncMachineTelemetry
     * @example
     * // Get one CncMachineTelemetry
     * const cncMachineTelemetry = await prisma.cncMachineTelemetry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CncMachineTelemetryFindUniqueArgs>(args: SelectSubset<T, CncMachineTelemetryFindUniqueArgs<ExtArgs>>): Prisma__CncMachineTelemetryClient<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CncMachineTelemetry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CncMachineTelemetryFindUniqueOrThrowArgs} args - Arguments to find a CncMachineTelemetry
     * @example
     * // Get one CncMachineTelemetry
     * const cncMachineTelemetry = await prisma.cncMachineTelemetry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CncMachineTelemetryFindUniqueOrThrowArgs>(args: SelectSubset<T, CncMachineTelemetryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CncMachineTelemetryClient<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CncMachineTelemetry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CncMachineTelemetryFindFirstArgs} args - Arguments to find a CncMachineTelemetry
     * @example
     * // Get one CncMachineTelemetry
     * const cncMachineTelemetry = await prisma.cncMachineTelemetry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CncMachineTelemetryFindFirstArgs>(args?: SelectSubset<T, CncMachineTelemetryFindFirstArgs<ExtArgs>>): Prisma__CncMachineTelemetryClient<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CncMachineTelemetry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CncMachineTelemetryFindFirstOrThrowArgs} args - Arguments to find a CncMachineTelemetry
     * @example
     * // Get one CncMachineTelemetry
     * const cncMachineTelemetry = await prisma.cncMachineTelemetry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CncMachineTelemetryFindFirstOrThrowArgs>(args?: SelectSubset<T, CncMachineTelemetryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CncMachineTelemetryClient<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CncMachineTelemetries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CncMachineTelemetryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CncMachineTelemetries
     * const cncMachineTelemetries = await prisma.cncMachineTelemetry.findMany()
     * 
     * // Get first 10 CncMachineTelemetries
     * const cncMachineTelemetries = await prisma.cncMachineTelemetry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cncMachineTelemetryWithIdOnly = await prisma.cncMachineTelemetry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CncMachineTelemetryFindManyArgs>(args?: SelectSubset<T, CncMachineTelemetryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CncMachineTelemetry.
     * @param {CncMachineTelemetryCreateArgs} args - Arguments to create a CncMachineTelemetry.
     * @example
     * // Create one CncMachineTelemetry
     * const CncMachineTelemetry = await prisma.cncMachineTelemetry.create({
     *   data: {
     *     // ... data to create a CncMachineTelemetry
     *   }
     * })
     * 
     */
    create<T extends CncMachineTelemetryCreateArgs>(args: SelectSubset<T, CncMachineTelemetryCreateArgs<ExtArgs>>): Prisma__CncMachineTelemetryClient<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CncMachineTelemetries.
     * @param {CncMachineTelemetryCreateManyArgs} args - Arguments to create many CncMachineTelemetries.
     * @example
     * // Create many CncMachineTelemetries
     * const cncMachineTelemetry = await prisma.cncMachineTelemetry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CncMachineTelemetryCreateManyArgs>(args?: SelectSubset<T, CncMachineTelemetryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CncMachineTelemetries and returns the data saved in the database.
     * @param {CncMachineTelemetryCreateManyAndReturnArgs} args - Arguments to create many CncMachineTelemetries.
     * @example
     * // Create many CncMachineTelemetries
     * const cncMachineTelemetry = await prisma.cncMachineTelemetry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CncMachineTelemetries and only return the `id`
     * const cncMachineTelemetryWithIdOnly = await prisma.cncMachineTelemetry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CncMachineTelemetryCreateManyAndReturnArgs>(args?: SelectSubset<T, CncMachineTelemetryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CncMachineTelemetry.
     * @param {CncMachineTelemetryDeleteArgs} args - Arguments to delete one CncMachineTelemetry.
     * @example
     * // Delete one CncMachineTelemetry
     * const CncMachineTelemetry = await prisma.cncMachineTelemetry.delete({
     *   where: {
     *     // ... filter to delete one CncMachineTelemetry
     *   }
     * })
     * 
     */
    delete<T extends CncMachineTelemetryDeleteArgs>(args: SelectSubset<T, CncMachineTelemetryDeleteArgs<ExtArgs>>): Prisma__CncMachineTelemetryClient<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CncMachineTelemetry.
     * @param {CncMachineTelemetryUpdateArgs} args - Arguments to update one CncMachineTelemetry.
     * @example
     * // Update one CncMachineTelemetry
     * const cncMachineTelemetry = await prisma.cncMachineTelemetry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CncMachineTelemetryUpdateArgs>(args: SelectSubset<T, CncMachineTelemetryUpdateArgs<ExtArgs>>): Prisma__CncMachineTelemetryClient<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CncMachineTelemetries.
     * @param {CncMachineTelemetryDeleteManyArgs} args - Arguments to filter CncMachineTelemetries to delete.
     * @example
     * // Delete a few CncMachineTelemetries
     * const { count } = await prisma.cncMachineTelemetry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CncMachineTelemetryDeleteManyArgs>(args?: SelectSubset<T, CncMachineTelemetryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CncMachineTelemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CncMachineTelemetryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CncMachineTelemetries
     * const cncMachineTelemetry = await prisma.cncMachineTelemetry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CncMachineTelemetryUpdateManyArgs>(args: SelectSubset<T, CncMachineTelemetryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CncMachineTelemetries and returns the data updated in the database.
     * @param {CncMachineTelemetryUpdateManyAndReturnArgs} args - Arguments to update many CncMachineTelemetries.
     * @example
     * // Update many CncMachineTelemetries
     * const cncMachineTelemetry = await prisma.cncMachineTelemetry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CncMachineTelemetries and only return the `id`
     * const cncMachineTelemetryWithIdOnly = await prisma.cncMachineTelemetry.updateManyAndReturn({
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
    updateManyAndReturn<T extends CncMachineTelemetryUpdateManyAndReturnArgs>(args: SelectSubset<T, CncMachineTelemetryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CncMachineTelemetry.
     * @param {CncMachineTelemetryUpsertArgs} args - Arguments to update or create a CncMachineTelemetry.
     * @example
     * // Update or create a CncMachineTelemetry
     * const cncMachineTelemetry = await prisma.cncMachineTelemetry.upsert({
     *   create: {
     *     // ... data to create a CncMachineTelemetry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CncMachineTelemetry we want to update
     *   }
     * })
     */
    upsert<T extends CncMachineTelemetryUpsertArgs>(args: SelectSubset<T, CncMachineTelemetryUpsertArgs<ExtArgs>>): Prisma__CncMachineTelemetryClient<$Result.GetResult<Prisma.$CncMachineTelemetryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CncMachineTelemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CncMachineTelemetryCountArgs} args - Arguments to filter CncMachineTelemetries to count.
     * @example
     * // Count the number of CncMachineTelemetries
     * const count = await prisma.cncMachineTelemetry.count({
     *   where: {
     *     // ... the filter for the CncMachineTelemetries we want to count
     *   }
     * })
    **/
    count<T extends CncMachineTelemetryCountArgs>(
      args?: Subset<T, CncMachineTelemetryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CncMachineTelemetryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CncMachineTelemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CncMachineTelemetryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CncMachineTelemetryAggregateArgs>(args: Subset<T, CncMachineTelemetryAggregateArgs>): Prisma.PrismaPromise<GetCncMachineTelemetryAggregateType<T>>

    /**
     * Group by CncMachineTelemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CncMachineTelemetryGroupByArgs} args - Group by arguments.
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
      T extends CncMachineTelemetryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CncMachineTelemetryGroupByArgs['orderBy'] }
        : { orderBy?: CncMachineTelemetryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CncMachineTelemetryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCncMachineTelemetryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CncMachineTelemetry model
   */
  readonly fields: CncMachineTelemetryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CncMachineTelemetry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CncMachineTelemetryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CncMachineTelemetry model
   */
  interface CncMachineTelemetryFieldRefs {
    readonly id: FieldRef<"CncMachineTelemetry", 'Int'>
    readonly machineId: FieldRef<"CncMachineTelemetry", 'String'>
    readonly airTemp: FieldRef<"CncMachineTelemetry", 'Float'>
    readonly processTemp: FieldRef<"CncMachineTelemetry", 'Float'>
    readonly rotationalSpeed: FieldRef<"CncMachineTelemetry", 'Float'>
    readonly torque: FieldRef<"CncMachineTelemetry", 'Float'>
    readonly toolWear: FieldRef<"CncMachineTelemetry", 'Float'>
    readonly machineFailure: FieldRef<"CncMachineTelemetry", 'Boolean'>
    readonly twf: FieldRef<"CncMachineTelemetry", 'Boolean'>
    readonly hdf: FieldRef<"CncMachineTelemetry", 'Boolean'>
    readonly pwf: FieldRef<"CncMachineTelemetry", 'Boolean'>
    readonly osf: FieldRef<"CncMachineTelemetry", 'Boolean'>
    readonly rnf: FieldRef<"CncMachineTelemetry", 'Boolean'>
    readonly timestamp: FieldRef<"CncMachineTelemetry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CncMachineTelemetry findUnique
   */
  export type CncMachineTelemetryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * Filter, which CncMachineTelemetry to fetch.
     */
    where: CncMachineTelemetryWhereUniqueInput
  }

  /**
   * CncMachineTelemetry findUniqueOrThrow
   */
  export type CncMachineTelemetryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * Filter, which CncMachineTelemetry to fetch.
     */
    where: CncMachineTelemetryWhereUniqueInput
  }

  /**
   * CncMachineTelemetry findFirst
   */
  export type CncMachineTelemetryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * Filter, which CncMachineTelemetry to fetch.
     */
    where?: CncMachineTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CncMachineTelemetries to fetch.
     */
    orderBy?: CncMachineTelemetryOrderByWithRelationInput | CncMachineTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CncMachineTelemetries.
     */
    cursor?: CncMachineTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CncMachineTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CncMachineTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CncMachineTelemetries.
     */
    distinct?: CncMachineTelemetryScalarFieldEnum | CncMachineTelemetryScalarFieldEnum[]
  }

  /**
   * CncMachineTelemetry findFirstOrThrow
   */
  export type CncMachineTelemetryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * Filter, which CncMachineTelemetry to fetch.
     */
    where?: CncMachineTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CncMachineTelemetries to fetch.
     */
    orderBy?: CncMachineTelemetryOrderByWithRelationInput | CncMachineTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CncMachineTelemetries.
     */
    cursor?: CncMachineTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CncMachineTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CncMachineTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CncMachineTelemetries.
     */
    distinct?: CncMachineTelemetryScalarFieldEnum | CncMachineTelemetryScalarFieldEnum[]
  }

  /**
   * CncMachineTelemetry findMany
   */
  export type CncMachineTelemetryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * Filter, which CncMachineTelemetries to fetch.
     */
    where?: CncMachineTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CncMachineTelemetries to fetch.
     */
    orderBy?: CncMachineTelemetryOrderByWithRelationInput | CncMachineTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CncMachineTelemetries.
     */
    cursor?: CncMachineTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CncMachineTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CncMachineTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CncMachineTelemetries.
     */
    distinct?: CncMachineTelemetryScalarFieldEnum | CncMachineTelemetryScalarFieldEnum[]
  }

  /**
   * CncMachineTelemetry create
   */
  export type CncMachineTelemetryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * The data needed to create a CncMachineTelemetry.
     */
    data: XOR<CncMachineTelemetryCreateInput, CncMachineTelemetryUncheckedCreateInput>
  }

  /**
   * CncMachineTelemetry createMany
   */
  export type CncMachineTelemetryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CncMachineTelemetries.
     */
    data: CncMachineTelemetryCreateManyInput | CncMachineTelemetryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CncMachineTelemetry createManyAndReturn
   */
  export type CncMachineTelemetryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * The data used to create many CncMachineTelemetries.
     */
    data: CncMachineTelemetryCreateManyInput | CncMachineTelemetryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CncMachineTelemetry update
   */
  export type CncMachineTelemetryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * The data needed to update a CncMachineTelemetry.
     */
    data: XOR<CncMachineTelemetryUpdateInput, CncMachineTelemetryUncheckedUpdateInput>
    /**
     * Choose, which CncMachineTelemetry to update.
     */
    where: CncMachineTelemetryWhereUniqueInput
  }

  /**
   * CncMachineTelemetry updateMany
   */
  export type CncMachineTelemetryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CncMachineTelemetries.
     */
    data: XOR<CncMachineTelemetryUpdateManyMutationInput, CncMachineTelemetryUncheckedUpdateManyInput>
    /**
     * Filter which CncMachineTelemetries to update
     */
    where?: CncMachineTelemetryWhereInput
    /**
     * Limit how many CncMachineTelemetries to update.
     */
    limit?: number
  }

  /**
   * CncMachineTelemetry updateManyAndReturn
   */
  export type CncMachineTelemetryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * The data used to update CncMachineTelemetries.
     */
    data: XOR<CncMachineTelemetryUpdateManyMutationInput, CncMachineTelemetryUncheckedUpdateManyInput>
    /**
     * Filter which CncMachineTelemetries to update
     */
    where?: CncMachineTelemetryWhereInput
    /**
     * Limit how many CncMachineTelemetries to update.
     */
    limit?: number
  }

  /**
   * CncMachineTelemetry upsert
   */
  export type CncMachineTelemetryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * The filter to search for the CncMachineTelemetry to update in case it exists.
     */
    where: CncMachineTelemetryWhereUniqueInput
    /**
     * In case the CncMachineTelemetry found by the `where` argument doesn't exist, create a new CncMachineTelemetry with this data.
     */
    create: XOR<CncMachineTelemetryCreateInput, CncMachineTelemetryUncheckedCreateInput>
    /**
     * In case the CncMachineTelemetry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CncMachineTelemetryUpdateInput, CncMachineTelemetryUncheckedUpdateInput>
  }

  /**
   * CncMachineTelemetry delete
   */
  export type CncMachineTelemetryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
    /**
     * Filter which CncMachineTelemetry to delete.
     */
    where: CncMachineTelemetryWhereUniqueInput
  }

  /**
   * CncMachineTelemetry deleteMany
   */
  export type CncMachineTelemetryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CncMachineTelemetries to delete
     */
    where?: CncMachineTelemetryWhereInput
    /**
     * Limit how many CncMachineTelemetries to delete.
     */
    limit?: number
  }

  /**
   * CncMachineTelemetry without action
   */
  export type CncMachineTelemetryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CncMachineTelemetry
     */
    select?: CncMachineTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CncMachineTelemetry
     */
    omit?: CncMachineTelemetryOmit<ExtArgs> | null
  }


  /**
   * Model IndianMetalIndex
   */

  export type AggregateIndianMetalIndex = {
    _count: IndianMetalIndexCountAggregateOutputType | null
    _avg: IndianMetalIndexAvgAggregateOutputType | null
    _sum: IndianMetalIndexSumAggregateOutputType | null
    _min: IndianMetalIndexMinAggregateOutputType | null
    _max: IndianMetalIndexMaxAggregateOutputType | null
  }

  export type IndianMetalIndexAvgAggregateOutputType = {
    id: number | null
    price: number | null
    change: number | null
  }

  export type IndianMetalIndexSumAggregateOutputType = {
    id: number | null
    price: number | null
    change: number | null
  }

  export type IndianMetalIndexMinAggregateOutputType = {
    id: number | null
    source: string | null
    material: string | null
    region: string | null
    price: number | null
    unit: string | null
    change: number | null
    lastUpdated: Date | null
  }

  export type IndianMetalIndexMaxAggregateOutputType = {
    id: number | null
    source: string | null
    material: string | null
    region: string | null
    price: number | null
    unit: string | null
    change: number | null
    lastUpdated: Date | null
  }

  export type IndianMetalIndexCountAggregateOutputType = {
    id: number
    source: number
    material: number
    region: number
    price: number
    unit: number
    change: number
    lastUpdated: number
    _all: number
  }


  export type IndianMetalIndexAvgAggregateInputType = {
    id?: true
    price?: true
    change?: true
  }

  export type IndianMetalIndexSumAggregateInputType = {
    id?: true
    price?: true
    change?: true
  }

  export type IndianMetalIndexMinAggregateInputType = {
    id?: true
    source?: true
    material?: true
    region?: true
    price?: true
    unit?: true
    change?: true
    lastUpdated?: true
  }

  export type IndianMetalIndexMaxAggregateInputType = {
    id?: true
    source?: true
    material?: true
    region?: true
    price?: true
    unit?: true
    change?: true
    lastUpdated?: true
  }

  export type IndianMetalIndexCountAggregateInputType = {
    id?: true
    source?: true
    material?: true
    region?: true
    price?: true
    unit?: true
    change?: true
    lastUpdated?: true
    _all?: true
  }

  export type IndianMetalIndexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndianMetalIndex to aggregate.
     */
    where?: IndianMetalIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndianMetalIndices to fetch.
     */
    orderBy?: IndianMetalIndexOrderByWithRelationInput | IndianMetalIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndianMetalIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndianMetalIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndianMetalIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndianMetalIndices
    **/
    _count?: true | IndianMetalIndexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndianMetalIndexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndianMetalIndexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndianMetalIndexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndianMetalIndexMaxAggregateInputType
  }

  export type GetIndianMetalIndexAggregateType<T extends IndianMetalIndexAggregateArgs> = {
        [P in keyof T & keyof AggregateIndianMetalIndex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndianMetalIndex[P]>
      : GetScalarType<T[P], AggregateIndianMetalIndex[P]>
  }




  export type IndianMetalIndexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndianMetalIndexWhereInput
    orderBy?: IndianMetalIndexOrderByWithAggregationInput | IndianMetalIndexOrderByWithAggregationInput[]
    by: IndianMetalIndexScalarFieldEnum[] | IndianMetalIndexScalarFieldEnum
    having?: IndianMetalIndexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndianMetalIndexCountAggregateInputType | true
    _avg?: IndianMetalIndexAvgAggregateInputType
    _sum?: IndianMetalIndexSumAggregateInputType
    _min?: IndianMetalIndexMinAggregateInputType
    _max?: IndianMetalIndexMaxAggregateInputType
  }

  export type IndianMetalIndexGroupByOutputType = {
    id: number
    source: string
    material: string
    region: string
    price: number
    unit: string
    change: number
    lastUpdated: Date
    _count: IndianMetalIndexCountAggregateOutputType | null
    _avg: IndianMetalIndexAvgAggregateOutputType | null
    _sum: IndianMetalIndexSumAggregateOutputType | null
    _min: IndianMetalIndexMinAggregateOutputType | null
    _max: IndianMetalIndexMaxAggregateOutputType | null
  }

  type GetIndianMetalIndexGroupByPayload<T extends IndianMetalIndexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndianMetalIndexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndianMetalIndexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndianMetalIndexGroupByOutputType[P]>
            : GetScalarType<T[P], IndianMetalIndexGroupByOutputType[P]>
        }
      >
    >


  export type IndianMetalIndexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    material?: boolean
    region?: boolean
    price?: boolean
    unit?: boolean
    change?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["indianMetalIndex"]>

  export type IndianMetalIndexSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    material?: boolean
    region?: boolean
    price?: boolean
    unit?: boolean
    change?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["indianMetalIndex"]>

  export type IndianMetalIndexSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    material?: boolean
    region?: boolean
    price?: boolean
    unit?: boolean
    change?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["indianMetalIndex"]>

  export type IndianMetalIndexSelectScalar = {
    id?: boolean
    source?: boolean
    material?: boolean
    region?: boolean
    price?: boolean
    unit?: boolean
    change?: boolean
    lastUpdated?: boolean
  }

  export type IndianMetalIndexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "material" | "region" | "price" | "unit" | "change" | "lastUpdated", ExtArgs["result"]["indianMetalIndex"]>

  export type $IndianMetalIndexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndianMetalIndex"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      source: string
      material: string
      region: string
      price: number
      unit: string
      change: number
      lastUpdated: Date
    }, ExtArgs["result"]["indianMetalIndex"]>
    composites: {}
  }

  type IndianMetalIndexGetPayload<S extends boolean | null | undefined | IndianMetalIndexDefaultArgs> = $Result.GetResult<Prisma.$IndianMetalIndexPayload, S>

  type IndianMetalIndexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndianMetalIndexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndianMetalIndexCountAggregateInputType | true
    }

  export interface IndianMetalIndexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndianMetalIndex'], meta: { name: 'IndianMetalIndex' } }
    /**
     * Find zero or one IndianMetalIndex that matches the filter.
     * @param {IndianMetalIndexFindUniqueArgs} args - Arguments to find a IndianMetalIndex
     * @example
     * // Get one IndianMetalIndex
     * const indianMetalIndex = await prisma.indianMetalIndex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndianMetalIndexFindUniqueArgs>(args: SelectSubset<T, IndianMetalIndexFindUniqueArgs<ExtArgs>>): Prisma__IndianMetalIndexClient<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndianMetalIndex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndianMetalIndexFindUniqueOrThrowArgs} args - Arguments to find a IndianMetalIndex
     * @example
     * // Get one IndianMetalIndex
     * const indianMetalIndex = await prisma.indianMetalIndex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndianMetalIndexFindUniqueOrThrowArgs>(args: SelectSubset<T, IndianMetalIndexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndianMetalIndexClient<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndianMetalIndex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndianMetalIndexFindFirstArgs} args - Arguments to find a IndianMetalIndex
     * @example
     * // Get one IndianMetalIndex
     * const indianMetalIndex = await prisma.indianMetalIndex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndianMetalIndexFindFirstArgs>(args?: SelectSubset<T, IndianMetalIndexFindFirstArgs<ExtArgs>>): Prisma__IndianMetalIndexClient<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndianMetalIndex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndianMetalIndexFindFirstOrThrowArgs} args - Arguments to find a IndianMetalIndex
     * @example
     * // Get one IndianMetalIndex
     * const indianMetalIndex = await prisma.indianMetalIndex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndianMetalIndexFindFirstOrThrowArgs>(args?: SelectSubset<T, IndianMetalIndexFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndianMetalIndexClient<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndianMetalIndices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndianMetalIndexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndianMetalIndices
     * const indianMetalIndices = await prisma.indianMetalIndex.findMany()
     * 
     * // Get first 10 IndianMetalIndices
     * const indianMetalIndices = await prisma.indianMetalIndex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indianMetalIndexWithIdOnly = await prisma.indianMetalIndex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndianMetalIndexFindManyArgs>(args?: SelectSubset<T, IndianMetalIndexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndianMetalIndex.
     * @param {IndianMetalIndexCreateArgs} args - Arguments to create a IndianMetalIndex.
     * @example
     * // Create one IndianMetalIndex
     * const IndianMetalIndex = await prisma.indianMetalIndex.create({
     *   data: {
     *     // ... data to create a IndianMetalIndex
     *   }
     * })
     * 
     */
    create<T extends IndianMetalIndexCreateArgs>(args: SelectSubset<T, IndianMetalIndexCreateArgs<ExtArgs>>): Prisma__IndianMetalIndexClient<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndianMetalIndices.
     * @param {IndianMetalIndexCreateManyArgs} args - Arguments to create many IndianMetalIndices.
     * @example
     * // Create many IndianMetalIndices
     * const indianMetalIndex = await prisma.indianMetalIndex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndianMetalIndexCreateManyArgs>(args?: SelectSubset<T, IndianMetalIndexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndianMetalIndices and returns the data saved in the database.
     * @param {IndianMetalIndexCreateManyAndReturnArgs} args - Arguments to create many IndianMetalIndices.
     * @example
     * // Create many IndianMetalIndices
     * const indianMetalIndex = await prisma.indianMetalIndex.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndianMetalIndices and only return the `id`
     * const indianMetalIndexWithIdOnly = await prisma.indianMetalIndex.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndianMetalIndexCreateManyAndReturnArgs>(args?: SelectSubset<T, IndianMetalIndexCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndianMetalIndex.
     * @param {IndianMetalIndexDeleteArgs} args - Arguments to delete one IndianMetalIndex.
     * @example
     * // Delete one IndianMetalIndex
     * const IndianMetalIndex = await prisma.indianMetalIndex.delete({
     *   where: {
     *     // ... filter to delete one IndianMetalIndex
     *   }
     * })
     * 
     */
    delete<T extends IndianMetalIndexDeleteArgs>(args: SelectSubset<T, IndianMetalIndexDeleteArgs<ExtArgs>>): Prisma__IndianMetalIndexClient<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndianMetalIndex.
     * @param {IndianMetalIndexUpdateArgs} args - Arguments to update one IndianMetalIndex.
     * @example
     * // Update one IndianMetalIndex
     * const indianMetalIndex = await prisma.indianMetalIndex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndianMetalIndexUpdateArgs>(args: SelectSubset<T, IndianMetalIndexUpdateArgs<ExtArgs>>): Prisma__IndianMetalIndexClient<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndianMetalIndices.
     * @param {IndianMetalIndexDeleteManyArgs} args - Arguments to filter IndianMetalIndices to delete.
     * @example
     * // Delete a few IndianMetalIndices
     * const { count } = await prisma.indianMetalIndex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndianMetalIndexDeleteManyArgs>(args?: SelectSubset<T, IndianMetalIndexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndianMetalIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndianMetalIndexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndianMetalIndices
     * const indianMetalIndex = await prisma.indianMetalIndex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndianMetalIndexUpdateManyArgs>(args: SelectSubset<T, IndianMetalIndexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndianMetalIndices and returns the data updated in the database.
     * @param {IndianMetalIndexUpdateManyAndReturnArgs} args - Arguments to update many IndianMetalIndices.
     * @example
     * // Update many IndianMetalIndices
     * const indianMetalIndex = await prisma.indianMetalIndex.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndianMetalIndices and only return the `id`
     * const indianMetalIndexWithIdOnly = await prisma.indianMetalIndex.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndianMetalIndexUpdateManyAndReturnArgs>(args: SelectSubset<T, IndianMetalIndexUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndianMetalIndex.
     * @param {IndianMetalIndexUpsertArgs} args - Arguments to update or create a IndianMetalIndex.
     * @example
     * // Update or create a IndianMetalIndex
     * const indianMetalIndex = await prisma.indianMetalIndex.upsert({
     *   create: {
     *     // ... data to create a IndianMetalIndex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndianMetalIndex we want to update
     *   }
     * })
     */
    upsert<T extends IndianMetalIndexUpsertArgs>(args: SelectSubset<T, IndianMetalIndexUpsertArgs<ExtArgs>>): Prisma__IndianMetalIndexClient<$Result.GetResult<Prisma.$IndianMetalIndexPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndianMetalIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndianMetalIndexCountArgs} args - Arguments to filter IndianMetalIndices to count.
     * @example
     * // Count the number of IndianMetalIndices
     * const count = await prisma.indianMetalIndex.count({
     *   where: {
     *     // ... the filter for the IndianMetalIndices we want to count
     *   }
     * })
    **/
    count<T extends IndianMetalIndexCountArgs>(
      args?: Subset<T, IndianMetalIndexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndianMetalIndexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndianMetalIndex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndianMetalIndexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndianMetalIndexAggregateArgs>(args: Subset<T, IndianMetalIndexAggregateArgs>): Prisma.PrismaPromise<GetIndianMetalIndexAggregateType<T>>

    /**
     * Group by IndianMetalIndex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndianMetalIndexGroupByArgs} args - Group by arguments.
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
      T extends IndianMetalIndexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndianMetalIndexGroupByArgs['orderBy'] }
        : { orderBy?: IndianMetalIndexGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndianMetalIndexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndianMetalIndexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndianMetalIndex model
   */
  readonly fields: IndianMetalIndexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndianMetalIndex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndianMetalIndexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IndianMetalIndex model
   */
  interface IndianMetalIndexFieldRefs {
    readonly id: FieldRef<"IndianMetalIndex", 'Int'>
    readonly source: FieldRef<"IndianMetalIndex", 'String'>
    readonly material: FieldRef<"IndianMetalIndex", 'String'>
    readonly region: FieldRef<"IndianMetalIndex", 'String'>
    readonly price: FieldRef<"IndianMetalIndex", 'Float'>
    readonly unit: FieldRef<"IndianMetalIndex", 'String'>
    readonly change: FieldRef<"IndianMetalIndex", 'Float'>
    readonly lastUpdated: FieldRef<"IndianMetalIndex", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndianMetalIndex findUnique
   */
  export type IndianMetalIndexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * Filter, which IndianMetalIndex to fetch.
     */
    where: IndianMetalIndexWhereUniqueInput
  }

  /**
   * IndianMetalIndex findUniqueOrThrow
   */
  export type IndianMetalIndexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * Filter, which IndianMetalIndex to fetch.
     */
    where: IndianMetalIndexWhereUniqueInput
  }

  /**
   * IndianMetalIndex findFirst
   */
  export type IndianMetalIndexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * Filter, which IndianMetalIndex to fetch.
     */
    where?: IndianMetalIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndianMetalIndices to fetch.
     */
    orderBy?: IndianMetalIndexOrderByWithRelationInput | IndianMetalIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndianMetalIndices.
     */
    cursor?: IndianMetalIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndianMetalIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndianMetalIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndianMetalIndices.
     */
    distinct?: IndianMetalIndexScalarFieldEnum | IndianMetalIndexScalarFieldEnum[]
  }

  /**
   * IndianMetalIndex findFirstOrThrow
   */
  export type IndianMetalIndexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * Filter, which IndianMetalIndex to fetch.
     */
    where?: IndianMetalIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndianMetalIndices to fetch.
     */
    orderBy?: IndianMetalIndexOrderByWithRelationInput | IndianMetalIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndianMetalIndices.
     */
    cursor?: IndianMetalIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndianMetalIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndianMetalIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndianMetalIndices.
     */
    distinct?: IndianMetalIndexScalarFieldEnum | IndianMetalIndexScalarFieldEnum[]
  }

  /**
   * IndianMetalIndex findMany
   */
  export type IndianMetalIndexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * Filter, which IndianMetalIndices to fetch.
     */
    where?: IndianMetalIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndianMetalIndices to fetch.
     */
    orderBy?: IndianMetalIndexOrderByWithRelationInput | IndianMetalIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndianMetalIndices.
     */
    cursor?: IndianMetalIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndianMetalIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndianMetalIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndianMetalIndices.
     */
    distinct?: IndianMetalIndexScalarFieldEnum | IndianMetalIndexScalarFieldEnum[]
  }

  /**
   * IndianMetalIndex create
   */
  export type IndianMetalIndexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * The data needed to create a IndianMetalIndex.
     */
    data: XOR<IndianMetalIndexCreateInput, IndianMetalIndexUncheckedCreateInput>
  }

  /**
   * IndianMetalIndex createMany
   */
  export type IndianMetalIndexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndianMetalIndices.
     */
    data: IndianMetalIndexCreateManyInput | IndianMetalIndexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndianMetalIndex createManyAndReturn
   */
  export type IndianMetalIndexCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * The data used to create many IndianMetalIndices.
     */
    data: IndianMetalIndexCreateManyInput | IndianMetalIndexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndianMetalIndex update
   */
  export type IndianMetalIndexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * The data needed to update a IndianMetalIndex.
     */
    data: XOR<IndianMetalIndexUpdateInput, IndianMetalIndexUncheckedUpdateInput>
    /**
     * Choose, which IndianMetalIndex to update.
     */
    where: IndianMetalIndexWhereUniqueInput
  }

  /**
   * IndianMetalIndex updateMany
   */
  export type IndianMetalIndexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndianMetalIndices.
     */
    data: XOR<IndianMetalIndexUpdateManyMutationInput, IndianMetalIndexUncheckedUpdateManyInput>
    /**
     * Filter which IndianMetalIndices to update
     */
    where?: IndianMetalIndexWhereInput
    /**
     * Limit how many IndianMetalIndices to update.
     */
    limit?: number
  }

  /**
   * IndianMetalIndex updateManyAndReturn
   */
  export type IndianMetalIndexUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * The data used to update IndianMetalIndices.
     */
    data: XOR<IndianMetalIndexUpdateManyMutationInput, IndianMetalIndexUncheckedUpdateManyInput>
    /**
     * Filter which IndianMetalIndices to update
     */
    where?: IndianMetalIndexWhereInput
    /**
     * Limit how many IndianMetalIndices to update.
     */
    limit?: number
  }

  /**
   * IndianMetalIndex upsert
   */
  export type IndianMetalIndexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * The filter to search for the IndianMetalIndex to update in case it exists.
     */
    where: IndianMetalIndexWhereUniqueInput
    /**
     * In case the IndianMetalIndex found by the `where` argument doesn't exist, create a new IndianMetalIndex with this data.
     */
    create: XOR<IndianMetalIndexCreateInput, IndianMetalIndexUncheckedCreateInput>
    /**
     * In case the IndianMetalIndex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndianMetalIndexUpdateInput, IndianMetalIndexUncheckedUpdateInput>
  }

  /**
   * IndianMetalIndex delete
   */
  export type IndianMetalIndexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
    /**
     * Filter which IndianMetalIndex to delete.
     */
    where: IndianMetalIndexWhereUniqueInput
  }

  /**
   * IndianMetalIndex deleteMany
   */
  export type IndianMetalIndexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndianMetalIndices to delete
     */
    where?: IndianMetalIndexWhereInput
    /**
     * Limit how many IndianMetalIndices to delete.
     */
    limit?: number
  }

  /**
   * IndianMetalIndex without action
   */
  export type IndianMetalIndexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndianMetalIndex
     */
    select?: IndianMetalIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndianMetalIndex
     */
    omit?: IndianMetalIndexOmit<ExtArgs> | null
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


  export const MaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    currentCost: 'currentCost',
    marketCost: 'marketCost',
    supplier: 'supplier'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    client: 'client',
    margin: 'margin',
    materialId: 'materialId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    qty: 'qty',
    supplier: 'supplier',
    currentNode: 'currentNode',
    eta: 'eta',
    status: 'status',
    gemmaAnnotation: 'gemmaAnnotation'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const ShipmentStepScalarFieldEnum: {
    id: 'id',
    shipmentId: 'shipmentId',
    name: 'name',
    status: 'status',
    sequence: 'sequence'
  };

  export type ShipmentStepScalarFieldEnum = (typeof ShipmentStepScalarFieldEnum)[keyof typeof ShipmentStepScalarFieldEnum]


  export const MarketSignalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    source: 'source',
    date: 'date',
    relevance: 'relevance',
    tag: 'tag',
    desc: 'desc',
    materialId: 'materialId'
  };

  export type MarketSignalScalarFieldEnum = (typeof MarketSignalScalarFieldEnum)[keyof typeof MarketSignalScalarFieldEnum]


  export const PricingRecommendationScalarFieldEnum: {
    id: 'id',
    trigger: 'trigger',
    action: 'action',
    confidence: 'confidence',
    reasoning: 'reasoning',
    accepted: 'accepted',
    rejected: 'rejected',
    expanded: 'expanded',
    orderId: 'orderId'
  };

  export type PricingRecommendationScalarFieldEnum = (typeof PricingRecommendationScalarFieldEnum)[keyof typeof PricingRecommendationScalarFieldEnum]


  export const StructuralRiskScalarFieldEnum: {
    id: 'id',
    trend: 'trend',
    status: 'status',
    title: 'title',
    description: 'description',
    gemmaAdvisory: 'gemmaAdvisory',
    materialId: 'materialId'
  };

  export type StructuralRiskScalarFieldEnum = (typeof StructuralRiskScalarFieldEnum)[keyof typeof StructuralRiskScalarFieldEnum]


  export const IndustryNewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    source: 'source',
    date: 'date',
    summary: 'summary',
    category: 'category',
    image: 'image',
    url: 'url'
  };

  export type IndustryNewsScalarFieldEnum = (typeof IndustryNewsScalarFieldEnum)[keyof typeof IndustryNewsScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    sku: 'sku',
    quantity: 'quantity',
    unit: 'unit',
    location: 'location',
    minThreshold: 'minThreshold',
    status: 'status',
    image: 'image',
    lastUpdated: 'lastUpdated',
    materialId: 'materialId'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const CncMachineTelemetryScalarFieldEnum: {
    id: 'id',
    machineId: 'machineId',
    airTemp: 'airTemp',
    processTemp: 'processTemp',
    rotationalSpeed: 'rotationalSpeed',
    torque: 'torque',
    toolWear: 'toolWear',
    machineFailure: 'machineFailure',
    twf: 'twf',
    hdf: 'hdf',
    pwf: 'pwf',
    osf: 'osf',
    rnf: 'rnf',
    timestamp: 'timestamp'
  };

  export type CncMachineTelemetryScalarFieldEnum = (typeof CncMachineTelemetryScalarFieldEnum)[keyof typeof CncMachineTelemetryScalarFieldEnum]


  export const IndianMetalIndexScalarFieldEnum: {
    id: 'id',
    source: 'source',
    material: 'material',
    region: 'region',
    price: 'price',
    unit: 'unit',
    change: 'change',
    lastUpdated: 'lastUpdated'
  };

  export type IndianMetalIndexScalarFieldEnum = (typeof IndianMetalIndexScalarFieldEnum)[keyof typeof IndianMetalIndexScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: IntFilter<"Material"> | number
    name?: StringFilter<"Material"> | string
    currentCost?: FloatFilter<"Material"> | number
    marketCost?: FloatFilter<"Material"> | number
    supplier?: StringFilter<"Material"> | string
    orders?: OrderListRelationFilter
    shipments?: ShipmentListRelationFilter
    inventoryItems?: InventoryItemListRelationFilter
    marketSignals?: MarketSignalListRelationFilter
    structuralRisks?: StructuralRiskListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    currentCost?: SortOrder
    marketCost?: SortOrder
    supplier?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    shipments?: ShipmentOrderByRelationAggregateInput
    inventoryItems?: InventoryItemOrderByRelationAggregateInput
    marketSignals?: MarketSignalOrderByRelationAggregateInput
    structuralRisks?: StructuralRiskOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    currentCost?: FloatFilter<"Material"> | number
    marketCost?: FloatFilter<"Material"> | number
    supplier?: StringFilter<"Material"> | string
    orders?: OrderListRelationFilter
    shipments?: ShipmentListRelationFilter
    inventoryItems?: InventoryItemListRelationFilter
    marketSignals?: MarketSignalListRelationFilter
    structuralRisks?: StructuralRiskListRelationFilter
  }, "id" | "name">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    currentCost?: SortOrder
    marketCost?: SortOrder
    supplier?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Material"> | number
    name?: StringWithAggregatesFilter<"Material"> | string
    currentCost?: FloatWithAggregatesFilter<"Material"> | number
    marketCost?: FloatWithAggregatesFilter<"Material"> | number
    supplier?: StringWithAggregatesFilter<"Material"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    client?: StringFilter<"Order"> | string
    margin?: StringFilter<"Order"> | string
    materialId?: IntFilter<"Order"> | number
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    pricingRecommendations?: PricingRecommendationListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    client?: SortOrder
    margin?: SortOrder
    materialId?: SortOrder
    material?: MaterialOrderByWithRelationInput
    pricingRecommendations?: PricingRecommendationOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    client?: StringFilter<"Order"> | string
    margin?: StringFilter<"Order"> | string
    materialId?: IntFilter<"Order"> | number
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    pricingRecommendations?: PricingRecommendationListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    client?: SortOrder
    margin?: SortOrder
    materialId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    client?: StringWithAggregatesFilter<"Order"> | string
    margin?: StringWithAggregatesFilter<"Order"> | string
    materialId?: IntWithAggregatesFilter<"Order"> | number
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: IntFilter<"Shipment"> | number
    materialId?: IntFilter<"Shipment"> | number
    qty?: StringFilter<"Shipment"> | string
    supplier?: StringFilter<"Shipment"> | string
    currentNode?: StringFilter<"Shipment"> | string
    eta?: StringFilter<"Shipment"> | string
    status?: StringFilter<"Shipment"> | string
    gemmaAnnotation?: StringFilter<"Shipment"> | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    steps?: ShipmentStepListRelationFilter
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    qty?: SortOrder
    supplier?: SortOrder
    currentNode?: SortOrder
    eta?: SortOrder
    status?: SortOrder
    gemmaAnnotation?: SortOrder
    material?: MaterialOrderByWithRelationInput
    steps?: ShipmentStepOrderByRelationAggregateInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    materialId?: IntFilter<"Shipment"> | number
    qty?: StringFilter<"Shipment"> | string
    supplier?: StringFilter<"Shipment"> | string
    currentNode?: StringFilter<"Shipment"> | string
    eta?: StringFilter<"Shipment"> | string
    status?: StringFilter<"Shipment"> | string
    gemmaAnnotation?: StringFilter<"Shipment"> | string
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    steps?: ShipmentStepListRelationFilter
  }, "id">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    qty?: SortOrder
    supplier?: SortOrder
    currentNode?: SortOrder
    eta?: SortOrder
    status?: SortOrder
    gemmaAnnotation?: SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _avg?: ShipmentAvgOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
    _sum?: ShipmentSumOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shipment"> | number
    materialId?: IntWithAggregatesFilter<"Shipment"> | number
    qty?: StringWithAggregatesFilter<"Shipment"> | string
    supplier?: StringWithAggregatesFilter<"Shipment"> | string
    currentNode?: StringWithAggregatesFilter<"Shipment"> | string
    eta?: StringWithAggregatesFilter<"Shipment"> | string
    status?: StringWithAggregatesFilter<"Shipment"> | string
    gemmaAnnotation?: StringWithAggregatesFilter<"Shipment"> | string
  }

  export type ShipmentStepWhereInput = {
    AND?: ShipmentStepWhereInput | ShipmentStepWhereInput[]
    OR?: ShipmentStepWhereInput[]
    NOT?: ShipmentStepWhereInput | ShipmentStepWhereInput[]
    id?: IntFilter<"ShipmentStep"> | number
    shipmentId?: IntFilter<"ShipmentStep"> | number
    name?: StringFilter<"ShipmentStep"> | string
    status?: StringFilter<"ShipmentStep"> | string
    sequence?: IntFilter<"ShipmentStep"> | number
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }

  export type ShipmentStepOrderByWithRelationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    sequence?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type ShipmentStepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShipmentStepWhereInput | ShipmentStepWhereInput[]
    OR?: ShipmentStepWhereInput[]
    NOT?: ShipmentStepWhereInput | ShipmentStepWhereInput[]
    shipmentId?: IntFilter<"ShipmentStep"> | number
    name?: StringFilter<"ShipmentStep"> | string
    status?: StringFilter<"ShipmentStep"> | string
    sequence?: IntFilter<"ShipmentStep"> | number
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }, "id">

  export type ShipmentStepOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    sequence?: SortOrder
    _count?: ShipmentStepCountOrderByAggregateInput
    _avg?: ShipmentStepAvgOrderByAggregateInput
    _max?: ShipmentStepMaxOrderByAggregateInput
    _min?: ShipmentStepMinOrderByAggregateInput
    _sum?: ShipmentStepSumOrderByAggregateInput
  }

  export type ShipmentStepScalarWhereWithAggregatesInput = {
    AND?: ShipmentStepScalarWhereWithAggregatesInput | ShipmentStepScalarWhereWithAggregatesInput[]
    OR?: ShipmentStepScalarWhereWithAggregatesInput[]
    NOT?: ShipmentStepScalarWhereWithAggregatesInput | ShipmentStepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShipmentStep"> | number
    shipmentId?: IntWithAggregatesFilter<"ShipmentStep"> | number
    name?: StringWithAggregatesFilter<"ShipmentStep"> | string
    status?: StringWithAggregatesFilter<"ShipmentStep"> | string
    sequence?: IntWithAggregatesFilter<"ShipmentStep"> | number
  }

  export type MarketSignalWhereInput = {
    AND?: MarketSignalWhereInput | MarketSignalWhereInput[]
    OR?: MarketSignalWhereInput[]
    NOT?: MarketSignalWhereInput | MarketSignalWhereInput[]
    id?: IntFilter<"MarketSignal"> | number
    title?: StringFilter<"MarketSignal"> | string
    source?: StringFilter<"MarketSignal"> | string
    date?: StringFilter<"MarketSignal"> | string
    relevance?: StringFilter<"MarketSignal"> | string
    tag?: StringFilter<"MarketSignal"> | string
    desc?: StringFilter<"MarketSignal"> | string
    materialId?: IntNullableFilter<"MarketSignal"> | number | null
    material?: XOR<MaterialNullableScalarRelationFilter, MaterialWhereInput> | null
  }

  export type MarketSignalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    source?: SortOrder
    date?: SortOrder
    relevance?: SortOrder
    tag?: SortOrder
    desc?: SortOrder
    materialId?: SortOrderInput | SortOrder
    material?: MaterialOrderByWithRelationInput
  }

  export type MarketSignalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MarketSignalWhereInput | MarketSignalWhereInput[]
    OR?: MarketSignalWhereInput[]
    NOT?: MarketSignalWhereInput | MarketSignalWhereInput[]
    title?: StringFilter<"MarketSignal"> | string
    source?: StringFilter<"MarketSignal"> | string
    date?: StringFilter<"MarketSignal"> | string
    relevance?: StringFilter<"MarketSignal"> | string
    tag?: StringFilter<"MarketSignal"> | string
    desc?: StringFilter<"MarketSignal"> | string
    materialId?: IntNullableFilter<"MarketSignal"> | number | null
    material?: XOR<MaterialNullableScalarRelationFilter, MaterialWhereInput> | null
  }, "id">

  export type MarketSignalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    source?: SortOrder
    date?: SortOrder
    relevance?: SortOrder
    tag?: SortOrder
    desc?: SortOrder
    materialId?: SortOrderInput | SortOrder
    _count?: MarketSignalCountOrderByAggregateInput
    _avg?: MarketSignalAvgOrderByAggregateInput
    _max?: MarketSignalMaxOrderByAggregateInput
    _min?: MarketSignalMinOrderByAggregateInput
    _sum?: MarketSignalSumOrderByAggregateInput
  }

  export type MarketSignalScalarWhereWithAggregatesInput = {
    AND?: MarketSignalScalarWhereWithAggregatesInput | MarketSignalScalarWhereWithAggregatesInput[]
    OR?: MarketSignalScalarWhereWithAggregatesInput[]
    NOT?: MarketSignalScalarWhereWithAggregatesInput | MarketSignalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MarketSignal"> | number
    title?: StringWithAggregatesFilter<"MarketSignal"> | string
    source?: StringWithAggregatesFilter<"MarketSignal"> | string
    date?: StringWithAggregatesFilter<"MarketSignal"> | string
    relevance?: StringWithAggregatesFilter<"MarketSignal"> | string
    tag?: StringWithAggregatesFilter<"MarketSignal"> | string
    desc?: StringWithAggregatesFilter<"MarketSignal"> | string
    materialId?: IntNullableWithAggregatesFilter<"MarketSignal"> | number | null
  }

  export type PricingRecommendationWhereInput = {
    AND?: PricingRecommendationWhereInput | PricingRecommendationWhereInput[]
    OR?: PricingRecommendationWhereInput[]
    NOT?: PricingRecommendationWhereInput | PricingRecommendationWhereInput[]
    id?: StringFilter<"PricingRecommendation"> | string
    trigger?: StringFilter<"PricingRecommendation"> | string
    action?: StringFilter<"PricingRecommendation"> | string
    confidence?: StringFilter<"PricingRecommendation"> | string
    reasoning?: JsonFilter<"PricingRecommendation">
    accepted?: BoolFilter<"PricingRecommendation"> | boolean
    rejected?: BoolFilter<"PricingRecommendation"> | boolean
    expanded?: BoolFilter<"PricingRecommendation"> | boolean
    orderId?: StringNullableFilter<"PricingRecommendation"> | string | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }

  export type PricingRecommendationOrderByWithRelationInput = {
    id?: SortOrder
    trigger?: SortOrder
    action?: SortOrder
    confidence?: SortOrder
    reasoning?: SortOrder
    accepted?: SortOrder
    rejected?: SortOrder
    expanded?: SortOrder
    orderId?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PricingRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PricingRecommendationWhereInput | PricingRecommendationWhereInput[]
    OR?: PricingRecommendationWhereInput[]
    NOT?: PricingRecommendationWhereInput | PricingRecommendationWhereInput[]
    trigger?: StringFilter<"PricingRecommendation"> | string
    action?: StringFilter<"PricingRecommendation"> | string
    confidence?: StringFilter<"PricingRecommendation"> | string
    reasoning?: JsonFilter<"PricingRecommendation">
    accepted?: BoolFilter<"PricingRecommendation"> | boolean
    rejected?: BoolFilter<"PricingRecommendation"> | boolean
    expanded?: BoolFilter<"PricingRecommendation"> | boolean
    orderId?: StringNullableFilter<"PricingRecommendation"> | string | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }, "id">

  export type PricingRecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    trigger?: SortOrder
    action?: SortOrder
    confidence?: SortOrder
    reasoning?: SortOrder
    accepted?: SortOrder
    rejected?: SortOrder
    expanded?: SortOrder
    orderId?: SortOrderInput | SortOrder
    _count?: PricingRecommendationCountOrderByAggregateInput
    _max?: PricingRecommendationMaxOrderByAggregateInput
    _min?: PricingRecommendationMinOrderByAggregateInput
  }

  export type PricingRecommendationScalarWhereWithAggregatesInput = {
    AND?: PricingRecommendationScalarWhereWithAggregatesInput | PricingRecommendationScalarWhereWithAggregatesInput[]
    OR?: PricingRecommendationScalarWhereWithAggregatesInput[]
    NOT?: PricingRecommendationScalarWhereWithAggregatesInput | PricingRecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PricingRecommendation"> | string
    trigger?: StringWithAggregatesFilter<"PricingRecommendation"> | string
    action?: StringWithAggregatesFilter<"PricingRecommendation"> | string
    confidence?: StringWithAggregatesFilter<"PricingRecommendation"> | string
    reasoning?: JsonWithAggregatesFilter<"PricingRecommendation">
    accepted?: BoolWithAggregatesFilter<"PricingRecommendation"> | boolean
    rejected?: BoolWithAggregatesFilter<"PricingRecommendation"> | boolean
    expanded?: BoolWithAggregatesFilter<"PricingRecommendation"> | boolean
    orderId?: StringNullableWithAggregatesFilter<"PricingRecommendation"> | string | null
  }

  export type StructuralRiskWhereInput = {
    AND?: StructuralRiskWhereInput | StructuralRiskWhereInput[]
    OR?: StructuralRiskWhereInput[]
    NOT?: StructuralRiskWhereInput | StructuralRiskWhereInput[]
    id?: IntFilter<"StructuralRisk"> | number
    trend?: StringFilter<"StructuralRisk"> | string
    status?: StringFilter<"StructuralRisk"> | string
    title?: StringFilter<"StructuralRisk"> | string
    description?: StringFilter<"StructuralRisk"> | string
    gemmaAdvisory?: StringFilter<"StructuralRisk"> | string
    materialId?: IntNullableFilter<"StructuralRisk"> | number | null
    material?: XOR<MaterialNullableScalarRelationFilter, MaterialWhereInput> | null
  }

  export type StructuralRiskOrderByWithRelationInput = {
    id?: SortOrder
    trend?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    gemmaAdvisory?: SortOrder
    materialId?: SortOrderInput | SortOrder
    material?: MaterialOrderByWithRelationInput
  }

  export type StructuralRiskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StructuralRiskWhereInput | StructuralRiskWhereInput[]
    OR?: StructuralRiskWhereInput[]
    NOT?: StructuralRiskWhereInput | StructuralRiskWhereInput[]
    trend?: StringFilter<"StructuralRisk"> | string
    status?: StringFilter<"StructuralRisk"> | string
    title?: StringFilter<"StructuralRisk"> | string
    description?: StringFilter<"StructuralRisk"> | string
    gemmaAdvisory?: StringFilter<"StructuralRisk"> | string
    materialId?: IntNullableFilter<"StructuralRisk"> | number | null
    material?: XOR<MaterialNullableScalarRelationFilter, MaterialWhereInput> | null
  }, "id">

  export type StructuralRiskOrderByWithAggregationInput = {
    id?: SortOrder
    trend?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    gemmaAdvisory?: SortOrder
    materialId?: SortOrderInput | SortOrder
    _count?: StructuralRiskCountOrderByAggregateInput
    _avg?: StructuralRiskAvgOrderByAggregateInput
    _max?: StructuralRiskMaxOrderByAggregateInput
    _min?: StructuralRiskMinOrderByAggregateInput
    _sum?: StructuralRiskSumOrderByAggregateInput
  }

  export type StructuralRiskScalarWhereWithAggregatesInput = {
    AND?: StructuralRiskScalarWhereWithAggregatesInput | StructuralRiskScalarWhereWithAggregatesInput[]
    OR?: StructuralRiskScalarWhereWithAggregatesInput[]
    NOT?: StructuralRiskScalarWhereWithAggregatesInput | StructuralRiskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StructuralRisk"> | number
    trend?: StringWithAggregatesFilter<"StructuralRisk"> | string
    status?: StringWithAggregatesFilter<"StructuralRisk"> | string
    title?: StringWithAggregatesFilter<"StructuralRisk"> | string
    description?: StringWithAggregatesFilter<"StructuralRisk"> | string
    gemmaAdvisory?: StringWithAggregatesFilter<"StructuralRisk"> | string
    materialId?: IntNullableWithAggregatesFilter<"StructuralRisk"> | number | null
  }

  export type IndustryNewsWhereInput = {
    AND?: IndustryNewsWhereInput | IndustryNewsWhereInput[]
    OR?: IndustryNewsWhereInput[]
    NOT?: IndustryNewsWhereInput | IndustryNewsWhereInput[]
    id?: IntFilter<"IndustryNews"> | number
    title?: StringFilter<"IndustryNews"> | string
    source?: StringFilter<"IndustryNews"> | string
    date?: StringFilter<"IndustryNews"> | string
    summary?: StringFilter<"IndustryNews"> | string
    category?: StringFilter<"IndustryNews"> | string
    image?: StringFilter<"IndustryNews"> | string
    url?: StringFilter<"IndustryNews"> | string
  }

  export type IndustryNewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    source?: SortOrder
    date?: SortOrder
    summary?: SortOrder
    category?: SortOrder
    image?: SortOrder
    url?: SortOrder
  }

  export type IndustryNewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IndustryNewsWhereInput | IndustryNewsWhereInput[]
    OR?: IndustryNewsWhereInput[]
    NOT?: IndustryNewsWhereInput | IndustryNewsWhereInput[]
    title?: StringFilter<"IndustryNews"> | string
    source?: StringFilter<"IndustryNews"> | string
    date?: StringFilter<"IndustryNews"> | string
    summary?: StringFilter<"IndustryNews"> | string
    category?: StringFilter<"IndustryNews"> | string
    image?: StringFilter<"IndustryNews"> | string
    url?: StringFilter<"IndustryNews"> | string
  }, "id">

  export type IndustryNewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    source?: SortOrder
    date?: SortOrder
    summary?: SortOrder
    category?: SortOrder
    image?: SortOrder
    url?: SortOrder
    _count?: IndustryNewsCountOrderByAggregateInput
    _avg?: IndustryNewsAvgOrderByAggregateInput
    _max?: IndustryNewsMaxOrderByAggregateInput
    _min?: IndustryNewsMinOrderByAggregateInput
    _sum?: IndustryNewsSumOrderByAggregateInput
  }

  export type IndustryNewsScalarWhereWithAggregatesInput = {
    AND?: IndustryNewsScalarWhereWithAggregatesInput | IndustryNewsScalarWhereWithAggregatesInput[]
    OR?: IndustryNewsScalarWhereWithAggregatesInput[]
    NOT?: IndustryNewsScalarWhereWithAggregatesInput | IndustryNewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IndustryNews"> | number
    title?: StringWithAggregatesFilter<"IndustryNews"> | string
    source?: StringWithAggregatesFilter<"IndustryNews"> | string
    date?: StringWithAggregatesFilter<"IndustryNews"> | string
    summary?: StringWithAggregatesFilter<"IndustryNews"> | string
    category?: StringWithAggregatesFilter<"IndustryNews"> | string
    image?: StringWithAggregatesFilter<"IndustryNews"> | string
    url?: StringWithAggregatesFilter<"IndustryNews"> | string
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: IntFilter<"InventoryItem"> | number
    name?: StringFilter<"InventoryItem"> | string
    category?: StringFilter<"InventoryItem"> | string
    sku?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    unit?: StringFilter<"InventoryItem"> | string
    location?: StringFilter<"InventoryItem"> | string
    minThreshold?: IntFilter<"InventoryItem"> | number
    status?: StringFilter<"InventoryItem"> | string
    image?: StringFilter<"InventoryItem"> | string
    lastUpdated?: DateTimeFilter<"InventoryItem"> | Date | string
    materialId?: IntNullableFilter<"InventoryItem"> | number | null
    material?: XOR<MaterialNullableScalarRelationFilter, MaterialWhereInput> | null
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    minThreshold?: SortOrder
    status?: SortOrder
    image?: SortOrder
    lastUpdated?: SortOrder
    materialId?: SortOrderInput | SortOrder
    material?: MaterialOrderByWithRelationInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    name?: StringFilter<"InventoryItem"> | string
    category?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    unit?: StringFilter<"InventoryItem"> | string
    location?: StringFilter<"InventoryItem"> | string
    minThreshold?: IntFilter<"InventoryItem"> | number
    status?: StringFilter<"InventoryItem"> | string
    image?: StringFilter<"InventoryItem"> | string
    lastUpdated?: DateTimeFilter<"InventoryItem"> | Date | string
    materialId?: IntNullableFilter<"InventoryItem"> | number | null
    material?: XOR<MaterialNullableScalarRelationFilter, MaterialWhereInput> | null
  }, "id" | "sku">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    minThreshold?: SortOrder
    status?: SortOrder
    image?: SortOrder
    lastUpdated?: SortOrder
    materialId?: SortOrderInput | SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryItem"> | number
    name?: StringWithAggregatesFilter<"InventoryItem"> | string
    category?: StringWithAggregatesFilter<"InventoryItem"> | string
    sku?: StringWithAggregatesFilter<"InventoryItem"> | string
    quantity?: IntWithAggregatesFilter<"InventoryItem"> | number
    unit?: StringWithAggregatesFilter<"InventoryItem"> | string
    location?: StringWithAggregatesFilter<"InventoryItem"> | string
    minThreshold?: IntWithAggregatesFilter<"InventoryItem"> | number
    status?: StringWithAggregatesFilter<"InventoryItem"> | string
    image?: StringWithAggregatesFilter<"InventoryItem"> | string
    lastUpdated?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
    materialId?: IntNullableWithAggregatesFilter<"InventoryItem"> | number | null
  }

  export type CncMachineTelemetryWhereInput = {
    AND?: CncMachineTelemetryWhereInput | CncMachineTelemetryWhereInput[]
    OR?: CncMachineTelemetryWhereInput[]
    NOT?: CncMachineTelemetryWhereInput | CncMachineTelemetryWhereInput[]
    id?: IntFilter<"CncMachineTelemetry"> | number
    machineId?: StringFilter<"CncMachineTelemetry"> | string
    airTemp?: FloatFilter<"CncMachineTelemetry"> | number
    processTemp?: FloatFilter<"CncMachineTelemetry"> | number
    rotationalSpeed?: FloatFilter<"CncMachineTelemetry"> | number
    torque?: FloatFilter<"CncMachineTelemetry"> | number
    toolWear?: FloatFilter<"CncMachineTelemetry"> | number
    machineFailure?: BoolFilter<"CncMachineTelemetry"> | boolean
    twf?: BoolFilter<"CncMachineTelemetry"> | boolean
    hdf?: BoolFilter<"CncMachineTelemetry"> | boolean
    pwf?: BoolFilter<"CncMachineTelemetry"> | boolean
    osf?: BoolFilter<"CncMachineTelemetry"> | boolean
    rnf?: BoolFilter<"CncMachineTelemetry"> | boolean
    timestamp?: DateTimeFilter<"CncMachineTelemetry"> | Date | string
  }

  export type CncMachineTelemetryOrderByWithRelationInput = {
    id?: SortOrder
    machineId?: SortOrder
    airTemp?: SortOrder
    processTemp?: SortOrder
    rotationalSpeed?: SortOrder
    torque?: SortOrder
    toolWear?: SortOrder
    machineFailure?: SortOrder
    twf?: SortOrder
    hdf?: SortOrder
    pwf?: SortOrder
    osf?: SortOrder
    rnf?: SortOrder
    timestamp?: SortOrder
  }

  export type CncMachineTelemetryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CncMachineTelemetryWhereInput | CncMachineTelemetryWhereInput[]
    OR?: CncMachineTelemetryWhereInput[]
    NOT?: CncMachineTelemetryWhereInput | CncMachineTelemetryWhereInput[]
    machineId?: StringFilter<"CncMachineTelemetry"> | string
    airTemp?: FloatFilter<"CncMachineTelemetry"> | number
    processTemp?: FloatFilter<"CncMachineTelemetry"> | number
    rotationalSpeed?: FloatFilter<"CncMachineTelemetry"> | number
    torque?: FloatFilter<"CncMachineTelemetry"> | number
    toolWear?: FloatFilter<"CncMachineTelemetry"> | number
    machineFailure?: BoolFilter<"CncMachineTelemetry"> | boolean
    twf?: BoolFilter<"CncMachineTelemetry"> | boolean
    hdf?: BoolFilter<"CncMachineTelemetry"> | boolean
    pwf?: BoolFilter<"CncMachineTelemetry"> | boolean
    osf?: BoolFilter<"CncMachineTelemetry"> | boolean
    rnf?: BoolFilter<"CncMachineTelemetry"> | boolean
    timestamp?: DateTimeFilter<"CncMachineTelemetry"> | Date | string
  }, "id">

  export type CncMachineTelemetryOrderByWithAggregationInput = {
    id?: SortOrder
    machineId?: SortOrder
    airTemp?: SortOrder
    processTemp?: SortOrder
    rotationalSpeed?: SortOrder
    torque?: SortOrder
    toolWear?: SortOrder
    machineFailure?: SortOrder
    twf?: SortOrder
    hdf?: SortOrder
    pwf?: SortOrder
    osf?: SortOrder
    rnf?: SortOrder
    timestamp?: SortOrder
    _count?: CncMachineTelemetryCountOrderByAggregateInput
    _avg?: CncMachineTelemetryAvgOrderByAggregateInput
    _max?: CncMachineTelemetryMaxOrderByAggregateInput
    _min?: CncMachineTelemetryMinOrderByAggregateInput
    _sum?: CncMachineTelemetrySumOrderByAggregateInput
  }

  export type CncMachineTelemetryScalarWhereWithAggregatesInput = {
    AND?: CncMachineTelemetryScalarWhereWithAggregatesInput | CncMachineTelemetryScalarWhereWithAggregatesInput[]
    OR?: CncMachineTelemetryScalarWhereWithAggregatesInput[]
    NOT?: CncMachineTelemetryScalarWhereWithAggregatesInput | CncMachineTelemetryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CncMachineTelemetry"> | number
    machineId?: StringWithAggregatesFilter<"CncMachineTelemetry"> | string
    airTemp?: FloatWithAggregatesFilter<"CncMachineTelemetry"> | number
    processTemp?: FloatWithAggregatesFilter<"CncMachineTelemetry"> | number
    rotationalSpeed?: FloatWithAggregatesFilter<"CncMachineTelemetry"> | number
    torque?: FloatWithAggregatesFilter<"CncMachineTelemetry"> | number
    toolWear?: FloatWithAggregatesFilter<"CncMachineTelemetry"> | number
    machineFailure?: BoolWithAggregatesFilter<"CncMachineTelemetry"> | boolean
    twf?: BoolWithAggregatesFilter<"CncMachineTelemetry"> | boolean
    hdf?: BoolWithAggregatesFilter<"CncMachineTelemetry"> | boolean
    pwf?: BoolWithAggregatesFilter<"CncMachineTelemetry"> | boolean
    osf?: BoolWithAggregatesFilter<"CncMachineTelemetry"> | boolean
    rnf?: BoolWithAggregatesFilter<"CncMachineTelemetry"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"CncMachineTelemetry"> | Date | string
  }

  export type IndianMetalIndexWhereInput = {
    AND?: IndianMetalIndexWhereInput | IndianMetalIndexWhereInput[]
    OR?: IndianMetalIndexWhereInput[]
    NOT?: IndianMetalIndexWhereInput | IndianMetalIndexWhereInput[]
    id?: IntFilter<"IndianMetalIndex"> | number
    source?: StringFilter<"IndianMetalIndex"> | string
    material?: StringFilter<"IndianMetalIndex"> | string
    region?: StringFilter<"IndianMetalIndex"> | string
    price?: FloatFilter<"IndianMetalIndex"> | number
    unit?: StringFilter<"IndianMetalIndex"> | string
    change?: FloatFilter<"IndianMetalIndex"> | number
    lastUpdated?: DateTimeFilter<"IndianMetalIndex"> | Date | string
  }

  export type IndianMetalIndexOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    material?: SortOrder
    region?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    change?: SortOrder
    lastUpdated?: SortOrder
  }

  export type IndianMetalIndexWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IndianMetalIndexWhereInput | IndianMetalIndexWhereInput[]
    OR?: IndianMetalIndexWhereInput[]
    NOT?: IndianMetalIndexWhereInput | IndianMetalIndexWhereInput[]
    source?: StringFilter<"IndianMetalIndex"> | string
    material?: StringFilter<"IndianMetalIndex"> | string
    region?: StringFilter<"IndianMetalIndex"> | string
    price?: FloatFilter<"IndianMetalIndex"> | number
    unit?: StringFilter<"IndianMetalIndex"> | string
    change?: FloatFilter<"IndianMetalIndex"> | number
    lastUpdated?: DateTimeFilter<"IndianMetalIndex"> | Date | string
  }, "id">

  export type IndianMetalIndexOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    material?: SortOrder
    region?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    change?: SortOrder
    lastUpdated?: SortOrder
    _count?: IndianMetalIndexCountOrderByAggregateInput
    _avg?: IndianMetalIndexAvgOrderByAggregateInput
    _max?: IndianMetalIndexMaxOrderByAggregateInput
    _min?: IndianMetalIndexMinOrderByAggregateInput
    _sum?: IndianMetalIndexSumOrderByAggregateInput
  }

  export type IndianMetalIndexScalarWhereWithAggregatesInput = {
    AND?: IndianMetalIndexScalarWhereWithAggregatesInput | IndianMetalIndexScalarWhereWithAggregatesInput[]
    OR?: IndianMetalIndexScalarWhereWithAggregatesInput[]
    NOT?: IndianMetalIndexScalarWhereWithAggregatesInput | IndianMetalIndexScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IndianMetalIndex"> | number
    source?: StringWithAggregatesFilter<"IndianMetalIndex"> | string
    material?: StringWithAggregatesFilter<"IndianMetalIndex"> | string
    region?: StringWithAggregatesFilter<"IndianMetalIndex"> | string
    price?: FloatWithAggregatesFilter<"IndianMetalIndex"> | number
    unit?: StringWithAggregatesFilter<"IndianMetalIndex"> | string
    change?: FloatWithAggregatesFilter<"IndianMetalIndex"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"IndianMetalIndex"> | Date | string
  }

  export type MaterialCreateInput = {
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    orders?: OrderCreateNestedManyWithoutMaterialInput
    shipments?: ShipmentCreateNestedManyWithoutMaterialInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutMaterialInput
    marketSignals?: MarketSignalCreateNestedManyWithoutMaterialInput
    structuralRisks?: StructuralRiskCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: number
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    orders?: OrderUncheckedCreateNestedManyWithoutMaterialInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutMaterialInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutMaterialInput
    marketSignals?: MarketSignalUncheckedCreateNestedManyWithoutMaterialInput
    structuralRisks?: StructuralRiskUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutMaterialNestedInput
    shipments?: ShipmentUpdateManyWithoutMaterialNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutMaterialNestedInput
    marketSignals?: MarketSignalUpdateManyWithoutMaterialNestedInput
    structuralRisks?: StructuralRiskUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutMaterialNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutMaterialNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutMaterialNestedInput
    marketSignals?: MarketSignalUncheckedUpdateManyWithoutMaterialNestedInput
    structuralRisks?: StructuralRiskUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: number
    name: string
    currentCost: number
    marketCost: number
    supplier: string
  }

  export type MaterialUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id: string
    client: string
    margin: string
    material: MaterialCreateNestedOneWithoutOrdersInput
    pricingRecommendations?: PricingRecommendationCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id: string
    client: string
    margin: string
    materialId: number
    pricingRecommendations?: PricingRecommendationUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    margin?: StringFieldUpdateOperationsInput | string
    material?: MaterialUpdateOneRequiredWithoutOrdersNestedInput
    pricingRecommendations?: PricingRecommendationUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    margin?: StringFieldUpdateOperationsInput | string
    materialId?: IntFieldUpdateOperationsInput | number
    pricingRecommendations?: PricingRecommendationUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id: string
    client: string
    margin: string
    materialId: number
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    margin?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    margin?: StringFieldUpdateOperationsInput | string
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentCreateInput = {
    qty: string
    supplier: string
    currentNode: string
    eta: string
    status: string
    gemmaAnnotation: string
    material: MaterialCreateNestedOneWithoutShipmentsInput
    steps?: ShipmentStepCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: number
    materialId: number
    qty: string
    supplier: string
    currentNode: string
    eta: string
    status: string
    gemmaAnnotation: string
    steps?: ShipmentStepUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUpdateInput = {
    qty?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    currentNode?: StringFieldUpdateOperationsInput | string
    eta?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gemmaAnnotation?: StringFieldUpdateOperationsInput | string
    material?: MaterialUpdateOneRequiredWithoutShipmentsNestedInput
    steps?: ShipmentStepUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    currentNode?: StringFieldUpdateOperationsInput | string
    eta?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gemmaAnnotation?: StringFieldUpdateOperationsInput | string
    steps?: ShipmentStepUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateManyInput = {
    id?: number
    materialId: number
    qty: string
    supplier: string
    currentNode: string
    eta: string
    status: string
    gemmaAnnotation: string
  }

  export type ShipmentUpdateManyMutationInput = {
    qty?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    currentNode?: StringFieldUpdateOperationsInput | string
    eta?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gemmaAnnotation?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    currentNode?: StringFieldUpdateOperationsInput | string
    eta?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gemmaAnnotation?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentStepCreateInput = {
    name: string
    status: string
    sequence: number
    shipment: ShipmentCreateNestedOneWithoutStepsInput
  }

  export type ShipmentStepUncheckedCreateInput = {
    id?: number
    shipmentId: number
    name: string
    status: string
    sequence: number
  }

  export type ShipmentStepUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    shipment?: ShipmentUpdateOneRequiredWithoutStepsNestedInput
  }

  export type ShipmentStepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shipmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentStepCreateManyInput = {
    id?: number
    shipmentId: number
    name: string
    status: string
    sequence: number
  }

  export type ShipmentStepUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentStepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shipmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type MarketSignalCreateInput = {
    title: string
    source: string
    date: string
    relevance: string
    tag: string
    desc: string
    material?: MaterialCreateNestedOneWithoutMarketSignalsInput
  }

  export type MarketSignalUncheckedCreateInput = {
    id?: number
    title: string
    source: string
    date: string
    relevance: string
    tag: string
    desc: string
    materialId?: number | null
  }

  export type MarketSignalUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    relevance?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    material?: MaterialUpdateOneWithoutMarketSignalsNestedInput
  }

  export type MarketSignalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    relevance?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    materialId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarketSignalCreateManyInput = {
    id?: number
    title: string
    source: string
    date: string
    relevance: string
    tag: string
    desc: string
    materialId?: number | null
  }

  export type MarketSignalUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    relevance?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type MarketSignalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    relevance?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    materialId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PricingRecommendationCreateInput = {
    id: string
    trigger: string
    action: string
    confidence: string
    reasoning: JsonNullValueInput | InputJsonValue
    accepted?: boolean
    rejected?: boolean
    expanded?: boolean
    order?: OrderCreateNestedOneWithoutPricingRecommendationsInput
  }

  export type PricingRecommendationUncheckedCreateInput = {
    id: string
    trigger: string
    action: string
    confidence: string
    reasoning: JsonNullValueInput | InputJsonValue
    accepted?: boolean
    rejected?: boolean
    expanded?: boolean
    orderId?: string | null
  }

  export type PricingRecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: StringFieldUpdateOperationsInput | string
    reasoning?: JsonNullValueInput | InputJsonValue
    accepted?: BoolFieldUpdateOperationsInput | boolean
    rejected?: BoolFieldUpdateOperationsInput | boolean
    expanded?: BoolFieldUpdateOperationsInput | boolean
    order?: OrderUpdateOneWithoutPricingRecommendationsNestedInput
  }

  export type PricingRecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: StringFieldUpdateOperationsInput | string
    reasoning?: JsonNullValueInput | InputJsonValue
    accepted?: BoolFieldUpdateOperationsInput | boolean
    rejected?: BoolFieldUpdateOperationsInput | boolean
    expanded?: BoolFieldUpdateOperationsInput | boolean
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PricingRecommendationCreateManyInput = {
    id: string
    trigger: string
    action: string
    confidence: string
    reasoning: JsonNullValueInput | InputJsonValue
    accepted?: boolean
    rejected?: boolean
    expanded?: boolean
    orderId?: string | null
  }

  export type PricingRecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: StringFieldUpdateOperationsInput | string
    reasoning?: JsonNullValueInput | InputJsonValue
    accepted?: BoolFieldUpdateOperationsInput | boolean
    rejected?: BoolFieldUpdateOperationsInput | boolean
    expanded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricingRecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: StringFieldUpdateOperationsInput | string
    reasoning?: JsonNullValueInput | InputJsonValue
    accepted?: BoolFieldUpdateOperationsInput | boolean
    rejected?: BoolFieldUpdateOperationsInput | boolean
    expanded?: BoolFieldUpdateOperationsInput | boolean
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StructuralRiskCreateInput = {
    trend: string
    status: string
    title: string
    description: string
    gemmaAdvisory: string
    material?: MaterialCreateNestedOneWithoutStructuralRisksInput
  }

  export type StructuralRiskUncheckedCreateInput = {
    id?: number
    trend: string
    status: string
    title: string
    description: string
    gemmaAdvisory: string
    materialId?: number | null
  }

  export type StructuralRiskUpdateInput = {
    trend?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    gemmaAdvisory?: StringFieldUpdateOperationsInput | string
    material?: MaterialUpdateOneWithoutStructuralRisksNestedInput
  }

  export type StructuralRiskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trend?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    gemmaAdvisory?: StringFieldUpdateOperationsInput | string
    materialId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StructuralRiskCreateManyInput = {
    id?: number
    trend: string
    status: string
    title: string
    description: string
    gemmaAdvisory: string
    materialId?: number | null
  }

  export type StructuralRiskUpdateManyMutationInput = {
    trend?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    gemmaAdvisory?: StringFieldUpdateOperationsInput | string
  }

  export type StructuralRiskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trend?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    gemmaAdvisory?: StringFieldUpdateOperationsInput | string
    materialId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IndustryNewsCreateInput = {
    title: string
    source: string
    date: string
    summary: string
    category: string
    image: string
    url: string
  }

  export type IndustryNewsUncheckedCreateInput = {
    id?: number
    title: string
    source: string
    date: string
    summary: string
    category: string
    image: string
    url: string
  }

  export type IndustryNewsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IndustryNewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IndustryNewsCreateManyInput = {
    id?: number
    title: string
    source: string
    date: string
    summary: string
    category: string
    image: string
    url: string
  }

  export type IndustryNewsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IndustryNewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryItemCreateInput = {
    name: string
    category: string
    sku: string
    quantity: number
    unit: string
    location: string
    minThreshold: number
    status: string
    image: string
    lastUpdated?: Date | string
    material?: MaterialCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryItemUncheckedCreateInput = {
    id?: number
    name: string
    category: string
    sku: string
    quantity: number
    unit: string
    location: string
    minThreshold: number
    status: string
    image: string
    lastUpdated?: Date | string
    materialId?: number | null
  }

  export type InventoryItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    minThreshold?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneWithoutInventoryItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    minThreshold?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryItemCreateManyInput = {
    id?: number
    name: string
    category: string
    sku: string
    quantity: number
    unit: string
    location: string
    minThreshold: number
    status: string
    image: string
    lastUpdated?: Date | string
    materialId?: number | null
  }

  export type InventoryItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    minThreshold?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    minThreshold?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CncMachineTelemetryCreateInput = {
    machineId: string
    airTemp: number
    processTemp: number
    rotationalSpeed: number
    torque: number
    toolWear: number
    machineFailure: boolean
    twf: boolean
    hdf: boolean
    pwf: boolean
    osf: boolean
    rnf: boolean
    timestamp?: Date | string
  }

  export type CncMachineTelemetryUncheckedCreateInput = {
    id?: number
    machineId: string
    airTemp: number
    processTemp: number
    rotationalSpeed: number
    torque: number
    toolWear: number
    machineFailure: boolean
    twf: boolean
    hdf: boolean
    pwf: boolean
    osf: boolean
    rnf: boolean
    timestamp?: Date | string
  }

  export type CncMachineTelemetryUpdateInput = {
    machineId?: StringFieldUpdateOperationsInput | string
    airTemp?: FloatFieldUpdateOperationsInput | number
    processTemp?: FloatFieldUpdateOperationsInput | number
    rotationalSpeed?: FloatFieldUpdateOperationsInput | number
    torque?: FloatFieldUpdateOperationsInput | number
    toolWear?: FloatFieldUpdateOperationsInput | number
    machineFailure?: BoolFieldUpdateOperationsInput | boolean
    twf?: BoolFieldUpdateOperationsInput | boolean
    hdf?: BoolFieldUpdateOperationsInput | boolean
    pwf?: BoolFieldUpdateOperationsInput | boolean
    osf?: BoolFieldUpdateOperationsInput | boolean
    rnf?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CncMachineTelemetryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineId?: StringFieldUpdateOperationsInput | string
    airTemp?: FloatFieldUpdateOperationsInput | number
    processTemp?: FloatFieldUpdateOperationsInput | number
    rotationalSpeed?: FloatFieldUpdateOperationsInput | number
    torque?: FloatFieldUpdateOperationsInput | number
    toolWear?: FloatFieldUpdateOperationsInput | number
    machineFailure?: BoolFieldUpdateOperationsInput | boolean
    twf?: BoolFieldUpdateOperationsInput | boolean
    hdf?: BoolFieldUpdateOperationsInput | boolean
    pwf?: BoolFieldUpdateOperationsInput | boolean
    osf?: BoolFieldUpdateOperationsInput | boolean
    rnf?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CncMachineTelemetryCreateManyInput = {
    id?: number
    machineId: string
    airTemp: number
    processTemp: number
    rotationalSpeed: number
    torque: number
    toolWear: number
    machineFailure: boolean
    twf: boolean
    hdf: boolean
    pwf: boolean
    osf: boolean
    rnf: boolean
    timestamp?: Date | string
  }

  export type CncMachineTelemetryUpdateManyMutationInput = {
    machineId?: StringFieldUpdateOperationsInput | string
    airTemp?: FloatFieldUpdateOperationsInput | number
    processTemp?: FloatFieldUpdateOperationsInput | number
    rotationalSpeed?: FloatFieldUpdateOperationsInput | number
    torque?: FloatFieldUpdateOperationsInput | number
    toolWear?: FloatFieldUpdateOperationsInput | number
    machineFailure?: BoolFieldUpdateOperationsInput | boolean
    twf?: BoolFieldUpdateOperationsInput | boolean
    hdf?: BoolFieldUpdateOperationsInput | boolean
    pwf?: BoolFieldUpdateOperationsInput | boolean
    osf?: BoolFieldUpdateOperationsInput | boolean
    rnf?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CncMachineTelemetryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineId?: StringFieldUpdateOperationsInput | string
    airTemp?: FloatFieldUpdateOperationsInput | number
    processTemp?: FloatFieldUpdateOperationsInput | number
    rotationalSpeed?: FloatFieldUpdateOperationsInput | number
    torque?: FloatFieldUpdateOperationsInput | number
    toolWear?: FloatFieldUpdateOperationsInput | number
    machineFailure?: BoolFieldUpdateOperationsInput | boolean
    twf?: BoolFieldUpdateOperationsInput | boolean
    hdf?: BoolFieldUpdateOperationsInput | boolean
    pwf?: BoolFieldUpdateOperationsInput | boolean
    osf?: BoolFieldUpdateOperationsInput | boolean
    rnf?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndianMetalIndexCreateInput = {
    source: string
    material: string
    region: string
    price: number
    unit: string
    change: number
    lastUpdated?: Date | string
  }

  export type IndianMetalIndexUncheckedCreateInput = {
    id?: number
    source: string
    material: string
    region: string
    price: number
    unit: string
    change: number
    lastUpdated?: Date | string
  }

  export type IndianMetalIndexUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    change?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndianMetalIndexUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    change?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndianMetalIndexCreateManyInput = {
    id?: number
    source: string
    material: string
    region: string
    price: number
    unit: string
    change: number
    lastUpdated?: Date | string
  }

  export type IndianMetalIndexUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    change?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndianMetalIndexUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    change?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type MarketSignalListRelationFilter = {
    every?: MarketSignalWhereInput
    some?: MarketSignalWhereInput
    none?: MarketSignalWhereInput
  }

  export type StructuralRiskListRelationFilter = {
    every?: StructuralRiskWhereInput
    some?: StructuralRiskWhereInput
    none?: StructuralRiskWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketSignalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StructuralRiskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentCost?: SortOrder
    marketCost?: SortOrder
    supplier?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    currentCost?: SortOrder
    marketCost?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentCost?: SortOrder
    marketCost?: SortOrder
    supplier?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentCost?: SortOrder
    marketCost?: SortOrder
    supplier?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    id?: SortOrder
    currentCost?: SortOrder
    marketCost?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type PricingRecommendationListRelationFilter = {
    every?: PricingRecommendationWhereInput
    some?: PricingRecommendationWhereInput
    none?: PricingRecommendationWhereInput
  }

  export type PricingRecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    client?: SortOrder
    margin?: SortOrder
    materialId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    materialId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    client?: SortOrder
    margin?: SortOrder
    materialId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    client?: SortOrder
    margin?: SortOrder
    materialId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    materialId?: SortOrder
  }

  export type ShipmentStepListRelationFilter = {
    every?: ShipmentStepWhereInput
    some?: ShipmentStepWhereInput
    none?: ShipmentStepWhereInput
  }

  export type ShipmentStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    qty?: SortOrder
    supplier?: SortOrder
    currentNode?: SortOrder
    eta?: SortOrder
    status?: SortOrder
    gemmaAnnotation?: SortOrder
  }

  export type ShipmentAvgOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    qty?: SortOrder
    supplier?: SortOrder
    currentNode?: SortOrder
    eta?: SortOrder
    status?: SortOrder
    gemmaAnnotation?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    qty?: SortOrder
    supplier?: SortOrder
    currentNode?: SortOrder
    eta?: SortOrder
    status?: SortOrder
    gemmaAnnotation?: SortOrder
  }

  export type ShipmentSumOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
  }

  export type ShipmentScalarRelationFilter = {
    is?: ShipmentWhereInput
    isNot?: ShipmentWhereInput
  }

  export type ShipmentStepCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    sequence?: SortOrder
  }

  export type ShipmentStepAvgOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    sequence?: SortOrder
  }

  export type ShipmentStepMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    sequence?: SortOrder
  }

  export type ShipmentStepMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    sequence?: SortOrder
  }

  export type ShipmentStepSumOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    sequence?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MaterialNullableScalarRelationFilter = {
    is?: MaterialWhereInput | null
    isNot?: MaterialWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MarketSignalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    source?: SortOrder
    date?: SortOrder
    relevance?: SortOrder
    tag?: SortOrder
    desc?: SortOrder
    materialId?: SortOrder
  }

  export type MarketSignalAvgOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
  }

  export type MarketSignalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    source?: SortOrder
    date?: SortOrder
    relevance?: SortOrder
    tag?: SortOrder
    desc?: SortOrder
    materialId?: SortOrder
  }

  export type MarketSignalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    source?: SortOrder
    date?: SortOrder
    relevance?: SortOrder
    tag?: SortOrder
    desc?: SortOrder
    materialId?: SortOrder
  }

  export type MarketSignalSumOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type PricingRecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    trigger?: SortOrder
    action?: SortOrder
    confidence?: SortOrder
    reasoning?: SortOrder
    accepted?: SortOrder
    rejected?: SortOrder
    expanded?: SortOrder
    orderId?: SortOrder
  }

  export type PricingRecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    trigger?: SortOrder
    action?: SortOrder
    confidence?: SortOrder
    accepted?: SortOrder
    rejected?: SortOrder
    expanded?: SortOrder
    orderId?: SortOrder
  }

  export type PricingRecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    trigger?: SortOrder
    action?: SortOrder
    confidence?: SortOrder
    accepted?: SortOrder
    rejected?: SortOrder
    expanded?: SortOrder
    orderId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type StructuralRiskCountOrderByAggregateInput = {
    id?: SortOrder
    trend?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    gemmaAdvisory?: SortOrder
    materialId?: SortOrder
  }

  export type StructuralRiskAvgOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
  }

  export type StructuralRiskMaxOrderByAggregateInput = {
    id?: SortOrder
    trend?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    gemmaAdvisory?: SortOrder
    materialId?: SortOrder
  }

  export type StructuralRiskMinOrderByAggregateInput = {
    id?: SortOrder
    trend?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    gemmaAdvisory?: SortOrder
    materialId?: SortOrder
  }

  export type StructuralRiskSumOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
  }

  export type IndustryNewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    source?: SortOrder
    date?: SortOrder
    summary?: SortOrder
    category?: SortOrder
    image?: SortOrder
    url?: SortOrder
  }

  export type IndustryNewsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IndustryNewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    source?: SortOrder
    date?: SortOrder
    summary?: SortOrder
    category?: SortOrder
    image?: SortOrder
    url?: SortOrder
  }

  export type IndustryNewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    source?: SortOrder
    date?: SortOrder
    summary?: SortOrder
    category?: SortOrder
    image?: SortOrder
    url?: SortOrder
  }

  export type IndustryNewsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    minThreshold?: SortOrder
    status?: SortOrder
    image?: SortOrder
    lastUpdated?: SortOrder
    materialId?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    minThreshold?: SortOrder
    materialId?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    minThreshold?: SortOrder
    status?: SortOrder
    image?: SortOrder
    lastUpdated?: SortOrder
    materialId?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    minThreshold?: SortOrder
    status?: SortOrder
    image?: SortOrder
    lastUpdated?: SortOrder
    materialId?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    minThreshold?: SortOrder
    materialId?: SortOrder
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

  export type CncMachineTelemetryCountOrderByAggregateInput = {
    id?: SortOrder
    machineId?: SortOrder
    airTemp?: SortOrder
    processTemp?: SortOrder
    rotationalSpeed?: SortOrder
    torque?: SortOrder
    toolWear?: SortOrder
    machineFailure?: SortOrder
    twf?: SortOrder
    hdf?: SortOrder
    pwf?: SortOrder
    osf?: SortOrder
    rnf?: SortOrder
    timestamp?: SortOrder
  }

  export type CncMachineTelemetryAvgOrderByAggregateInput = {
    id?: SortOrder
    airTemp?: SortOrder
    processTemp?: SortOrder
    rotationalSpeed?: SortOrder
    torque?: SortOrder
    toolWear?: SortOrder
  }

  export type CncMachineTelemetryMaxOrderByAggregateInput = {
    id?: SortOrder
    machineId?: SortOrder
    airTemp?: SortOrder
    processTemp?: SortOrder
    rotationalSpeed?: SortOrder
    torque?: SortOrder
    toolWear?: SortOrder
    machineFailure?: SortOrder
    twf?: SortOrder
    hdf?: SortOrder
    pwf?: SortOrder
    osf?: SortOrder
    rnf?: SortOrder
    timestamp?: SortOrder
  }

  export type CncMachineTelemetryMinOrderByAggregateInput = {
    id?: SortOrder
    machineId?: SortOrder
    airTemp?: SortOrder
    processTemp?: SortOrder
    rotationalSpeed?: SortOrder
    torque?: SortOrder
    toolWear?: SortOrder
    machineFailure?: SortOrder
    twf?: SortOrder
    hdf?: SortOrder
    pwf?: SortOrder
    osf?: SortOrder
    rnf?: SortOrder
    timestamp?: SortOrder
  }

  export type CncMachineTelemetrySumOrderByAggregateInput = {
    id?: SortOrder
    airTemp?: SortOrder
    processTemp?: SortOrder
    rotationalSpeed?: SortOrder
    torque?: SortOrder
    toolWear?: SortOrder
  }

  export type IndianMetalIndexCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    material?: SortOrder
    region?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    change?: SortOrder
    lastUpdated?: SortOrder
  }

  export type IndianMetalIndexAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    change?: SortOrder
  }

  export type IndianMetalIndexMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    material?: SortOrder
    region?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    change?: SortOrder
    lastUpdated?: SortOrder
  }

  export type IndianMetalIndexMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    material?: SortOrder
    region?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    change?: SortOrder
    lastUpdated?: SortOrder
  }

  export type IndianMetalIndexSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    change?: SortOrder
  }

  export type OrderCreateNestedManyWithoutMaterialInput = {
    create?: XOR<OrderCreateWithoutMaterialInput, OrderUncheckedCreateWithoutMaterialInput> | OrderCreateWithoutMaterialInput[] | OrderUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMaterialInput | OrderCreateOrConnectWithoutMaterialInput[]
    createMany?: OrderCreateManyMaterialInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ShipmentCreateWithoutMaterialInput, ShipmentUncheckedCreateWithoutMaterialInput> | ShipmentCreateWithoutMaterialInput[] | ShipmentUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutMaterialInput | ShipmentCreateOrConnectWithoutMaterialInput[]
    createMany?: ShipmentCreateManyMaterialInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type InventoryItemCreateNestedManyWithoutMaterialInput = {
    create?: XOR<InventoryItemCreateWithoutMaterialInput, InventoryItemUncheckedCreateWithoutMaterialInput> | InventoryItemCreateWithoutMaterialInput[] | InventoryItemUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutMaterialInput | InventoryItemCreateOrConnectWithoutMaterialInput[]
    createMany?: InventoryItemCreateManyMaterialInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type MarketSignalCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MarketSignalCreateWithoutMaterialInput, MarketSignalUncheckedCreateWithoutMaterialInput> | MarketSignalCreateWithoutMaterialInput[] | MarketSignalUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MarketSignalCreateOrConnectWithoutMaterialInput | MarketSignalCreateOrConnectWithoutMaterialInput[]
    createMany?: MarketSignalCreateManyMaterialInputEnvelope
    connect?: MarketSignalWhereUniqueInput | MarketSignalWhereUniqueInput[]
  }

  export type StructuralRiskCreateNestedManyWithoutMaterialInput = {
    create?: XOR<StructuralRiskCreateWithoutMaterialInput, StructuralRiskUncheckedCreateWithoutMaterialInput> | StructuralRiskCreateWithoutMaterialInput[] | StructuralRiskUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StructuralRiskCreateOrConnectWithoutMaterialInput | StructuralRiskCreateOrConnectWithoutMaterialInput[]
    createMany?: StructuralRiskCreateManyMaterialInputEnvelope
    connect?: StructuralRiskWhereUniqueInput | StructuralRiskWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<OrderCreateWithoutMaterialInput, OrderUncheckedCreateWithoutMaterialInput> | OrderCreateWithoutMaterialInput[] | OrderUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMaterialInput | OrderCreateOrConnectWithoutMaterialInput[]
    createMany?: OrderCreateManyMaterialInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ShipmentCreateWithoutMaterialInput, ShipmentUncheckedCreateWithoutMaterialInput> | ShipmentCreateWithoutMaterialInput[] | ShipmentUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutMaterialInput | ShipmentCreateOrConnectWithoutMaterialInput[]
    createMany?: ShipmentCreateManyMaterialInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<InventoryItemCreateWithoutMaterialInput, InventoryItemUncheckedCreateWithoutMaterialInput> | InventoryItemCreateWithoutMaterialInput[] | InventoryItemUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutMaterialInput | InventoryItemCreateOrConnectWithoutMaterialInput[]
    createMany?: InventoryItemCreateManyMaterialInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type MarketSignalUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MarketSignalCreateWithoutMaterialInput, MarketSignalUncheckedCreateWithoutMaterialInput> | MarketSignalCreateWithoutMaterialInput[] | MarketSignalUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MarketSignalCreateOrConnectWithoutMaterialInput | MarketSignalCreateOrConnectWithoutMaterialInput[]
    createMany?: MarketSignalCreateManyMaterialInputEnvelope
    connect?: MarketSignalWhereUniqueInput | MarketSignalWhereUniqueInput[]
  }

  export type StructuralRiskUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<StructuralRiskCreateWithoutMaterialInput, StructuralRiskUncheckedCreateWithoutMaterialInput> | StructuralRiskCreateWithoutMaterialInput[] | StructuralRiskUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StructuralRiskCreateOrConnectWithoutMaterialInput | StructuralRiskCreateOrConnectWithoutMaterialInput[]
    createMany?: StructuralRiskCreateManyMaterialInputEnvelope
    connect?: StructuralRiskWhereUniqueInput | StructuralRiskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<OrderCreateWithoutMaterialInput, OrderUncheckedCreateWithoutMaterialInput> | OrderCreateWithoutMaterialInput[] | OrderUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMaterialInput | OrderCreateOrConnectWithoutMaterialInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMaterialInput | OrderUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: OrderCreateManyMaterialInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMaterialInput | OrderUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMaterialInput | OrderUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ShipmentCreateWithoutMaterialInput, ShipmentUncheckedCreateWithoutMaterialInput> | ShipmentCreateWithoutMaterialInput[] | ShipmentUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutMaterialInput | ShipmentCreateOrConnectWithoutMaterialInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutMaterialInput | ShipmentUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ShipmentCreateManyMaterialInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutMaterialInput | ShipmentUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutMaterialInput | ShipmentUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type InventoryItemUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<InventoryItemCreateWithoutMaterialInput, InventoryItemUncheckedCreateWithoutMaterialInput> | InventoryItemCreateWithoutMaterialInput[] | InventoryItemUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutMaterialInput | InventoryItemCreateOrConnectWithoutMaterialInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutMaterialInput | InventoryItemUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: InventoryItemCreateManyMaterialInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutMaterialInput | InventoryItemUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutMaterialInput | InventoryItemUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type MarketSignalUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MarketSignalCreateWithoutMaterialInput, MarketSignalUncheckedCreateWithoutMaterialInput> | MarketSignalCreateWithoutMaterialInput[] | MarketSignalUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MarketSignalCreateOrConnectWithoutMaterialInput | MarketSignalCreateOrConnectWithoutMaterialInput[]
    upsert?: MarketSignalUpsertWithWhereUniqueWithoutMaterialInput | MarketSignalUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MarketSignalCreateManyMaterialInputEnvelope
    set?: MarketSignalWhereUniqueInput | MarketSignalWhereUniqueInput[]
    disconnect?: MarketSignalWhereUniqueInput | MarketSignalWhereUniqueInput[]
    delete?: MarketSignalWhereUniqueInput | MarketSignalWhereUniqueInput[]
    connect?: MarketSignalWhereUniqueInput | MarketSignalWhereUniqueInput[]
    update?: MarketSignalUpdateWithWhereUniqueWithoutMaterialInput | MarketSignalUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MarketSignalUpdateManyWithWhereWithoutMaterialInput | MarketSignalUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MarketSignalScalarWhereInput | MarketSignalScalarWhereInput[]
  }

  export type StructuralRiskUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<StructuralRiskCreateWithoutMaterialInput, StructuralRiskUncheckedCreateWithoutMaterialInput> | StructuralRiskCreateWithoutMaterialInput[] | StructuralRiskUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StructuralRiskCreateOrConnectWithoutMaterialInput | StructuralRiskCreateOrConnectWithoutMaterialInput[]
    upsert?: StructuralRiskUpsertWithWhereUniqueWithoutMaterialInput | StructuralRiskUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: StructuralRiskCreateManyMaterialInputEnvelope
    set?: StructuralRiskWhereUniqueInput | StructuralRiskWhereUniqueInput[]
    disconnect?: StructuralRiskWhereUniqueInput | StructuralRiskWhereUniqueInput[]
    delete?: StructuralRiskWhereUniqueInput | StructuralRiskWhereUniqueInput[]
    connect?: StructuralRiskWhereUniqueInput | StructuralRiskWhereUniqueInput[]
    update?: StructuralRiskUpdateWithWhereUniqueWithoutMaterialInput | StructuralRiskUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: StructuralRiskUpdateManyWithWhereWithoutMaterialInput | StructuralRiskUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: StructuralRiskScalarWhereInput | StructuralRiskScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<OrderCreateWithoutMaterialInput, OrderUncheckedCreateWithoutMaterialInput> | OrderCreateWithoutMaterialInput[] | OrderUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMaterialInput | OrderCreateOrConnectWithoutMaterialInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMaterialInput | OrderUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: OrderCreateManyMaterialInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMaterialInput | OrderUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMaterialInput | OrderUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ShipmentCreateWithoutMaterialInput, ShipmentUncheckedCreateWithoutMaterialInput> | ShipmentCreateWithoutMaterialInput[] | ShipmentUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutMaterialInput | ShipmentCreateOrConnectWithoutMaterialInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutMaterialInput | ShipmentUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ShipmentCreateManyMaterialInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutMaterialInput | ShipmentUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutMaterialInput | ShipmentUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<InventoryItemCreateWithoutMaterialInput, InventoryItemUncheckedCreateWithoutMaterialInput> | InventoryItemCreateWithoutMaterialInput[] | InventoryItemUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutMaterialInput | InventoryItemCreateOrConnectWithoutMaterialInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutMaterialInput | InventoryItemUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: InventoryItemCreateManyMaterialInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutMaterialInput | InventoryItemUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutMaterialInput | InventoryItemUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type MarketSignalUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MarketSignalCreateWithoutMaterialInput, MarketSignalUncheckedCreateWithoutMaterialInput> | MarketSignalCreateWithoutMaterialInput[] | MarketSignalUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MarketSignalCreateOrConnectWithoutMaterialInput | MarketSignalCreateOrConnectWithoutMaterialInput[]
    upsert?: MarketSignalUpsertWithWhereUniqueWithoutMaterialInput | MarketSignalUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MarketSignalCreateManyMaterialInputEnvelope
    set?: MarketSignalWhereUniqueInput | MarketSignalWhereUniqueInput[]
    disconnect?: MarketSignalWhereUniqueInput | MarketSignalWhereUniqueInput[]
    delete?: MarketSignalWhereUniqueInput | MarketSignalWhereUniqueInput[]
    connect?: MarketSignalWhereUniqueInput | MarketSignalWhereUniqueInput[]
    update?: MarketSignalUpdateWithWhereUniqueWithoutMaterialInput | MarketSignalUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MarketSignalUpdateManyWithWhereWithoutMaterialInput | MarketSignalUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MarketSignalScalarWhereInput | MarketSignalScalarWhereInput[]
  }

  export type StructuralRiskUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<StructuralRiskCreateWithoutMaterialInput, StructuralRiskUncheckedCreateWithoutMaterialInput> | StructuralRiskCreateWithoutMaterialInput[] | StructuralRiskUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StructuralRiskCreateOrConnectWithoutMaterialInput | StructuralRiskCreateOrConnectWithoutMaterialInput[]
    upsert?: StructuralRiskUpsertWithWhereUniqueWithoutMaterialInput | StructuralRiskUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: StructuralRiskCreateManyMaterialInputEnvelope
    set?: StructuralRiskWhereUniqueInput | StructuralRiskWhereUniqueInput[]
    disconnect?: StructuralRiskWhereUniqueInput | StructuralRiskWhereUniqueInput[]
    delete?: StructuralRiskWhereUniqueInput | StructuralRiskWhereUniqueInput[]
    connect?: StructuralRiskWhereUniqueInput | StructuralRiskWhereUniqueInput[]
    update?: StructuralRiskUpdateWithWhereUniqueWithoutMaterialInput | StructuralRiskUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: StructuralRiskUpdateManyWithWhereWithoutMaterialInput | StructuralRiskUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: StructuralRiskScalarWhereInput | StructuralRiskScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutOrdersInput = {
    create?: XOR<MaterialCreateWithoutOrdersInput, MaterialUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutOrdersInput
    connect?: MaterialWhereUniqueInput
  }

  export type PricingRecommendationCreateNestedManyWithoutOrderInput = {
    create?: XOR<PricingRecommendationCreateWithoutOrderInput, PricingRecommendationUncheckedCreateWithoutOrderInput> | PricingRecommendationCreateWithoutOrderInput[] | PricingRecommendationUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PricingRecommendationCreateOrConnectWithoutOrderInput | PricingRecommendationCreateOrConnectWithoutOrderInput[]
    createMany?: PricingRecommendationCreateManyOrderInputEnvelope
    connect?: PricingRecommendationWhereUniqueInput | PricingRecommendationWhereUniqueInput[]
  }

  export type PricingRecommendationUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PricingRecommendationCreateWithoutOrderInput, PricingRecommendationUncheckedCreateWithoutOrderInput> | PricingRecommendationCreateWithoutOrderInput[] | PricingRecommendationUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PricingRecommendationCreateOrConnectWithoutOrderInput | PricingRecommendationCreateOrConnectWithoutOrderInput[]
    createMany?: PricingRecommendationCreateManyOrderInputEnvelope
    connect?: PricingRecommendationWhereUniqueInput | PricingRecommendationWhereUniqueInput[]
  }

  export type MaterialUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<MaterialCreateWithoutOrdersInput, MaterialUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutOrdersInput
    upsert?: MaterialUpsertWithoutOrdersInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutOrdersInput, MaterialUpdateWithoutOrdersInput>, MaterialUncheckedUpdateWithoutOrdersInput>
  }

  export type PricingRecommendationUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PricingRecommendationCreateWithoutOrderInput, PricingRecommendationUncheckedCreateWithoutOrderInput> | PricingRecommendationCreateWithoutOrderInput[] | PricingRecommendationUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PricingRecommendationCreateOrConnectWithoutOrderInput | PricingRecommendationCreateOrConnectWithoutOrderInput[]
    upsert?: PricingRecommendationUpsertWithWhereUniqueWithoutOrderInput | PricingRecommendationUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PricingRecommendationCreateManyOrderInputEnvelope
    set?: PricingRecommendationWhereUniqueInput | PricingRecommendationWhereUniqueInput[]
    disconnect?: PricingRecommendationWhereUniqueInput | PricingRecommendationWhereUniqueInput[]
    delete?: PricingRecommendationWhereUniqueInput | PricingRecommendationWhereUniqueInput[]
    connect?: PricingRecommendationWhereUniqueInput | PricingRecommendationWhereUniqueInput[]
    update?: PricingRecommendationUpdateWithWhereUniqueWithoutOrderInput | PricingRecommendationUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PricingRecommendationUpdateManyWithWhereWithoutOrderInput | PricingRecommendationUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PricingRecommendationScalarWhereInput | PricingRecommendationScalarWhereInput[]
  }

  export type PricingRecommendationUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PricingRecommendationCreateWithoutOrderInput, PricingRecommendationUncheckedCreateWithoutOrderInput> | PricingRecommendationCreateWithoutOrderInput[] | PricingRecommendationUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PricingRecommendationCreateOrConnectWithoutOrderInput | PricingRecommendationCreateOrConnectWithoutOrderInput[]
    upsert?: PricingRecommendationUpsertWithWhereUniqueWithoutOrderInput | PricingRecommendationUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PricingRecommendationCreateManyOrderInputEnvelope
    set?: PricingRecommendationWhereUniqueInput | PricingRecommendationWhereUniqueInput[]
    disconnect?: PricingRecommendationWhereUniqueInput | PricingRecommendationWhereUniqueInput[]
    delete?: PricingRecommendationWhereUniqueInput | PricingRecommendationWhereUniqueInput[]
    connect?: PricingRecommendationWhereUniqueInput | PricingRecommendationWhereUniqueInput[]
    update?: PricingRecommendationUpdateWithWhereUniqueWithoutOrderInput | PricingRecommendationUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PricingRecommendationUpdateManyWithWhereWithoutOrderInput | PricingRecommendationUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PricingRecommendationScalarWhereInput | PricingRecommendationScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<MaterialCreateWithoutShipmentsInput, MaterialUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutShipmentsInput
    connect?: MaterialWhereUniqueInput
  }

  export type ShipmentStepCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentStepCreateWithoutShipmentInput, ShipmentStepUncheckedCreateWithoutShipmentInput> | ShipmentStepCreateWithoutShipmentInput[] | ShipmentStepUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentStepCreateOrConnectWithoutShipmentInput | ShipmentStepCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentStepCreateManyShipmentInputEnvelope
    connect?: ShipmentStepWhereUniqueInput | ShipmentStepWhereUniqueInput[]
  }

  export type ShipmentStepUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentStepCreateWithoutShipmentInput, ShipmentStepUncheckedCreateWithoutShipmentInput> | ShipmentStepCreateWithoutShipmentInput[] | ShipmentStepUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentStepCreateOrConnectWithoutShipmentInput | ShipmentStepCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentStepCreateManyShipmentInputEnvelope
    connect?: ShipmentStepWhereUniqueInput | ShipmentStepWhereUniqueInput[]
  }

  export type MaterialUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<MaterialCreateWithoutShipmentsInput, MaterialUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutShipmentsInput
    upsert?: MaterialUpsertWithoutShipmentsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutShipmentsInput, MaterialUpdateWithoutShipmentsInput>, MaterialUncheckedUpdateWithoutShipmentsInput>
  }

  export type ShipmentStepUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentStepCreateWithoutShipmentInput, ShipmentStepUncheckedCreateWithoutShipmentInput> | ShipmentStepCreateWithoutShipmentInput[] | ShipmentStepUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentStepCreateOrConnectWithoutShipmentInput | ShipmentStepCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentStepUpsertWithWhereUniqueWithoutShipmentInput | ShipmentStepUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentStepCreateManyShipmentInputEnvelope
    set?: ShipmentStepWhereUniqueInput | ShipmentStepWhereUniqueInput[]
    disconnect?: ShipmentStepWhereUniqueInput | ShipmentStepWhereUniqueInput[]
    delete?: ShipmentStepWhereUniqueInput | ShipmentStepWhereUniqueInput[]
    connect?: ShipmentStepWhereUniqueInput | ShipmentStepWhereUniqueInput[]
    update?: ShipmentStepUpdateWithWhereUniqueWithoutShipmentInput | ShipmentStepUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentStepUpdateManyWithWhereWithoutShipmentInput | ShipmentStepUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentStepScalarWhereInput | ShipmentStepScalarWhereInput[]
  }

  export type ShipmentStepUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentStepCreateWithoutShipmentInput, ShipmentStepUncheckedCreateWithoutShipmentInput> | ShipmentStepCreateWithoutShipmentInput[] | ShipmentStepUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentStepCreateOrConnectWithoutShipmentInput | ShipmentStepCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentStepUpsertWithWhereUniqueWithoutShipmentInput | ShipmentStepUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentStepCreateManyShipmentInputEnvelope
    set?: ShipmentStepWhereUniqueInput | ShipmentStepWhereUniqueInput[]
    disconnect?: ShipmentStepWhereUniqueInput | ShipmentStepWhereUniqueInput[]
    delete?: ShipmentStepWhereUniqueInput | ShipmentStepWhereUniqueInput[]
    connect?: ShipmentStepWhereUniqueInput | ShipmentStepWhereUniqueInput[]
    update?: ShipmentStepUpdateWithWhereUniqueWithoutShipmentInput | ShipmentStepUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentStepUpdateManyWithWhereWithoutShipmentInput | ShipmentStepUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentStepScalarWhereInput | ShipmentStepScalarWhereInput[]
  }

  export type ShipmentCreateNestedOneWithoutStepsInput = {
    create?: XOR<ShipmentCreateWithoutStepsInput, ShipmentUncheckedCreateWithoutStepsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutStepsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type ShipmentUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<ShipmentCreateWithoutStepsInput, ShipmentUncheckedCreateWithoutStepsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutStepsInput
    upsert?: ShipmentUpsertWithoutStepsInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutStepsInput, ShipmentUpdateWithoutStepsInput>, ShipmentUncheckedUpdateWithoutStepsInput>
  }

  export type MaterialCreateNestedOneWithoutMarketSignalsInput = {
    create?: XOR<MaterialCreateWithoutMarketSignalsInput, MaterialUncheckedCreateWithoutMarketSignalsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutMarketSignalsInput
    connect?: MaterialWhereUniqueInput
  }

  export type MaterialUpdateOneWithoutMarketSignalsNestedInput = {
    create?: XOR<MaterialCreateWithoutMarketSignalsInput, MaterialUncheckedCreateWithoutMarketSignalsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutMarketSignalsInput
    upsert?: MaterialUpsertWithoutMarketSignalsInput
    disconnect?: MaterialWhereInput | boolean
    delete?: MaterialWhereInput | boolean
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutMarketSignalsInput, MaterialUpdateWithoutMarketSignalsInput>, MaterialUncheckedUpdateWithoutMarketSignalsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderCreateNestedOneWithoutPricingRecommendationsInput = {
    create?: XOR<OrderCreateWithoutPricingRecommendationsInput, OrderUncheckedCreateWithoutPricingRecommendationsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPricingRecommendationsInput
    connect?: OrderWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrderUpdateOneWithoutPricingRecommendationsNestedInput = {
    create?: XOR<OrderCreateWithoutPricingRecommendationsInput, OrderUncheckedCreateWithoutPricingRecommendationsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPricingRecommendationsInput
    upsert?: OrderUpsertWithoutPricingRecommendationsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPricingRecommendationsInput, OrderUpdateWithoutPricingRecommendationsInput>, OrderUncheckedUpdateWithoutPricingRecommendationsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MaterialCreateNestedOneWithoutStructuralRisksInput = {
    create?: XOR<MaterialCreateWithoutStructuralRisksInput, MaterialUncheckedCreateWithoutStructuralRisksInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutStructuralRisksInput
    connect?: MaterialWhereUniqueInput
  }

  export type MaterialUpdateOneWithoutStructuralRisksNestedInput = {
    create?: XOR<MaterialCreateWithoutStructuralRisksInput, MaterialUncheckedCreateWithoutStructuralRisksInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutStructuralRisksInput
    upsert?: MaterialUpsertWithoutStructuralRisksInput
    disconnect?: MaterialWhereInput | boolean
    delete?: MaterialWhereInput | boolean
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutStructuralRisksInput, MaterialUpdateWithoutStructuralRisksInput>, MaterialUncheckedUpdateWithoutStructuralRisksInput>
  }

  export type MaterialCreateNestedOneWithoutInventoryItemsInput = {
    create?: XOR<MaterialCreateWithoutInventoryItemsInput, MaterialUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutInventoryItemsInput
    connect?: MaterialWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MaterialUpdateOneWithoutInventoryItemsNestedInput = {
    create?: XOR<MaterialCreateWithoutInventoryItemsInput, MaterialUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutInventoryItemsInput
    upsert?: MaterialUpsertWithoutInventoryItemsInput
    disconnect?: MaterialWhereInput | boolean
    delete?: MaterialWhereInput | boolean
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutInventoryItemsInput, MaterialUpdateWithoutInventoryItemsInput>, MaterialUncheckedUpdateWithoutInventoryItemsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type OrderCreateWithoutMaterialInput = {
    id: string
    client: string
    margin: string
    pricingRecommendations?: PricingRecommendationCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutMaterialInput = {
    id: string
    client: string
    margin: string
    pricingRecommendations?: PricingRecommendationUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutMaterialInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutMaterialInput, OrderUncheckedCreateWithoutMaterialInput>
  }

  export type OrderCreateManyMaterialInputEnvelope = {
    data: OrderCreateManyMaterialInput | OrderCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutMaterialInput = {
    qty: string
    supplier: string
    currentNode: string
    eta: string
    status: string
    gemmaAnnotation: string
    steps?: ShipmentStepCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutMaterialInput = {
    id?: number
    qty: string
    supplier: string
    currentNode: string
    eta: string
    status: string
    gemmaAnnotation: string
    steps?: ShipmentStepUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutMaterialInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutMaterialInput, ShipmentUncheckedCreateWithoutMaterialInput>
  }

  export type ShipmentCreateManyMaterialInputEnvelope = {
    data: ShipmentCreateManyMaterialInput | ShipmentCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type InventoryItemCreateWithoutMaterialInput = {
    name: string
    category: string
    sku: string
    quantity: number
    unit: string
    location: string
    minThreshold: number
    status: string
    image: string
    lastUpdated?: Date | string
  }

  export type InventoryItemUncheckedCreateWithoutMaterialInput = {
    id?: number
    name: string
    category: string
    sku: string
    quantity: number
    unit: string
    location: string
    minThreshold: number
    status: string
    image: string
    lastUpdated?: Date | string
  }

  export type InventoryItemCreateOrConnectWithoutMaterialInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutMaterialInput, InventoryItemUncheckedCreateWithoutMaterialInput>
  }

  export type InventoryItemCreateManyMaterialInputEnvelope = {
    data: InventoryItemCreateManyMaterialInput | InventoryItemCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type MarketSignalCreateWithoutMaterialInput = {
    title: string
    source: string
    date: string
    relevance: string
    tag: string
    desc: string
  }

  export type MarketSignalUncheckedCreateWithoutMaterialInput = {
    id?: number
    title: string
    source: string
    date: string
    relevance: string
    tag: string
    desc: string
  }

  export type MarketSignalCreateOrConnectWithoutMaterialInput = {
    where: MarketSignalWhereUniqueInput
    create: XOR<MarketSignalCreateWithoutMaterialInput, MarketSignalUncheckedCreateWithoutMaterialInput>
  }

  export type MarketSignalCreateManyMaterialInputEnvelope = {
    data: MarketSignalCreateManyMaterialInput | MarketSignalCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type StructuralRiskCreateWithoutMaterialInput = {
    trend: string
    status: string
    title: string
    description: string
    gemmaAdvisory: string
  }

  export type StructuralRiskUncheckedCreateWithoutMaterialInput = {
    id?: number
    trend: string
    status: string
    title: string
    description: string
    gemmaAdvisory: string
  }

  export type StructuralRiskCreateOrConnectWithoutMaterialInput = {
    where: StructuralRiskWhereUniqueInput
    create: XOR<StructuralRiskCreateWithoutMaterialInput, StructuralRiskUncheckedCreateWithoutMaterialInput>
  }

  export type StructuralRiskCreateManyMaterialInputEnvelope = {
    data: StructuralRiskCreateManyMaterialInput | StructuralRiskCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutMaterialInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutMaterialInput, OrderUncheckedUpdateWithoutMaterialInput>
    create: XOR<OrderCreateWithoutMaterialInput, OrderUncheckedCreateWithoutMaterialInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutMaterialInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutMaterialInput, OrderUncheckedUpdateWithoutMaterialInput>
  }

  export type OrderUpdateManyWithWhereWithoutMaterialInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutMaterialInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    client?: StringFilter<"Order"> | string
    margin?: StringFilter<"Order"> | string
    materialId?: IntFilter<"Order"> | number
  }

  export type ShipmentUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutMaterialInput, ShipmentUncheckedUpdateWithoutMaterialInput>
    create: XOR<ShipmentCreateWithoutMaterialInput, ShipmentUncheckedCreateWithoutMaterialInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutMaterialInput, ShipmentUncheckedUpdateWithoutMaterialInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutMaterialInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutMaterialInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: IntFilter<"Shipment"> | number
    materialId?: IntFilter<"Shipment"> | number
    qty?: StringFilter<"Shipment"> | string
    supplier?: StringFilter<"Shipment"> | string
    currentNode?: StringFilter<"Shipment"> | string
    eta?: StringFilter<"Shipment"> | string
    status?: StringFilter<"Shipment"> | string
    gemmaAnnotation?: StringFilter<"Shipment"> | string
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutMaterialInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutMaterialInput, InventoryItemUncheckedUpdateWithoutMaterialInput>
    create: XOR<InventoryItemCreateWithoutMaterialInput, InventoryItemUncheckedCreateWithoutMaterialInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutMaterialInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutMaterialInput, InventoryItemUncheckedUpdateWithoutMaterialInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutMaterialInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutMaterialInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    id?: IntFilter<"InventoryItem"> | number
    name?: StringFilter<"InventoryItem"> | string
    category?: StringFilter<"InventoryItem"> | string
    sku?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    unit?: StringFilter<"InventoryItem"> | string
    location?: StringFilter<"InventoryItem"> | string
    minThreshold?: IntFilter<"InventoryItem"> | number
    status?: StringFilter<"InventoryItem"> | string
    image?: StringFilter<"InventoryItem"> | string
    lastUpdated?: DateTimeFilter<"InventoryItem"> | Date | string
    materialId?: IntNullableFilter<"InventoryItem"> | number | null
  }

  export type MarketSignalUpsertWithWhereUniqueWithoutMaterialInput = {
    where: MarketSignalWhereUniqueInput
    update: XOR<MarketSignalUpdateWithoutMaterialInput, MarketSignalUncheckedUpdateWithoutMaterialInput>
    create: XOR<MarketSignalCreateWithoutMaterialInput, MarketSignalUncheckedCreateWithoutMaterialInput>
  }

  export type MarketSignalUpdateWithWhereUniqueWithoutMaterialInput = {
    where: MarketSignalWhereUniqueInput
    data: XOR<MarketSignalUpdateWithoutMaterialInput, MarketSignalUncheckedUpdateWithoutMaterialInput>
  }

  export type MarketSignalUpdateManyWithWhereWithoutMaterialInput = {
    where: MarketSignalScalarWhereInput
    data: XOR<MarketSignalUpdateManyMutationInput, MarketSignalUncheckedUpdateManyWithoutMaterialInput>
  }

  export type MarketSignalScalarWhereInput = {
    AND?: MarketSignalScalarWhereInput | MarketSignalScalarWhereInput[]
    OR?: MarketSignalScalarWhereInput[]
    NOT?: MarketSignalScalarWhereInput | MarketSignalScalarWhereInput[]
    id?: IntFilter<"MarketSignal"> | number
    title?: StringFilter<"MarketSignal"> | string
    source?: StringFilter<"MarketSignal"> | string
    date?: StringFilter<"MarketSignal"> | string
    relevance?: StringFilter<"MarketSignal"> | string
    tag?: StringFilter<"MarketSignal"> | string
    desc?: StringFilter<"MarketSignal"> | string
    materialId?: IntNullableFilter<"MarketSignal"> | number | null
  }

  export type StructuralRiskUpsertWithWhereUniqueWithoutMaterialInput = {
    where: StructuralRiskWhereUniqueInput
    update: XOR<StructuralRiskUpdateWithoutMaterialInput, StructuralRiskUncheckedUpdateWithoutMaterialInput>
    create: XOR<StructuralRiskCreateWithoutMaterialInput, StructuralRiskUncheckedCreateWithoutMaterialInput>
  }

  export type StructuralRiskUpdateWithWhereUniqueWithoutMaterialInput = {
    where: StructuralRiskWhereUniqueInput
    data: XOR<StructuralRiskUpdateWithoutMaterialInput, StructuralRiskUncheckedUpdateWithoutMaterialInput>
  }

  export type StructuralRiskUpdateManyWithWhereWithoutMaterialInput = {
    where: StructuralRiskScalarWhereInput
    data: XOR<StructuralRiskUpdateManyMutationInput, StructuralRiskUncheckedUpdateManyWithoutMaterialInput>
  }

  export type StructuralRiskScalarWhereInput = {
    AND?: StructuralRiskScalarWhereInput | StructuralRiskScalarWhereInput[]
    OR?: StructuralRiskScalarWhereInput[]
    NOT?: StructuralRiskScalarWhereInput | StructuralRiskScalarWhereInput[]
    id?: IntFilter<"StructuralRisk"> | number
    trend?: StringFilter<"StructuralRisk"> | string
    status?: StringFilter<"StructuralRisk"> | string
    title?: StringFilter<"StructuralRisk"> | string
    description?: StringFilter<"StructuralRisk"> | string
    gemmaAdvisory?: StringFilter<"StructuralRisk"> | string
    materialId?: IntNullableFilter<"StructuralRisk"> | number | null
  }

  export type MaterialCreateWithoutOrdersInput = {
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    shipments?: ShipmentCreateNestedManyWithoutMaterialInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutMaterialInput
    marketSignals?: MarketSignalCreateNestedManyWithoutMaterialInput
    structuralRisks?: StructuralRiskCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutMaterialInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutMaterialInput
    marketSignals?: MarketSignalUncheckedCreateNestedManyWithoutMaterialInput
    structuralRisks?: StructuralRiskUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutOrdersInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutOrdersInput, MaterialUncheckedCreateWithoutOrdersInput>
  }

  export type PricingRecommendationCreateWithoutOrderInput = {
    id: string
    trigger: string
    action: string
    confidence: string
    reasoning: JsonNullValueInput | InputJsonValue
    accepted?: boolean
    rejected?: boolean
    expanded?: boolean
  }

  export type PricingRecommendationUncheckedCreateWithoutOrderInput = {
    id: string
    trigger: string
    action: string
    confidence: string
    reasoning: JsonNullValueInput | InputJsonValue
    accepted?: boolean
    rejected?: boolean
    expanded?: boolean
  }

  export type PricingRecommendationCreateOrConnectWithoutOrderInput = {
    where: PricingRecommendationWhereUniqueInput
    create: XOR<PricingRecommendationCreateWithoutOrderInput, PricingRecommendationUncheckedCreateWithoutOrderInput>
  }

  export type PricingRecommendationCreateManyOrderInputEnvelope = {
    data: PricingRecommendationCreateManyOrderInput | PricingRecommendationCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type MaterialUpsertWithoutOrdersInput = {
    update: XOR<MaterialUpdateWithoutOrdersInput, MaterialUncheckedUpdateWithoutOrdersInput>
    create: XOR<MaterialCreateWithoutOrdersInput, MaterialUncheckedCreateWithoutOrdersInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutOrdersInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutOrdersInput, MaterialUncheckedUpdateWithoutOrdersInput>
  }

  export type MaterialUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    shipments?: ShipmentUpdateManyWithoutMaterialNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutMaterialNestedInput
    marketSignals?: MarketSignalUpdateManyWithoutMaterialNestedInput
    structuralRisks?: StructuralRiskUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    shipments?: ShipmentUncheckedUpdateManyWithoutMaterialNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutMaterialNestedInput
    marketSignals?: MarketSignalUncheckedUpdateManyWithoutMaterialNestedInput
    structuralRisks?: StructuralRiskUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type PricingRecommendationUpsertWithWhereUniqueWithoutOrderInput = {
    where: PricingRecommendationWhereUniqueInput
    update: XOR<PricingRecommendationUpdateWithoutOrderInput, PricingRecommendationUncheckedUpdateWithoutOrderInput>
    create: XOR<PricingRecommendationCreateWithoutOrderInput, PricingRecommendationUncheckedCreateWithoutOrderInput>
  }

  export type PricingRecommendationUpdateWithWhereUniqueWithoutOrderInput = {
    where: PricingRecommendationWhereUniqueInput
    data: XOR<PricingRecommendationUpdateWithoutOrderInput, PricingRecommendationUncheckedUpdateWithoutOrderInput>
  }

  export type PricingRecommendationUpdateManyWithWhereWithoutOrderInput = {
    where: PricingRecommendationScalarWhereInput
    data: XOR<PricingRecommendationUpdateManyMutationInput, PricingRecommendationUncheckedUpdateManyWithoutOrderInput>
  }

  export type PricingRecommendationScalarWhereInput = {
    AND?: PricingRecommendationScalarWhereInput | PricingRecommendationScalarWhereInput[]
    OR?: PricingRecommendationScalarWhereInput[]
    NOT?: PricingRecommendationScalarWhereInput | PricingRecommendationScalarWhereInput[]
    id?: StringFilter<"PricingRecommendation"> | string
    trigger?: StringFilter<"PricingRecommendation"> | string
    action?: StringFilter<"PricingRecommendation"> | string
    confidence?: StringFilter<"PricingRecommendation"> | string
    reasoning?: JsonFilter<"PricingRecommendation">
    accepted?: BoolFilter<"PricingRecommendation"> | boolean
    rejected?: BoolFilter<"PricingRecommendation"> | boolean
    expanded?: BoolFilter<"PricingRecommendation"> | boolean
    orderId?: StringNullableFilter<"PricingRecommendation"> | string | null
  }

  export type MaterialCreateWithoutShipmentsInput = {
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    orders?: OrderCreateNestedManyWithoutMaterialInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutMaterialInput
    marketSignals?: MarketSignalCreateNestedManyWithoutMaterialInput
    structuralRisks?: StructuralRiskCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutShipmentsInput = {
    id?: number
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    orders?: OrderUncheckedCreateNestedManyWithoutMaterialInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutMaterialInput
    marketSignals?: MarketSignalUncheckedCreateNestedManyWithoutMaterialInput
    structuralRisks?: StructuralRiskUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutShipmentsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutShipmentsInput, MaterialUncheckedCreateWithoutShipmentsInput>
  }

  export type ShipmentStepCreateWithoutShipmentInput = {
    name: string
    status: string
    sequence: number
  }

  export type ShipmentStepUncheckedCreateWithoutShipmentInput = {
    id?: number
    name: string
    status: string
    sequence: number
  }

  export type ShipmentStepCreateOrConnectWithoutShipmentInput = {
    where: ShipmentStepWhereUniqueInput
    create: XOR<ShipmentStepCreateWithoutShipmentInput, ShipmentStepUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentStepCreateManyShipmentInputEnvelope = {
    data: ShipmentStepCreateManyShipmentInput | ShipmentStepCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type MaterialUpsertWithoutShipmentsInput = {
    update: XOR<MaterialUpdateWithoutShipmentsInput, MaterialUncheckedUpdateWithoutShipmentsInput>
    create: XOR<MaterialCreateWithoutShipmentsInput, MaterialUncheckedCreateWithoutShipmentsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutShipmentsInput, MaterialUncheckedUpdateWithoutShipmentsInput>
  }

  export type MaterialUpdateWithoutShipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutMaterialNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutMaterialNestedInput
    marketSignals?: MarketSignalUpdateManyWithoutMaterialNestedInput
    structuralRisks?: StructuralRiskUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutMaterialNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutMaterialNestedInput
    marketSignals?: MarketSignalUncheckedUpdateManyWithoutMaterialNestedInput
    structuralRisks?: StructuralRiskUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type ShipmentStepUpsertWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentStepWhereUniqueInput
    update: XOR<ShipmentStepUpdateWithoutShipmentInput, ShipmentStepUncheckedUpdateWithoutShipmentInput>
    create: XOR<ShipmentStepCreateWithoutShipmentInput, ShipmentStepUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentStepUpdateWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentStepWhereUniqueInput
    data: XOR<ShipmentStepUpdateWithoutShipmentInput, ShipmentStepUncheckedUpdateWithoutShipmentInput>
  }

  export type ShipmentStepUpdateManyWithWhereWithoutShipmentInput = {
    where: ShipmentStepScalarWhereInput
    data: XOR<ShipmentStepUpdateManyMutationInput, ShipmentStepUncheckedUpdateManyWithoutShipmentInput>
  }

  export type ShipmentStepScalarWhereInput = {
    AND?: ShipmentStepScalarWhereInput | ShipmentStepScalarWhereInput[]
    OR?: ShipmentStepScalarWhereInput[]
    NOT?: ShipmentStepScalarWhereInput | ShipmentStepScalarWhereInput[]
    id?: IntFilter<"ShipmentStep"> | number
    shipmentId?: IntFilter<"ShipmentStep"> | number
    name?: StringFilter<"ShipmentStep"> | string
    status?: StringFilter<"ShipmentStep"> | string
    sequence?: IntFilter<"ShipmentStep"> | number
  }

  export type ShipmentCreateWithoutStepsInput = {
    qty: string
    supplier: string
    currentNode: string
    eta: string
    status: string
    gemmaAnnotation: string
    material: MaterialCreateNestedOneWithoutShipmentsInput
  }

  export type ShipmentUncheckedCreateWithoutStepsInput = {
    id?: number
    materialId: number
    qty: string
    supplier: string
    currentNode: string
    eta: string
    status: string
    gemmaAnnotation: string
  }

  export type ShipmentCreateOrConnectWithoutStepsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutStepsInput, ShipmentUncheckedCreateWithoutStepsInput>
  }

  export type ShipmentUpsertWithoutStepsInput = {
    update: XOR<ShipmentUpdateWithoutStepsInput, ShipmentUncheckedUpdateWithoutStepsInput>
    create: XOR<ShipmentCreateWithoutStepsInput, ShipmentUncheckedCreateWithoutStepsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutStepsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutStepsInput, ShipmentUncheckedUpdateWithoutStepsInput>
  }

  export type ShipmentUpdateWithoutStepsInput = {
    qty?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    currentNode?: StringFieldUpdateOperationsInput | string
    eta?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gemmaAnnotation?: StringFieldUpdateOperationsInput | string
    material?: MaterialUpdateOneRequiredWithoutShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutStepsInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    currentNode?: StringFieldUpdateOperationsInput | string
    eta?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gemmaAnnotation?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialCreateWithoutMarketSignalsInput = {
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    orders?: OrderCreateNestedManyWithoutMaterialInput
    shipments?: ShipmentCreateNestedManyWithoutMaterialInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutMaterialInput
    structuralRisks?: StructuralRiskCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutMarketSignalsInput = {
    id?: number
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    orders?: OrderUncheckedCreateNestedManyWithoutMaterialInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutMaterialInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutMaterialInput
    structuralRisks?: StructuralRiskUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutMarketSignalsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutMarketSignalsInput, MaterialUncheckedCreateWithoutMarketSignalsInput>
  }

  export type MaterialUpsertWithoutMarketSignalsInput = {
    update: XOR<MaterialUpdateWithoutMarketSignalsInput, MaterialUncheckedUpdateWithoutMarketSignalsInput>
    create: XOR<MaterialCreateWithoutMarketSignalsInput, MaterialUncheckedCreateWithoutMarketSignalsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutMarketSignalsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutMarketSignalsInput, MaterialUncheckedUpdateWithoutMarketSignalsInput>
  }

  export type MaterialUpdateWithoutMarketSignalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutMaterialNestedInput
    shipments?: ShipmentUpdateManyWithoutMaterialNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutMaterialNestedInput
    structuralRisks?: StructuralRiskUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutMarketSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutMaterialNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutMaterialNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutMaterialNestedInput
    structuralRisks?: StructuralRiskUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type OrderCreateWithoutPricingRecommendationsInput = {
    id: string
    client: string
    margin: string
    material: MaterialCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutPricingRecommendationsInput = {
    id: string
    client: string
    margin: string
    materialId: number
  }

  export type OrderCreateOrConnectWithoutPricingRecommendationsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPricingRecommendationsInput, OrderUncheckedCreateWithoutPricingRecommendationsInput>
  }

  export type OrderUpsertWithoutPricingRecommendationsInput = {
    update: XOR<OrderUpdateWithoutPricingRecommendationsInput, OrderUncheckedUpdateWithoutPricingRecommendationsInput>
    create: XOR<OrderCreateWithoutPricingRecommendationsInput, OrderUncheckedCreateWithoutPricingRecommendationsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPricingRecommendationsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPricingRecommendationsInput, OrderUncheckedUpdateWithoutPricingRecommendationsInput>
  }

  export type OrderUpdateWithoutPricingRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    margin?: StringFieldUpdateOperationsInput | string
    material?: MaterialUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutPricingRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    margin?: StringFieldUpdateOperationsInput | string
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialCreateWithoutStructuralRisksInput = {
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    orders?: OrderCreateNestedManyWithoutMaterialInput
    shipments?: ShipmentCreateNestedManyWithoutMaterialInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutMaterialInput
    marketSignals?: MarketSignalCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutStructuralRisksInput = {
    id?: number
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    orders?: OrderUncheckedCreateNestedManyWithoutMaterialInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutMaterialInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutMaterialInput
    marketSignals?: MarketSignalUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutStructuralRisksInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutStructuralRisksInput, MaterialUncheckedCreateWithoutStructuralRisksInput>
  }

  export type MaterialUpsertWithoutStructuralRisksInput = {
    update: XOR<MaterialUpdateWithoutStructuralRisksInput, MaterialUncheckedUpdateWithoutStructuralRisksInput>
    create: XOR<MaterialCreateWithoutStructuralRisksInput, MaterialUncheckedCreateWithoutStructuralRisksInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutStructuralRisksInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutStructuralRisksInput, MaterialUncheckedUpdateWithoutStructuralRisksInput>
  }

  export type MaterialUpdateWithoutStructuralRisksInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutMaterialNestedInput
    shipments?: ShipmentUpdateManyWithoutMaterialNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutMaterialNestedInput
    marketSignals?: MarketSignalUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutStructuralRisksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutMaterialNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutMaterialNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutMaterialNestedInput
    marketSignals?: MarketSignalUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateWithoutInventoryItemsInput = {
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    orders?: OrderCreateNestedManyWithoutMaterialInput
    shipments?: ShipmentCreateNestedManyWithoutMaterialInput
    marketSignals?: MarketSignalCreateNestedManyWithoutMaterialInput
    structuralRisks?: StructuralRiskCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutInventoryItemsInput = {
    id?: number
    name: string
    currentCost: number
    marketCost: number
    supplier: string
    orders?: OrderUncheckedCreateNestedManyWithoutMaterialInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutMaterialInput
    marketSignals?: MarketSignalUncheckedCreateNestedManyWithoutMaterialInput
    structuralRisks?: StructuralRiskUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutInventoryItemsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutInventoryItemsInput, MaterialUncheckedCreateWithoutInventoryItemsInput>
  }

  export type MaterialUpsertWithoutInventoryItemsInput = {
    update: XOR<MaterialUpdateWithoutInventoryItemsInput, MaterialUncheckedUpdateWithoutInventoryItemsInput>
    create: XOR<MaterialCreateWithoutInventoryItemsInput, MaterialUncheckedCreateWithoutInventoryItemsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutInventoryItemsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutInventoryItemsInput, MaterialUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type MaterialUpdateWithoutInventoryItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutMaterialNestedInput
    shipments?: ShipmentUpdateManyWithoutMaterialNestedInput
    marketSignals?: MarketSignalUpdateManyWithoutMaterialNestedInput
    structuralRisks?: StructuralRiskUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutInventoryItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentCost?: FloatFieldUpdateOperationsInput | number
    marketCost?: FloatFieldUpdateOperationsInput | number
    supplier?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutMaterialNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutMaterialNestedInput
    marketSignals?: MarketSignalUncheckedUpdateManyWithoutMaterialNestedInput
    structuralRisks?: StructuralRiskUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type OrderCreateManyMaterialInput = {
    id: string
    client: string
    margin: string
  }

  export type ShipmentCreateManyMaterialInput = {
    id?: number
    qty: string
    supplier: string
    currentNode: string
    eta: string
    status: string
    gemmaAnnotation: string
  }

  export type InventoryItemCreateManyMaterialInput = {
    id?: number
    name: string
    category: string
    sku: string
    quantity: number
    unit: string
    location: string
    minThreshold: number
    status: string
    image: string
    lastUpdated?: Date | string
  }

  export type MarketSignalCreateManyMaterialInput = {
    id?: number
    title: string
    source: string
    date: string
    relevance: string
    tag: string
    desc: string
  }

  export type StructuralRiskCreateManyMaterialInput = {
    id?: number
    trend: string
    status: string
    title: string
    description: string
    gemmaAdvisory: string
  }

  export type OrderUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    margin?: StringFieldUpdateOperationsInput | string
    pricingRecommendations?: PricingRecommendationUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    margin?: StringFieldUpdateOperationsInput | string
    pricingRecommendations?: PricingRecommendationUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: StringFieldUpdateOperationsInput | string
    margin?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentUpdateWithoutMaterialInput = {
    qty?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    currentNode?: StringFieldUpdateOperationsInput | string
    eta?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gemmaAnnotation?: StringFieldUpdateOperationsInput | string
    steps?: ShipmentStepUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    currentNode?: StringFieldUpdateOperationsInput | string
    eta?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gemmaAnnotation?: StringFieldUpdateOperationsInput | string
    steps?: ShipmentStepUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    currentNode?: StringFieldUpdateOperationsInput | string
    eta?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gemmaAnnotation?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryItemUpdateWithoutMaterialInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    minThreshold?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    minThreshold?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    minThreshold?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketSignalUpdateWithoutMaterialInput = {
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    relevance?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type MarketSignalUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    relevance?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type MarketSignalUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    relevance?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type StructuralRiskUpdateWithoutMaterialInput = {
    trend?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    gemmaAdvisory?: StringFieldUpdateOperationsInput | string
  }

  export type StructuralRiskUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    trend?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    gemmaAdvisory?: StringFieldUpdateOperationsInput | string
  }

  export type StructuralRiskUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    trend?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    gemmaAdvisory?: StringFieldUpdateOperationsInput | string
  }

  export type PricingRecommendationCreateManyOrderInput = {
    id: string
    trigger: string
    action: string
    confidence: string
    reasoning: JsonNullValueInput | InputJsonValue
    accepted?: boolean
    rejected?: boolean
    expanded?: boolean
  }

  export type PricingRecommendationUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: StringFieldUpdateOperationsInput | string
    reasoning?: JsonNullValueInput | InputJsonValue
    accepted?: BoolFieldUpdateOperationsInput | boolean
    rejected?: BoolFieldUpdateOperationsInput | boolean
    expanded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricingRecommendationUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: StringFieldUpdateOperationsInput | string
    reasoning?: JsonNullValueInput | InputJsonValue
    accepted?: BoolFieldUpdateOperationsInput | boolean
    rejected?: BoolFieldUpdateOperationsInput | boolean
    expanded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricingRecommendationUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: StringFieldUpdateOperationsInput | string
    reasoning?: JsonNullValueInput | InputJsonValue
    accepted?: BoolFieldUpdateOperationsInput | boolean
    rejected?: BoolFieldUpdateOperationsInput | boolean
    expanded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShipmentStepCreateManyShipmentInput = {
    id?: number
    name: string
    status: string
    sequence: number
  }

  export type ShipmentStepUpdateWithoutShipmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentStepUncheckedUpdateWithoutShipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentStepUncheckedUpdateManyWithoutShipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
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