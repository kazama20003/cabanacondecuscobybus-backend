-- Detalle de "qué incluye / no incluye" el servicio (tarifas de ingreso, almuerzo, etc.).
-- Texto multilínea traducible: una línea por ítem.
ALTER TABLE "traducciones_transporte"
  ADD COLUMN "incluye" TEXT,
  ADD COLUMN "no_incluye" TEXT;

ALTER TABLE "traducciones_tour"
  ADD COLUMN "incluye" TEXT,
  ADD COLUMN "no_incluye" TEXT;
