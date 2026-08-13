import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PasajeroReservaModel = runtime.Types.Result.DefaultSelection<Prisma.$PasajeroReservaPayload>;
export type AggregatePasajeroReserva = {
    _count: PasajeroReservaCountAggregateOutputType | null;
    _min: PasajeroReservaMinAggregateOutputType | null;
    _max: PasajeroReservaMaxAggregateOutputType | null;
};
export type PasajeroReservaMinAggregateOutputType = {
    id: string | null;
    reservaId: string | null;
    nombres: string | null;
    apellidos: string | null;
    nacionalidad: string | null;
    tipoDocumento: string | null;
    numeroDocumento: string | null;
};
export type PasajeroReservaMaxAggregateOutputType = {
    id: string | null;
    reservaId: string | null;
    nombres: string | null;
    apellidos: string | null;
    nacionalidad: string | null;
    tipoDocumento: string | null;
    numeroDocumento: string | null;
};
export type PasajeroReservaCountAggregateOutputType = {
    id: number;
    reservaId: number;
    nombres: number;
    apellidos: number;
    nacionalidad: number;
    tipoDocumento: number;
    numeroDocumento: number;
    _all: number;
};
export type PasajeroReservaMinAggregateInputType = {
    id?: true;
    reservaId?: true;
    nombres?: true;
    apellidos?: true;
    nacionalidad?: true;
    tipoDocumento?: true;
    numeroDocumento?: true;
};
export type PasajeroReservaMaxAggregateInputType = {
    id?: true;
    reservaId?: true;
    nombres?: true;
    apellidos?: true;
    nacionalidad?: true;
    tipoDocumento?: true;
    numeroDocumento?: true;
};
export type PasajeroReservaCountAggregateInputType = {
    id?: true;
    reservaId?: true;
    nombres?: true;
    apellidos?: true;
    nacionalidad?: true;
    tipoDocumento?: true;
    numeroDocumento?: true;
    _all?: true;
};
export type PasajeroReservaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PasajeroReservaWhereInput;
    orderBy?: Prisma.PasajeroReservaOrderByWithRelationInput | Prisma.PasajeroReservaOrderByWithRelationInput[];
    cursor?: Prisma.PasajeroReservaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PasajeroReservaCountAggregateInputType;
    _min?: PasajeroReservaMinAggregateInputType;
    _max?: PasajeroReservaMaxAggregateInputType;
};
export type GetPasajeroReservaAggregateType<T extends PasajeroReservaAggregateArgs> = {
    [P in keyof T & keyof AggregatePasajeroReserva]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePasajeroReserva[P]> : Prisma.GetScalarType<T[P], AggregatePasajeroReserva[P]>;
};
export type PasajeroReservaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PasajeroReservaWhereInput;
    orderBy?: Prisma.PasajeroReservaOrderByWithAggregationInput | Prisma.PasajeroReservaOrderByWithAggregationInput[];
    by: Prisma.PasajeroReservaScalarFieldEnum[] | Prisma.PasajeroReservaScalarFieldEnum;
    having?: Prisma.PasajeroReservaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PasajeroReservaCountAggregateInputType | true;
    _min?: PasajeroReservaMinAggregateInputType;
    _max?: PasajeroReservaMaxAggregateInputType;
};
export type PasajeroReservaGroupByOutputType = {
    id: string;
    reservaId: string;
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string;
    _count: PasajeroReservaCountAggregateOutputType | null;
    _min: PasajeroReservaMinAggregateOutputType | null;
    _max: PasajeroReservaMaxAggregateOutputType | null;
};
export type GetPasajeroReservaGroupByPayload<T extends PasajeroReservaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PasajeroReservaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PasajeroReservaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PasajeroReservaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PasajeroReservaGroupByOutputType[P]>;
}>>;
export type PasajeroReservaWhereInput = {
    AND?: Prisma.PasajeroReservaWhereInput | Prisma.PasajeroReservaWhereInput[];
    OR?: Prisma.PasajeroReservaWhereInput[];
    NOT?: Prisma.PasajeroReservaWhereInput | Prisma.PasajeroReservaWhereInput[];
    id?: Prisma.UuidFilter<"PasajeroReserva"> | string;
    reservaId?: Prisma.UuidFilter<"PasajeroReserva"> | string;
    nombres?: Prisma.StringFilter<"PasajeroReserva"> | string;
    apellidos?: Prisma.StringFilter<"PasajeroReserva"> | string;
    nacionalidad?: Prisma.StringFilter<"PasajeroReserva"> | string;
    tipoDocumento?: Prisma.StringFilter<"PasajeroReserva"> | string;
    numeroDocumento?: Prisma.StringFilter<"PasajeroReserva"> | string;
    reserva?: Prisma.XOR<Prisma.ReservaScalarRelationFilter, Prisma.ReservaWhereInput>;
};
export type PasajeroReservaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    nombres?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    nacionalidad?: Prisma.SortOrder;
    tipoDocumento?: Prisma.SortOrder;
    numeroDocumento?: Prisma.SortOrder;
    reserva?: Prisma.ReservaOrderByWithRelationInput;
};
export type PasajeroReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PasajeroReservaWhereInput | Prisma.PasajeroReservaWhereInput[];
    OR?: Prisma.PasajeroReservaWhereInput[];
    NOT?: Prisma.PasajeroReservaWhereInput | Prisma.PasajeroReservaWhereInput[];
    reservaId?: Prisma.UuidFilter<"PasajeroReserva"> | string;
    nombres?: Prisma.StringFilter<"PasajeroReserva"> | string;
    apellidos?: Prisma.StringFilter<"PasajeroReserva"> | string;
    nacionalidad?: Prisma.StringFilter<"PasajeroReserva"> | string;
    tipoDocumento?: Prisma.StringFilter<"PasajeroReserva"> | string;
    numeroDocumento?: Prisma.StringFilter<"PasajeroReserva"> | string;
    reserva?: Prisma.XOR<Prisma.ReservaScalarRelationFilter, Prisma.ReservaWhereInput>;
}, "id">;
export type PasajeroReservaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    nombres?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    nacionalidad?: Prisma.SortOrder;
    tipoDocumento?: Prisma.SortOrder;
    numeroDocumento?: Prisma.SortOrder;
    _count?: Prisma.PasajeroReservaCountOrderByAggregateInput;
    _max?: Prisma.PasajeroReservaMaxOrderByAggregateInput;
    _min?: Prisma.PasajeroReservaMinOrderByAggregateInput;
};
export type PasajeroReservaScalarWhereWithAggregatesInput = {
    AND?: Prisma.PasajeroReservaScalarWhereWithAggregatesInput | Prisma.PasajeroReservaScalarWhereWithAggregatesInput[];
    OR?: Prisma.PasajeroReservaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PasajeroReservaScalarWhereWithAggregatesInput | Prisma.PasajeroReservaScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PasajeroReserva"> | string;
    reservaId?: Prisma.UuidWithAggregatesFilter<"PasajeroReserva"> | string;
    nombres?: Prisma.StringWithAggregatesFilter<"PasajeroReserva"> | string;
    apellidos?: Prisma.StringWithAggregatesFilter<"PasajeroReserva"> | string;
    nacionalidad?: Prisma.StringWithAggregatesFilter<"PasajeroReserva"> | string;
    tipoDocumento?: Prisma.StringWithAggregatesFilter<"PasajeroReserva"> | string;
    numeroDocumento?: Prisma.StringWithAggregatesFilter<"PasajeroReserva"> | string;
};
export type PasajeroReservaCreateInput = {
    id?: string;
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string;
    reserva: Prisma.ReservaCreateNestedOneWithoutPasajerosInput;
};
export type PasajeroReservaUncheckedCreateInput = {
    id?: string;
    reservaId: string;
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string;
};
export type PasajeroReservaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    nacionalidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
    reserva?: Prisma.ReservaUpdateOneRequiredWithoutPasajerosNestedInput;
};
export type PasajeroReservaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservaId?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    nacionalidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PasajeroReservaCreateManyInput = {
    id?: string;
    reservaId: string;
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string;
};
export type PasajeroReservaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    nacionalidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PasajeroReservaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservaId?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    nacionalidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PasajeroReservaListRelationFilter = {
    every?: Prisma.PasajeroReservaWhereInput;
    some?: Prisma.PasajeroReservaWhereInput;
    none?: Prisma.PasajeroReservaWhereInput;
};
export type PasajeroReservaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PasajeroReservaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    nombres?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    nacionalidad?: Prisma.SortOrder;
    tipoDocumento?: Prisma.SortOrder;
    numeroDocumento?: Prisma.SortOrder;
};
export type PasajeroReservaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    nombres?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    nacionalidad?: Prisma.SortOrder;
    tipoDocumento?: Prisma.SortOrder;
    numeroDocumento?: Prisma.SortOrder;
};
export type PasajeroReservaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    nombres?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    nacionalidad?: Prisma.SortOrder;
    tipoDocumento?: Prisma.SortOrder;
    numeroDocumento?: Prisma.SortOrder;
};
export type PasajeroReservaCreateNestedManyWithoutReservaInput = {
    create?: Prisma.XOR<Prisma.PasajeroReservaCreateWithoutReservaInput, Prisma.PasajeroReservaUncheckedCreateWithoutReservaInput> | Prisma.PasajeroReservaCreateWithoutReservaInput[] | Prisma.PasajeroReservaUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.PasajeroReservaCreateOrConnectWithoutReservaInput | Prisma.PasajeroReservaCreateOrConnectWithoutReservaInput[];
    createMany?: Prisma.PasajeroReservaCreateManyReservaInputEnvelope;
    connect?: Prisma.PasajeroReservaWhereUniqueInput | Prisma.PasajeroReservaWhereUniqueInput[];
};
export type PasajeroReservaUncheckedCreateNestedManyWithoutReservaInput = {
    create?: Prisma.XOR<Prisma.PasajeroReservaCreateWithoutReservaInput, Prisma.PasajeroReservaUncheckedCreateWithoutReservaInput> | Prisma.PasajeroReservaCreateWithoutReservaInput[] | Prisma.PasajeroReservaUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.PasajeroReservaCreateOrConnectWithoutReservaInput | Prisma.PasajeroReservaCreateOrConnectWithoutReservaInput[];
    createMany?: Prisma.PasajeroReservaCreateManyReservaInputEnvelope;
    connect?: Prisma.PasajeroReservaWhereUniqueInput | Prisma.PasajeroReservaWhereUniqueInput[];
};
export type PasajeroReservaUpdateManyWithoutReservaNestedInput = {
    create?: Prisma.XOR<Prisma.PasajeroReservaCreateWithoutReservaInput, Prisma.PasajeroReservaUncheckedCreateWithoutReservaInput> | Prisma.PasajeroReservaCreateWithoutReservaInput[] | Prisma.PasajeroReservaUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.PasajeroReservaCreateOrConnectWithoutReservaInput | Prisma.PasajeroReservaCreateOrConnectWithoutReservaInput[];
    upsert?: Prisma.PasajeroReservaUpsertWithWhereUniqueWithoutReservaInput | Prisma.PasajeroReservaUpsertWithWhereUniqueWithoutReservaInput[];
    createMany?: Prisma.PasajeroReservaCreateManyReservaInputEnvelope;
    set?: Prisma.PasajeroReservaWhereUniqueInput | Prisma.PasajeroReservaWhereUniqueInput[];
    disconnect?: Prisma.PasajeroReservaWhereUniqueInput | Prisma.PasajeroReservaWhereUniqueInput[];
    delete?: Prisma.PasajeroReservaWhereUniqueInput | Prisma.PasajeroReservaWhereUniqueInput[];
    connect?: Prisma.PasajeroReservaWhereUniqueInput | Prisma.PasajeroReservaWhereUniqueInput[];
    update?: Prisma.PasajeroReservaUpdateWithWhereUniqueWithoutReservaInput | Prisma.PasajeroReservaUpdateWithWhereUniqueWithoutReservaInput[];
    updateMany?: Prisma.PasajeroReservaUpdateManyWithWhereWithoutReservaInput | Prisma.PasajeroReservaUpdateManyWithWhereWithoutReservaInput[];
    deleteMany?: Prisma.PasajeroReservaScalarWhereInput | Prisma.PasajeroReservaScalarWhereInput[];
};
export type PasajeroReservaUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: Prisma.XOR<Prisma.PasajeroReservaCreateWithoutReservaInput, Prisma.PasajeroReservaUncheckedCreateWithoutReservaInput> | Prisma.PasajeroReservaCreateWithoutReservaInput[] | Prisma.PasajeroReservaUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.PasajeroReservaCreateOrConnectWithoutReservaInput | Prisma.PasajeroReservaCreateOrConnectWithoutReservaInput[];
    upsert?: Prisma.PasajeroReservaUpsertWithWhereUniqueWithoutReservaInput | Prisma.PasajeroReservaUpsertWithWhereUniqueWithoutReservaInput[];
    createMany?: Prisma.PasajeroReservaCreateManyReservaInputEnvelope;
    set?: Prisma.PasajeroReservaWhereUniqueInput | Prisma.PasajeroReservaWhereUniqueInput[];
    disconnect?: Prisma.PasajeroReservaWhereUniqueInput | Prisma.PasajeroReservaWhereUniqueInput[];
    delete?: Prisma.PasajeroReservaWhereUniqueInput | Prisma.PasajeroReservaWhereUniqueInput[];
    connect?: Prisma.PasajeroReservaWhereUniqueInput | Prisma.PasajeroReservaWhereUniqueInput[];
    update?: Prisma.PasajeroReservaUpdateWithWhereUniqueWithoutReservaInput | Prisma.PasajeroReservaUpdateWithWhereUniqueWithoutReservaInput[];
    updateMany?: Prisma.PasajeroReservaUpdateManyWithWhereWithoutReservaInput | Prisma.PasajeroReservaUpdateManyWithWhereWithoutReservaInput[];
    deleteMany?: Prisma.PasajeroReservaScalarWhereInput | Prisma.PasajeroReservaScalarWhereInput[];
};
export type PasajeroReservaCreateWithoutReservaInput = {
    id?: string;
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string;
};
export type PasajeroReservaUncheckedCreateWithoutReservaInput = {
    id?: string;
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string;
};
export type PasajeroReservaCreateOrConnectWithoutReservaInput = {
    where: Prisma.PasajeroReservaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PasajeroReservaCreateWithoutReservaInput, Prisma.PasajeroReservaUncheckedCreateWithoutReservaInput>;
};
export type PasajeroReservaCreateManyReservaInputEnvelope = {
    data: Prisma.PasajeroReservaCreateManyReservaInput | Prisma.PasajeroReservaCreateManyReservaInput[];
    skipDuplicates?: boolean;
};
export type PasajeroReservaUpsertWithWhereUniqueWithoutReservaInput = {
    where: Prisma.PasajeroReservaWhereUniqueInput;
    update: Prisma.XOR<Prisma.PasajeroReservaUpdateWithoutReservaInput, Prisma.PasajeroReservaUncheckedUpdateWithoutReservaInput>;
    create: Prisma.XOR<Prisma.PasajeroReservaCreateWithoutReservaInput, Prisma.PasajeroReservaUncheckedCreateWithoutReservaInput>;
};
export type PasajeroReservaUpdateWithWhereUniqueWithoutReservaInput = {
    where: Prisma.PasajeroReservaWhereUniqueInput;
    data: Prisma.XOR<Prisma.PasajeroReservaUpdateWithoutReservaInput, Prisma.PasajeroReservaUncheckedUpdateWithoutReservaInput>;
};
export type PasajeroReservaUpdateManyWithWhereWithoutReservaInput = {
    where: Prisma.PasajeroReservaScalarWhereInput;
    data: Prisma.XOR<Prisma.PasajeroReservaUpdateManyMutationInput, Prisma.PasajeroReservaUncheckedUpdateManyWithoutReservaInput>;
};
export type PasajeroReservaScalarWhereInput = {
    AND?: Prisma.PasajeroReservaScalarWhereInput | Prisma.PasajeroReservaScalarWhereInput[];
    OR?: Prisma.PasajeroReservaScalarWhereInput[];
    NOT?: Prisma.PasajeroReservaScalarWhereInput | Prisma.PasajeroReservaScalarWhereInput[];
    id?: Prisma.UuidFilter<"PasajeroReserva"> | string;
    reservaId?: Prisma.UuidFilter<"PasajeroReserva"> | string;
    nombres?: Prisma.StringFilter<"PasajeroReserva"> | string;
    apellidos?: Prisma.StringFilter<"PasajeroReserva"> | string;
    nacionalidad?: Prisma.StringFilter<"PasajeroReserva"> | string;
    tipoDocumento?: Prisma.StringFilter<"PasajeroReserva"> | string;
    numeroDocumento?: Prisma.StringFilter<"PasajeroReserva"> | string;
};
export type PasajeroReservaCreateManyReservaInput = {
    id?: string;
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string;
};
export type PasajeroReservaUpdateWithoutReservaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    nacionalidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PasajeroReservaUncheckedUpdateWithoutReservaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    nacionalidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PasajeroReservaUncheckedUpdateManyWithoutReservaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    nacionalidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroDocumento?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PasajeroReservaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservaId?: boolean;
    nombres?: boolean;
    apellidos?: boolean;
    nacionalidad?: boolean;
    tipoDocumento?: boolean;
    numeroDocumento?: boolean;
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pasajeroReserva"]>;
export type PasajeroReservaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservaId?: boolean;
    nombres?: boolean;
    apellidos?: boolean;
    nacionalidad?: boolean;
    tipoDocumento?: boolean;
    numeroDocumento?: boolean;
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pasajeroReserva"]>;
export type PasajeroReservaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservaId?: boolean;
    nombres?: boolean;
    apellidos?: boolean;
    nacionalidad?: boolean;
    tipoDocumento?: boolean;
    numeroDocumento?: boolean;
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pasajeroReserva"]>;
export type PasajeroReservaSelectScalar = {
    id?: boolean;
    reservaId?: boolean;
    nombres?: boolean;
    apellidos?: boolean;
    nacionalidad?: boolean;
    tipoDocumento?: boolean;
    numeroDocumento?: boolean;
};
export type PasajeroReservaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reservaId" | "nombres" | "apellidos" | "nacionalidad" | "tipoDocumento" | "numeroDocumento", ExtArgs["result"]["pasajeroReserva"]>;
export type PasajeroReservaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
};
export type PasajeroReservaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
};
export type PasajeroReservaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
};
export type $PasajeroReservaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PasajeroReserva";
    objects: {
        reserva: Prisma.$ReservaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reservaId: string;
        nombres: string;
        apellidos: string;
        nacionalidad: string;
        tipoDocumento: string;
        numeroDocumento: string;
    }, ExtArgs["result"]["pasajeroReserva"]>;
    composites: {};
};
export type PasajeroReservaGetPayload<S extends boolean | null | undefined | PasajeroReservaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload, S>;
export type PasajeroReservaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PasajeroReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PasajeroReservaCountAggregateInputType | true;
};
export interface PasajeroReservaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PasajeroReserva'];
        meta: {
            name: 'PasajeroReserva';
        };
    };
    findUnique<T extends PasajeroReservaFindUniqueArgs>(args: Prisma.SelectSubset<T, PasajeroReservaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PasajeroReservaClient<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PasajeroReservaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PasajeroReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PasajeroReservaClient<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PasajeroReservaFindFirstArgs>(args?: Prisma.SelectSubset<T, PasajeroReservaFindFirstArgs<ExtArgs>>): Prisma.Prisma__PasajeroReservaClient<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PasajeroReservaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PasajeroReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PasajeroReservaClient<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PasajeroReservaFindManyArgs>(args?: Prisma.SelectSubset<T, PasajeroReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PasajeroReservaCreateArgs>(args: Prisma.SelectSubset<T, PasajeroReservaCreateArgs<ExtArgs>>): Prisma.Prisma__PasajeroReservaClient<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PasajeroReservaCreateManyArgs>(args?: Prisma.SelectSubset<T, PasajeroReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PasajeroReservaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PasajeroReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PasajeroReservaDeleteArgs>(args: Prisma.SelectSubset<T, PasajeroReservaDeleteArgs<ExtArgs>>): Prisma.Prisma__PasajeroReservaClient<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PasajeroReservaUpdateArgs>(args: Prisma.SelectSubset<T, PasajeroReservaUpdateArgs<ExtArgs>>): Prisma.Prisma__PasajeroReservaClient<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PasajeroReservaDeleteManyArgs>(args?: Prisma.SelectSubset<T, PasajeroReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PasajeroReservaUpdateManyArgs>(args: Prisma.SelectSubset<T, PasajeroReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PasajeroReservaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PasajeroReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PasajeroReservaUpsertArgs>(args: Prisma.SelectSubset<T, PasajeroReservaUpsertArgs<ExtArgs>>): Prisma.Prisma__PasajeroReservaClient<runtime.Types.Result.GetResult<Prisma.$PasajeroReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PasajeroReservaCountArgs>(args?: Prisma.Subset<T, PasajeroReservaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PasajeroReservaCountAggregateOutputType> : number>;
    aggregate<T extends PasajeroReservaAggregateArgs>(args: Prisma.Subset<T, PasajeroReservaAggregateArgs>): Prisma.PrismaPromise<GetPasajeroReservaAggregateType<T>>;
    groupBy<T extends PasajeroReservaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PasajeroReservaGroupByArgs['orderBy'];
    } : {
        orderBy?: PasajeroReservaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PasajeroReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasajeroReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PasajeroReservaFieldRefs;
}
export interface Prisma__PasajeroReservaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reserva<T extends Prisma.ReservaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReservaDefaultArgs<ExtArgs>>): Prisma.Prisma__ReservaClient<runtime.Types.Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PasajeroReservaFieldRefs {
    readonly id: Prisma.FieldRef<"PasajeroReserva", 'String'>;
    readonly reservaId: Prisma.FieldRef<"PasajeroReserva", 'String'>;
    readonly nombres: Prisma.FieldRef<"PasajeroReserva", 'String'>;
    readonly apellidos: Prisma.FieldRef<"PasajeroReserva", 'String'>;
    readonly nacionalidad: Prisma.FieldRef<"PasajeroReserva", 'String'>;
    readonly tipoDocumento: Prisma.FieldRef<"PasajeroReserva", 'String'>;
    readonly numeroDocumento: Prisma.FieldRef<"PasajeroReserva", 'String'>;
}
export type PasajeroReservaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelect<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    include?: Prisma.PasajeroReservaInclude<ExtArgs> | null;
    where: Prisma.PasajeroReservaWhereUniqueInput;
};
export type PasajeroReservaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelect<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    include?: Prisma.PasajeroReservaInclude<ExtArgs> | null;
    where: Prisma.PasajeroReservaWhereUniqueInput;
};
export type PasajeroReservaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelect<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    include?: Prisma.PasajeroReservaInclude<ExtArgs> | null;
    where?: Prisma.PasajeroReservaWhereInput;
    orderBy?: Prisma.PasajeroReservaOrderByWithRelationInput | Prisma.PasajeroReservaOrderByWithRelationInput[];
    cursor?: Prisma.PasajeroReservaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PasajeroReservaScalarFieldEnum | Prisma.PasajeroReservaScalarFieldEnum[];
};
export type PasajeroReservaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelect<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    include?: Prisma.PasajeroReservaInclude<ExtArgs> | null;
    where?: Prisma.PasajeroReservaWhereInput;
    orderBy?: Prisma.PasajeroReservaOrderByWithRelationInput | Prisma.PasajeroReservaOrderByWithRelationInput[];
    cursor?: Prisma.PasajeroReservaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PasajeroReservaScalarFieldEnum | Prisma.PasajeroReservaScalarFieldEnum[];
};
export type PasajeroReservaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelect<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    include?: Prisma.PasajeroReservaInclude<ExtArgs> | null;
    where?: Prisma.PasajeroReservaWhereInput;
    orderBy?: Prisma.PasajeroReservaOrderByWithRelationInput | Prisma.PasajeroReservaOrderByWithRelationInput[];
    cursor?: Prisma.PasajeroReservaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PasajeroReservaScalarFieldEnum | Prisma.PasajeroReservaScalarFieldEnum[];
};
export type PasajeroReservaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelect<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    include?: Prisma.PasajeroReservaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PasajeroReservaCreateInput, Prisma.PasajeroReservaUncheckedCreateInput>;
};
export type PasajeroReservaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PasajeroReservaCreateManyInput | Prisma.PasajeroReservaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PasajeroReservaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    data: Prisma.PasajeroReservaCreateManyInput | Prisma.PasajeroReservaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PasajeroReservaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PasajeroReservaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelect<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    include?: Prisma.PasajeroReservaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PasajeroReservaUpdateInput, Prisma.PasajeroReservaUncheckedUpdateInput>;
    where: Prisma.PasajeroReservaWhereUniqueInput;
};
export type PasajeroReservaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PasajeroReservaUpdateManyMutationInput, Prisma.PasajeroReservaUncheckedUpdateManyInput>;
    where?: Prisma.PasajeroReservaWhereInput;
    limit?: number;
};
export type PasajeroReservaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PasajeroReservaUpdateManyMutationInput, Prisma.PasajeroReservaUncheckedUpdateManyInput>;
    where?: Prisma.PasajeroReservaWhereInput;
    limit?: number;
    include?: Prisma.PasajeroReservaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PasajeroReservaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelect<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    include?: Prisma.PasajeroReservaInclude<ExtArgs> | null;
    where: Prisma.PasajeroReservaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PasajeroReservaCreateInput, Prisma.PasajeroReservaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PasajeroReservaUpdateInput, Prisma.PasajeroReservaUncheckedUpdateInput>;
};
export type PasajeroReservaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelect<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    include?: Prisma.PasajeroReservaInclude<ExtArgs> | null;
    where: Prisma.PasajeroReservaWhereUniqueInput;
};
export type PasajeroReservaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PasajeroReservaWhereInput;
    limit?: number;
};
export type PasajeroReservaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasajeroReservaSelect<ExtArgs> | null;
    omit?: Prisma.PasajeroReservaOmit<ExtArgs> | null;
    include?: Prisma.PasajeroReservaInclude<ExtArgs> | null;
};
