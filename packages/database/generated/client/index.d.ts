
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
 * Model Analytics
 * 
 */
export type Analytics = $Result.DefaultSelection<Prisma.$AnalyticsPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model CustomCommand
 * 
 */
export type CustomCommand = $Result.DefaultSelection<Prisma.$CustomCommandPayload>
/**
 * Model StreamChat
 * 
 */
export type StreamChat = $Result.DefaultSelection<Prisma.$StreamChatPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Moderation
 * 
 */
export type Moderation = $Result.DefaultSelection<Prisma.$ModerationPayload>
/**
 * Model UserSecurity
 * 
 */
export type UserSecurity = $Result.DefaultSelection<Prisma.$UserSecurityPayload>
/**
 * Model Viewer
 * 
 */
export type Viewer = $Result.DefaultSelection<Prisma.$ViewerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  moderation: 'moderation',
  owner: 'owner',
  viewer: 'viewer'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Analytics
 * const analytics = await prisma.analytics.findMany()
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
   * // Fetch zero or more Analytics
   * const analytics = await prisma.analytics.findMany()
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
   * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analytics
    * const analytics = await prisma.analytics.findMany()
    * ```
    */
  get analytics(): Prisma.AnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customCommand`: Exposes CRUD operations for the **CustomCommand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomCommands
    * const customCommands = await prisma.customCommand.findMany()
    * ```
    */
  get customCommand(): Prisma.CustomCommandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streamChat`: Exposes CRUD operations for the **StreamChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamChats
    * const streamChats = await prisma.streamChat.findMany()
    * ```
    */
  get streamChat(): Prisma.StreamChatDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.moderation`: Exposes CRUD operations for the **Moderation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moderations
    * const moderations = await prisma.moderation.findMany()
    * ```
    */
  get moderation(): Prisma.ModerationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSecurity`: Exposes CRUD operations for the **UserSecurity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSecurities
    * const userSecurities = await prisma.userSecurity.findMany()
    * ```
    */
  get userSecurity(): Prisma.UserSecurityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewer`: Exposes CRUD operations for the **Viewer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viewers
    * const viewers = await prisma.viewer.findMany()
    * ```
    */
  get viewer(): Prisma.ViewerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Analytics: 'Analytics',
    Chat: 'Chat',
    CustomCommand: 'CustomCommand',
    StreamChat: 'StreamChat',
    User: 'User',
    Moderation: 'Moderation',
    UserSecurity: 'UserSecurity',
    Viewer: 'Viewer'
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
      modelProps: "analytics" | "chat" | "customCommand" | "streamChat" | "user" | "moderation" | "userSecurity" | "viewer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Analytics: {
        payload: Prisma.$AnalyticsPayload<ExtArgs>
        fields: Prisma.AnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findMany: {
            args: Prisma.AnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          create: {
            args: Prisma.AnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          createMany: {
            args: Prisma.AnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          update: {
            args: Prisma.AnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalytics>
          }
          groupBy: {
            args: Prisma.AnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      CustomCommand: {
        payload: Prisma.$CustomCommandPayload<ExtArgs>
        fields: Prisma.CustomCommandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomCommandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomCommandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          findFirst: {
            args: Prisma.CustomCommandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomCommandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          findMany: {
            args: Prisma.CustomCommandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>[]
          }
          create: {
            args: Prisma.CustomCommandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          createMany: {
            args: Prisma.CustomCommandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomCommandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>[]
          }
          delete: {
            args: Prisma.CustomCommandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          update: {
            args: Prisma.CustomCommandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          deleteMany: {
            args: Prisma.CustomCommandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomCommandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomCommandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>[]
          }
          upsert: {
            args: Prisma.CustomCommandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          aggregate: {
            args: Prisma.CustomCommandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomCommand>
          }
          groupBy: {
            args: Prisma.CustomCommandGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomCommandGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomCommandCountArgs<ExtArgs>
            result: $Utils.Optional<CustomCommandCountAggregateOutputType> | number
          }
        }
      }
      StreamChat: {
        payload: Prisma.$StreamChatPayload<ExtArgs>
        fields: Prisma.StreamChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload>
          }
          findFirst: {
            args: Prisma.StreamChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload>
          }
          findMany: {
            args: Prisma.StreamChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload>[]
          }
          create: {
            args: Prisma.StreamChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload>
          }
          createMany: {
            args: Prisma.StreamChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload>[]
          }
          delete: {
            args: Prisma.StreamChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload>
          }
          update: {
            args: Prisma.StreamChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload>
          }
          deleteMany: {
            args: Prisma.StreamChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload>[]
          }
          upsert: {
            args: Prisma.StreamChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamChatPayload>
          }
          aggregate: {
            args: Prisma.StreamChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamChat>
          }
          groupBy: {
            args: Prisma.StreamChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamChatCountArgs<ExtArgs>
            result: $Utils.Optional<StreamChatCountAggregateOutputType> | number
          }
        }
      }
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
      Moderation: {
        payload: Prisma.$ModerationPayload<ExtArgs>
        fields: Prisma.ModerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload>
          }
          findFirst: {
            args: Prisma.ModerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload>
          }
          findMany: {
            args: Prisma.ModerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload>[]
          }
          create: {
            args: Prisma.ModerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload>
          }
          createMany: {
            args: Prisma.ModerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload>[]
          }
          delete: {
            args: Prisma.ModerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload>
          }
          update: {
            args: Prisma.ModerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload>
          }
          deleteMany: {
            args: Prisma.ModerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModerationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload>[]
          }
          upsert: {
            args: Prisma.ModerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModerationPayload>
          }
          aggregate: {
            args: Prisma.ModerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModeration>
          }
          groupBy: {
            args: Prisma.ModerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModerationCountArgs<ExtArgs>
            result: $Utils.Optional<ModerationCountAggregateOutputType> | number
          }
        }
      }
      UserSecurity: {
        payload: Prisma.$UserSecurityPayload<ExtArgs>
        fields: Prisma.UserSecurityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSecurityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSecurityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload>
          }
          findFirst: {
            args: Prisma.UserSecurityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSecurityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload>
          }
          findMany: {
            args: Prisma.UserSecurityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload>[]
          }
          create: {
            args: Prisma.UserSecurityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload>
          }
          createMany: {
            args: Prisma.UserSecurityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSecurityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload>[]
          }
          delete: {
            args: Prisma.UserSecurityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload>
          }
          update: {
            args: Prisma.UserSecurityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload>
          }
          deleteMany: {
            args: Prisma.UserSecurityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSecurityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSecurityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload>[]
          }
          upsert: {
            args: Prisma.UserSecurityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityPayload>
          }
          aggregate: {
            args: Prisma.UserSecurityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSecurity>
          }
          groupBy: {
            args: Prisma.UserSecurityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSecurityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSecurityCountArgs<ExtArgs>
            result: $Utils.Optional<UserSecurityCountAggregateOutputType> | number
          }
        }
      }
      Viewer: {
        payload: Prisma.$ViewerPayload<ExtArgs>
        fields: Prisma.ViewerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          findFirst: {
            args: Prisma.ViewerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          findMany: {
            args: Prisma.ViewerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>[]
          }
          create: {
            args: Prisma.ViewerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          createMany: {
            args: Prisma.ViewerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>[]
          }
          delete: {
            args: Prisma.ViewerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          update: {
            args: Prisma.ViewerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          deleteMany: {
            args: Prisma.ViewerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>[]
          }
          upsert: {
            args: Prisma.ViewerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          aggregate: {
            args: Prisma.ViewerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewer>
          }
          groupBy: {
            args: Prisma.ViewerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewerCountArgs<ExtArgs>
            result: $Utils.Optional<ViewerCountAggregateOutputType> | number
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
    analytics?: AnalyticsOmit
    chat?: ChatOmit
    customCommand?: CustomCommandOmit
    streamChat?: StreamChatOmit
    user?: UserOmit
    moderation?: ModerationOmit
    userSecurity?: UserSecurityOmit
    viewer?: ViewerOmit
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
   * Count Type StreamChatCountOutputType
   */

  export type StreamChatCountOutputType = {
    Chat: number
    Viewer: number
  }

  export type StreamChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | StreamChatCountOutputTypeCountChatArgs
    Viewer?: boolean | StreamChatCountOutputTypeCountViewerArgs
  }

  // Custom InputTypes
  /**
   * StreamChatCountOutputType without action
   */
  export type StreamChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChatCountOutputType
     */
    select?: StreamChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamChatCountOutputType without action
   */
  export type StreamChatCountOutputTypeCountChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * StreamChatCountOutputType without action
   */
  export type StreamChatCountOutputTypeCountViewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewerWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Analytics: number
    Chat: number
    CustomCommand: number
    StreamChat: number
    Viewer: number
    Moderation: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Analytics?: boolean | UserCountOutputTypeCountAnalyticsArgs
    Chat?: boolean | UserCountOutputTypeCountChatArgs
    CustomCommand?: boolean | UserCountOutputTypeCountCustomCommandArgs
    StreamChat?: boolean | UserCountOutputTypeCountStreamChatArgs
    Viewer?: boolean | UserCountOutputTypeCountViewerArgs
    Moderation?: boolean | UserCountOutputTypeCountModerationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomCommandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomCommandWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStreamChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModerationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModerationWhereInput
  }


  /**
   * Count Type ViewerCountOutputType
   */

  export type ViewerCountOutputType = {
    Chat: number
  }

  export type ViewerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ViewerCountOutputTypeCountChatArgs
  }

  // Custom InputTypes
  /**
   * ViewerCountOutputType without action
   */
  export type ViewerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewerCountOutputType
     */
    select?: ViewerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViewerCountOutputType without action
   */
  export type ViewerCountOutputTypeCountChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Analytics
   */

  export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  export type AnalyticsAvgAggregateOutputType = {
    totalViews: number | null
    subscribers: number | null
    engagementRate: number | null
  }

  export type AnalyticsSumAggregateOutputType = {
    totalViews: number | null
    subscribers: number | null
    engagementRate: number | null
  }

  export type AnalyticsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalViews: number | null
    subscribers: number | null
    engagementRate: number | null
    timestamp: Date | null
  }

  export type AnalyticsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalViews: number | null
    subscribers: number | null
    engagementRate: number | null
    timestamp: Date | null
  }

  export type AnalyticsCountAggregateOutputType = {
    id: number
    userId: number
    totalViews: number
    subscribers: number
    engagementRate: number
    timestamp: number
    _all: number
  }


  export type AnalyticsAvgAggregateInputType = {
    totalViews?: true
    subscribers?: true
    engagementRate?: true
  }

  export type AnalyticsSumAggregateInputType = {
    totalViews?: true
    subscribers?: true
    engagementRate?: true
  }

  export type AnalyticsMinAggregateInputType = {
    id?: true
    userId?: true
    totalViews?: true
    subscribers?: true
    engagementRate?: true
    timestamp?: true
  }

  export type AnalyticsMaxAggregateInputType = {
    id?: true
    userId?: true
    totalViews?: true
    subscribers?: true
    engagementRate?: true
    timestamp?: true
  }

  export type AnalyticsCountAggregateInputType = {
    id?: true
    userId?: true
    totalViews?: true
    subscribers?: true
    engagementRate?: true
    timestamp?: true
    _all?: true
  }

  export type AnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analytics
    **/
    _count?: true | AnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMaxAggregateInputType
  }

  export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics[P]>
      : GetScalarType<T[P], AggregateAnalytics[P]>
  }




  export type AnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithAggregationInput | AnalyticsOrderByWithAggregationInput[]
    by: AnalyticsScalarFieldEnum[] | AnalyticsScalarFieldEnum
    having?: AnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsCountAggregateInputType | true
    _avg?: AnalyticsAvgAggregateInputType
    _sum?: AnalyticsSumAggregateInputType
    _min?: AnalyticsMinAggregateInputType
    _max?: AnalyticsMaxAggregateInputType
  }

  export type AnalyticsGroupByOutputType = {
    id: string
    userId: string
    totalViews: number
    subscribers: number
    engagementRate: number
    timestamp: Date
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalViews?: boolean
    subscribers?: boolean
    engagementRate?: boolean
    timestamp?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalViews?: boolean
    subscribers?: boolean
    engagementRate?: boolean
    timestamp?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalViews?: boolean
    subscribers?: boolean
    engagementRate?: boolean
    timestamp?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectScalar = {
    id?: boolean
    userId?: boolean
    totalViews?: boolean
    subscribers?: boolean
    engagementRate?: boolean
    timestamp?: boolean
  }

  export type AnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalViews" | "subscribers" | "engagementRate" | "timestamp", ExtArgs["result"]["analytics"]>
  export type AnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analytics"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      totalViews: number
      subscribers: number
      engagementRate: number
      timestamp: Date
    }, ExtArgs["result"]["analytics"]>
    composites: {}
  }

  type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsPayload, S>

  type AnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsCountAggregateInputType | true
    }

  export interface AnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analytics'], meta: { name: 'Analytics' } }
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsFindUniqueArgs>(args: SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsFindFirstArgs>(args?: SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     * 
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsWithIdOnly = await prisma.analytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsFindManyArgs>(args?: SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     * 
     */
    create<T extends AnalyticsCreateArgs>(args: SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analytics.
     * @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsCreateManyArgs>(args?: SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analytics and returns the data saved in the database.
     * @param {AnalyticsCreateManyAndReturnArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsDeleteArgs>(args: SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsUpdateArgs>(args: SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsUpdateManyArgs>(args: SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics and returns the data updated in the database.
     * @param {AnalyticsUpdateManyAndReturnArgs} args - Arguments to update many Analytics.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsUpsertArgs>(args: SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsCountArgs>(
      args?: Subset<T, AnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsAggregateArgs>(args: Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>

    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analytics model
   */
  readonly fields: AnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Analytics model
   */ 
  interface AnalyticsFieldRefs {
    readonly id: FieldRef<"Analytics", 'String'>
    readonly userId: FieldRef<"Analytics", 'String'>
    readonly totalViews: FieldRef<"Analytics", 'Int'>
    readonly subscribers: FieldRef<"Analytics", 'Int'>
    readonly engagementRate: FieldRef<"Analytics", 'Float'>
    readonly timestamp: FieldRef<"Analytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analytics findUnique
   */
  export type AnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findUniqueOrThrow
   */
  export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findFirst
   */
  export type AnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findFirstOrThrow
   */
  export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findMany
   */
  export type AnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics create
   */
  export type AnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a Analytics.
     */
    data: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
  }

  /**
   * Analytics createMany
   */
  export type AnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics createManyAndReturn
   */
  export type AnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analytics update
   */
  export type AnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a Analytics.
     */
    data: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
    /**
     * Choose, which Analytics to update.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics updateMany
   */
  export type AnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
  }

  /**
   * Analytics updateManyAndReturn
   */
  export type AnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analytics upsert
   */
  export type AnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: AnalyticsWhereUniqueInput
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
  }

  /**
   * Analytics delete
   */
  export type AnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter which Analytics to delete.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics deleteMany
   */
  export type AnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to delete
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to delete.
     */
    limit?: number
  }

  /**
   * Analytics without action
   */
  export type AnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    userId: string | null
    chatType: string | null
    message: string | null
    timestamp: Date | null
    liveChatId: string | null
    viewerId: string | null
    username: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    chatType: string | null
    message: string | null
    timestamp: Date | null
    liveChatId: string | null
    viewerId: string | null
    username: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    userId: number
    chatType: number
    message: number
    timestamp: number
    liveChatId: number
    viewerId: number
    username: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    userId?: true
    chatType?: true
    message?: true
    timestamp?: true
    liveChatId?: true
    viewerId?: true
    username?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    userId?: true
    chatType?: true
    message?: true
    timestamp?: true
    liveChatId?: true
    viewerId?: true
    username?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    userId?: true
    chatType?: true
    message?: true
    timestamp?: true
    liveChatId?: true
    viewerId?: true
    username?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    userId: string
    chatType: string
    message: string
    timestamp: Date
    liveChatId: string
    viewerId: string | null
    username: string
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatType?: boolean
    message?: boolean
    timestamp?: boolean
    liveChatId?: boolean
    viewerId?: boolean
    username?: boolean
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Viewer?: boolean | Chat$ViewerArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatType?: boolean
    message?: boolean
    timestamp?: boolean
    liveChatId?: boolean
    viewerId?: boolean
    username?: boolean
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Viewer?: boolean | Chat$ViewerArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatType?: boolean
    message?: boolean
    timestamp?: boolean
    liveChatId?: boolean
    viewerId?: boolean
    username?: boolean
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Viewer?: boolean | Chat$ViewerArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    userId?: boolean
    chatType?: boolean
    message?: boolean
    timestamp?: boolean
    liveChatId?: boolean
    viewerId?: boolean
    username?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatType" | "message" | "timestamp" | "liveChatId" | "viewerId" | "username", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Viewer?: boolean | Chat$ViewerArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Viewer?: boolean | Chat$ViewerArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Viewer?: boolean | Chat$ViewerArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      StreamChat: Prisma.$StreamChatPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      Viewer: Prisma.$ViewerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      chatType: string
      message: string
      timestamp: Date
      liveChatId: string
      viewerId: string | null
      username: string
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    StreamChat<T extends StreamChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamChatDefaultArgs<ExtArgs>>): Prisma__StreamChatClient<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Viewer<T extends Chat$ViewerArgs<ExtArgs> = {}>(args?: Subset<T, Chat$ViewerArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chat model
   */ 
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly userId: FieldRef<"Chat", 'String'>
    readonly chatType: FieldRef<"Chat", 'String'>
    readonly message: FieldRef<"Chat", 'String'>
    readonly timestamp: FieldRef<"Chat", 'DateTime'>
    readonly liveChatId: FieldRef<"Chat", 'String'>
    readonly viewerId: FieldRef<"Chat", 'String'>
    readonly username: FieldRef<"Chat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.Viewer
   */
  export type Chat$ViewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    where?: ViewerWhereInput
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model CustomCommand
   */

  export type AggregateCustomCommand = {
    _count: CustomCommandCountAggregateOutputType | null
    _avg: CustomCommandAvgAggregateOutputType | null
    _sum: CustomCommandSumAggregateOutputType | null
    _min: CustomCommandMinAggregateOutputType | null
    _max: CustomCommandMaxAggregateOutputType | null
  }

  export type CustomCommandAvgAggregateOutputType = {
    cooldown: number | null
  }

  export type CustomCommandSumAggregateOutputType = {
    cooldown: number | null
  }

  export type CustomCommandMinAggregateOutputType = {
    id: string | null
    userId: string | null
    trigger: string | null
    response: string | null
    description: string | null
    enabled: boolean | null
    createdAt: Date | null
    cooldown: number | null
    requiredUserLevel: $Enums.Role | null
  }

  export type CustomCommandMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    trigger: string | null
    response: string | null
    description: string | null
    enabled: boolean | null
    createdAt: Date | null
    cooldown: number | null
    requiredUserLevel: $Enums.Role | null
  }

  export type CustomCommandCountAggregateOutputType = {
    id: number
    userId: number
    trigger: number
    response: number
    description: number
    enabled: number
    createdAt: number
    cooldown: number
    requiredUserLevel: number
    _all: number
  }


  export type CustomCommandAvgAggregateInputType = {
    cooldown?: true
  }

  export type CustomCommandSumAggregateInputType = {
    cooldown?: true
  }

  export type CustomCommandMinAggregateInputType = {
    id?: true
    userId?: true
    trigger?: true
    response?: true
    description?: true
    enabled?: true
    createdAt?: true
    cooldown?: true
    requiredUserLevel?: true
  }

  export type CustomCommandMaxAggregateInputType = {
    id?: true
    userId?: true
    trigger?: true
    response?: true
    description?: true
    enabled?: true
    createdAt?: true
    cooldown?: true
    requiredUserLevel?: true
  }

  export type CustomCommandCountAggregateInputType = {
    id?: true
    userId?: true
    trigger?: true
    response?: true
    description?: true
    enabled?: true
    createdAt?: true
    cooldown?: true
    requiredUserLevel?: true
    _all?: true
  }

  export type CustomCommandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomCommand to aggregate.
     */
    where?: CustomCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCommands to fetch.
     */
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCommands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomCommands
    **/
    _count?: true | CustomCommandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomCommandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomCommandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomCommandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomCommandMaxAggregateInputType
  }

  export type GetCustomCommandAggregateType<T extends CustomCommandAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomCommand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomCommand[P]>
      : GetScalarType<T[P], AggregateCustomCommand[P]>
  }




  export type CustomCommandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomCommandWhereInput
    orderBy?: CustomCommandOrderByWithAggregationInput | CustomCommandOrderByWithAggregationInput[]
    by: CustomCommandScalarFieldEnum[] | CustomCommandScalarFieldEnum
    having?: CustomCommandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomCommandCountAggregateInputType | true
    _avg?: CustomCommandAvgAggregateInputType
    _sum?: CustomCommandSumAggregateInputType
    _min?: CustomCommandMinAggregateInputType
    _max?: CustomCommandMaxAggregateInputType
  }

  export type CustomCommandGroupByOutputType = {
    id: string
    userId: string
    trigger: string
    response: string
    description: string
    enabled: boolean
    createdAt: Date
    cooldown: number
    requiredUserLevel: $Enums.Role
    _count: CustomCommandCountAggregateOutputType | null
    _avg: CustomCommandAvgAggregateOutputType | null
    _sum: CustomCommandSumAggregateOutputType | null
    _min: CustomCommandMinAggregateOutputType | null
    _max: CustomCommandMaxAggregateOutputType | null
  }

  type GetCustomCommandGroupByPayload<T extends CustomCommandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomCommandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomCommandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomCommandGroupByOutputType[P]>
            : GetScalarType<T[P], CustomCommandGroupByOutputType[P]>
        }
      >
    >


  export type CustomCommandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trigger?: boolean
    response?: boolean
    description?: boolean
    enabled?: boolean
    createdAt?: boolean
    cooldown?: boolean
    requiredUserLevel?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customCommand"]>

  export type CustomCommandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trigger?: boolean
    response?: boolean
    description?: boolean
    enabled?: boolean
    createdAt?: boolean
    cooldown?: boolean
    requiredUserLevel?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customCommand"]>

  export type CustomCommandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trigger?: boolean
    response?: boolean
    description?: boolean
    enabled?: boolean
    createdAt?: boolean
    cooldown?: boolean
    requiredUserLevel?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customCommand"]>

  export type CustomCommandSelectScalar = {
    id?: boolean
    userId?: boolean
    trigger?: boolean
    response?: boolean
    description?: boolean
    enabled?: boolean
    createdAt?: boolean
    cooldown?: boolean
    requiredUserLevel?: boolean
  }

  export type CustomCommandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "trigger" | "response" | "description" | "enabled" | "createdAt" | "cooldown" | "requiredUserLevel", ExtArgs["result"]["customCommand"]>
  export type CustomCommandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomCommandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomCommandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomCommandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomCommand"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      trigger: string
      response: string
      description: string
      enabled: boolean
      createdAt: Date
      cooldown: number
      requiredUserLevel: $Enums.Role
    }, ExtArgs["result"]["customCommand"]>
    composites: {}
  }

  type CustomCommandGetPayload<S extends boolean | null | undefined | CustomCommandDefaultArgs> = $Result.GetResult<Prisma.$CustomCommandPayload, S>

  type CustomCommandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomCommandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomCommandCountAggregateInputType | true
    }

  export interface CustomCommandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomCommand'], meta: { name: 'CustomCommand' } }
    /**
     * Find zero or one CustomCommand that matches the filter.
     * @param {CustomCommandFindUniqueArgs} args - Arguments to find a CustomCommand
     * @example
     * // Get one CustomCommand
     * const customCommand = await prisma.customCommand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomCommandFindUniqueArgs>(args: SelectSubset<T, CustomCommandFindUniqueArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomCommand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomCommandFindUniqueOrThrowArgs} args - Arguments to find a CustomCommand
     * @example
     * // Get one CustomCommand
     * const customCommand = await prisma.customCommand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomCommandFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomCommandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomCommand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandFindFirstArgs} args - Arguments to find a CustomCommand
     * @example
     * // Get one CustomCommand
     * const customCommand = await prisma.customCommand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomCommandFindFirstArgs>(args?: SelectSubset<T, CustomCommandFindFirstArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomCommand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandFindFirstOrThrowArgs} args - Arguments to find a CustomCommand
     * @example
     * // Get one CustomCommand
     * const customCommand = await prisma.customCommand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomCommandFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomCommandFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomCommands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomCommands
     * const customCommands = await prisma.customCommand.findMany()
     * 
     * // Get first 10 CustomCommands
     * const customCommands = await prisma.customCommand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customCommandWithIdOnly = await prisma.customCommand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomCommandFindManyArgs>(args?: SelectSubset<T, CustomCommandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomCommand.
     * @param {CustomCommandCreateArgs} args - Arguments to create a CustomCommand.
     * @example
     * // Create one CustomCommand
     * const CustomCommand = await prisma.customCommand.create({
     *   data: {
     *     // ... data to create a CustomCommand
     *   }
     * })
     * 
     */
    create<T extends CustomCommandCreateArgs>(args: SelectSubset<T, CustomCommandCreateArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomCommands.
     * @param {CustomCommandCreateManyArgs} args - Arguments to create many CustomCommands.
     * @example
     * // Create many CustomCommands
     * const customCommand = await prisma.customCommand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomCommandCreateManyArgs>(args?: SelectSubset<T, CustomCommandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomCommands and returns the data saved in the database.
     * @param {CustomCommandCreateManyAndReturnArgs} args - Arguments to create many CustomCommands.
     * @example
     * // Create many CustomCommands
     * const customCommand = await prisma.customCommand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomCommands and only return the `id`
     * const customCommandWithIdOnly = await prisma.customCommand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomCommandCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomCommandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomCommand.
     * @param {CustomCommandDeleteArgs} args - Arguments to delete one CustomCommand.
     * @example
     * // Delete one CustomCommand
     * const CustomCommand = await prisma.customCommand.delete({
     *   where: {
     *     // ... filter to delete one CustomCommand
     *   }
     * })
     * 
     */
    delete<T extends CustomCommandDeleteArgs>(args: SelectSubset<T, CustomCommandDeleteArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomCommand.
     * @param {CustomCommandUpdateArgs} args - Arguments to update one CustomCommand.
     * @example
     * // Update one CustomCommand
     * const customCommand = await prisma.customCommand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomCommandUpdateArgs>(args: SelectSubset<T, CustomCommandUpdateArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomCommands.
     * @param {CustomCommandDeleteManyArgs} args - Arguments to filter CustomCommands to delete.
     * @example
     * // Delete a few CustomCommands
     * const { count } = await prisma.customCommand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomCommandDeleteManyArgs>(args?: SelectSubset<T, CustomCommandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomCommands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomCommands
     * const customCommand = await prisma.customCommand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomCommandUpdateManyArgs>(args: SelectSubset<T, CustomCommandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomCommands and returns the data updated in the database.
     * @param {CustomCommandUpdateManyAndReturnArgs} args - Arguments to update many CustomCommands.
     * @example
     * // Update many CustomCommands
     * const customCommand = await prisma.customCommand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomCommands and only return the `id`
     * const customCommandWithIdOnly = await prisma.customCommand.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomCommandUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomCommandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomCommand.
     * @param {CustomCommandUpsertArgs} args - Arguments to update or create a CustomCommand.
     * @example
     * // Update or create a CustomCommand
     * const customCommand = await prisma.customCommand.upsert({
     *   create: {
     *     // ... data to create a CustomCommand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomCommand we want to update
     *   }
     * })
     */
    upsert<T extends CustomCommandUpsertArgs>(args: SelectSubset<T, CustomCommandUpsertArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomCommands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandCountArgs} args - Arguments to filter CustomCommands to count.
     * @example
     * // Count the number of CustomCommands
     * const count = await prisma.customCommand.count({
     *   where: {
     *     // ... the filter for the CustomCommands we want to count
     *   }
     * })
    **/
    count<T extends CustomCommandCountArgs>(
      args?: Subset<T, CustomCommandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomCommandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomCommand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomCommandAggregateArgs>(args: Subset<T, CustomCommandAggregateArgs>): Prisma.PrismaPromise<GetCustomCommandAggregateType<T>>

    /**
     * Group by CustomCommand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandGroupByArgs} args - Group by arguments.
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
      T extends CustomCommandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomCommandGroupByArgs['orderBy'] }
        : { orderBy?: CustomCommandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomCommandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomCommandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomCommand model
   */
  readonly fields: CustomCommandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomCommand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomCommandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomCommand model
   */ 
  interface CustomCommandFieldRefs {
    readonly id: FieldRef<"CustomCommand", 'String'>
    readonly userId: FieldRef<"CustomCommand", 'String'>
    readonly trigger: FieldRef<"CustomCommand", 'String'>
    readonly response: FieldRef<"CustomCommand", 'String'>
    readonly description: FieldRef<"CustomCommand", 'String'>
    readonly enabled: FieldRef<"CustomCommand", 'Boolean'>
    readonly createdAt: FieldRef<"CustomCommand", 'DateTime'>
    readonly cooldown: FieldRef<"CustomCommand", 'Int'>
    readonly requiredUserLevel: FieldRef<"CustomCommand", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * CustomCommand findUnique
   */
  export type CustomCommandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter, which CustomCommand to fetch.
     */
    where: CustomCommandWhereUniqueInput
  }

  /**
   * CustomCommand findUniqueOrThrow
   */
  export type CustomCommandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter, which CustomCommand to fetch.
     */
    where: CustomCommandWhereUniqueInput
  }

  /**
   * CustomCommand findFirst
   */
  export type CustomCommandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter, which CustomCommand to fetch.
     */
    where?: CustomCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCommands to fetch.
     */
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomCommands.
     */
    cursor?: CustomCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCommands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomCommands.
     */
    distinct?: CustomCommandScalarFieldEnum | CustomCommandScalarFieldEnum[]
  }

  /**
   * CustomCommand findFirstOrThrow
   */
  export type CustomCommandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter, which CustomCommand to fetch.
     */
    where?: CustomCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCommands to fetch.
     */
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomCommands.
     */
    cursor?: CustomCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCommands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomCommands.
     */
    distinct?: CustomCommandScalarFieldEnum | CustomCommandScalarFieldEnum[]
  }

  /**
   * CustomCommand findMany
   */
  export type CustomCommandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter, which CustomCommands to fetch.
     */
    where?: CustomCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCommands to fetch.
     */
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomCommands.
     */
    cursor?: CustomCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCommands.
     */
    skip?: number
    distinct?: CustomCommandScalarFieldEnum | CustomCommandScalarFieldEnum[]
  }

  /**
   * CustomCommand create
   */
  export type CustomCommandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomCommand.
     */
    data: XOR<CustomCommandCreateInput, CustomCommandUncheckedCreateInput>
  }

  /**
   * CustomCommand createMany
   */
  export type CustomCommandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomCommands.
     */
    data: CustomCommandCreateManyInput | CustomCommandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomCommand createManyAndReturn
   */
  export type CustomCommandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * The data used to create many CustomCommands.
     */
    data: CustomCommandCreateManyInput | CustomCommandCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomCommand update
   */
  export type CustomCommandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomCommand.
     */
    data: XOR<CustomCommandUpdateInput, CustomCommandUncheckedUpdateInput>
    /**
     * Choose, which CustomCommand to update.
     */
    where: CustomCommandWhereUniqueInput
  }

  /**
   * CustomCommand updateMany
   */
  export type CustomCommandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomCommands.
     */
    data: XOR<CustomCommandUpdateManyMutationInput, CustomCommandUncheckedUpdateManyInput>
    /**
     * Filter which CustomCommands to update
     */
    where?: CustomCommandWhereInput
    /**
     * Limit how many CustomCommands to update.
     */
    limit?: number
  }

  /**
   * CustomCommand updateManyAndReturn
   */
  export type CustomCommandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * The data used to update CustomCommands.
     */
    data: XOR<CustomCommandUpdateManyMutationInput, CustomCommandUncheckedUpdateManyInput>
    /**
     * Filter which CustomCommands to update
     */
    where?: CustomCommandWhereInput
    /**
     * Limit how many CustomCommands to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomCommand upsert
   */
  export type CustomCommandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomCommand to update in case it exists.
     */
    where: CustomCommandWhereUniqueInput
    /**
     * In case the CustomCommand found by the `where` argument doesn't exist, create a new CustomCommand with this data.
     */
    create: XOR<CustomCommandCreateInput, CustomCommandUncheckedCreateInput>
    /**
     * In case the CustomCommand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomCommandUpdateInput, CustomCommandUncheckedUpdateInput>
  }

  /**
   * CustomCommand delete
   */
  export type CustomCommandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter which CustomCommand to delete.
     */
    where: CustomCommandWhereUniqueInput
  }

  /**
   * CustomCommand deleteMany
   */
  export type CustomCommandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomCommands to delete
     */
    where?: CustomCommandWhereInput
    /**
     * Limit how many CustomCommands to delete.
     */
    limit?: number
  }

  /**
   * CustomCommand without action
   */
  export type CustomCommandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
  }


  /**
   * Model StreamChat
   */

  export type AggregateStreamChat = {
    _count: StreamChatCountAggregateOutputType | null
    _avg: StreamChatAvgAggregateOutputType | null
    _sum: StreamChatSumAggregateOutputType | null
    _min: StreamChatMinAggregateOutputType | null
    _max: StreamChatMaxAggregateOutputType | null
  }

  export type StreamChatAvgAggregateOutputType = {
    duration: number | null
    totalDonations: number | null
    totalViews: number | null
  }

  export type StreamChatSumAggregateOutputType = {
    duration: number | null
    totalDonations: number | null
    totalViews: number | null
  }

  export type StreamChatMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    streamUrl: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    totalDonations: number | null
    totalViews: number | null
  }

  export type StreamChatMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    streamUrl: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    totalDonations: number | null
    totalViews: number | null
  }

  export type StreamChatCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    streamUrl: number
    startTime: number
    endTime: number
    duration: number
    totalDonations: number
    totalViews: number
    _all: number
  }


  export type StreamChatAvgAggregateInputType = {
    duration?: true
    totalDonations?: true
    totalViews?: true
  }

  export type StreamChatSumAggregateInputType = {
    duration?: true
    totalDonations?: true
    totalViews?: true
  }

  export type StreamChatMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    streamUrl?: true
    startTime?: true
    endTime?: true
    duration?: true
    totalDonations?: true
    totalViews?: true
  }

  export type StreamChatMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    streamUrl?: true
    startTime?: true
    endTime?: true
    duration?: true
    totalDonations?: true
    totalViews?: true
  }

  export type StreamChatCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    streamUrl?: true
    startTime?: true
    endTime?: true
    duration?: true
    totalDonations?: true
    totalViews?: true
    _all?: true
  }

  export type StreamChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamChat to aggregate.
     */
    where?: StreamChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamChats to fetch.
     */
    orderBy?: StreamChatOrderByWithRelationInput | StreamChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamChats
    **/
    _count?: true | StreamChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamChatMaxAggregateInputType
  }

  export type GetStreamChatAggregateType<T extends StreamChatAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamChat[P]>
      : GetScalarType<T[P], AggregateStreamChat[P]>
  }




  export type StreamChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamChatWhereInput
    orderBy?: StreamChatOrderByWithAggregationInput | StreamChatOrderByWithAggregationInput[]
    by: StreamChatScalarFieldEnum[] | StreamChatScalarFieldEnum
    having?: StreamChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamChatCountAggregateInputType | true
    _avg?: StreamChatAvgAggregateInputType
    _sum?: StreamChatSumAggregateInputType
    _min?: StreamChatMinAggregateInputType
    _max?: StreamChatMaxAggregateInputType
  }

  export type StreamChatGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    streamUrl: string | null
    startTime: Date
    endTime: Date | null
    duration: number | null
    totalDonations: number | null
    totalViews: number | null
    _count: StreamChatCountAggregateOutputType | null
    _avg: StreamChatAvgAggregateOutputType | null
    _sum: StreamChatSumAggregateOutputType | null
    _min: StreamChatMinAggregateOutputType | null
    _max: StreamChatMaxAggregateOutputType | null
  }

  type GetStreamChatGroupByPayload<T extends StreamChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamChatGroupByOutputType[P]>
            : GetScalarType<T[P], StreamChatGroupByOutputType[P]>
        }
      >
    >


  export type StreamChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    streamUrl?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    totalDonations?: boolean
    totalViews?: boolean
    Chat?: boolean | StreamChat$ChatArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Viewer?: boolean | StreamChat$ViewerArgs<ExtArgs>
    _count?: boolean | StreamChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamChat"]>

  export type StreamChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    streamUrl?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    totalDonations?: boolean
    totalViews?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamChat"]>

  export type StreamChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    streamUrl?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    totalDonations?: boolean
    totalViews?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamChat"]>

  export type StreamChatSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    streamUrl?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    totalDonations?: boolean
    totalViews?: boolean
  }

  export type StreamChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "streamUrl" | "startTime" | "endTime" | "duration" | "totalDonations" | "totalViews", ExtArgs["result"]["streamChat"]>
  export type StreamChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | StreamChat$ChatArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Viewer?: boolean | StreamChat$ViewerArgs<ExtArgs>
    _count?: boolean | StreamChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreamChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreamChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamChat"
    objects: {
      Chat: Prisma.$ChatPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
      Viewer: Prisma.$ViewerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      streamUrl: string | null
      startTime: Date
      endTime: Date | null
      duration: number | null
      totalDonations: number | null
      totalViews: number | null
    }, ExtArgs["result"]["streamChat"]>
    composites: {}
  }

  type StreamChatGetPayload<S extends boolean | null | undefined | StreamChatDefaultArgs> = $Result.GetResult<Prisma.$StreamChatPayload, S>

  type StreamChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamChatCountAggregateInputType | true
    }

  export interface StreamChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamChat'], meta: { name: 'StreamChat' } }
    /**
     * Find zero or one StreamChat that matches the filter.
     * @param {StreamChatFindUniqueArgs} args - Arguments to find a StreamChat
     * @example
     * // Get one StreamChat
     * const streamChat = await prisma.streamChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamChatFindUniqueArgs>(args: SelectSubset<T, StreamChatFindUniqueArgs<ExtArgs>>): Prisma__StreamChatClient<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreamChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamChatFindUniqueOrThrowArgs} args - Arguments to find a StreamChat
     * @example
     * // Get one StreamChat
     * const streamChat = await prisma.streamChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamChatFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamChatClient<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamChatFindFirstArgs} args - Arguments to find a StreamChat
     * @example
     * // Get one StreamChat
     * const streamChat = await prisma.streamChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamChatFindFirstArgs>(args?: SelectSubset<T, StreamChatFindFirstArgs<ExtArgs>>): Prisma__StreamChatClient<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamChatFindFirstOrThrowArgs} args - Arguments to find a StreamChat
     * @example
     * // Get one StreamChat
     * const streamChat = await prisma.streamChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamChatFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamChatClient<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreamChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamChats
     * const streamChats = await prisma.streamChat.findMany()
     * 
     * // Get first 10 StreamChats
     * const streamChats = await prisma.streamChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamChatWithIdOnly = await prisma.streamChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamChatFindManyArgs>(args?: SelectSubset<T, StreamChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreamChat.
     * @param {StreamChatCreateArgs} args - Arguments to create a StreamChat.
     * @example
     * // Create one StreamChat
     * const StreamChat = await prisma.streamChat.create({
     *   data: {
     *     // ... data to create a StreamChat
     *   }
     * })
     * 
     */
    create<T extends StreamChatCreateArgs>(args: SelectSubset<T, StreamChatCreateArgs<ExtArgs>>): Prisma__StreamChatClient<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreamChats.
     * @param {StreamChatCreateManyArgs} args - Arguments to create many StreamChats.
     * @example
     * // Create many StreamChats
     * const streamChat = await prisma.streamChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamChatCreateManyArgs>(args?: SelectSubset<T, StreamChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamChats and returns the data saved in the database.
     * @param {StreamChatCreateManyAndReturnArgs} args - Arguments to create many StreamChats.
     * @example
     * // Create many StreamChats
     * const streamChat = await prisma.streamChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamChats and only return the `id`
     * const streamChatWithIdOnly = await prisma.streamChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamChatCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreamChat.
     * @param {StreamChatDeleteArgs} args - Arguments to delete one StreamChat.
     * @example
     * // Delete one StreamChat
     * const StreamChat = await prisma.streamChat.delete({
     *   where: {
     *     // ... filter to delete one StreamChat
     *   }
     * })
     * 
     */
    delete<T extends StreamChatDeleteArgs>(args: SelectSubset<T, StreamChatDeleteArgs<ExtArgs>>): Prisma__StreamChatClient<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreamChat.
     * @param {StreamChatUpdateArgs} args - Arguments to update one StreamChat.
     * @example
     * // Update one StreamChat
     * const streamChat = await prisma.streamChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamChatUpdateArgs>(args: SelectSubset<T, StreamChatUpdateArgs<ExtArgs>>): Prisma__StreamChatClient<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreamChats.
     * @param {StreamChatDeleteManyArgs} args - Arguments to filter StreamChats to delete.
     * @example
     * // Delete a few StreamChats
     * const { count } = await prisma.streamChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamChatDeleteManyArgs>(args?: SelectSubset<T, StreamChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamChats
     * const streamChat = await prisma.streamChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamChatUpdateManyArgs>(args: SelectSubset<T, StreamChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamChats and returns the data updated in the database.
     * @param {StreamChatUpdateManyAndReturnArgs} args - Arguments to update many StreamChats.
     * @example
     * // Update many StreamChats
     * const streamChat = await prisma.streamChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreamChats and only return the `id`
     * const streamChatWithIdOnly = await prisma.streamChat.updateManyAndReturn({
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
    updateManyAndReturn<T extends StreamChatUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreamChat.
     * @param {StreamChatUpsertArgs} args - Arguments to update or create a StreamChat.
     * @example
     * // Update or create a StreamChat
     * const streamChat = await prisma.streamChat.upsert({
     *   create: {
     *     // ... data to create a StreamChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamChat we want to update
     *   }
     * })
     */
    upsert<T extends StreamChatUpsertArgs>(args: SelectSubset<T, StreamChatUpsertArgs<ExtArgs>>): Prisma__StreamChatClient<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreamChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamChatCountArgs} args - Arguments to filter StreamChats to count.
     * @example
     * // Count the number of StreamChats
     * const count = await prisma.streamChat.count({
     *   where: {
     *     // ... the filter for the StreamChats we want to count
     *   }
     * })
    **/
    count<T extends StreamChatCountArgs>(
      args?: Subset<T, StreamChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreamChatAggregateArgs>(args: Subset<T, StreamChatAggregateArgs>): Prisma.PrismaPromise<GetStreamChatAggregateType<T>>

    /**
     * Group by StreamChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamChatGroupByArgs} args - Group by arguments.
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
      T extends StreamChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamChatGroupByArgs['orderBy'] }
        : { orderBy?: StreamChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreamChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamChat model
   */
  readonly fields: StreamChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chat<T extends StreamChat$ChatArgs<ExtArgs> = {}>(args?: Subset<T, StreamChat$ChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Viewer<T extends StreamChat$ViewerArgs<ExtArgs> = {}>(args?: Subset<T, StreamChat$ViewerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StreamChat model
   */ 
  interface StreamChatFieldRefs {
    readonly id: FieldRef<"StreamChat", 'String'>
    readonly userId: FieldRef<"StreamChat", 'String'>
    readonly title: FieldRef<"StreamChat", 'String'>
    readonly streamUrl: FieldRef<"StreamChat", 'String'>
    readonly startTime: FieldRef<"StreamChat", 'DateTime'>
    readonly endTime: FieldRef<"StreamChat", 'DateTime'>
    readonly duration: FieldRef<"StreamChat", 'Int'>
    readonly totalDonations: FieldRef<"StreamChat", 'Float'>
    readonly totalViews: FieldRef<"StreamChat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StreamChat findUnique
   */
  export type StreamChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
    /**
     * Filter, which StreamChat to fetch.
     */
    where: StreamChatWhereUniqueInput
  }

  /**
   * StreamChat findUniqueOrThrow
   */
  export type StreamChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
    /**
     * Filter, which StreamChat to fetch.
     */
    where: StreamChatWhereUniqueInput
  }

  /**
   * StreamChat findFirst
   */
  export type StreamChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
    /**
     * Filter, which StreamChat to fetch.
     */
    where?: StreamChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamChats to fetch.
     */
    orderBy?: StreamChatOrderByWithRelationInput | StreamChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamChats.
     */
    cursor?: StreamChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamChats.
     */
    distinct?: StreamChatScalarFieldEnum | StreamChatScalarFieldEnum[]
  }

  /**
   * StreamChat findFirstOrThrow
   */
  export type StreamChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
    /**
     * Filter, which StreamChat to fetch.
     */
    where?: StreamChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamChats to fetch.
     */
    orderBy?: StreamChatOrderByWithRelationInput | StreamChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamChats.
     */
    cursor?: StreamChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamChats.
     */
    distinct?: StreamChatScalarFieldEnum | StreamChatScalarFieldEnum[]
  }

  /**
   * StreamChat findMany
   */
  export type StreamChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
    /**
     * Filter, which StreamChats to fetch.
     */
    where?: StreamChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamChats to fetch.
     */
    orderBy?: StreamChatOrderByWithRelationInput | StreamChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamChats.
     */
    cursor?: StreamChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamChats.
     */
    skip?: number
    distinct?: StreamChatScalarFieldEnum | StreamChatScalarFieldEnum[]
  }

  /**
   * StreamChat create
   */
  export type StreamChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
    /**
     * The data needed to create a StreamChat.
     */
    data: XOR<StreamChatCreateInput, StreamChatUncheckedCreateInput>
  }

  /**
   * StreamChat createMany
   */
  export type StreamChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamChats.
     */
    data: StreamChatCreateManyInput | StreamChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamChat createManyAndReturn
   */
  export type StreamChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * The data used to create many StreamChats.
     */
    data: StreamChatCreateManyInput | StreamChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamChat update
   */
  export type StreamChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
    /**
     * The data needed to update a StreamChat.
     */
    data: XOR<StreamChatUpdateInput, StreamChatUncheckedUpdateInput>
    /**
     * Choose, which StreamChat to update.
     */
    where: StreamChatWhereUniqueInput
  }

  /**
   * StreamChat updateMany
   */
  export type StreamChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamChats.
     */
    data: XOR<StreamChatUpdateManyMutationInput, StreamChatUncheckedUpdateManyInput>
    /**
     * Filter which StreamChats to update
     */
    where?: StreamChatWhereInput
    /**
     * Limit how many StreamChats to update.
     */
    limit?: number
  }

  /**
   * StreamChat updateManyAndReturn
   */
  export type StreamChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * The data used to update StreamChats.
     */
    data: XOR<StreamChatUpdateManyMutationInput, StreamChatUncheckedUpdateManyInput>
    /**
     * Filter which StreamChats to update
     */
    where?: StreamChatWhereInput
    /**
     * Limit how many StreamChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamChat upsert
   */
  export type StreamChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
    /**
     * The filter to search for the StreamChat to update in case it exists.
     */
    where: StreamChatWhereUniqueInput
    /**
     * In case the StreamChat found by the `where` argument doesn't exist, create a new StreamChat with this data.
     */
    create: XOR<StreamChatCreateInput, StreamChatUncheckedCreateInput>
    /**
     * In case the StreamChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamChatUpdateInput, StreamChatUncheckedUpdateInput>
  }

  /**
   * StreamChat delete
   */
  export type StreamChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
    /**
     * Filter which StreamChat to delete.
     */
    where: StreamChatWhereUniqueInput
  }

  /**
   * StreamChat deleteMany
   */
  export type StreamChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamChats to delete
     */
    where?: StreamChatWhereInput
    /**
     * Limit how many StreamChats to delete.
     */
    limit?: number
  }

  /**
   * StreamChat.Chat
   */
  export type StreamChat$ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * StreamChat.Viewer
   */
  export type StreamChat$ViewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    where?: ViewerWhereInput
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    cursor?: ViewerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewerScalarFieldEnum | ViewerScalarFieldEnum[]
  }

  /**
   * StreamChat without action
   */
  export type StreamChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
  }


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
    email: string | null
    createdAt: Date | null
    username: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    username: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    settings: number
    username: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    username?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    username?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    settings?: true
    username?: true
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
    email: string | null
    createdAt: Date
    settings: JsonValue | null
    username: string | null
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
    email?: boolean
    createdAt?: boolean
    settings?: boolean
    username?: boolean
    Analytics?: boolean | User$AnalyticsArgs<ExtArgs>
    Chat?: boolean | User$ChatArgs<ExtArgs>
    CustomCommand?: boolean | User$CustomCommandArgs<ExtArgs>
    StreamChat?: boolean | User$StreamChatArgs<ExtArgs>
    UserSecurity?: boolean | User$UserSecurityArgs<ExtArgs>
    Viewer?: boolean | User$ViewerArgs<ExtArgs>
    Moderation?: boolean | User$ModerationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    settings?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    settings?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    settings?: boolean
    username?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "settings" | "username", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Analytics?: boolean | User$AnalyticsArgs<ExtArgs>
    Chat?: boolean | User$ChatArgs<ExtArgs>
    CustomCommand?: boolean | User$CustomCommandArgs<ExtArgs>
    StreamChat?: boolean | User$StreamChatArgs<ExtArgs>
    UserSecurity?: boolean | User$UserSecurityArgs<ExtArgs>
    Viewer?: boolean | User$ViewerArgs<ExtArgs>
    Moderation?: boolean | User$ModerationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Analytics: Prisma.$AnalyticsPayload<ExtArgs>[]
      Chat: Prisma.$ChatPayload<ExtArgs>[]
      CustomCommand: Prisma.$CustomCommandPayload<ExtArgs>[]
      StreamChat: Prisma.$StreamChatPayload<ExtArgs>[]
      UserSecurity: Prisma.$UserSecurityPayload<ExtArgs> | null
      Viewer: Prisma.$ViewerPayload<ExtArgs>[]
      Moderation: Prisma.$ModerationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      createdAt: Date
      settings: Prisma.JsonValue | null
      username: string | null
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
    Analytics<T extends User$AnalyticsArgs<ExtArgs> = {}>(args?: Subset<T, User$AnalyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Chat<T extends User$ChatArgs<ExtArgs> = {}>(args?: Subset<T, User$ChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CustomCommand<T extends User$CustomCommandArgs<ExtArgs> = {}>(args?: Subset<T, User$CustomCommandArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StreamChat<T extends User$StreamChatArgs<ExtArgs> = {}>(args?: Subset<T, User$StreamChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserSecurity<T extends User$UserSecurityArgs<ExtArgs> = {}>(args?: Subset<T, User$UserSecurityArgs<ExtArgs>>): Prisma__UserSecurityClient<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Viewer<T extends User$ViewerArgs<ExtArgs> = {}>(args?: Subset<T, User$ViewerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Moderation<T extends User$ModerationArgs<ExtArgs> = {}>(args?: Subset<T, User$ModerationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly settings: FieldRef<"User", 'Json'>
    readonly username: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.Analytics
   */
  export type User$AnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    cursor?: AnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * User.Chat
   */
  export type User$ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.CustomCommand
   */
  export type User$CustomCommandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    where?: CustomCommandWhereInput
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    cursor?: CustomCommandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomCommandScalarFieldEnum | CustomCommandScalarFieldEnum[]
  }

  /**
   * User.StreamChat
   */
  export type User$StreamChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamChat
     */
    select?: StreamChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamChat
     */
    omit?: StreamChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamChatInclude<ExtArgs> | null
    where?: StreamChatWhereInput
    orderBy?: StreamChatOrderByWithRelationInput | StreamChatOrderByWithRelationInput[]
    cursor?: StreamChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamChatScalarFieldEnum | StreamChatScalarFieldEnum[]
  }

  /**
   * User.UserSecurity
   */
  export type User$UserSecurityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
    where?: UserSecurityWhereInput
  }

  /**
   * User.Viewer
   */
  export type User$ViewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    where?: ViewerWhereInput
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    cursor?: ViewerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewerScalarFieldEnum | ViewerScalarFieldEnum[]
  }

  /**
   * User.Moderation
   */
  export type User$ModerationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
    where?: ModerationWhereInput
    orderBy?: ModerationOrderByWithRelationInput | ModerationOrderByWithRelationInput[]
    cursor?: ModerationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModerationScalarFieldEnum | ModerationScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Moderation
   */

  export type AggregateModeration = {
    _count: ModerationCountAggregateOutputType | null
    _min: ModerationMinAggregateOutputType | null
    _max: ModerationMaxAggregateOutputType | null
  }

  export type ModerationMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type ModerationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type ModerationCountAggregateOutputType = {
    id: number
    userId: number
    general: number
    spamConfig: number
    links: number
    blacklist: number
    _all: number
  }


  export type ModerationMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ModerationMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ModerationCountAggregateInputType = {
    id?: true
    userId?: true
    general?: true
    spamConfig?: true
    links?: true
    blacklist?: true
    _all?: true
  }

  export type ModerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moderation to aggregate.
     */
    where?: ModerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moderations to fetch.
     */
    orderBy?: ModerationOrderByWithRelationInput | ModerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moderations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moderations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moderations
    **/
    _count?: true | ModerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModerationMaxAggregateInputType
  }

  export type GetModerationAggregateType<T extends ModerationAggregateArgs> = {
        [P in keyof T & keyof AggregateModeration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModeration[P]>
      : GetScalarType<T[P], AggregateModeration[P]>
  }




  export type ModerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModerationWhereInput
    orderBy?: ModerationOrderByWithAggregationInput | ModerationOrderByWithAggregationInput[]
    by: ModerationScalarFieldEnum[] | ModerationScalarFieldEnum
    having?: ModerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModerationCountAggregateInputType | true
    _min?: ModerationMinAggregateInputType
    _max?: ModerationMaxAggregateInputType
  }

  export type ModerationGroupByOutputType = {
    id: string
    userId: string
    general: JsonValue | null
    spamConfig: JsonValue | null
    links: JsonValue | null
    blacklist: JsonValue | null
    _count: ModerationCountAggregateOutputType | null
    _min: ModerationMinAggregateOutputType | null
    _max: ModerationMaxAggregateOutputType | null
  }

  type GetModerationGroupByPayload<T extends ModerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModerationGroupByOutputType[P]>
            : GetScalarType<T[P], ModerationGroupByOutputType[P]>
        }
      >
    >


  export type ModerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    general?: boolean
    spamConfig?: boolean
    links?: boolean
    blacklist?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderation"]>

  export type ModerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    general?: boolean
    spamConfig?: boolean
    links?: boolean
    blacklist?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderation"]>

  export type ModerationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    general?: boolean
    spamConfig?: boolean
    links?: boolean
    blacklist?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderation"]>

  export type ModerationSelectScalar = {
    id?: boolean
    userId?: boolean
    general?: boolean
    spamConfig?: boolean
    links?: boolean
    blacklist?: boolean
  }

  export type ModerationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "general" | "spamConfig" | "links" | "blacklist", ExtArgs["result"]["moderation"]>
  export type ModerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ModerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ModerationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ModerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Moderation"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      general: Prisma.JsonValue | null
      spamConfig: Prisma.JsonValue | null
      links: Prisma.JsonValue | null
      blacklist: Prisma.JsonValue | null
    }, ExtArgs["result"]["moderation"]>
    composites: {}
  }

  type ModerationGetPayload<S extends boolean | null | undefined | ModerationDefaultArgs> = $Result.GetResult<Prisma.$ModerationPayload, S>

  type ModerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModerationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModerationCountAggregateInputType | true
    }

  export interface ModerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Moderation'], meta: { name: 'Moderation' } }
    /**
     * Find zero or one Moderation that matches the filter.
     * @param {ModerationFindUniqueArgs} args - Arguments to find a Moderation
     * @example
     * // Get one Moderation
     * const moderation = await prisma.moderation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModerationFindUniqueArgs>(args: SelectSubset<T, ModerationFindUniqueArgs<ExtArgs>>): Prisma__ModerationClient<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Moderation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModerationFindUniqueOrThrowArgs} args - Arguments to find a Moderation
     * @example
     * // Get one Moderation
     * const moderation = await prisma.moderation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModerationFindUniqueOrThrowArgs>(args: SelectSubset<T, ModerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModerationClient<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moderation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationFindFirstArgs} args - Arguments to find a Moderation
     * @example
     * // Get one Moderation
     * const moderation = await prisma.moderation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModerationFindFirstArgs>(args?: SelectSubset<T, ModerationFindFirstArgs<ExtArgs>>): Prisma__ModerationClient<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moderation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationFindFirstOrThrowArgs} args - Arguments to find a Moderation
     * @example
     * // Get one Moderation
     * const moderation = await prisma.moderation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModerationFindFirstOrThrowArgs>(args?: SelectSubset<T, ModerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModerationClient<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moderations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moderations
     * const moderations = await prisma.moderation.findMany()
     * 
     * // Get first 10 Moderations
     * const moderations = await prisma.moderation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moderationWithIdOnly = await prisma.moderation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModerationFindManyArgs>(args?: SelectSubset<T, ModerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Moderation.
     * @param {ModerationCreateArgs} args - Arguments to create a Moderation.
     * @example
     * // Create one Moderation
     * const Moderation = await prisma.moderation.create({
     *   data: {
     *     // ... data to create a Moderation
     *   }
     * })
     * 
     */
    create<T extends ModerationCreateArgs>(args: SelectSubset<T, ModerationCreateArgs<ExtArgs>>): Prisma__ModerationClient<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moderations.
     * @param {ModerationCreateManyArgs} args - Arguments to create many Moderations.
     * @example
     * // Create many Moderations
     * const moderation = await prisma.moderation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModerationCreateManyArgs>(args?: SelectSubset<T, ModerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moderations and returns the data saved in the database.
     * @param {ModerationCreateManyAndReturnArgs} args - Arguments to create many Moderations.
     * @example
     * // Create many Moderations
     * const moderation = await prisma.moderation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moderations and only return the `id`
     * const moderationWithIdOnly = await prisma.moderation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModerationCreateManyAndReturnArgs>(args?: SelectSubset<T, ModerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Moderation.
     * @param {ModerationDeleteArgs} args - Arguments to delete one Moderation.
     * @example
     * // Delete one Moderation
     * const Moderation = await prisma.moderation.delete({
     *   where: {
     *     // ... filter to delete one Moderation
     *   }
     * })
     * 
     */
    delete<T extends ModerationDeleteArgs>(args: SelectSubset<T, ModerationDeleteArgs<ExtArgs>>): Prisma__ModerationClient<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Moderation.
     * @param {ModerationUpdateArgs} args - Arguments to update one Moderation.
     * @example
     * // Update one Moderation
     * const moderation = await prisma.moderation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModerationUpdateArgs>(args: SelectSubset<T, ModerationUpdateArgs<ExtArgs>>): Prisma__ModerationClient<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moderations.
     * @param {ModerationDeleteManyArgs} args - Arguments to filter Moderations to delete.
     * @example
     * // Delete a few Moderations
     * const { count } = await prisma.moderation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModerationDeleteManyArgs>(args?: SelectSubset<T, ModerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moderations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moderations
     * const moderation = await prisma.moderation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModerationUpdateManyArgs>(args: SelectSubset<T, ModerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moderations and returns the data updated in the database.
     * @param {ModerationUpdateManyAndReturnArgs} args - Arguments to update many Moderations.
     * @example
     * // Update many Moderations
     * const moderation = await prisma.moderation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moderations and only return the `id`
     * const moderationWithIdOnly = await prisma.moderation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModerationUpdateManyAndReturnArgs>(args: SelectSubset<T, ModerationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Moderation.
     * @param {ModerationUpsertArgs} args - Arguments to update or create a Moderation.
     * @example
     * // Update or create a Moderation
     * const moderation = await prisma.moderation.upsert({
     *   create: {
     *     // ... data to create a Moderation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Moderation we want to update
     *   }
     * })
     */
    upsert<T extends ModerationUpsertArgs>(args: SelectSubset<T, ModerationUpsertArgs<ExtArgs>>): Prisma__ModerationClient<$Result.GetResult<Prisma.$ModerationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moderations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationCountArgs} args - Arguments to filter Moderations to count.
     * @example
     * // Count the number of Moderations
     * const count = await prisma.moderation.count({
     *   where: {
     *     // ... the filter for the Moderations we want to count
     *   }
     * })
    **/
    count<T extends ModerationCountArgs>(
      args?: Subset<T, ModerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Moderation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModerationAggregateArgs>(args: Subset<T, ModerationAggregateArgs>): Prisma.PrismaPromise<GetModerationAggregateType<T>>

    /**
     * Group by Moderation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationGroupByArgs} args - Group by arguments.
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
      T extends ModerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModerationGroupByArgs['orderBy'] }
        : { orderBy?: ModerationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Moderation model
   */
  readonly fields: ModerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Moderation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Moderation model
   */ 
  interface ModerationFieldRefs {
    readonly id: FieldRef<"Moderation", 'String'>
    readonly userId: FieldRef<"Moderation", 'String'>
    readonly general: FieldRef<"Moderation", 'Json'>
    readonly spamConfig: FieldRef<"Moderation", 'Json'>
    readonly links: FieldRef<"Moderation", 'Json'>
    readonly blacklist: FieldRef<"Moderation", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Moderation findUnique
   */
  export type ModerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
    /**
     * Filter, which Moderation to fetch.
     */
    where: ModerationWhereUniqueInput
  }

  /**
   * Moderation findUniqueOrThrow
   */
  export type ModerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
    /**
     * Filter, which Moderation to fetch.
     */
    where: ModerationWhereUniqueInput
  }

  /**
   * Moderation findFirst
   */
  export type ModerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
    /**
     * Filter, which Moderation to fetch.
     */
    where?: ModerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moderations to fetch.
     */
    orderBy?: ModerationOrderByWithRelationInput | ModerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moderations.
     */
    cursor?: ModerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moderations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moderations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moderations.
     */
    distinct?: ModerationScalarFieldEnum | ModerationScalarFieldEnum[]
  }

  /**
   * Moderation findFirstOrThrow
   */
  export type ModerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
    /**
     * Filter, which Moderation to fetch.
     */
    where?: ModerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moderations to fetch.
     */
    orderBy?: ModerationOrderByWithRelationInput | ModerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moderations.
     */
    cursor?: ModerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moderations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moderations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moderations.
     */
    distinct?: ModerationScalarFieldEnum | ModerationScalarFieldEnum[]
  }

  /**
   * Moderation findMany
   */
  export type ModerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
    /**
     * Filter, which Moderations to fetch.
     */
    where?: ModerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moderations to fetch.
     */
    orderBy?: ModerationOrderByWithRelationInput | ModerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moderations.
     */
    cursor?: ModerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moderations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moderations.
     */
    skip?: number
    distinct?: ModerationScalarFieldEnum | ModerationScalarFieldEnum[]
  }

  /**
   * Moderation create
   */
  export type ModerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
    /**
     * The data needed to create a Moderation.
     */
    data: XOR<ModerationCreateInput, ModerationUncheckedCreateInput>
  }

  /**
   * Moderation createMany
   */
  export type ModerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moderations.
     */
    data: ModerationCreateManyInput | ModerationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Moderation createManyAndReturn
   */
  export type ModerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * The data used to create many Moderations.
     */
    data: ModerationCreateManyInput | ModerationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Moderation update
   */
  export type ModerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
    /**
     * The data needed to update a Moderation.
     */
    data: XOR<ModerationUpdateInput, ModerationUncheckedUpdateInput>
    /**
     * Choose, which Moderation to update.
     */
    where: ModerationWhereUniqueInput
  }

  /**
   * Moderation updateMany
   */
  export type ModerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moderations.
     */
    data: XOR<ModerationUpdateManyMutationInput, ModerationUncheckedUpdateManyInput>
    /**
     * Filter which Moderations to update
     */
    where?: ModerationWhereInput
    /**
     * Limit how many Moderations to update.
     */
    limit?: number
  }

  /**
   * Moderation updateManyAndReturn
   */
  export type ModerationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * The data used to update Moderations.
     */
    data: XOR<ModerationUpdateManyMutationInput, ModerationUncheckedUpdateManyInput>
    /**
     * Filter which Moderations to update
     */
    where?: ModerationWhereInput
    /**
     * Limit how many Moderations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Moderation upsert
   */
  export type ModerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
    /**
     * The filter to search for the Moderation to update in case it exists.
     */
    where: ModerationWhereUniqueInput
    /**
     * In case the Moderation found by the `where` argument doesn't exist, create a new Moderation with this data.
     */
    create: XOR<ModerationCreateInput, ModerationUncheckedCreateInput>
    /**
     * In case the Moderation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModerationUpdateInput, ModerationUncheckedUpdateInput>
  }

  /**
   * Moderation delete
   */
  export type ModerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
    /**
     * Filter which Moderation to delete.
     */
    where: ModerationWhereUniqueInput
  }

  /**
   * Moderation deleteMany
   */
  export type ModerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moderations to delete
     */
    where?: ModerationWhereInput
    /**
     * Limit how many Moderations to delete.
     */
    limit?: number
  }

  /**
   * Moderation without action
   */
  export type ModerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderation
     */
    select?: ModerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moderation
     */
    omit?: ModerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationInclude<ExtArgs> | null
  }


  /**
   * Model UserSecurity
   */

  export type AggregateUserSecurity = {
    _count: UserSecurityCountAggregateOutputType | null
    _min: UserSecurityMinAggregateOutputType | null
    _max: UserSecurityMaxAggregateOutputType | null
  }

  export type UserSecurityMinAggregateOutputType = {
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
  }

  export type UserSecurityMaxAggregateOutputType = {
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
  }

  export type UserSecurityCountAggregateOutputType = {
    userId: number
    accessToken: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    _all: number
  }


  export type UserSecurityMinAggregateInputType = {
    userId?: true
    accessToken?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
  }

  export type UserSecurityMaxAggregateInputType = {
    userId?: true
    accessToken?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
  }

  export type UserSecurityCountAggregateInputType = {
    userId?: true
    accessToken?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type UserSecurityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSecurity to aggregate.
     */
    where?: UserSecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecurities to fetch.
     */
    orderBy?: UserSecurityOrderByWithRelationInput | UserSecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecurities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecurities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSecurities
    **/
    _count?: true | UserSecurityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSecurityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSecurityMaxAggregateInputType
  }

  export type GetUserSecurityAggregateType<T extends UserSecurityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSecurity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSecurity[P]>
      : GetScalarType<T[P], AggregateUserSecurity[P]>
  }




  export type UserSecurityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSecurityWhereInput
    orderBy?: UserSecurityOrderByWithAggregationInput | UserSecurityOrderByWithAggregationInput[]
    by: UserSecurityScalarFieldEnum[] | UserSecurityScalarFieldEnum
    having?: UserSecurityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSecurityCountAggregateInputType | true
    _min?: UserSecurityMinAggregateInputType
    _max?: UserSecurityMaxAggregateInputType
  }

  export type UserSecurityGroupByOutputType = {
    userId: string
    accessToken: string | null
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date | null
    expiresAt: Date | null
    _count: UserSecurityCountAggregateOutputType | null
    _min: UserSecurityMinAggregateOutputType | null
    _max: UserSecurityMaxAggregateOutputType | null
  }

  type GetUserSecurityGroupByPayload<T extends UserSecurityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSecurityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSecurityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSecurityGroupByOutputType[P]>
            : GetScalarType<T[P], UserSecurityGroupByOutputType[P]>
        }
      >
    >


  export type UserSecuritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSecurity"]>

  export type UserSecuritySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSecurity"]>

  export type UserSecuritySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSecurity"]>

  export type UserSecuritySelectScalar = {
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
  }

  export type UserSecurityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "accessToken" | "refreshToken" | "createdAt" | "updatedAt" | "expiresAt", ExtArgs["result"]["userSecurity"]>
  export type UserSecurityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSecurityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSecurityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSecurityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSecurity"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      accessToken: string | null
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date | null
      expiresAt: Date | null
    }, ExtArgs["result"]["userSecurity"]>
    composites: {}
  }

  type UserSecurityGetPayload<S extends boolean | null | undefined | UserSecurityDefaultArgs> = $Result.GetResult<Prisma.$UserSecurityPayload, S>

  type UserSecurityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSecurityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSecurityCountAggregateInputType | true
    }

  export interface UserSecurityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSecurity'], meta: { name: 'UserSecurity' } }
    /**
     * Find zero or one UserSecurity that matches the filter.
     * @param {UserSecurityFindUniqueArgs} args - Arguments to find a UserSecurity
     * @example
     * // Get one UserSecurity
     * const userSecurity = await prisma.userSecurity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSecurityFindUniqueArgs>(args: SelectSubset<T, UserSecurityFindUniqueArgs<ExtArgs>>): Prisma__UserSecurityClient<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSecurity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSecurityFindUniqueOrThrowArgs} args - Arguments to find a UserSecurity
     * @example
     * // Get one UserSecurity
     * const userSecurity = await prisma.userSecurity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSecurityFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSecurityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSecurityClient<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSecurity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityFindFirstArgs} args - Arguments to find a UserSecurity
     * @example
     * // Get one UserSecurity
     * const userSecurity = await prisma.userSecurity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSecurityFindFirstArgs>(args?: SelectSubset<T, UserSecurityFindFirstArgs<ExtArgs>>): Prisma__UserSecurityClient<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSecurity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityFindFirstOrThrowArgs} args - Arguments to find a UserSecurity
     * @example
     * // Get one UserSecurity
     * const userSecurity = await prisma.userSecurity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSecurityFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSecurityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSecurityClient<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSecurities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSecurities
     * const userSecurities = await prisma.userSecurity.findMany()
     * 
     * // Get first 10 UserSecurities
     * const userSecurities = await prisma.userSecurity.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userSecurityWithUserIdOnly = await prisma.userSecurity.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserSecurityFindManyArgs>(args?: SelectSubset<T, UserSecurityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSecurity.
     * @param {UserSecurityCreateArgs} args - Arguments to create a UserSecurity.
     * @example
     * // Create one UserSecurity
     * const UserSecurity = await prisma.userSecurity.create({
     *   data: {
     *     // ... data to create a UserSecurity
     *   }
     * })
     * 
     */
    create<T extends UserSecurityCreateArgs>(args: SelectSubset<T, UserSecurityCreateArgs<ExtArgs>>): Prisma__UserSecurityClient<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSecurities.
     * @param {UserSecurityCreateManyArgs} args - Arguments to create many UserSecurities.
     * @example
     * // Create many UserSecurities
     * const userSecurity = await prisma.userSecurity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSecurityCreateManyArgs>(args?: SelectSubset<T, UserSecurityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSecurities and returns the data saved in the database.
     * @param {UserSecurityCreateManyAndReturnArgs} args - Arguments to create many UserSecurities.
     * @example
     * // Create many UserSecurities
     * const userSecurity = await prisma.userSecurity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSecurities and only return the `userId`
     * const userSecurityWithUserIdOnly = await prisma.userSecurity.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSecurityCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSecurityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSecurity.
     * @param {UserSecurityDeleteArgs} args - Arguments to delete one UserSecurity.
     * @example
     * // Delete one UserSecurity
     * const UserSecurity = await prisma.userSecurity.delete({
     *   where: {
     *     // ... filter to delete one UserSecurity
     *   }
     * })
     * 
     */
    delete<T extends UserSecurityDeleteArgs>(args: SelectSubset<T, UserSecurityDeleteArgs<ExtArgs>>): Prisma__UserSecurityClient<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSecurity.
     * @param {UserSecurityUpdateArgs} args - Arguments to update one UserSecurity.
     * @example
     * // Update one UserSecurity
     * const userSecurity = await prisma.userSecurity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSecurityUpdateArgs>(args: SelectSubset<T, UserSecurityUpdateArgs<ExtArgs>>): Prisma__UserSecurityClient<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSecurities.
     * @param {UserSecurityDeleteManyArgs} args - Arguments to filter UserSecurities to delete.
     * @example
     * // Delete a few UserSecurities
     * const { count } = await prisma.userSecurity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSecurityDeleteManyArgs>(args?: SelectSubset<T, UserSecurityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSecurities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSecurities
     * const userSecurity = await prisma.userSecurity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSecurityUpdateManyArgs>(args: SelectSubset<T, UserSecurityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSecurities and returns the data updated in the database.
     * @param {UserSecurityUpdateManyAndReturnArgs} args - Arguments to update many UserSecurities.
     * @example
     * // Update many UserSecurities
     * const userSecurity = await prisma.userSecurity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSecurities and only return the `userId`
     * const userSecurityWithUserIdOnly = await prisma.userSecurity.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserSecurityUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSecurityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSecurity.
     * @param {UserSecurityUpsertArgs} args - Arguments to update or create a UserSecurity.
     * @example
     * // Update or create a UserSecurity
     * const userSecurity = await prisma.userSecurity.upsert({
     *   create: {
     *     // ... data to create a UserSecurity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSecurity we want to update
     *   }
     * })
     */
    upsert<T extends UserSecurityUpsertArgs>(args: SelectSubset<T, UserSecurityUpsertArgs<ExtArgs>>): Prisma__UserSecurityClient<$Result.GetResult<Prisma.$UserSecurityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSecurities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityCountArgs} args - Arguments to filter UserSecurities to count.
     * @example
     * // Count the number of UserSecurities
     * const count = await prisma.userSecurity.count({
     *   where: {
     *     // ... the filter for the UserSecurities we want to count
     *   }
     * })
    **/
    count<T extends UserSecurityCountArgs>(
      args?: Subset<T, UserSecurityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSecurityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSecurity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSecurityAggregateArgs>(args: Subset<T, UserSecurityAggregateArgs>): Prisma.PrismaPromise<GetUserSecurityAggregateType<T>>

    /**
     * Group by UserSecurity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityGroupByArgs} args - Group by arguments.
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
      T extends UserSecurityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSecurityGroupByArgs['orderBy'] }
        : { orderBy?: UserSecurityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSecurityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSecurityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSecurity model
   */
  readonly fields: UserSecurityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSecurity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSecurityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSecurity model
   */ 
  interface UserSecurityFieldRefs {
    readonly userId: FieldRef<"UserSecurity", 'String'>
    readonly accessToken: FieldRef<"UserSecurity", 'String'>
    readonly refreshToken: FieldRef<"UserSecurity", 'String'>
    readonly createdAt: FieldRef<"UserSecurity", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSecurity", 'DateTime'>
    readonly expiresAt: FieldRef<"UserSecurity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSecurity findUnique
   */
  export type UserSecurityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
    /**
     * Filter, which UserSecurity to fetch.
     */
    where: UserSecurityWhereUniqueInput
  }

  /**
   * UserSecurity findUniqueOrThrow
   */
  export type UserSecurityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
    /**
     * Filter, which UserSecurity to fetch.
     */
    where: UserSecurityWhereUniqueInput
  }

  /**
   * UserSecurity findFirst
   */
  export type UserSecurityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
    /**
     * Filter, which UserSecurity to fetch.
     */
    where?: UserSecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecurities to fetch.
     */
    orderBy?: UserSecurityOrderByWithRelationInput | UserSecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSecurities.
     */
    cursor?: UserSecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecurities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecurities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSecurities.
     */
    distinct?: UserSecurityScalarFieldEnum | UserSecurityScalarFieldEnum[]
  }

  /**
   * UserSecurity findFirstOrThrow
   */
  export type UserSecurityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
    /**
     * Filter, which UserSecurity to fetch.
     */
    where?: UserSecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecurities to fetch.
     */
    orderBy?: UserSecurityOrderByWithRelationInput | UserSecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSecurities.
     */
    cursor?: UserSecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecurities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecurities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSecurities.
     */
    distinct?: UserSecurityScalarFieldEnum | UserSecurityScalarFieldEnum[]
  }

  /**
   * UserSecurity findMany
   */
  export type UserSecurityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
    /**
     * Filter, which UserSecurities to fetch.
     */
    where?: UserSecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecurities to fetch.
     */
    orderBy?: UserSecurityOrderByWithRelationInput | UserSecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSecurities.
     */
    cursor?: UserSecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecurities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecurities.
     */
    skip?: number
    distinct?: UserSecurityScalarFieldEnum | UserSecurityScalarFieldEnum[]
  }

  /**
   * UserSecurity create
   */
  export type UserSecurityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSecurity.
     */
    data: XOR<UserSecurityCreateInput, UserSecurityUncheckedCreateInput>
  }

  /**
   * UserSecurity createMany
   */
  export type UserSecurityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSecurities.
     */
    data: UserSecurityCreateManyInput | UserSecurityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSecurity createManyAndReturn
   */
  export type UserSecurityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * The data used to create many UserSecurities.
     */
    data: UserSecurityCreateManyInput | UserSecurityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSecurity update
   */
  export type UserSecurityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSecurity.
     */
    data: XOR<UserSecurityUpdateInput, UserSecurityUncheckedUpdateInput>
    /**
     * Choose, which UserSecurity to update.
     */
    where: UserSecurityWhereUniqueInput
  }

  /**
   * UserSecurity updateMany
   */
  export type UserSecurityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSecurities.
     */
    data: XOR<UserSecurityUpdateManyMutationInput, UserSecurityUncheckedUpdateManyInput>
    /**
     * Filter which UserSecurities to update
     */
    where?: UserSecurityWhereInput
    /**
     * Limit how many UserSecurities to update.
     */
    limit?: number
  }

  /**
   * UserSecurity updateManyAndReturn
   */
  export type UserSecurityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * The data used to update UserSecurities.
     */
    data: XOR<UserSecurityUpdateManyMutationInput, UserSecurityUncheckedUpdateManyInput>
    /**
     * Filter which UserSecurities to update
     */
    where?: UserSecurityWhereInput
    /**
     * Limit how many UserSecurities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSecurity upsert
   */
  export type UserSecurityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSecurity to update in case it exists.
     */
    where: UserSecurityWhereUniqueInput
    /**
     * In case the UserSecurity found by the `where` argument doesn't exist, create a new UserSecurity with this data.
     */
    create: XOR<UserSecurityCreateInput, UserSecurityUncheckedCreateInput>
    /**
     * In case the UserSecurity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSecurityUpdateInput, UserSecurityUncheckedUpdateInput>
  }

  /**
   * UserSecurity delete
   */
  export type UserSecurityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
    /**
     * Filter which UserSecurity to delete.
     */
    where: UserSecurityWhereUniqueInput
  }

  /**
   * UserSecurity deleteMany
   */
  export type UserSecurityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSecurities to delete
     */
    where?: UserSecurityWhereInput
    /**
     * Limit how many UserSecurities to delete.
     */
    limit?: number
  }

  /**
   * UserSecurity without action
   */
  export type UserSecurityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurity
     */
    select?: UserSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurity
     */
    omit?: UserSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityInclude<ExtArgs> | null
  }


  /**
   * Model Viewer
   */

  export type AggregateViewer = {
    _count: ViewerCountAggregateOutputType | null
    _avg: ViewerAvgAggregateOutputType | null
    _sum: ViewerSumAggregateOutputType | null
    _min: ViewerMinAggregateOutputType | null
    _max: ViewerMaxAggregateOutputType | null
  }

  export type ViewerAvgAggregateOutputType = {
    hoursWatched: number | null
    points: number | null
    streakDays: number | null
    totalMessages: number | null
  }

  export type ViewerSumAggregateOutputType = {
    hoursWatched: number | null
    points: number | null
    streakDays: number | null
    totalMessages: number | null
  }

  export type ViewerMinAggregateOutputType = {
    id: string | null
    userChannelId: string | null
    username: string | null
    hoursWatched: number | null
    points: number | null
    createdAt: Date | null
    streakDays: number | null
    streamChatId: string | null
    totalMessages: number | null
  }

  export type ViewerMaxAggregateOutputType = {
    id: string | null
    userChannelId: string | null
    username: string | null
    hoursWatched: number | null
    points: number | null
    createdAt: Date | null
    streakDays: number | null
    streamChatId: string | null
    totalMessages: number | null
  }

  export type ViewerCountAggregateOutputType = {
    id: number
    userChannelId: number
    username: number
    hoursWatched: number
    points: number
    createdAt: number
    streakDays: number
    streamChatId: number
    totalMessages: number
    _all: number
  }


  export type ViewerAvgAggregateInputType = {
    hoursWatched?: true
    points?: true
    streakDays?: true
    totalMessages?: true
  }

  export type ViewerSumAggregateInputType = {
    hoursWatched?: true
    points?: true
    streakDays?: true
    totalMessages?: true
  }

  export type ViewerMinAggregateInputType = {
    id?: true
    userChannelId?: true
    username?: true
    hoursWatched?: true
    points?: true
    createdAt?: true
    streakDays?: true
    streamChatId?: true
    totalMessages?: true
  }

  export type ViewerMaxAggregateInputType = {
    id?: true
    userChannelId?: true
    username?: true
    hoursWatched?: true
    points?: true
    createdAt?: true
    streakDays?: true
    streamChatId?: true
    totalMessages?: true
  }

  export type ViewerCountAggregateInputType = {
    id?: true
    userChannelId?: true
    username?: true
    hoursWatched?: true
    points?: true
    createdAt?: true
    streakDays?: true
    streamChatId?: true
    totalMessages?: true
    _all?: true
  }

  export type ViewerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viewer to aggregate.
     */
    where?: ViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viewers to fetch.
     */
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Viewers
    **/
    _count?: true | ViewerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewerMaxAggregateInputType
  }

  export type GetViewerAggregateType<T extends ViewerAggregateArgs> = {
        [P in keyof T & keyof AggregateViewer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewer[P]>
      : GetScalarType<T[P], AggregateViewer[P]>
  }




  export type ViewerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewerWhereInput
    orderBy?: ViewerOrderByWithAggregationInput | ViewerOrderByWithAggregationInput[]
    by: ViewerScalarFieldEnum[] | ViewerScalarFieldEnum
    having?: ViewerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewerCountAggregateInputType | true
    _avg?: ViewerAvgAggregateInputType
    _sum?: ViewerSumAggregateInputType
    _min?: ViewerMinAggregateInputType
    _max?: ViewerMaxAggregateInputType
  }

  export type ViewerGroupByOutputType = {
    id: string
    userChannelId: string
    username: string
    hoursWatched: number | null
    points: number
    createdAt: Date
    streakDays: number
    streamChatId: string
    totalMessages: number
    _count: ViewerCountAggregateOutputType | null
    _avg: ViewerAvgAggregateOutputType | null
    _sum: ViewerSumAggregateOutputType | null
    _min: ViewerMinAggregateOutputType | null
    _max: ViewerMaxAggregateOutputType | null
  }

  type GetViewerGroupByPayload<T extends ViewerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewerGroupByOutputType[P]>
            : GetScalarType<T[P], ViewerGroupByOutputType[P]>
        }
      >
    >


  export type ViewerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userChannelId?: boolean
    username?: boolean
    hoursWatched?: boolean
    points?: boolean
    createdAt?: boolean
    streakDays?: boolean
    streamChatId?: boolean
    totalMessages?: boolean
    Chat?: boolean | Viewer$ChatArgs<ExtArgs>
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ViewerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewer"]>

  export type ViewerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userChannelId?: boolean
    username?: boolean
    hoursWatched?: boolean
    points?: boolean
    createdAt?: boolean
    streakDays?: boolean
    streamChatId?: boolean
    totalMessages?: boolean
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewer"]>

  export type ViewerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userChannelId?: boolean
    username?: boolean
    hoursWatched?: boolean
    points?: boolean
    createdAt?: boolean
    streakDays?: boolean
    streamChatId?: boolean
    totalMessages?: boolean
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewer"]>

  export type ViewerSelectScalar = {
    id?: boolean
    userChannelId?: boolean
    username?: boolean
    hoursWatched?: boolean
    points?: boolean
    createdAt?: boolean
    streakDays?: boolean
    streamChatId?: boolean
    totalMessages?: boolean
  }

  export type ViewerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userChannelId" | "username" | "hoursWatched" | "points" | "createdAt" | "streakDays" | "streamChatId" | "totalMessages", ExtArgs["result"]["viewer"]>
  export type ViewerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | Viewer$ChatArgs<ExtArgs>
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ViewerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViewerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ViewerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StreamChat?: boolean | StreamChatDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ViewerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Viewer"
    objects: {
      Chat: Prisma.$ChatPayload<ExtArgs>[]
      StreamChat: Prisma.$StreamChatPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userChannelId: string
      username: string
      hoursWatched: number | null
      points: number
      createdAt: Date
      streakDays: number
      streamChatId: string
      totalMessages: number
    }, ExtArgs["result"]["viewer"]>
    composites: {}
  }

  type ViewerGetPayload<S extends boolean | null | undefined | ViewerDefaultArgs> = $Result.GetResult<Prisma.$ViewerPayload, S>

  type ViewerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewerCountAggregateInputType | true
    }

  export interface ViewerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Viewer'], meta: { name: 'Viewer' } }
    /**
     * Find zero or one Viewer that matches the filter.
     * @param {ViewerFindUniqueArgs} args - Arguments to find a Viewer
     * @example
     * // Get one Viewer
     * const viewer = await prisma.viewer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewerFindUniqueArgs>(args: SelectSubset<T, ViewerFindUniqueArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Viewer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewerFindUniqueOrThrowArgs} args - Arguments to find a Viewer
     * @example
     * // Get one Viewer
     * const viewer = await prisma.viewer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewerFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viewer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerFindFirstArgs} args - Arguments to find a Viewer
     * @example
     * // Get one Viewer
     * const viewer = await prisma.viewer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewerFindFirstArgs>(args?: SelectSubset<T, ViewerFindFirstArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viewer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerFindFirstOrThrowArgs} args - Arguments to find a Viewer
     * @example
     * // Get one Viewer
     * const viewer = await prisma.viewer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewerFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Viewers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viewers
     * const viewers = await prisma.viewer.findMany()
     * 
     * // Get first 10 Viewers
     * const viewers = await prisma.viewer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewerWithIdOnly = await prisma.viewer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewerFindManyArgs>(args?: SelectSubset<T, ViewerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Viewer.
     * @param {ViewerCreateArgs} args - Arguments to create a Viewer.
     * @example
     * // Create one Viewer
     * const Viewer = await prisma.viewer.create({
     *   data: {
     *     // ... data to create a Viewer
     *   }
     * })
     * 
     */
    create<T extends ViewerCreateArgs>(args: SelectSubset<T, ViewerCreateArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Viewers.
     * @param {ViewerCreateManyArgs} args - Arguments to create many Viewers.
     * @example
     * // Create many Viewers
     * const viewer = await prisma.viewer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewerCreateManyArgs>(args?: SelectSubset<T, ViewerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Viewers and returns the data saved in the database.
     * @param {ViewerCreateManyAndReturnArgs} args - Arguments to create many Viewers.
     * @example
     * // Create many Viewers
     * const viewer = await prisma.viewer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Viewers and only return the `id`
     * const viewerWithIdOnly = await prisma.viewer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewerCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Viewer.
     * @param {ViewerDeleteArgs} args - Arguments to delete one Viewer.
     * @example
     * // Delete one Viewer
     * const Viewer = await prisma.viewer.delete({
     *   where: {
     *     // ... filter to delete one Viewer
     *   }
     * })
     * 
     */
    delete<T extends ViewerDeleteArgs>(args: SelectSubset<T, ViewerDeleteArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Viewer.
     * @param {ViewerUpdateArgs} args - Arguments to update one Viewer.
     * @example
     * // Update one Viewer
     * const viewer = await prisma.viewer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewerUpdateArgs>(args: SelectSubset<T, ViewerUpdateArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Viewers.
     * @param {ViewerDeleteManyArgs} args - Arguments to filter Viewers to delete.
     * @example
     * // Delete a few Viewers
     * const { count } = await prisma.viewer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewerDeleteManyArgs>(args?: SelectSubset<T, ViewerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viewers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viewers
     * const viewer = await prisma.viewer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewerUpdateManyArgs>(args: SelectSubset<T, ViewerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viewers and returns the data updated in the database.
     * @param {ViewerUpdateManyAndReturnArgs} args - Arguments to update many Viewers.
     * @example
     * // Update many Viewers
     * const viewer = await prisma.viewer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Viewers and only return the `id`
     * const viewerWithIdOnly = await prisma.viewer.updateManyAndReturn({
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
    updateManyAndReturn<T extends ViewerUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Viewer.
     * @param {ViewerUpsertArgs} args - Arguments to update or create a Viewer.
     * @example
     * // Update or create a Viewer
     * const viewer = await prisma.viewer.upsert({
     *   create: {
     *     // ... data to create a Viewer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viewer we want to update
     *   }
     * })
     */
    upsert<T extends ViewerUpsertArgs>(args: SelectSubset<T, ViewerUpsertArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Viewers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerCountArgs} args - Arguments to filter Viewers to count.
     * @example
     * // Count the number of Viewers
     * const count = await prisma.viewer.count({
     *   where: {
     *     // ... the filter for the Viewers we want to count
     *   }
     * })
    **/
    count<T extends ViewerCountArgs>(
      args?: Subset<T, ViewerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viewer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewerAggregateArgs>(args: Subset<T, ViewerAggregateArgs>): Prisma.PrismaPromise<GetViewerAggregateType<T>>

    /**
     * Group by Viewer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerGroupByArgs} args - Group by arguments.
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
      T extends ViewerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewerGroupByArgs['orderBy'] }
        : { orderBy?: ViewerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Viewer model
   */
  readonly fields: ViewerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Viewer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chat<T extends Viewer$ChatArgs<ExtArgs> = {}>(args?: Subset<T, Viewer$ChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StreamChat<T extends StreamChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamChatDefaultArgs<ExtArgs>>): Prisma__StreamChatClient<$Result.GetResult<Prisma.$StreamChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Viewer model
   */ 
  interface ViewerFieldRefs {
    readonly id: FieldRef<"Viewer", 'String'>
    readonly userChannelId: FieldRef<"Viewer", 'String'>
    readonly username: FieldRef<"Viewer", 'String'>
    readonly hoursWatched: FieldRef<"Viewer", 'Float'>
    readonly points: FieldRef<"Viewer", 'Int'>
    readonly createdAt: FieldRef<"Viewer", 'DateTime'>
    readonly streakDays: FieldRef<"Viewer", 'Int'>
    readonly streamChatId: FieldRef<"Viewer", 'String'>
    readonly totalMessages: FieldRef<"Viewer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Viewer findUnique
   */
  export type ViewerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter, which Viewer to fetch.
     */
    where: ViewerWhereUniqueInput
  }

  /**
   * Viewer findUniqueOrThrow
   */
  export type ViewerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter, which Viewer to fetch.
     */
    where: ViewerWhereUniqueInput
  }

  /**
   * Viewer findFirst
   */
  export type ViewerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter, which Viewer to fetch.
     */
    where?: ViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viewers to fetch.
     */
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viewers.
     */
    cursor?: ViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viewers.
     */
    distinct?: ViewerScalarFieldEnum | ViewerScalarFieldEnum[]
  }

  /**
   * Viewer findFirstOrThrow
   */
  export type ViewerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter, which Viewer to fetch.
     */
    where?: ViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viewers to fetch.
     */
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viewers.
     */
    cursor?: ViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viewers.
     */
    distinct?: ViewerScalarFieldEnum | ViewerScalarFieldEnum[]
  }

  /**
   * Viewer findMany
   */
  export type ViewerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter, which Viewers to fetch.
     */
    where?: ViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viewers to fetch.
     */
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Viewers.
     */
    cursor?: ViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viewers.
     */
    skip?: number
    distinct?: ViewerScalarFieldEnum | ViewerScalarFieldEnum[]
  }

  /**
   * Viewer create
   */
  export type ViewerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * The data needed to create a Viewer.
     */
    data: XOR<ViewerCreateInput, ViewerUncheckedCreateInput>
  }

  /**
   * Viewer createMany
   */
  export type ViewerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Viewers.
     */
    data: ViewerCreateManyInput | ViewerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Viewer createManyAndReturn
   */
  export type ViewerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * The data used to create many Viewers.
     */
    data: ViewerCreateManyInput | ViewerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viewer update
   */
  export type ViewerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * The data needed to update a Viewer.
     */
    data: XOR<ViewerUpdateInput, ViewerUncheckedUpdateInput>
    /**
     * Choose, which Viewer to update.
     */
    where: ViewerWhereUniqueInput
  }

  /**
   * Viewer updateMany
   */
  export type ViewerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Viewers.
     */
    data: XOR<ViewerUpdateManyMutationInput, ViewerUncheckedUpdateManyInput>
    /**
     * Filter which Viewers to update
     */
    where?: ViewerWhereInput
    /**
     * Limit how many Viewers to update.
     */
    limit?: number
  }

  /**
   * Viewer updateManyAndReturn
   */
  export type ViewerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * The data used to update Viewers.
     */
    data: XOR<ViewerUpdateManyMutationInput, ViewerUncheckedUpdateManyInput>
    /**
     * Filter which Viewers to update
     */
    where?: ViewerWhereInput
    /**
     * Limit how many Viewers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viewer upsert
   */
  export type ViewerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * The filter to search for the Viewer to update in case it exists.
     */
    where: ViewerWhereUniqueInput
    /**
     * In case the Viewer found by the `where` argument doesn't exist, create a new Viewer with this data.
     */
    create: XOR<ViewerCreateInput, ViewerUncheckedCreateInput>
    /**
     * In case the Viewer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewerUpdateInput, ViewerUncheckedUpdateInput>
  }

  /**
   * Viewer delete
   */
  export type ViewerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter which Viewer to delete.
     */
    where: ViewerWhereUniqueInput
  }

  /**
   * Viewer deleteMany
   */
  export type ViewerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viewers to delete
     */
    where?: ViewerWhereInput
    /**
     * Limit how many Viewers to delete.
     */
    limit?: number
  }

  /**
   * Viewer.Chat
   */
  export type Viewer$ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Viewer without action
   */
  export type ViewerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
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


  export const AnalyticsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalViews: 'totalViews',
    subscribers: 'subscribers',
    engagementRate: 'engagementRate',
    timestamp: 'timestamp'
  };

  export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatType: 'chatType',
    message: 'message',
    timestamp: 'timestamp',
    liveChatId: 'liveChatId',
    viewerId: 'viewerId',
    username: 'username'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const CustomCommandScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trigger: 'trigger',
    response: 'response',
    description: 'description',
    enabled: 'enabled',
    createdAt: 'createdAt',
    cooldown: 'cooldown',
    requiredUserLevel: 'requiredUserLevel'
  };

  export type CustomCommandScalarFieldEnum = (typeof CustomCommandScalarFieldEnum)[keyof typeof CustomCommandScalarFieldEnum]


  export const StreamChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    streamUrl: 'streamUrl',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    totalDonations: 'totalDonations',
    totalViews: 'totalViews'
  };

  export type StreamChatScalarFieldEnum = (typeof StreamChatScalarFieldEnum)[keyof typeof StreamChatScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    settings: 'settings',
    username: 'username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ModerationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    general: 'general',
    spamConfig: 'spamConfig',
    links: 'links',
    blacklist: 'blacklist'
  };

  export type ModerationScalarFieldEnum = (typeof ModerationScalarFieldEnum)[keyof typeof ModerationScalarFieldEnum]


  export const UserSecurityScalarFieldEnum: {
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt'
  };

  export type UserSecurityScalarFieldEnum = (typeof UserSecurityScalarFieldEnum)[keyof typeof UserSecurityScalarFieldEnum]


  export const ViewerScalarFieldEnum: {
    id: 'id',
    userChannelId: 'userChannelId',
    username: 'username',
    hoursWatched: 'hoursWatched',
    points: 'points',
    createdAt: 'createdAt',
    streakDays: 'streakDays',
    streamChatId: 'streamChatId',
    totalMessages: 'totalMessages'
  };

  export type ViewerScalarFieldEnum = (typeof ViewerScalarFieldEnum)[keyof typeof ViewerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    id?: StringFilter<"Analytics"> | string
    userId?: StringFilter<"Analytics"> | string
    totalViews?: IntFilter<"Analytics"> | number
    subscribers?: IntFilter<"Analytics"> | number
    engagementRate?: FloatFilter<"Analytics"> | number
    timestamp?: DateTimeFilter<"Analytics"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalViews?: SortOrder
    subscribers?: SortOrder
    engagementRate?: SortOrder
    timestamp?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    userId?: StringFilter<"Analytics"> | string
    totalViews?: IntFilter<"Analytics"> | number
    subscribers?: IntFilter<"Analytics"> | number
    engagementRate?: FloatFilter<"Analytics"> | number
    timestamp?: DateTimeFilter<"Analytics"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalViews?: SortOrder
    subscribers?: SortOrder
    engagementRate?: SortOrder
    timestamp?: SortOrder
    _count?: AnalyticsCountOrderByAggregateInput
    _avg?: AnalyticsAvgOrderByAggregateInput
    _max?: AnalyticsMaxOrderByAggregateInput
    _min?: AnalyticsMinOrderByAggregateInput
    _sum?: AnalyticsSumOrderByAggregateInput
  }

  export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    OR?: AnalyticsScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analytics"> | string
    userId?: StringWithAggregatesFilter<"Analytics"> | string
    totalViews?: IntWithAggregatesFilter<"Analytics"> | number
    subscribers?: IntWithAggregatesFilter<"Analytics"> | number
    engagementRate?: FloatWithAggregatesFilter<"Analytics"> | number
    timestamp?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    chatType?: StringFilter<"Chat"> | string
    message?: StringFilter<"Chat"> | string
    timestamp?: DateTimeFilter<"Chat"> | Date | string
    liveChatId?: StringFilter<"Chat"> | string
    viewerId?: StringNullableFilter<"Chat"> | string | null
    username?: StringFilter<"Chat"> | string
    StreamChat?: XOR<StreamChatScalarRelationFilter, StreamChatWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Viewer?: XOR<ViewerNullableScalarRelationFilter, ViewerWhereInput> | null
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatType?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    liveChatId?: SortOrder
    viewerId?: SortOrderInput | SortOrder
    username?: SortOrder
    StreamChat?: StreamChatOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    Viewer?: ViewerOrderByWithRelationInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    userId?: StringFilter<"Chat"> | string
    chatType?: StringFilter<"Chat"> | string
    message?: StringFilter<"Chat"> | string
    timestamp?: DateTimeFilter<"Chat"> | Date | string
    liveChatId?: StringFilter<"Chat"> | string
    viewerId?: StringNullableFilter<"Chat"> | string | null
    username?: StringFilter<"Chat"> | string
    StreamChat?: XOR<StreamChatScalarRelationFilter, StreamChatWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Viewer?: XOR<ViewerNullableScalarRelationFilter, ViewerWhereInput> | null
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatType?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    liveChatId?: SortOrder
    viewerId?: SortOrderInput | SortOrder
    username?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    userId?: StringWithAggregatesFilter<"Chat"> | string
    chatType?: StringWithAggregatesFilter<"Chat"> | string
    message?: StringWithAggregatesFilter<"Chat"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    liveChatId?: StringWithAggregatesFilter<"Chat"> | string
    viewerId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    username?: StringWithAggregatesFilter<"Chat"> | string
  }

  export type CustomCommandWhereInput = {
    AND?: CustomCommandWhereInput | CustomCommandWhereInput[]
    OR?: CustomCommandWhereInput[]
    NOT?: CustomCommandWhereInput | CustomCommandWhereInput[]
    id?: StringFilter<"CustomCommand"> | string
    userId?: StringFilter<"CustomCommand"> | string
    trigger?: StringFilter<"CustomCommand"> | string
    response?: StringFilter<"CustomCommand"> | string
    description?: StringFilter<"CustomCommand"> | string
    enabled?: BoolFilter<"CustomCommand"> | boolean
    createdAt?: DateTimeFilter<"CustomCommand"> | Date | string
    cooldown?: IntFilter<"CustomCommand"> | number
    requiredUserLevel?: EnumRoleFilter<"CustomCommand"> | $Enums.Role
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CustomCommandOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    response?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    cooldown?: SortOrder
    requiredUserLevel?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type CustomCommandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trigger?: string
    AND?: CustomCommandWhereInput | CustomCommandWhereInput[]
    OR?: CustomCommandWhereInput[]
    NOT?: CustomCommandWhereInput | CustomCommandWhereInput[]
    userId?: StringFilter<"CustomCommand"> | string
    response?: StringFilter<"CustomCommand"> | string
    description?: StringFilter<"CustomCommand"> | string
    enabled?: BoolFilter<"CustomCommand"> | boolean
    createdAt?: DateTimeFilter<"CustomCommand"> | Date | string
    cooldown?: IntFilter<"CustomCommand"> | number
    requiredUserLevel?: EnumRoleFilter<"CustomCommand"> | $Enums.Role
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "trigger">

  export type CustomCommandOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    response?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    cooldown?: SortOrder
    requiredUserLevel?: SortOrder
    _count?: CustomCommandCountOrderByAggregateInput
    _avg?: CustomCommandAvgOrderByAggregateInput
    _max?: CustomCommandMaxOrderByAggregateInput
    _min?: CustomCommandMinOrderByAggregateInput
    _sum?: CustomCommandSumOrderByAggregateInput
  }

  export type CustomCommandScalarWhereWithAggregatesInput = {
    AND?: CustomCommandScalarWhereWithAggregatesInput | CustomCommandScalarWhereWithAggregatesInput[]
    OR?: CustomCommandScalarWhereWithAggregatesInput[]
    NOT?: CustomCommandScalarWhereWithAggregatesInput | CustomCommandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomCommand"> | string
    userId?: StringWithAggregatesFilter<"CustomCommand"> | string
    trigger?: StringWithAggregatesFilter<"CustomCommand"> | string
    response?: StringWithAggregatesFilter<"CustomCommand"> | string
    description?: StringWithAggregatesFilter<"CustomCommand"> | string
    enabled?: BoolWithAggregatesFilter<"CustomCommand"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CustomCommand"> | Date | string
    cooldown?: IntWithAggregatesFilter<"CustomCommand"> | number
    requiredUserLevel?: EnumRoleWithAggregatesFilter<"CustomCommand"> | $Enums.Role
  }

  export type StreamChatWhereInput = {
    AND?: StreamChatWhereInput | StreamChatWhereInput[]
    OR?: StreamChatWhereInput[]
    NOT?: StreamChatWhereInput | StreamChatWhereInput[]
    id?: StringFilter<"StreamChat"> | string
    userId?: StringFilter<"StreamChat"> | string
    title?: StringNullableFilter<"StreamChat"> | string | null
    streamUrl?: StringNullableFilter<"StreamChat"> | string | null
    startTime?: DateTimeFilter<"StreamChat"> | Date | string
    endTime?: DateTimeNullableFilter<"StreamChat"> | Date | string | null
    duration?: IntNullableFilter<"StreamChat"> | number | null
    totalDonations?: FloatNullableFilter<"StreamChat"> | number | null
    totalViews?: IntNullableFilter<"StreamChat"> | number | null
    Chat?: ChatListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Viewer?: ViewerListRelationFilter
  }

  export type StreamChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    totalDonations?: SortOrderInput | SortOrder
    totalViews?: SortOrderInput | SortOrder
    Chat?: ChatOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    Viewer?: ViewerOrderByRelationAggregateInput
  }

  export type StreamChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamChatWhereInput | StreamChatWhereInput[]
    OR?: StreamChatWhereInput[]
    NOT?: StreamChatWhereInput | StreamChatWhereInput[]
    userId?: StringFilter<"StreamChat"> | string
    title?: StringNullableFilter<"StreamChat"> | string | null
    streamUrl?: StringNullableFilter<"StreamChat"> | string | null
    startTime?: DateTimeFilter<"StreamChat"> | Date | string
    endTime?: DateTimeNullableFilter<"StreamChat"> | Date | string | null
    duration?: IntNullableFilter<"StreamChat"> | number | null
    totalDonations?: FloatNullableFilter<"StreamChat"> | number | null
    totalViews?: IntNullableFilter<"StreamChat"> | number | null
    Chat?: ChatListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Viewer?: ViewerListRelationFilter
  }, "id">

  export type StreamChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    totalDonations?: SortOrderInput | SortOrder
    totalViews?: SortOrderInput | SortOrder
    _count?: StreamChatCountOrderByAggregateInput
    _avg?: StreamChatAvgOrderByAggregateInput
    _max?: StreamChatMaxOrderByAggregateInput
    _min?: StreamChatMinOrderByAggregateInput
    _sum?: StreamChatSumOrderByAggregateInput
  }

  export type StreamChatScalarWhereWithAggregatesInput = {
    AND?: StreamChatScalarWhereWithAggregatesInput | StreamChatScalarWhereWithAggregatesInput[]
    OR?: StreamChatScalarWhereWithAggregatesInput[]
    NOT?: StreamChatScalarWhereWithAggregatesInput | StreamChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StreamChat"> | string
    userId?: StringWithAggregatesFilter<"StreamChat"> | string
    title?: StringNullableWithAggregatesFilter<"StreamChat"> | string | null
    streamUrl?: StringNullableWithAggregatesFilter<"StreamChat"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"StreamChat"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"StreamChat"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"StreamChat"> | number | null
    totalDonations?: FloatNullableWithAggregatesFilter<"StreamChat"> | number | null
    totalViews?: IntNullableWithAggregatesFilter<"StreamChat"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    settings?: JsonNullableFilter<"User">
    username?: StringNullableFilter<"User"> | string | null
    Analytics?: AnalyticsListRelationFilter
    Chat?: ChatListRelationFilter
    CustomCommand?: CustomCommandListRelationFilter
    StreamChat?: StreamChatListRelationFilter
    UserSecurity?: XOR<UserSecurityNullableScalarRelationFilter, UserSecurityWhereInput> | null
    Viewer?: ViewerListRelationFilter
    Moderation?: ModerationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    settings?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    Analytics?: AnalyticsOrderByRelationAggregateInput
    Chat?: ChatOrderByRelationAggregateInput
    CustomCommand?: CustomCommandOrderByRelationAggregateInput
    StreamChat?: StreamChatOrderByRelationAggregateInput
    UserSecurity?: UserSecurityOrderByWithRelationInput
    Viewer?: ViewerOrderByRelationAggregateInput
    Moderation?: ModerationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    settings?: JsonNullableFilter<"User">
    Analytics?: AnalyticsListRelationFilter
    Chat?: ChatListRelationFilter
    CustomCommand?: CustomCommandListRelationFilter
    StreamChat?: StreamChatListRelationFilter
    UserSecurity?: XOR<UserSecurityNullableScalarRelationFilter, UserSecurityWhereInput> | null
    Viewer?: ViewerListRelationFilter
    Moderation?: ModerationListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    settings?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    settings?: JsonNullableWithAggregatesFilter<"User">
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ModerationWhereInput = {
    AND?: ModerationWhereInput | ModerationWhereInput[]
    OR?: ModerationWhereInput[]
    NOT?: ModerationWhereInput | ModerationWhereInput[]
    id?: StringFilter<"Moderation"> | string
    userId?: StringFilter<"Moderation"> | string
    general?: JsonNullableFilter<"Moderation">
    spamConfig?: JsonNullableFilter<"Moderation">
    links?: JsonNullableFilter<"Moderation">
    blacklist?: JsonNullableFilter<"Moderation">
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ModerationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    general?: SortOrderInput | SortOrder
    spamConfig?: SortOrderInput | SortOrder
    links?: SortOrderInput | SortOrder
    blacklist?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ModerationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModerationWhereInput | ModerationWhereInput[]
    OR?: ModerationWhereInput[]
    NOT?: ModerationWhereInput | ModerationWhereInput[]
    userId?: StringFilter<"Moderation"> | string
    general?: JsonNullableFilter<"Moderation">
    spamConfig?: JsonNullableFilter<"Moderation">
    links?: JsonNullableFilter<"Moderation">
    blacklist?: JsonNullableFilter<"Moderation">
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ModerationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    general?: SortOrderInput | SortOrder
    spamConfig?: SortOrderInput | SortOrder
    links?: SortOrderInput | SortOrder
    blacklist?: SortOrderInput | SortOrder
    _count?: ModerationCountOrderByAggregateInput
    _max?: ModerationMaxOrderByAggregateInput
    _min?: ModerationMinOrderByAggregateInput
  }

  export type ModerationScalarWhereWithAggregatesInput = {
    AND?: ModerationScalarWhereWithAggregatesInput | ModerationScalarWhereWithAggregatesInput[]
    OR?: ModerationScalarWhereWithAggregatesInput[]
    NOT?: ModerationScalarWhereWithAggregatesInput | ModerationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Moderation"> | string
    userId?: StringWithAggregatesFilter<"Moderation"> | string
    general?: JsonNullableWithAggregatesFilter<"Moderation">
    spamConfig?: JsonNullableWithAggregatesFilter<"Moderation">
    links?: JsonNullableWithAggregatesFilter<"Moderation">
    blacklist?: JsonNullableWithAggregatesFilter<"Moderation">
  }

  export type UserSecurityWhereInput = {
    AND?: UserSecurityWhereInput | UserSecurityWhereInput[]
    OR?: UserSecurityWhereInput[]
    NOT?: UserSecurityWhereInput | UserSecurityWhereInput[]
    userId?: StringFilter<"UserSecurity"> | string
    accessToken?: StringNullableFilter<"UserSecurity"> | string | null
    refreshToken?: StringNullableFilter<"UserSecurity"> | string | null
    createdAt?: DateTimeFilter<"UserSecurity"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserSecurity"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"UserSecurity"> | Date | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSecurityOrderByWithRelationInput = {
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserSecurityWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserSecurityWhereInput | UserSecurityWhereInput[]
    OR?: UserSecurityWhereInput[]
    NOT?: UserSecurityWhereInput | UserSecurityWhereInput[]
    accessToken?: StringNullableFilter<"UserSecurity"> | string | null
    refreshToken?: StringNullableFilter<"UserSecurity"> | string | null
    createdAt?: DateTimeFilter<"UserSecurity"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserSecurity"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"UserSecurity"> | Date | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId" | "userId">

  export type UserSecurityOrderByWithAggregationInput = {
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: UserSecurityCountOrderByAggregateInput
    _max?: UserSecurityMaxOrderByAggregateInput
    _min?: UserSecurityMinOrderByAggregateInput
  }

  export type UserSecurityScalarWhereWithAggregatesInput = {
    AND?: UserSecurityScalarWhereWithAggregatesInput | UserSecurityScalarWhereWithAggregatesInput[]
    OR?: UserSecurityScalarWhereWithAggregatesInput[]
    NOT?: UserSecurityScalarWhereWithAggregatesInput | UserSecurityScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserSecurity"> | string
    accessToken?: StringNullableWithAggregatesFilter<"UserSecurity"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"UserSecurity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSecurity"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserSecurity"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"UserSecurity"> | Date | string | null
  }

  export type ViewerWhereInput = {
    AND?: ViewerWhereInput | ViewerWhereInput[]
    OR?: ViewerWhereInput[]
    NOT?: ViewerWhereInput | ViewerWhereInput[]
    id?: StringFilter<"Viewer"> | string
    userChannelId?: StringFilter<"Viewer"> | string
    username?: StringFilter<"Viewer"> | string
    hoursWatched?: FloatNullableFilter<"Viewer"> | number | null
    points?: IntFilter<"Viewer"> | number
    createdAt?: DateTimeFilter<"Viewer"> | Date | string
    streakDays?: IntFilter<"Viewer"> | number
    streamChatId?: StringFilter<"Viewer"> | string
    totalMessages?: IntFilter<"Viewer"> | number
    Chat?: ChatListRelationFilter
    StreamChat?: XOR<StreamChatScalarRelationFilter, StreamChatWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ViewerOrderByWithRelationInput = {
    id?: SortOrder
    userChannelId?: SortOrder
    username?: SortOrder
    hoursWatched?: SortOrderInput | SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    streakDays?: SortOrder
    streamChatId?: SortOrder
    totalMessages?: SortOrder
    Chat?: ChatOrderByRelationAggregateInput
    StreamChat?: StreamChatOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ViewerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    id_userChannelId_streamChatId?: ViewerIdUserChannelIdStreamChatIdCompoundUniqueInput
    AND?: ViewerWhereInput | ViewerWhereInput[]
    OR?: ViewerWhereInput[]
    NOT?: ViewerWhereInput | ViewerWhereInput[]
    userChannelId?: StringFilter<"Viewer"> | string
    username?: StringFilter<"Viewer"> | string
    hoursWatched?: FloatNullableFilter<"Viewer"> | number | null
    points?: IntFilter<"Viewer"> | number
    createdAt?: DateTimeFilter<"Viewer"> | Date | string
    streakDays?: IntFilter<"Viewer"> | number
    streamChatId?: StringFilter<"Viewer"> | string
    totalMessages?: IntFilter<"Viewer"> | number
    Chat?: ChatListRelationFilter
    StreamChat?: XOR<StreamChatScalarRelationFilter, StreamChatWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id_userChannelId_streamChatId">

  export type ViewerOrderByWithAggregationInput = {
    id?: SortOrder
    userChannelId?: SortOrder
    username?: SortOrder
    hoursWatched?: SortOrderInput | SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    streakDays?: SortOrder
    streamChatId?: SortOrder
    totalMessages?: SortOrder
    _count?: ViewerCountOrderByAggregateInput
    _avg?: ViewerAvgOrderByAggregateInput
    _max?: ViewerMaxOrderByAggregateInput
    _min?: ViewerMinOrderByAggregateInput
    _sum?: ViewerSumOrderByAggregateInput
  }

  export type ViewerScalarWhereWithAggregatesInput = {
    AND?: ViewerScalarWhereWithAggregatesInput | ViewerScalarWhereWithAggregatesInput[]
    OR?: ViewerScalarWhereWithAggregatesInput[]
    NOT?: ViewerScalarWhereWithAggregatesInput | ViewerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Viewer"> | string
    userChannelId?: StringWithAggregatesFilter<"Viewer"> | string
    username?: StringWithAggregatesFilter<"Viewer"> | string
    hoursWatched?: FloatNullableWithAggregatesFilter<"Viewer"> | number | null
    points?: IntWithAggregatesFilter<"Viewer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Viewer"> | Date | string
    streakDays?: IntWithAggregatesFilter<"Viewer"> | number
    streamChatId?: StringWithAggregatesFilter<"Viewer"> | string
    totalMessages?: IntWithAggregatesFilter<"Viewer"> | number
  }

  export type AnalyticsCreateInput = {
    id: string
    totalViews: number
    subscribers: number
    engagementRate: number
    timestamp?: Date | string
    User: UserCreateNestedOneWithoutAnalyticsInput
  }

  export type AnalyticsUncheckedCreateInput = {
    id: string
    userId: string
    totalViews: number
    subscribers: number
    engagementRate: number
    timestamp?: Date | string
  }

  export type AnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    subscribers?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type AnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    subscribers?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateManyInput = {
    id: string
    userId: string
    totalViews: number
    subscribers: number
    engagementRate: number
    timestamp?: Date | string
  }

  export type AnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    subscribers?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    subscribers?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id: string
    chatType: string
    message: string
    timestamp?: Date | string
    username: string
    StreamChat: StreamChatCreateNestedOneWithoutChatInput
    User: UserCreateNestedOneWithoutChatInput
    Viewer?: ViewerCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id: string
    userId: string
    chatType: string
    message: string
    timestamp?: Date | string
    liveChatId: string
    viewerId?: string | null
    username: string
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    StreamChat?: StreamChatUpdateOneRequiredWithoutChatNestedInput
    User?: UserUpdateOneRequiredWithoutChatNestedInput
    Viewer?: ViewerUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    liveChatId?: StringFieldUpdateOperationsInput | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ChatCreateManyInput = {
    id: string
    userId: string
    chatType: string
    message: string
    timestamp?: Date | string
    liveChatId: string
    viewerId?: string | null
    username: string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    liveChatId?: StringFieldUpdateOperationsInput | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
  }

  export type CustomCommandCreateInput = {
    id?: string
    trigger: string
    response: string
    description?: string
    enabled?: boolean
    createdAt?: Date | string
    cooldown: number
    requiredUserLevel: $Enums.Role
    User: UserCreateNestedOneWithoutCustomCommandInput
  }

  export type CustomCommandUncheckedCreateInput = {
    id?: string
    userId: string
    trigger: string
    response: string
    description?: string
    enabled?: boolean
    createdAt?: Date | string
    cooldown: number
    requiredUserLevel: $Enums.Role
  }

  export type CustomCommandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldown?: IntFieldUpdateOperationsInput | number
    requiredUserLevel?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    User?: UserUpdateOneRequiredWithoutCustomCommandNestedInput
  }

  export type CustomCommandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldown?: IntFieldUpdateOperationsInput | number
    requiredUserLevel?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CustomCommandCreateManyInput = {
    id?: string
    userId: string
    trigger: string
    response: string
    description?: string
    enabled?: boolean
    createdAt?: Date | string
    cooldown: number
    requiredUserLevel: $Enums.Role
  }

  export type CustomCommandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldown?: IntFieldUpdateOperationsInput | number
    requiredUserLevel?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CustomCommandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldown?: IntFieldUpdateOperationsInput | number
    requiredUserLevel?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type StreamChatCreateInput = {
    id: string
    title?: string | null
    streamUrl?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    totalDonations?: number | null
    totalViews?: number | null
    Chat?: ChatCreateNestedManyWithoutStreamChatInput
    User: UserCreateNestedOneWithoutStreamChatInput
    Viewer?: ViewerCreateNestedManyWithoutStreamChatInput
  }

  export type StreamChatUncheckedCreateInput = {
    id: string
    userId: string
    title?: string | null
    streamUrl?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    totalDonations?: number | null
    totalViews?: number | null
    Chat?: ChatUncheckedCreateNestedManyWithoutStreamChatInput
    Viewer?: ViewerUncheckedCreateNestedManyWithoutStreamChatInput
  }

  export type StreamChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    Chat?: ChatUpdateManyWithoutStreamChatNestedInput
    User?: UserUpdateOneRequiredWithoutStreamChatNestedInput
    Viewer?: ViewerUpdateManyWithoutStreamChatNestedInput
  }

  export type StreamChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    Chat?: ChatUncheckedUpdateManyWithoutStreamChatNestedInput
    Viewer?: ViewerUncheckedUpdateManyWithoutStreamChatNestedInput
  }

  export type StreamChatCreateManyInput = {
    id: string
    userId: string
    title?: string | null
    streamUrl?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    totalDonations?: number | null
    totalViews?: number | null
  }

  export type StreamChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StreamChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsCreateNestedManyWithoutUserInput
    Chat?: ChatCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityCreateNestedOneWithoutUserInput
    Viewer?: ViewerCreateNestedManyWithoutUserInput
    Moderation?: ModerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatUncheckedCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityUncheckedCreateNestedOneWithoutUserInput
    Viewer?: ViewerUncheckedCreateNestedManyWithoutUserInput
    Moderation?: ModerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    Chat?: ChatUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUncheckedUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUncheckedUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUncheckedUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModerationCreateInput = {
    id?: string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
    User: UserCreateNestedOneWithoutModerationInput
  }

  export type ModerationUncheckedCreateInput = {
    id?: string
    userId: string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModerationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
    User?: UserUpdateOneRequiredWithoutModerationNestedInput
  }

  export type ModerationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModerationCreateManyInput = {
    id?: string
    userId: string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModerationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModerationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserSecurityCreateInput = {
    accessToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    expiresAt?: Date | string | null
    User: UserCreateNestedOneWithoutUserSecurityInput
  }

  export type UserSecurityUncheckedCreateInput = {
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type UserSecurityUpdateInput = {
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutUserSecurityNestedInput
  }

  export type UserSecurityUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSecurityCreateManyInput = {
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type UserSecurityUpdateManyMutationInput = {
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSecurityUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ViewerCreateInput = {
    id: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    totalMessages?: number
    Chat?: ChatCreateNestedManyWithoutViewerInput
    StreamChat: StreamChatCreateNestedOneWithoutViewerInput
    User: UserCreateNestedOneWithoutViewerInput
  }

  export type ViewerUncheckedCreateInput = {
    id: string
    userChannelId: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    streamChatId: string
    totalMessages?: number
    Chat?: ChatUncheckedCreateNestedManyWithoutViewerInput
  }

  export type ViewerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    Chat?: ChatUpdateManyWithoutViewerNestedInput
    StreamChat?: StreamChatUpdateOneRequiredWithoutViewerNestedInput
    User?: UserUpdateOneRequiredWithoutViewerNestedInput
  }

  export type ViewerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userChannelId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    streamChatId?: StringFieldUpdateOperationsInput | string
    totalMessages?: IntFieldUpdateOperationsInput | number
    Chat?: ChatUncheckedUpdateManyWithoutViewerNestedInput
  }

  export type ViewerCreateManyInput = {
    id: string
    userChannelId: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    streamChatId: string
    totalMessages?: number
  }

  export type ViewerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
  }

  export type ViewerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userChannelId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    streamChatId?: StringFieldUpdateOperationsInput | string
    totalMessages?: IntFieldUpdateOperationsInput | number
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalViews?: SortOrder
    subscribers?: SortOrder
    engagementRate?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsAvgOrderByAggregateInput = {
    totalViews?: SortOrder
    subscribers?: SortOrder
    engagementRate?: SortOrder
  }

  export type AnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalViews?: SortOrder
    subscribers?: SortOrder
    engagementRate?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalViews?: SortOrder
    subscribers?: SortOrder
    engagementRate?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsSumOrderByAggregateInput = {
    totalViews?: SortOrder
    subscribers?: SortOrder
    engagementRate?: SortOrder
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

  export type StreamChatScalarRelationFilter = {
    is?: StreamChatWhereInput
    isNot?: StreamChatWhereInput
  }

  export type ViewerNullableScalarRelationFilter = {
    is?: ViewerWhereInput | null
    isNot?: ViewerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatType?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    liveChatId?: SortOrder
    viewerId?: SortOrder
    username?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatType?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    liveChatId?: SortOrder
    viewerId?: SortOrder
    username?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatType?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    liveChatId?: SortOrder
    viewerId?: SortOrder
    username?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CustomCommandCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    response?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    cooldown?: SortOrder
    requiredUserLevel?: SortOrder
  }

  export type CustomCommandAvgOrderByAggregateInput = {
    cooldown?: SortOrder
  }

  export type CustomCommandMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    response?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    cooldown?: SortOrder
    requiredUserLevel?: SortOrder
  }

  export type CustomCommandMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    response?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    cooldown?: SortOrder
    requiredUserLevel?: SortOrder
  }

  export type CustomCommandSumOrderByAggregateInput = {
    cooldown?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type ViewerListRelationFilter = {
    every?: ViewerWhereInput
    some?: ViewerWhereInput
    none?: ViewerWhereInput
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    streamUrl?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    totalDonations?: SortOrder
    totalViews?: SortOrder
  }

  export type StreamChatAvgOrderByAggregateInput = {
    duration?: SortOrder
    totalDonations?: SortOrder
    totalViews?: SortOrder
  }

  export type StreamChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    streamUrl?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    totalDonations?: SortOrder
    totalViews?: SortOrder
  }

  export type StreamChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    streamUrl?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    totalDonations?: SortOrder
    totalViews?: SortOrder
  }

  export type StreamChatSumOrderByAggregateInput = {
    duration?: SortOrder
    totalDonations?: SortOrder
    totalViews?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type AnalyticsListRelationFilter = {
    every?: AnalyticsWhereInput
    some?: AnalyticsWhereInput
    none?: AnalyticsWhereInput
  }

  export type CustomCommandListRelationFilter = {
    every?: CustomCommandWhereInput
    some?: CustomCommandWhereInput
    none?: CustomCommandWhereInput
  }

  export type StreamChatListRelationFilter = {
    every?: StreamChatWhereInput
    some?: StreamChatWhereInput
    none?: StreamChatWhereInput
  }

  export type UserSecurityNullableScalarRelationFilter = {
    is?: UserSecurityWhereInput | null
    isNot?: UserSecurityWhereInput | null
  }

  export type ModerationListRelationFilter = {
    every?: ModerationWhereInput
    some?: ModerationWhereInput
    none?: ModerationWhereInput
  }

  export type AnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomCommandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModerationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    settings?: SortOrder
    username?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ModerationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    general?: SortOrder
    spamConfig?: SortOrder
    links?: SortOrder
    blacklist?: SortOrder
  }

  export type ModerationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ModerationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserSecurityCountOrderByAggregateInput = {
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserSecurityMaxOrderByAggregateInput = {
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserSecurityMinOrderByAggregateInput = {
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type ViewerIdUserChannelIdStreamChatIdCompoundUniqueInput = {
    id: string
    userChannelId: string
    streamChatId: string
  }

  export type ViewerCountOrderByAggregateInput = {
    id?: SortOrder
    userChannelId?: SortOrder
    username?: SortOrder
    hoursWatched?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    streakDays?: SortOrder
    streamChatId?: SortOrder
    totalMessages?: SortOrder
  }

  export type ViewerAvgOrderByAggregateInput = {
    hoursWatched?: SortOrder
    points?: SortOrder
    streakDays?: SortOrder
    totalMessages?: SortOrder
  }

  export type ViewerMaxOrderByAggregateInput = {
    id?: SortOrder
    userChannelId?: SortOrder
    username?: SortOrder
    hoursWatched?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    streakDays?: SortOrder
    streamChatId?: SortOrder
    totalMessages?: SortOrder
  }

  export type ViewerMinOrderByAggregateInput = {
    id?: SortOrder
    userChannelId?: SortOrder
    username?: SortOrder
    hoursWatched?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    streakDays?: SortOrder
    streamChatId?: SortOrder
    totalMessages?: SortOrder
  }

  export type ViewerSumOrderByAggregateInput = {
    hoursWatched?: SortOrder
    points?: SortOrder
    streakDays?: SortOrder
    totalMessages?: SortOrder
  }

  export type UserCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalyticsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalyticsInput
    upsert?: UserUpsertWithoutAnalyticsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalyticsInput, UserUpdateWithoutAnalyticsInput>, UserUncheckedUpdateWithoutAnalyticsInput>
  }

  export type StreamChatCreateNestedOneWithoutChatInput = {
    create?: XOR<StreamChatCreateWithoutChatInput, StreamChatUncheckedCreateWithoutChatInput>
    connectOrCreate?: StreamChatCreateOrConnectWithoutChatInput
    connect?: StreamChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatInput = {
    create?: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInput
    connect?: UserWhereUniqueInput
  }

  export type ViewerCreateNestedOneWithoutChatInput = {
    create?: XOR<ViewerCreateWithoutChatInput, ViewerUncheckedCreateWithoutChatInput>
    connectOrCreate?: ViewerCreateOrConnectWithoutChatInput
    connect?: ViewerWhereUniqueInput
  }

  export type StreamChatUpdateOneRequiredWithoutChatNestedInput = {
    create?: XOR<StreamChatCreateWithoutChatInput, StreamChatUncheckedCreateWithoutChatInput>
    connectOrCreate?: StreamChatCreateOrConnectWithoutChatInput
    upsert?: StreamChatUpsertWithoutChatInput
    connect?: StreamChatWhereUniqueInput
    update?: XOR<XOR<StreamChatUpdateToOneWithWhereWithoutChatInput, StreamChatUpdateWithoutChatInput>, StreamChatUncheckedUpdateWithoutChatInput>
  }

  export type UserUpdateOneRequiredWithoutChatNestedInput = {
    create?: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInput
    upsert?: UserUpsertWithoutChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatInput, UserUpdateWithoutChatInput>, UserUncheckedUpdateWithoutChatInput>
  }

  export type ViewerUpdateOneWithoutChatNestedInput = {
    create?: XOR<ViewerCreateWithoutChatInput, ViewerUncheckedCreateWithoutChatInput>
    connectOrCreate?: ViewerCreateOrConnectWithoutChatInput
    upsert?: ViewerUpsertWithoutChatInput
    disconnect?: ViewerWhereInput | boolean
    delete?: ViewerWhereInput | boolean
    connect?: ViewerWhereUniqueInput
    update?: XOR<XOR<ViewerUpdateToOneWithWhereWithoutChatInput, ViewerUpdateWithoutChatInput>, ViewerUncheckedUpdateWithoutChatInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCreateNestedOneWithoutCustomCommandInput = {
    create?: XOR<UserCreateWithoutCustomCommandInput, UserUncheckedCreateWithoutCustomCommandInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomCommandInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneRequiredWithoutCustomCommandNestedInput = {
    create?: XOR<UserCreateWithoutCustomCommandInput, UserUncheckedCreateWithoutCustomCommandInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomCommandInput
    upsert?: UserUpsertWithoutCustomCommandInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomCommandInput, UserUpdateWithoutCustomCommandInput>, UserUncheckedUpdateWithoutCustomCommandInput>
  }

  export type ChatCreateNestedManyWithoutStreamChatInput = {
    create?: XOR<ChatCreateWithoutStreamChatInput, ChatUncheckedCreateWithoutStreamChatInput> | ChatCreateWithoutStreamChatInput[] | ChatUncheckedCreateWithoutStreamChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutStreamChatInput | ChatCreateOrConnectWithoutStreamChatInput[]
    createMany?: ChatCreateManyStreamChatInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStreamChatInput = {
    create?: XOR<UserCreateWithoutStreamChatInput, UserUncheckedCreateWithoutStreamChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamChatInput
    connect?: UserWhereUniqueInput
  }

  export type ViewerCreateNestedManyWithoutStreamChatInput = {
    create?: XOR<ViewerCreateWithoutStreamChatInput, ViewerUncheckedCreateWithoutStreamChatInput> | ViewerCreateWithoutStreamChatInput[] | ViewerUncheckedCreateWithoutStreamChatInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutStreamChatInput | ViewerCreateOrConnectWithoutStreamChatInput[]
    createMany?: ViewerCreateManyStreamChatInputEnvelope
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutStreamChatInput = {
    create?: XOR<ChatCreateWithoutStreamChatInput, ChatUncheckedCreateWithoutStreamChatInput> | ChatCreateWithoutStreamChatInput[] | ChatUncheckedCreateWithoutStreamChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutStreamChatInput | ChatCreateOrConnectWithoutStreamChatInput[]
    createMany?: ChatCreateManyStreamChatInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ViewerUncheckedCreateNestedManyWithoutStreamChatInput = {
    create?: XOR<ViewerCreateWithoutStreamChatInput, ViewerUncheckedCreateWithoutStreamChatInput> | ViewerCreateWithoutStreamChatInput[] | ViewerUncheckedCreateWithoutStreamChatInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutStreamChatInput | ViewerCreateOrConnectWithoutStreamChatInput[]
    createMany?: ViewerCreateManyStreamChatInputEnvelope
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatUpdateManyWithoutStreamChatNestedInput = {
    create?: XOR<ChatCreateWithoutStreamChatInput, ChatUncheckedCreateWithoutStreamChatInput> | ChatCreateWithoutStreamChatInput[] | ChatUncheckedCreateWithoutStreamChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutStreamChatInput | ChatCreateOrConnectWithoutStreamChatInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutStreamChatInput | ChatUpsertWithWhereUniqueWithoutStreamChatInput[]
    createMany?: ChatCreateManyStreamChatInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutStreamChatInput | ChatUpdateWithWhereUniqueWithoutStreamChatInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutStreamChatInput | ChatUpdateManyWithWhereWithoutStreamChatInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutStreamChatNestedInput = {
    create?: XOR<UserCreateWithoutStreamChatInput, UserUncheckedCreateWithoutStreamChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamChatInput
    upsert?: UserUpsertWithoutStreamChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreamChatInput, UserUpdateWithoutStreamChatInput>, UserUncheckedUpdateWithoutStreamChatInput>
  }

  export type ViewerUpdateManyWithoutStreamChatNestedInput = {
    create?: XOR<ViewerCreateWithoutStreamChatInput, ViewerUncheckedCreateWithoutStreamChatInput> | ViewerCreateWithoutStreamChatInput[] | ViewerUncheckedCreateWithoutStreamChatInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutStreamChatInput | ViewerCreateOrConnectWithoutStreamChatInput[]
    upsert?: ViewerUpsertWithWhereUniqueWithoutStreamChatInput | ViewerUpsertWithWhereUniqueWithoutStreamChatInput[]
    createMany?: ViewerCreateManyStreamChatInputEnvelope
    set?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    disconnect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    delete?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    update?: ViewerUpdateWithWhereUniqueWithoutStreamChatInput | ViewerUpdateWithWhereUniqueWithoutStreamChatInput[]
    updateMany?: ViewerUpdateManyWithWhereWithoutStreamChatInput | ViewerUpdateManyWithWhereWithoutStreamChatInput[]
    deleteMany?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutStreamChatNestedInput = {
    create?: XOR<ChatCreateWithoutStreamChatInput, ChatUncheckedCreateWithoutStreamChatInput> | ChatCreateWithoutStreamChatInput[] | ChatUncheckedCreateWithoutStreamChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutStreamChatInput | ChatCreateOrConnectWithoutStreamChatInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutStreamChatInput | ChatUpsertWithWhereUniqueWithoutStreamChatInput[]
    createMany?: ChatCreateManyStreamChatInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutStreamChatInput | ChatUpdateWithWhereUniqueWithoutStreamChatInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutStreamChatInput | ChatUpdateManyWithWhereWithoutStreamChatInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ViewerUncheckedUpdateManyWithoutStreamChatNestedInput = {
    create?: XOR<ViewerCreateWithoutStreamChatInput, ViewerUncheckedCreateWithoutStreamChatInput> | ViewerCreateWithoutStreamChatInput[] | ViewerUncheckedCreateWithoutStreamChatInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutStreamChatInput | ViewerCreateOrConnectWithoutStreamChatInput[]
    upsert?: ViewerUpsertWithWhereUniqueWithoutStreamChatInput | ViewerUpsertWithWhereUniqueWithoutStreamChatInput[]
    createMany?: ViewerCreateManyStreamChatInputEnvelope
    set?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    disconnect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    delete?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    update?: ViewerUpdateWithWhereUniqueWithoutStreamChatInput | ViewerUpdateWithWhereUniqueWithoutStreamChatInput[]
    updateMany?: ViewerUpdateManyWithWhereWithoutStreamChatInput | ViewerUpdateManyWithWhereWithoutStreamChatInput[]
    deleteMany?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
  }

  export type AnalyticsCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type CustomCommandCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomCommandCreateWithoutUserInput, CustomCommandUncheckedCreateWithoutUserInput> | CustomCommandCreateWithoutUserInput[] | CustomCommandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutUserInput | CustomCommandCreateOrConnectWithoutUserInput[]
    createMany?: CustomCommandCreateManyUserInputEnvelope
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
  }

  export type StreamChatCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamChatCreateWithoutUserInput, StreamChatUncheckedCreateWithoutUserInput> | StreamChatCreateWithoutUserInput[] | StreamChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamChatCreateOrConnectWithoutUserInput | StreamChatCreateOrConnectWithoutUserInput[]
    createMany?: StreamChatCreateManyUserInputEnvelope
    connect?: StreamChatWhereUniqueInput | StreamChatWhereUniqueInput[]
  }

  export type UserSecurityCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSecurityCreateWithoutUserInput, UserSecurityUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSecurityCreateOrConnectWithoutUserInput
    connect?: UserSecurityWhereUniqueInput
  }

  export type ViewerCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput> | ViewerCreateWithoutUserInput[] | ViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutUserInput | ViewerCreateOrConnectWithoutUserInput[]
    createMany?: ViewerCreateManyUserInputEnvelope
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
  }

  export type ModerationCreateNestedManyWithoutUserInput = {
    create?: XOR<ModerationCreateWithoutUserInput, ModerationUncheckedCreateWithoutUserInput> | ModerationCreateWithoutUserInput[] | ModerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModerationCreateOrConnectWithoutUserInput | ModerationCreateOrConnectWithoutUserInput[]
    createMany?: ModerationCreateManyUserInputEnvelope
    connect?: ModerationWhereUniqueInput | ModerationWhereUniqueInput[]
  }

  export type AnalyticsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type CustomCommandUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomCommandCreateWithoutUserInput, CustomCommandUncheckedCreateWithoutUserInput> | CustomCommandCreateWithoutUserInput[] | CustomCommandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutUserInput | CustomCommandCreateOrConnectWithoutUserInput[]
    createMany?: CustomCommandCreateManyUserInputEnvelope
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
  }

  export type StreamChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamChatCreateWithoutUserInput, StreamChatUncheckedCreateWithoutUserInput> | StreamChatCreateWithoutUserInput[] | StreamChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamChatCreateOrConnectWithoutUserInput | StreamChatCreateOrConnectWithoutUserInput[]
    createMany?: StreamChatCreateManyUserInputEnvelope
    connect?: StreamChatWhereUniqueInput | StreamChatWhereUniqueInput[]
  }

  export type UserSecurityUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSecurityCreateWithoutUserInput, UserSecurityUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSecurityCreateOrConnectWithoutUserInput
    connect?: UserSecurityWhereUniqueInput
  }

  export type ViewerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput> | ViewerCreateWithoutUserInput[] | ViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutUserInput | ViewerCreateOrConnectWithoutUserInput[]
    createMany?: ViewerCreateManyUserInputEnvelope
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
  }

  export type ModerationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ModerationCreateWithoutUserInput, ModerationUncheckedCreateWithoutUserInput> | ModerationCreateWithoutUserInput[] | ModerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModerationCreateOrConnectWithoutUserInput | ModerationCreateOrConnectWithoutUserInput[]
    createMany?: ModerationCreateManyUserInputEnvelope
    connect?: ModerationWhereUniqueInput | ModerationWhereUniqueInput[]
  }

  export type AnalyticsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutUserInput | AnalyticsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutUserInput | AnalyticsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutUserInput | AnalyticsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserInput | ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserInput | ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserInput | ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type CustomCommandUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomCommandCreateWithoutUserInput, CustomCommandUncheckedCreateWithoutUserInput> | CustomCommandCreateWithoutUserInput[] | CustomCommandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutUserInput | CustomCommandCreateOrConnectWithoutUserInput[]
    upsert?: CustomCommandUpsertWithWhereUniqueWithoutUserInput | CustomCommandUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomCommandCreateManyUserInputEnvelope
    set?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    disconnect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    delete?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    update?: CustomCommandUpdateWithWhereUniqueWithoutUserInput | CustomCommandUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomCommandUpdateManyWithWhereWithoutUserInput | CustomCommandUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomCommandScalarWhereInput | CustomCommandScalarWhereInput[]
  }

  export type StreamChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamChatCreateWithoutUserInput, StreamChatUncheckedCreateWithoutUserInput> | StreamChatCreateWithoutUserInput[] | StreamChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamChatCreateOrConnectWithoutUserInput | StreamChatCreateOrConnectWithoutUserInput[]
    upsert?: StreamChatUpsertWithWhereUniqueWithoutUserInput | StreamChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamChatCreateManyUserInputEnvelope
    set?: StreamChatWhereUniqueInput | StreamChatWhereUniqueInput[]
    disconnect?: StreamChatWhereUniqueInput | StreamChatWhereUniqueInput[]
    delete?: StreamChatWhereUniqueInput | StreamChatWhereUniqueInput[]
    connect?: StreamChatWhereUniqueInput | StreamChatWhereUniqueInput[]
    update?: StreamChatUpdateWithWhereUniqueWithoutUserInput | StreamChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamChatUpdateManyWithWhereWithoutUserInput | StreamChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamChatScalarWhereInput | StreamChatScalarWhereInput[]
  }

  export type UserSecurityUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSecurityCreateWithoutUserInput, UserSecurityUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSecurityCreateOrConnectWithoutUserInput
    upsert?: UserSecurityUpsertWithoutUserInput
    disconnect?: UserSecurityWhereInput | boolean
    delete?: UserSecurityWhereInput | boolean
    connect?: UserSecurityWhereUniqueInput
    update?: XOR<XOR<UserSecurityUpdateToOneWithWhereWithoutUserInput, UserSecurityUpdateWithoutUserInput>, UserSecurityUncheckedUpdateWithoutUserInput>
  }

  export type ViewerUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput> | ViewerCreateWithoutUserInput[] | ViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutUserInput | ViewerCreateOrConnectWithoutUserInput[]
    upsert?: ViewerUpsertWithWhereUniqueWithoutUserInput | ViewerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewerCreateManyUserInputEnvelope
    set?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    disconnect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    delete?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    update?: ViewerUpdateWithWhereUniqueWithoutUserInput | ViewerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewerUpdateManyWithWhereWithoutUserInput | ViewerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
  }

  export type ModerationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModerationCreateWithoutUserInput, ModerationUncheckedCreateWithoutUserInput> | ModerationCreateWithoutUserInput[] | ModerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModerationCreateOrConnectWithoutUserInput | ModerationCreateOrConnectWithoutUserInput[]
    upsert?: ModerationUpsertWithWhereUniqueWithoutUserInput | ModerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModerationCreateManyUserInputEnvelope
    set?: ModerationWhereUniqueInput | ModerationWhereUniqueInput[]
    disconnect?: ModerationWhereUniqueInput | ModerationWhereUniqueInput[]
    delete?: ModerationWhereUniqueInput | ModerationWhereUniqueInput[]
    connect?: ModerationWhereUniqueInput | ModerationWhereUniqueInput[]
    update?: ModerationUpdateWithWhereUniqueWithoutUserInput | ModerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModerationUpdateManyWithWhereWithoutUserInput | ModerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModerationScalarWhereInput | ModerationScalarWhereInput[]
  }

  export type AnalyticsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutUserInput | AnalyticsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutUserInput | AnalyticsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutUserInput | AnalyticsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserInput | ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserInput | ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserInput | ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type CustomCommandUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomCommandCreateWithoutUserInput, CustomCommandUncheckedCreateWithoutUserInput> | CustomCommandCreateWithoutUserInput[] | CustomCommandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutUserInput | CustomCommandCreateOrConnectWithoutUserInput[]
    upsert?: CustomCommandUpsertWithWhereUniqueWithoutUserInput | CustomCommandUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomCommandCreateManyUserInputEnvelope
    set?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    disconnect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    delete?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    update?: CustomCommandUpdateWithWhereUniqueWithoutUserInput | CustomCommandUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomCommandUpdateManyWithWhereWithoutUserInput | CustomCommandUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomCommandScalarWhereInput | CustomCommandScalarWhereInput[]
  }

  export type StreamChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamChatCreateWithoutUserInput, StreamChatUncheckedCreateWithoutUserInput> | StreamChatCreateWithoutUserInput[] | StreamChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamChatCreateOrConnectWithoutUserInput | StreamChatCreateOrConnectWithoutUserInput[]
    upsert?: StreamChatUpsertWithWhereUniqueWithoutUserInput | StreamChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamChatCreateManyUserInputEnvelope
    set?: StreamChatWhereUniqueInput | StreamChatWhereUniqueInput[]
    disconnect?: StreamChatWhereUniqueInput | StreamChatWhereUniqueInput[]
    delete?: StreamChatWhereUniqueInput | StreamChatWhereUniqueInput[]
    connect?: StreamChatWhereUniqueInput | StreamChatWhereUniqueInput[]
    update?: StreamChatUpdateWithWhereUniqueWithoutUserInput | StreamChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamChatUpdateManyWithWhereWithoutUserInput | StreamChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamChatScalarWhereInput | StreamChatScalarWhereInput[]
  }

  export type UserSecurityUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSecurityCreateWithoutUserInput, UserSecurityUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSecurityCreateOrConnectWithoutUserInput
    upsert?: UserSecurityUpsertWithoutUserInput
    disconnect?: UserSecurityWhereInput | boolean
    delete?: UserSecurityWhereInput | boolean
    connect?: UserSecurityWhereUniqueInput
    update?: XOR<XOR<UserSecurityUpdateToOneWithWhereWithoutUserInput, UserSecurityUpdateWithoutUserInput>, UserSecurityUncheckedUpdateWithoutUserInput>
  }

  export type ViewerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput> | ViewerCreateWithoutUserInput[] | ViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutUserInput | ViewerCreateOrConnectWithoutUserInput[]
    upsert?: ViewerUpsertWithWhereUniqueWithoutUserInput | ViewerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewerCreateManyUserInputEnvelope
    set?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    disconnect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    delete?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    update?: ViewerUpdateWithWhereUniqueWithoutUserInput | ViewerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewerUpdateManyWithWhereWithoutUserInput | ViewerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
  }

  export type ModerationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModerationCreateWithoutUserInput, ModerationUncheckedCreateWithoutUserInput> | ModerationCreateWithoutUserInput[] | ModerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModerationCreateOrConnectWithoutUserInput | ModerationCreateOrConnectWithoutUserInput[]
    upsert?: ModerationUpsertWithWhereUniqueWithoutUserInput | ModerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModerationCreateManyUserInputEnvelope
    set?: ModerationWhereUniqueInput | ModerationWhereUniqueInput[]
    disconnect?: ModerationWhereUniqueInput | ModerationWhereUniqueInput[]
    delete?: ModerationWhereUniqueInput | ModerationWhereUniqueInput[]
    connect?: ModerationWhereUniqueInput | ModerationWhereUniqueInput[]
    update?: ModerationUpdateWithWhereUniqueWithoutUserInput | ModerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModerationUpdateManyWithWhereWithoutUserInput | ModerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModerationScalarWhereInput | ModerationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutModerationInput = {
    create?: XOR<UserCreateWithoutModerationInput, UserUncheckedCreateWithoutModerationInput>
    connectOrCreate?: UserCreateOrConnectWithoutModerationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModerationNestedInput = {
    create?: XOR<UserCreateWithoutModerationInput, UserUncheckedCreateWithoutModerationInput>
    connectOrCreate?: UserCreateOrConnectWithoutModerationInput
    upsert?: UserUpsertWithoutModerationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModerationInput, UserUpdateWithoutModerationInput>, UserUncheckedUpdateWithoutModerationInput>
  }

  export type UserCreateNestedOneWithoutUserSecurityInput = {
    create?: XOR<UserCreateWithoutUserSecurityInput, UserUncheckedCreateWithoutUserSecurityInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSecurityInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSecurityNestedInput = {
    create?: XOR<UserCreateWithoutUserSecurityInput, UserUncheckedCreateWithoutUserSecurityInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSecurityInput
    upsert?: UserUpsertWithoutUserSecurityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSecurityInput, UserUpdateWithoutUserSecurityInput>, UserUncheckedUpdateWithoutUserSecurityInput>
  }

  export type ChatCreateNestedManyWithoutViewerInput = {
    create?: XOR<ChatCreateWithoutViewerInput, ChatUncheckedCreateWithoutViewerInput> | ChatCreateWithoutViewerInput[] | ChatUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutViewerInput | ChatCreateOrConnectWithoutViewerInput[]
    createMany?: ChatCreateManyViewerInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type StreamChatCreateNestedOneWithoutViewerInput = {
    create?: XOR<StreamChatCreateWithoutViewerInput, StreamChatUncheckedCreateWithoutViewerInput>
    connectOrCreate?: StreamChatCreateOrConnectWithoutViewerInput
    connect?: StreamChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutViewerInput = {
    create?: XOR<UserCreateWithoutViewerInput, UserUncheckedCreateWithoutViewerInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewerInput
    connect?: UserWhereUniqueInput
  }

  export type ChatUncheckedCreateNestedManyWithoutViewerInput = {
    create?: XOR<ChatCreateWithoutViewerInput, ChatUncheckedCreateWithoutViewerInput> | ChatCreateWithoutViewerInput[] | ChatUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutViewerInput | ChatCreateOrConnectWithoutViewerInput[]
    createMany?: ChatCreateManyViewerInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUpdateManyWithoutViewerNestedInput = {
    create?: XOR<ChatCreateWithoutViewerInput, ChatUncheckedCreateWithoutViewerInput> | ChatCreateWithoutViewerInput[] | ChatUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutViewerInput | ChatCreateOrConnectWithoutViewerInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutViewerInput | ChatUpsertWithWhereUniqueWithoutViewerInput[]
    createMany?: ChatCreateManyViewerInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutViewerInput | ChatUpdateWithWhereUniqueWithoutViewerInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutViewerInput | ChatUpdateManyWithWhereWithoutViewerInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type StreamChatUpdateOneRequiredWithoutViewerNestedInput = {
    create?: XOR<StreamChatCreateWithoutViewerInput, StreamChatUncheckedCreateWithoutViewerInput>
    connectOrCreate?: StreamChatCreateOrConnectWithoutViewerInput
    upsert?: StreamChatUpsertWithoutViewerInput
    connect?: StreamChatWhereUniqueInput
    update?: XOR<XOR<StreamChatUpdateToOneWithWhereWithoutViewerInput, StreamChatUpdateWithoutViewerInput>, StreamChatUncheckedUpdateWithoutViewerInput>
  }

  export type UserUpdateOneRequiredWithoutViewerNestedInput = {
    create?: XOR<UserCreateWithoutViewerInput, UserUncheckedCreateWithoutViewerInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewerInput
    upsert?: UserUpsertWithoutViewerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewerInput, UserUpdateWithoutViewerInput>, UserUncheckedUpdateWithoutViewerInput>
  }

  export type ChatUncheckedUpdateManyWithoutViewerNestedInput = {
    create?: XOR<ChatCreateWithoutViewerInput, ChatUncheckedCreateWithoutViewerInput> | ChatCreateWithoutViewerInput[] | ChatUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutViewerInput | ChatCreateOrConnectWithoutViewerInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutViewerInput | ChatUpsertWithWhereUniqueWithoutViewerInput[]
    createMany?: ChatCreateManyViewerInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutViewerInput | ChatUpdateWithWhereUniqueWithoutViewerInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutViewerInput | ChatUpdateManyWithWhereWithoutViewerInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type UserCreateWithoutAnalyticsInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Chat?: ChatCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityCreateNestedOneWithoutUserInput
    Viewer?: ViewerCreateNestedManyWithoutUserInput
    Moderation?: ModerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnalyticsInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatUncheckedCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityUncheckedCreateNestedOneWithoutUserInput
    Viewer?: ViewerUncheckedCreateNestedManyWithoutUserInput
    Moderation?: ModerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnalyticsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
  }

  export type UserUpsertWithoutAnalyticsInput = {
    update: XOR<UserUpdateWithoutAnalyticsInput, UserUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalyticsInput, UserUncheckedUpdateWithoutAnalyticsInput>
  }

  export type UserUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Chat?: ChatUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUncheckedUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUncheckedUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUncheckedUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StreamChatCreateWithoutChatInput = {
    id: string
    title?: string | null
    streamUrl?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    totalDonations?: number | null
    totalViews?: number | null
    User: UserCreateNestedOneWithoutStreamChatInput
    Viewer?: ViewerCreateNestedManyWithoutStreamChatInput
  }

  export type StreamChatUncheckedCreateWithoutChatInput = {
    id: string
    userId: string
    title?: string | null
    streamUrl?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    totalDonations?: number | null
    totalViews?: number | null
    Viewer?: ViewerUncheckedCreateNestedManyWithoutStreamChatInput
  }

  export type StreamChatCreateOrConnectWithoutChatInput = {
    where: StreamChatWhereUniqueInput
    create: XOR<StreamChatCreateWithoutChatInput, StreamChatUncheckedCreateWithoutChatInput>
  }

  export type UserCreateWithoutChatInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityCreateNestedOneWithoutUserInput
    Viewer?: ViewerCreateNestedManyWithoutUserInput
    Moderation?: ModerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatUncheckedCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityUncheckedCreateNestedOneWithoutUserInput
    Viewer?: ViewerUncheckedCreateNestedManyWithoutUserInput
    Moderation?: ModerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
  }

  export type ViewerCreateWithoutChatInput = {
    id: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    totalMessages?: number
    StreamChat: StreamChatCreateNestedOneWithoutViewerInput
    User: UserCreateNestedOneWithoutViewerInput
  }

  export type ViewerUncheckedCreateWithoutChatInput = {
    id: string
    userChannelId: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    streamChatId: string
    totalMessages?: number
  }

  export type ViewerCreateOrConnectWithoutChatInput = {
    where: ViewerWhereUniqueInput
    create: XOR<ViewerCreateWithoutChatInput, ViewerUncheckedCreateWithoutChatInput>
  }

  export type StreamChatUpsertWithoutChatInput = {
    update: XOR<StreamChatUpdateWithoutChatInput, StreamChatUncheckedUpdateWithoutChatInput>
    create: XOR<StreamChatCreateWithoutChatInput, StreamChatUncheckedCreateWithoutChatInput>
    where?: StreamChatWhereInput
  }

  export type StreamChatUpdateToOneWithWhereWithoutChatInput = {
    where?: StreamChatWhereInput
    data: XOR<StreamChatUpdateWithoutChatInput, StreamChatUncheckedUpdateWithoutChatInput>
  }

  export type StreamChatUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateOneRequiredWithoutStreamChatNestedInput
    Viewer?: ViewerUpdateManyWithoutStreamChatNestedInput
  }

  export type StreamChatUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    Viewer?: ViewerUncheckedUpdateManyWithoutStreamChatNestedInput
  }

  export type UserUpsertWithoutChatInput = {
    update: XOR<UserUpdateWithoutChatInput, UserUncheckedUpdateWithoutChatInput>
    create: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatInput, UserUncheckedUpdateWithoutChatInput>
  }

  export type UserUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUncheckedUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUncheckedUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUncheckedUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ViewerUpsertWithoutChatInput = {
    update: XOR<ViewerUpdateWithoutChatInput, ViewerUncheckedUpdateWithoutChatInput>
    create: XOR<ViewerCreateWithoutChatInput, ViewerUncheckedCreateWithoutChatInput>
    where?: ViewerWhereInput
  }

  export type ViewerUpdateToOneWithWhereWithoutChatInput = {
    where?: ViewerWhereInput
    data: XOR<ViewerUpdateWithoutChatInput, ViewerUncheckedUpdateWithoutChatInput>
  }

  export type ViewerUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    StreamChat?: StreamChatUpdateOneRequiredWithoutViewerNestedInput
    User?: UserUpdateOneRequiredWithoutViewerNestedInput
  }

  export type ViewerUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userChannelId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    streamChatId?: StringFieldUpdateOperationsInput | string
    totalMessages?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutCustomCommandInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsCreateNestedManyWithoutUserInput
    Chat?: ChatCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityCreateNestedOneWithoutUserInput
    Viewer?: ViewerCreateNestedManyWithoutUserInput
    Moderation?: ModerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomCommandInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatUncheckedCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityUncheckedCreateNestedOneWithoutUserInput
    Viewer?: ViewerUncheckedCreateNestedManyWithoutUserInput
    Moderation?: ModerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomCommandInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomCommandInput, UserUncheckedCreateWithoutCustomCommandInput>
  }

  export type UserUpsertWithoutCustomCommandInput = {
    update: XOR<UserUpdateWithoutCustomCommandInput, UserUncheckedUpdateWithoutCustomCommandInput>
    create: XOR<UserCreateWithoutCustomCommandInput, UserUncheckedCreateWithoutCustomCommandInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomCommandInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomCommandInput, UserUncheckedUpdateWithoutCustomCommandInput>
  }

  export type UserUpdateWithoutCustomCommandInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    Chat?: ChatUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomCommandInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUncheckedUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUncheckedUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUncheckedUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatCreateWithoutStreamChatInput = {
    id: string
    chatType: string
    message: string
    timestamp?: Date | string
    username: string
    User: UserCreateNestedOneWithoutChatInput
    Viewer?: ViewerCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutStreamChatInput = {
    id: string
    userId: string
    chatType: string
    message: string
    timestamp?: Date | string
    viewerId?: string | null
    username: string
  }

  export type ChatCreateOrConnectWithoutStreamChatInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutStreamChatInput, ChatUncheckedCreateWithoutStreamChatInput>
  }

  export type ChatCreateManyStreamChatInputEnvelope = {
    data: ChatCreateManyStreamChatInput | ChatCreateManyStreamChatInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStreamChatInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsCreateNestedManyWithoutUserInput
    Chat?: ChatCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityCreateNestedOneWithoutUserInput
    Viewer?: ViewerCreateNestedManyWithoutUserInput
    Moderation?: ModerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStreamChatInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityUncheckedCreateNestedOneWithoutUserInput
    Viewer?: ViewerUncheckedCreateNestedManyWithoutUserInput
    Moderation?: ModerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStreamChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreamChatInput, UserUncheckedCreateWithoutStreamChatInput>
  }

  export type ViewerCreateWithoutStreamChatInput = {
    id: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    totalMessages?: number
    Chat?: ChatCreateNestedManyWithoutViewerInput
    User: UserCreateNestedOneWithoutViewerInput
  }

  export type ViewerUncheckedCreateWithoutStreamChatInput = {
    id: string
    userChannelId: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    totalMessages?: number
    Chat?: ChatUncheckedCreateNestedManyWithoutViewerInput
  }

  export type ViewerCreateOrConnectWithoutStreamChatInput = {
    where: ViewerWhereUniqueInput
    create: XOR<ViewerCreateWithoutStreamChatInput, ViewerUncheckedCreateWithoutStreamChatInput>
  }

  export type ViewerCreateManyStreamChatInputEnvelope = {
    data: ViewerCreateManyStreamChatInput | ViewerCreateManyStreamChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithWhereUniqueWithoutStreamChatInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutStreamChatInput, ChatUncheckedUpdateWithoutStreamChatInput>
    create: XOR<ChatCreateWithoutStreamChatInput, ChatUncheckedCreateWithoutStreamChatInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutStreamChatInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutStreamChatInput, ChatUncheckedUpdateWithoutStreamChatInput>
  }

  export type ChatUpdateManyWithWhereWithoutStreamChatInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutStreamChatInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    chatType?: StringFilter<"Chat"> | string
    message?: StringFilter<"Chat"> | string
    timestamp?: DateTimeFilter<"Chat"> | Date | string
    liveChatId?: StringFilter<"Chat"> | string
    viewerId?: StringNullableFilter<"Chat"> | string | null
    username?: StringFilter<"Chat"> | string
  }

  export type UserUpsertWithoutStreamChatInput = {
    update: XOR<UserUpdateWithoutStreamChatInput, UserUncheckedUpdateWithoutStreamChatInput>
    create: XOR<UserCreateWithoutStreamChatInput, UserUncheckedCreateWithoutStreamChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreamChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreamChatInput, UserUncheckedUpdateWithoutStreamChatInput>
  }

  export type UserUpdateWithoutStreamChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    Chat?: ChatUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStreamChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUncheckedUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUncheckedUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ViewerUpsertWithWhereUniqueWithoutStreamChatInput = {
    where: ViewerWhereUniqueInput
    update: XOR<ViewerUpdateWithoutStreamChatInput, ViewerUncheckedUpdateWithoutStreamChatInput>
    create: XOR<ViewerCreateWithoutStreamChatInput, ViewerUncheckedCreateWithoutStreamChatInput>
  }

  export type ViewerUpdateWithWhereUniqueWithoutStreamChatInput = {
    where: ViewerWhereUniqueInput
    data: XOR<ViewerUpdateWithoutStreamChatInput, ViewerUncheckedUpdateWithoutStreamChatInput>
  }

  export type ViewerUpdateManyWithWhereWithoutStreamChatInput = {
    where: ViewerScalarWhereInput
    data: XOR<ViewerUpdateManyMutationInput, ViewerUncheckedUpdateManyWithoutStreamChatInput>
  }

  export type ViewerScalarWhereInput = {
    AND?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
    OR?: ViewerScalarWhereInput[]
    NOT?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
    id?: StringFilter<"Viewer"> | string
    userChannelId?: StringFilter<"Viewer"> | string
    username?: StringFilter<"Viewer"> | string
    hoursWatched?: FloatNullableFilter<"Viewer"> | number | null
    points?: IntFilter<"Viewer"> | number
    createdAt?: DateTimeFilter<"Viewer"> | Date | string
    streakDays?: IntFilter<"Viewer"> | number
    streamChatId?: StringFilter<"Viewer"> | string
    totalMessages?: IntFilter<"Viewer"> | number
  }

  export type AnalyticsCreateWithoutUserInput = {
    id: string
    totalViews: number
    subscribers: number
    engagementRate: number
    timestamp?: Date | string
  }

  export type AnalyticsUncheckedCreateWithoutUserInput = {
    id: string
    totalViews: number
    subscribers: number
    engagementRate: number
    timestamp?: Date | string
  }

  export type AnalyticsCreateOrConnectWithoutUserInput = {
    where: AnalyticsWhereUniqueInput
    create: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput>
  }

  export type AnalyticsCreateManyUserInputEnvelope = {
    data: AnalyticsCreateManyUserInput | AnalyticsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutUserInput = {
    id: string
    chatType: string
    message: string
    timestamp?: Date | string
    username: string
    StreamChat: StreamChatCreateNestedOneWithoutChatInput
    Viewer?: ViewerCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUserInput = {
    id: string
    chatType: string
    message: string
    timestamp?: Date | string
    liveChatId: string
    viewerId?: string | null
    username: string
  }

  export type ChatCreateOrConnectWithoutUserInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatCreateManyUserInputEnvelope = {
    data: ChatCreateManyUserInput | ChatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomCommandCreateWithoutUserInput = {
    id?: string
    trigger: string
    response: string
    description?: string
    enabled?: boolean
    createdAt?: Date | string
    cooldown: number
    requiredUserLevel: $Enums.Role
  }

  export type CustomCommandUncheckedCreateWithoutUserInput = {
    id?: string
    trigger: string
    response: string
    description?: string
    enabled?: boolean
    createdAt?: Date | string
    cooldown: number
    requiredUserLevel: $Enums.Role
  }

  export type CustomCommandCreateOrConnectWithoutUserInput = {
    where: CustomCommandWhereUniqueInput
    create: XOR<CustomCommandCreateWithoutUserInput, CustomCommandUncheckedCreateWithoutUserInput>
  }

  export type CustomCommandCreateManyUserInputEnvelope = {
    data: CustomCommandCreateManyUserInput | CustomCommandCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StreamChatCreateWithoutUserInput = {
    id: string
    title?: string | null
    streamUrl?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    totalDonations?: number | null
    totalViews?: number | null
    Chat?: ChatCreateNestedManyWithoutStreamChatInput
    Viewer?: ViewerCreateNestedManyWithoutStreamChatInput
  }

  export type StreamChatUncheckedCreateWithoutUserInput = {
    id: string
    title?: string | null
    streamUrl?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    totalDonations?: number | null
    totalViews?: number | null
    Chat?: ChatUncheckedCreateNestedManyWithoutStreamChatInput
    Viewer?: ViewerUncheckedCreateNestedManyWithoutStreamChatInput
  }

  export type StreamChatCreateOrConnectWithoutUserInput = {
    where: StreamChatWhereUniqueInput
    create: XOR<StreamChatCreateWithoutUserInput, StreamChatUncheckedCreateWithoutUserInput>
  }

  export type StreamChatCreateManyUserInputEnvelope = {
    data: StreamChatCreateManyUserInput | StreamChatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSecurityCreateWithoutUserInput = {
    accessToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type UserSecurityUncheckedCreateWithoutUserInput = {
    accessToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type UserSecurityCreateOrConnectWithoutUserInput = {
    where: UserSecurityWhereUniqueInput
    create: XOR<UserSecurityCreateWithoutUserInput, UserSecurityUncheckedCreateWithoutUserInput>
  }

  export type ViewerCreateWithoutUserInput = {
    id: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    totalMessages?: number
    Chat?: ChatCreateNestedManyWithoutViewerInput
    StreamChat: StreamChatCreateNestedOneWithoutViewerInput
  }

  export type ViewerUncheckedCreateWithoutUserInput = {
    id: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    streamChatId: string
    totalMessages?: number
    Chat?: ChatUncheckedCreateNestedManyWithoutViewerInput
  }

  export type ViewerCreateOrConnectWithoutUserInput = {
    where: ViewerWhereUniqueInput
    create: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput>
  }

  export type ViewerCreateManyUserInputEnvelope = {
    data: ViewerCreateManyUserInput | ViewerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ModerationCreateWithoutUserInput = {
    id?: string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModerationUncheckedCreateWithoutUserInput = {
    id?: string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModerationCreateOrConnectWithoutUserInput = {
    where: ModerationWhereUniqueInput
    create: XOR<ModerationCreateWithoutUserInput, ModerationUncheckedCreateWithoutUserInput>
  }

  export type ModerationCreateManyUserInputEnvelope = {
    data: ModerationCreateManyUserInput | ModerationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalyticsWhereUniqueInput
    update: XOR<AnalyticsUpdateWithoutUserInput, AnalyticsUncheckedUpdateWithoutUserInput>
    create: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput>
  }

  export type AnalyticsUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalyticsWhereUniqueInput
    data: XOR<AnalyticsUpdateWithoutUserInput, AnalyticsUncheckedUpdateWithoutUserInput>
  }

  export type AnalyticsUpdateManyWithWhereWithoutUserInput = {
    where: AnalyticsScalarWhereInput
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalyticsScalarWhereInput = {
    AND?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
    OR?: AnalyticsScalarWhereInput[]
    NOT?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
    id?: StringFilter<"Analytics"> | string
    userId?: StringFilter<"Analytics"> | string
    totalViews?: IntFilter<"Analytics"> | number
    subscribers?: IntFilter<"Analytics"> | number
    engagementRate?: FloatFilter<"Analytics"> | number
    timestamp?: DateTimeFilter<"Analytics"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
  }

  export type ChatUpdateManyWithWhereWithoutUserInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomCommandUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomCommandWhereUniqueInput
    update: XOR<CustomCommandUpdateWithoutUserInput, CustomCommandUncheckedUpdateWithoutUserInput>
    create: XOR<CustomCommandCreateWithoutUserInput, CustomCommandUncheckedCreateWithoutUserInput>
  }

  export type CustomCommandUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomCommandWhereUniqueInput
    data: XOR<CustomCommandUpdateWithoutUserInput, CustomCommandUncheckedUpdateWithoutUserInput>
  }

  export type CustomCommandUpdateManyWithWhereWithoutUserInput = {
    where: CustomCommandScalarWhereInput
    data: XOR<CustomCommandUpdateManyMutationInput, CustomCommandUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomCommandScalarWhereInput = {
    AND?: CustomCommandScalarWhereInput | CustomCommandScalarWhereInput[]
    OR?: CustomCommandScalarWhereInput[]
    NOT?: CustomCommandScalarWhereInput | CustomCommandScalarWhereInput[]
    id?: StringFilter<"CustomCommand"> | string
    userId?: StringFilter<"CustomCommand"> | string
    trigger?: StringFilter<"CustomCommand"> | string
    response?: StringFilter<"CustomCommand"> | string
    description?: StringFilter<"CustomCommand"> | string
    enabled?: BoolFilter<"CustomCommand"> | boolean
    createdAt?: DateTimeFilter<"CustomCommand"> | Date | string
    cooldown?: IntFilter<"CustomCommand"> | number
    requiredUserLevel?: EnumRoleFilter<"CustomCommand"> | $Enums.Role
  }

  export type StreamChatUpsertWithWhereUniqueWithoutUserInput = {
    where: StreamChatWhereUniqueInput
    update: XOR<StreamChatUpdateWithoutUserInput, StreamChatUncheckedUpdateWithoutUserInput>
    create: XOR<StreamChatCreateWithoutUserInput, StreamChatUncheckedCreateWithoutUserInput>
  }

  export type StreamChatUpdateWithWhereUniqueWithoutUserInput = {
    where: StreamChatWhereUniqueInput
    data: XOR<StreamChatUpdateWithoutUserInput, StreamChatUncheckedUpdateWithoutUserInput>
  }

  export type StreamChatUpdateManyWithWhereWithoutUserInput = {
    where: StreamChatScalarWhereInput
    data: XOR<StreamChatUpdateManyMutationInput, StreamChatUncheckedUpdateManyWithoutUserInput>
  }

  export type StreamChatScalarWhereInput = {
    AND?: StreamChatScalarWhereInput | StreamChatScalarWhereInput[]
    OR?: StreamChatScalarWhereInput[]
    NOT?: StreamChatScalarWhereInput | StreamChatScalarWhereInput[]
    id?: StringFilter<"StreamChat"> | string
    userId?: StringFilter<"StreamChat"> | string
    title?: StringNullableFilter<"StreamChat"> | string | null
    streamUrl?: StringNullableFilter<"StreamChat"> | string | null
    startTime?: DateTimeFilter<"StreamChat"> | Date | string
    endTime?: DateTimeNullableFilter<"StreamChat"> | Date | string | null
    duration?: IntNullableFilter<"StreamChat"> | number | null
    totalDonations?: FloatNullableFilter<"StreamChat"> | number | null
    totalViews?: IntNullableFilter<"StreamChat"> | number | null
  }

  export type UserSecurityUpsertWithoutUserInput = {
    update: XOR<UserSecurityUpdateWithoutUserInput, UserSecurityUncheckedUpdateWithoutUserInput>
    create: XOR<UserSecurityCreateWithoutUserInput, UserSecurityUncheckedCreateWithoutUserInput>
    where?: UserSecurityWhereInput
  }

  export type UserSecurityUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSecurityWhereInput
    data: XOR<UserSecurityUpdateWithoutUserInput, UserSecurityUncheckedUpdateWithoutUserInput>
  }

  export type UserSecurityUpdateWithoutUserInput = {
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSecurityUncheckedUpdateWithoutUserInput = {
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ViewerUpsertWithWhereUniqueWithoutUserInput = {
    where: ViewerWhereUniqueInput
    update: XOR<ViewerUpdateWithoutUserInput, ViewerUncheckedUpdateWithoutUserInput>
    create: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput>
  }

  export type ViewerUpdateWithWhereUniqueWithoutUserInput = {
    where: ViewerWhereUniqueInput
    data: XOR<ViewerUpdateWithoutUserInput, ViewerUncheckedUpdateWithoutUserInput>
  }

  export type ViewerUpdateManyWithWhereWithoutUserInput = {
    where: ViewerScalarWhereInput
    data: XOR<ViewerUpdateManyMutationInput, ViewerUncheckedUpdateManyWithoutUserInput>
  }

  export type ModerationUpsertWithWhereUniqueWithoutUserInput = {
    where: ModerationWhereUniqueInput
    update: XOR<ModerationUpdateWithoutUserInput, ModerationUncheckedUpdateWithoutUserInput>
    create: XOR<ModerationCreateWithoutUserInput, ModerationUncheckedCreateWithoutUserInput>
  }

  export type ModerationUpdateWithWhereUniqueWithoutUserInput = {
    where: ModerationWhereUniqueInput
    data: XOR<ModerationUpdateWithoutUserInput, ModerationUncheckedUpdateWithoutUserInput>
  }

  export type ModerationUpdateManyWithWhereWithoutUserInput = {
    where: ModerationScalarWhereInput
    data: XOR<ModerationUpdateManyMutationInput, ModerationUncheckedUpdateManyWithoutUserInput>
  }

  export type ModerationScalarWhereInput = {
    AND?: ModerationScalarWhereInput | ModerationScalarWhereInput[]
    OR?: ModerationScalarWhereInput[]
    NOT?: ModerationScalarWhereInput | ModerationScalarWhereInput[]
    id?: StringFilter<"Moderation"> | string
    userId?: StringFilter<"Moderation"> | string
    general?: JsonNullableFilter<"Moderation">
    spamConfig?: JsonNullableFilter<"Moderation">
    links?: JsonNullableFilter<"Moderation">
    blacklist?: JsonNullableFilter<"Moderation">
  }

  export type UserCreateWithoutModerationInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsCreateNestedManyWithoutUserInput
    Chat?: ChatCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityCreateNestedOneWithoutUserInput
    Viewer?: ViewerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModerationInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatUncheckedCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityUncheckedCreateNestedOneWithoutUserInput
    Viewer?: ViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModerationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModerationInput, UserUncheckedCreateWithoutModerationInput>
  }

  export type UserUpsertWithoutModerationInput = {
    update: XOR<UserUpdateWithoutModerationInput, UserUncheckedUpdateWithoutModerationInput>
    create: XOR<UserCreateWithoutModerationInput, UserUncheckedCreateWithoutModerationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModerationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModerationInput, UserUncheckedUpdateWithoutModerationInput>
  }

  export type UserUpdateWithoutModerationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    Chat?: ChatUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModerationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUncheckedUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUncheckedUpdateOneWithoutUserNestedInput
    Viewer?: ViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserSecurityInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsCreateNestedManyWithoutUserInput
    Chat?: ChatCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatCreateNestedManyWithoutUserInput
    Viewer?: ViewerCreateNestedManyWithoutUserInput
    Moderation?: ModerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSecurityInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatUncheckedCreateNestedManyWithoutUserInput
    Viewer?: ViewerUncheckedCreateNestedManyWithoutUserInput
    Moderation?: ModerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSecurityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSecurityInput, UserUncheckedCreateWithoutUserSecurityInput>
  }

  export type UserUpsertWithoutUserSecurityInput = {
    update: XOR<UserUpdateWithoutUserSecurityInput, UserUncheckedUpdateWithoutUserSecurityInput>
    create: XOR<UserCreateWithoutUserSecurityInput, UserUncheckedCreateWithoutUserSecurityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSecurityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSecurityInput, UserUncheckedUpdateWithoutUserSecurityInput>
  }

  export type UserUpdateWithoutUserSecurityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    Chat?: ChatUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUpdateManyWithoutUserNestedInput
    Viewer?: ViewerUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSecurityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUncheckedUpdateManyWithoutUserNestedInput
    Viewer?: ViewerUncheckedUpdateManyWithoutUserNestedInput
    Moderation?: ModerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatCreateWithoutViewerInput = {
    id: string
    chatType: string
    message: string
    timestamp?: Date | string
    username: string
    StreamChat: StreamChatCreateNestedOneWithoutChatInput
    User: UserCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutViewerInput = {
    id: string
    userId: string
    chatType: string
    message: string
    timestamp?: Date | string
    liveChatId: string
    username: string
  }

  export type ChatCreateOrConnectWithoutViewerInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutViewerInput, ChatUncheckedCreateWithoutViewerInput>
  }

  export type ChatCreateManyViewerInputEnvelope = {
    data: ChatCreateManyViewerInput | ChatCreateManyViewerInput[]
    skipDuplicates?: boolean
  }

  export type StreamChatCreateWithoutViewerInput = {
    id: string
    title?: string | null
    streamUrl?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    totalDonations?: number | null
    totalViews?: number | null
    Chat?: ChatCreateNestedManyWithoutStreamChatInput
    User: UserCreateNestedOneWithoutStreamChatInput
  }

  export type StreamChatUncheckedCreateWithoutViewerInput = {
    id: string
    userId: string
    title?: string | null
    streamUrl?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    totalDonations?: number | null
    totalViews?: number | null
    Chat?: ChatUncheckedCreateNestedManyWithoutStreamChatInput
  }

  export type StreamChatCreateOrConnectWithoutViewerInput = {
    where: StreamChatWhereUniqueInput
    create: XOR<StreamChatCreateWithoutViewerInput, StreamChatUncheckedCreateWithoutViewerInput>
  }

  export type UserCreateWithoutViewerInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsCreateNestedManyWithoutUserInput
    Chat?: ChatCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityCreateNestedOneWithoutUserInput
    Moderation?: ModerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutViewerInput = {
    id: string
    email?: string | null
    createdAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: string | null
    Analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutUserInput
    StreamChat?: StreamChatUncheckedCreateNestedManyWithoutUserInput
    UserSecurity?: UserSecurityUncheckedCreateNestedOneWithoutUserInput
    Moderation?: ModerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutViewerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewerInput, UserUncheckedCreateWithoutViewerInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutViewerInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutViewerInput, ChatUncheckedUpdateWithoutViewerInput>
    create: XOR<ChatCreateWithoutViewerInput, ChatUncheckedCreateWithoutViewerInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutViewerInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutViewerInput, ChatUncheckedUpdateWithoutViewerInput>
  }

  export type ChatUpdateManyWithWhereWithoutViewerInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutViewerInput>
  }

  export type StreamChatUpsertWithoutViewerInput = {
    update: XOR<StreamChatUpdateWithoutViewerInput, StreamChatUncheckedUpdateWithoutViewerInput>
    create: XOR<StreamChatCreateWithoutViewerInput, StreamChatUncheckedCreateWithoutViewerInput>
    where?: StreamChatWhereInput
  }

  export type StreamChatUpdateToOneWithWhereWithoutViewerInput = {
    where?: StreamChatWhereInput
    data: XOR<StreamChatUpdateWithoutViewerInput, StreamChatUncheckedUpdateWithoutViewerInput>
  }

  export type StreamChatUpdateWithoutViewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    Chat?: ChatUpdateManyWithoutStreamChatNestedInput
    User?: UserUpdateOneRequiredWithoutStreamChatNestedInput
  }

  export type StreamChatUncheckedUpdateWithoutViewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    Chat?: ChatUncheckedUpdateManyWithoutStreamChatNestedInput
  }

  export type UserUpsertWithoutViewerInput = {
    update: XOR<UserUpdateWithoutViewerInput, UserUncheckedUpdateWithoutViewerInput>
    create: XOR<UserCreateWithoutViewerInput, UserUncheckedCreateWithoutViewerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewerInput, UserUncheckedUpdateWithoutViewerInput>
  }

  export type UserUpdateWithoutViewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    Chat?: ChatUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUpdateOneWithoutUserNestedInput
    Moderation?: ModerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutViewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutUserNestedInput
    StreamChat?: StreamChatUncheckedUpdateManyWithoutUserNestedInput
    UserSecurity?: UserSecurityUncheckedUpdateOneWithoutUserNestedInput
    Moderation?: ModerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatCreateManyStreamChatInput = {
    id: string
    userId: string
    chatType: string
    message: string
    timestamp?: Date | string
    viewerId?: string | null
    username: string
  }

  export type ViewerCreateManyStreamChatInput = {
    id: string
    userChannelId: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    totalMessages?: number
  }

  export type ChatUpdateWithoutStreamChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutChatNestedInput
    Viewer?: ViewerUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutStreamChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUncheckedUpdateManyWithoutStreamChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ViewerUpdateWithoutStreamChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    Chat?: ChatUpdateManyWithoutViewerNestedInput
    User?: UserUpdateOneRequiredWithoutViewerNestedInput
  }

  export type ViewerUncheckedUpdateWithoutStreamChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userChannelId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    Chat?: ChatUncheckedUpdateManyWithoutViewerNestedInput
  }

  export type ViewerUncheckedUpdateManyWithoutStreamChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userChannelId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
  }

  export type AnalyticsCreateManyUserInput = {
    id: string
    totalViews: number
    subscribers: number
    engagementRate: number
    timestamp?: Date | string
  }

  export type ChatCreateManyUserInput = {
    id: string
    chatType: string
    message: string
    timestamp?: Date | string
    liveChatId: string
    viewerId?: string | null
    username: string
  }

  export type CustomCommandCreateManyUserInput = {
    id?: string
    trigger: string
    response: string
    description?: string
    enabled?: boolean
    createdAt?: Date | string
    cooldown: number
    requiredUserLevel: $Enums.Role
  }

  export type StreamChatCreateManyUserInput = {
    id: string
    title?: string | null
    streamUrl?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    totalDonations?: number | null
    totalViews?: number | null
  }

  export type ViewerCreateManyUserInput = {
    id: string
    username: string
    hoursWatched?: number | null
    points?: number
    createdAt?: Date | string
    streakDays?: number
    streamChatId: string
    totalMessages?: number
  }

  export type ModerationCreateManyUserInput = {
    id?: string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalyticsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    subscribers?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    subscribers?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    subscribers?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    StreamChat?: StreamChatUpdateOneRequiredWithoutChatNestedInput
    Viewer?: ViewerUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    liveChatId?: StringFieldUpdateOperationsInput | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    liveChatId?: StringFieldUpdateOperationsInput | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
  }

  export type CustomCommandUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldown?: IntFieldUpdateOperationsInput | number
    requiredUserLevel?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CustomCommandUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldown?: IntFieldUpdateOperationsInput | number
    requiredUserLevel?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CustomCommandUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldown?: IntFieldUpdateOperationsInput | number
    requiredUserLevel?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type StreamChatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    Chat?: ChatUpdateManyWithoutStreamChatNestedInput
    Viewer?: ViewerUpdateManyWithoutStreamChatNestedInput
  }

  export type StreamChatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    Chat?: ChatUncheckedUpdateManyWithoutStreamChatNestedInput
    Viewer?: ViewerUncheckedUpdateManyWithoutStreamChatNestedInput
  }

  export type StreamChatUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    totalDonations?: NullableFloatFieldUpdateOperationsInput | number | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    Chat?: ChatUpdateManyWithoutViewerNestedInput
    StreamChat?: StreamChatUpdateOneRequiredWithoutViewerNestedInput
  }

  export type ViewerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    streamChatId?: StringFieldUpdateOperationsInput | string
    totalMessages?: IntFieldUpdateOperationsInput | number
    Chat?: ChatUncheckedUpdateManyWithoutViewerNestedInput
  }

  export type ViewerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hoursWatched?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakDays?: IntFieldUpdateOperationsInput | number
    streamChatId?: StringFieldUpdateOperationsInput | string
    totalMessages?: IntFieldUpdateOperationsInput | number
  }

  export type ModerationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModerationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ModerationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    general?: NullableJsonNullValueInput | InputJsonValue
    spamConfig?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    blacklist?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChatCreateManyViewerInput = {
    id: string
    userId: string
    chatType: string
    message: string
    timestamp?: Date | string
    liveChatId: string
    username: string
  }

  export type ChatUpdateWithoutViewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    StreamChat?: StreamChatUpdateOneRequiredWithoutChatNestedInput
    User?: UserUpdateOneRequiredWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutViewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    liveChatId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUncheckedUpdateManyWithoutViewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    liveChatId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
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