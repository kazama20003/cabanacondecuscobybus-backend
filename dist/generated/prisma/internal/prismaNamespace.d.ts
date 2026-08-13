import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Usuario: "Usuario";
    readonly Transporte: "Transporte";
    readonly ParadaTransporte: "ParadaTransporte";
    readonly Tour: "Tour";
    readonly ItinerarioTour: "ItinerarioTour";
    readonly Vehiculo: "Vehiculo";
    readonly SalidaTransporte: "SalidaTransporte";
    readonly SalidaTour: "SalidaTour";
    readonly Reserva: "Reserva";
    readonly PasajeroReserva: "PasajeroReserva";
    readonly Pago: "Pago";
    readonly HistorialReserva: "HistorialReserva";
    readonly TraduccionTransporte: "TraduccionTransporte";
    readonly TraduccionTour: "TraduccionTour";
    readonly Imagen: "Imagen";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "usuario" | "transporte" | "paradaTransporte" | "tour" | "itinerarioTour" | "vehiculo" | "salidaTransporte" | "salidaTour" | "reserva" | "pasajeroReserva" | "pago" | "historialReserva" | "traduccionTransporte" | "traduccionTour" | "imagen";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Usuario: {
            payload: Prisma.$UsuarioPayload<ExtArgs>;
            fields: Prisma.UsuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findFirst: {
                    args: Prisma.UsuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findMany: {
                    args: Prisma.UsuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                create: {
                    args: Prisma.UsuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                createMany: {
                    args: Prisma.UsuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                delete: {
                    args: Prisma.UsuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                update: {
                    args: Prisma.UsuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                upsert: {
                    args: Prisma.UsuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.UsuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        Transporte: {
            payload: Prisma.$TransportePayload<ExtArgs>;
            fields: Prisma.TransporteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TransporteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TransporteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload>;
                };
                findFirst: {
                    args: Prisma.TransporteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TransporteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload>;
                };
                findMany: {
                    args: Prisma.TransporteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload>[];
                };
                create: {
                    args: Prisma.TransporteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload>;
                };
                createMany: {
                    args: Prisma.TransporteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TransporteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload>[];
                };
                delete: {
                    args: Prisma.TransporteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload>;
                };
                update: {
                    args: Prisma.TransporteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload>;
                };
                deleteMany: {
                    args: Prisma.TransporteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TransporteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TransporteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload>[];
                };
                upsert: {
                    args: Prisma.TransporteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransportePayload>;
                };
                aggregate: {
                    args: Prisma.TransporteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransporte>;
                };
                groupBy: {
                    args: Prisma.TransporteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransporteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TransporteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransporteCountAggregateOutputType> | number;
                };
            };
        };
        ParadaTransporte: {
            payload: Prisma.$ParadaTransportePayload<ExtArgs>;
            fields: Prisma.ParadaTransporteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParadaTransporteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParadaTransporteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload>;
                };
                findFirst: {
                    args: Prisma.ParadaTransporteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParadaTransporteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload>;
                };
                findMany: {
                    args: Prisma.ParadaTransporteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload>[];
                };
                create: {
                    args: Prisma.ParadaTransporteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload>;
                };
                createMany: {
                    args: Prisma.ParadaTransporteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ParadaTransporteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload>[];
                };
                delete: {
                    args: Prisma.ParadaTransporteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload>;
                };
                update: {
                    args: Prisma.ParadaTransporteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload>;
                };
                deleteMany: {
                    args: Prisma.ParadaTransporteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParadaTransporteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ParadaTransporteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload>[];
                };
                upsert: {
                    args: Prisma.ParadaTransporteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParadaTransportePayload>;
                };
                aggregate: {
                    args: Prisma.ParadaTransporteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParadaTransporte>;
                };
                groupBy: {
                    args: Prisma.ParadaTransporteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParadaTransporteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParadaTransporteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParadaTransporteCountAggregateOutputType> | number;
                };
            };
        };
        Tour: {
            payload: Prisma.$TourPayload<ExtArgs>;
            fields: Prisma.TourFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TourFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TourFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload>;
                };
                findFirst: {
                    args: Prisma.TourFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TourFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload>;
                };
                findMany: {
                    args: Prisma.TourFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload>[];
                };
                create: {
                    args: Prisma.TourCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload>;
                };
                createMany: {
                    args: Prisma.TourCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TourCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload>[];
                };
                delete: {
                    args: Prisma.TourDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload>;
                };
                update: {
                    args: Prisma.TourUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload>;
                };
                deleteMany: {
                    args: Prisma.TourDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TourUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TourUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload>[];
                };
                upsert: {
                    args: Prisma.TourUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TourPayload>;
                };
                aggregate: {
                    args: Prisma.TourAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTour>;
                };
                groupBy: {
                    args: Prisma.TourGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TourGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TourCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TourCountAggregateOutputType> | number;
                };
            };
        };
        ItinerarioTour: {
            payload: Prisma.$ItinerarioTourPayload<ExtArgs>;
            fields: Prisma.ItinerarioTourFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ItinerarioTourFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ItinerarioTourFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload>;
                };
                findFirst: {
                    args: Prisma.ItinerarioTourFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ItinerarioTourFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload>;
                };
                findMany: {
                    args: Prisma.ItinerarioTourFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload>[];
                };
                create: {
                    args: Prisma.ItinerarioTourCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload>;
                };
                createMany: {
                    args: Prisma.ItinerarioTourCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ItinerarioTourCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload>[];
                };
                delete: {
                    args: Prisma.ItinerarioTourDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload>;
                };
                update: {
                    args: Prisma.ItinerarioTourUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload>;
                };
                deleteMany: {
                    args: Prisma.ItinerarioTourDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ItinerarioTourUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ItinerarioTourUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload>[];
                };
                upsert: {
                    args: Prisma.ItinerarioTourUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ItinerarioTourPayload>;
                };
                aggregate: {
                    args: Prisma.ItinerarioTourAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateItinerarioTour>;
                };
                groupBy: {
                    args: Prisma.ItinerarioTourGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ItinerarioTourGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ItinerarioTourCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ItinerarioTourCountAggregateOutputType> | number;
                };
            };
        };
        Vehiculo: {
            payload: Prisma.$VehiculoPayload<ExtArgs>;
            fields: Prisma.VehiculoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VehiculoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VehiculoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload>;
                };
                findFirst: {
                    args: Prisma.VehiculoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VehiculoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload>;
                };
                findMany: {
                    args: Prisma.VehiculoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload>[];
                };
                create: {
                    args: Prisma.VehiculoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload>;
                };
                createMany: {
                    args: Prisma.VehiculoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VehiculoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload>[];
                };
                delete: {
                    args: Prisma.VehiculoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload>;
                };
                update: {
                    args: Prisma.VehiculoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload>;
                };
                deleteMany: {
                    args: Prisma.VehiculoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VehiculoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VehiculoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload>[];
                };
                upsert: {
                    args: Prisma.VehiculoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculoPayload>;
                };
                aggregate: {
                    args: Prisma.VehiculoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVehiculo>;
                };
                groupBy: {
                    args: Prisma.VehiculoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VehiculoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VehiculoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VehiculoCountAggregateOutputType> | number;
                };
            };
        };
        SalidaTransporte: {
            payload: Prisma.$SalidaTransportePayload<ExtArgs>;
            fields: Prisma.SalidaTransporteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SalidaTransporteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SalidaTransporteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload>;
                };
                findFirst: {
                    args: Prisma.SalidaTransporteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SalidaTransporteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload>;
                };
                findMany: {
                    args: Prisma.SalidaTransporteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload>[];
                };
                create: {
                    args: Prisma.SalidaTransporteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload>;
                };
                createMany: {
                    args: Prisma.SalidaTransporteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SalidaTransporteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload>[];
                };
                delete: {
                    args: Prisma.SalidaTransporteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload>;
                };
                update: {
                    args: Prisma.SalidaTransporteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload>;
                };
                deleteMany: {
                    args: Prisma.SalidaTransporteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SalidaTransporteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SalidaTransporteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload>[];
                };
                upsert: {
                    args: Prisma.SalidaTransporteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTransportePayload>;
                };
                aggregate: {
                    args: Prisma.SalidaTransporteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSalidaTransporte>;
                };
                groupBy: {
                    args: Prisma.SalidaTransporteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SalidaTransporteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SalidaTransporteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SalidaTransporteCountAggregateOutputType> | number;
                };
            };
        };
        SalidaTour: {
            payload: Prisma.$SalidaTourPayload<ExtArgs>;
            fields: Prisma.SalidaTourFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SalidaTourFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SalidaTourFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload>;
                };
                findFirst: {
                    args: Prisma.SalidaTourFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SalidaTourFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload>;
                };
                findMany: {
                    args: Prisma.SalidaTourFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload>[];
                };
                create: {
                    args: Prisma.SalidaTourCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload>;
                };
                createMany: {
                    args: Prisma.SalidaTourCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SalidaTourCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload>[];
                };
                delete: {
                    args: Prisma.SalidaTourDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload>;
                };
                update: {
                    args: Prisma.SalidaTourUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload>;
                };
                deleteMany: {
                    args: Prisma.SalidaTourDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SalidaTourUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SalidaTourUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload>[];
                };
                upsert: {
                    args: Prisma.SalidaTourUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalidaTourPayload>;
                };
                aggregate: {
                    args: Prisma.SalidaTourAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSalidaTour>;
                };
                groupBy: {
                    args: Prisma.SalidaTourGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SalidaTourGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SalidaTourCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SalidaTourCountAggregateOutputType> | number;
                };
            };
        };
        Reserva: {
            payload: Prisma.$ReservaPayload<ExtArgs>;
            fields: Prisma.ReservaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReservaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload>;
                };
                findFirst: {
                    args: Prisma.ReservaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload>;
                };
                findMany: {
                    args: Prisma.ReservaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload>[];
                };
                create: {
                    args: Prisma.ReservaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload>;
                };
                createMany: {
                    args: Prisma.ReservaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReservaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload>[];
                };
                delete: {
                    args: Prisma.ReservaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload>;
                };
                update: {
                    args: Prisma.ReservaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload>;
                };
                deleteMany: {
                    args: Prisma.ReservaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReservaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReservaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload>[];
                };
                upsert: {
                    args: Prisma.ReservaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservaPayload>;
                };
                aggregate: {
                    args: Prisma.ReservaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReserva>;
                };
                groupBy: {
                    args: Prisma.ReservaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReservaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservaCountAggregateOutputType> | number;
                };
            };
        };
        PasajeroReserva: {
            payload: Prisma.$PasajeroReservaPayload<ExtArgs>;
            fields: Prisma.PasajeroReservaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasajeroReservaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasajeroReservaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload>;
                };
                findFirst: {
                    args: Prisma.PasajeroReservaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasajeroReservaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload>;
                };
                findMany: {
                    args: Prisma.PasajeroReservaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload>[];
                };
                create: {
                    args: Prisma.PasajeroReservaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload>;
                };
                createMany: {
                    args: Prisma.PasajeroReservaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PasajeroReservaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload>[];
                };
                delete: {
                    args: Prisma.PasajeroReservaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload>;
                };
                update: {
                    args: Prisma.PasajeroReservaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload>;
                };
                deleteMany: {
                    args: Prisma.PasajeroReservaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasajeroReservaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PasajeroReservaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload>[];
                };
                upsert: {
                    args: Prisma.PasajeroReservaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasajeroReservaPayload>;
                };
                aggregate: {
                    args: Prisma.PasajeroReservaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePasajeroReserva>;
                };
                groupBy: {
                    args: Prisma.PasajeroReservaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasajeroReservaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasajeroReservaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasajeroReservaCountAggregateOutputType> | number;
                };
            };
        };
        Pago: {
            payload: Prisma.$PagoPayload<ExtArgs>;
            fields: Prisma.PagoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PagoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PagoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                findFirst: {
                    args: Prisma.PagoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PagoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                findMany: {
                    args: Prisma.PagoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>[];
                };
                create: {
                    args: Prisma.PagoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                createMany: {
                    args: Prisma.PagoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PagoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>[];
                };
                delete: {
                    args: Prisma.PagoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                update: {
                    args: Prisma.PagoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                deleteMany: {
                    args: Prisma.PagoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PagoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PagoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>[];
                };
                upsert: {
                    args: Prisma.PagoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                aggregate: {
                    args: Prisma.PagoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePago>;
                };
                groupBy: {
                    args: Prisma.PagoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PagoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PagoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PagoCountAggregateOutputType> | number;
                };
            };
        };
        HistorialReserva: {
            payload: Prisma.$HistorialReservaPayload<ExtArgs>;
            fields: Prisma.HistorialReservaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HistorialReservaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HistorialReservaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload>;
                };
                findFirst: {
                    args: Prisma.HistorialReservaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HistorialReservaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload>;
                };
                findMany: {
                    args: Prisma.HistorialReservaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload>[];
                };
                create: {
                    args: Prisma.HistorialReservaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload>;
                };
                createMany: {
                    args: Prisma.HistorialReservaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HistorialReservaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload>[];
                };
                delete: {
                    args: Prisma.HistorialReservaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload>;
                };
                update: {
                    args: Prisma.HistorialReservaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload>;
                };
                deleteMany: {
                    args: Prisma.HistorialReservaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HistorialReservaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HistorialReservaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload>[];
                };
                upsert: {
                    args: Prisma.HistorialReservaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialReservaPayload>;
                };
                aggregate: {
                    args: Prisma.HistorialReservaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHistorialReserva>;
                };
                groupBy: {
                    args: Prisma.HistorialReservaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HistorialReservaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HistorialReservaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HistorialReservaCountAggregateOutputType> | number;
                };
            };
        };
        TraduccionTransporte: {
            payload: Prisma.$TraduccionTransportePayload<ExtArgs>;
            fields: Prisma.TraduccionTransporteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TraduccionTransporteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TraduccionTransporteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload>;
                };
                findFirst: {
                    args: Prisma.TraduccionTransporteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TraduccionTransporteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload>;
                };
                findMany: {
                    args: Prisma.TraduccionTransporteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload>[];
                };
                create: {
                    args: Prisma.TraduccionTransporteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload>;
                };
                createMany: {
                    args: Prisma.TraduccionTransporteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TraduccionTransporteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload>[];
                };
                delete: {
                    args: Prisma.TraduccionTransporteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload>;
                };
                update: {
                    args: Prisma.TraduccionTransporteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload>;
                };
                deleteMany: {
                    args: Prisma.TraduccionTransporteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TraduccionTransporteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TraduccionTransporteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload>[];
                };
                upsert: {
                    args: Prisma.TraduccionTransporteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTransportePayload>;
                };
                aggregate: {
                    args: Prisma.TraduccionTransporteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTraduccionTransporte>;
                };
                groupBy: {
                    args: Prisma.TraduccionTransporteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TraduccionTransporteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TraduccionTransporteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TraduccionTransporteCountAggregateOutputType> | number;
                };
            };
        };
        TraduccionTour: {
            payload: Prisma.$TraduccionTourPayload<ExtArgs>;
            fields: Prisma.TraduccionTourFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TraduccionTourFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TraduccionTourFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload>;
                };
                findFirst: {
                    args: Prisma.TraduccionTourFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TraduccionTourFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload>;
                };
                findMany: {
                    args: Prisma.TraduccionTourFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload>[];
                };
                create: {
                    args: Prisma.TraduccionTourCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload>;
                };
                createMany: {
                    args: Prisma.TraduccionTourCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TraduccionTourCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload>[];
                };
                delete: {
                    args: Prisma.TraduccionTourDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload>;
                };
                update: {
                    args: Prisma.TraduccionTourUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload>;
                };
                deleteMany: {
                    args: Prisma.TraduccionTourDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TraduccionTourUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TraduccionTourUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload>[];
                };
                upsert: {
                    args: Prisma.TraduccionTourUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TraduccionTourPayload>;
                };
                aggregate: {
                    args: Prisma.TraduccionTourAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTraduccionTour>;
                };
                groupBy: {
                    args: Prisma.TraduccionTourGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TraduccionTourGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TraduccionTourCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TraduccionTourCountAggregateOutputType> | number;
                };
            };
        };
        Imagen: {
            payload: Prisma.$ImagenPayload<ExtArgs>;
            fields: Prisma.ImagenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ImagenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ImagenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload>;
                };
                findFirst: {
                    args: Prisma.ImagenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ImagenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload>;
                };
                findMany: {
                    args: Prisma.ImagenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload>[];
                };
                create: {
                    args: Prisma.ImagenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload>;
                };
                createMany: {
                    args: Prisma.ImagenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ImagenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload>[];
                };
                delete: {
                    args: Prisma.ImagenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload>;
                };
                update: {
                    args: Prisma.ImagenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload>;
                };
                deleteMany: {
                    args: Prisma.ImagenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ImagenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ImagenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload>[];
                };
                upsert: {
                    args: Prisma.ImagenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagenPayload>;
                };
                aggregate: {
                    args: Prisma.ImagenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateImagen>;
                };
                groupBy: {
                    args: Prisma.ImagenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImagenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ImagenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImagenCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly correo: "correo";
    readonly contrasenaHash: "contrasenaHash";
    readonly nombres: "nombres";
    readonly apellidos: "apellidos";
    readonly telefonoWhatsApp: "telefonoWhatsApp";
    readonly paisResidencia: "paisResidencia";
    readonly rol: "rol";
    readonly activo: "activo";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const TransporteScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly activo: "activo";
    readonly origenNombre: "origenNombre";
    readonly origenLatitud: "origenLatitud";
    readonly origenLongitud: "origenLongitud";
    readonly destinoNombre: "destinoNombre";
    readonly destinoLatitud: "destinoLatitud";
    readonly destinoLongitud: "destinoLongitud";
    readonly duracionMinutosEstimada: "duracionMinutosEstimada";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type TransporteScalarFieldEnum = (typeof TransporteScalarFieldEnum)[keyof typeof TransporteScalarFieldEnum];
export declare const ParadaTransporteScalarFieldEnum: {
    readonly id: "id";
    readonly transporteId: "transporteId";
    readonly orden: "orden";
    readonly nombre: "nombre";
    readonly latitud: "latitud";
    readonly longitud: "longitud";
    readonly minutos: "minutos";
};
export type ParadaTransporteScalarFieldEnum = (typeof ParadaTransporteScalarFieldEnum)[keyof typeof ParadaTransporteScalarFieldEnum];
export declare const TourScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly activo: "activo";
    readonly destinoNombre: "destinoNombre";
    readonly destinoLatitud: "destinoLatitud";
    readonly destinoLongitud: "destinoLongitud";
    readonly duracionMinutos: "duracionMinutos";
    readonly requiereGuia: "requiereGuia";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type TourScalarFieldEnum = (typeof TourScalarFieldEnum)[keyof typeof TourScalarFieldEnum];
export declare const ItinerarioTourScalarFieldEnum: {
    readonly id: "id";
    readonly tourId: "tourId";
    readonly orden: "orden";
    readonly titulo: "titulo";
    readonly descripcion: "descripcion";
    readonly latitud: "latitud";
    readonly longitud: "longitud";
};
export type ItinerarioTourScalarFieldEnum = (typeof ItinerarioTourScalarFieldEnum)[keyof typeof ItinerarioTourScalarFieldEnum];
export declare const VehiculoScalarFieldEnum: {
    readonly id: "id";
    readonly placa: "placa";
    readonly tipoPropiedad: "tipoPropiedad";
    readonly proveedor: "proveedor";
    readonly capacidad: "capacidad";
    readonly activo: "activo";
    readonly creadoEn: "creadoEn";
};
export type VehiculoScalarFieldEnum = (typeof VehiculoScalarFieldEnum)[keyof typeof VehiculoScalarFieldEnum];
export declare const SalidaTransporteScalarFieldEnum: {
    readonly id: "id";
    readonly transporteId: "transporteId";
    readonly vehiculoId: "vehiculoId";
    readonly fechaHoraSalida: "fechaHoraSalida";
    readonly fechaHoraLlegada: "fechaHoraLlegada";
    readonly capacidad: "capacidad";
    readonly minimoPasajeros: "minimoPasajeros";
    readonly precioPen: "precioPen";
    readonly precioUsd: "precioUsd";
    readonly permiteAdelanto: "permiteAdelanto";
    readonly porcentajeAdelanto: "porcentajeAdelanto";
    readonly estado: "estado";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type SalidaTransporteScalarFieldEnum = (typeof SalidaTransporteScalarFieldEnum)[keyof typeof SalidaTransporteScalarFieldEnum];
export declare const SalidaTourScalarFieldEnum: {
    readonly id: "id";
    readonly tourId: "tourId";
    readonly fechaHoraSalida: "fechaHoraSalida";
    readonly capacidad: "capacidad";
    readonly minimoPasajeros: "minimoPasajeros";
    readonly precioPen: "precioPen";
    readonly precioUsd: "precioUsd";
    readonly permiteAdelanto: "permiteAdelanto";
    readonly porcentajeAdelanto: "porcentajeAdelanto";
    readonly estado: "estado";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type SalidaTourScalarFieldEnum = (typeof SalidaTourScalarFieldEnum)[keyof typeof SalidaTourScalarFieldEnum];
export declare const ReservaScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly usuarioId: "usuarioId";
    readonly salidaTransporteId: "salidaTransporteId";
    readonly salidaTourId: "salidaTourId";
    readonly correoContacto: "correoContacto";
    readonly telefonoWhatsApp: "telefonoWhatsApp";
    readonly paisResidencia: "paisResidencia";
    readonly cantidadPasajeros: "cantidadPasajeros";
    readonly moneda: "moneda";
    readonly montoTotal: "montoTotal";
    readonly montoAdelanto: "montoAdelanto";
    readonly montoSaldo: "montoSaldo";
    readonly estado: "estado";
    readonly tokenGestionInvitado: "tokenGestionInvitado";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum];
export declare const PasajeroReservaScalarFieldEnum: {
    readonly id: "id";
    readonly reservaId: "reservaId";
    readonly nombres: "nombres";
    readonly apellidos: "apellidos";
    readonly nacionalidad: "nacionalidad";
    readonly tipoDocumento: "tipoDocumento";
    readonly numeroDocumento: "numeroDocumento";
};
export type PasajeroReservaScalarFieldEnum = (typeof PasajeroReservaScalarFieldEnum)[keyof typeof PasajeroReservaScalarFieldEnum];
export declare const PagoScalarFieldEnum: {
    readonly id: "id";
    readonly reservaId: "reservaId";
    readonly confirmadoPorId: "confirmadoPorId";
    readonly monto: "monto";
    readonly moneda: "moneda";
    readonly metodo: "metodo";
    readonly estado: "estado";
    readonly esAdelanto: "esAdelanto";
    readonly codigoOperacion: "codigoOperacion";
    readonly urlComprobante: "urlComprobante";
    readonly referenciaProveedor: "referenciaProveedor";
    readonly creadoEn: "creadoEn";
    readonly confirmadoEn: "confirmadoEn";
};
export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum];
export declare const HistorialReservaScalarFieldEnum: {
    readonly id: "id";
    readonly reservaId: "reservaId";
    readonly estado: "estado";
    readonly detalle: "detalle";
    readonly creadoEn: "creadoEn";
};
export type HistorialReservaScalarFieldEnum = (typeof HistorialReservaScalarFieldEnum)[keyof typeof HistorialReservaScalarFieldEnum];
export declare const TraduccionTransporteScalarFieldEnum: {
    readonly id: "id";
    readonly transporteId: "transporteId";
    readonly idioma: "idioma";
    readonly titulo: "titulo";
    readonly resumen: "resumen";
    readonly descripcion: "descripcion";
    readonly estado: "estado";
};
export type TraduccionTransporteScalarFieldEnum = (typeof TraduccionTransporteScalarFieldEnum)[keyof typeof TraduccionTransporteScalarFieldEnum];
export declare const TraduccionTourScalarFieldEnum: {
    readonly id: "id";
    readonly tourId: "tourId";
    readonly idioma: "idioma";
    readonly titulo: "titulo";
    readonly resumen: "resumen";
    readonly descripcion: "descripcion";
    readonly queLlevar: "queLlevar";
    readonly estado: "estado";
};
export type TraduccionTourScalarFieldEnum = (typeof TraduccionTourScalarFieldEnum)[keyof typeof TraduccionTourScalarFieldEnum];
export declare const ImagenScalarFieldEnum: {
    readonly id: "id";
    readonly transporteId: "transporteId";
    readonly tourId: "tourId";
    readonly url: "url";
    readonly textoAlterno: "textoAlterno";
    readonly orden: "orden";
};
export type ImagenScalarFieldEnum = (typeof ImagenScalarFieldEnum)[keyof typeof ImagenScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario'>;
export type ListEnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumTipoVehiculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoVehiculo'>;
export type ListEnumTipoVehiculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoVehiculo[]'>;
export type EnumEstadoSalidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoSalida'>;
export type ListEnumEstadoSalidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoSalida[]'>;
export type EnumMonedaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Moneda'>;
export type ListEnumMonedaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Moneda[]'>;
export type EnumEstadoReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReserva'>;
export type ListEnumEstadoReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReserva[]'>;
export type EnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago'>;
export type ListEnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago[]'>;
export type EnumEstadoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPago'>;
export type ListEnumEstadoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPago[]'>;
export type EnumEstadoTraduccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTraduccion'>;
export type ListEnumEstadoTraduccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTraduccion[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    usuario?: Prisma.UsuarioOmit;
    transporte?: Prisma.TransporteOmit;
    paradaTransporte?: Prisma.ParadaTransporteOmit;
    tour?: Prisma.TourOmit;
    itinerarioTour?: Prisma.ItinerarioTourOmit;
    vehiculo?: Prisma.VehiculoOmit;
    salidaTransporte?: Prisma.SalidaTransporteOmit;
    salidaTour?: Prisma.SalidaTourOmit;
    reserva?: Prisma.ReservaOmit;
    pasajeroReserva?: Prisma.PasajeroReservaOmit;
    pago?: Prisma.PagoOmit;
    historialReserva?: Prisma.HistorialReservaOmit;
    traduccionTransporte?: Prisma.TraduccionTransporteOmit;
    traduccionTour?: Prisma.TraduccionTourOmit;
    imagen?: Prisma.ImagenOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
