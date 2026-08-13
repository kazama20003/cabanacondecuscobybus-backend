import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioMinAggregateOutputType = {
    id: string | null;
    correo: string | null;
    contrasenaHash: string | null;
    nombres: string | null;
    apellidos: string | null;
    telefonoWhatsApp: string | null;
    paisResidencia: string | null;
    rol: $Enums.RolUsuario | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: string | null;
    correo: string | null;
    contrasenaHash: string | null;
    nombres: string | null;
    apellidos: string | null;
    telefonoWhatsApp: string | null;
    paisResidencia: string | null;
    rol: $Enums.RolUsuario | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    correo: number;
    contrasenaHash: number;
    nombres: number;
    apellidos: number;
    telefonoWhatsApp: number;
    paisResidencia: number;
    rol: number;
    activo: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    correo?: true;
    contrasenaHash?: true;
    nombres?: true;
    apellidos?: true;
    telefonoWhatsApp?: true;
    paisResidencia?: true;
    rol?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    correo?: true;
    contrasenaHash?: true;
    nombres?: true;
    apellidos?: true;
    telefonoWhatsApp?: true;
    paisResidencia?: true;
    rol?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    correo?: true;
    contrasenaHash?: true;
    nombres?: true;
    apellidos?: true;
    telefonoWhatsApp?: true;
    paisResidencia?: true;
    rol?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioCountAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type UsuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithAggregationInput | Prisma.UsuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.UsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: string;
    correo: string;
    contrasenaHash: string;
    nombres: string;
    apellidos: string;
    telefonoWhatsApp: string | null;
    paisResidencia: string | null;
    rol: $Enums.RolUsuario;
    activo: boolean;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: UsuarioCountAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type UsuarioWhereInput = {
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    id?: Prisma.UuidFilter<"Usuario"> | string;
    correo?: Prisma.StringFilter<"Usuario"> | string;
    contrasenaHash?: Prisma.StringFilter<"Usuario"> | string;
    nombres?: Prisma.StringFilter<"Usuario"> | string;
    apellidos?: Prisma.StringFilter<"Usuario"> | string;
    telefonoWhatsApp?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    paisResidencia?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    rol?: Prisma.EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario;
    activo?: Prisma.BoolFilter<"Usuario"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    reservas?: Prisma.ReservaListRelationFilter;
    pagosConfirmados?: Prisma.PagoListRelationFilter;
};
export type UsuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasenaHash?: Prisma.SortOrder;
    nombres?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    telefonoWhatsApp?: Prisma.SortOrderInput | Prisma.SortOrder;
    paisResidencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    reservas?: Prisma.ReservaOrderByRelationAggregateInput;
    pagosConfirmados?: Prisma.PagoOrderByRelationAggregateInput;
};
export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    correo?: string;
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    contrasenaHash?: Prisma.StringFilter<"Usuario"> | string;
    nombres?: Prisma.StringFilter<"Usuario"> | string;
    apellidos?: Prisma.StringFilter<"Usuario"> | string;
    telefonoWhatsApp?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    paisResidencia?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    rol?: Prisma.EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario;
    activo?: Prisma.BoolFilter<"Usuario"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    reservas?: Prisma.ReservaListRelationFilter;
    pagosConfirmados?: Prisma.PagoListRelationFilter;
}, "id" | "correo">;
export type UsuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasenaHash?: Prisma.SortOrder;
    nombres?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    telefonoWhatsApp?: Prisma.SortOrderInput | Prisma.SortOrder;
    paisResidencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.UsuarioCountOrderByAggregateInput;
    _max?: Prisma.UsuarioMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioMinOrderByAggregateInput;
};
export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Usuario"> | string;
    correo?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    contrasenaHash?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    nombres?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    apellidos?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    telefonoWhatsApp?: Prisma.StringNullableWithAggregatesFilter<"Usuario"> | string | null;
    paisResidencia?: Prisma.StringNullableWithAggregatesFilter<"Usuario"> | string | null;
    rol?: Prisma.EnumRolUsuarioWithAggregatesFilter<"Usuario"> | $Enums.RolUsuario;
    activo?: Prisma.BoolWithAggregatesFilter<"Usuario"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
};
export type UsuarioCreateInput = {
    id?: string;
    correo: string;
    contrasenaHash: string;
    nombres: string;
    apellidos: string;
    telefonoWhatsApp?: string | null;
    paisResidencia?: string | null;
    rol?: $Enums.RolUsuario;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    reservas?: Prisma.ReservaCreateNestedManyWithoutUsuarioInput;
    pagosConfirmados?: Prisma.PagoCreateNestedManyWithoutConfirmadoPorInput;
};
export type UsuarioUncheckedCreateInput = {
    id?: string;
    correo: string;
    contrasenaHash: string;
    nombres: string;
    apellidos: string;
    telefonoWhatsApp?: string | null;
    paisResidencia?: string | null;
    rol?: $Enums.RolUsuario;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    reservas?: Prisma.ReservaUncheckedCreateNestedManyWithoutUsuarioInput;
    pagosConfirmados?: Prisma.PagoUncheckedCreateNestedManyWithoutConfirmadoPorInput;
};
export type UsuarioUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    telefonoWhatsApp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paisResidencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservas?: Prisma.ReservaUpdateManyWithoutUsuarioNestedInput;
    pagosConfirmados?: Prisma.PagoUpdateManyWithoutConfirmadoPorNestedInput;
};
export type UsuarioUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    telefonoWhatsApp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paisResidencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservas?: Prisma.ReservaUncheckedUpdateManyWithoutUsuarioNestedInput;
    pagosConfirmados?: Prisma.PagoUncheckedUpdateManyWithoutConfirmadoPorNestedInput;
};
export type UsuarioCreateManyInput = {
    id?: string;
    correo: string;
    contrasenaHash: string;
    nombres: string;
    apellidos: string;
    telefonoWhatsApp?: string | null;
    paisResidencia?: string | null;
    rol?: $Enums.RolUsuario;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type UsuarioUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    telefonoWhatsApp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paisResidencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    telefonoWhatsApp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paisResidencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasenaHash?: Prisma.SortOrder;
    nombres?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    telefonoWhatsApp?: Prisma.SortOrder;
    paisResidencia?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type UsuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasenaHash?: Prisma.SortOrder;
    nombres?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    telefonoWhatsApp?: Prisma.SortOrder;
    paisResidencia?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type UsuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasenaHash?: Prisma.SortOrder;
    nombres?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    telefonoWhatsApp?: Prisma.SortOrder;
    paisResidencia?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type UsuarioNullableScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput | null;
    isNot?: Prisma.UsuarioWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRolUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.RolUsuario;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UsuarioCreateNestedOneWithoutReservasInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutReservasInput, Prisma.UsuarioUncheckedCreateWithoutReservasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutReservasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneWithoutReservasNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutReservasInput, Prisma.UsuarioUncheckedCreateWithoutReservasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutReservasInput;
    upsert?: Prisma.UsuarioUpsertWithoutReservasInput;
    disconnect?: Prisma.UsuarioWhereInput | boolean;
    delete?: Prisma.UsuarioWhereInput | boolean;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutReservasInput, Prisma.UsuarioUpdateWithoutReservasInput>, Prisma.UsuarioUncheckedUpdateWithoutReservasInput>;
};
export type UsuarioCreateNestedOneWithoutPagosConfirmadosInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutPagosConfirmadosInput, Prisma.UsuarioUncheckedCreateWithoutPagosConfirmadosInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutPagosConfirmadosInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneWithoutPagosConfirmadosNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutPagosConfirmadosInput, Prisma.UsuarioUncheckedCreateWithoutPagosConfirmadosInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutPagosConfirmadosInput;
    upsert?: Prisma.UsuarioUpsertWithoutPagosConfirmadosInput;
    disconnect?: Prisma.UsuarioWhereInput | boolean;
    delete?: Prisma.UsuarioWhereInput | boolean;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutPagosConfirmadosInput, Prisma.UsuarioUpdateWithoutPagosConfirmadosInput>, Prisma.UsuarioUncheckedUpdateWithoutPagosConfirmadosInput>;
};
export type UsuarioCreateWithoutReservasInput = {
    id?: string;
    correo: string;
    contrasenaHash: string;
    nombres: string;
    apellidos: string;
    telefonoWhatsApp?: string | null;
    paisResidencia?: string | null;
    rol?: $Enums.RolUsuario;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    pagosConfirmados?: Prisma.PagoCreateNestedManyWithoutConfirmadoPorInput;
};
export type UsuarioUncheckedCreateWithoutReservasInput = {
    id?: string;
    correo: string;
    contrasenaHash: string;
    nombres: string;
    apellidos: string;
    telefonoWhatsApp?: string | null;
    paisResidencia?: string | null;
    rol?: $Enums.RolUsuario;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    pagosConfirmados?: Prisma.PagoUncheckedCreateNestedManyWithoutConfirmadoPorInput;
};
export type UsuarioCreateOrConnectWithoutReservasInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutReservasInput, Prisma.UsuarioUncheckedCreateWithoutReservasInput>;
};
export type UsuarioUpsertWithoutReservasInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutReservasInput, Prisma.UsuarioUncheckedUpdateWithoutReservasInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutReservasInput, Prisma.UsuarioUncheckedCreateWithoutReservasInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutReservasInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutReservasInput, Prisma.UsuarioUncheckedUpdateWithoutReservasInput>;
};
export type UsuarioUpdateWithoutReservasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    telefonoWhatsApp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paisResidencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pagosConfirmados?: Prisma.PagoUpdateManyWithoutConfirmadoPorNestedInput;
};
export type UsuarioUncheckedUpdateWithoutReservasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    telefonoWhatsApp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paisResidencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pagosConfirmados?: Prisma.PagoUncheckedUpdateManyWithoutConfirmadoPorNestedInput;
};
export type UsuarioCreateWithoutPagosConfirmadosInput = {
    id?: string;
    correo: string;
    contrasenaHash: string;
    nombres: string;
    apellidos: string;
    telefonoWhatsApp?: string | null;
    paisResidencia?: string | null;
    rol?: $Enums.RolUsuario;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    reservas?: Prisma.ReservaCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutPagosConfirmadosInput = {
    id?: string;
    correo: string;
    contrasenaHash: string;
    nombres: string;
    apellidos: string;
    telefonoWhatsApp?: string | null;
    paisResidencia?: string | null;
    rol?: $Enums.RolUsuario;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    reservas?: Prisma.ReservaUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutPagosConfirmadosInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutPagosConfirmadosInput, Prisma.UsuarioUncheckedCreateWithoutPagosConfirmadosInput>;
};
export type UsuarioUpsertWithoutPagosConfirmadosInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutPagosConfirmadosInput, Prisma.UsuarioUncheckedUpdateWithoutPagosConfirmadosInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutPagosConfirmadosInput, Prisma.UsuarioUncheckedCreateWithoutPagosConfirmadosInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutPagosConfirmadosInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutPagosConfirmadosInput, Prisma.UsuarioUncheckedUpdateWithoutPagosConfirmadosInput>;
};
export type UsuarioUpdateWithoutPagosConfirmadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    telefonoWhatsApp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paisResidencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservas?: Prisma.ReservaUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutPagosConfirmadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nombres?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    telefonoWhatsApp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paisResidencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservas?: Prisma.ReservaUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCountOutputType = {
    reservas: number;
    pagosConfirmados: number;
};
export type UsuarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservas?: boolean | UsuarioCountOutputTypeCountReservasArgs;
    pagosConfirmados?: boolean | UsuarioCountOutputTypeCountPagosConfirmadosArgs;
};
export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuarioCountOutputTypeCountReservasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservaWhereInput;
};
export type UsuarioCountOutputTypeCountPagosConfirmadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PagoWhereInput;
};
export type UsuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    correo?: boolean;
    contrasenaHash?: boolean;
    nombres?: boolean;
    apellidos?: boolean;
    telefonoWhatsApp?: boolean;
    paisResidencia?: boolean;
    rol?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    reservas?: boolean | Prisma.Usuario$reservasArgs<ExtArgs>;
    pagosConfirmados?: boolean | Prisma.Usuario$pagosConfirmadosArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    correo?: boolean;
    contrasenaHash?: boolean;
    nombres?: boolean;
    apellidos?: boolean;
    telefonoWhatsApp?: boolean;
    paisResidencia?: boolean;
    rol?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    correo?: boolean;
    contrasenaHash?: boolean;
    nombres?: boolean;
    apellidos?: boolean;
    telefonoWhatsApp?: boolean;
    paisResidencia?: boolean;
    rol?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectScalar = {
    id?: boolean;
    correo?: boolean;
    contrasenaHash?: boolean;
    nombres?: boolean;
    apellidos?: boolean;
    telefonoWhatsApp?: boolean;
    paisResidencia?: boolean;
    rol?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type UsuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "correo" | "contrasenaHash" | "nombres" | "apellidos" | "telefonoWhatsApp" | "paisResidencia" | "rol" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["usuario"]>;
export type UsuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservas?: boolean | Prisma.Usuario$reservasArgs<ExtArgs>;
    pagosConfirmados?: boolean | Prisma.Usuario$pagosConfirmadosArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuario";
    objects: {
        reservas: Prisma.$ReservaPayload<ExtArgs>[];
        pagosConfirmados: Prisma.$PagoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        correo: string;
        contrasenaHash: string;
        nombres: string;
        apellidos: string;
        telefonoWhatsApp: string | null;
        paisResidencia: string | null;
        rol: $Enums.RolUsuario;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioPayload, S>;
export type UsuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface UsuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuario'];
        meta: {
            name: 'Usuario';
        };
    };
    findUnique<T extends UsuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuarioFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuarioCreateArgs>(args: Prisma.SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuarioDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuarioUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuarioUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuarioCountArgs>(args?: Prisma.Subset<T, UsuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    groupBy<T extends UsuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuarioFieldRefs;
}
export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reservas<T extends Prisma.Usuario$reservasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pagosConfirmados<T extends Prisma.Usuario$pagosConfirmadosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$pagosConfirmadosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuarioFieldRefs {
    readonly id: Prisma.FieldRef<"Usuario", 'String'>;
    readonly correo: Prisma.FieldRef<"Usuario", 'String'>;
    readonly contrasenaHash: Prisma.FieldRef<"Usuario", 'String'>;
    readonly nombres: Prisma.FieldRef<"Usuario", 'String'>;
    readonly apellidos: Prisma.FieldRef<"Usuario", 'String'>;
    readonly telefonoWhatsApp: Prisma.FieldRef<"Usuario", 'String'>;
    readonly paisResidencia: Prisma.FieldRef<"Usuario", 'String'>;
    readonly rol: Prisma.FieldRef<"Usuario", 'RolUsuario'>;
    readonly activo: Prisma.FieldRef<"Usuario", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"Usuario", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Usuario", 'DateTime'>;
}
export type UsuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
};
export type UsuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
};
export type UsuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type Usuario$reservasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservaSelect<ExtArgs> | null;
    omit?: Prisma.ReservaOmit<ExtArgs> | null;
    include?: Prisma.ReservaInclude<ExtArgs> | null;
    where?: Prisma.ReservaWhereInput;
    orderBy?: Prisma.ReservaOrderByWithRelationInput | Prisma.ReservaOrderByWithRelationInput[];
    cursor?: Prisma.ReservaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservaScalarFieldEnum | Prisma.ReservaScalarFieldEnum[];
};
export type Usuario$pagosConfirmadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where?: Prisma.PagoWhereInput;
    orderBy?: Prisma.PagoOrderByWithRelationInput | Prisma.PagoOrderByWithRelationInput[];
    cursor?: Prisma.PagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
export type UsuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
};
