import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAppraisalDto } from './dto/create-appraisal.dto';
import { Appraisal } from './entities/appraisal.entity';

@Injectable()
export class AppraisalService {
  constructor(
    @InjectRepository(Appraisal)
    private readonly appraisalRepository: Repository<Appraisal>,
  ) {}

  create(createAppraisalDto: CreateAppraisalDto): Promise<Appraisal> {
    const appraisal = this.appraisalRepository.create(createAppraisalDto);
    return this.appraisalRepository.save(appraisal);
  }

  findAll(): Promise<Appraisal[]> {
    return this.appraisalRepository.find();
  }

  findByCompany(nomeEmpresa: string): Promise<Appraisal[]> {
    return this.appraisalRepository.find({ where: { nomeEmpresa } });
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.appraisalRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Avaliação com ID ${id} não encontrada`);
    }

    return { message: `Avaliação com ID ${id} foi deletada com sucesso` };
  }
}
