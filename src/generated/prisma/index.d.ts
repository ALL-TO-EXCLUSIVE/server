
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
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Family
 * 
 */
export type Family = $Result.DefaultSelection<Prisma.$FamilyPayload>
/**
 * Model Village
 * 
 */
export type Village = $Result.DefaultSelection<Prisma.$VillagePayload>
/**
 * Model VillageAdmin
 * 
 */
export type VillageAdmin = $Result.DefaultSelection<Prisma.$VillageAdminPayload>
/**
 * Model SuperAdmin
 * 
 */
export type SuperAdmin = $Result.DefaultSelection<Prisma.$SuperAdminPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  MEMBER: 'MEMBER',
  VILLAGE_ADMIN: 'VILLAGE_ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
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
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
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
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.family`: Exposes CRUD operations for the **Family** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Families
    * const families = await prisma.family.findMany()
    * ```
    */
  get family(): Prisma.FamilyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.village`: Exposes CRUD operations for the **Village** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Villages
    * const villages = await prisma.village.findMany()
    * ```
    */
  get village(): Prisma.VillageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.villageAdmin`: Exposes CRUD operations for the **VillageAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VillageAdmins
    * const villageAdmins = await prisma.villageAdmin.findMany()
    * ```
    */
  get villageAdmin(): Prisma.VillageAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.superAdmin`: Exposes CRUD operations for the **SuperAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperAdmins
    * const superAdmins = await prisma.superAdmin.findMany()
    * ```
    */
  get superAdmin(): Prisma.SuperAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Member: 'Member',
    Family: 'Family',
    Village: 'Village',
    VillageAdmin: 'VillageAdmin',
    SuperAdmin: 'SuperAdmin',
    Event: 'Event'
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
      modelProps: "member" | "family" | "village" | "villageAdmin" | "superAdmin" | "event"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Family: {
        payload: Prisma.$FamilyPayload<ExtArgs>
        fields: Prisma.FamilyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findFirst: {
            args: Prisma.FamilyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findMany: {
            args: Prisma.FamilyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>[]
          }
          create: {
            args: Prisma.FamilyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          createMany: {
            args: Prisma.FamilyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FamilyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          update: {
            args: Prisma.FamilyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          deleteMany: {
            args: Prisma.FamilyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FamilyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          aggregate: {
            args: Prisma.FamilyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamily>
          }
          groupBy: {
            args: Prisma.FamilyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyCountAggregateOutputType> | number
          }
        }
      }
      Village: {
        payload: Prisma.$VillagePayload<ExtArgs>
        fields: Prisma.VillageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          findFirst: {
            args: Prisma.VillageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          findMany: {
            args: Prisma.VillageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>[]
          }
          create: {
            args: Prisma.VillageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          createMany: {
            args: Prisma.VillageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VillageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          update: {
            args: Prisma.VillageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          deleteMany: {
            args: Prisma.VillageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VillageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          aggregate: {
            args: Prisma.VillageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillage>
          }
          groupBy: {
            args: Prisma.VillageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VillageCountArgs<ExtArgs>
            result: $Utils.Optional<VillageCountAggregateOutputType> | number
          }
        }
      }
      VillageAdmin: {
        payload: Prisma.$VillageAdminPayload<ExtArgs>
        fields: Prisma.VillageAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillageAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillageAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageAdminPayload>
          }
          findFirst: {
            args: Prisma.VillageAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillageAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageAdminPayload>
          }
          findMany: {
            args: Prisma.VillageAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageAdminPayload>[]
          }
          create: {
            args: Prisma.VillageAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageAdminPayload>
          }
          createMany: {
            args: Prisma.VillageAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VillageAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageAdminPayload>
          }
          update: {
            args: Prisma.VillageAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageAdminPayload>
          }
          deleteMany: {
            args: Prisma.VillageAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillageAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VillageAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageAdminPayload>
          }
          aggregate: {
            args: Prisma.VillageAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillageAdmin>
          }
          groupBy: {
            args: Prisma.VillageAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillageAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.VillageAdminCountArgs<ExtArgs>
            result: $Utils.Optional<VillageAdminCountAggregateOutputType> | number
          }
        }
      }
      SuperAdmin: {
        payload: Prisma.$SuperAdminPayload<ExtArgs>
        fields: Prisma.SuperAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findFirst: {
            args: Prisma.SuperAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findMany: {
            args: Prisma.SuperAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          create: {
            args: Prisma.SuperAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          createMany: {
            args: Prisma.SuperAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SuperAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          update: {
            args: Prisma.SuperAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          deleteMany: {
            args: Prisma.SuperAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuperAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          aggregate: {
            args: Prisma.SuperAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperAdmin>
          }
          groupBy: {
            args: Prisma.SuperAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperAdminCountArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
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
    member?: MemberOmit
    family?: FamilyOmit
    village?: VillageOmit
    villageAdmin?: VillageAdminOmit
    superAdmin?: SuperAdminOmit
    event?: EventOmit
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
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    familyMembers: number
    eventsPosted: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyMembers?: boolean | MemberCountOutputTypeCountFamilyMembersArgs
    eventsPosted?: boolean | MemberCountOutputTypeCountEventsPostedArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountFamilyMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountEventsPostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type FamilyCountOutputType
   */

  export type FamilyCountOutputType = {
    members: number
  }

  export type FamilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | FamilyCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyCountOutputType
     */
    select?: FamilyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * Count Type VillageCountOutputType
   */

  export type VillageCountOutputType = {
    members: number
    admins: number
    families: number
  }

  export type VillageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | VillageCountOutputTypeCountMembersArgs
    admins?: boolean | VillageCountOutputTypeCountAdminsArgs
    families?: boolean | VillageCountOutputTypeCountFamiliesArgs
  }

  // Custom InputTypes
  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageCountOutputType
     */
    select?: VillageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillageAdminWhereInput
  }

  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeCountFamiliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    dob: Date | null
    gender: $Enums.Gender | null
    phone: string | null
    email: string | null
    address: string | null
    business: string | null
    job: string | null
    education: string | null
    bloodGroup: string | null
    maternalSurname: string | null
    maternalVillage: string | null
    maritalStatus: string | null
    relationToHead: string | null
    photoUrl: string | null
    familyId: string | null
    familyHeadId: string | null
    villageId: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    dob: Date | null
    gender: $Enums.Gender | null
    phone: string | null
    email: string | null
    address: string | null
    business: string | null
    job: string | null
    education: string | null
    bloodGroup: string | null
    maternalSurname: string | null
    maternalVillage: string | null
    maritalStatus: string | null
    relationToHead: string | null
    photoUrl: string | null
    familyId: string | null
    familyHeadId: string | null
    villageId: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    name: number
    password: number
    dob: number
    gender: number
    phone: number
    email: number
    address: number
    business: number
    job: number
    education: number
    bloodGroup: number
    maternalSurname: number
    maternalVillage: number
    maritalStatus: number
    relationToHead: number
    photoUrl: number
    familyId: number
    familyHeadId: number
    villageId: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    dob?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    business?: true
    job?: true
    education?: true
    bloodGroup?: true
    maternalSurname?: true
    maternalVillage?: true
    maritalStatus?: true
    relationToHead?: true
    photoUrl?: true
    familyId?: true
    familyHeadId?: true
    villageId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    dob?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    business?: true
    job?: true
    education?: true
    bloodGroup?: true
    maternalSurname?: true
    maternalVillage?: true
    maritalStatus?: true
    relationToHead?: true
    photoUrl?: true
    familyId?: true
    familyHeadId?: true
    villageId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    dob?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    business?: true
    job?: true
    education?: true
    bloodGroup?: true
    maternalSurname?: true
    maternalVillage?: true
    maritalStatus?: true
    relationToHead?: true
    photoUrl?: true
    familyId?: true
    familyHeadId?: true
    villageId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    name: string
    password: string
    dob: Date | null
    gender: $Enums.Gender | null
    phone: string
    email: string | null
    address: string | null
    business: string | null
    job: string | null
    education: string | null
    bloodGroup: string | null
    maternalSurname: string | null
    maternalVillage: string | null
    maritalStatus: string | null
    relationToHead: string | null
    photoUrl: string | null
    familyId: string | null
    familyHeadId: string | null
    villageId: string | null
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    dob?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    business?: boolean
    job?: boolean
    education?: boolean
    bloodGroup?: boolean
    maternalSurname?: boolean
    maternalVillage?: boolean
    maritalStatus?: boolean
    relationToHead?: boolean
    photoUrl?: boolean
    familyId?: boolean
    familyHeadId?: boolean
    villageId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    family?: boolean | Member$familyArgs<ExtArgs>
    familyHead?: boolean | Member$familyHeadArgs<ExtArgs>
    familyMembers?: boolean | Member$familyMembersArgs<ExtArgs>
    village?: boolean | Member$villageArgs<ExtArgs>
    villageAdmin?: boolean | Member$villageAdminArgs<ExtArgs>
    superAdmin?: boolean | Member$superAdminArgs<ExtArgs>
    eventsPosted?: boolean | Member$eventsPostedArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>



  export type MemberSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    dob?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    business?: boolean
    job?: boolean
    education?: boolean
    bloodGroup?: boolean
    maternalSurname?: boolean
    maternalVillage?: boolean
    maritalStatus?: boolean
    relationToHead?: boolean
    photoUrl?: boolean
    familyId?: boolean
    familyHeadId?: boolean
    villageId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "dob" | "gender" | "phone" | "email" | "address" | "business" | "job" | "education" | "bloodGroup" | "maternalSurname" | "maternalVillage" | "maritalStatus" | "relationToHead" | "photoUrl" | "familyId" | "familyHeadId" | "villageId" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | Member$familyArgs<ExtArgs>
    familyHead?: boolean | Member$familyHeadArgs<ExtArgs>
    familyMembers?: boolean | Member$familyMembersArgs<ExtArgs>
    village?: boolean | Member$villageArgs<ExtArgs>
    villageAdmin?: boolean | Member$villageAdminArgs<ExtArgs>
    superAdmin?: boolean | Member$superAdminArgs<ExtArgs>
    eventsPosted?: boolean | Member$eventsPostedArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      family: Prisma.$FamilyPayload<ExtArgs> | null
      familyHead: Prisma.$MemberPayload<ExtArgs> | null
      familyMembers: Prisma.$MemberPayload<ExtArgs>[]
      village: Prisma.$VillagePayload<ExtArgs> | null
      villageAdmin: Prisma.$VillageAdminPayload<ExtArgs> | null
      superAdmin: Prisma.$SuperAdminPayload<ExtArgs> | null
      eventsPosted: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      dob: Date | null
      gender: $Enums.Gender | null
      phone: string
      email: string | null
      address: string | null
      business: string | null
      job: string | null
      education: string | null
      bloodGroup: string | null
      maternalSurname: string | null
      maternalVillage: string | null
      maritalStatus: string | null
      relationToHead: string | null
      photoUrl: string | null
      familyId: string | null
      familyHeadId: string | null
      villageId: string | null
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    family<T extends Member$familyArgs<ExtArgs> = {}>(args?: Subset<T, Member$familyArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    familyHead<T extends Member$familyHeadArgs<ExtArgs> = {}>(args?: Subset<T, Member$familyHeadArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    familyMembers<T extends Member$familyMembersArgs<ExtArgs> = {}>(args?: Subset<T, Member$familyMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    village<T extends Member$villageArgs<ExtArgs> = {}>(args?: Subset<T, Member$villageArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    villageAdmin<T extends Member$villageAdminArgs<ExtArgs> = {}>(args?: Subset<T, Member$villageAdminArgs<ExtArgs>>): Prisma__VillageAdminClient<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    superAdmin<T extends Member$superAdminArgs<ExtArgs> = {}>(args?: Subset<T, Member$superAdminArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    eventsPosted<T extends Member$eventsPostedArgs<ExtArgs> = {}>(args?: Subset<T, Member$eventsPostedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly password: FieldRef<"Member", 'String'>
    readonly dob: FieldRef<"Member", 'DateTime'>
    readonly gender: FieldRef<"Member", 'Gender'>
    readonly phone: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly address: FieldRef<"Member", 'String'>
    readonly business: FieldRef<"Member", 'String'>
    readonly job: FieldRef<"Member", 'String'>
    readonly education: FieldRef<"Member", 'String'>
    readonly bloodGroup: FieldRef<"Member", 'String'>
    readonly maternalSurname: FieldRef<"Member", 'String'>
    readonly maternalVillage: FieldRef<"Member", 'String'>
    readonly maritalStatus: FieldRef<"Member", 'String'>
    readonly relationToHead: FieldRef<"Member", 'String'>
    readonly photoUrl: FieldRef<"Member", 'String'>
    readonly familyId: FieldRef<"Member", 'String'>
    readonly familyHeadId: FieldRef<"Member", 'String'>
    readonly villageId: FieldRef<"Member", 'String'>
    readonly role: FieldRef<"Member", 'Role'>
    readonly isActive: FieldRef<"Member", 'Boolean'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.family
   */
  export type Member$familyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    where?: FamilyWhereInput
  }

  /**
   * Member.familyHead
   */
  export type Member$familyHeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Member.familyMembers
   */
  export type Member$familyMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member.village
   */
  export type Member$villageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    where?: VillageWhereInput
  }

  /**
   * Member.villageAdmin
   */
  export type Member$villageAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    where?: VillageAdminWhereInput
  }

  /**
   * Member.superAdmin
   */
  export type Member$superAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
    where?: SuperAdminWhereInput
  }

  /**
   * Member.eventsPosted
   */
  export type Member$eventsPostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Family
   */

  export type AggregateFamily = {
    _count: FamilyCountAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  export type FamilyMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    villageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamilyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    villageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamilyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    villageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FamilyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamilyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamilyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FamilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Family to aggregate.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Families
    **/
    _count?: true | FamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMaxAggregateInputType
  }

  export type GetFamilyAggregateType<T extends FamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily[P]>
      : GetScalarType<T[P], AggregateFamily[P]>
  }




  export type FamilyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyWhereInput
    orderBy?: FamilyOrderByWithAggregationInput | FamilyOrderByWithAggregationInput[]
    by: FamilyScalarFieldEnum[] | FamilyScalarFieldEnum
    having?: FamilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyCountAggregateInputType | true
    _min?: FamilyMinAggregateInputType
    _max?: FamilyMaxAggregateInputType
  }

  export type FamilyGroupByOutputType = {
    id: string
    name: string | null
    address: string | null
    villageId: string
    createdAt: Date
    updatedAt: Date
    _count: FamilyCountAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  type GetFamilyGroupByPayload<T extends FamilyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyGroupByOutputType[P]>
        }
      >
    >


  export type FamilySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    villageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    village?: boolean | VillageDefaultArgs<ExtArgs>
    members?: boolean | Family$membersArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["family"]>



  export type FamilySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    villageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FamilyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "villageId" | "createdAt" | "updatedAt", ExtArgs["result"]["family"]>
  export type FamilyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    village?: boolean | VillageDefaultArgs<ExtArgs>
    members?: boolean | Family$membersArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FamilyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Family"
    objects: {
      village: Prisma.$VillagePayload<ExtArgs>
      members: Prisma.$MemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      address: string | null
      villageId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["family"]>
    composites: {}
  }

  type FamilyGetPayload<S extends boolean | null | undefined | FamilyDefaultArgs> = $Result.GetResult<Prisma.$FamilyPayload, S>

  type FamilyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FamilyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilyCountAggregateInputType | true
    }

  export interface FamilyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Family'], meta: { name: 'Family' } }
    /**
     * Find zero or one Family that matches the filter.
     * @param {FamilyFindUniqueArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilyFindUniqueArgs>(args: SelectSubset<T, FamilyFindUniqueArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Family that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FamilyFindUniqueOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilyFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilyFindFirstArgs>(args?: SelectSubset<T, FamilyFindFirstArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilyFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Families
     * const families = await prisma.family.findMany()
     * 
     * // Get first 10 Families
     * const families = await prisma.family.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyWithIdOnly = await prisma.family.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamilyFindManyArgs>(args?: SelectSubset<T, FamilyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Family.
     * @param {FamilyCreateArgs} args - Arguments to create a Family.
     * @example
     * // Create one Family
     * const Family = await prisma.family.create({
     *   data: {
     *     // ... data to create a Family
     *   }
     * })
     * 
     */
    create<T extends FamilyCreateArgs>(args: SelectSubset<T, FamilyCreateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Families.
     * @param {FamilyCreateManyArgs} args - Arguments to create many Families.
     * @example
     * // Create many Families
     * const family = await prisma.family.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilyCreateManyArgs>(args?: SelectSubset<T, FamilyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Family.
     * @param {FamilyDeleteArgs} args - Arguments to delete one Family.
     * @example
     * // Delete one Family
     * const Family = await prisma.family.delete({
     *   where: {
     *     // ... filter to delete one Family
     *   }
     * })
     * 
     */
    delete<T extends FamilyDeleteArgs>(args: SelectSubset<T, FamilyDeleteArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Family.
     * @param {FamilyUpdateArgs} args - Arguments to update one Family.
     * @example
     * // Update one Family
     * const family = await prisma.family.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilyUpdateArgs>(args: SelectSubset<T, FamilyUpdateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Families.
     * @param {FamilyDeleteManyArgs} args - Arguments to filter Families to delete.
     * @example
     * // Delete a few Families
     * const { count } = await prisma.family.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilyDeleteManyArgs>(args?: SelectSubset<T, FamilyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Families
     * const family = await prisma.family.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilyUpdateManyArgs>(args: SelectSubset<T, FamilyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Family.
     * @param {FamilyUpsertArgs} args - Arguments to update or create a Family.
     * @example
     * // Update or create a Family
     * const family = await prisma.family.upsert({
     *   create: {
     *     // ... data to create a Family
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family we want to update
     *   }
     * })
     */
    upsert<T extends FamilyUpsertArgs>(args: SelectSubset<T, FamilyUpsertArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyCountArgs} args - Arguments to filter Families to count.
     * @example
     * // Count the number of Families
     * const count = await prisma.family.count({
     *   where: {
     *     // ... the filter for the Families we want to count
     *   }
     * })
    **/
    count<T extends FamilyCountArgs>(
      args?: Subset<T, FamilyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamilyAggregateArgs>(args: Subset<T, FamilyAggregateArgs>): Prisma.PrismaPromise<GetFamilyAggregateType<T>>

    /**
     * Group by Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupByArgs} args - Group by arguments.
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
      T extends FamilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyGroupByArgs['orderBy'] }
        : { orderBy?: FamilyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Family model
   */
  readonly fields: FamilyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Family.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    village<T extends VillageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VillageDefaultArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Family$membersArgs<ExtArgs> = {}>(args?: Subset<T, Family$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Family model
   */
  interface FamilyFieldRefs {
    readonly id: FieldRef<"Family", 'String'>
    readonly name: FieldRef<"Family", 'String'>
    readonly address: FieldRef<"Family", 'String'>
    readonly villageId: FieldRef<"Family", 'String'>
    readonly createdAt: FieldRef<"Family", 'DateTime'>
    readonly updatedAt: FieldRef<"Family", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Family findUnique
   */
  export type FamilyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findUniqueOrThrow
   */
  export type FamilyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findFirst
   */
  export type FamilyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findFirstOrThrow
   */
  export type FamilyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findMany
   */
  export type FamilyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Families to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family create
   */
  export type FamilyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to create a Family.
     */
    data: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
  }

  /**
   * Family createMany
   */
  export type FamilyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Families.
     */
    data: FamilyCreateManyInput | FamilyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Family update
   */
  export type FamilyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to update a Family.
     */
    data: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
    /**
     * Choose, which Family to update.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family updateMany
   */
  export type FamilyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Families.
     */
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyInput>
    /**
     * Filter which Families to update
     */
    where?: FamilyWhereInput
    /**
     * Limit how many Families to update.
     */
    limit?: number
  }

  /**
   * Family upsert
   */
  export type FamilyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The filter to search for the Family to update in case it exists.
     */
    where: FamilyWhereUniqueInput
    /**
     * In case the Family found by the `where` argument doesn't exist, create a new Family with this data.
     */
    create: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
    /**
     * In case the Family was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
  }

  /**
   * Family delete
   */
  export type FamilyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter which Family to delete.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family deleteMany
   */
  export type FamilyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Families to delete
     */
    where?: FamilyWhereInput
    /**
     * Limit how many Families to delete.
     */
    limit?: number
  }

  /**
   * Family.members
   */
  export type Family$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Family without action
   */
  export type FamilyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
  }


  /**
   * Model Village
   */

  export type AggregateVillage = {
    _count: VillageCountAggregateOutputType | null
    _min: VillageMinAggregateOutputType | null
    _max: VillageMaxAggregateOutputType | null
  }

  export type VillageMinAggregateOutputType = {
    id: string | null
    name: string | null
    district: string | null
    state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VillageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    district: string | null
    state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VillageCountAggregateOutputType = {
    id: number
    name: number
    district: number
    state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VillageMinAggregateInputType = {
    id?: true
    name?: true
    district?: true
    state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VillageMaxAggregateInputType = {
    id?: true
    name?: true
    district?: true
    state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VillageCountAggregateInputType = {
    id?: true
    name?: true
    district?: true
    state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VillageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Village to aggregate.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Villages
    **/
    _count?: true | VillageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillageMaxAggregateInputType
  }

  export type GetVillageAggregateType<T extends VillageAggregateArgs> = {
        [P in keyof T & keyof AggregateVillage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillage[P]>
      : GetScalarType<T[P], AggregateVillage[P]>
  }




  export type VillageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillageWhereInput
    orderBy?: VillageOrderByWithAggregationInput | VillageOrderByWithAggregationInput[]
    by: VillageScalarFieldEnum[] | VillageScalarFieldEnum
    having?: VillageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillageCountAggregateInputType | true
    _min?: VillageMinAggregateInputType
    _max?: VillageMaxAggregateInputType
  }

  export type VillageGroupByOutputType = {
    id: string
    name: string
    district: string | null
    state: string | null
    createdAt: Date
    updatedAt: Date
    _count: VillageCountAggregateOutputType | null
    _min: VillageMinAggregateOutputType | null
    _max: VillageMaxAggregateOutputType | null
  }

  type GetVillageGroupByPayload<T extends VillageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillageGroupByOutputType[P]>
            : GetScalarType<T[P], VillageGroupByOutputType[P]>
        }
      >
    >


  export type VillageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    district?: boolean
    state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Village$membersArgs<ExtArgs>
    admins?: boolean | Village$adminsArgs<ExtArgs>
    families?: boolean | Village$familiesArgs<ExtArgs>
    _count?: boolean | VillageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["village"]>



  export type VillageSelectScalar = {
    id?: boolean
    name?: boolean
    district?: boolean
    state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VillageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "district" | "state" | "createdAt" | "updatedAt", ExtArgs["result"]["village"]>
  export type VillageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Village$membersArgs<ExtArgs>
    admins?: boolean | Village$adminsArgs<ExtArgs>
    families?: boolean | Village$familiesArgs<ExtArgs>
    _count?: boolean | VillageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VillagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Village"
    objects: {
      members: Prisma.$MemberPayload<ExtArgs>[]
      admins: Prisma.$VillageAdminPayload<ExtArgs>[]
      families: Prisma.$FamilyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      district: string | null
      state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["village"]>
    composites: {}
  }

  type VillageGetPayload<S extends boolean | null | undefined | VillageDefaultArgs> = $Result.GetResult<Prisma.$VillagePayload, S>

  type VillageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VillageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillageCountAggregateInputType | true
    }

  export interface VillageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Village'], meta: { name: 'Village' } }
    /**
     * Find zero or one Village that matches the filter.
     * @param {VillageFindUniqueArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillageFindUniqueArgs>(args: SelectSubset<T, VillageFindUniqueArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Village that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VillageFindUniqueOrThrowArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillageFindUniqueOrThrowArgs>(args: SelectSubset<T, VillageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Village that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageFindFirstArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillageFindFirstArgs>(args?: SelectSubset<T, VillageFindFirstArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Village that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageFindFirstOrThrowArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillageFindFirstOrThrowArgs>(args?: SelectSubset<T, VillageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Villages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Villages
     * const villages = await prisma.village.findMany()
     * 
     * // Get first 10 Villages
     * const villages = await prisma.village.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villageWithIdOnly = await prisma.village.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillageFindManyArgs>(args?: SelectSubset<T, VillageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Village.
     * @param {VillageCreateArgs} args - Arguments to create a Village.
     * @example
     * // Create one Village
     * const Village = await prisma.village.create({
     *   data: {
     *     // ... data to create a Village
     *   }
     * })
     * 
     */
    create<T extends VillageCreateArgs>(args: SelectSubset<T, VillageCreateArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Villages.
     * @param {VillageCreateManyArgs} args - Arguments to create many Villages.
     * @example
     * // Create many Villages
     * const village = await prisma.village.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillageCreateManyArgs>(args?: SelectSubset<T, VillageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Village.
     * @param {VillageDeleteArgs} args - Arguments to delete one Village.
     * @example
     * // Delete one Village
     * const Village = await prisma.village.delete({
     *   where: {
     *     // ... filter to delete one Village
     *   }
     * })
     * 
     */
    delete<T extends VillageDeleteArgs>(args: SelectSubset<T, VillageDeleteArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Village.
     * @param {VillageUpdateArgs} args - Arguments to update one Village.
     * @example
     * // Update one Village
     * const village = await prisma.village.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillageUpdateArgs>(args: SelectSubset<T, VillageUpdateArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Villages.
     * @param {VillageDeleteManyArgs} args - Arguments to filter Villages to delete.
     * @example
     * // Delete a few Villages
     * const { count } = await prisma.village.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillageDeleteManyArgs>(args?: SelectSubset<T, VillageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Villages
     * const village = await prisma.village.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillageUpdateManyArgs>(args: SelectSubset<T, VillageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Village.
     * @param {VillageUpsertArgs} args - Arguments to update or create a Village.
     * @example
     * // Update or create a Village
     * const village = await prisma.village.upsert({
     *   create: {
     *     // ... data to create a Village
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Village we want to update
     *   }
     * })
     */
    upsert<T extends VillageUpsertArgs>(args: SelectSubset<T, VillageUpsertArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageCountArgs} args - Arguments to filter Villages to count.
     * @example
     * // Count the number of Villages
     * const count = await prisma.village.count({
     *   where: {
     *     // ... the filter for the Villages we want to count
     *   }
     * })
    **/
    count<T extends VillageCountArgs>(
      args?: Subset<T, VillageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Village.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillageAggregateArgs>(args: Subset<T, VillageAggregateArgs>): Prisma.PrismaPromise<GetVillageAggregateType<T>>

    /**
     * Group by Village.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageGroupByArgs} args - Group by arguments.
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
      T extends VillageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillageGroupByArgs['orderBy'] }
        : { orderBy?: VillageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VillageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Village model
   */
  readonly fields: VillageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Village.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Village$membersArgs<ExtArgs> = {}>(args?: Subset<T, Village$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admins<T extends Village$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Village$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    families<T extends Village$familiesArgs<ExtArgs> = {}>(args?: Subset<T, Village$familiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Village model
   */
  interface VillageFieldRefs {
    readonly id: FieldRef<"Village", 'String'>
    readonly name: FieldRef<"Village", 'String'>
    readonly district: FieldRef<"Village", 'String'>
    readonly state: FieldRef<"Village", 'String'>
    readonly createdAt: FieldRef<"Village", 'DateTime'>
    readonly updatedAt: FieldRef<"Village", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Village findUnique
   */
  export type VillageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village findUniqueOrThrow
   */
  export type VillageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village findFirst
   */
  export type VillageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villages.
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villages.
     */
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * Village findFirstOrThrow
   */
  export type VillageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villages.
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villages.
     */
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * Village findMany
   */
  export type VillageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Villages to fetch.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Villages.
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * Village create
   */
  export type VillageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * The data needed to create a Village.
     */
    data: XOR<VillageCreateInput, VillageUncheckedCreateInput>
  }

  /**
   * Village createMany
   */
  export type VillageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Villages.
     */
    data: VillageCreateManyInput | VillageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Village update
   */
  export type VillageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * The data needed to update a Village.
     */
    data: XOR<VillageUpdateInput, VillageUncheckedUpdateInput>
    /**
     * Choose, which Village to update.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village updateMany
   */
  export type VillageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Villages.
     */
    data: XOR<VillageUpdateManyMutationInput, VillageUncheckedUpdateManyInput>
    /**
     * Filter which Villages to update
     */
    where?: VillageWhereInput
    /**
     * Limit how many Villages to update.
     */
    limit?: number
  }

  /**
   * Village upsert
   */
  export type VillageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * The filter to search for the Village to update in case it exists.
     */
    where: VillageWhereUniqueInput
    /**
     * In case the Village found by the `where` argument doesn't exist, create a new Village with this data.
     */
    create: XOR<VillageCreateInput, VillageUncheckedCreateInput>
    /**
     * In case the Village was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillageUpdateInput, VillageUncheckedUpdateInput>
  }

  /**
   * Village delete
   */
  export type VillageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter which Village to delete.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village deleteMany
   */
  export type VillageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Villages to delete
     */
    where?: VillageWhereInput
    /**
     * Limit how many Villages to delete.
     */
    limit?: number
  }

  /**
   * Village.members
   */
  export type Village$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Village.admins
   */
  export type Village$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    where?: VillageAdminWhereInput
    orderBy?: VillageAdminOrderByWithRelationInput | VillageAdminOrderByWithRelationInput[]
    cursor?: VillageAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VillageAdminScalarFieldEnum | VillageAdminScalarFieldEnum[]
  }

  /**
   * Village.families
   */
  export type Village$familiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    where?: FamilyWhereInput
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    cursor?: FamilyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Village without action
   */
  export type VillageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
  }


  /**
   * Model VillageAdmin
   */

  export type AggregateVillageAdmin = {
    _count: VillageAdminCountAggregateOutputType | null
    _min: VillageAdminMinAggregateOutputType | null
    _max: VillageAdminMaxAggregateOutputType | null
  }

  export type VillageAdminMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    villageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VillageAdminMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    villageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VillageAdminCountAggregateOutputType = {
    id: number
    memberId: number
    villageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VillageAdminMinAggregateInputType = {
    id?: true
    memberId?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VillageAdminMaxAggregateInputType = {
    id?: true
    memberId?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VillageAdminCountAggregateInputType = {
    id?: true
    memberId?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VillageAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillageAdmin to aggregate.
     */
    where?: VillageAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillageAdmins to fetch.
     */
    orderBy?: VillageAdminOrderByWithRelationInput | VillageAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillageAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillageAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillageAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VillageAdmins
    **/
    _count?: true | VillageAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillageAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillageAdminMaxAggregateInputType
  }

  export type GetVillageAdminAggregateType<T extends VillageAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateVillageAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillageAdmin[P]>
      : GetScalarType<T[P], AggregateVillageAdmin[P]>
  }




  export type VillageAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillageAdminWhereInput
    orderBy?: VillageAdminOrderByWithAggregationInput | VillageAdminOrderByWithAggregationInput[]
    by: VillageAdminScalarFieldEnum[] | VillageAdminScalarFieldEnum
    having?: VillageAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillageAdminCountAggregateInputType | true
    _min?: VillageAdminMinAggregateInputType
    _max?: VillageAdminMaxAggregateInputType
  }

  export type VillageAdminGroupByOutputType = {
    id: string
    memberId: string
    villageId: string
    createdAt: Date
    updatedAt: Date
    _count: VillageAdminCountAggregateOutputType | null
    _min: VillageAdminMinAggregateOutputType | null
    _max: VillageAdminMaxAggregateOutputType | null
  }

  type GetVillageAdminGroupByPayload<T extends VillageAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillageAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillageAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillageAdminGroupByOutputType[P]>
            : GetScalarType<T[P], VillageAdminGroupByOutputType[P]>
        }
      >
    >


  export type VillageAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    villageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    village?: boolean | VillageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villageAdmin"]>



  export type VillageAdminSelectScalar = {
    id?: boolean
    memberId?: boolean
    villageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VillageAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "villageId" | "createdAt" | "updatedAt", ExtArgs["result"]["villageAdmin"]>
  export type VillageAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    village?: boolean | VillageDefaultArgs<ExtArgs>
  }

  export type $VillageAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VillageAdmin"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      village: Prisma.$VillagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      villageId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["villageAdmin"]>
    composites: {}
  }

  type VillageAdminGetPayload<S extends boolean | null | undefined | VillageAdminDefaultArgs> = $Result.GetResult<Prisma.$VillageAdminPayload, S>

  type VillageAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VillageAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillageAdminCountAggregateInputType | true
    }

  export interface VillageAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VillageAdmin'], meta: { name: 'VillageAdmin' } }
    /**
     * Find zero or one VillageAdmin that matches the filter.
     * @param {VillageAdminFindUniqueArgs} args - Arguments to find a VillageAdmin
     * @example
     * // Get one VillageAdmin
     * const villageAdmin = await prisma.villageAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillageAdminFindUniqueArgs>(args: SelectSubset<T, VillageAdminFindUniqueArgs<ExtArgs>>): Prisma__VillageAdminClient<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VillageAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VillageAdminFindUniqueOrThrowArgs} args - Arguments to find a VillageAdmin
     * @example
     * // Get one VillageAdmin
     * const villageAdmin = await prisma.villageAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillageAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, VillageAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillageAdminClient<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillageAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAdminFindFirstArgs} args - Arguments to find a VillageAdmin
     * @example
     * // Get one VillageAdmin
     * const villageAdmin = await prisma.villageAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillageAdminFindFirstArgs>(args?: SelectSubset<T, VillageAdminFindFirstArgs<ExtArgs>>): Prisma__VillageAdminClient<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillageAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAdminFindFirstOrThrowArgs} args - Arguments to find a VillageAdmin
     * @example
     * // Get one VillageAdmin
     * const villageAdmin = await prisma.villageAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillageAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, VillageAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillageAdminClient<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VillageAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VillageAdmins
     * const villageAdmins = await prisma.villageAdmin.findMany()
     * 
     * // Get first 10 VillageAdmins
     * const villageAdmins = await prisma.villageAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villageAdminWithIdOnly = await prisma.villageAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillageAdminFindManyArgs>(args?: SelectSubset<T, VillageAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VillageAdmin.
     * @param {VillageAdminCreateArgs} args - Arguments to create a VillageAdmin.
     * @example
     * // Create one VillageAdmin
     * const VillageAdmin = await prisma.villageAdmin.create({
     *   data: {
     *     // ... data to create a VillageAdmin
     *   }
     * })
     * 
     */
    create<T extends VillageAdminCreateArgs>(args: SelectSubset<T, VillageAdminCreateArgs<ExtArgs>>): Prisma__VillageAdminClient<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VillageAdmins.
     * @param {VillageAdminCreateManyArgs} args - Arguments to create many VillageAdmins.
     * @example
     * // Create many VillageAdmins
     * const villageAdmin = await prisma.villageAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillageAdminCreateManyArgs>(args?: SelectSubset<T, VillageAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VillageAdmin.
     * @param {VillageAdminDeleteArgs} args - Arguments to delete one VillageAdmin.
     * @example
     * // Delete one VillageAdmin
     * const VillageAdmin = await prisma.villageAdmin.delete({
     *   where: {
     *     // ... filter to delete one VillageAdmin
     *   }
     * })
     * 
     */
    delete<T extends VillageAdminDeleteArgs>(args: SelectSubset<T, VillageAdminDeleteArgs<ExtArgs>>): Prisma__VillageAdminClient<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VillageAdmin.
     * @param {VillageAdminUpdateArgs} args - Arguments to update one VillageAdmin.
     * @example
     * // Update one VillageAdmin
     * const villageAdmin = await prisma.villageAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillageAdminUpdateArgs>(args: SelectSubset<T, VillageAdminUpdateArgs<ExtArgs>>): Prisma__VillageAdminClient<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VillageAdmins.
     * @param {VillageAdminDeleteManyArgs} args - Arguments to filter VillageAdmins to delete.
     * @example
     * // Delete a few VillageAdmins
     * const { count } = await prisma.villageAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillageAdminDeleteManyArgs>(args?: SelectSubset<T, VillageAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillageAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VillageAdmins
     * const villageAdmin = await prisma.villageAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillageAdminUpdateManyArgs>(args: SelectSubset<T, VillageAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VillageAdmin.
     * @param {VillageAdminUpsertArgs} args - Arguments to update or create a VillageAdmin.
     * @example
     * // Update or create a VillageAdmin
     * const villageAdmin = await prisma.villageAdmin.upsert({
     *   create: {
     *     // ... data to create a VillageAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VillageAdmin we want to update
     *   }
     * })
     */
    upsert<T extends VillageAdminUpsertArgs>(args: SelectSubset<T, VillageAdminUpsertArgs<ExtArgs>>): Prisma__VillageAdminClient<$Result.GetResult<Prisma.$VillageAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VillageAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAdminCountArgs} args - Arguments to filter VillageAdmins to count.
     * @example
     * // Count the number of VillageAdmins
     * const count = await prisma.villageAdmin.count({
     *   where: {
     *     // ... the filter for the VillageAdmins we want to count
     *   }
     * })
    **/
    count<T extends VillageAdminCountArgs>(
      args?: Subset<T, VillageAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillageAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VillageAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillageAdminAggregateArgs>(args: Subset<T, VillageAdminAggregateArgs>): Prisma.PrismaPromise<GetVillageAdminAggregateType<T>>

    /**
     * Group by VillageAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAdminGroupByArgs} args - Group by arguments.
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
      T extends VillageAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillageAdminGroupByArgs['orderBy'] }
        : { orderBy?: VillageAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VillageAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillageAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VillageAdmin model
   */
  readonly fields: VillageAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VillageAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillageAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    village<T extends VillageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VillageDefaultArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VillageAdmin model
   */
  interface VillageAdminFieldRefs {
    readonly id: FieldRef<"VillageAdmin", 'String'>
    readonly memberId: FieldRef<"VillageAdmin", 'String'>
    readonly villageId: FieldRef<"VillageAdmin", 'String'>
    readonly createdAt: FieldRef<"VillageAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"VillageAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VillageAdmin findUnique
   */
  export type VillageAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    /**
     * Filter, which VillageAdmin to fetch.
     */
    where: VillageAdminWhereUniqueInput
  }

  /**
   * VillageAdmin findUniqueOrThrow
   */
  export type VillageAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    /**
     * Filter, which VillageAdmin to fetch.
     */
    where: VillageAdminWhereUniqueInput
  }

  /**
   * VillageAdmin findFirst
   */
  export type VillageAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    /**
     * Filter, which VillageAdmin to fetch.
     */
    where?: VillageAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillageAdmins to fetch.
     */
    orderBy?: VillageAdminOrderByWithRelationInput | VillageAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillageAdmins.
     */
    cursor?: VillageAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillageAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillageAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillageAdmins.
     */
    distinct?: VillageAdminScalarFieldEnum | VillageAdminScalarFieldEnum[]
  }

  /**
   * VillageAdmin findFirstOrThrow
   */
  export type VillageAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    /**
     * Filter, which VillageAdmin to fetch.
     */
    where?: VillageAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillageAdmins to fetch.
     */
    orderBy?: VillageAdminOrderByWithRelationInput | VillageAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillageAdmins.
     */
    cursor?: VillageAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillageAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillageAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillageAdmins.
     */
    distinct?: VillageAdminScalarFieldEnum | VillageAdminScalarFieldEnum[]
  }

  /**
   * VillageAdmin findMany
   */
  export type VillageAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    /**
     * Filter, which VillageAdmins to fetch.
     */
    where?: VillageAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillageAdmins to fetch.
     */
    orderBy?: VillageAdminOrderByWithRelationInput | VillageAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VillageAdmins.
     */
    cursor?: VillageAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillageAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillageAdmins.
     */
    skip?: number
    distinct?: VillageAdminScalarFieldEnum | VillageAdminScalarFieldEnum[]
  }

  /**
   * VillageAdmin create
   */
  export type VillageAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a VillageAdmin.
     */
    data: XOR<VillageAdminCreateInput, VillageAdminUncheckedCreateInput>
  }

  /**
   * VillageAdmin createMany
   */
  export type VillageAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VillageAdmins.
     */
    data: VillageAdminCreateManyInput | VillageAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VillageAdmin update
   */
  export type VillageAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a VillageAdmin.
     */
    data: XOR<VillageAdminUpdateInput, VillageAdminUncheckedUpdateInput>
    /**
     * Choose, which VillageAdmin to update.
     */
    where: VillageAdminWhereUniqueInput
  }

  /**
   * VillageAdmin updateMany
   */
  export type VillageAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VillageAdmins.
     */
    data: XOR<VillageAdminUpdateManyMutationInput, VillageAdminUncheckedUpdateManyInput>
    /**
     * Filter which VillageAdmins to update
     */
    where?: VillageAdminWhereInput
    /**
     * Limit how many VillageAdmins to update.
     */
    limit?: number
  }

  /**
   * VillageAdmin upsert
   */
  export type VillageAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the VillageAdmin to update in case it exists.
     */
    where: VillageAdminWhereUniqueInput
    /**
     * In case the VillageAdmin found by the `where` argument doesn't exist, create a new VillageAdmin with this data.
     */
    create: XOR<VillageAdminCreateInput, VillageAdminUncheckedCreateInput>
    /**
     * In case the VillageAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillageAdminUpdateInput, VillageAdminUncheckedUpdateInput>
  }

  /**
   * VillageAdmin delete
   */
  export type VillageAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
    /**
     * Filter which VillageAdmin to delete.
     */
    where: VillageAdminWhereUniqueInput
  }

  /**
   * VillageAdmin deleteMany
   */
  export type VillageAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillageAdmins to delete
     */
    where?: VillageAdminWhereInput
    /**
     * Limit how many VillageAdmins to delete.
     */
    limit?: number
  }

  /**
   * VillageAdmin without action
   */
  export type VillageAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageAdmin
     */
    select?: VillageAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageAdmin
     */
    omit?: VillageAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageAdminInclude<ExtArgs> | null
  }


  /**
   * Model SuperAdmin
   */

  export type AggregateSuperAdmin = {
    _count: SuperAdminCountAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  export type SuperAdminMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperAdminMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperAdminCountAggregateOutputType = {
    id: number
    memberId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuperAdminMinAggregateInputType = {
    id?: true
    memberId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperAdminMaxAggregateInputType = {
    id?: true
    memberId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperAdminCountAggregateInputType = {
    id?: true
    memberId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuperAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmin to aggregate.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperAdmins
    **/
    _count?: true | SuperAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperAdminMaxAggregateInputType
  }

  export type GetSuperAdminAggregateType<T extends SuperAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperAdmin[P]>
      : GetScalarType<T[P], AggregateSuperAdmin[P]>
  }




  export type SuperAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminWhereInput
    orderBy?: SuperAdminOrderByWithAggregationInput | SuperAdminOrderByWithAggregationInput[]
    by: SuperAdminScalarFieldEnum[] | SuperAdminScalarFieldEnum
    having?: SuperAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperAdminCountAggregateInputType | true
    _min?: SuperAdminMinAggregateInputType
    _max?: SuperAdminMaxAggregateInputType
  }

  export type SuperAdminGroupByOutputType = {
    id: string
    memberId: string
    createdAt: Date
    updatedAt: Date
    _count: SuperAdminCountAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  type GetSuperAdminGroupByPayload<T extends SuperAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
        }
      >
    >


  export type SuperAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["superAdmin"]>



  export type SuperAdminSelectScalar = {
    id?: boolean
    memberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuperAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "createdAt" | "updatedAt", ExtArgs["result"]["superAdmin"]>
  export type SuperAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $SuperAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperAdmin"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["superAdmin"]>
    composites: {}
  }

  type SuperAdminGetPayload<S extends boolean | null | undefined | SuperAdminDefaultArgs> = $Result.GetResult<Prisma.$SuperAdminPayload, S>

  type SuperAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuperAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuperAdminCountAggregateInputType | true
    }

  export interface SuperAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperAdmin'], meta: { name: 'SuperAdmin' } }
    /**
     * Find zero or one SuperAdmin that matches the filter.
     * @param {SuperAdminFindUniqueArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperAdminFindUniqueArgs>(args: SelectSubset<T, SuperAdminFindUniqueArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuperAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuperAdminFindUniqueOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperAdminFindFirstArgs>(args?: SelectSubset<T, SuperAdminFindFirstArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany()
     * 
     * // Get first 10 SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperAdminFindManyArgs>(args?: SelectSubset<T, SuperAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuperAdmin.
     * @param {SuperAdminCreateArgs} args - Arguments to create a SuperAdmin.
     * @example
     * // Create one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.create({
     *   data: {
     *     // ... data to create a SuperAdmin
     *   }
     * })
     * 
     */
    create<T extends SuperAdminCreateArgs>(args: SelectSubset<T, SuperAdminCreateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuperAdmins.
     * @param {SuperAdminCreateManyArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperAdminCreateManyArgs>(args?: SelectSubset<T, SuperAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SuperAdmin.
     * @param {SuperAdminDeleteArgs} args - Arguments to delete one SuperAdmin.
     * @example
     * // Delete one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.delete({
     *   where: {
     *     // ... filter to delete one SuperAdmin
     *   }
     * })
     * 
     */
    delete<T extends SuperAdminDeleteArgs>(args: SelectSubset<T, SuperAdminDeleteArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuperAdmin.
     * @param {SuperAdminUpdateArgs} args - Arguments to update one SuperAdmin.
     * @example
     * // Update one SuperAdmin
     * const superAdmin = await prisma.superAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperAdminUpdateArgs>(args: SelectSubset<T, SuperAdminUpdateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuperAdmins.
     * @param {SuperAdminDeleteManyArgs} args - Arguments to filter SuperAdmins to delete.
     * @example
     * // Delete a few SuperAdmins
     * const { count } = await prisma.superAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperAdminDeleteManyArgs>(args?: SelectSubset<T, SuperAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperAdmins
     * const superAdmin = await prisma.superAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperAdminUpdateManyArgs>(args: SelectSubset<T, SuperAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuperAdmin.
     * @param {SuperAdminUpsertArgs} args - Arguments to update or create a SuperAdmin.
     * @example
     * // Update or create a SuperAdmin
     * const superAdmin = await prisma.superAdmin.upsert({
     *   create: {
     *     // ... data to create a SuperAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperAdmin we want to update
     *   }
     * })
     */
    upsert<T extends SuperAdminUpsertArgs>(args: SelectSubset<T, SuperAdminUpsertArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminCountArgs} args - Arguments to filter SuperAdmins to count.
     * @example
     * // Count the number of SuperAdmins
     * const count = await prisma.superAdmin.count({
     *   where: {
     *     // ... the filter for the SuperAdmins we want to count
     *   }
     * })
    **/
    count<T extends SuperAdminCountArgs>(
      args?: Subset<T, SuperAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuperAdminAggregateArgs>(args: Subset<T, SuperAdminAggregateArgs>): Prisma.PrismaPromise<GetSuperAdminAggregateType<T>>

    /**
     * Group by SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminGroupByArgs} args - Group by arguments.
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
      T extends SuperAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperAdminGroupByArgs['orderBy'] }
        : { orderBy?: SuperAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuperAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperAdmin model
   */
  readonly fields: SuperAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SuperAdmin model
   */
  interface SuperAdminFieldRefs {
    readonly id: FieldRef<"SuperAdmin", 'String'>
    readonly memberId: FieldRef<"SuperAdmin", 'String'>
    readonly createdAt: FieldRef<"SuperAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"SuperAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuperAdmin findUnique
   */
  export type SuperAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findUniqueOrThrow
   */
  export type SuperAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findFirst
   */
  export type SuperAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findFirstOrThrow
   */
  export type SuperAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findMany
   */
  export type SuperAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin create
   */
  export type SuperAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a SuperAdmin.
     */
    data: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
  }

  /**
   * SuperAdmin createMany
   */
  export type SuperAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminCreateManyInput | SuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdmin update
   */
  export type SuperAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a SuperAdmin.
     */
    data: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
    /**
     * Choose, which SuperAdmin to update.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin updateMany
   */
  export type SuperAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperAdmins.
     */
    data: XOR<SuperAdminUpdateManyMutationInput, SuperAdminUncheckedUpdateManyInput>
    /**
     * Filter which SuperAdmins to update
     */
    where?: SuperAdminWhereInput
    /**
     * Limit how many SuperAdmins to update.
     */
    limit?: number
  }

  /**
   * SuperAdmin upsert
   */
  export type SuperAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the SuperAdmin to update in case it exists.
     */
    where: SuperAdminWhereUniqueInput
    /**
     * In case the SuperAdmin found by the `where` argument doesn't exist, create a new SuperAdmin with this data.
     */
    create: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
    /**
     * In case the SuperAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
  }

  /**
   * SuperAdmin delete
   */
  export type SuperAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter which SuperAdmin to delete.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin deleteMany
   */
  export type SuperAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmins to delete
     */
    where?: SuperAdminWhereInput
    /**
     * Limit how many SuperAdmins to delete.
     */
    limit?: number
  }

  /**
   * SuperAdmin without action
   */
  export type SuperAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    date: Date | null
    postedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    date: Date | null
    postedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    content: number
    date: number
    postedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
    postedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
    postedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
    postedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    content: string
    date: Date
    postedById: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
    postedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postedBy?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
    postedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "date" | "postedById" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      postedBy: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      date: Date
      postedById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postedBy<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly content: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly postedById: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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


  export const MemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    dob: 'dob',
    gender: 'gender',
    phone: 'phone',
    email: 'email',
    address: 'address',
    business: 'business',
    job: 'job',
    education: 'education',
    bloodGroup: 'bloodGroup',
    maternalSurname: 'maternalSurname',
    maternalVillage: 'maternalVillage',
    maritalStatus: 'maritalStatus',
    relationToHead: 'relationToHead',
    photoUrl: 'photoUrl',
    familyId: 'familyId',
    familyHeadId: 'familyHeadId',
    villageId: 'villageId',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const FamilyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    villageId: 'villageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FamilyScalarFieldEnum = (typeof FamilyScalarFieldEnum)[keyof typeof FamilyScalarFieldEnum]


  export const VillageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    district: 'district',
    state: 'state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VillageScalarFieldEnum = (typeof VillageScalarFieldEnum)[keyof typeof VillageScalarFieldEnum]


  export const VillageAdminScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    villageId: 'villageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VillageAdminScalarFieldEnum = (typeof VillageAdminScalarFieldEnum)[keyof typeof VillageAdminScalarFieldEnum]


  export const SuperAdminScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuperAdminScalarFieldEnum = (typeof SuperAdminScalarFieldEnum)[keyof typeof SuperAdminScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    date: 'date',
    postedById: 'postedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MemberOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    phone: 'phone',
    email: 'email',
    address: 'address',
    business: 'business',
    job: 'job',
    education: 'education',
    bloodGroup: 'bloodGroup',
    maternalSurname: 'maternalSurname',
    maternalVillage: 'maternalVillage',
    maritalStatus: 'maritalStatus',
    relationToHead: 'relationToHead',
    photoUrl: 'photoUrl',
    familyId: 'familyId',
    familyHeadId: 'familyHeadId',
    villageId: 'villageId'
  };

  export type MemberOrderByRelevanceFieldEnum = (typeof MemberOrderByRelevanceFieldEnum)[keyof typeof MemberOrderByRelevanceFieldEnum]


  export const FamilyOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    villageId: 'villageId'
  };

  export type FamilyOrderByRelevanceFieldEnum = (typeof FamilyOrderByRelevanceFieldEnum)[keyof typeof FamilyOrderByRelevanceFieldEnum]


  export const VillageOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    district: 'district',
    state: 'state'
  };

  export type VillageOrderByRelevanceFieldEnum = (typeof VillageOrderByRelevanceFieldEnum)[keyof typeof VillageOrderByRelevanceFieldEnum]


  export const VillageAdminOrderByRelevanceFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    villageId: 'villageId'
  };

  export type VillageAdminOrderByRelevanceFieldEnum = (typeof VillageAdminOrderByRelevanceFieldEnum)[keyof typeof VillageAdminOrderByRelevanceFieldEnum]


  export const SuperAdminOrderByRelevanceFieldEnum: {
    id: 'id',
    memberId: 'memberId'
  };

  export type SuperAdminOrderByRelevanceFieldEnum = (typeof SuperAdminOrderByRelevanceFieldEnum)[keyof typeof SuperAdminOrderByRelevanceFieldEnum]


  export const EventOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    postedById: 'postedById'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    password?: StringFilter<"Member"> | string
    dob?: DateTimeNullableFilter<"Member"> | Date | string | null
    gender?: EnumGenderNullableFilter<"Member"> | $Enums.Gender | null
    phone?: StringFilter<"Member"> | string
    email?: StringNullableFilter<"Member"> | string | null
    address?: StringNullableFilter<"Member"> | string | null
    business?: StringNullableFilter<"Member"> | string | null
    job?: StringNullableFilter<"Member"> | string | null
    education?: StringNullableFilter<"Member"> | string | null
    bloodGroup?: StringNullableFilter<"Member"> | string | null
    maternalSurname?: StringNullableFilter<"Member"> | string | null
    maternalVillage?: StringNullableFilter<"Member"> | string | null
    maritalStatus?: StringNullableFilter<"Member"> | string | null
    relationToHead?: StringNullableFilter<"Member"> | string | null
    photoUrl?: StringNullableFilter<"Member"> | string | null
    familyId?: StringNullableFilter<"Member"> | string | null
    familyHeadId?: StringNullableFilter<"Member"> | string | null
    villageId?: StringNullableFilter<"Member"> | string | null
    role?: EnumRoleFilter<"Member"> | $Enums.Role
    isActive?: BoolFilter<"Member"> | boolean
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    family?: XOR<FamilyNullableScalarRelationFilter, FamilyWhereInput> | null
    familyHead?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    familyMembers?: MemberListRelationFilter
    village?: XOR<VillageNullableScalarRelationFilter, VillageWhereInput> | null
    villageAdmin?: XOR<VillageAdminNullableScalarRelationFilter, VillageAdminWhereInput> | null
    superAdmin?: XOR<SuperAdminNullableScalarRelationFilter, SuperAdminWhereInput> | null
    eventsPosted?: EventListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    business?: SortOrderInput | SortOrder
    job?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    maternalSurname?: SortOrderInput | SortOrder
    maternalVillage?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    relationToHead?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    familyId?: SortOrderInput | SortOrder
    familyHeadId?: SortOrderInput | SortOrder
    villageId?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    family?: FamilyOrderByWithRelationInput
    familyHead?: MemberOrderByWithRelationInput
    familyMembers?: MemberOrderByRelationAggregateInput
    village?: VillageOrderByWithRelationInput
    villageAdmin?: VillageAdminOrderByWithRelationInput
    superAdmin?: SuperAdminOrderByWithRelationInput
    eventsPosted?: EventOrderByRelationAggregateInput
    _relevance?: MemberOrderByRelevanceInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    password?: string
    phone?: string
    email?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    name?: StringFilter<"Member"> | string
    dob?: DateTimeNullableFilter<"Member"> | Date | string | null
    gender?: EnumGenderNullableFilter<"Member"> | $Enums.Gender | null
    address?: StringNullableFilter<"Member"> | string | null
    business?: StringNullableFilter<"Member"> | string | null
    job?: StringNullableFilter<"Member"> | string | null
    education?: StringNullableFilter<"Member"> | string | null
    bloodGroup?: StringNullableFilter<"Member"> | string | null
    maternalSurname?: StringNullableFilter<"Member"> | string | null
    maternalVillage?: StringNullableFilter<"Member"> | string | null
    maritalStatus?: StringNullableFilter<"Member"> | string | null
    relationToHead?: StringNullableFilter<"Member"> | string | null
    photoUrl?: StringNullableFilter<"Member"> | string | null
    familyId?: StringNullableFilter<"Member"> | string | null
    familyHeadId?: StringNullableFilter<"Member"> | string | null
    villageId?: StringNullableFilter<"Member"> | string | null
    role?: EnumRoleFilter<"Member"> | $Enums.Role
    isActive?: BoolFilter<"Member"> | boolean
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    family?: XOR<FamilyNullableScalarRelationFilter, FamilyWhereInput> | null
    familyHead?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    familyMembers?: MemberListRelationFilter
    village?: XOR<VillageNullableScalarRelationFilter, VillageWhereInput> | null
    villageAdmin?: XOR<VillageAdminNullableScalarRelationFilter, VillageAdminWhereInput> | null
    superAdmin?: XOR<SuperAdminNullableScalarRelationFilter, SuperAdminWhereInput> | null
    eventsPosted?: EventListRelationFilter
  }, "id" | "password" | "phone" | "email">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    business?: SortOrderInput | SortOrder
    job?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    maternalSurname?: SortOrderInput | SortOrder
    maternalVillage?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    relationToHead?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    familyId?: SortOrderInput | SortOrder
    familyHeadId?: SortOrderInput | SortOrder
    villageId?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    name?: StringWithAggregatesFilter<"Member"> | string
    password?: StringWithAggregatesFilter<"Member"> | string
    dob?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"Member"> | $Enums.Gender | null
    phone?: StringWithAggregatesFilter<"Member"> | string
    email?: StringNullableWithAggregatesFilter<"Member"> | string | null
    address?: StringNullableWithAggregatesFilter<"Member"> | string | null
    business?: StringNullableWithAggregatesFilter<"Member"> | string | null
    job?: StringNullableWithAggregatesFilter<"Member"> | string | null
    education?: StringNullableWithAggregatesFilter<"Member"> | string | null
    bloodGroup?: StringNullableWithAggregatesFilter<"Member"> | string | null
    maternalSurname?: StringNullableWithAggregatesFilter<"Member"> | string | null
    maternalVillage?: StringNullableWithAggregatesFilter<"Member"> | string | null
    maritalStatus?: StringNullableWithAggregatesFilter<"Member"> | string | null
    relationToHead?: StringNullableWithAggregatesFilter<"Member"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Member"> | string | null
    familyId?: StringNullableWithAggregatesFilter<"Member"> | string | null
    familyHeadId?: StringNullableWithAggregatesFilter<"Member"> | string | null
    villageId?: StringNullableWithAggregatesFilter<"Member"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Member"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"Member"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type FamilyWhereInput = {
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    id?: StringFilter<"Family"> | string
    name?: StringNullableFilter<"Family"> | string | null
    address?: StringNullableFilter<"Family"> | string | null
    villageId?: StringFilter<"Family"> | string
    createdAt?: DateTimeFilter<"Family"> | Date | string
    updatedAt?: DateTimeFilter<"Family"> | Date | string
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
    members?: MemberListRelationFilter
  }

  export type FamilyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    village?: VillageOrderByWithRelationInput
    members?: MemberOrderByRelationAggregateInput
    _relevance?: FamilyOrderByRelevanceInput
  }

  export type FamilyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    name?: StringNullableFilter<"Family"> | string | null
    address?: StringNullableFilter<"Family"> | string | null
    villageId?: StringFilter<"Family"> | string
    createdAt?: DateTimeFilter<"Family"> | Date | string
    updatedAt?: DateTimeFilter<"Family"> | Date | string
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
    members?: MemberListRelationFilter
  }, "id">

  export type FamilyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FamilyCountOrderByAggregateInput
    _max?: FamilyMaxOrderByAggregateInput
    _min?: FamilyMinOrderByAggregateInput
  }

  export type FamilyScalarWhereWithAggregatesInput = {
    AND?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    OR?: FamilyScalarWhereWithAggregatesInput[]
    NOT?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Family"> | string
    name?: StringNullableWithAggregatesFilter<"Family"> | string | null
    address?: StringNullableWithAggregatesFilter<"Family"> | string | null
    villageId?: StringWithAggregatesFilter<"Family"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Family"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Family"> | Date | string
  }

  export type VillageWhereInput = {
    AND?: VillageWhereInput | VillageWhereInput[]
    OR?: VillageWhereInput[]
    NOT?: VillageWhereInput | VillageWhereInput[]
    id?: StringFilter<"Village"> | string
    name?: StringFilter<"Village"> | string
    district?: StringNullableFilter<"Village"> | string | null
    state?: StringNullableFilter<"Village"> | string | null
    createdAt?: DateTimeFilter<"Village"> | Date | string
    updatedAt?: DateTimeFilter<"Village"> | Date | string
    members?: MemberListRelationFilter
    admins?: VillageAdminListRelationFilter
    families?: FamilyListRelationFilter
  }

  export type VillageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: MemberOrderByRelationAggregateInput
    admins?: VillageAdminOrderByRelationAggregateInput
    families?: FamilyOrderByRelationAggregateInput
    _relevance?: VillageOrderByRelevanceInput
  }

  export type VillageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: VillageWhereInput | VillageWhereInput[]
    OR?: VillageWhereInput[]
    NOT?: VillageWhereInput | VillageWhereInput[]
    district?: StringNullableFilter<"Village"> | string | null
    state?: StringNullableFilter<"Village"> | string | null
    createdAt?: DateTimeFilter<"Village"> | Date | string
    updatedAt?: DateTimeFilter<"Village"> | Date | string
    members?: MemberListRelationFilter
    admins?: VillageAdminListRelationFilter
    families?: FamilyListRelationFilter
  }, "id" | "name">

  export type VillageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VillageCountOrderByAggregateInput
    _max?: VillageMaxOrderByAggregateInput
    _min?: VillageMinOrderByAggregateInput
  }

  export type VillageScalarWhereWithAggregatesInput = {
    AND?: VillageScalarWhereWithAggregatesInput | VillageScalarWhereWithAggregatesInput[]
    OR?: VillageScalarWhereWithAggregatesInput[]
    NOT?: VillageScalarWhereWithAggregatesInput | VillageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Village"> | string
    name?: StringWithAggregatesFilter<"Village"> | string
    district?: StringNullableWithAggregatesFilter<"Village"> | string | null
    state?: StringNullableWithAggregatesFilter<"Village"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Village"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Village"> | Date | string
  }

  export type VillageAdminWhereInput = {
    AND?: VillageAdminWhereInput | VillageAdminWhereInput[]
    OR?: VillageAdminWhereInput[]
    NOT?: VillageAdminWhereInput | VillageAdminWhereInput[]
    id?: StringFilter<"VillageAdmin"> | string
    memberId?: StringFilter<"VillageAdmin"> | string
    villageId?: StringFilter<"VillageAdmin"> | string
    createdAt?: DateTimeFilter<"VillageAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"VillageAdmin"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
  }

  export type VillageAdminOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    village?: VillageOrderByWithRelationInput
    _relevance?: VillageAdminOrderByRelevanceInput
  }

  export type VillageAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId?: string
    AND?: VillageAdminWhereInput | VillageAdminWhereInput[]
    OR?: VillageAdminWhereInput[]
    NOT?: VillageAdminWhereInput | VillageAdminWhereInput[]
    villageId?: StringFilter<"VillageAdmin"> | string
    createdAt?: DateTimeFilter<"VillageAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"VillageAdmin"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
  }, "id" | "memberId">

  export type VillageAdminOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VillageAdminCountOrderByAggregateInput
    _max?: VillageAdminMaxOrderByAggregateInput
    _min?: VillageAdminMinOrderByAggregateInput
  }

  export type VillageAdminScalarWhereWithAggregatesInput = {
    AND?: VillageAdminScalarWhereWithAggregatesInput | VillageAdminScalarWhereWithAggregatesInput[]
    OR?: VillageAdminScalarWhereWithAggregatesInput[]
    NOT?: VillageAdminScalarWhereWithAggregatesInput | VillageAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VillageAdmin"> | string
    memberId?: StringWithAggregatesFilter<"VillageAdmin"> | string
    villageId?: StringWithAggregatesFilter<"VillageAdmin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VillageAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VillageAdmin"> | Date | string
  }

  export type SuperAdminWhereInput = {
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    id?: StringFilter<"SuperAdmin"> | string
    memberId?: StringFilter<"SuperAdmin"> | string
    createdAt?: DateTimeFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SuperAdmin"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type SuperAdminOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    _relevance?: SuperAdminOrderByRelevanceInput
  }

  export type SuperAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId?: string
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    createdAt?: DateTimeFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SuperAdmin"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id" | "memberId">

  export type SuperAdminOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuperAdminCountOrderByAggregateInput
    _max?: SuperAdminMaxOrderByAggregateInput
    _min?: SuperAdminMinOrderByAggregateInput
  }

  export type SuperAdminScalarWhereWithAggregatesInput = {
    AND?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    OR?: SuperAdminScalarWhereWithAggregatesInput[]
    NOT?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuperAdmin"> | string
    memberId?: StringWithAggregatesFilter<"SuperAdmin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SuperAdmin"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    content?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    postedById?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    postedBy?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    postedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postedBy?: MemberOrderByWithRelationInput
    _relevance?: EventOrderByRelevanceInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    content?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    postedById?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    postedBy?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    postedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    content?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    postedById?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FamilyCreateNestedOneWithoutMembersInput
    familyHead?: MemberCreateNestedOneWithoutFamilyMembersInput
    familyMembers?: MemberCreateNestedManyWithoutFamilyHeadInput
    village?: VillageCreateNestedOneWithoutMembersInput
    villageAdmin?: VillageAdminCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminCreateNestedOneWithoutMemberInput
    eventsPosted?: EventCreateNestedManyWithoutPostedByInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyId?: string | null
    familyHeadId?: string | null
    villageId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familyMembers?: MemberUncheckedCreateNestedManyWithoutFamilyHeadInput
    villageAdmin?: VillageAdminUncheckedCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminUncheckedCreateNestedOneWithoutMemberInput
    eventsPosted?: EventUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneWithoutMembersNestedInput
    familyHead?: MemberUpdateOneWithoutFamilyMembersNestedInput
    familyMembers?: MemberUpdateManyWithoutFamilyHeadNestedInput
    village?: VillageUpdateOneWithoutMembersNestedInput
    villageAdmin?: VillageAdminUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyMembers?: MemberUncheckedUpdateManyWithoutFamilyHeadNestedInput
    villageAdmin?: VillageAdminUncheckedUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUncheckedUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyId?: string | null
    familyHeadId?: string | null
    villageId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyCreateInput = {
    id?: string
    name?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    village: VillageCreateNestedOneWithoutFamiliesInput
    members?: MemberCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateInput = {
    id?: string
    name?: string | null
    address?: string | null
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneRequiredWithoutFamiliesNestedInput
    members?: MemberUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyCreateManyInput = {
    id?: string
    name?: string | null
    address?: string | null
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageCreateInput = {
    id?: string
    name: string
    district?: string | null
    state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutVillageInput
    admins?: VillageAdminCreateNestedManyWithoutVillageInput
    families?: FamilyCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateInput = {
    id?: string
    name: string
    district?: string | null
    state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutVillageInput
    admins?: VillageAdminUncheckedCreateNestedManyWithoutVillageInput
    families?: FamilyUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutVillageNestedInput
    admins?: VillageAdminUpdateManyWithoutVillageNestedInput
    families?: FamilyUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutVillageNestedInput
    admins?: VillageAdminUncheckedUpdateManyWithoutVillageNestedInput
    families?: FamilyUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type VillageCreateManyInput = {
    id?: string
    name: string
    district?: string | null
    state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageAdminCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutVillageAdminInput
    village: VillageCreateNestedOneWithoutAdminsInput
  }

  export type VillageAdminUncheckedCreateInput = {
    id?: string
    memberId: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillageAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutVillageAdminNestedInput
    village?: VillageUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type VillageAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageAdminCreateManyInput = {
    id?: string
    memberId: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillageAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutSuperAdminInput
  }

  export type SuperAdminUncheckedCreateInput = {
    id?: string
    memberId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutSuperAdminNestedInput
  }

  export type SuperAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminCreateManyInput = {
    id?: string
    memberId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    postedBy: MemberCreateNestedOneWithoutEventsPostedInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    postedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedBy?: MemberUpdateOneRequiredWithoutEventsPostedNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    postedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    postedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    postedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FamilyNullableScalarRelationFilter = {
    is?: FamilyWhereInput | null
    isNot?: FamilyWhereInput | null
  }

  export type MemberNullableScalarRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type VillageNullableScalarRelationFilter = {
    is?: VillageWhereInput | null
    isNot?: VillageWhereInput | null
  }

  export type VillageAdminNullableScalarRelationFilter = {
    is?: VillageAdminWhereInput | null
    isNot?: VillageAdminWhereInput | null
  }

  export type SuperAdminNullableScalarRelationFilter = {
    is?: SuperAdminWhereInput | null
    isNot?: SuperAdminWhereInput | null
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelevanceInput = {
    fields: MemberOrderByRelevanceFieldEnum | MemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    business?: SortOrder
    job?: SortOrder
    education?: SortOrder
    bloodGroup?: SortOrder
    maternalSurname?: SortOrder
    maternalVillage?: SortOrder
    maritalStatus?: SortOrder
    relationToHead?: SortOrder
    photoUrl?: SortOrder
    familyId?: SortOrder
    familyHeadId?: SortOrder
    villageId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    business?: SortOrder
    job?: SortOrder
    education?: SortOrder
    bloodGroup?: SortOrder
    maternalSurname?: SortOrder
    maternalVillage?: SortOrder
    maritalStatus?: SortOrder
    relationToHead?: SortOrder
    photoUrl?: SortOrder
    familyId?: SortOrder
    familyHeadId?: SortOrder
    villageId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    business?: SortOrder
    job?: SortOrder
    education?: SortOrder
    bloodGroup?: SortOrder
    maternalSurname?: SortOrder
    maternalVillage?: SortOrder
    maritalStatus?: SortOrder
    relationToHead?: SortOrder
    photoUrl?: SortOrder
    familyId?: SortOrder
    familyHeadId?: SortOrder
    villageId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VillageScalarRelationFilter = {
    is?: VillageWhereInput
    isNot?: VillageWhereInput
  }

  export type FamilyOrderByRelevanceInput = {
    fields: FamilyOrderByRelevanceFieldEnum | FamilyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FamilyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageAdminListRelationFilter = {
    every?: VillageAdminWhereInput
    some?: VillageAdminWhereInput
    none?: VillageAdminWhereInput
  }

  export type FamilyListRelationFilter = {
    every?: FamilyWhereInput
    some?: FamilyWhereInput
    none?: FamilyWhereInput
  }

  export type VillageAdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VillageOrderByRelevanceInput = {
    fields: VillageOrderByRelevanceFieldEnum | VillageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VillageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type VillageAdminOrderByRelevanceInput = {
    fields: VillageAdminOrderByRelevanceFieldEnum | VillageAdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VillageAdminCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageAdminMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminOrderByRelevanceInput = {
    fields: SuperAdminOrderByRelevanceFieldEnum | SuperAdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SuperAdminCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    postedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    postedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    postedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyCreateNestedOneWithoutMembersInput = {
    create?: XOR<FamilyCreateWithoutMembersInput, FamilyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutMembersInput
    connect?: FamilyWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutFamilyMembersInput = {
    create?: XOR<MemberCreateWithoutFamilyMembersInput, MemberUncheckedCreateWithoutFamilyMembersInput>
    connectOrCreate?: MemberCreateOrConnectWithoutFamilyMembersInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutFamilyHeadInput = {
    create?: XOR<MemberCreateWithoutFamilyHeadInput, MemberUncheckedCreateWithoutFamilyHeadInput> | MemberCreateWithoutFamilyHeadInput[] | MemberUncheckedCreateWithoutFamilyHeadInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutFamilyHeadInput | MemberCreateOrConnectWithoutFamilyHeadInput[]
    createMany?: MemberCreateManyFamilyHeadInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type VillageCreateNestedOneWithoutMembersInput = {
    create?: XOR<VillageCreateWithoutMembersInput, VillageUncheckedCreateWithoutMembersInput>
    connectOrCreate?: VillageCreateOrConnectWithoutMembersInput
    connect?: VillageWhereUniqueInput
  }

  export type VillageAdminCreateNestedOneWithoutMemberInput = {
    create?: XOR<VillageAdminCreateWithoutMemberInput, VillageAdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: VillageAdminCreateOrConnectWithoutMemberInput
    connect?: VillageAdminWhereUniqueInput
  }

  export type SuperAdminCreateNestedOneWithoutMemberInput = {
    create?: XOR<SuperAdminCreateWithoutMemberInput, SuperAdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: SuperAdminCreateOrConnectWithoutMemberInput
    connect?: SuperAdminWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutPostedByInput = {
    create?: XOR<EventCreateWithoutPostedByInput, EventUncheckedCreateWithoutPostedByInput> | EventCreateWithoutPostedByInput[] | EventUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPostedByInput | EventCreateOrConnectWithoutPostedByInput[]
    createMany?: EventCreateManyPostedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutFamilyHeadInput = {
    create?: XOR<MemberCreateWithoutFamilyHeadInput, MemberUncheckedCreateWithoutFamilyHeadInput> | MemberCreateWithoutFamilyHeadInput[] | MemberUncheckedCreateWithoutFamilyHeadInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutFamilyHeadInput | MemberCreateOrConnectWithoutFamilyHeadInput[]
    createMany?: MemberCreateManyFamilyHeadInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type VillageAdminUncheckedCreateNestedOneWithoutMemberInput = {
    create?: XOR<VillageAdminCreateWithoutMemberInput, VillageAdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: VillageAdminCreateOrConnectWithoutMemberInput
    connect?: VillageAdminWhereUniqueInput
  }

  export type SuperAdminUncheckedCreateNestedOneWithoutMemberInput = {
    create?: XOR<SuperAdminCreateWithoutMemberInput, SuperAdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: SuperAdminCreateOrConnectWithoutMemberInput
    connect?: SuperAdminWhereUniqueInput
  }

  export type EventUncheckedCreateNestedManyWithoutPostedByInput = {
    create?: XOR<EventCreateWithoutPostedByInput, EventUncheckedCreateWithoutPostedByInput> | EventCreateWithoutPostedByInput[] | EventUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPostedByInput | EventCreateOrConnectWithoutPostedByInput[]
    createMany?: EventCreateManyPostedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FamilyUpdateOneWithoutMembersNestedInput = {
    create?: XOR<FamilyCreateWithoutMembersInput, FamilyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutMembersInput
    upsert?: FamilyUpsertWithoutMembersInput
    disconnect?: FamilyWhereInput | boolean
    delete?: FamilyWhereInput | boolean
    connect?: FamilyWhereUniqueInput
    update?: XOR<XOR<FamilyUpdateToOneWithWhereWithoutMembersInput, FamilyUpdateWithoutMembersInput>, FamilyUncheckedUpdateWithoutMembersInput>
  }

  export type MemberUpdateOneWithoutFamilyMembersNestedInput = {
    create?: XOR<MemberCreateWithoutFamilyMembersInput, MemberUncheckedCreateWithoutFamilyMembersInput>
    connectOrCreate?: MemberCreateOrConnectWithoutFamilyMembersInput
    upsert?: MemberUpsertWithoutFamilyMembersInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutFamilyMembersInput, MemberUpdateWithoutFamilyMembersInput>, MemberUncheckedUpdateWithoutFamilyMembersInput>
  }

  export type MemberUpdateManyWithoutFamilyHeadNestedInput = {
    create?: XOR<MemberCreateWithoutFamilyHeadInput, MemberUncheckedCreateWithoutFamilyHeadInput> | MemberCreateWithoutFamilyHeadInput[] | MemberUncheckedCreateWithoutFamilyHeadInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutFamilyHeadInput | MemberCreateOrConnectWithoutFamilyHeadInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutFamilyHeadInput | MemberUpsertWithWhereUniqueWithoutFamilyHeadInput[]
    createMany?: MemberCreateManyFamilyHeadInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutFamilyHeadInput | MemberUpdateWithWhereUniqueWithoutFamilyHeadInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutFamilyHeadInput | MemberUpdateManyWithWhereWithoutFamilyHeadInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type VillageUpdateOneWithoutMembersNestedInput = {
    create?: XOR<VillageCreateWithoutMembersInput, VillageUncheckedCreateWithoutMembersInput>
    connectOrCreate?: VillageCreateOrConnectWithoutMembersInput
    upsert?: VillageUpsertWithoutMembersInput
    disconnect?: VillageWhereInput | boolean
    delete?: VillageWhereInput | boolean
    connect?: VillageWhereUniqueInput
    update?: XOR<XOR<VillageUpdateToOneWithWhereWithoutMembersInput, VillageUpdateWithoutMembersInput>, VillageUncheckedUpdateWithoutMembersInput>
  }

  export type VillageAdminUpdateOneWithoutMemberNestedInput = {
    create?: XOR<VillageAdminCreateWithoutMemberInput, VillageAdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: VillageAdminCreateOrConnectWithoutMemberInput
    upsert?: VillageAdminUpsertWithoutMemberInput
    disconnect?: VillageAdminWhereInput | boolean
    delete?: VillageAdminWhereInput | boolean
    connect?: VillageAdminWhereUniqueInput
    update?: XOR<XOR<VillageAdminUpdateToOneWithWhereWithoutMemberInput, VillageAdminUpdateWithoutMemberInput>, VillageAdminUncheckedUpdateWithoutMemberInput>
  }

  export type SuperAdminUpdateOneWithoutMemberNestedInput = {
    create?: XOR<SuperAdminCreateWithoutMemberInput, SuperAdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: SuperAdminCreateOrConnectWithoutMemberInput
    upsert?: SuperAdminUpsertWithoutMemberInput
    disconnect?: SuperAdminWhereInput | boolean
    delete?: SuperAdminWhereInput | boolean
    connect?: SuperAdminWhereUniqueInput
    update?: XOR<XOR<SuperAdminUpdateToOneWithWhereWithoutMemberInput, SuperAdminUpdateWithoutMemberInput>, SuperAdminUncheckedUpdateWithoutMemberInput>
  }

  export type EventUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<EventCreateWithoutPostedByInput, EventUncheckedCreateWithoutPostedByInput> | EventCreateWithoutPostedByInput[] | EventUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPostedByInput | EventCreateOrConnectWithoutPostedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPostedByInput | EventUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: EventCreateManyPostedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPostedByInput | EventUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPostedByInput | EventUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutFamilyHeadNestedInput = {
    create?: XOR<MemberCreateWithoutFamilyHeadInput, MemberUncheckedCreateWithoutFamilyHeadInput> | MemberCreateWithoutFamilyHeadInput[] | MemberUncheckedCreateWithoutFamilyHeadInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutFamilyHeadInput | MemberCreateOrConnectWithoutFamilyHeadInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutFamilyHeadInput | MemberUpsertWithWhereUniqueWithoutFamilyHeadInput[]
    createMany?: MemberCreateManyFamilyHeadInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutFamilyHeadInput | MemberUpdateWithWhereUniqueWithoutFamilyHeadInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutFamilyHeadInput | MemberUpdateManyWithWhereWithoutFamilyHeadInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type VillageAdminUncheckedUpdateOneWithoutMemberNestedInput = {
    create?: XOR<VillageAdminCreateWithoutMemberInput, VillageAdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: VillageAdminCreateOrConnectWithoutMemberInput
    upsert?: VillageAdminUpsertWithoutMemberInput
    disconnect?: VillageAdminWhereInput | boolean
    delete?: VillageAdminWhereInput | boolean
    connect?: VillageAdminWhereUniqueInput
    update?: XOR<XOR<VillageAdminUpdateToOneWithWhereWithoutMemberInput, VillageAdminUpdateWithoutMemberInput>, VillageAdminUncheckedUpdateWithoutMemberInput>
  }

  export type SuperAdminUncheckedUpdateOneWithoutMemberNestedInput = {
    create?: XOR<SuperAdminCreateWithoutMemberInput, SuperAdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: SuperAdminCreateOrConnectWithoutMemberInput
    upsert?: SuperAdminUpsertWithoutMemberInput
    disconnect?: SuperAdminWhereInput | boolean
    delete?: SuperAdminWhereInput | boolean
    connect?: SuperAdminWhereUniqueInput
    update?: XOR<XOR<SuperAdminUpdateToOneWithWhereWithoutMemberInput, SuperAdminUpdateWithoutMemberInput>, SuperAdminUncheckedUpdateWithoutMemberInput>
  }

  export type EventUncheckedUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<EventCreateWithoutPostedByInput, EventUncheckedCreateWithoutPostedByInput> | EventCreateWithoutPostedByInput[] | EventUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPostedByInput | EventCreateOrConnectWithoutPostedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPostedByInput | EventUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: EventCreateManyPostedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPostedByInput | EventUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPostedByInput | EventUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type VillageCreateNestedOneWithoutFamiliesInput = {
    create?: XOR<VillageCreateWithoutFamiliesInput, VillageUncheckedCreateWithoutFamiliesInput>
    connectOrCreate?: VillageCreateOrConnectWithoutFamiliesInput
    connect?: VillageWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutFamilyInput = {
    create?: XOR<MemberCreateWithoutFamilyInput, MemberUncheckedCreateWithoutFamilyInput> | MemberCreateWithoutFamilyInput[] | MemberUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutFamilyInput | MemberCreateOrConnectWithoutFamilyInput[]
    createMany?: MemberCreateManyFamilyInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<MemberCreateWithoutFamilyInput, MemberUncheckedCreateWithoutFamilyInput> | MemberCreateWithoutFamilyInput[] | MemberUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutFamilyInput | MemberCreateOrConnectWithoutFamilyInput[]
    createMany?: MemberCreateManyFamilyInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type VillageUpdateOneRequiredWithoutFamiliesNestedInput = {
    create?: XOR<VillageCreateWithoutFamiliesInput, VillageUncheckedCreateWithoutFamiliesInput>
    connectOrCreate?: VillageCreateOrConnectWithoutFamiliesInput
    upsert?: VillageUpsertWithoutFamiliesInput
    connect?: VillageWhereUniqueInput
    update?: XOR<XOR<VillageUpdateToOneWithWhereWithoutFamiliesInput, VillageUpdateWithoutFamiliesInput>, VillageUncheckedUpdateWithoutFamiliesInput>
  }

  export type MemberUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<MemberCreateWithoutFamilyInput, MemberUncheckedCreateWithoutFamilyInput> | MemberCreateWithoutFamilyInput[] | MemberUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutFamilyInput | MemberCreateOrConnectWithoutFamilyInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutFamilyInput | MemberUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: MemberCreateManyFamilyInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutFamilyInput | MemberUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutFamilyInput | MemberUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<MemberCreateWithoutFamilyInput, MemberUncheckedCreateWithoutFamilyInput> | MemberCreateWithoutFamilyInput[] | MemberUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutFamilyInput | MemberCreateOrConnectWithoutFamilyInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutFamilyInput | MemberUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: MemberCreateManyFamilyInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutFamilyInput | MemberUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutFamilyInput | MemberUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MemberCreateNestedManyWithoutVillageInput = {
    create?: XOR<MemberCreateWithoutVillageInput, MemberUncheckedCreateWithoutVillageInput> | MemberCreateWithoutVillageInput[] | MemberUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVillageInput | MemberCreateOrConnectWithoutVillageInput[]
    createMany?: MemberCreateManyVillageInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type VillageAdminCreateNestedManyWithoutVillageInput = {
    create?: XOR<VillageAdminCreateWithoutVillageInput, VillageAdminUncheckedCreateWithoutVillageInput> | VillageAdminCreateWithoutVillageInput[] | VillageAdminUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: VillageAdminCreateOrConnectWithoutVillageInput | VillageAdminCreateOrConnectWithoutVillageInput[]
    createMany?: VillageAdminCreateManyVillageInputEnvelope
    connect?: VillageAdminWhereUniqueInput | VillageAdminWhereUniqueInput[]
  }

  export type FamilyCreateNestedManyWithoutVillageInput = {
    create?: XOR<FamilyCreateWithoutVillageInput, FamilyUncheckedCreateWithoutVillageInput> | FamilyCreateWithoutVillageInput[] | FamilyUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: FamilyCreateOrConnectWithoutVillageInput | FamilyCreateOrConnectWithoutVillageInput[]
    createMany?: FamilyCreateManyVillageInputEnvelope
    connect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutVillageInput = {
    create?: XOR<MemberCreateWithoutVillageInput, MemberUncheckedCreateWithoutVillageInput> | MemberCreateWithoutVillageInput[] | MemberUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVillageInput | MemberCreateOrConnectWithoutVillageInput[]
    createMany?: MemberCreateManyVillageInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type VillageAdminUncheckedCreateNestedManyWithoutVillageInput = {
    create?: XOR<VillageAdminCreateWithoutVillageInput, VillageAdminUncheckedCreateWithoutVillageInput> | VillageAdminCreateWithoutVillageInput[] | VillageAdminUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: VillageAdminCreateOrConnectWithoutVillageInput | VillageAdminCreateOrConnectWithoutVillageInput[]
    createMany?: VillageAdminCreateManyVillageInputEnvelope
    connect?: VillageAdminWhereUniqueInput | VillageAdminWhereUniqueInput[]
  }

  export type FamilyUncheckedCreateNestedManyWithoutVillageInput = {
    create?: XOR<FamilyCreateWithoutVillageInput, FamilyUncheckedCreateWithoutVillageInput> | FamilyCreateWithoutVillageInput[] | FamilyUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: FamilyCreateOrConnectWithoutVillageInput | FamilyCreateOrConnectWithoutVillageInput[]
    createMany?: FamilyCreateManyVillageInputEnvelope
    connect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
  }

  export type MemberUpdateManyWithoutVillageNestedInput = {
    create?: XOR<MemberCreateWithoutVillageInput, MemberUncheckedCreateWithoutVillageInput> | MemberCreateWithoutVillageInput[] | MemberUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVillageInput | MemberCreateOrConnectWithoutVillageInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutVillageInput | MemberUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: MemberCreateManyVillageInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutVillageInput | MemberUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutVillageInput | MemberUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type VillageAdminUpdateManyWithoutVillageNestedInput = {
    create?: XOR<VillageAdminCreateWithoutVillageInput, VillageAdminUncheckedCreateWithoutVillageInput> | VillageAdminCreateWithoutVillageInput[] | VillageAdminUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: VillageAdminCreateOrConnectWithoutVillageInput | VillageAdminCreateOrConnectWithoutVillageInput[]
    upsert?: VillageAdminUpsertWithWhereUniqueWithoutVillageInput | VillageAdminUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: VillageAdminCreateManyVillageInputEnvelope
    set?: VillageAdminWhereUniqueInput | VillageAdminWhereUniqueInput[]
    disconnect?: VillageAdminWhereUniqueInput | VillageAdminWhereUniqueInput[]
    delete?: VillageAdminWhereUniqueInput | VillageAdminWhereUniqueInput[]
    connect?: VillageAdminWhereUniqueInput | VillageAdminWhereUniqueInput[]
    update?: VillageAdminUpdateWithWhereUniqueWithoutVillageInput | VillageAdminUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: VillageAdminUpdateManyWithWhereWithoutVillageInput | VillageAdminUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: VillageAdminScalarWhereInput | VillageAdminScalarWhereInput[]
  }

  export type FamilyUpdateManyWithoutVillageNestedInput = {
    create?: XOR<FamilyCreateWithoutVillageInput, FamilyUncheckedCreateWithoutVillageInput> | FamilyCreateWithoutVillageInput[] | FamilyUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: FamilyCreateOrConnectWithoutVillageInput | FamilyCreateOrConnectWithoutVillageInput[]
    upsert?: FamilyUpsertWithWhereUniqueWithoutVillageInput | FamilyUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: FamilyCreateManyVillageInputEnvelope
    set?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    disconnect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    delete?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    connect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    update?: FamilyUpdateWithWhereUniqueWithoutVillageInput | FamilyUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: FamilyUpdateManyWithWhereWithoutVillageInput | FamilyUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: FamilyScalarWhereInput | FamilyScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: XOR<MemberCreateWithoutVillageInput, MemberUncheckedCreateWithoutVillageInput> | MemberCreateWithoutVillageInput[] | MemberUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVillageInput | MemberCreateOrConnectWithoutVillageInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutVillageInput | MemberUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: MemberCreateManyVillageInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutVillageInput | MemberUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutVillageInput | MemberUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type VillageAdminUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: XOR<VillageAdminCreateWithoutVillageInput, VillageAdminUncheckedCreateWithoutVillageInput> | VillageAdminCreateWithoutVillageInput[] | VillageAdminUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: VillageAdminCreateOrConnectWithoutVillageInput | VillageAdminCreateOrConnectWithoutVillageInput[]
    upsert?: VillageAdminUpsertWithWhereUniqueWithoutVillageInput | VillageAdminUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: VillageAdminCreateManyVillageInputEnvelope
    set?: VillageAdminWhereUniqueInput | VillageAdminWhereUniqueInput[]
    disconnect?: VillageAdminWhereUniqueInput | VillageAdminWhereUniqueInput[]
    delete?: VillageAdminWhereUniqueInput | VillageAdminWhereUniqueInput[]
    connect?: VillageAdminWhereUniqueInput | VillageAdminWhereUniqueInput[]
    update?: VillageAdminUpdateWithWhereUniqueWithoutVillageInput | VillageAdminUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: VillageAdminUpdateManyWithWhereWithoutVillageInput | VillageAdminUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: VillageAdminScalarWhereInput | VillageAdminScalarWhereInput[]
  }

  export type FamilyUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: XOR<FamilyCreateWithoutVillageInput, FamilyUncheckedCreateWithoutVillageInput> | FamilyCreateWithoutVillageInput[] | FamilyUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: FamilyCreateOrConnectWithoutVillageInput | FamilyCreateOrConnectWithoutVillageInput[]
    upsert?: FamilyUpsertWithWhereUniqueWithoutVillageInput | FamilyUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: FamilyCreateManyVillageInputEnvelope
    set?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    disconnect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    delete?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    connect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    update?: FamilyUpdateWithWhereUniqueWithoutVillageInput | FamilyUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: FamilyUpdateManyWithWhereWithoutVillageInput | FamilyUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: FamilyScalarWhereInput | FamilyScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutVillageAdminInput = {
    create?: XOR<MemberCreateWithoutVillageAdminInput, MemberUncheckedCreateWithoutVillageAdminInput>
    connectOrCreate?: MemberCreateOrConnectWithoutVillageAdminInput
    connect?: MemberWhereUniqueInput
  }

  export type VillageCreateNestedOneWithoutAdminsInput = {
    create?: XOR<VillageCreateWithoutAdminsInput, VillageUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: VillageCreateOrConnectWithoutAdminsInput
    connect?: VillageWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutVillageAdminNestedInput = {
    create?: XOR<MemberCreateWithoutVillageAdminInput, MemberUncheckedCreateWithoutVillageAdminInput>
    connectOrCreate?: MemberCreateOrConnectWithoutVillageAdminInput
    upsert?: MemberUpsertWithoutVillageAdminInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutVillageAdminInput, MemberUpdateWithoutVillageAdminInput>, MemberUncheckedUpdateWithoutVillageAdminInput>
  }

  export type VillageUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<VillageCreateWithoutAdminsInput, VillageUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: VillageCreateOrConnectWithoutAdminsInput
    upsert?: VillageUpsertWithoutAdminsInput
    connect?: VillageWhereUniqueInput
    update?: XOR<XOR<VillageUpdateToOneWithWhereWithoutAdminsInput, VillageUpdateWithoutAdminsInput>, VillageUncheckedUpdateWithoutAdminsInput>
  }

  export type MemberCreateNestedOneWithoutSuperAdminInput = {
    create?: XOR<MemberCreateWithoutSuperAdminInput, MemberUncheckedCreateWithoutSuperAdminInput>
    connectOrCreate?: MemberCreateOrConnectWithoutSuperAdminInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutSuperAdminNestedInput = {
    create?: XOR<MemberCreateWithoutSuperAdminInput, MemberUncheckedCreateWithoutSuperAdminInput>
    connectOrCreate?: MemberCreateOrConnectWithoutSuperAdminInput
    upsert?: MemberUpsertWithoutSuperAdminInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutSuperAdminInput, MemberUpdateWithoutSuperAdminInput>, MemberUncheckedUpdateWithoutSuperAdminInput>
  }

  export type MemberCreateNestedOneWithoutEventsPostedInput = {
    create?: XOR<MemberCreateWithoutEventsPostedInput, MemberUncheckedCreateWithoutEventsPostedInput>
    connectOrCreate?: MemberCreateOrConnectWithoutEventsPostedInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutEventsPostedNestedInput = {
    create?: XOR<MemberCreateWithoutEventsPostedInput, MemberUncheckedCreateWithoutEventsPostedInput>
    connectOrCreate?: MemberCreateOrConnectWithoutEventsPostedInput
    upsert?: MemberUpsertWithoutEventsPostedInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutEventsPostedInput, MemberUpdateWithoutEventsPostedInput>, MemberUncheckedUpdateWithoutEventsPostedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FamilyCreateWithoutMembersInput = {
    id?: string
    name?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    village: VillageCreateNestedOneWithoutFamiliesInput
  }

  export type FamilyUncheckedCreateWithoutMembersInput = {
    id?: string
    name?: string | null
    address?: string | null
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyCreateOrConnectWithoutMembersInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutMembersInput, FamilyUncheckedCreateWithoutMembersInput>
  }

  export type MemberCreateWithoutFamilyMembersInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FamilyCreateNestedOneWithoutMembersInput
    familyHead?: MemberCreateNestedOneWithoutFamilyMembersInput
    village?: VillageCreateNestedOneWithoutMembersInput
    villageAdmin?: VillageAdminCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminCreateNestedOneWithoutMemberInput
    eventsPosted?: EventCreateNestedManyWithoutPostedByInput
  }

  export type MemberUncheckedCreateWithoutFamilyMembersInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyId?: string | null
    familyHeadId?: string | null
    villageId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    villageAdmin?: VillageAdminUncheckedCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminUncheckedCreateNestedOneWithoutMemberInput
    eventsPosted?: EventUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type MemberCreateOrConnectWithoutFamilyMembersInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutFamilyMembersInput, MemberUncheckedCreateWithoutFamilyMembersInput>
  }

  export type MemberCreateWithoutFamilyHeadInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FamilyCreateNestedOneWithoutMembersInput
    familyMembers?: MemberCreateNestedManyWithoutFamilyHeadInput
    village?: VillageCreateNestedOneWithoutMembersInput
    villageAdmin?: VillageAdminCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminCreateNestedOneWithoutMemberInput
    eventsPosted?: EventCreateNestedManyWithoutPostedByInput
  }

  export type MemberUncheckedCreateWithoutFamilyHeadInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyId?: string | null
    villageId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familyMembers?: MemberUncheckedCreateNestedManyWithoutFamilyHeadInput
    villageAdmin?: VillageAdminUncheckedCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminUncheckedCreateNestedOneWithoutMemberInput
    eventsPosted?: EventUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type MemberCreateOrConnectWithoutFamilyHeadInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutFamilyHeadInput, MemberUncheckedCreateWithoutFamilyHeadInput>
  }

  export type MemberCreateManyFamilyHeadInputEnvelope = {
    data: MemberCreateManyFamilyHeadInput | MemberCreateManyFamilyHeadInput[]
    skipDuplicates?: boolean
  }

  export type VillageCreateWithoutMembersInput = {
    id?: string
    name: string
    district?: string | null
    state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: VillageAdminCreateNestedManyWithoutVillageInput
    families?: FamilyCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    district?: string | null
    state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: VillageAdminUncheckedCreateNestedManyWithoutVillageInput
    families?: FamilyUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageCreateOrConnectWithoutMembersInput = {
    where: VillageWhereUniqueInput
    create: XOR<VillageCreateWithoutMembersInput, VillageUncheckedCreateWithoutMembersInput>
  }

  export type VillageAdminCreateWithoutMemberInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    village: VillageCreateNestedOneWithoutAdminsInput
  }

  export type VillageAdminUncheckedCreateWithoutMemberInput = {
    id?: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillageAdminCreateOrConnectWithoutMemberInput = {
    where: VillageAdminWhereUniqueInput
    create: XOR<VillageAdminCreateWithoutMemberInput, VillageAdminUncheckedCreateWithoutMemberInput>
  }

  export type SuperAdminCreateWithoutMemberInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUncheckedCreateWithoutMemberInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminCreateOrConnectWithoutMemberInput = {
    where: SuperAdminWhereUniqueInput
    create: XOR<SuperAdminCreateWithoutMemberInput, SuperAdminUncheckedCreateWithoutMemberInput>
  }

  export type EventCreateWithoutPostedByInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateWithoutPostedByInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutPostedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPostedByInput, EventUncheckedCreateWithoutPostedByInput>
  }

  export type EventCreateManyPostedByInputEnvelope = {
    data: EventCreateManyPostedByInput | EventCreateManyPostedByInput[]
    skipDuplicates?: boolean
  }

  export type FamilyUpsertWithoutMembersInput = {
    update: XOR<FamilyUpdateWithoutMembersInput, FamilyUncheckedUpdateWithoutMembersInput>
    create: XOR<FamilyCreateWithoutMembersInput, FamilyUncheckedCreateWithoutMembersInput>
    where?: FamilyWhereInput
  }

  export type FamilyUpdateToOneWithWhereWithoutMembersInput = {
    where?: FamilyWhereInput
    data: XOR<FamilyUpdateWithoutMembersInput, FamilyUncheckedUpdateWithoutMembersInput>
  }

  export type FamilyUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneRequiredWithoutFamiliesNestedInput
  }

  export type FamilyUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUpsertWithoutFamilyMembersInput = {
    update: XOR<MemberUpdateWithoutFamilyMembersInput, MemberUncheckedUpdateWithoutFamilyMembersInput>
    create: XOR<MemberCreateWithoutFamilyMembersInput, MemberUncheckedCreateWithoutFamilyMembersInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutFamilyMembersInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutFamilyMembersInput, MemberUncheckedUpdateWithoutFamilyMembersInput>
  }

  export type MemberUpdateWithoutFamilyMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneWithoutMembersNestedInput
    familyHead?: MemberUpdateOneWithoutFamilyMembersNestedInput
    village?: VillageUpdateOneWithoutMembersNestedInput
    villageAdmin?: VillageAdminUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUncheckedUpdateWithoutFamilyMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    villageAdmin?: VillageAdminUncheckedUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUncheckedUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutFamilyHeadInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutFamilyHeadInput, MemberUncheckedUpdateWithoutFamilyHeadInput>
    create: XOR<MemberCreateWithoutFamilyHeadInput, MemberUncheckedCreateWithoutFamilyHeadInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutFamilyHeadInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutFamilyHeadInput, MemberUncheckedUpdateWithoutFamilyHeadInput>
  }

  export type MemberUpdateManyWithWhereWithoutFamilyHeadInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutFamilyHeadInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    password?: StringFilter<"Member"> | string
    dob?: DateTimeNullableFilter<"Member"> | Date | string | null
    gender?: EnumGenderNullableFilter<"Member"> | $Enums.Gender | null
    phone?: StringFilter<"Member"> | string
    email?: StringNullableFilter<"Member"> | string | null
    address?: StringNullableFilter<"Member"> | string | null
    business?: StringNullableFilter<"Member"> | string | null
    job?: StringNullableFilter<"Member"> | string | null
    education?: StringNullableFilter<"Member"> | string | null
    bloodGroup?: StringNullableFilter<"Member"> | string | null
    maternalSurname?: StringNullableFilter<"Member"> | string | null
    maternalVillage?: StringNullableFilter<"Member"> | string | null
    maritalStatus?: StringNullableFilter<"Member"> | string | null
    relationToHead?: StringNullableFilter<"Member"> | string | null
    photoUrl?: StringNullableFilter<"Member"> | string | null
    familyId?: StringNullableFilter<"Member"> | string | null
    familyHeadId?: StringNullableFilter<"Member"> | string | null
    villageId?: StringNullableFilter<"Member"> | string | null
    role?: EnumRoleFilter<"Member"> | $Enums.Role
    isActive?: BoolFilter<"Member"> | boolean
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type VillageUpsertWithoutMembersInput = {
    update: XOR<VillageUpdateWithoutMembersInput, VillageUncheckedUpdateWithoutMembersInput>
    create: XOR<VillageCreateWithoutMembersInput, VillageUncheckedCreateWithoutMembersInput>
    where?: VillageWhereInput
  }

  export type VillageUpdateToOneWithWhereWithoutMembersInput = {
    where?: VillageWhereInput
    data: XOR<VillageUpdateWithoutMembersInput, VillageUncheckedUpdateWithoutMembersInput>
  }

  export type VillageUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: VillageAdminUpdateManyWithoutVillageNestedInput
    families?: FamilyUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: VillageAdminUncheckedUpdateManyWithoutVillageNestedInput
    families?: FamilyUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type VillageAdminUpsertWithoutMemberInput = {
    update: XOR<VillageAdminUpdateWithoutMemberInput, VillageAdminUncheckedUpdateWithoutMemberInput>
    create: XOR<VillageAdminCreateWithoutMemberInput, VillageAdminUncheckedCreateWithoutMemberInput>
    where?: VillageAdminWhereInput
  }

  export type VillageAdminUpdateToOneWithWhereWithoutMemberInput = {
    where?: VillageAdminWhereInput
    data: XOR<VillageAdminUpdateWithoutMemberInput, VillageAdminUncheckedUpdateWithoutMemberInput>
  }

  export type VillageAdminUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type VillageAdminUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUpsertWithoutMemberInput = {
    update: XOR<SuperAdminUpdateWithoutMemberInput, SuperAdminUncheckedUpdateWithoutMemberInput>
    create: XOR<SuperAdminCreateWithoutMemberInput, SuperAdminUncheckedCreateWithoutMemberInput>
    where?: SuperAdminWhereInput
  }

  export type SuperAdminUpdateToOneWithWhereWithoutMemberInput = {
    where?: SuperAdminWhereInput
    data: XOR<SuperAdminUpdateWithoutMemberInput, SuperAdminUncheckedUpdateWithoutMemberInput>
  }

  export type SuperAdminUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutPostedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutPostedByInput, EventUncheckedUpdateWithoutPostedByInput>
    create: XOR<EventCreateWithoutPostedByInput, EventUncheckedCreateWithoutPostedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutPostedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutPostedByInput, EventUncheckedUpdateWithoutPostedByInput>
  }

  export type EventUpdateManyWithWhereWithoutPostedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutPostedByInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    content?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    postedById?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type VillageCreateWithoutFamiliesInput = {
    id?: string
    name: string
    district?: string | null
    state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutVillageInput
    admins?: VillageAdminCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateWithoutFamiliesInput = {
    id?: string
    name: string
    district?: string | null
    state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutVillageInput
    admins?: VillageAdminUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageCreateOrConnectWithoutFamiliesInput = {
    where: VillageWhereUniqueInput
    create: XOR<VillageCreateWithoutFamiliesInput, VillageUncheckedCreateWithoutFamiliesInput>
  }

  export type MemberCreateWithoutFamilyInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familyHead?: MemberCreateNestedOneWithoutFamilyMembersInput
    familyMembers?: MemberCreateNestedManyWithoutFamilyHeadInput
    village?: VillageCreateNestedOneWithoutMembersInput
    villageAdmin?: VillageAdminCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminCreateNestedOneWithoutMemberInput
    eventsPosted?: EventCreateNestedManyWithoutPostedByInput
  }

  export type MemberUncheckedCreateWithoutFamilyInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyHeadId?: string | null
    villageId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familyMembers?: MemberUncheckedCreateNestedManyWithoutFamilyHeadInput
    villageAdmin?: VillageAdminUncheckedCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminUncheckedCreateNestedOneWithoutMemberInput
    eventsPosted?: EventUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type MemberCreateOrConnectWithoutFamilyInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutFamilyInput, MemberUncheckedCreateWithoutFamilyInput>
  }

  export type MemberCreateManyFamilyInputEnvelope = {
    data: MemberCreateManyFamilyInput | MemberCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type VillageUpsertWithoutFamiliesInput = {
    update: XOR<VillageUpdateWithoutFamiliesInput, VillageUncheckedUpdateWithoutFamiliesInput>
    create: XOR<VillageCreateWithoutFamiliesInput, VillageUncheckedCreateWithoutFamiliesInput>
    where?: VillageWhereInput
  }

  export type VillageUpdateToOneWithWhereWithoutFamiliesInput = {
    where?: VillageWhereInput
    data: XOR<VillageUpdateWithoutFamiliesInput, VillageUncheckedUpdateWithoutFamiliesInput>
  }

  export type VillageUpdateWithoutFamiliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutVillageNestedInput
    admins?: VillageAdminUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateWithoutFamiliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutVillageNestedInput
    admins?: VillageAdminUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutFamilyInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutFamilyInput, MemberUncheckedUpdateWithoutFamilyInput>
    create: XOR<MemberCreateWithoutFamilyInput, MemberUncheckedCreateWithoutFamilyInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutFamilyInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutFamilyInput, MemberUncheckedUpdateWithoutFamilyInput>
  }

  export type MemberUpdateManyWithWhereWithoutFamilyInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutFamilyInput>
  }

  export type MemberCreateWithoutVillageInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FamilyCreateNestedOneWithoutMembersInput
    familyHead?: MemberCreateNestedOneWithoutFamilyMembersInput
    familyMembers?: MemberCreateNestedManyWithoutFamilyHeadInput
    villageAdmin?: VillageAdminCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminCreateNestedOneWithoutMemberInput
    eventsPosted?: EventCreateNestedManyWithoutPostedByInput
  }

  export type MemberUncheckedCreateWithoutVillageInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyId?: string | null
    familyHeadId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familyMembers?: MemberUncheckedCreateNestedManyWithoutFamilyHeadInput
    villageAdmin?: VillageAdminUncheckedCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminUncheckedCreateNestedOneWithoutMemberInput
    eventsPosted?: EventUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type MemberCreateOrConnectWithoutVillageInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutVillageInput, MemberUncheckedCreateWithoutVillageInput>
  }

  export type MemberCreateManyVillageInputEnvelope = {
    data: MemberCreateManyVillageInput | MemberCreateManyVillageInput[]
    skipDuplicates?: boolean
  }

  export type VillageAdminCreateWithoutVillageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutVillageAdminInput
  }

  export type VillageAdminUncheckedCreateWithoutVillageInput = {
    id?: string
    memberId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillageAdminCreateOrConnectWithoutVillageInput = {
    where: VillageAdminWhereUniqueInput
    create: XOR<VillageAdminCreateWithoutVillageInput, VillageAdminUncheckedCreateWithoutVillageInput>
  }

  export type VillageAdminCreateManyVillageInputEnvelope = {
    data: VillageAdminCreateManyVillageInput | VillageAdminCreateManyVillageInput[]
    skipDuplicates?: boolean
  }

  export type FamilyCreateWithoutVillageInput = {
    id?: string
    name?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateWithoutVillageInput = {
    id?: string
    name?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyCreateOrConnectWithoutVillageInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutVillageInput, FamilyUncheckedCreateWithoutVillageInput>
  }

  export type FamilyCreateManyVillageInputEnvelope = {
    data: FamilyCreateManyVillageInput | FamilyCreateManyVillageInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithWhereUniqueWithoutVillageInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutVillageInput, MemberUncheckedUpdateWithoutVillageInput>
    create: XOR<MemberCreateWithoutVillageInput, MemberUncheckedCreateWithoutVillageInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutVillageInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutVillageInput, MemberUncheckedUpdateWithoutVillageInput>
  }

  export type MemberUpdateManyWithWhereWithoutVillageInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutVillageInput>
  }

  export type VillageAdminUpsertWithWhereUniqueWithoutVillageInput = {
    where: VillageAdminWhereUniqueInput
    update: XOR<VillageAdminUpdateWithoutVillageInput, VillageAdminUncheckedUpdateWithoutVillageInput>
    create: XOR<VillageAdminCreateWithoutVillageInput, VillageAdminUncheckedCreateWithoutVillageInput>
  }

  export type VillageAdminUpdateWithWhereUniqueWithoutVillageInput = {
    where: VillageAdminWhereUniqueInput
    data: XOR<VillageAdminUpdateWithoutVillageInput, VillageAdminUncheckedUpdateWithoutVillageInput>
  }

  export type VillageAdminUpdateManyWithWhereWithoutVillageInput = {
    where: VillageAdminScalarWhereInput
    data: XOR<VillageAdminUpdateManyMutationInput, VillageAdminUncheckedUpdateManyWithoutVillageInput>
  }

  export type VillageAdminScalarWhereInput = {
    AND?: VillageAdminScalarWhereInput | VillageAdminScalarWhereInput[]
    OR?: VillageAdminScalarWhereInput[]
    NOT?: VillageAdminScalarWhereInput | VillageAdminScalarWhereInput[]
    id?: StringFilter<"VillageAdmin"> | string
    memberId?: StringFilter<"VillageAdmin"> | string
    villageId?: StringFilter<"VillageAdmin"> | string
    createdAt?: DateTimeFilter<"VillageAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"VillageAdmin"> | Date | string
  }

  export type FamilyUpsertWithWhereUniqueWithoutVillageInput = {
    where: FamilyWhereUniqueInput
    update: XOR<FamilyUpdateWithoutVillageInput, FamilyUncheckedUpdateWithoutVillageInput>
    create: XOR<FamilyCreateWithoutVillageInput, FamilyUncheckedCreateWithoutVillageInput>
  }

  export type FamilyUpdateWithWhereUniqueWithoutVillageInput = {
    where: FamilyWhereUniqueInput
    data: XOR<FamilyUpdateWithoutVillageInput, FamilyUncheckedUpdateWithoutVillageInput>
  }

  export type FamilyUpdateManyWithWhereWithoutVillageInput = {
    where: FamilyScalarWhereInput
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyWithoutVillageInput>
  }

  export type FamilyScalarWhereInput = {
    AND?: FamilyScalarWhereInput | FamilyScalarWhereInput[]
    OR?: FamilyScalarWhereInput[]
    NOT?: FamilyScalarWhereInput | FamilyScalarWhereInput[]
    id?: StringFilter<"Family"> | string
    name?: StringNullableFilter<"Family"> | string | null
    address?: StringNullableFilter<"Family"> | string | null
    villageId?: StringFilter<"Family"> | string
    createdAt?: DateTimeFilter<"Family"> | Date | string
    updatedAt?: DateTimeFilter<"Family"> | Date | string
  }

  export type MemberCreateWithoutVillageAdminInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FamilyCreateNestedOneWithoutMembersInput
    familyHead?: MemberCreateNestedOneWithoutFamilyMembersInput
    familyMembers?: MemberCreateNestedManyWithoutFamilyHeadInput
    village?: VillageCreateNestedOneWithoutMembersInput
    superAdmin?: SuperAdminCreateNestedOneWithoutMemberInput
    eventsPosted?: EventCreateNestedManyWithoutPostedByInput
  }

  export type MemberUncheckedCreateWithoutVillageAdminInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyId?: string | null
    familyHeadId?: string | null
    villageId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familyMembers?: MemberUncheckedCreateNestedManyWithoutFamilyHeadInput
    superAdmin?: SuperAdminUncheckedCreateNestedOneWithoutMemberInput
    eventsPosted?: EventUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type MemberCreateOrConnectWithoutVillageAdminInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutVillageAdminInput, MemberUncheckedCreateWithoutVillageAdminInput>
  }

  export type VillageCreateWithoutAdminsInput = {
    id?: string
    name: string
    district?: string | null
    state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutVillageInput
    families?: FamilyCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateWithoutAdminsInput = {
    id?: string
    name: string
    district?: string | null
    state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutVillageInput
    families?: FamilyUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageCreateOrConnectWithoutAdminsInput = {
    where: VillageWhereUniqueInput
    create: XOR<VillageCreateWithoutAdminsInput, VillageUncheckedCreateWithoutAdminsInput>
  }

  export type MemberUpsertWithoutVillageAdminInput = {
    update: XOR<MemberUpdateWithoutVillageAdminInput, MemberUncheckedUpdateWithoutVillageAdminInput>
    create: XOR<MemberCreateWithoutVillageAdminInput, MemberUncheckedCreateWithoutVillageAdminInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutVillageAdminInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutVillageAdminInput, MemberUncheckedUpdateWithoutVillageAdminInput>
  }

  export type MemberUpdateWithoutVillageAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneWithoutMembersNestedInput
    familyHead?: MemberUpdateOneWithoutFamilyMembersNestedInput
    familyMembers?: MemberUpdateManyWithoutFamilyHeadNestedInput
    village?: VillageUpdateOneWithoutMembersNestedInput
    superAdmin?: SuperAdminUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUncheckedUpdateWithoutVillageAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyMembers?: MemberUncheckedUpdateManyWithoutFamilyHeadNestedInput
    superAdmin?: SuperAdminUncheckedUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type VillageUpsertWithoutAdminsInput = {
    update: XOR<VillageUpdateWithoutAdminsInput, VillageUncheckedUpdateWithoutAdminsInput>
    create: XOR<VillageCreateWithoutAdminsInput, VillageUncheckedCreateWithoutAdminsInput>
    where?: VillageWhereInput
  }

  export type VillageUpdateToOneWithWhereWithoutAdminsInput = {
    where?: VillageWhereInput
    data: XOR<VillageUpdateWithoutAdminsInput, VillageUncheckedUpdateWithoutAdminsInput>
  }

  export type VillageUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutVillageNestedInput
    families?: FamilyUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutVillageNestedInput
    families?: FamilyUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type MemberCreateWithoutSuperAdminInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FamilyCreateNestedOneWithoutMembersInput
    familyHead?: MemberCreateNestedOneWithoutFamilyMembersInput
    familyMembers?: MemberCreateNestedManyWithoutFamilyHeadInput
    village?: VillageCreateNestedOneWithoutMembersInput
    villageAdmin?: VillageAdminCreateNestedOneWithoutMemberInput
    eventsPosted?: EventCreateNestedManyWithoutPostedByInput
  }

  export type MemberUncheckedCreateWithoutSuperAdminInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyId?: string | null
    familyHeadId?: string | null
    villageId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familyMembers?: MemberUncheckedCreateNestedManyWithoutFamilyHeadInput
    villageAdmin?: VillageAdminUncheckedCreateNestedOneWithoutMemberInput
    eventsPosted?: EventUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type MemberCreateOrConnectWithoutSuperAdminInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutSuperAdminInput, MemberUncheckedCreateWithoutSuperAdminInput>
  }

  export type MemberUpsertWithoutSuperAdminInput = {
    update: XOR<MemberUpdateWithoutSuperAdminInput, MemberUncheckedUpdateWithoutSuperAdminInput>
    create: XOR<MemberCreateWithoutSuperAdminInput, MemberUncheckedCreateWithoutSuperAdminInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutSuperAdminInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutSuperAdminInput, MemberUncheckedUpdateWithoutSuperAdminInput>
  }

  export type MemberUpdateWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneWithoutMembersNestedInput
    familyHead?: MemberUpdateOneWithoutFamilyMembersNestedInput
    familyMembers?: MemberUpdateManyWithoutFamilyHeadNestedInput
    village?: VillageUpdateOneWithoutMembersNestedInput
    villageAdmin?: VillageAdminUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUncheckedUpdateWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyMembers?: MemberUncheckedUpdateManyWithoutFamilyHeadNestedInput
    villageAdmin?: VillageAdminUncheckedUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type MemberCreateWithoutEventsPostedInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FamilyCreateNestedOneWithoutMembersInput
    familyHead?: MemberCreateNestedOneWithoutFamilyMembersInput
    familyMembers?: MemberCreateNestedManyWithoutFamilyHeadInput
    village?: VillageCreateNestedOneWithoutMembersInput
    villageAdmin?: VillageAdminCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutEventsPostedInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyId?: string | null
    familyHeadId?: string | null
    villageId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familyMembers?: MemberUncheckedCreateNestedManyWithoutFamilyHeadInput
    villageAdmin?: VillageAdminUncheckedCreateNestedOneWithoutMemberInput
    superAdmin?: SuperAdminUncheckedCreateNestedOneWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutEventsPostedInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutEventsPostedInput, MemberUncheckedCreateWithoutEventsPostedInput>
  }

  export type MemberUpsertWithoutEventsPostedInput = {
    update: XOR<MemberUpdateWithoutEventsPostedInput, MemberUncheckedUpdateWithoutEventsPostedInput>
    create: XOR<MemberCreateWithoutEventsPostedInput, MemberUncheckedCreateWithoutEventsPostedInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutEventsPostedInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutEventsPostedInput, MemberUncheckedUpdateWithoutEventsPostedInput>
  }

  export type MemberUpdateWithoutEventsPostedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneWithoutMembersNestedInput
    familyHead?: MemberUpdateOneWithoutFamilyMembersNestedInput
    familyMembers?: MemberUpdateManyWithoutFamilyHeadNestedInput
    village?: VillageUpdateOneWithoutMembersNestedInput
    villageAdmin?: VillageAdminUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUpdateOneWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutEventsPostedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyMembers?: MemberUncheckedUpdateManyWithoutFamilyHeadNestedInput
    villageAdmin?: VillageAdminUncheckedUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUncheckedUpdateOneWithoutMemberNestedInput
  }

  export type MemberCreateManyFamilyHeadInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyId?: string | null
    villageId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyPostedByInput = {
    id?: string
    title: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateWithoutFamilyHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneWithoutMembersNestedInput
    familyMembers?: MemberUpdateManyWithoutFamilyHeadNestedInput
    village?: VillageUpdateOneWithoutMembersNestedInput
    villageAdmin?: VillageAdminUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUncheckedUpdateWithoutFamilyHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyMembers?: MemberUncheckedUpdateManyWithoutFamilyHeadNestedInput
    villageAdmin?: VillageAdminUncheckedUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUncheckedUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutFamilyHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutPostedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutPostedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutPostedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyFamilyInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyHeadId?: string | null
    villageId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyHead?: MemberUpdateOneWithoutFamilyMembersNestedInput
    familyMembers?: MemberUpdateManyWithoutFamilyHeadNestedInput
    village?: VillageUpdateOneWithoutMembersNestedInput
    villageAdmin?: VillageAdminUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUncheckedUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyMembers?: MemberUncheckedUpdateManyWithoutFamilyHeadNestedInput
    villageAdmin?: VillageAdminUncheckedUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUncheckedUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyVillageInput = {
    id?: string
    name: string
    password: string
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    phone: string
    email?: string | null
    address?: string | null
    business?: string | null
    job?: string | null
    education?: string | null
    bloodGroup?: string | null
    maternalSurname?: string | null
    maternalVillage?: string | null
    maritalStatus?: string | null
    relationToHead?: string | null
    photoUrl?: string | null
    familyId?: string | null
    familyHeadId?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillageAdminCreateManyVillageInput = {
    id?: string
    memberId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyCreateManyVillageInput = {
    id?: string
    name?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneWithoutMembersNestedInput
    familyHead?: MemberUpdateOneWithoutFamilyMembersNestedInput
    familyMembers?: MemberUpdateManyWithoutFamilyHeadNestedInput
    villageAdmin?: VillageAdminUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUncheckedUpdateWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyMembers?: MemberUncheckedUpdateManyWithoutFamilyHeadNestedInput
    villageAdmin?: VillageAdminUncheckedUpdateOneWithoutMemberNestedInput
    superAdmin?: SuperAdminUncheckedUpdateOneWithoutMemberNestedInput
    eventsPosted?: EventUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    business?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    maternalSurname?: NullableStringFieldUpdateOperationsInput | string | null
    maternalVillage?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationToHead?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageAdminUpdateWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutVillageAdminNestedInput
  }

  export type VillageAdminUncheckedUpdateWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageAdminUncheckedUpdateManyWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyUpdateWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateManyWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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