import { CanActivate, ExecutionContext } from '@nestjs/common';
import { GuardiaJwt } from './guardia-jwt';
export declare class GuardiaAdministrador implements CanActivate {
    private readonly guardiaJwt;
    constructor(guardiaJwt: GuardiaJwt);
    canActivate(contexto: ExecutionContext): boolean;
}
