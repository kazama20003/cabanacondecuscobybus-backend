import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

/** Query params estándar de paginación: ?pagina=1&porPagina=20 */
export class PaginacionDto {
  @IsOptional() @Type(() => Number) @IsInt() @Min(1)
  pagina?: number = 1;

  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100)
  porPagina?: number = 20;
}

export interface Paginado<T> {
  datos: T[];
  total: number;
  pagina: number;
  porPagina: number;
  totalPaginas: number;
}

export function rangoPaginacion(paginacion: PaginacionDto) {
  const pagina = paginacion.pagina ?? 1;
  const porPagina = paginacion.porPagina ?? 20;
  return { skip: (pagina - 1) * porPagina, take: porPagina, pagina, porPagina };
}

export function construirPaginado<T>(
  datos: T[],
  total: number,
  pagina: number,
  porPagina: number,
): Paginado<T> {
  return {
    datos,
    total,
    pagina,
    porPagina,
    totalPaginas: Math.max(1, Math.ceil(total / porPagina)),
  };
}
