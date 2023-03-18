import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class EntityGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { title, description } = context.switchToHttp().getRequest().body;
    return title && description;
  }
}
