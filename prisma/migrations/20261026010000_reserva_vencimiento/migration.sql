ALTER TABLE "reservas" ADD COLUMN "expira_en" TIMESTAMP(3);
ALTER TABLE "reservas" ADD COLUMN "acepto_politicas_en" TIMESTAMP(3);
ALTER TABLE "reservas" ADD COLUMN "version_politicas" TEXT;

-- Give existing pending reservations a fresh grace period during rollout.
UPDATE "reservas"
SET "expira_en" = NOW() + INTERVAL '20 minutes'
WHERE "estado" = 'PENDIENTE_PAGO';

CREATE INDEX "reservas_estado_expira_en_idx" ON "reservas"("estado", "expira_en");
