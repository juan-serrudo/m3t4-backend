import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class InventoryService {
  constructor(private readonly configService: ConfigService) {}
}
