import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TransporteModel = runtime.Types.Result.DefaultSelection<Prisma.$TransportePayload>;
export type AggregateTransporte = {
    _count: TransporteCountAggregateOutputType | null;
    _avg: TransporteAvgAggregateOutputType | null;
    _sum: TransporteSumAggregateOutputType | null;
    _min: TransporteMinAggregateOutputType | null;
    _max: TransporteMaxAggregateOutputType | null;
};
export type TransporteAvgAggregateOutputType = {
    origenLatitud: runtime.Decimal | null;
    origenLongitud: runtime.Decimal | null;
    destinoLatitud: runtime.Decimal | null;
    destinoLongitud: runtime.Decimal | null;
    duracionMinutosEstimada: number | null;
};
export type TransporteSumAggregateOutputType = {
    origenLatitud: runtime.Decimal | null;
    origenLongitud: runtime.Decimal | null;
    destinoLatitud: runtime.Decimal | null;
    destinoLongitud: runtime.Decimal | null;
    duracionMinutosEstimada: number | null;
};
export type TransporteMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    activo: boolean | null;
    origenNombre: string | null;
    origenLatitud: runtime.Decimal | null;
    origenLongitud: runtime.Decimal | null;
    destinoNombre: string | null;
    destinoLatitud: runtime.Decimal | null;
    destinoLongitud: runtime.Decimal | null;
    duracionMinutosEstimada: number | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type TransporteMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    activo: boolean | null;
    origenNombre: string | null;
    origenLatitud: runtime.Decimal | null;
    origenLongitud: runtime.Decimal | null;
    destinoNombre: string | null;
    destinoLatitud: runtime.Decimal | null;
    destinoLongitud: runtime.Decimal | null;
    duracionMinutosEstimada: number | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type TransporteCountAggregateOutputType = {
    id: number;
    slug: number;
    activo: number;
    origenNombre: number;
    origenLatitud: number;
    origenLongitud: number;
    destinoNombre: number;
    destinoLatitud: number;
    destinoLongitud: number;
    duracionMinutosEstimada: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type TransporteAvgAggregateInputType = {
    origenLatitud?: true;
    origenLongitud?: true;
    destinoLatitud?: true;
    destinoLongitud?: true;
    duracionMinutosEstimada?: true;
};
export type TransporteSumAggregateInputType = {
    origenLatitud?: true;
    origenLongitud?: true;
    destinoLatitud?: true;
    destinoLongitud?: true;
    duracionMinutosEstimada?: true;
};
export type TransporteMinAggregateInputType = {
    id?: true;
    slug?: true;
    activo?: true;
    origenNombre?: true;
    origenLatitud?: true;
    origenLongitud?: true;
    destinoNombre?: true;
    destinoLatitud?: true;
    destinoLongitud?: true;
    duracionMinutosEstimada?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type TransporteMaxAggregateInputType = {
    id?: true;
    slug?: true;
    activo?: true;
    origenNombre?: true;
    origenLatitud?: true;
    origenLongitud?: true;
    destinoNombre?: true;
    destinoLatitud?: true;
    destinoLongitud?: true;
    duracionMinutosEstimada?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type TransporteCountAggregateInputType = {
    id?: true;
    slug?: true;
    activo?: true;
    origenNombre?: true;
    origenLatitud?: true;
    origenLongitud?: true;
    destinoNombre?: true;
    destinoLatitud?: true;
    destinoLongitud?: true;
    duracionMinutosEstimada?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type TransporteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransporteWhereInput;
    orderBy?: Prisma.TransporteOrderByWithRelationInput | Prisma.TransporteOrderByWithRelationInput[];
    cursor?: Prisma.TransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TransporteCountAggregateInputType;
    _avg?: TransporteAvgAggregateInputType;
    _sum?: TransporteSumAggregateInputType;
    _min?: TransporteMinAggregateInputType;
    _max?: TransporteMaxAggregateInputType;
};
export type GetTransporteAggregateType<T extends TransporteAggregateArgs> = {
    [P in keyof T & keyof AggregateTransporte]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransporte[P]> : Prisma.GetScalarType<T[P], AggregateTransporte[P]>;
};
export type TransporteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransporteWhereInput;
    orderBy?: Prisma.TransporteOrderByWithAggregationInput | Prisma.TransporteOrderByWithAggregationInput[];
    by: Prisma.TransporteScalarFieldEnum[] | Prisma.TransporteScalarFieldEnum;
    having?: Prisma.TransporteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransporteCountAggregateInputType | true;
    _avg?: TransporteAvgAggregateInputType;
    _sum?: TransporteSumAggregateInputType;
    _min?: TransporteMinAggregateInputType;
    _max?: TransporteMaxAggregateInputType;
};
export type TransporteGroupByOutputType = {
    id: string;
    slug: string;
    activo: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal;
    origenLongitud: runtime.Decimal;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal;
    destinoLongitud: runtime.Decimal;
    duracionMinutosEstimada: number;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: TransporteCountAggregateOutputType | null;
    _avg: TransporteAvgAggregateOutputType | null;
    _sum: TransporteSumAggregateOutputType | null;
    _min: TransporteMinAggregateOutputType | null;
    _max: TransporteMaxAggregateOutputType | null;
};
export type GetTransporteGroupByPayload<T extends TransporteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransporteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransporteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransporteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransporteGroupByOutputType[P]>;
}>>;
export type TransporteWhereInput = {
    AND?: Prisma.TransporteWhereInput | Prisma.TransporteWhereInput[];
    OR?: Prisma.TransporteWhereInput[];
    NOT?: Prisma.TransporteWhereInput | Prisma.TransporteWhereInput[];
    id?: Prisma.UuidFilter<"Transporte"> | string;
    slug?: Prisma.StringFilter<"Transporte"> | string;
    activo?: Prisma.BoolFilter<"Transporte"> | boolean;
    origenNombre?: Prisma.StringFilter<"Transporte"> | string;
    origenLatitud?: Prisma.DecimalFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFilter<"Transporte"> | string;
    destinoLatitud?: Prisma.DecimalFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFilter<"Transporte"> | number;
    creadoEn?: Prisma.DateTimeFilter<"Transporte"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Transporte"> | Date | string;
    paradas?: Prisma.ParadaTransporteListRelationFilter;
    salidas?: Prisma.SalidaTransporteListRelationFilter;
    traducciones?: Prisma.TraduccionTransporteListRelationFilter;
    imagenes?: Prisma.ImagenListRelationFilter;
};
export type TransporteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    origenNombre?: Prisma.SortOrder;
    origenLatitud?: Prisma.SortOrder;
    origenLongitud?: Prisma.SortOrder;
    destinoNombre?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutosEstimada?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    paradas?: Prisma.ParadaTransporteOrderByRelationAggregateInput;
    salidas?: Prisma.SalidaTransporteOrderByRelationAggregateInput;
    traducciones?: Prisma.TraduccionTransporteOrderByRelationAggregateInput;
    imagenes?: Prisma.ImagenOrderByRelationAggregateInput;
};
export type TransporteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.TransporteWhereInput | Prisma.TransporteWhereInput[];
    OR?: Prisma.TransporteWhereInput[];
    NOT?: Prisma.TransporteWhereInput | Prisma.TransporteWhereInput[];
    activo?: Prisma.BoolFilter<"Transporte"> | boolean;
    origenNombre?: Prisma.StringFilter<"Transporte"> | string;
    origenLatitud?: Prisma.DecimalFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFilter<"Transporte"> | string;
    destinoLatitud?: Prisma.DecimalFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFilter<"Transporte"> | number;
    creadoEn?: Prisma.DateTimeFilter<"Transporte"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Transporte"> | Date | string;
    paradas?: Prisma.ParadaTransporteListRelationFilter;
    salidas?: Prisma.SalidaTransporteListRelationFilter;
    traducciones?: Prisma.TraduccionTransporteListRelationFilter;
    imagenes?: Prisma.ImagenListRelationFilter;
}, "id" | "slug">;
export type TransporteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    origenNombre?: Prisma.SortOrder;
    origenLatitud?: Prisma.SortOrder;
    origenLongitud?: Prisma.SortOrder;
    destinoNombre?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutosEstimada?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.TransporteCountOrderByAggregateInput;
    _avg?: Prisma.TransporteAvgOrderByAggregateInput;
    _max?: Prisma.TransporteMaxOrderByAggregateInput;
    _min?: Prisma.TransporteMinOrderByAggregateInput;
    _sum?: Prisma.TransporteSumOrderByAggregateInput;
};
export type TransporteScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransporteScalarWhereWithAggregatesInput | Prisma.TransporteScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransporteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransporteScalarWhereWithAggregatesInput | Prisma.TransporteScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Transporte"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Transporte"> | string;
    activo?: Prisma.BoolWithAggregatesFilter<"Transporte"> | boolean;
    origenNombre?: Prisma.StringWithAggregatesFilter<"Transporte"> | string;
    origenLatitud?: Prisma.DecimalWithAggregatesFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalWithAggregatesFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringWithAggregatesFilter<"Transporte"> | string;
    destinoLatitud?: Prisma.DecimalWithAggregatesFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalWithAggregatesFilter<"Transporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntWithAggregatesFilter<"Transporte"> | number;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Transporte"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Transporte"> | Date | string;
};
export type TransporteCreateInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    paradas?: Prisma.ParadaTransporteCreateNestedManyWithoutTransporteInput;
    salidas?: Prisma.SalidaTransporteCreateNestedManyWithoutTransporteInput;
    traducciones?: Prisma.TraduccionTransporteCreateNestedManyWithoutTransporteInput;
    imagenes?: Prisma.ImagenCreateNestedManyWithoutTransporteInput;
};
export type TransporteUncheckedCreateInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    paradas?: Prisma.ParadaTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    salidas?: Prisma.SalidaTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    traducciones?: Prisma.TraduccionTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    imagenes?: Prisma.ImagenUncheckedCreateNestedManyWithoutTransporteInput;
};
export type TransporteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paradas?: Prisma.ParadaTransporteUpdateManyWithoutTransporteNestedInput;
    salidas?: Prisma.SalidaTransporteUpdateManyWithoutTransporteNestedInput;
    traducciones?: Prisma.TraduccionTransporteUpdateManyWithoutTransporteNestedInput;
    imagenes?: Prisma.ImagenUpdateManyWithoutTransporteNestedInput;
};
export type TransporteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paradas?: Prisma.ParadaTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    salidas?: Prisma.SalidaTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    traducciones?: Prisma.TraduccionTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    imagenes?: Prisma.ImagenUncheckedUpdateManyWithoutTransporteNestedInput;
};
export type TransporteCreateManyInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type TransporteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransporteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransporteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    origenNombre?: Prisma.SortOrder;
    origenLatitud?: Prisma.SortOrder;
    origenLongitud?: Prisma.SortOrder;
    destinoNombre?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutosEstimada?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type TransporteAvgOrderByAggregateInput = {
    origenLatitud?: Prisma.SortOrder;
    origenLongitud?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutosEstimada?: Prisma.SortOrder;
};
export type TransporteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    origenNombre?: Prisma.SortOrder;
    origenLatitud?: Prisma.SortOrder;
    origenLongitud?: Prisma.SortOrder;
    destinoNombre?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutosEstimada?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type TransporteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    origenNombre?: Prisma.SortOrder;
    origenLatitud?: Prisma.SortOrder;
    origenLongitud?: Prisma.SortOrder;
    destinoNombre?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutosEstimada?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type TransporteSumOrderByAggregateInput = {
    origenLatitud?: Prisma.SortOrder;
    origenLongitud?: Prisma.SortOrder;
    destinoLatitud?: Prisma.SortOrder;
    destinoLongitud?: Prisma.SortOrder;
    duracionMinutosEstimada?: Prisma.SortOrder;
};
export type TransporteScalarRelationFilter = {
    is?: Prisma.TransporteWhereInput;
    isNot?: Prisma.TransporteWhereInput;
};
export type TransporteNullableScalarRelationFilter = {
    is?: Prisma.TransporteWhereInput | null;
    isNot?: Prisma.TransporteWhereInput | null;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TransporteCreateNestedOneWithoutParadasInput = {
    create?: Prisma.XOR<Prisma.TransporteCreateWithoutParadasInput, Prisma.TransporteUncheckedCreateWithoutParadasInput>;
    connectOrCreate?: Prisma.TransporteCreateOrConnectWithoutParadasInput;
    connect?: Prisma.TransporteWhereUniqueInput;
};
export type TransporteUpdateOneRequiredWithoutParadasNestedInput = {
    create?: Prisma.XOR<Prisma.TransporteCreateWithoutParadasInput, Prisma.TransporteUncheckedCreateWithoutParadasInput>;
    connectOrCreate?: Prisma.TransporteCreateOrConnectWithoutParadasInput;
    upsert?: Prisma.TransporteUpsertWithoutParadasInput;
    connect?: Prisma.TransporteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransporteUpdateToOneWithWhereWithoutParadasInput, Prisma.TransporteUpdateWithoutParadasInput>, Prisma.TransporteUncheckedUpdateWithoutParadasInput>;
};
export type TransporteCreateNestedOneWithoutSalidasInput = {
    create?: Prisma.XOR<Prisma.TransporteCreateWithoutSalidasInput, Prisma.TransporteUncheckedCreateWithoutSalidasInput>;
    connectOrCreate?: Prisma.TransporteCreateOrConnectWithoutSalidasInput;
    connect?: Prisma.TransporteWhereUniqueInput;
};
export type TransporteUpdateOneRequiredWithoutSalidasNestedInput = {
    create?: Prisma.XOR<Prisma.TransporteCreateWithoutSalidasInput, Prisma.TransporteUncheckedCreateWithoutSalidasInput>;
    connectOrCreate?: Prisma.TransporteCreateOrConnectWithoutSalidasInput;
    upsert?: Prisma.TransporteUpsertWithoutSalidasInput;
    connect?: Prisma.TransporteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransporteUpdateToOneWithWhereWithoutSalidasInput, Prisma.TransporteUpdateWithoutSalidasInput>, Prisma.TransporteUncheckedUpdateWithoutSalidasInput>;
};
export type TransporteCreateNestedOneWithoutTraduccionesInput = {
    create?: Prisma.XOR<Prisma.TransporteCreateWithoutTraduccionesInput, Prisma.TransporteUncheckedCreateWithoutTraduccionesInput>;
    connectOrCreate?: Prisma.TransporteCreateOrConnectWithoutTraduccionesInput;
    connect?: Prisma.TransporteWhereUniqueInput;
};
export type TransporteUpdateOneRequiredWithoutTraduccionesNestedInput = {
    create?: Prisma.XOR<Prisma.TransporteCreateWithoutTraduccionesInput, Prisma.TransporteUncheckedCreateWithoutTraduccionesInput>;
    connectOrCreate?: Prisma.TransporteCreateOrConnectWithoutTraduccionesInput;
    upsert?: Prisma.TransporteUpsertWithoutTraduccionesInput;
    connect?: Prisma.TransporteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransporteUpdateToOneWithWhereWithoutTraduccionesInput, Prisma.TransporteUpdateWithoutTraduccionesInput>, Prisma.TransporteUncheckedUpdateWithoutTraduccionesInput>;
};
export type TransporteCreateNestedOneWithoutImagenesInput = {
    create?: Prisma.XOR<Prisma.TransporteCreateWithoutImagenesInput, Prisma.TransporteUncheckedCreateWithoutImagenesInput>;
    connectOrCreate?: Prisma.TransporteCreateOrConnectWithoutImagenesInput;
    connect?: Prisma.TransporteWhereUniqueInput;
};
export type TransporteUpdateOneWithoutImagenesNestedInput = {
    create?: Prisma.XOR<Prisma.TransporteCreateWithoutImagenesInput, Prisma.TransporteUncheckedCreateWithoutImagenesInput>;
    connectOrCreate?: Prisma.TransporteCreateOrConnectWithoutImagenesInput;
    upsert?: Prisma.TransporteUpsertWithoutImagenesInput;
    disconnect?: Prisma.TransporteWhereInput | boolean;
    delete?: Prisma.TransporteWhereInput | boolean;
    connect?: Prisma.TransporteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransporteUpdateToOneWithWhereWithoutImagenesInput, Prisma.TransporteUpdateWithoutImagenesInput>, Prisma.TransporteUncheckedUpdateWithoutImagenesInput>;
};
export type TransporteCreateWithoutParadasInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    salidas?: Prisma.SalidaTransporteCreateNestedManyWithoutTransporteInput;
    traducciones?: Prisma.TraduccionTransporteCreateNestedManyWithoutTransporteInput;
    imagenes?: Prisma.ImagenCreateNestedManyWithoutTransporteInput;
};
export type TransporteUncheckedCreateWithoutParadasInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    salidas?: Prisma.SalidaTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    traducciones?: Prisma.TraduccionTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    imagenes?: Prisma.ImagenUncheckedCreateNestedManyWithoutTransporteInput;
};
export type TransporteCreateOrConnectWithoutParadasInput = {
    where: Prisma.TransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransporteCreateWithoutParadasInput, Prisma.TransporteUncheckedCreateWithoutParadasInput>;
};
export type TransporteUpsertWithoutParadasInput = {
    update: Prisma.XOR<Prisma.TransporteUpdateWithoutParadasInput, Prisma.TransporteUncheckedUpdateWithoutParadasInput>;
    create: Prisma.XOR<Prisma.TransporteCreateWithoutParadasInput, Prisma.TransporteUncheckedCreateWithoutParadasInput>;
    where?: Prisma.TransporteWhereInput;
};
export type TransporteUpdateToOneWithWhereWithoutParadasInput = {
    where?: Prisma.TransporteWhereInput;
    data: Prisma.XOR<Prisma.TransporteUpdateWithoutParadasInput, Prisma.TransporteUncheckedUpdateWithoutParadasInput>;
};
export type TransporteUpdateWithoutParadasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salidas?: Prisma.SalidaTransporteUpdateManyWithoutTransporteNestedInput;
    traducciones?: Prisma.TraduccionTransporteUpdateManyWithoutTransporteNestedInput;
    imagenes?: Prisma.ImagenUpdateManyWithoutTransporteNestedInput;
};
export type TransporteUncheckedUpdateWithoutParadasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salidas?: Prisma.SalidaTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    traducciones?: Prisma.TraduccionTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    imagenes?: Prisma.ImagenUncheckedUpdateManyWithoutTransporteNestedInput;
};
export type TransporteCreateWithoutSalidasInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    paradas?: Prisma.ParadaTransporteCreateNestedManyWithoutTransporteInput;
    traducciones?: Prisma.TraduccionTransporteCreateNestedManyWithoutTransporteInput;
    imagenes?: Prisma.ImagenCreateNestedManyWithoutTransporteInput;
};
export type TransporteUncheckedCreateWithoutSalidasInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    paradas?: Prisma.ParadaTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    traducciones?: Prisma.TraduccionTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    imagenes?: Prisma.ImagenUncheckedCreateNestedManyWithoutTransporteInput;
};
export type TransporteCreateOrConnectWithoutSalidasInput = {
    where: Prisma.TransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransporteCreateWithoutSalidasInput, Prisma.TransporteUncheckedCreateWithoutSalidasInput>;
};
export type TransporteUpsertWithoutSalidasInput = {
    update: Prisma.XOR<Prisma.TransporteUpdateWithoutSalidasInput, Prisma.TransporteUncheckedUpdateWithoutSalidasInput>;
    create: Prisma.XOR<Prisma.TransporteCreateWithoutSalidasInput, Prisma.TransporteUncheckedCreateWithoutSalidasInput>;
    where?: Prisma.TransporteWhereInput;
};
export type TransporteUpdateToOneWithWhereWithoutSalidasInput = {
    where?: Prisma.TransporteWhereInput;
    data: Prisma.XOR<Prisma.TransporteUpdateWithoutSalidasInput, Prisma.TransporteUncheckedUpdateWithoutSalidasInput>;
};
export type TransporteUpdateWithoutSalidasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paradas?: Prisma.ParadaTransporteUpdateManyWithoutTransporteNestedInput;
    traducciones?: Prisma.TraduccionTransporteUpdateManyWithoutTransporteNestedInput;
    imagenes?: Prisma.ImagenUpdateManyWithoutTransporteNestedInput;
};
export type TransporteUncheckedUpdateWithoutSalidasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paradas?: Prisma.ParadaTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    traducciones?: Prisma.TraduccionTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    imagenes?: Prisma.ImagenUncheckedUpdateManyWithoutTransporteNestedInput;
};
export type TransporteCreateWithoutTraduccionesInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    paradas?: Prisma.ParadaTransporteCreateNestedManyWithoutTransporteInput;
    salidas?: Prisma.SalidaTransporteCreateNestedManyWithoutTransporteInput;
    imagenes?: Prisma.ImagenCreateNestedManyWithoutTransporteInput;
};
export type TransporteUncheckedCreateWithoutTraduccionesInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    paradas?: Prisma.ParadaTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    salidas?: Prisma.SalidaTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    imagenes?: Prisma.ImagenUncheckedCreateNestedManyWithoutTransporteInput;
};
export type TransporteCreateOrConnectWithoutTraduccionesInput = {
    where: Prisma.TransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransporteCreateWithoutTraduccionesInput, Prisma.TransporteUncheckedCreateWithoutTraduccionesInput>;
};
export type TransporteUpsertWithoutTraduccionesInput = {
    update: Prisma.XOR<Prisma.TransporteUpdateWithoutTraduccionesInput, Prisma.TransporteUncheckedUpdateWithoutTraduccionesInput>;
    create: Prisma.XOR<Prisma.TransporteCreateWithoutTraduccionesInput, Prisma.TransporteUncheckedCreateWithoutTraduccionesInput>;
    where?: Prisma.TransporteWhereInput;
};
export type TransporteUpdateToOneWithWhereWithoutTraduccionesInput = {
    where?: Prisma.TransporteWhereInput;
    data: Prisma.XOR<Prisma.TransporteUpdateWithoutTraduccionesInput, Prisma.TransporteUncheckedUpdateWithoutTraduccionesInput>;
};
export type TransporteUpdateWithoutTraduccionesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paradas?: Prisma.ParadaTransporteUpdateManyWithoutTransporteNestedInput;
    salidas?: Prisma.SalidaTransporteUpdateManyWithoutTransporteNestedInput;
    imagenes?: Prisma.ImagenUpdateManyWithoutTransporteNestedInput;
};
export type TransporteUncheckedUpdateWithoutTraduccionesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paradas?: Prisma.ParadaTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    salidas?: Prisma.SalidaTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    imagenes?: Prisma.ImagenUncheckedUpdateManyWithoutTransporteNestedInput;
};
export type TransporteCreateWithoutImagenesInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    paradas?: Prisma.ParadaTransporteCreateNestedManyWithoutTransporteInput;
    salidas?: Prisma.SalidaTransporteCreateNestedManyWithoutTransporteInput;
    traducciones?: Prisma.TraduccionTransporteCreateNestedManyWithoutTransporteInput;
};
export type TransporteUncheckedCreateWithoutImagenesInput = {
    id?: string;
    slug: string;
    activo?: boolean;
    origenNombre: string;
    origenLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre: string;
    destinoLatitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    paradas?: Prisma.ParadaTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    salidas?: Prisma.SalidaTransporteUncheckedCreateNestedManyWithoutTransporteInput;
    traducciones?: Prisma.TraduccionTransporteUncheckedCreateNestedManyWithoutTransporteInput;
};
export type TransporteCreateOrConnectWithoutImagenesInput = {
    where: Prisma.TransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransporteCreateWithoutImagenesInput, Prisma.TransporteUncheckedCreateWithoutImagenesInput>;
};
export type TransporteUpsertWithoutImagenesInput = {
    update: Prisma.XOR<Prisma.TransporteUpdateWithoutImagenesInput, Prisma.TransporteUncheckedUpdateWithoutImagenesInput>;
    create: Prisma.XOR<Prisma.TransporteCreateWithoutImagenesInput, Prisma.TransporteUncheckedCreateWithoutImagenesInput>;
    where?: Prisma.TransporteWhereInput;
};
export type TransporteUpdateToOneWithWhereWithoutImagenesInput = {
    where?: Prisma.TransporteWhereInput;
    data: Prisma.XOR<Prisma.TransporteUpdateWithoutImagenesInput, Prisma.TransporteUncheckedUpdateWithoutImagenesInput>;
};
export type TransporteUpdateWithoutImagenesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paradas?: Prisma.ParadaTransporteUpdateManyWithoutTransporteNestedInput;
    salidas?: Prisma.SalidaTransporteUpdateManyWithoutTransporteNestedInput;
    traducciones?: Prisma.TraduccionTransporteUpdateManyWithoutTransporteNestedInput;
};
export type TransporteUncheckedUpdateWithoutImagenesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origenNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    origenLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    origenLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoNombre?: Prisma.StringFieldUpdateOperationsInput | string;
    destinoLatitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    destinoLongitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMinutosEstimada?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paradas?: Prisma.ParadaTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    salidas?: Prisma.SalidaTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
    traducciones?: Prisma.TraduccionTransporteUncheckedUpdateManyWithoutTransporteNestedInput;
};
export type TransporteCountOutputType = {
    paradas: number;
    salidas: number;
    traducciones: number;
    imagenes: number;
};
export type TransporteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paradas?: boolean | TransporteCountOutputTypeCountParadasArgs;
    salidas?: boolean | TransporteCountOutputTypeCountSalidasArgs;
    traducciones?: boolean | TransporteCountOutputTypeCountTraduccionesArgs;
    imagenes?: boolean | TransporteCountOutputTypeCountImagenesArgs;
};
export type TransporteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteCountOutputTypeSelect<ExtArgs> | null;
};
export type TransporteCountOutputTypeCountParadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParadaTransporteWhereInput;
};
export type TransporteCountOutputTypeCountSalidasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalidaTransporteWhereInput;
};
export type TransporteCountOutputTypeCountTraduccionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TraduccionTransporteWhereInput;
};
export type TransporteCountOutputTypeCountImagenesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImagenWhereInput;
};
export type TransporteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    activo?: boolean;
    origenNombre?: boolean;
    origenLatitud?: boolean;
    origenLongitud?: boolean;
    destinoNombre?: boolean;
    destinoLatitud?: boolean;
    destinoLongitud?: boolean;
    duracionMinutosEstimada?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    paradas?: boolean | Prisma.Transporte$paradasArgs<ExtArgs>;
    salidas?: boolean | Prisma.Transporte$salidasArgs<ExtArgs>;
    traducciones?: boolean | Prisma.Transporte$traduccionesArgs<ExtArgs>;
    imagenes?: boolean | Prisma.Transporte$imagenesArgs<ExtArgs>;
    _count?: boolean | Prisma.TransporteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transporte"]>;
export type TransporteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    activo?: boolean;
    origenNombre?: boolean;
    origenLatitud?: boolean;
    origenLongitud?: boolean;
    destinoNombre?: boolean;
    destinoLatitud?: boolean;
    destinoLongitud?: boolean;
    duracionMinutosEstimada?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
}, ExtArgs["result"]["transporte"]>;
export type TransporteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    activo?: boolean;
    origenNombre?: boolean;
    origenLatitud?: boolean;
    origenLongitud?: boolean;
    destinoNombre?: boolean;
    destinoLatitud?: boolean;
    destinoLongitud?: boolean;
    duracionMinutosEstimada?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
}, ExtArgs["result"]["transporte"]>;
export type TransporteSelectScalar = {
    id?: boolean;
    slug?: boolean;
    activo?: boolean;
    origenNombre?: boolean;
    origenLatitud?: boolean;
    origenLongitud?: boolean;
    destinoNombre?: boolean;
    destinoLatitud?: boolean;
    destinoLongitud?: boolean;
    duracionMinutosEstimada?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type TransporteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "activo" | "origenNombre" | "origenLatitud" | "origenLongitud" | "destinoNombre" | "destinoLatitud" | "destinoLongitud" | "duracionMinutosEstimada" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["transporte"]>;
export type TransporteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paradas?: boolean | Prisma.Transporte$paradasArgs<ExtArgs>;
    salidas?: boolean | Prisma.Transporte$salidasArgs<ExtArgs>;
    traducciones?: boolean | Prisma.Transporte$traduccionesArgs<ExtArgs>;
    imagenes?: boolean | Prisma.Transporte$imagenesArgs<ExtArgs>;
    _count?: boolean | Prisma.TransporteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TransporteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TransporteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TransportePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Transporte";
    objects: {
        paradas: Prisma.$ParadaTransportePayload<ExtArgs>[];
        salidas: Prisma.$SalidaTransportePayload<ExtArgs>[];
        traducciones: Prisma.$TraduccionTransportePayload<ExtArgs>[];
        imagenes: Prisma.$ImagenPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        activo: boolean;
        origenNombre: string;
        origenLatitud: runtime.Decimal;
        origenLongitud: runtime.Decimal;
        destinoNombre: string;
        destinoLatitud: runtime.Decimal;
        destinoLongitud: runtime.Decimal;
        duracionMinutosEstimada: number;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["transporte"]>;
    composites: {};
};
export type TransporteGetPayload<S extends boolean | null | undefined | TransporteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransportePayload, S>;
export type TransporteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransporteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransporteCountAggregateInputType | true;
};
export interface TransporteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Transporte'];
        meta: {
            name: 'Transporte';
        };
    };
    findUnique<T extends TransporteFindUniqueArgs>(args: Prisma.SelectSubset<T, TransporteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TransporteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransporteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TransporteFindFirstArgs>(args?: Prisma.SelectSubset<T, TransporteFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TransporteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransporteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TransporteFindManyArgs>(args?: Prisma.SelectSubset<T, TransporteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TransporteCreateArgs>(args: Prisma.SelectSubset<T, TransporteCreateArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TransporteCreateManyArgs>(args?: Prisma.SelectSubset<T, TransporteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TransporteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransporteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TransporteDeleteArgs>(args: Prisma.SelectSubset<T, TransporteDeleteArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TransporteUpdateArgs>(args: Prisma.SelectSubset<T, TransporteUpdateArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TransporteDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransporteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TransporteUpdateManyArgs>(args: Prisma.SelectSubset<T, TransporteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TransporteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransporteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TransporteUpsertArgs>(args: Prisma.SelectSubset<T, TransporteUpsertArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TransporteCountArgs>(args?: Prisma.Subset<T, TransporteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransporteCountAggregateOutputType> : number>;
    aggregate<T extends TransporteAggregateArgs>(args: Prisma.Subset<T, TransporteAggregateArgs>): Prisma.PrismaPromise<GetTransporteAggregateType<T>>;
    groupBy<T extends TransporteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransporteGroupByArgs['orderBy'];
    } : {
        orderBy?: TransporteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransporteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransporteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TransporteFieldRefs;
}
export interface Prisma__TransporteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    paradas<T extends Prisma.Transporte$paradasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transporte$paradasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    salidas<T extends Prisma.Transporte$salidasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transporte$salidasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    traducciones<T extends Prisma.Transporte$traduccionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transporte$traduccionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TraduccionTransportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    imagenes<T extends Prisma.Transporte$imagenesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transporte$imagenesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TransporteFieldRefs {
    readonly id: Prisma.FieldRef<"Transporte", 'String'>;
    readonly slug: Prisma.FieldRef<"Transporte", 'String'>;
    readonly activo: Prisma.FieldRef<"Transporte", 'Boolean'>;
    readonly origenNombre: Prisma.FieldRef<"Transporte", 'String'>;
    readonly origenLatitud: Prisma.FieldRef<"Transporte", 'Decimal'>;
    readonly origenLongitud: Prisma.FieldRef<"Transporte", 'Decimal'>;
    readonly destinoNombre: Prisma.FieldRef<"Transporte", 'String'>;
    readonly destinoLatitud: Prisma.FieldRef<"Transporte", 'Decimal'>;
    readonly destinoLongitud: Prisma.FieldRef<"Transporte", 'Decimal'>;
    readonly duracionMinutosEstimada: Prisma.FieldRef<"Transporte", 'Int'>;
    readonly creadoEn: Prisma.FieldRef<"Transporte", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Transporte", 'DateTime'>;
}
export type TransporteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
    where: Prisma.TransporteWhereUniqueInput;
};
export type TransporteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
    where: Prisma.TransporteWhereUniqueInput;
};
export type TransporteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
    where?: Prisma.TransporteWhereInput;
    orderBy?: Prisma.TransporteOrderByWithRelationInput | Prisma.TransporteOrderByWithRelationInput[];
    cursor?: Prisma.TransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransporteScalarFieldEnum | Prisma.TransporteScalarFieldEnum[];
};
export type TransporteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
    where?: Prisma.TransporteWhereInput;
    orderBy?: Prisma.TransporteOrderByWithRelationInput | Prisma.TransporteOrderByWithRelationInput[];
    cursor?: Prisma.TransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransporteScalarFieldEnum | Prisma.TransporteScalarFieldEnum[];
};
export type TransporteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
    where?: Prisma.TransporteWhereInput;
    orderBy?: Prisma.TransporteOrderByWithRelationInput | Prisma.TransporteOrderByWithRelationInput[];
    cursor?: Prisma.TransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransporteScalarFieldEnum | Prisma.TransporteScalarFieldEnum[];
};
export type TransporteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransporteCreateInput, Prisma.TransporteUncheckedCreateInput>;
};
export type TransporteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TransporteCreateManyInput | Prisma.TransporteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransporteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    data: Prisma.TransporteCreateManyInput | Prisma.TransporteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransporteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransporteUpdateInput, Prisma.TransporteUncheckedUpdateInput>;
    where: Prisma.TransporteWhereUniqueInput;
};
export type TransporteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TransporteUpdateManyMutationInput, Prisma.TransporteUncheckedUpdateManyInput>;
    where?: Prisma.TransporteWhereInput;
    limit?: number;
};
export type TransporteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransporteUpdateManyMutationInput, Prisma.TransporteUncheckedUpdateManyInput>;
    where?: Prisma.TransporteWhereInput;
    limit?: number;
};
export type TransporteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
    where: Prisma.TransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransporteCreateInput, Prisma.TransporteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TransporteUpdateInput, Prisma.TransporteUncheckedUpdateInput>;
};
export type TransporteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
    where: Prisma.TransporteWhereUniqueInput;
};
export type TransporteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransporteWhereInput;
    limit?: number;
};
export type Transporte$paradasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
    where?: Prisma.ParadaTransporteWhereInput;
    orderBy?: Prisma.ParadaTransporteOrderByWithRelationInput | Prisma.ParadaTransporteOrderByWithRelationInput[];
    cursor?: Prisma.ParadaTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParadaTransporteScalarFieldEnum | Prisma.ParadaTransporteScalarFieldEnum[];
};
export type Transporte$salidasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
    where?: Prisma.SalidaTransporteWhereInput;
    orderBy?: Prisma.SalidaTransporteOrderByWithRelationInput | Prisma.SalidaTransporteOrderByWithRelationInput[];
    cursor?: Prisma.SalidaTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalidaTransporteScalarFieldEnum | Prisma.SalidaTransporteScalarFieldEnum[];
};
export type Transporte$traduccionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Transporte$imagenesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TransporteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
};
