import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TourModel = runtime.Types.Result.DefaultSelection<Prisma.$TourPayload>;
export type AggregateTour = {
    _count: TourCountAggregateOutputType | null;
    _avg: TourAvgAggregateOutputType | null;
    _sum: TourSumAggregateOutputType | null;
    _min: TourMinAggregateOutputType | null;
    _max: TourMaxAggregateOutputType | null;
};
export type TourAvgAggregateOutputType = {
    destinoLatitud: runtime.Decimal | null;
    destinoLongitud: runtime.Decimal | null;
    duracionMinutos: number | null;
};
export type TourSumAggregateOutputType = {
    destinoLatitud: runtime.Decimal | null;
    destinoLongitud: runtime.Decimal | null;
    duracionMinutos: number | null;
};
export type TourMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    activo: boolean | null;
    destinoNombre: string | null;
    destinoLatitud: runtime.Decimal | null;
    destinoLongitud: runtime.Decimal | null;
    duracionMinutos: number | null;
    requiereGuia: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type TourMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    activo: boolean | null;
    destinoNombre: string | null;
    destinoLatitud: runtime.Decimal | null;
    destinoLongitud: runtime.Decimal | null;
    duracionMinutos: number | null;
    requiereGuia: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type TourCountAggregateOutputType = {
    id: number;
    slug: number;
    activo: number;
    destinoNombre: number;
    destinoLatitud: number;
    destinoLongitud: number;
    duracionMinutos: number;
    requiereGuia: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type TourAvgAggregateInputType = {
    destinoLatitud?: true;
    destinoLongitud?: true;
    duracionMinutos?: true;
};
export type TourSumAggregateInputType = {
    destinoLatitud?: true;
    destinoLongitud?: true;
    duracionMinutos?: true;
};
export type TourMinAggregateInputType = {
    id?: true;
    slug?: true;
    activo?: true;
    destinoNombre?: true;
    destinoLatitud?: true;
    destinoLongitud?: true;
    duracionMinutos?: true;
    requiereGuia?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type TourMaxAggregateInputType = {
    id?: true;
    slug?: true;
    activo?: true;
    destinoNombre?: true;
    destinoLatitud?: true;
    destinoLongitud?: true;
    duracionMinutos?: true;
    requiereGuia?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type TourCountAggregateInputType = {
    id?: true;
    slug?: true;
    activo?: true;
    destinoNombre?: true;
    destinoLatitud?: true;
    destinoLongitud?: true;
    duracionMinutos?: true;
    requiereGuia?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type TourAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TourWhereInput;
    orderBy?: Prisma.TourOrderByWithRelationInput | Prisma.TourOrderByWithRelationInput[];
    cursor?: Prisma.TourWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TourCountAggregateInputType;
    _avg?: TourAvgAggregateInputType;
    _sum?: TourSumAggregateInputType;
    _min?: TourMinAggregateInputType;
    _max?: TourMaxAggregateInputType;
};
export type GetTourAggregateType<T extends TourAggregateArgs> = {
    [P in keyof T & keyof AggregateTour]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTour[P]> : Prisma.GetScalarType<T[P], AggregateTour[P]>;
};
export type TourGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TourWhereInput;
    orderBy?: Prisma.TourOrderByWithAggregationInput | Prisma.TourOrderByWithAggregationInput[];
    by: Prisma.TourScalarFieldEnum[] | Prisma.TourScalarFieldEnum;
    having?: Prisma.TourScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TourCountAggregateInputType | true;
    _avg?: TourAvgAggregateInputType;
    _sum?: TourSumAggregateInputType;
    _min?: TourMinAggregateInputType;
    _max?: TourMaxAggregateInputType;
};
export type TourGroupByOutputType = {
    id: string;
    slug: string;
    activo: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal;
    destinoLongitud: runtime.Decimal;
    duracionMinutos: number;
    requiereGuia: boolean;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: TourCountAggregateOutputType | null;
    _avg: TourAvgAggregateOutputType | null;
    _sum: TourSumAggregateOutputType | null;
    _min: TourMinAggregateOutputType | null;
    _max: TourMaxAggregateOutputType | null;
};
export type GetTourGroupByPayload<T extends TourGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TourGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TourGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TourGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TourGroupByOutputType[P]>;
}>>;
export type TourWhereInput = {
    AND?: Prisma.TourWhereInput | Prisma.TourWhereInput[];
    OR?: Prisma.TourWhereInput[];
    NOT?: Prisma.TourWhereInput | Prisma.TourWhereInput[];
    id?: Prisma.UuidFilter<"Tour"> | string;
    slug?: Prisma.StringFilter<"Tour"> | string;
    activo?: Prisma.BoolFilter<"Tour"> | boolean;
    destinoNombre?: Prisma.StringFilter<"Tour"> | string;
    destinoLatitud?: Prisma.DecimalFilter<"Tour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFilter<"Tour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFilter<"Tour"> | number;
    requiereGuia?: Prisma.BoolFilter<"Tour"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Tour"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Tour"> | Date | string;
    itinerarios?: Prisma.ItinerarioTourListRelationFilter;
    salidas?: Prisma.SalidaTourListRelationFilter;
    traducciones?: Prisma.TraduccionTourListRelationFilter;
    imagenes?: Prisma.ImagenListRelationFilter;
};
export type TourOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    destinoNombre?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutos?: Prisma.SortOrder;
    requiereGuia?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    itinerarios?: Prisma.ItinerarioTourOrderByRelationAggregateInput;
    salidas?: Prisma.SalidaTourOrderByRelationAggregateInput;
    traducciones?: Prisma.TraduccionTourOrderByRelationAggregateInput;
    imagenes?: Prisma.ImagenOrderByRelationAggregateInput;
};
export type TourWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.TourWhereInput | Prisma.TourWhereInput[];
    OR?: Prisma.TourWhereInput[];
    NOT?: Prisma.TourWhereInput | Prisma.TourWhereInput[];
    activo?: Prisma.BoolFilter<"Tour"> | boolean;
    destinoNombre?: Prisma.StringFilter<"Tour"> | string;
    destinoLatitud?: Prisma.DecimalFilter<"Tour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFilter<"Tour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFilter<"Tour"> | number;
    requiereGuia?: Prisma.BoolFilter<"Tour"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Tour"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Tour"> | Date | string;
    itinerarios?: Prisma.ItinerarioTourListRelationFilter;
    salidas?: Prisma.SalidaTourListRelationFilter;
    traducciones?: Prisma.TraduccionTourListRelationFilter;
    imagenes?: Prisma.ImagenListRelationFilter;
}, "id" | "slug">;
export type TourOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    destinoNombre?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutos?: Prisma.SortOrder;
    requiereGuia?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.TourCountOrderByAggregateInput;
    _avg?: Prisma.TourAvgOrderByAggregateInput;
    _max?: Prisma.TourMaxOrderByAggregateInput;
    _min?: Prisma.TourMinOrderByAggregateInput;
    _sum?: Prisma.TourSumOrderByAggregateInput;
};
export type TourScalarWhereWithAggregatesInput = {
    AND?: Prisma.TourScalarWhereWithAggregatesInput | Prisma.TourScalarWhereWithAggregatesInput[];
    OR?: Prisma.TourScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TourScalarWhereWithAggregatesInput | Prisma.TourScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Tour"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Tour"> | string;
    activo?: Prisma.BoolWithAggregatesFilter<"Tour"> | boolean;
    destinoNombre?: Prisma.StringWithAggregatesFilter<"Tour"> | string;
    destinoLatitud?: Prisma.DecimalWithAggregatesFilter<"Tour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalWithAggregatesFilter<"Tour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntWithAggregatesFilter<"Tour"> | number;
    requiereGuia?: Prisma.BoolWithAggregatesFilter<"Tour"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Tour"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Tour"> | Date | string;
};
export type TourCreateInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    itinerarios?: Prisma.ItinerarioTourCreateNestedManyWithoutTourInput;
    salidas?: Prisma.SalidaTourCreateNestedManyWithoutTourInput;
    traducciones?: Prisma.TraduccionTourCreateNestedManyWithoutTourInput;
    imagenes?: Prisma.ImagenCreateNestedManyWithoutTourInput;
};
export type TourUncheckedCreateInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    itinerarios?: Prisma.ItinerarioTourUncheckedCreateNestedManyWithoutTourInput;
    salidas?: Prisma.SalidaTourUncheckedCreateNestedManyWithoutTourInput;
    traducciones?: Prisma.TraduccionTourUncheckedCreateNestedManyWithoutTourInput;
    imagenes?: Prisma.ImagenUncheckedCreateNestedManyWithoutTourInput;
};
export type TourUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    itinerarios?: Prisma.ItinerarioTourUpdateManyWithoutTourNestedInput;
    salidas?: Prisma.SalidaTourUpdateManyWithoutTourNestedInput;
    traducciones?: Prisma.TraduccionTourUpdateManyWithoutTourNestedInput;
    imagenes?: Prisma.ImagenUpdateManyWithoutTourNestedInput;
};
export type TourUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    itinerarios?: Prisma.ItinerarioTourUncheckedUpdateManyWithoutTourNestedInput;
    salidas?: Prisma.SalidaTourUncheckedUpdateManyWithoutTourNestedInput;
    traducciones?: Prisma.TraduccionTourUncheckedUpdateManyWithoutTourNestedInput;
    imagenes?: Prisma.ImagenUncheckedUpdateManyWithoutTourNestedInput;
};
export type TourCreateManyInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type TourUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TourUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TourCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    destinoNombre?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutos?: Prisma.SortOrder;
    requiereGuia?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type TourAvgOrderByAggregateInput = {
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutos?: Prisma.SortOrder;
};
export type TourMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    destinoNombre?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutos?: Prisma.SortOrder;
    requiereGuia?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type TourMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    destinoNombre?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutos?: Prisma.SortOrder;
    requiereGuia?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type TourSumOrderByAggregateInput = {
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutos?: Prisma.SortOrder;
};
export type TourScalarRelationFilter = {
    is?: Prisma.TourWhereInput;
    isNot?: Prisma.TourWhereInput;
};
export type TourNullableScalarRelationFilter = {
    is?: Prisma.TourWhereInput | null;
    isNot?: Prisma.TourWhereInput | null;
};
export type TourCreateNestedOneWithoutItinerariosInput = {
    create?: Prisma.XOR<Prisma.TourCreateWithoutItinerariosInput, Prisma.TourUncheckedCreateWithoutItinerariosInput>;
    connectOrCreate?: Prisma.TourCreateOrConnectWithoutItinerariosInput;
    connect?: Prisma.TourWhereUniqueInput;
};
export type TourUpdateOneRequiredWithoutItinerariosNestedInput = {
    create?: Prisma.XOR<Prisma.TourCreateWithoutItinerariosInput, Prisma.TourUncheckedCreateWithoutItinerariosInput>;
    connectOrCreate?: Prisma.TourCreateOrConnectWithoutItinerariosInput;
    upsert?: Prisma.TourUpsertWithoutItinerariosInput;
    connect?: Prisma.TourWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TourUpdateToOneWithWhereWithoutItinerariosInput, Prisma.TourUpdateWithoutItinerariosInput>, Prisma.TourUncheckedUpdateWithoutItinerariosInput>;
};
export type TourCreateNestedOneWithoutSalidasInput = {
    create?: Prisma.XOR<Prisma.TourCreateWithoutSalidasInput, Prisma.TourUncheckedCreateWithoutSalidasInput>;
    connectOrCreate?: Prisma.TourCreateOrConnectWithoutSalidasInput;
    connect?: Prisma.TourWhereUniqueInput;
};
export type TourUpdateOneRequiredWithoutSalidasNestedInput = {
    create?: Prisma.XOR<Prisma.TourCreateWithoutSalidasInput, Prisma.TourUncheckedCreateWithoutSalidasInput>;
    connectOrCreate?: Prisma.TourCreateOrConnectWithoutSalidasInput;
    upsert?: Prisma.TourUpsertWithoutSalidasInput;
    connect?: Prisma.TourWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TourUpdateToOneWithWhereWithoutSalidasInput, Prisma.TourUpdateWithoutSalidasInput>, Prisma.TourUncheckedUpdateWithoutSalidasInput>;
};
export type TourCreateNestedOneWithoutTraduccionesInput = {
    create?: Prisma.XOR<Prisma.TourCreateWithoutTraduccionesInput, Prisma.TourUncheckedCreateWithoutTraduccionesInput>;
    connectOrCreate?: Prisma.TourCreateOrConnectWithoutTraduccionesInput;
    connect?: Prisma.TourWhereUniqueInput;
};
export type TourUpdateOneRequiredWithoutTraduccionesNestedInput = {
    create?: Prisma.XOR<Prisma.TourCreateWithoutTraduccionesInput, Prisma.TourUncheckedCreateWithoutTraduccionesInput>;
    connectOrCreate?: Prisma.TourCreateOrConnectWithoutTraduccionesInput;
    upsert?: Prisma.TourUpsertWithoutTraduccionesInput;
    connect?: Prisma.TourWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TourUpdateToOneWithWhereWithoutTraduccionesInput, Prisma.TourUpdateWithoutTraduccionesInput>, Prisma.TourUncheckedUpdateWithoutTraduccionesInput>;
};
export type TourCreateNestedOneWithoutImagenesInput = {
    create?: Prisma.XOR<Prisma.TourCreateWithoutImagenesInput, Prisma.TourUncheckedCreateWithoutImagenesInput>;
    connectOrCreate?: Prisma.TourCreateOrConnectWithoutImagenesInput;
    connect?: Prisma.TourWhereUniqueInput;
};
export type TourUpdateOneWithoutImagenesNestedInput = {
    create?: Prisma.XOR<Prisma.TourCreateWithoutImagenesInput, Prisma.TourUncheckedCreateWithoutImagenesInput>;
    connectOrCreate?: Prisma.TourCreateOrConnectWithoutImagenesInput;
    upsert?: Prisma.TourUpsertWithoutImagenesInput;
    disconnect?: Prisma.TourWhereInput | boolean;
    delete?: Prisma.TourWhereInput | boolean;
    connect?: Prisma.TourWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TourUpdateToOneWithWhereWithoutImagenesInput, Prisma.TourUpdateWithoutImagenesInput>, Prisma.TourUncheckedUpdateWithoutImagenesInput>;
};
export type TourCreateWithoutItinerariosInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    salidas?: Prisma.SalidaTourCreateNestedManyWithoutTourInput;
    traducciones?: Prisma.TraduccionTourCreateNestedManyWithoutTourInput;
    imagenes?: Prisma.ImagenCreateNestedManyWithoutTourInput;
};
export type TourUncheckedCreateWithoutItinerariosInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    salidas?: Prisma.SalidaTourUncheckedCreateNestedManyWithoutTourInput;
    traducciones?: Prisma.TraduccionTourUncheckedCreateNestedManyWithoutTourInput;
    imagenes?: Prisma.ImagenUncheckedCreateNestedManyWithoutTourInput;
};
export type TourCreateOrConnectWithoutItinerariosInput = {
    where: Prisma.TourWhereUniqueInput;
    create: Prisma.XOR<Prisma.TourCreateWithoutItinerariosInput, Prisma.TourUncheckedCreateWithoutItinerariosInput>;
};
export type TourUpsertWithoutItinerariosInput = {
    update: Prisma.XOR<Prisma.TourUpdateWithoutItinerariosInput, Prisma.TourUncheckedUpdateWithoutItinerariosInput>;
    create: Prisma.XOR<Prisma.TourCreateWithoutItinerariosInput, Prisma.TourUncheckedCreateWithoutItinerariosInput>;
    where?: Prisma.TourWhereInput;
};
export type TourUpdateToOneWithWhereWithoutItinerariosInput = {
    where?: Prisma.TourWhereInput;
    data: Prisma.XOR<Prisma.TourUpdateWithoutItinerariosInput, Prisma.TourUncheckedUpdateWithoutItinerariosInput>;
};
export type TourUpdateWithoutItinerariosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salidas?: Prisma.SalidaTourUpdateManyWithoutTourNestedInput;
    traducciones?: Prisma.TraduccionTourUpdateManyWithoutTourNestedInput;
    imagenes?: Prisma.ImagenUpdateManyWithoutTourNestedInput;
};
export type TourUncheckedUpdateWithoutItinerariosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salidas?: Prisma.SalidaTourUncheckedUpdateManyWithoutTourNestedInput;
    traducciones?: Prisma.TraduccionTourUncheckedUpdateManyWithoutTourNestedInput;
    imagenes?: Prisma.ImagenUncheckedUpdateManyWithoutTourNestedInput;
};
export type TourCreateWithoutSalidasInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    itinerarios?: Prisma.ItinerarioTourCreateNestedManyWithoutTourInput;
    traducciones?: Prisma.TraduccionTourCreateNestedManyWithoutTourInput;
    imagenes?: Prisma.ImagenCreateNestedManyWithoutTourInput;
};
export type TourUncheckedCreateWithoutSalidasInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    itinerarios?: Prisma.ItinerarioTourUncheckedCreateNestedManyWithoutTourInput;
    traducciones?: Prisma.TraduccionTourUncheckedCreateNestedManyWithoutTourInput;
    imagenes?: Prisma.ImagenUncheckedCreateNestedManyWithoutTourInput;
};
export type TourCreateOrConnectWithoutSalidasInput = {
    where: Prisma.TourWhereUniqueInput;
    create: Prisma.XOR<Prisma.TourCreateWithoutSalidasInput, Prisma.TourUncheckedCreateWithoutSalidasInput>;
};
export type TourUpsertWithoutSalidasInput = {
    update: Prisma.XOR<Prisma.TourUpdateWithoutSalidasInput, Prisma.TourUncheckedUpdateWithoutSalidasInput>;
    create: Prisma.XOR<Prisma.TourCreateWithoutSalidasInput, Prisma.TourUncheckedCreateWithoutSalidasInput>;
    where?: Prisma.TourWhereInput;
};
export type TourUpdateToOneWithWhereWithoutSalidasInput = {
    where?: Prisma.TourWhereInput;
    data: Prisma.XOR<Prisma.TourUpdateWithoutSalidasInput, Prisma.TourUncheckedUpdateWithoutSalidasInput>;
};
export type TourUpdateWithoutSalidasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    itinerarios?: Prisma.ItinerarioTourUpdateManyWithoutTourNestedInput;
    traducciones?: Prisma.TraduccionTourUpdateManyWithoutTourNestedInput;
    imagenes?: Prisma.ImagenUpdateManyWithoutTourNestedInput;
};
export type TourUncheckedUpdateWithoutSalidasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    itinerarios?: Prisma.ItinerarioTourUncheckedUpdateManyWithoutTourNestedInput;
    traducciones?: Prisma.TraduccionTourUncheckedUpdateManyWithoutTourNestedInput;
    imagenes?: Prisma.ImagenUncheckedUpdateManyWithoutTourNestedInput;
};
export type TourCreateWithoutTraduccionesInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    itinerarios?: Prisma.ItinerarioTourCreateNestedManyWithoutTourInput;
    salidas?: Prisma.SalidaTourCreateNestedManyWithoutTourInput;
    imagenes?: Prisma.ImagenCreateNestedManyWithoutTourInput;
};
export type TourUncheckedCreateWithoutTraduccionesInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    itinerarios?: Prisma.ItinerarioTourUncheckedCreateNestedManyWithoutTourInput;
    salidas?: Prisma.SalidaTourUncheckedCreateNestedManyWithoutTourInput;
    imagenes?: Prisma.ImagenUncheckedCreateNestedManyWithoutTourInput;
};
export type TourCreateOrConnectWithoutTraduccionesInput = {
    where: Prisma.TourWhereUniqueInput;
    create: Prisma.XOR<Prisma.TourCreateWithoutTraduccionesInput, Prisma.TourUncheckedCreateWithoutTraduccionesInput>;
};
export type TourUpsertWithoutTraduccionesInput = {
    update: Prisma.XOR<Prisma.TourUpdateWithoutTraduccionesInput, Prisma.TourUncheckedUpdateWithoutTraduccionesInput>;
    create: Prisma.XOR<Prisma.TourCreateWithoutTraduccionesInput, Prisma.TourUncheckedCreateWithoutTraduccionesInput>;
    where?: Prisma.TourWhereInput;
};
export type TourUpdateToOneWithWhereWithoutTraduccionesInput = {
    where?: Prisma.TourWhereInput;
    data: Prisma.XOR<Prisma.TourUpdateWithoutTraduccionesInput, Prisma.TourUncheckedUpdateWithoutTraduccionesInput>;
};
export type TourUpdateWithoutTraduccionesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    itinerarios?: Prisma.ItinerarioTourUpdateManyWithoutTourNestedInput;
    salidas?: Prisma.SalidaTourUpdateManyWithoutTourNestedInput;
    imagenes?: Prisma.ImagenUpdateManyWithoutTourNestedInput;
};
export type TourUncheckedUpdateWithoutTraduccionesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    itinerarios?: Prisma.ItinerarioTourUncheckedUpdateManyWithoutTourNestedInput;
    salidas?: Prisma.SalidaTourUncheckedUpdateManyWithoutTourNestedInput;
    imagenes?: Prisma.ImagenUncheckedUpdateManyWithoutTourNestedInput;
};
export type TourCreateWithoutImagenesInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    itinerarios?: Prisma.ItinerarioTourCreateNestedManyWithoutTourInput;
    salidas?: Prisma.SalidaTourCreateNestedManyWithoutTourInput;
    traducciones?: Prisma.TraduccionTourCreateNestedManyWithoutTourInput;
};
export type TourUncheckedCreateWithoutImagenesInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos: number;
    requiereGuia?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    itinerarios?: Prisma.ItinerarioTourUncheckedCreateNestedManyWithoutTourInput;
    salidas?: Prisma.SalidaTourUncheckedCreateNestedManyWithoutTourInput;
    traducciones?: Prisma.TraduccionTourUncheckedCreateNestedManyWithoutTourInput;
};
export type TourCreateOrConnectWithoutImagenesInput = {
    where: Prisma.TourWhereUniqueInput;
    create: Prisma.XOR<Prisma.TourCreateWithoutImagenesInput, Prisma.TourUncheckedCreateWithoutImagenesInput>;
};
export type TourUpsertWithoutImagenesInput = {
    update: Prisma.XOR<Prisma.TourUpdateWithoutImagenesInput, Prisma.TourUncheckedUpdateWithoutImagenesInput>;
    create: Prisma.XOR<Prisma.TourCreateWithoutImagenesInput, Prisma.TourUncheckedCreateWithoutImagenesInput>;
    where?: Prisma.TourWhereInput;
};
export type TourUpdateToOneWithWhereWithoutImagenesInput = {
    where?: Prisma.TourWhereInput;
    data: Prisma.XOR<Prisma.TourUpdateWithoutImagenesInput, Prisma.TourUncheckedUpdateWithoutImagenesInput>;
};
export type TourUpdateWithoutImagenesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    itinerarios?: Prisma.ItinerarioTourUpdateManyWithoutTourNestedInput;
    salidas?: Prisma.SalidaTourUpdateManyWithoutTourNestedInput;
    traducciones?: Prisma.TraduccionTourUpdateManyWithoutTourNestedInput;
};
export type TourUncheckedUpdateWithoutImagenesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutos?: Prisma.IntFieldUpdateOperationsInput | number;
    requiereGuia?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    itinerarios?: Prisma.ItinerarioTourUncheckedUpdateManyWithoutTourNestedInput;
    salidas?: Prisma.SalidaTourUncheckedUpdateManyWithoutTourNestedInput;
    traducciones?: Prisma.TraduccionTourUncheckedUpdateManyWithoutTourNestedInput;
};
export type TourCountOutputType = {
    itinerarios: number;
    salidas: number;
    traducciones: number;
    imagenes: number;
};
export type TourCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    itinerarios?: boolean | TourCountOutputTypeCountItinerariosArgs;
    salidas?: boolean | TourCountOutputTypeCountSalidasArgs;
    traducciones?: boolean | TourCountOutputTypeCountTraduccionesArgs;
    imagenes?: boolean | TourCountOutputTypeCountImagenesArgs;
};
export type TourCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourCountOutputTypeSelect<ExtArgs> | null;
};
export type TourCountOutputTypeCountItinerariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItinerarioTourWhereInput;
};
export type TourCountOutputTypeCountSalidasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalidaTourWhereInput;
};
export type TourCountOutputTypeCountTraduccionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TraduccionTourWhereInput;
};
export type TourCountOutputTypeCountImagenesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImagenWhereInput;
};
export type TourSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    activo?: boolean;
    destinoNombre?: boolean;
    destinoLatitud?: boolean;
    destinoLongitud?: boolean;
    duracionMinutos?: boolean;
    requiereGuia?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    itinerarios?: boolean | Prisma.Tour$itinerariosArgs<ExtArgs>;
    salidas?: boolean | Prisma.Tour$salidasArgs<ExtArgs>;
    traducciones?: boolean | Prisma.Tour$traduccionesArgs<ExtArgs>;
    imagenes?: boolean | Prisma.Tour$imagenesArgs<ExtArgs>;
    _count?: boolean | Prisma.TourCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tour"]>;
export type TourSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    activo?: boolean;
    destinoNombre?: boolean;
    destinoLatitud?: boolean;
    destinoLongitud?: boolean;
    duracionMinutos?: boolean;
    requiereGuia?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
}, ExtArgs["result"]["tour"]>;
export type TourSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    activo?: boolean;
    destinoNombre?: boolean;
    destinoLatitud?: boolean;
    destinoLongitud?: boolean;
    duracionMinutos?: boolean;
    requiereGuia?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
}, ExtArgs["result"]["tour"]>;
export type TourSelectScalar = {
    id?: boolean;
    slug?: boolean;
    activo?: boolean;
    destinoNombre?: boolean;
    destinoLatitud?: boolean;
    destinoLongitud?: boolean;
    duracionMinutos?: boolean;
    requiereGuia?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type TourOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "activo" | "destinoNombre" | "destinoLatitud" | "destinoLongitud" | "duracionMinutos" | "requiereGuia" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["tour"]>;
export type TourInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    itinerarios?: boolean | Prisma.Tour$itinerariosArgs<ExtArgs>;
    salidas?: boolean | Prisma.Tour$salidasArgs<ExtArgs>;
    traducciones?: boolean | Prisma.Tour$traduccionesArgs<ExtArgs>;
    imagenes?: boolean | Prisma.Tour$imagenesArgs<ExtArgs>;
    _count?: boolean | Prisma.TourCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TourIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TourIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TourPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tour";
    objects: {
        itinerarios: Prisma.$ItinerarioTourPayload<ExtArgs>[];
        salidas: Prisma.$SalidaTourPayload<ExtArgs>[];
        traducciones: Prisma.$TraduccionTourPayload<ExtArgs>[];
        imagenes: Prisma.$ImagenPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        activo: boolean;
        destinoNombre: string;
        destinoLatitud: runtime.Decimal;
        destinoLongitud: runtime.Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["tour"]>;
    composites: {};
};
export type TourGetPayload<S extends boolean | null | undefined | TourDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TourPayload, S>;
export type TourCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TourCountAggregateInputType | true;
};
export interface TourDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tour'];
        meta: {
            name: 'Tour';
        };
    };
    findUnique<T extends TourFindUniqueArgs>(args: Prisma.SelectSubset<T, TourFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TourFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TourFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TourFindFirstArgs>(args?: Prisma.SelectSubset<T, TourFindFirstArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TourFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TourFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TourFindManyArgs>(args?: Prisma.SelectSubset<T, TourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TourCreateArgs>(args: Prisma.SelectSubset<T, TourCreateArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TourCreateManyArgs>(args?: Prisma.SelectSubset<T, TourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TourCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TourDeleteArgs>(args: Prisma.SelectSubset<T, TourDeleteArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TourUpdateArgs>(args: Prisma.SelectSubset<T, TourUpdateArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TourDeleteManyArgs>(args?: Prisma.SelectSubset<T, TourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TourUpdateManyArgs>(args: Prisma.SelectSubset<T, TourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TourUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TourUpsertArgs>(args: Prisma.SelectSubset<T, TourUpsertArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TourCountArgs>(args?: Prisma.Subset<T, TourCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TourCountAggregateOutputType> : number>;
    aggregate<T extends TourAggregateArgs>(args: Prisma.Subset<T, TourAggregateArgs>): Prisma.PrismaPromise<GetTourAggregateType<T>>;
    groupBy<T extends TourGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TourGroupByArgs['orderBy'];
    } : {
        orderBy?: TourGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TourFieldRefs;
}
export interface Prisma__TourClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    itinerarios<T extends Prisma.Tour$itinerariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tour$itinerariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    salidas<T extends Prisma.Tour$salidasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tour$salidasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    traducciones<T extends Prisma.Tour$traduccionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tour$traduccionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TraduccionTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    imagenes<T extends Prisma.Tour$imagenesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tour$imagenesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TourFieldRefs {
    readonly id: Prisma.FieldRef<"Tour", 'String'>;
    readonly slug: Prisma.FieldRef<"Tour", 'String'>;
    readonly activo: Prisma.FieldRef<"Tour", 'Boolean'>;
    readonly destinoNombre: Prisma.FieldRef<"Tour", 'String'>;
    readonly destinoLatitud: Prisma.FieldRef<"Tour", 'Decimal'>;
    readonly destinoLongitud: Prisma.FieldRef<"Tour", 'Decimal'>;
    readonly duracionMinutos: Prisma.FieldRef<"Tour", 'Int'>;
    readonly requiereGuia: Prisma.FieldRef<"Tour", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"Tour", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Tour", 'DateTime'>;
}
export type TourFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
    where: Prisma.TourWhereUniqueInput;
};
export type TourFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
    where: Prisma.TourWhereUniqueInput;
};
export type TourFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
    where?: Prisma.TourWhereInput;
    orderBy?: Prisma.TourOrderByWithRelationInput | Prisma.TourOrderByWithRelationInput[];
    cursor?: Prisma.TourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TourScalarFieldEnum | Prisma.TourScalarFieldEnum[];
};
export type TourFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
    where?: Prisma.TourWhereInput;
    orderBy?: Prisma.TourOrderByWithRelationInput | Prisma.TourOrderByWithRelationInput[];
    cursor?: Prisma.TourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TourScalarFieldEnum | Prisma.TourScalarFieldEnum[];
};
export type TourFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
    where?: Prisma.TourWhereInput;
    orderBy?: Prisma.TourOrderByWithRelationInput | Prisma.TourOrderByWithRelationInput[];
    cursor?: Prisma.TourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TourScalarFieldEnum | Prisma.TourScalarFieldEnum[];
};
export type TourCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TourCreateInput, Prisma.TourUncheckedCreateInput>;
};
export type TourCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TourCreateManyInput | Prisma.TourCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TourCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    data: Prisma.TourCreateManyInput | Prisma.TourCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TourUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TourUpdateInput, Prisma.TourUncheckedUpdateInput>;
    where: Prisma.TourWhereUniqueInput;
};
export type TourUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TourUpdateManyMutationInput, Prisma.TourUncheckedUpdateManyInput>;
    where?: Prisma.TourWhereInput;
    limit?: number;
};
export type TourUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TourUpdateManyMutationInput, Prisma.TourUncheckedUpdateManyInput>;
    where?: Prisma.TourWhereInput;
    limit?: number;
};
export type TourUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
    where: Prisma.TourWhereUniqueInput;
    create: Prisma.XOR<Prisma.TourCreateInput, Prisma.TourUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TourUpdateInput, Prisma.TourUncheckedUpdateInput>;
};
export type TourDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
    where: Prisma.TourWhereUniqueInput;
};
export type TourDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TourWhereInput;
    limit?: number;
};
export type Tour$itinerariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
    where?: Prisma.ItinerarioTourWhereInput;
    orderBy?: Prisma.ItinerarioTourOrderByWithRelationInput | Prisma.ItinerarioTourOrderByWithRelationInput[];
    cursor?: Prisma.ItinerarioTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItinerarioTourScalarFieldEnum | Prisma.ItinerarioTourScalarFieldEnum[];
};
export type Tour$salidasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
    where?: Prisma.SalidaTourWhereInput;
    orderBy?: Prisma.SalidaTourOrderByWithRelationInput | Prisma.SalidaTourOrderByWithRelationInput[];
    cursor?: Prisma.SalidaTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalidaTourScalarFieldEnum | Prisma.SalidaTourScalarFieldEnum[];
};
export type Tour$traduccionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tour$imagenesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
    where?: Prisma.ImagenWhereInput;
    orderBy?: Prisma.ImagenOrderByWithRelationInput | Prisma.ImagenOrderByWithRelationInput[];
    cursor?: Prisma.ImagenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImagenScalarFieldEnum | Prisma.ImagenScalarFieldEnum[];
};
export type TourDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
};
