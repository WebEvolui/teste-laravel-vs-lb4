import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Pagamentos} from '../models';
import {PagamentosRepository} from '../repositories';

export class PagamentosController {
  constructor(
    @repository(PagamentosRepository)
    public pagamentosRepository : PagamentosRepository,
  ) {}

  @post('/pagamentos')
  @response(200, {
    description: 'Pagamentos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pagamentos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagamentos, {
            title: 'NewPagamentos',
            
          }),
        },
      },
    })
    pagamentos: Pagamentos,
  ): Promise<Pagamentos> {
    return this.pagamentosRepository.create(pagamentos);
  }

  @get('/pagamentos/count')
  @response(200, {
    description: 'Pagamentos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pagamentos) where?: Where<Pagamentos>,
  ): Promise<Count> {
    return this.pagamentosRepository.count(where);
  }

  @get('/pagamentos')
  @response(200, {
    description: 'Array of Pagamentos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pagamentos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pagamentos) filter?: Filter<Pagamentos>,
  ): Promise<Pagamentos[]> {
    return this.pagamentosRepository.find(filter);
  }

  @patch('/pagamentos')
  @response(200, {
    description: 'Pagamentos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagamentos, {partial: true}),
        },
      },
    })
    pagamentos: Pagamentos,
    @param.where(Pagamentos) where?: Where<Pagamentos>,
  ): Promise<Count> {
    return this.pagamentosRepository.updateAll(pagamentos, where);
  }

  @get('/pagamentos/{id}')
  @response(200, {
    description: 'Pagamentos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pagamentos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pagamentos, {exclude: 'where'}) filter?: FilterExcludingWhere<Pagamentos>
  ): Promise<Pagamentos> {
    return this.pagamentosRepository.findById(id, filter);
  }

  @patch('/pagamentos/{id}')
  @response(204, {
    description: 'Pagamentos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagamentos, {partial: true}),
        },
      },
    })
    pagamentos: Pagamentos,
  ): Promise<void> {
    await this.pagamentosRepository.updateById(id, pagamentos);
  }

  @put('/pagamentos/{id}')
  @response(204, {
    description: 'Pagamentos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pagamentos: Pagamentos,
  ): Promise<void> {
    await this.pagamentosRepository.replaceById(id, pagamentos);
  }

  @del('/pagamentos/{id}')
  @response(204, {
    description: 'Pagamentos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pagamentosRepository.deleteById(id);
  }
}
