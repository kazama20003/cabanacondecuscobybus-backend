-- Traducciones por idioma de paradas de transporte e itinerarios de tour
ALTER TABLE "paradas_transporte" ADD COLUMN "nombre_i18n" JSONB;
ALTER TABLE "paradas_transporte" ADD COLUMN "descripcion_i18n" JSONB;

ALTER TABLE "itinerarios_tour" ADD COLUMN "titulo_i18n" JSONB;
ALTER TABLE "itinerarios_tour" ADD COLUMN "descripcion_i18n" JSONB;
