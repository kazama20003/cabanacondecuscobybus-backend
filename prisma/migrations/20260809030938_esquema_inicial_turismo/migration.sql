-- CreateEnum
CREATE TYPE "RolUsuario" AS ENUM ('CLIENTE', 'OPERADOR', 'ADMINISTRADOR');

-- CreateEnum
CREATE TYPE "EstadoSalida" AS ENUM ('BORRADOR', 'A_LA_VENTA', 'PENDIENTE_DE_MINIMO', 'CONFIRMADA', 'EN_CURSO', 'FINALIZADA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "EstadoReserva" AS ENUM ('PENDIENTE_PAGO', 'ADELANTO_PAGADO', 'SALDO_PENDIENTE', 'PAGO_TOTAL_PAGADO', 'CONFIRMADA', 'REPROGRAMADA', 'CANCELADA', 'COMPLETADA', 'VENCIDA');

-- CreateEnum
CREATE TYPE "EstadoPago" AS ENUM ('PENDIENTE', 'APROBADO', 'RECHAZADO', 'REEMBOLSADO');

-- CreateEnum
CREATE TYPE "MetodoPago" AS ENUM ('IZIPAY', 'TRANSFERENCIA', 'EFECTIVO_OFICINA');

-- CreateEnum
CREATE TYPE "Moneda" AS ENUM ('PEN', 'USD');

-- CreateEnum
CREATE TYPE "TipoVehiculo" AS ENUM ('PROPIO', 'TERCERO');

-- CreateEnum
CREATE TYPE "EstadoTraduccion" AS ENUM ('BORRADOR', 'PUBLICADA');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" UUID NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena_hash" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "telefono_whatsapp" TEXT,
    "pais_residencia" TEXT,
    "rol" "RolUsuario" NOT NULL DEFAULT 'CLIENTE',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transportes" (
    "id" UUID NOT NULL,
    "slug" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "origen_nombre" TEXT NOT NULL,
    "origen_latitud" DECIMAL(10,7) NOT NULL,
    "origen_longitud" DECIMAL(10,7) NOT NULL,
    "destino_nombre" TEXT NOT NULL,
    "destino_latitud" DECIMAL(10,7) NOT NULL,
    "destino_longitud" DECIMAL(10,7) NOT NULL,
    "duracion_minutos_estimada" INTEGER NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transportes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paradas_transporte" (
    "id" UUID NOT NULL,
    "transporte_id" UUID NOT NULL,
    "orden" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "latitud" DECIMAL(10,7) NOT NULL,
    "longitud" DECIMAL(10,7) NOT NULL,
    "minutos" INTEGER NOT NULL,

    CONSTRAINT "paradas_transporte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tours" (
    "id" UUID NOT NULL,
    "slug" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "destino_nombre" TEXT NOT NULL,
    "destino_latitud" DECIMAL(10,7) NOT NULL,
    "destino_longitud" DECIMAL(10,7) NOT NULL,
    "duracion_minutos" INTEGER NOT NULL,
    "requiere_guia" BOOLEAN NOT NULL DEFAULT true,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itinerarios_tour" (
    "id" UUID NOT NULL,
    "tour_id" UUID NOT NULL,
    "orden" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "latitud" DECIMAL(10,7),
    "longitud" DECIMAL(10,7),

    CONSTRAINT "itinerarios_tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehiculos" (
    "id" UUID NOT NULL,
    "placa" TEXT NOT NULL,
    "tipo_propiedad" "TipoVehiculo" NOT NULL,
    "proveedor" TEXT,
    "capacidad" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vehiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salidas_transporte" (
    "id" UUID NOT NULL,
    "transporte_id" UUID NOT NULL,
    "vehiculo_id" UUID,
    "fecha_hora_salida" TIMESTAMP(3) NOT NULL,
    "fecha_hora_llegada" TIMESTAMP(3),
    "capacidad" INTEGER NOT NULL,
    "minimo_pasajeros" INTEGER NOT NULL DEFAULT 2,
    "precio_pen" DECIMAL(10,2) NOT NULL,
    "precio_usd" DECIMAL(10,2) NOT NULL,
    "permite_adelanto" BOOLEAN NOT NULL DEFAULT true,
    "porcentaje_adelanto" INTEGER NOT NULL DEFAULT 50,
    "estado" "EstadoSalida" NOT NULL DEFAULT 'BORRADOR',
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "salidas_transporte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salidas_tour" (
    "id" UUID NOT NULL,
    "tour_id" UUID NOT NULL,
    "fecha_hora_salida" TIMESTAMP(3) NOT NULL,
    "capacidad" INTEGER NOT NULL,
    "minimo_pasajeros" INTEGER NOT NULL DEFAULT 1,
    "precio_pen" DECIMAL(10,2) NOT NULL,
    "precio_usd" DECIMAL(10,2) NOT NULL,
    "permite_adelanto" BOOLEAN NOT NULL DEFAULT true,
    "porcentaje_adelanto" INTEGER NOT NULL DEFAULT 50,
    "estado" "EstadoSalida" NOT NULL DEFAULT 'BORRADOR',
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "salidas_tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservas" (
    "id" UUID NOT NULL,
    "codigo" TEXT NOT NULL,
    "usuario_id" UUID,
    "salida_transporte_id" UUID,
    "salida_tour_id" UUID,
    "correo_contacto" TEXT NOT NULL,
    "telefono_whatsapp" TEXT NOT NULL,
    "pais_residencia" TEXT,
    "cantidad_pasajeros" INTEGER NOT NULL,
    "moneda" "Moneda" NOT NULL,
    "monto_total" DECIMAL(10,2) NOT NULL,
    "monto_adelanto" DECIMAL(10,2) NOT NULL,
    "monto_saldo" DECIMAL(10,2) NOT NULL,
    "estado" "EstadoReserva" NOT NULL DEFAULT 'PENDIENTE_PAGO',
    "token_gestion_invitado" TEXT NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pasajeros_reserva" (
    "id" UUID NOT NULL,
    "reserva_id" UUID NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,
    "tipo_documento" TEXT NOT NULL,
    "numero_documento" TEXT NOT NULL,

    CONSTRAINT "pasajeros_reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagos" (
    "id" UUID NOT NULL,
    "reserva_id" UUID NOT NULL,
    "confirmado_por_id" UUID,
    "monto" DECIMAL(10,2) NOT NULL,
    "moneda" "Moneda" NOT NULL,
    "metodo" "MetodoPago" NOT NULL,
    "estado" "EstadoPago" NOT NULL DEFAULT 'PENDIENTE',
    "es_adelanto" BOOLEAN NOT NULL DEFAULT false,
    "codigo_operacion" TEXT,
    "url_comprobante" TEXT,
    "referencia_proveedor" TEXT,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmado_en" TIMESTAMP(3),

    CONSTRAINT "pagos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historial_reservas" (
    "id" UUID NOT NULL,
    "reserva_id" UUID NOT NULL,
    "estado" "EstadoReserva" NOT NULL,
    "detalle" TEXT,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historial_reservas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traducciones_transporte" (
    "id" UUID NOT NULL,
    "transporte_id" UUID NOT NULL,
    "idioma" VARCHAR(5) NOT NULL,
    "titulo" TEXT NOT NULL,
    "resumen" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estado" "EstadoTraduccion" NOT NULL DEFAULT 'BORRADOR',

    CONSTRAINT "traducciones_transporte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traducciones_tour" (
    "id" UUID NOT NULL,
    "tour_id" UUID NOT NULL,
    "idioma" VARCHAR(5) NOT NULL,
    "titulo" TEXT NOT NULL,
    "resumen" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "que_llevar" TEXT,
    "estado" "EstadoTraduccion" NOT NULL DEFAULT 'BORRADOR',

    CONSTRAINT "traducciones_tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagenes" (
    "id" UUID NOT NULL,
    "transporte_id" UUID,
    "tour_id" UUID,
    "url" TEXT NOT NULL,
    "texto_alterno" TEXT,
    "orden" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "imagenes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "transportes_slug_key" ON "transportes"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "paradas_transporte_transporte_id_orden_key" ON "paradas_transporte"("transporte_id", "orden");

-- CreateIndex
CREATE UNIQUE INDEX "tours_slug_key" ON "tours"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "itinerarios_tour_tour_id_orden_key" ON "itinerarios_tour"("tour_id", "orden");

-- CreateIndex
CREATE UNIQUE INDEX "vehiculos_placa_key" ON "vehiculos"("placa");

-- CreateIndex
CREATE INDEX "salidas_transporte_transporte_id_fecha_hora_salida_idx" ON "salidas_transporte"("transporte_id", "fecha_hora_salida");

-- CreateIndex
CREATE INDEX "salidas_tour_tour_id_fecha_hora_salida_idx" ON "salidas_tour"("tour_id", "fecha_hora_salida");

-- CreateIndex
CREATE UNIQUE INDEX "reservas_codigo_key" ON "reservas"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "reservas_token_gestion_invitado_key" ON "reservas"("token_gestion_invitado");

-- CreateIndex
CREATE INDEX "reservas_usuario_id_idx" ON "reservas"("usuario_id");

-- CreateIndex
CREATE INDEX "reservas_salida_transporte_id_idx" ON "reservas"("salida_transporte_id");

-- CreateIndex
CREATE INDEX "reservas_salida_tour_id_idx" ON "reservas"("salida_tour_id");

-- CreateIndex
CREATE UNIQUE INDEX "pagos_referencia_proveedor_key" ON "pagos"("referencia_proveedor");

-- CreateIndex
CREATE INDEX "pagos_reserva_id_idx" ON "pagos"("reserva_id");

-- CreateIndex
CREATE UNIQUE INDEX "traducciones_transporte_transporte_id_idioma_key" ON "traducciones_transporte"("transporte_id", "idioma");

-- CreateIndex
CREATE UNIQUE INDEX "traducciones_tour_tour_id_idioma_key" ON "traducciones_tour"("tour_id", "idioma");

-- AddForeignKey
ALTER TABLE "paradas_transporte" ADD CONSTRAINT "paradas_transporte_transporte_id_fkey" FOREIGN KEY ("transporte_id") REFERENCES "transportes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itinerarios_tour" ADD CONSTRAINT "itinerarios_tour_tour_id_fkey" FOREIGN KEY ("tour_id") REFERENCES "tours"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salidas_transporte" ADD CONSTRAINT "salidas_transporte_transporte_id_fkey" FOREIGN KEY ("transporte_id") REFERENCES "transportes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salidas_transporte" ADD CONSTRAINT "salidas_transporte_vehiculo_id_fkey" FOREIGN KEY ("vehiculo_id") REFERENCES "vehiculos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salidas_tour" ADD CONSTRAINT "salidas_tour_tour_id_fkey" FOREIGN KEY ("tour_id") REFERENCES "tours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_salida_transporte_id_fkey" FOREIGN KEY ("salida_transporte_id") REFERENCES "salidas_transporte"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_salida_tour_id_fkey" FOREIGN KEY ("salida_tour_id") REFERENCES "salidas_tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pasajeros_reserva" ADD CONSTRAINT "pasajeros_reserva_reserva_id_fkey" FOREIGN KEY ("reserva_id") REFERENCES "reservas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos" ADD CONSTRAINT "pagos_reserva_id_fkey" FOREIGN KEY ("reserva_id") REFERENCES "reservas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos" ADD CONSTRAINT "pagos_confirmado_por_id_fkey" FOREIGN KEY ("confirmado_por_id") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historial_reservas" ADD CONSTRAINT "historial_reservas_reserva_id_fkey" FOREIGN KEY ("reserva_id") REFERENCES "reservas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traducciones_transporte" ADD CONSTRAINT "traducciones_transporte_transporte_id_fkey" FOREIGN KEY ("transporte_id") REFERENCES "transportes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traducciones_tour" ADD CONSTRAINT "traducciones_tour_tour_id_fkey" FOREIGN KEY ("tour_id") REFERENCES "tours"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagenes" ADD CONSTRAINT "imagenes_transporte_id_fkey" FOREIGN KEY ("transporte_id") REFERENCES "transportes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagenes" ADD CONSTRAINT "imagenes_tour_id_fkey" FOREIGN KEY ("tour_id") REFERENCES "tours"("id") ON DELETE CASCADE ON UPDATE CASCADE;
