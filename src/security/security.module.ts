import { Module } from '@nestjs/common';

import { databaseProviders } from 'src/shared/providers/database.providers';
import { usersProviders } from './infrastructure/persistence/users.providers';

import { SecurityService } from './application/services/security.service';
import { SecurityController } from './application/handlers/security.controller';

@Module({
  controllers: [
    SecurityController
  ],
  providers: [
    SecurityService,
    ...databaseProviders,
    ...usersProviders
  ],
  exports: [
    ...databaseProviders,
    ...usersProviders,
  ],
})
export class SecurityModule {}
