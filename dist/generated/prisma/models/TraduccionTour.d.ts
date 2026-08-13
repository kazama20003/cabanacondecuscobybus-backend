import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TraduccionTourModel = runtime.Types.Result.DefaultSelection<Prisma.$TraduccionTourPayload>;
export type AggregateTraduccionTour = {
    _count: TraduccionTourCountAggregateOutputType | null;
    _min: TraduccionTourMinAggregateOutputType | null;
    _max: TraduccionTourMaxAggregateOutputType | null;
};
export type TraduccionTourMinAggregateOutputType = {
    id: string | null;
    tourId: string | null;
    idioma: string | null;
    titulo: string | null;
    resumen: string | null;
    descripcion: string | null;
    queLlevar: string | null;
    estado: $Enums.EstadoTraduccion | null;
};
export type TraduccionTourMaxAggregateOutputType = {
    id: string | null;
    tourId: string | null;
    idioma: string | null;
    titulo: string | null;
    resumen: string | null;
    descripcion: string | null;
    queLlevar: string | null;
    estado: $Enums.EstadoTraduccion | null;
};
export type TraduccionTourCountAggregateOutputType = {
    id: number;
    tourId: number;
    idioma: number;
    titulo: number;
    resumen: number;
    descripcion: number;
    queLlevar: number;
    estado: number;
    _all: number;
};
export type TraduccionTourMinAggregateInputType = {
    id?: true;
    tourId?: true;
    idioma?: true;
    titulo?: true;
    resumen?: true;
    descripcion?: true;
    queLlevar?: true;
    estado?: true;
};
export type TraduccionTourMaxAggregateInputType = {
    id?: true;
    tourId?: true;
    idioma?: true;
    titulo?: true;
    resumen?: true;
    descripcion?: true;
    queLlevar?: true;
    estado?: true;
};
export type TraduccionTourCountAggregateInputType = {
    id?: true;
    tourId?: true;
    idioma?: true;
    titulo?: true;
    resumen?: true;
    descripcion?: true;
    queLlevar?: true;
    estado?: true;
    _all?: true;
};
export type TraduccionTourAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TraduccionTourWhereInput;
    orderBy?: Prisma.TraduccionTourOrderByWithRelationInput | Prisma.TraduccionTourOrderByWithRelationInput[];
    cursor?: Prisma.TraduccionTourWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TraduccionTourCountAggregateInputType;
    _min?: TraduccionTourMinAggregateInputType;
    _max?: TraduccionTourMaxAggregateInputType;
};
export type GetTraduccionTourAggregateType<T extends TraduccionTourAggregateArgs> = {
    [P in keyof T & keyof AggregateTraduccionTour]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTraduccionTour[P]> : Prisma.GetScalarType<T[P], AggregateTraduccionTour[P]>;
};
export type TraduccionTourGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TraduccionTourWhereInput;
    orderBy?: Prisma.TraduccionTourOrderByWithAggregationInput | Prisma.TraduccionTourOrderByWithAggregationInput[];
    by: Prisma.TraduccionTourScalarFieldEnum[] | Prisma.TraduccionTourScalarFieldEnum;
    having?: Prisma.TraduccionTourScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TraduccionTourCountAggregateInputType | true;
    _min?: TraduccionTourMinAggregateInputType;
    _max?: TraduccionTourMaxAggregateInputType;
};
export type TraduccionTourGroupByOutputType = {
    id: string;
    tourId: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    queLlevar: string | null;
    estado: $Enums.EstadoTraduccion;
    _count: TraduccionTourCountAggregateOutputType | null;
    _min: TraduccionTourMinAggregateOutputType | null;
    _max: TraduccionTourMaxAggregateOutputType | null;
};
export type GetTraduccionTourGroupByPayload<T extends TraduccionTourGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TraduccionTourGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TraduccionTourGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TraduccionTourGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TraduccionTourGroupByOutputType[P]>;
}>>;
export type TraduccionTourWhereInput = {
    AND?: Prisma.TraduccionTourWhereInput | Prisma.TraduccionTourWhereInput[];
    OR?: Prisma.TraduccionTourWhereInput[];
    NOT?: Prisma.TraduccionTourWhereInput | Prisma.TraduccionTourWhereInput[];
    id?: Prisma.UuidFilter<"TraduccionTour"> | string;
    tourId?: Prisma.UuidFilter<"TraduccionTour"> | string;
    idioma?: Prisma.StringFilter<"TraduccionTour"> | string;
    titulo?: Prisma.StringFilter<"TraduccionTour"> | string;
    resumen?: Prisma.StringFilter<"TraduccionTour"> | string;
    descripcion?: Prisma.StringFilter<"TraduccionTour"> | string;
    queLlevar?: Prisma.StringNullableFilter<"TraduccionTour"> | string | null;
    estado?: Prisma.EnumEstadoTraduccionFilter<"TraduccionTour"> | $Enums.EstadoTraduccion;
    tour?: Prisma.XOR<Prisma.TourScalarRelationFilter, Prisma.TourWhereInput>;
};
export type TraduccionTourOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    idioma?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    queLlevar?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    tour?: Prisma.TourOrderByWithRelationInput;
};
export type TraduccionTourWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tourId_idioma?: Prisma.TraduccionTourTourIdIdiomaCompoundUniqueInput;
    AND?: Prisma.TraduccionTourWhereInput | Prisma.TraduccionTourWhereInput[];
    OR?: Prisma.TraduccionTourWhereInput[];
    NOT?: Prisma.TraduccionTourWhereInput | Prisma.TraduccionTourWhereInput[];
    tourId?: Prisma.UuidFilter<"TraduccionTour"> | string;
    idioma?: Prisma.StringFilter<"TraduccionTour"> | string;
    titulo?: Prisma.StringFilter<"TraduccionTour"> | string;
    resumen?: Prisma.StringFilter<"TraduccionTour"> | string;
    descripcion?: Prisma.StringFilter<"TraduccionTour"> | string;
    queLlevar?: Prisma.StringNullableFilter<"TraduccionTour"> | string | null;
    estado?: Prisma.EnumEstadoTraduccionFilter<"TraduccionTour"> | $Enums.EstadoTraduccion;
    tour?: Prisma.XOR<Prisma.TourScalarRelationFilter, Prisma.TourWhereInput>;
}, "id" | "tourId_idioma">;
export type TraduccionTourOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    idioma?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    queLlevar?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.TraduccionTourCountOrderByAggregateInput;
    _max?: Prisma.TraduccionTourMaxOrderByAggregateInput;
    _min?: Prisma.TraduccionTourMinOrderByAggregateInput;
};
export type TraduccionTourScalarWhereWithAggregatesInput = {
    AND?: Prisma.TraduccionTourScalarWhereWithAggregatesInput | Prisma.TraduccionTourScalarWhereWithAggregatesInput[];
    OR?: Prisma.TraduccionTourScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TraduccionTourScalarWhereWithAggregatesInput | Prisma.TraduccionTourScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TraduccionTour"> | string;
    tourId?: Prisma.UuidWithAggregatesFilter<"TraduccionTour"> | string;
    idioma?: Prisma.StringWithAggregatesFilter<"TraduccionTour"> | string;
    titulo?: Prisma.StringWithAggregatesFilter<"TraduccionTour"> | string;
    resumen?: Prisma.StringWithAggregatesFilter<"TraduccionTour"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"TraduccionTour"> | string;
    queLlevar?: Prisma.StringNullableWithAggregatesFilter<"TraduccionTour"> | string | null;
    estado?: Prisma.EnumEstadoTraduccionWithAggregatesFilter<"TraduccionTour"> | $Enums.EstadoTraduccion;
};
export type TraduccionTourCreateInput = {
    id?: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    queLlevar?: string | null;
    estado?: $Enums.EstadoTraduccion;
    tour: Prisma.TourCreateNestedOneWithoutTraduccionesInput;
};
export type TraduccionTourUncheckedCreateInput = {
    id?: string;
    tourId: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    queLlevar?: string | null;
    estado?: $Enums.EstadoTraduccion;
};
export type TraduccionTourUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    queLlevar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
    tour?: Prisma.TourUpdateOneRequiredWithoutTraduccionesNestedInput;
};
export type TraduccionTourUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tourId?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    queLlevar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTourCreateManyInput = {
    id?: string;
    tourId: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    queLlevar?: string | null;
    estado?: $Enums.EstadoTraduccion;
};
export type TraduccionTourUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    queLlevar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTourUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tourId?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    queLlevar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTourListRelationFilter = {
    every?: Prisma.TraduccionTourWhereInput;
    some?: Prisma.TraduccionTourWhereInput;
    none?: Prisma.TraduccionTourWhereInput;
};
export type TraduccionTourOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TraduccionTourTourIdIdiomaCompoundUniqueInput = {
    tourId: string;
    idioma: string;
};
export type TraduccionTourCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    idioma?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    queLlevar?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type TraduccionTourMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    idioma?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    queLlevar?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type TraduccionTourMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    idioma?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    queLlevar?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type TraduccionTourCreateNestedManyWithoutTourInput = {
    create?: Prisma.XOR<Prisma.TraduccionTourCreateWithoutTourInput, Prisma.TraduccionTourUncheckedCreateWithoutTourInput> | Prisma.TraduccionTourCreateWithoutTourInput[] | Prisma.TraduccionTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.TraduccionTourCreateOrConnectWithoutTourInput | Prisma.TraduccionTourCreateOrConnectWithoutTourInput[];
    createMany?: Prisma.TraduccionTourCreateManyTourInputEnvelope;
    connect?: Prisma.TraduccionTourWhereUniqueInput | Prisma.TraduccionTourWhereUniqueInput[];
};
export type TraduccionTourUncheckedCreateNestedManyWithoutTourInput = {
    create?: Prisma.XOR<Prisma.TraduccionTourCreateWithoutTourInput, Prisma.TraduccionTourUncheckedCreateWithoutTourInput> | Prisma.TraduccionTourCreateWithoutTourInput[] | Prisma.TraduccionTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.TraduccionTourCreateOrConnectWithoutTourInput | Prisma.TraduccionTourCreateOrConnectWithoutTourInput[];
    createMany?: Prisma.TraduccionTourCreateManyTourInputEnvelope;
    connect?: Prisma.TraduccionTourWhereUniqueInput | Prisma.TraduccionTourWhereUniqueInput[];
};
export type TraduccionTourUpdateManyWithoutTourNestedInput = {
    create?: Prisma.XOR<Prisma.TraduccionTourCreateWithoutTourInput, Prisma.TraduccionTourUncheckedCreateWithoutTourInput> | Prisma.TraduccionTourCreateWithoutTourInput[] | Prisma.TraduccionTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.TraduccionTourCreateOrConnectWithoutTourInput | Prisma.TraduccionTourCreateOrConnectWithoutTourInput[];
    upsert?: Prisma.TraduccionTourUpsertWithWhereUniqueWithoutTourInput | Prisma.TraduccionTourUpsertWithWhereUniqueWithoutTourInput[];
    createMany?: Prisma.TraduccionTourCreateManyTourInputEnvelope;
    set?: Prisma.TraduccionTourWhereUniqueInput | Prisma.TraduccionTourWhereUniqueInput[];
    disconnect?: Prisma.TraduccionTourWhereUniqueInput | Prisma.TraduccionTourWhereUniqueInput[];
    delete?: Prisma.TraduccionTourWhereUniqueInput | Prisma.TraduccionTourWhereUniqueInput[];
    connect?: Prisma.TraduccionTourWhereUniqueInput | Prisma.TraduccionTourWhereUniqueInput[];
    update?: Prisma.TraduccionTourUpdateWithWhereUniqueWithoutTourInput | Prisma.TraduccionTourUpdateWithWhereUniqueWithoutTourInput[];
    updateMany?: Prisma.TraduccionTourUpdateManyWithWhereWithoutTourInput | Prisma.TraduccionTourUpdateManyWithWhereWithoutTourInput[];
    deleteMany?: Prisma.TraduccionTourScalarWhereInput | Prisma.TraduccionTourScalarWhereInput[];
};
export type TraduccionTourUncheckedUpdateManyWithoutTourNestedInput = {
    create?: Prisma.XOR<Prisma.TraduccionTourCreateWithoutTourInput, Prisma.TraduccionTourUncheckedCreateWithoutTourInput> | Prisma.TraduccionTourCreateWithoutTourInput[] | Prisma.TraduccionTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.TraduccionTourCreateOrConnectWithoutTourInput | Prisma.TraduccionTourCreateOrConnectWithoutTourInput[];
    upsert?: Prisma.TraduccionTourUpsertWithWhereUniqueWithoutTourInput | Prisma.TraduccionTourUpsertWithWhereUniqueWithoutTourInput[];
    createMany?: Prisma.TraduccionTourCreateManyTourInputEnvelope;
    set?: Prisma.TraduccionTourWhereUniqueInput | Prisma.TraduccionTourWhereUniqueInput[];
    disconnect?: Prisma.TraduccionTourWhereUniqueInput | Prisma.TraduccionTourWhereUniqueInput[];
    delete?: Prisma.TraduccionTourWhereUniqueInput | Prisma.TraduccionTourWhereUniqueInput[];
    connect?: Prisma.TraduccionTourWhereUniqueInput | Prisma.TraduccionTourWhereUniqueInput[];
    update?: Prisma.TraduccionTourUpdateWithWhereUniqueWithoutTourInput | Prisma.TraduccionTourUpdateWithWhereUniqueWithoutTourInput[];
    updateMany?: Prisma.TraduccionTourUpdateManyWithWhereWithoutTourInput | Prisma.TraduccionTourUpdateManyWithWhereWithoutTourInput[];
    deleteMany?: Prisma.TraduccionTourScalarWhereInput | Prisma.TraduccionTourScalarWhereInput[];
};
export type TraduccionTourCreateWithoutTourInput = {
    id?: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    queLlevar?: string | null;
    estado?: $Enums.EstadoTraduccion;
};
export type TraduccionTourUncheckedCreateWithoutTourInput = {
    id?: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    queLlevar?: string | null;
    estado?: $Enums.EstadoTraduccion;
};
export type TraduccionTourCreateOrConnectWithoutTourInput = {
    where: Prisma.TraduccionTourWhereUniqueInput;
    create: Prisma.XOR<Prisma.TraduccionTourCreateWithoutTourInput, Prisma.TraduccionTourUncheckedCreateWithoutTourInput>;
};
export type TraduccionTourCreateManyTourInputEnvelope = {
    data: Prisma.TraduccionTourCreateManyTourInput | Prisma.TraduccionTourCreateManyTourInput[];
    skipDuplicates?: boolean;
};
export type TraduccionTourUpsertWithWhereUniqueWithoutTourInput = {
    where: Prisma.TraduccionTourWhereUniqueInput;
    update: Prisma.XOR<Prisma.TraduccionTourUpdateWithoutTourInput, Prisma.TraduccionTourUncheckedUpdateWithoutTourInput>;
    create: Prisma.XOR<Prisma.TraduccionTourCreateWithoutTourInput, Prisma.TraduccionTourUncheckedCreateWithoutTourInput>;
};
export type TraduccionTourUpdateWithWhereUniqueWithoutTourInput = {
    where: Prisma.TraduccionTourWhereUniqueInput;
    data: Prisma.XOR<Prisma.TraduccionTourUpdateWithoutTourInput, Prisma.TraduccionTourUncheckedUpdateWithoutTourInput>;
};
export type TraduccionTourUpdateManyWithWhereWithoutTourInput = {
    where: Prisma.TraduccionTourScalarWhereInput;
    data: Prisma.XOR<Prisma.TraduccionTourUpdateManyMutationInput, Prisma.TraduccionTourUncheckedUpdateManyWithoutTourInput>;
};
export type TraduccionTourScalarWhereInput = {
    AND?: Prisma.TraduccionTourScalarWhereInput | Prisma.TraduccionTourScalarWhereInput[];
    OR?: Prisma.TraduccionTourScalarWhereInput[];
    NOT?: Prisma.TraduccionTourScalarWhereInput | Prisma.TraduccionTourScalarWhereInput[];
    id?: Prisma.UuidFilter<"TraduccionTour"> | string;
    tourId?: Prisma.UuidFilter<"TraduccionTour"> | string;
    idioma?: Prisma.StringFilter<"TraduccionTour"> | string;
    titulo?: Prisma.StringFilter<"TraduccionTour"> | string;
    resumen?: Prisma.StringFilter<"TraduccionTour"> | string;
    descripcion?: Prisma.StringFilter<"TraduccionTour"> | string;
    queLlevar?: Prisma.StringNullableFilter<"TraduccionTour"> | string | null;
    estado?: Prisma.EnumEstadoTraduccionFilter<"TraduccionTour"> | $Enums.EstadoTraduccion;
};
export type TraduccionTourCreateManyTourInput = {
    id?: string;
    idioma: string;
    titulo: string;
    resumen: string;
    descripcion: string;
    queLlevar?: string | null;
    estado?: $Enums.EstadoTraduccion;
};
export type TraduccionTourUpdateWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    queLlevar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTourUncheckedUpdateWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    queLlevar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTourUncheckedUpdateManyWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idioma?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumen?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    queLlevar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoTraduccionFieldUpdateOperationsInput | $Enums.EstadoTraduccion;
};
export type TraduccionTourSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tourId?: boolean;
    idioma?: boolean;
    titulo?: boolean;
    resumen?: boolean;
    descripcion?: boolean;
    queLlevar?: boolean;
    estado?: boolean;
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["traduccionTour"]>;
export type TraduccionTourSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tourId?: boolean;
    idioma?: boolean;
    titulo?: boolean;
    resumen?: boolean;
    descripcion?: boolean;
    queLlevar?: boolean;
    estado?: boolean;
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["traduccionTour"]>;
export type TraduccionTourSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tourId?: boolean;
    idioma?: boolean;
    titulo?: boolean;
    resumen?: boolean;
    descripcion?: boolean;
    queLlevar?: boolean;
    estado?: boolean;
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["traduccionTour"]>;
export type TraduccionTourSelectScalar = {
    id?: boolean;
    tourId?: boolean;
    idioma?: boolean;
    titulo?: boolean;
    resumen?: boolean;
    descripcion?: boolean;
    queLlevar?: boolean;
    estado?: boolean;
};
export type TraduccionTourOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tourId" | "idioma" | "titulo" | "resumen" | "descripcion" | "queLlevar" | "estado", ExtArgs["result"]["traduccionTour"]>;
export type TraduccionTourInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
};
export type TraduccionTourIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
};
export type TraduccionTourIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
};
export type $TraduccionTourPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TraduccionTour";
    objects: {
        tour: Prisma.$TourPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tourId: string;
        idioma: string;
        titulo: string;
        resumen: string;
        descripcion: string;
        queLlevar: string | null;
        estado: $Enums.EstadoTraduccion;
    }, ExtArgs["result"]["traduccionTour"]>;
    composites: {};
};
export type TraduccionTourGetPayload<S extends boolean | null | undefined | TraduccionTourDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload, S>;
export type TraduccionTourCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TraduccionTourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TraduccionTourCountAggregateInputType | true;
};
export interface TraduccionTourDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TraduccionTour'];
        meta: {
            name: 'TraduccionTour';
        };
    };
    findUnique<T extends TraduccionTourFindUniqueArgs>(args: Prisma.SelectSubset<T, TraduccionTourFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TraduccionTourClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TraduccionTourFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TraduccionTourFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TraduccionTourClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TraduccionTourFindFirstArgs>(args?: Prisma.SelectSubset<T, TraduccionTourFindFirstArgs<ExtArgs>>): Prisma.Prisma__TraduccionTourClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TraduccionTourFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TraduccionTourFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TraduccionTourClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TraduccionTourFindManyArgs>(args?: Prisma.SelectSubset<T, TraduccionTourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TraduccionTourCreateArgs>(args: Prisma.SelectSubset<T, TraduccionTourCreateArgs<ExtArgs>>): Prisma.Prisma__TraduccionTourClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TraduccionTourCreateManyArgs>(args?: Prisma.SelectSubset<T, TraduccionTourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TraduccionTourCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TraduccionTourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TraduccionTourDeleteArgs>(args: Prisma.SelectSubset<T, TraduccionTourDeleteArgs<ExtArgs>>): Prisma.Prisma__TraduccionTourClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TraduccionTourUpdateArgs>(args: Prisma.SelectSubset<T, TraduccionTourUpdateArgs<ExtArgs>>): Prisma.Prisma__TraduccionTourClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TraduccionTourDeleteManyArgs>(args?: Prisma.SelectSubset<T, TraduccionTourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TraduccionTourUpdateManyArgs>(args: Prisma.SelectSubset<T, TraduccionTourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TraduccionTourUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TraduccionTourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TraduccionTourUpsertArgs>(args: Prisma.SelectSubset<T, TraduccionTourUpsertArgs<ExtArgs>>): Prisma.Prisma__TraduccionTourClient<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TraduccionTourCountArgs>(args?: Prisma.Subset<T, TraduccionTourCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TraduccionTourCountAggregateOutputType> : number>;
    aggregate<T extends TraduccionTourAggregateArgs>(args: Prisma.Subset<T, TraduccionTourAggregateArgs>): Prisma.PrismaPromise<GetTraduccionTourAggregateType<T>>;
    groupBy<T extends TraduccionTourGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TraduccionTourGroupByArgs['orderBy'];
    } : {
        orderBy?: TraduccionTourGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TraduccionTourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraduccionTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TraduccionTourFieldRefs;
}
export interface Prisma__TraduccionTourClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tour<T extends Prisma.TourDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TourDefaultArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TraduccionTourFieldRefs {
    readonly id: Prisma.FieldRef<"TraduccionTour", 'String'>;
    readonly tourId: Prisma.FieldRef<"TraduccionTour", 'String'>;
    readonly idioma: Prisma.FieldRef<"TraduccionTour", 'String'>;
    readonly titulo: Prisma.FieldRef<"TraduccionTour", 'String'>;
    readonly resumen: Prisma.FieldRef<"TraduccionTour", 'String'>;
    readonly descripcion: Prisma.FieldRef<"TraduccionTour", 'String'>;
    readonly queLlevar: Prisma.FieldRef<"TraduccionTour", 'String'>;
    readonly estado: Prisma.FieldRef<"TraduccionTour", 'EstadoTraduccion'>;
}
export type TraduccionTourFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTourInclude<ExtArgs> | null;
    where: Prisma.TraduccionTourWhereUniqueInput;
};
export type TraduccionTourFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTourInclude<ExtArgs> | null;
    where: Prisma.TraduccionTourWhereUniqueInput;
};
export type TraduccionTourFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTourInclude<ExtArgs> | null;
    where?: Prisma.TraduccionTourWhereInput;
    orderBy?: Prisma.TraduccionTourOrderByWithRelationInput | Prisma.TraduccionTourOrderByWithRelationInput[];
    cursor?: Prisma.TraduccionTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TraduccionTourScalarFieldEnum | Prisma.TraduccionTourScalarFieldEnum[];
};
export type TraduccionTourFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTourInclude<ExtArgs> | null;
    where?: Prisma.TraduccionTourWhereInput;
    orderBy?: Prisma.TraduccionTourOrderByWithRelationInput | Prisma.TraduccionTourOrderByWithRelationInput[];
    cursor?: Prisma.TraduccionTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TraduccionTourScalarFieldEnum | Prisma.TraduccionTourScalarFieldEnum[];
};
export type TraduccionTourFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTourInclude<ExtArgs> | null;
    where?: Prisma.TraduccionTourWhereInput;
    orderBy?: Prisma.TraduccionTourOrderByWithRelationInput | Prisma.TraduccionTourOrderByWithRelationInput[];
    cursor?: Prisma.TraduccionTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TraduccionTourScalarFieldEnum | Prisma.TraduccionTourScalarFieldEnum[];
};
export type TraduccionTourCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTourInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TraduccionTourCreateInput, Prisma.TraduccionTourUncheckedCreateInput>;
};
export type TraduccionTourCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TraduccionTourCreateManyInput | Prisma.TraduccionTourCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TraduccionTourCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    data: Prisma.TraduccionTourCreateManyInput | Prisma.TraduccionTourCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TraduccionTourIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TraduccionTourUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTourInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TraduccionTourUpdateInput, Prisma.TraduccionTourUncheckedUpdateInput>;
    where: Prisma.TraduccionTourWhereUniqueInput;
};
export type TraduccionTourUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TraduccionTourUpdateManyMutationInput, Prisma.TraduccionTourUncheckedUpdateManyInput>;
    where?: Prisma.TraduccionTourWhereInput;
    limit?: number;
};
export type TraduccionTourUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TraduccionTourUpdateManyMutationInput, Prisma.TraduccionTourUncheckedUpdateManyInput>;
    where?: Prisma.TraduccionTourWhereInput;
    limit?: number;
    include?: Prisma.TraduccionTourIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TraduccionTourUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTourInclude<ExtArgs> | null;
    where: Prisma.TraduccionTourWhereUniqueInput;
    create: Prisma.XOR<Prisma.TraduccionTourCreateInput, Prisma.TraduccionTourUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TraduccionTourUpdateInput, Prisma.TraduccionTourUncheckedUpdateInput>;
};
export type TraduccionTourDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTourInclude<ExtArgs> | null;
    where: Prisma.TraduccionTourWhereUniqueInput;
};
export type TraduccionTourDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TraduccionTourWhereInput;
    limit?: number;
};
export type TraduccionTourDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TraduccionTourSelect<ExtArgs> | null;
    omit?: Prisma.TraduccionTourOmit<ExtArgs> | null;
    include?: Prisma.TraduccionTourInclude<ExtArgs> | null;
};
