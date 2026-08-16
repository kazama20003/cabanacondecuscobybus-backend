const enviarCorreo = jest.fn();

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: enviarCorreo },
  })),
}));

import { NotificacionesService } from './notificaciones.service';

describe('NotificacionesService', () => {
  beforeEach(() => enviarCorreo.mockReset().mockResolvedValue({ data: { id: 'correo-1' } }));

  it('notifica al cliente y al administrador al crear una reserva', async () => {
    const servicio = new NotificacionesService({
      get: (clave: string) =>
        ({
          RESEND_API_KEY: 're_test',
          CORREO_REMITENTE: 'reservas@example.com',
          CORREO_ADMINISTRADOR: 'admin@example.com',
        })[clave],
    } as never);

    await servicio.reservaCreada({
      codigo: 'ITP-2026-ABC',
      correoContacto: 'cliente@example.com',
      cantidadPasajeros: 2,
      moneda: 'PEN',
      montoTotal: { toString: () => '150.00' },
      montoAdelanto: { toString: () => '75.00' },
    });

    expect(enviarCorreo).toHaveBeenCalledTimes(2);
    expect(enviarCorreo).toHaveBeenCalledWith(
      expect.objectContaining({ to: 'cliente@example.com', from: 'reservas@example.com' }),
    );
    expect(enviarCorreo).toHaveBeenCalledWith(
      expect.objectContaining({ to: 'admin@example.com', from: 'reservas@example.com' }),
    );
  });
});
