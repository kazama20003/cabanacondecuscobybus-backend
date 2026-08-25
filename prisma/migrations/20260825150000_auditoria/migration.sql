-- Auditoría de acciones del panel (retención 30 días vía cron)
CREATE TABLE "auditoria" (
    "id" UUID NOT NULL,
    "usuario_id" UUID,
    "accion" TEXT NOT NULL,
    "entidad" TEXT NOT NULL,
    "entidad_id" TEXT,
    "descripcion" TEXT NOT NULL,
    "detalle" JSONB,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auditoria_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "auditoria_creado_en_idx" ON "auditoria"("creado_en");
CREATE INDEX "auditoria_entidad_creado_en_idx" ON "auditoria"("entidad", "creado_en");

ALTER TABLE "auditoria" ADD CONSTRAINT "auditoria_usuario_id_fkey"
    FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
