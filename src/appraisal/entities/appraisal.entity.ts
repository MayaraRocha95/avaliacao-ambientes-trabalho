import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('avaliacoes')
export class Appraisal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeEmpresa: string;

  @Column()
  cargo: string;

  @Column()
  nivel: string;

  @Column()
  anonimo: boolean;

  @Column({ nullable: true })
  nomeAutor?: string;

  @Column()
  titulo: string;

  @Column({ length: 500 })
  texto: string;

  @Column('int')
  oportunidadesCarreira: number;

  @Column('int')
  remuneracaoBeneficios: number;

  @Column('int')
  culturaValores: number;

  @Column('int')
  liderancaAlta: number;

  @Column('int')
  diversidadeInclusao: number;

  @Column('int')
  auxilioCreche: number;

  @Column('int')
  salario: number;

  @Column('int')
  qualidadeVida: number;
}
