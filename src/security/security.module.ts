import { Module } from '@nestjs/common';

import { databaseProviders } from 'src/shared/providers/database.providers';
import { usersProviders } from './infrastructure/persistence/users.providers';

import { SecurityService } from './security.service';
import { SecurityController } from './security.controller';

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
