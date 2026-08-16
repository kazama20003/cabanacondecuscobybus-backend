ALTER TABLE "imagenes"
  ADD COLUMN "parada_transporte_id" UUID,
  ADD COLUMN "itinerario_tour_id" UUID;

ALTER TABLE "imagenes"
  ADD CONSTRAINT "imagenes_parada_transporte_id_fkey"
  FOREIGN KEY ("parada_transporte_id") REFERENCES "paradas_transporte"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "imagenes"
  ADD CONSTRAINT "imagenes_itinerario_tour_id_fkey"
  FOREIGN KEY ("itinerario_tour_id") REFERENCES "itinerarios_tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;
