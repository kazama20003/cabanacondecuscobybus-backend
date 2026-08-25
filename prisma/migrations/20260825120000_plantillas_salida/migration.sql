-- Plantillas de salida recurrente (horarios por días de semana con vigencia)
CREATE TABLE "plantillas_salida" (
    "id" UUID NOT NULL,
    "transporte_id" UUID,
    "tour_id" UUID,
    "vehiculo_id" UUID,
    "hora_salida" TEXT NOT NULL,
    "dias_semana" INTEGER[],
    "fecha_desde" DATE NOT NULL,
    "fecha_hasta" DATE,
    "capacidad" INTEGER NOT NULL,
    "minimo_pasajeros" INTEGER NOT NULL DEFAULT 1,
    "precio_pen" DECIMAL(10,2) NOT NULL,
    "precio_usd" DECIMAL(10,2) NOT NULL,
    "permite_adelanto" BOOLEAN NOT NULL DEFAULT true,
    "porcentaje_adelanto" INTEGER NOT NULL DEFAULT 50,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plantillas_salida_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "plantillas_salida_transporte_id_idx" ON "plantillas_salida"("transporte_id");
CREATE INDEX "plantillas_salida_tour_id_idx" ON "plantillas_salida"("tour_id");

ALTER TABLE "plantillas_salida" ADD CONSTRAINT "plantillas_salida_transporte_id_fkey"
    FOREIGN KEY ("transporte_id") REFERENCES "transportes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "plantillas_salida" ADD CONSTRAINT "plantillas_salida_tour_id_fkey"
    FOREIGN KEY ("tour_id") REFERENCES "tours"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "plantillas_salida" ADD CONSTRAINT "plantillas_salida_vehiculo_id_fkey"
    FOREIGN KEY ("vehiculo_id") REFERENCES "vehiculos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Vínculo de salidas generadas con su plantilla
ALTER TABLE "salidas_transporte" ADD COLUMN "plantilla_id" UUID;
ALTER TABLE "salidas_transporte" ADD CONSTRAINT "salidas_transporte_plantilla_id_fkey"
    FOREIGN KEY ("plantilla_id") REFERENCES "plantillas_salida"("id") ON DELETE SET NULL ON UPDATE CASCADE;
CREATE UNIQUE INDEX "salidas_transporte_plantilla_id_fecha_hora_salida_key"
    ON "salidas_transporte"("plantilla_id", "fecha_hora_salida");

ALTER TABLE "salidas_tour" ADD COLUMN "plantilla_id" UUID;
ALTER TABLE "salidas_tour" ADD CONSTRAINT "salidas_tour_plantilla_id_fkey"
    FOREIGN KEY ("plantilla_id") REFERENCES "plantillas_salida"("id") ON DELETE SET NULL ON UPDATE CASCADE;
CREATE UNIQUE INDEX "salidas_tour_plantilla_id_fecha_hora_salida_key"
    ON "salidas_tour"("plantilla_id", "fecha_hora_salida");

-- Exactamente un servicio por plantilla
ALTER TABLE "plantillas_salida" ADD CONSTRAINT "plantillas_salida_un_servicio_chk"
    CHECK (("transporte_id" IS NOT NULL)::int + ("tour_id" IS NOT NULL)::int = 1);
