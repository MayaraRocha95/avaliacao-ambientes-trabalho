import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { AppraisalModule } from './appraisal/appraisal.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true, 
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    AppraisalModule,
  ],
})
export class AppModule {}
