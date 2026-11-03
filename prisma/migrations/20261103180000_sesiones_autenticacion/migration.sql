CREATE TABLE "sesiones_autenticacion" (
    "id" UUID NOT NULL,
    "usuario_id" UUID NOT NULL,
    "token_hash" TEXT NOT NULL,
    "expira_en" TIMESTAMP(3) NOT NULL,
    "revocado_en" TIMESTAMP(3),
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sesiones_autenticacion_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "sesiones_autenticacion_token_hash_key"
    ON "sesiones_autenticacion"("token_hash");

CREATE INDEX "sesiones_autenticacion_usuario_id_expira_en_idx"
    ON "sesiones_autenticacion"("usuario_id", "expira_en");

ALTER TABLE "sesiones_autenticacion"
    ADD CONSTRAINT "sesiones_autenticacion_usuario_id_fkey"
    FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
