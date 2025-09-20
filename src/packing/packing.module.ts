import { Module } from '@nestjs/common';
import { PackingService } from './service/packing.service';
import { PackingController } from './controller/packing.controller';

@Module({
  providers: [PackingService],
  controllers: [PackingController],
})
export class PackingModule {}
