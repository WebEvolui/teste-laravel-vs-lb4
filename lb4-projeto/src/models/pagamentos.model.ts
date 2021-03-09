import {Entity, model, property} from '@loopback/repository';

@model()
export class Pagamentos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  descricao: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;


  constructor(data?: Partial<Pagamentos>) {
    super(data);
  }
}

export interface PagamentosRelations {
  // describe navigational properties here
}

export type PagamentosWithRelations = Pagamentos & PagamentosRelations;
