import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HistorialReservaModel = runtime.Types.Result.DefaultSelection<Prisma.$HistorialReservaPayload>;
export type AggregateHistorialReserva = {
    _count: HistorialReservaCountAggregateOutputType | null;
    _min: HistorialReservaMinAggregateOutputType | null;
    _max: HistorialReservaMaxAggregateOutputType | null;
};
export type HistorialReservaMinAggregateOutputType = {
    id: string | null;
    reservaId: string | null;
    estado: $Enums.EstadoReserva | null;
    detalle: string | null;
    creadoEn: Date | null;
};
export type HistorialReservaMaxAggregateOutputType = {
    id: string | null;
    reservaId: string | null;
    estado: $Enums.EstadoReserva | null;
    detalle: string | null;
    creadoEn: Date | null;
};
export type HistorialReservaCountAggregateOutputType = {
    id: number;
    reservaId: number;
    estado: number;
    detalle: number;
    creadoEn: number;
    _all: number;
};
export type HistorialReservaMinAggregateInputType = {
    id?: true;
    reservaId?: true;
    estado?: true;
    detalle?: true;
    creadoEn?: true;
};
export type HistorialReservaMaxAggregateInputType = {
    id?: true;
    reservaId?: true;
    estado?: true;
    detalle?: true;
    creadoEn?: true;
};
export type HistorialReservaCountAggregateInputType = {
    id?: true;
    reservaId?: true;
    estado?: true;
    detalle?: true;
    creadoEn?: true;
    _all?: true;
};
export type HistorialReservaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HistorialReservaWhereInput;
    orderBy?: Prisma.HistorialReservaOrderByWithRelationInput | Prisma.HistorialReservaOrderByWithRelationInput[];
    cursor?: Prisma.HistorialReservaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HistorialReservaCountAggregateInputType;
    _min?: HistorialReservaMinAggregateInputType;
    _max?: HistorialReservaMaxAggregateInputType;
};
export type GetHistorialReservaAggregateType<T extends HistorialReservaAggregateArgs> = {
    [P in keyof T & keyof AggregateHistorialReserva]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHistorialReserva[P]> : Prisma.GetScalarType<T[P], AggregateHistorialReserva[P]>;
};
export type HistorialReservaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HistorialReservaWhereInput;
    orderBy?: Prisma.HistorialReservaOrderByWithAggregationInput | Prisma.HistorialReservaOrderByWithAggregationInput[];
    by: Prisma.HistorialReservaScalarFieldEnum[] | Prisma.HistorialReservaScalarFieldEnum;
    having?: Prisma.HistorialReservaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HistorialReservaCountAggregateInputType | true;
    _min?: HistorialReservaMinAggregateInputType;
    _max?: HistorialReservaMaxAggregateInputType;
};
export type HistorialReservaGroupByOutputType = {
    id: string;
    reservaId: string;
    estado: $Enums.EstadoReserva;
    detalle: string | null;
    creadoEn: Date;
    _count: HistorialReservaCountAggregateOutputType | null;
    _min: HistorialReservaMinAggregateOutputType | null;
    _max: HistorialReservaMaxAggregateOutputType | null;
};
export type GetHistorialReservaGroupByPayload<T extends HistorialReservaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HistorialReservaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HistorialReservaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HistorialReservaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HistorialReservaGroupByOutputType[P]>;
}>>;
export type HistorialReservaWhereInput = {
    AND?: Prisma.HistorialReservaWhereInput | Prisma.HistorialReservaWhereInput[];
    OR?: Prisma.HistorialReservaWhereInput[];
    NOT?: Prisma.HistorialReservaWhereInput | Prisma.HistorialReservaWhereInput[];
    id?: Prisma.UuidFilter<"HistorialReserva"> | string;
    reservaId?: Prisma.UuidFilter<"HistorialReserva"> | string;
    estado?: Prisma.EnumEstadoReservaFilter<"HistorialReserva"> | $Enums.EstadoReserva;
    detalle?: Prisma.StringNullableFilter<"HistorialReserva"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"HistorialReserva"> | Date | string;
    reserva?: Prisma.XOR<Prisma.ReservaScalarRelationFilter, Prisma.ReservaWhereInput>;
};
export type HistorialReservaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    detalle?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    reserva?: Prisma.ReservaOrderByWithRelationInput;
};
export type HistorialReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HistorialReservaWhereInput | Prisma.HistorialReservaWhereInput[];
    OR?: Prisma.HistorialReservaWhereInput[];
    NOT?: Prisma.HistorialReservaWhereInput | Prisma.HistorialReservaWhereInput[];
    reservaId?: Prisma.UuidFilter<"HistorialReserva"> | string;
    estado?: Prisma.EnumEstadoReservaFilter<"HistorialReserva"> | $Enums.EstadoReserva;
    detalle?: Prisma.StringNullableFilter<"HistorialReserva"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"HistorialReserva"> | Date | string;
    reserva?: Prisma.XOR<Prisma.ReservaScalarRelationFilter, Prisma.ReservaWhereInput>;
}, "id">;
export type HistorialReservaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    detalle?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    _count?: Prisma.HistorialReservaCountOrderByAggregateInput;
    _max?: Prisma.HistorialReservaMaxOrderByAggregateInput;
    _min?: Prisma.HistorialReservaMinOrderByAggregateInput;
};
export type HistorialReservaScalarWhereWithAggregatesInput = {
    AND?: Prisma.HistorialReservaScalarWhereWithAggregatesInput | Prisma.HistorialReservaScalarWhereWithAggregatesInput[];
    OR?: Prisma.HistorialReservaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HistorialReservaScalarWhereWithAggregatesInput | Prisma.HistorialReservaScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"HistorialReserva"> | string;
    reservaId?: Prisma.UuidWithAggregatesFilter<"HistorialReserva"> | string;
    estado?: Prisma.EnumEstadoReservaWithAggregatesFilter<"HistorialReserva"> | $Enums.EstadoReserva;
    detalle?: Prisma.StringNullableWithAggregatesFilter<"HistorialReserva"> | string | null;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"HistorialReserva"> | Date | string;
};
export type HistorialReservaCreateInput = {
    id?: string;
    estado: $Enums.EstadoReserva;
    detalle?: string | null;
    creadoEn?: Date | string;
    reserva: Prisma.ReservaCreateNestedOneWithoutHistorialInput;
};
export type HistorialReservaUncheckedCreateInput = {
    id?: string;
    reservaId: string;
    estado: $Enums.EstadoReserva;
    detalle?: string | null;
    creadoEn?: Date | string;
};
export type HistorialReservaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reserva?: Prisma.ReservaUpdateOneRequiredWithoutHistorialNestedInput;
};
export type HistorialReservaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservaId?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialReservaCreateManyInput = {
    id?: string;
    reservaId: string;
    estado: $Enums.EstadoReserva;
    detalle?: string | null;
    creadoEn?: Date | string;
};
export type HistorialReservaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialReservaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservaId?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialReservaListRelationFilter = {
    every?: Prisma.HistorialReservaWhereInput;
    some?: Prisma.HistorialReservaWhereInput;
    none?: Prisma.HistorialReservaWhereInput;
};
export type HistorialReservaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HistorialReservaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type HistorialReservaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type HistorialReservaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type HistorialReservaCreateNestedManyWithoutReservaInput = {
    create?: Prisma.XOR<Prisma.HistorialReservaCreateWithoutReservaInput, Prisma.HistorialReservaUncheckedCreateWithoutReservaInput> | Prisma.HistorialReservaCreateWithoutReservaInput[] | Prisma.HistorialReservaUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.HistorialReservaCreateOrConnectWithoutReservaInput | Prisma.HistorialReservaCreateOrConnectWithoutReservaInput[];
    createMany?: Prisma.HistorialReservaCreateManyReservaInputEnvelope;
    connect?: Prisma.HistorialReservaWhereUniqueInput | Prisma.HistorialReservaWhereUniqueInput[];
};
export type HistorialReservaUncheckedCreateNestedManyWithoutReservaInput = {
    create?: Prisma.XOR<Prisma.HistorialReservaCreateWithoutReservaInput, Prisma.HistorialReservaUncheckedCreateWithoutReservaInput> | Prisma.HistorialReservaCreateWithoutReservaInput[] | Prisma.HistorialReservaUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.HistorialReservaCreateOrConnectWithoutReservaInput | Prisma.HistorialReservaCreateOrConnectWithoutReservaInput[];
    createMany?: Prisma.HistorialReservaCreateManyReservaInputEnvelope;
    connect?: Prisma.HistorialReservaWhereUniqueInput | Prisma.HistorialReservaWhereUniqueInput[];
};
export type HistorialReservaUpdateManyWithoutReservaNestedInput = {
    create?: Prisma.XOR<Prisma.HistorialReservaCreateWithoutReservaInput, Prisma.HistorialReservaUncheckedCreateWithoutReservaInput> | Prisma.HistorialReservaCreateWithoutReservaInput[] | Prisma.HistorialReservaUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.HistorialReservaCreateOrConnectWithoutReservaInput | Prisma.HistorialReservaCreateOrConnectWithoutReservaInput[];
    upsert?: Prisma.HistorialReservaUpsertWithWhereUniqueWithoutReservaInput | Prisma.HistorialReservaUpsertWithWhereUniqueWithoutReservaInput[];
    createMany?: Prisma.HistorialReservaCreateManyReservaInputEnvelope;
    set?: Prisma.HistorialReservaWhereUniqueInput | Prisma.HistorialReservaWhereUniqueInput[];
    disconnect?: Prisma.HistorialReservaWhereUniqueInput | Prisma.HistorialReservaWhereUniqueInput[];
    delete?: Prisma.HistorialReservaWhereUniqueInput | Prisma.HistorialReservaWhereUniqueInput[];
    connect?: Prisma.HistorialReservaWhereUniqueInput | Prisma.HistorialReservaWhereUniqueInput[];
    update?: Prisma.HistorialReservaUpdateWithWhereUniqueWithoutReservaInput | Prisma.HistorialReservaUpdateWithWhereUniqueWithoutReservaInput[];
    updateMany?: Prisma.HistorialReservaUpdateManyWithWhereWithoutReservaInput | Prisma.HistorialReservaUpdateManyWithWhereWithoutReservaInput[];
    deleteMany?: Prisma.HistorialReservaScalarWhereInput | Prisma.HistorialReservaScalarWhereInput[];
};
export type HistorialReservaUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: Prisma.XOR<Prisma.HistorialReservaCreateWithoutReservaInput, Prisma.HistorialReservaUncheckedCreateWithoutReservaInput> | Prisma.HistorialReservaCreateWithoutReservaInput[] | Prisma.HistorialReservaUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.HistorialReservaCreateOrConnectWithoutReservaInput | Prisma.HistorialReservaCreateOrConnectWithoutReservaInput[];
    upsert?: Prisma.HistorialReservaUpsertWithWhereUniqueWithoutReservaInput | Prisma.HistorialReservaUpsertWithWhereUniqueWithoutReservaInput[];
    createMany?: Prisma.HistorialReservaCreateManyReservaInputEnvelope;
    set?: Prisma.HistorialReservaWhereUniqueInput | Prisma.HistorialReservaWhereUniqueInput[];
    disconnect?: Prisma.HistorialReservaWhereUniqueInput | Prisma.HistorialReservaWhereUniqueInput[];
    delete?: Prisma.HistorialReservaWhereUniqueInput | Prisma.HistorialReservaWhereUniqueInput[];
    connect?: Prisma.HistorialReservaWhereUniqueInput | Prisma.HistorialReservaWhereUniqueInput[];
    update?: Prisma.HistorialReservaUpdateWithWhereUniqueWithoutReservaInput | Prisma.HistorialReservaUpdateWithWhereUniqueWithoutReservaInput[];
    updateMany?: Prisma.HistorialReservaUpdateManyWithWhereWithoutReservaInput | Prisma.HistorialReservaUpdateManyWithWhereWithoutReservaInput[];
    deleteMany?: Prisma.HistorialReservaScalarWhereInput | Prisma.HistorialReservaScalarWhereInput[];
};
export type HistorialReservaCreateWithoutReservaInput = {
    id?: string;
    estado: $Enums.EstadoReserva;
    detalle?: string | null;
    creadoEn?: Date | string;
};
export type HistorialReservaUncheckedCreateWithoutReservaInput = {
    id?: string;
    estado: $Enums.EstadoReserva;
    detalle?: string | null;
    creadoEn?: Date | string;
};
export type HistorialReservaCreateOrConnectWithoutReservaInput = {
    where: Prisma.HistorialReservaWhereUniqueInput;
    create: Prisma.XOR<Prisma.HistorialReservaCreateWithoutReservaInput, Prisma.HistorialReservaUncheckedCreateWithoutReservaInput>;
};
export type HistorialReservaCreateManyReservaInputEnvelope = {
    data: Prisma.HistorialReservaCreateManyReservaInput | Prisma.HistorialReservaCreateManyReservaInput[];
    skipDuplicates?: boolean;
};
export type HistorialReservaUpsertWithWhereUniqueWithoutReservaInput = {
    where: Prisma.HistorialReservaWhereUniqueInput;
    update: Prisma.XOR<Prisma.HistorialReservaUpdateWithoutReservaInput, Prisma.HistorialReservaUncheckedUpdateWithoutReservaInput>;
    create: Prisma.XOR<Prisma.HistorialReservaCreateWithoutReservaInput, Prisma.HistorialReservaUncheckedCreateWithoutReservaInput>;
};
export type HistorialReservaUpdateWithWhereUniqueWithoutReservaInput = {
    where: Prisma.HistorialReservaWhereUniqueInput;
    data: Prisma.XOR<Prisma.HistorialReservaUpdateWithoutReservaInput, Prisma.HistorialReservaUncheckedUpdateWithoutReservaInput>;
};
export type HistorialReservaUpdateManyWithWhereWithoutReservaInput = {
    where: Prisma.HistorialReservaScalarWhereInput;
    data: Prisma.XOR<Prisma.HistorialReservaUpdateManyMutationInput, Prisma.HistorialReservaUncheckedUpdateManyWithoutReservaInput>;
};
export type HistorialReservaScalarWhereInput = {
    AND?: Prisma.HistorialReservaScalarWhereInput | Prisma.HistorialReservaScalarWhereInput[];
    OR?: Prisma.HistorialReservaScalarWhereInput[];
    NOT?: Prisma.HistorialReservaScalarWhereInput | Prisma.HistorialReservaScalarWhereInput[];
    id?: Prisma.UuidFilter<"HistorialReserva"> | string;
    reservaId?: Prisma.UuidFilter<"HistorialReserva"> | string;
    estado?: Prisma.EnumEstadoReservaFilter<"HistorialReserva"> | $Enums.EstadoReserva;
    detalle?: Prisma.StringNullableFilter<"HistorialReserva"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"HistorialReserva"> | Date | string;
};
export type HistorialReservaCreateManyReservaInput = {
    id?: string;
    estado: $Enums.EstadoReserva;
    detalle?: string | null;
    creadoEn?: Date | string;
};
export type HistorialReservaUpdateWithoutReservaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialReservaUncheckedUpdateWithoutReservaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialReservaUncheckedUpdateManyWithoutReservaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialReservaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservaId?: boolean;
    estado?: boolean;
    detalle?: boolean;
    creadoEn?: boolean;
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historialReserva"]>;
export type HistorialReservaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservaId?: boolean;
    estado?: boolean;
    detalle?: boolean;
    creadoEn?: boolean;
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historialReserva"]>;
export type HistorialReservaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservaId?: boolean;
    estado?: boolean;
    detalle?: boolean;
    creadoEn?: boolean;
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historialReserva"]>;
export type HistorialReservaSelectScalar = {
    id?: boolean;
    reservaId?: boolean;
    estado?: boolean;
    detalle?: boolean;
    creadoEn?: boolean;
};
export type HistorialReservaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reservaId" | "estado" | "detalle" | "creadoEn", ExtArgs["result"]["historialReserva"]>;
export type HistorialReservaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
};
export type HistorialReservaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
};
export type HistorialReservaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
};
export type $HistorialReservaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HistorialReserva";
    objects: {
        reserva: Prisma.$ReservaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reservaId: string;
        estado: $Enums.EstadoReserva;
        detalle: string | null;
        creadoEn: Date;
    }, ExtArgs["result"]["historialReserva"]>;
    composites: {};
};
export type HistorialReservaGetPayload<S extends boolean | null | undefined | HistorialReservaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload, S>;
export type HistorialReservaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HistorialReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HistorialReservaCountAggregateInputType | true;
};
export interface HistorialReservaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HistorialReserva'];
        meta: {
            name: 'HistorialReserva';
        };
    };
    findUnique<T extends HistorialReservaFindUniqueArgs>(args: Prisma.SelectSubset<T, HistorialReservaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HistorialReservaClient<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HistorialReservaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HistorialReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HistorialReservaClient<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HistorialReservaFindFirstArgs>(args?: Prisma.SelectSubset<T, HistorialReservaFindFirstArgs<ExtArgs>>): Prisma.Prisma__HistorialReservaClient<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HistorialReservaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HistorialReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HistorialReservaClient<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HistorialReservaFindManyArgs>(args?: Prisma.SelectSubset<T, HistorialReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HistorialReservaCreateArgs>(args: Prisma.SelectSubset<T, HistorialReservaCreateArgs<ExtArgs>>): Prisma.Prisma__HistorialReservaClient<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HistorialReservaCreateManyArgs>(args?: Prisma.SelectSubset<T, HistorialReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HistorialReservaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HistorialReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HistorialReservaDeleteArgs>(args: Prisma.SelectSubset<T, HistorialReservaDeleteArgs<ExtArgs>>): Prisma.Prisma__HistorialReservaClient<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HistorialReservaUpdateArgs>(args: Prisma.SelectSubset<T, HistorialReservaUpdateArgs<ExtArgs>>): Prisma.Prisma__HistorialReservaClient<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HistorialReservaDeleteManyArgs>(args?: Prisma.SelectSubset<T, HistorialReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HistorialReservaUpdateManyArgs>(args: Prisma.SelectSubset<T, HistorialReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HistorialReservaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HistorialReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HistorialReservaUpsertArgs>(args: Prisma.SelectSubset<T, HistorialReservaUpsertArgs<ExtArgs>>): Prisma.Prisma__HistorialReservaClient<runtime.Types.Result.GetResult<Prisma.$HistorialReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HistorialReservaCountArgs>(args?: Prisma.Subset<T, HistorialReservaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HistorialReservaCountAggregateOutputType> : number>;
    aggregate<T extends HistorialReservaAggregateArgs>(args: Prisma.Subset<T, HistorialReservaAggregateArgs>): Prisma.PrismaPromise<GetHistorialReservaAggregateType<T>>;
    groupBy<T extends HistorialReservaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HistorialReservaGroupByArgs['orderBy'];
    } : {
        orderBy?: HistorialReservaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HistorialReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HistorialReservaFieldRefs;
}
export interface Prisma__HistorialReservaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reserva<T extends Prisma.ReservaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReservaDefaultArgs<ExtArgs>>): Prisma.Prisma__ReservaClient<runtime.Types.Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HistorialReservaFieldRefs {
    readonly id: Prisma.FieldRef<"HistorialReserva", 'String'>;
    readonly reservaId: Prisma.FieldRef<"HistorialReserva", 'String'>;
    readonly estado: Prisma.FieldRef<"HistorialReserva", 'EstadoReserva'>;
    readonly detalle: Prisma.FieldRef<"HistorialReserva", 'String'>;
    readonly creadoEn: Prisma.FieldRef<"HistorialReserva", 'DateTime'>;
}
export type HistorialReservaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelect<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    include?: Prisma.HistorialReservaInclude<ExtArgs> | null;
    where: Prisma.HistorialReservaWhereUniqueInput;
};
export type HistorialReservaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelect<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    include?: Prisma.HistorialReservaInclude<ExtArgs> | null;
    where: Prisma.HistorialReservaWhereUniqueInput;
};
export type HistorialReservaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelect<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    include?: Prisma.HistorialReservaInclude<ExtArgs> | null;
    where?: Prisma.HistorialReservaWhereInput;
    orderBy?: Prisma.HistorialReservaOrderByWithRelationInput | Prisma.HistorialReservaOrderByWithRelationInput[];
    cursor?: Prisma.HistorialReservaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HistorialReservaScalarFieldEnum | Prisma.HistorialReservaScalarFieldEnum[];
};
export type HistorialReservaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelect<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    include?: Prisma.HistorialReservaInclude<ExtArgs> | null;
    where?: Prisma.HistorialReservaWhereInput;
    orderBy?: Prisma.HistorialReservaOrderByWithRelationInput | Prisma.HistorialReservaOrderByWithRelationInput[];
    cursor?: Prisma.HistorialReservaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HistorialReservaScalarFieldEnum | Prisma.HistorialReservaScalarFieldEnum[];
};
export type HistorialReservaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelect<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    include?: Prisma.HistorialReservaInclude<ExtArgs> | null;
    where?: Prisma.HistorialReservaWhereInput;
    orderBy?: Prisma.HistorialReservaOrderByWithRelationInput | Prisma.HistorialReservaOrderByWithRelationInput[];
    cursor?: Prisma.HistorialReservaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HistorialReservaScalarFieldEnum | Prisma.HistorialReservaScalarFieldEnum[];
};
export type HistorialReservaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelect<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    include?: Prisma.HistorialReservaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HistorialReservaCreateInput, Prisma.HistorialReservaUncheckedCreateInput>;
};
export type HistorialReservaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HistorialReservaCreateManyInput | Prisma.HistorialReservaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HistorialReservaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    data: Prisma.HistorialReservaCreateManyInput | Prisma.HistorialReservaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HistorialReservaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HistorialReservaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelect<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    include?: Prisma.HistorialReservaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HistorialReservaUpdateInput, Prisma.HistorialReservaUncheckedUpdateInput>;
    where: Prisma.HistorialReservaWhereUniqueInput;
};
export type HistorialReservaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HistorialReservaUpdateManyMutationInput, Prisma.HistorialReservaUncheckedUpdateManyInput>;
    where?: Prisma.HistorialReservaWhereInput;
    limit?: number;
};
export type HistorialReservaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HistorialReservaUpdateManyMutationInput, Prisma.HistorialReservaUncheckedUpdateManyInput>;
    where?: Prisma.HistorialReservaWhereInput;
    limit?: number;
    include?: Prisma.HistorialReservaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HistorialReservaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelect<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    include?: Prisma.HistorialReservaInclude<ExtArgs> | null;
    where: Prisma.HistorialReservaWhereUniqueInput;
    create: Prisma.XOR<Prisma.HistorialReservaCreateInput, Prisma.HistorialReservaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HistorialReservaUpdateInput, Prisma.HistorialReservaUncheckedUpdateInput>;
};
export type HistorialReservaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelect<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    include?: Prisma.HistorialReservaInclude<ExtArgs> | null;
    where: Prisma.HistorialReservaWhereUniqueInput;
};
export type HistorialReservaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HistorialReservaWhereInput;
    limit?: number;
};
export type HistorialReservaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HistorialReservaSelect<ExtArgs> | null;
    omit?: Prisma.HistorialReservaOmit<ExtArgs> | null;
    include?: Prisma.HistorialReservaInclude<ExtArgs> | null;
};
