import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PackingModule } from './packing/packing.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PackingModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
