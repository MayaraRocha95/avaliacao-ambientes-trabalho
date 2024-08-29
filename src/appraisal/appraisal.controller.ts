import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { CreateAppraisalDto } from './dto/create-appraisal.dto';
import { Appraisal } from './entities/appraisal.entity';
import { AppraisalService } from './apprasail.service';

@Controller('avaliacoes')
export class AppraisalController {
  constructor(private readonly appraisalService: AppraisalService) {}

  @Post()
  create(@Body() createAppraisalDto: CreateAppraisalDto): Promise<Appraisal> {
    return this.appraisalService.create(createAppraisalDto);
  }

  @Get()
  findAll(): Promise<Appraisal[]> {
    return this.appraisalService.findAll();
  }

  @Get('pesquisa')
  findByCompany(@Query('nomeEmpresa') nomeEmpresa: string): Promise<Appraisal[]> {
    return this.appraisalService.findByCompany(nomeEmpresa);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ message: string }> {
    return this.appraisalService.remove(id);
  }
}
