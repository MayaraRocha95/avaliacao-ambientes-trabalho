import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppraisalController } from './appraisal.controller';
import { Appraisal } from './entities/appraisal.entity';
import { AppraisalService } from './apprasail.service';

@Module({
  imports: [TypeOrmModule.forFeature([Appraisal])],
  controllers: [AppraisalController],
  providers: [AppraisalService],
})
export class AppraisalModule {}
