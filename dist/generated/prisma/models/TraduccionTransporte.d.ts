import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TraduccionTransporteModel = runtime.Types.Result.DefaultSelection<Prisma.$TraduccionTransportePayload>;
export type AggregateTraduccionTransporte = {
    _count: TraduccionTransporteCountAggregateOutputType | null;
    _min: TraduccionTransporteMinAggregateOutputType | null;
    _max: TraduccionTransporteMaxAggregateOutputType | null;
};
export type TraduccionTransporteMinAggregateOutputType = {
    id: string | null;
    transporteId: string | null;
    idioma: string | null;
    titulo: string | null;
    resumen: string | null;
    descripcion: string | null;
    estado: $Enums.EstadoTraduccion | null;
};
export type TraduccionTransporteMaxAggregateOutputType = {
    id: string | null;
    transporteId: string | null;
    idioma: string | null;
    titulo: string | null;
    resumen: string | null;
    descripcion: string | null;
    estado: $Enums.EstadoTraduccion | null;
};
export type TraduccionTransporteCountAggregateOutputType = {
    id: number;
    transporteId: number;
    idioma: number;
    titulo: number;
    resumen: number;
    descripcion: number;
    estado: number;
    _all: number;
};
export type TraduccionTransporteMinAggregateInputType = {
    id?: true;
    transporteId?: true;
    idioma?: true;
    titulo?: true;
    resumen?: true;
    descripcion?: true;
    estado?: true;
};
export type TraduccionTransporteMaxAggregateInputType = {
    id?: true;
    transporteId?: true;
    idioma?: true;
    titulo?: true;
    resumen?: true;
    descripcion?: true;
    estado?: true;
};
export type TraduccionTransporteCountAggregateInputType = {
    id?: true;
    transporteId?: true;
    idioma?: true;
    titulo?: true;
    resumen?: true;
    descripcion?: true;
    estado?: true;
    _all?: true;
};
export type TraduccionTransporteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TraduccionTransporteWhereInput;
    orderBy?: Prisma.TraduccionTransporteOrderByWithRelationInput | Prisma.TraduccionTransporteOrderByWithRelationInput[];
    cursor?: Prisma.TraduccionTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TraduccionTransporteCountAggregateInputType;
    _min?: TraduccionTransporteMinAggregateInputType;
    _max?: TraduccionTransporteMaxAggregateInputType;
};
export type GetTraduccionTransporteAggregateType<T extends TraduccionTransporteAggregateArgs> = {
    [P in keyof T & keyof AggregateTraduccionTransporte]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTraduccionTransporte[P]> : Prisma.GetScalarType<T[P], AggregateTraduccionTransporte[P]>;
};
export type TraduccionTransporteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TraduccionTransporteWhereInput;
    orderBy?: Prisma.TraduccionTransporteOrderByWithAggregationInput | Prisma.TraduccionTransporteOrderByWithAggregationInput[];
    by: Prisma.TraduccionTransporteScalarFieldEnum[] | Prisma.TraduccionTransporteScalarFieldEnum;
    having?: Prisma.TraduccionTransporteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TraduccionTransporteCountAggregateInputType | true;
    _min?: TraduccionTransporteMinAggregateInputType;
    _max?: TraduccionTransporteMaxAggregateInputType;
};
export type TraduccionTransporteGroupByOutputType = {
    id: string;
    transporteId: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    estado: $Enums.EstadoTraduccion;
    _count: TraduccionTransporteCountAggregateOutputType | null;
    _min: TraduccionTransporteMinAggregateOutputType | null;
    _max: TraduccionTransporteMaxAggregateOutputType | null;
};
export type GetTraduccionTransporteGroupByPayload<T extends TraduccionTransporteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TraduccionTransporteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TraduccionTransporteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TraduccionTransporteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TraduccionTransporteGroupByOutputType[P]>;
}>>;
export type TraduccionTransporteWhereInput = {
    AND?: Prisma.TraduccionTransporteWhereInput | Prisma.TraduccionTransporteWhereInput[];
    OR?: Prisma.TraduccionTransporteWhereInput[];
    NOT?: Prisma.TraduccionTransporteWhereInput | Prisma.TraduccionTransporteWhereInput[];
    id?: Prisma.UuidFilter<"TraduccionTransporte"> | string;
    transporteId?: Prisma.UuidFilter<"TraduccionTransporte"> | string;
    idioma?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    titulo?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    resumen?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    descripcion?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    estado?: Prisma.EnumEstadoTraduccionFilter<"TraduccionTransporte"> | $Enums.EstadoTraduccion;
    transporte?: Prisma.XOR<Prisma.TransporteScalarRelationFilter, Prisma.TransporteWhereInput>;
};
export type TraduccionTransporteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    idioma?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    transporte?: Prisma.TransporteOrderByWithRelationInput;
};
export type TraduccionTransporteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    transporteId_idioma?: Prisma.TraduccionTransporteTransporteIdIdiomaCompoundUniqueInput;
    AND?: Prisma.TraduccionTransporteWhereInput | Prisma.TraduccionTransporteWhereInput[];
    OR?: Prisma.TraduccionTransporteWhereInput[];
    NOT?: Prisma.TraduccionTransporteWhereInput | Prisma.TraduccionTransporteWhereInput[];
    transporteId?: Prisma.UuidFilter<"TraduccionTransporte"> | string;
    idioma?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    titulo?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    resumen?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    descripcion?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    estado?: Prisma.EnumEstadoTraduccionFilter<"TraduccionTransporte"> | $Enums.EstadoTraduccion;
    transporte?: Prisma.XOR<Prisma.TransporteScalarRelationFilter, Prisma.TransporteWhereInput>;
}, "id" | "transporteId_idioma">;
export type TraduccionTransporteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    idioma?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.TraduccionTransporteCountOrderByAggregateInput;
    _max?: Prisma.TraduccionTransporteMaxOrderByAggregateInput;
    _min?: Prisma.TraduccionTransporteMinOrderByAggregateInput;
};
export type TraduccionTransporteScalarWhereWithAggregatesInput = {
    AND?: Prisma.TraduccionTransporteScalarWhereWithAggregatesInput | Prisma.TraduccionTransporteScalarWhereWithAggregatesInput[];
    OR?: Prisma.TraduccionTransporteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TraduccionTransporteScalarWhereWithAggregatesInput | Prisma.TraduccionTransporteScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TraduccionTransporte"> | string;
    transporteId?: Prisma.UuidWithAggregatesFilter<"TraduccionTransporte"> | string;
    idioma?: Prisma.StringWithAggregatesFilter<"TraduccionTransporte"> | string;
    titulo?: Prisma.StringWithAggregatesFilter<"TraduccionTransporte"> | string;
    resumen?: Prisma.StringWithAggregatesFilter<"TraduccionTransporte"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"TraduccionTransporte"> | string;
    estado?: Prisma.EnumEstadoTraduccionWithAggregatesFilter<"TraduccionTransporte"> | $Enums.EstadoTraduccion;
};
export type TraduccionTransporteCreateInput = {
    id?: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    estado?: $Enums.EstadoTraduccion;
    transporte: Prisma.TransporteCreateNestedOneWithoutTraduccionesInput;
};
export type TraduccionTransporteUncheckedCreateInput = {
    id?: string;
    transporteId: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    estado?: $Enums.EstadoTraduccion;
};
export type TraduccionTransporteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
    transporte?: Prisma.TransporteUpdateOneRequiredWithoutTraduccionesNestedInput;
};
export type TraduccionTransporteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTransporteCreateManyInput = {
    id?: string;
    transporteId: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    estado?: $Enums.EstadoTraduccion;
};
export type TraduccionTransporteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTransporteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTransporteListRelationFilter = {
    every?: Prisma.TraduccionTransporteWhereInput;
    some?: Prisma.TraduccionTransporteWhereInput;
    none?: Prisma.TraduccionTransporteWhereInput;
};
export type TraduccionTransporteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TraduccionTransporteTransporteIdIdiomaCompoundUniqueInput = {
    transporteId: string;
    idioma: string;
};
export type TraduccionTransporteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    idioma?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type TraduccionTransporteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    idioma?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type TraduccionTransporteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    idioma?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type TraduccionTransporteCreateNestedManyWithoutTransporteInput = {
    create?: Prisma.XOR<Prisma.TraduccionTransporteCreateWithoutTransporteInput, Prisma.TraduccionTransporteUncheckedCreateWithoutTransporteInput> | Prisma.TraduccionTransporteCreateWithoutTransporteInput[] | Prisma.TraduccionTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.TraduccionTransporteCreateOrConnectWithoutTransporteInput | Prisma.TraduccionTransporteCreateOrConnectWithoutTransporteInput[];
    createMany?: Prisma.TraduccionTransporteCreateManyTransporteInputEnvelope;
    connect?: Prisma.TraduccionTransporteWhereUniqueInput | Prisma.TraduccionTransporteWhereUniqueInput[];
};
export type TraduccionTransporteUncheckedCreateNestedManyWithoutTransporteInput = {
    create?: Prisma.XOR<Prisma.TraduccionTransporteCreateWithoutTransporteInput, Prisma.TraduccionTransporteUncheckedCreateWithoutTransporteInput> | Prisma.TraduccionTransporteCreateWithoutTransporteInput[] | Prisma.TraduccionTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.TraduccionTransporteCreateOrConnectWithoutTransporteInput | Prisma.TraduccionTransporteCreateOrConnectWithoutTransporteInput[];
    createMany?: Prisma.TraduccionTransporteCreateManyTransporteInputEnvelope;
    connect?: Prisma.TraduccionTransporteWhereUniqueInput | Prisma.TraduccionTransporteWhereUniqueInput[];
};
export type TraduccionTransporteUpdateManyWithoutTransporteNestedInput = {
    create?: Prisma.XOR<Prisma.TraduccionTransporteCreateWithoutTransporteInput, Prisma.TraduccionTransporteUncheckedCreateWithoutTransporteInput> | Prisma.TraduccionTransporteCreateWithoutTransporteInput[] | Prisma.TraduccionTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.TraduccionTransporteCreateOrConnectWithoutTransporteInput | Prisma.TraduccionTransporteCreateOrConnectWithoutTransporteInput[];
    upsert?: Prisma.TraduccionTransporteUpsertWithWhereUniqueWithoutTransporteInput | Prisma.TraduccionTransporteUpsertWithWhereUniqueWithoutTransporteInput[];
    createMany?: Prisma.TraduccionTransporteCreateManyTransporteInputEnvelope;
    set?: Prisma.TraduccionTransporteWhereUniqueInput | Prisma.TraduccionTransporteWhereUniqueInput[];
    disconnect?: Prisma.TraduccionTransporteWhereUniqueInput | Prisma.TraduccionTransporteWhereUniqueInput[];
    delete?: Prisma.TraduccionTransporteWhereUniqueInput | Prisma.TraduccionTransporteWhereUniqueInput[];
    connect?: Prisma.TraduccionTransporteWhereUniqueInput | Prisma.TraduccionTransporteWhereUniqueInput[];
    update?: Prisma.TraduccionTransporteUpdateWithWhereUniqueWithoutTransporteInput | Prisma.TraduccionTransporteUpdateWithWhereUniqueWithoutTransporteInput[];
    updateMany?: Prisma.TraduccionTransporteUpdateManyWithWhereWithoutTransporteInput | Prisma.TraduccionTransporteUpdateManyWithWhereWithoutTransporteInput[];
    deleteMany?: Prisma.TraduccionTransporteScalarWhereInput | Prisma.TraduccionTransporteScalarWhereInput[];
};
export type TraduccionTransporteUncheckedUpdateManyWithoutTransporteNestedInput = {
    create?: Prisma.XOR<Prisma.TraduccionTransporteCreateWithoutTransporteInput, Prisma.TraduccionTransporteUncheckedCreateWithoutTransporteInput> | Prisma.TraduccionTransporteCreateWithoutTransporteInput[] | Prisma.TraduccionTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.TraduccionTransporteCreateOrConnectWithoutTransporteInput | Prisma.TraduccionTransporteCreateOrConnectWithoutTransporteInput[];
    upsert?: Prisma.TraduccionTransporteUpsertWithWhereUniqueWithoutTransporteInput | Prisma.TraduccionTransporteUpsertWithWhereUniqueWithoutTransporteInput[];
    createMany?: Prisma.TraduccionTransporteCreateManyTransporteInputEnvelope;
    set?: Prisma.TraduccionTransporteWhereUniqueInput | Prisma.TraduccionTransporteWhereUniqueInput[];
    disconnect?: Prisma.TraduccionTransporteWhereUniqueInput | Prisma.TraduccionTransporteWhereUniqueInput[];
    delete?: Prisma.TraduccionTransporteWhereUniqueInput | Prisma.TraduccionTransporteWhereUniqueInput[];
    connect?: Prisma.TraduccionTransporteWhereUniqueInput | Prisma.TraduccionTransporteWhereUniqueInput[];
    update?: Prisma.TraduccionTransporteUpdateWithWhereUniqueWithoutTransporteInput | Prisma.TraduccionTransporteUpdateWithWhereUniqueWithoutTransporteInput[];
    updateMany?: Prisma.TraduccionTransporteUpdateManyWithWhereWithoutTransporteInput | Prisma.TraduccionTransporteUpdateManyWithWhereWithoutTransporteInput[];
    deleteMany?: Prisma.TraduccionTransporteScalarWhereInput | Prisma.TraduccionTransporteScalarWhereInput[];
};
export type EnumEstadoTraduccionFieldUpdateOperationsInput = {
    set?: $Enums.EstadoTraduccion;
};
export type TraduccionTransporteCreateWithoutTransporteInput = {
    id?: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    estado?: $Enums.EstadoTraduccion;
};
export type TraduccionTransporteUncheckedCreateWithoutTransporteInput = {
    id?: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    estado?: $Enums.EstadoTraduccion;
};
export type TraduccionTransporteCreateOrConnectWithoutTransporteInput = {
    where: Prisma.TraduccionTransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.TraduccionTransporteCreateWithoutTransporteInput, Prisma.TraduccionTransporteUncheckedCreateWithoutTransporteInput>;
};
export type TraduccionTransporteCreateManyTransporteInputEnvelope = {
    data: Prisma.TraduccionTransporteCreateManyTransporteInput | Prisma.TraduccionTransporteCreateManyTransporteInput[];
    skipDuplicates?: boolean;
};
export type TraduccionTransporteUpsertWithWhereUniqueWithoutTransporteInput = {
    where: Prisma.TraduccionTransporteWhereUniqueInput;
    update: Prisma.XOR<Prisma.TraduccionTransporteUpdateWithoutTransporteInput, Prisma.TraduccionTransporteUncheckedUpdateWithoutTransporteInput>;
    create: Prisma.XOR<Prisma.TraduccionTransporteCreateWithoutTransporteInput, Prisma.TraduccionTransporteUncheckedCreateWithoutTransporteInput>;
};
export type TraduccionTransporteUpdateWithWhereUniqueWithoutTransporteInput = {
    where: Prisma.TraduccionTransporteWhereUniqueInput;
    data: Prisma.XOR<Prisma.TraduccionTransporteUpdateWithoutTransporteInput, Prisma.TraduccionTransporteUncheckedUpdateWithoutTransporteInput>;
};
export type TraduccionTransporteUpdateManyWithWhereWithoutTransporteInput = {
    where: Prisma.TraduccionTransporteScalarWhereInput;
    data: Prisma.XOR<Prisma.TraduccionTransporteUpdateManyMutationInput, Prisma.TraduccionTransporteUncheckedUpdateManyWithoutTransporteInput>;
};
export type TraduccionTransporteScalarWhereInput = {
    AND?: Prisma.TraduccionTransporteScalarWhereInput | Prisma.TraduccionTransporteScalarWhereInput[];
    OR?: Prisma.TraduccionTransporteScalarWhereInput[];
    NOT?: Prisma.TraduccionTransporteScalarWhereInput | Prisma.TraduccionTransporteScalarWhereInput[];
    id?: Prisma.UuidFilter<"TraduccionTransporte"> | string;
    transporteId?: Prisma.UuidFilter<"TraduccionTransporte"> | string;
    idioma?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    titulo?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    resumen?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    descripcion?: Prisma.StringFilter<"TraduccionTransporte"> | string;
    estado?: Prisma.EnumEstadoTraduccionFilter<"TraduccionTransporte"> | $Enums.EstadoTraduccion;
};
export type TraduccionTransporteCreateManyTransporteInput = {
    id?: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    estado?: $Enums.EstadoTraduccion;
};
export type TraduccionTransporteUpdateWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTransporteUncheckedUpdateWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTransporteUncheckedUpdateManyWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTransporteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    idioma?: boolean;
    titulo?: boolean;
    resumen?: boolean;
    descripcion?: boolean;
    estado?: boolean;
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["traduccionTransporte"]>;
export type TraduccionTransporteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    idioma?: boolean;
    titulo?: boolean;
    resumen?: boolean;
    descripcion?: boolean;
    estado?: boolean;
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["traduccionTransporte"]>;
export type TraduccionTransporteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    idioma?: boolean;
    titulo?: boolean;
    resumen?: boolean;
    descripcion?: boolean;
    estado?: boolean;
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["traduccionTransporte"]>;
export type TraduccionTransporteSelectScalar = {
    id?: boolean;
    transporteId?: boolean;
    idioma?: boolean;
    titulo?: boolean;
    resumen?: boolean;
    descripcion?: boolean;
    estado?: boolean;
};
export type TraduccionTransporteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "transporteId" | "idioma" | "titulo" | "resumen" | "descripcion" | "estado", ExtArgs["result"]["traduccionTransporte"]>;
export type TraduccionTransporteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
};
export type TraduccionTransporteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
};
export type TraduccionTransporteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
};
export type $TraduccionTransportePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TraduccionTransporte";
    objects: {
        transporte: Prisma.$TransportePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        transporteId: string;
        idioma: string;
        titulo: string;
        resumen: string;
        descripcion: string;
        estado: $Enums.EstadoTraduccion;
    }, ExtArgs["result"]["traduccionTransporte"]>;
    composites: {};
};
export type TraduccionTransporteGetPayload<S extends boolean | null | undefined | TraduccionTransporteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload, S>;
export type TraduccionTransporteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TraduccionTransporteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TraduccionTransporteCountAggregateInputType | true;
};
export interface TraduccionTransporteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TraduccionTransporte'];
        meta: {
            name: 'TraduccionTransporte';
        };
    };
    findUnique<T extends TraduccionTransporteFindUniqueArgs>(args: Prisma.SelectSubset<T, TraduccionTransporteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TraduccionTransporteClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TraduccionTransporteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TraduccionTransporteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TraduccionTransporteClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TraduccionTransporteFindFirstArgs>(args?: Prisma.SelectSubset<T, TraduccionTransporteFindFirstArgs<ExtArgs>>): Prisma.Prisma__TraduccionTransporteClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TraduccionTransporteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TraduccionTransporteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TraduccionTransporteClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TraduccionTransporteFindManyArgs>(args?: Prisma.SelectSubset<T, TraduccionTransporteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TraduccionTransporteCreateArgs>(args: Prisma.SelectSubset<T, TraduccionTransporteCreateArgs<ExtArgs>>): Prisma.Prisma__TraduccionTransporteClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TraduccionTransporteCreateManyArgs>(args?: Prisma.SelectSubset<T, TraduccionTransporteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TraduccionTransporteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TraduccionTransporteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TraduccionTransporteDeleteArgs>(args: Prisma.SelectSubset<T, TraduccionTransporteDeleteArgs<ExtArgs>>): Prisma.Prisma__TraduccionTransporteClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TraduccionTransporteUpdateArgs>(args: Prisma.SelectSubset<T, TraduccionTransporteUpdateArgs<ExtArgs>>): Prisma.Prisma__TraduccionTransporteClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TraduccionTransporteDeleteManyArgs>(args?: Prisma.SelectSubset<T, TraduccionTransporteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TraduccionTransporteUpdateManyArgs>(args: Prisma.SelectSubset<T, TraduccionTransporteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TraduccionTransporteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TraduccionTransporteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TraduccionTransporteUpsertArgs>(args: Prisma.SelectSubset<T, TraduccionTransporteUpsertArgs<ExtArgs>>): Prisma.Prisma__TraduccionTransporteClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TraduccionTransporteCountArgs>(args?: Prisma.Subset<T, TraduccionTransporteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TraduccionTransporteCountAggregateOutputType> : number>;
    aggregate<T extends TraduccionTransporteAggregateArgs>(args: Prisma.Subset<T, TraduccionTransporteAggregateArgs>): Prisma.PrismaPromise<GetTraduccionTransporteAggregateType<T>>;
    groupBy<T extends TraduccionTransporteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TraduccionTransporteGroupByArgs['orderBy'];
    } : {
        orderBy?: TraduccionTransporteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TraduccionTransporteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraduccionTransporteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TraduccionTransporteFieldRefs;
}
export interface Prisma__TraduccionTransporteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transporte<T extends Prisma.TransporteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransporteDefaultArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TraduccionTransporteFieldRefs {
    readonly id: Prisma.FieldRef<"TraduccionTransporte", 'String'>;
    readonly transporteId: Prisma.FieldRef<"TraduccionTransporte", 'String'>;
    readonly idioma: Prisma.FieldRef<"TraduccionTransporte", 'String'>;
    readonly titulo: Prisma.FieldRef<"TraduccionTransporte", 'String'>;
    readonly resumen: Prisma.FieldRef<"TraduccionTransporte", 'String'>;
    readonly descripcion: Prisma.FieldRef<"TraduccionTransporte", 'String'>;
    readonly estado: Prisma.FieldRef<"TraduccionTransporte", 'EstadoTraduccion'>;
}
export type TraduccionTransporteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTransporteInclude<ExtArgs> | null;
    where: Prisma.TraduccionTransporteWhereUniqueInput;
};
export type TraduccionTransporteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTransporteInclude<ExtArgs> | null;
    where: Prisma.TraduccionTransporteWhereUniqueInput;
};
export type TraduccionTransporteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTransporteInclude<ExtArgs> | null;
    where?: Prisma.TraduccionTransporteWhereInput;
    orderBy?: Prisma.TraduccionTransporteOrderByWithRelationInput | Prisma.TraduccionTransporteOrderByWithRelationInput[];
    cursor?: Prisma.TraduccionTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TraduccionTransporteScalarFieldEnum | Prisma.TraduccionTransporteScalarFieldEnum[];
};
export type TraduccionTransporteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTransporteInclude<ExtArgs> | null;
    where?: Prisma.TraduccionTransporteWhereInput;
    orderBy?: Prisma.TraduccionTransporteOrderByWithRelationInput | Prisma.TraduccionTransporteOrderByWithRelationInput[];
    cursor?: Prisma.TraduccionTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TraduccionTransporteScalarFieldEnum | Prisma.TraduccionTransporteScalarFieldEnum[];
};
export type TraduccionTransporteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTransporteInclude<ExtArgs> | null;
    where?: Prisma.TraduccionTransporteWhereInput;
    orderBy?: Prisma.TraduccionTransporteOrderByWithRelationInput | Prisma.TraduccionTransporteOrderByWithRelationInput[];
    cursor?: Prisma.TraduccionTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TraduccionTransporteScalarFieldEnum | Prisma.TraduccionTransporteScalarFieldEnum[];
};
export type TraduccionTransporteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTransporteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TraduccionTransporteCreateInput, Prisma.TraduccionTransporteUncheckedCreateInput>;
};
export type TraduccionTransporteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TraduccionTransporteCreateManyInput | Prisma.TraduccionTransporteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TraduccionTransporteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    data: Prisma.TraduccionTransporteCreateManyInput | Prisma.TraduccionTransporteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TraduccionTransporteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TraduccionTransporteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTransporteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TraduccionTransporteUpdateInput, Prisma.TraduccionTransporteUncheckedUpdateInput>;
    where: Prisma.TraduccionTransporteWhereUniqueInput;
};
export type TraduccionTransporteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TraduccionTransporteUpdateManyMutationInput, Prisma.TraduccionTransporteUncheckedUpdateManyInput>;
    where?: Prisma.TraduccionTransporteWhereInput;
    limit?: number;
};
export type TraduccionTransporteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TraduccionTransporteUpdateManyMutationInput, Prisma.TraduccionTransporteUncheckedUpdateManyInput>;
    where?: Prisma.TraduccionTransporteWhereInput;
    limit?: number;
    include?: Prisma.TraduccionTransporteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TraduccionTransporteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTransporteInclude<ExtArgs> | null;
    where: Prisma.TraduccionTransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.TraduccionTransporteCreateInput, Prisma.TraduccionTransporteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TraduccionTransporteUpdateInput, Prisma.TraduccionTransporteUncheckedUpdateInput>;
};
export type TraduccionTransporteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTransporteInclude<ExtArgs> | null;
    where: Prisma.TraduccionTransporteWhereUniqueInput;
};
export type TraduccionTransporteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TraduccionTransporteWhereInput;
    limit?: number;
};
export type TraduccionTransporteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTransporteSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTransporteOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTransporteInclude<ExtArgs> | null;
};
