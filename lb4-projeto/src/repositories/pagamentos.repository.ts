import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMysqlDataSource} from '../datasources';
import {Pagamentos, PagamentosRelations} from '../models';

export class PagamentosRepository extends DefaultCrudRepository<
  Pagamentos,
  typeof Pagamentos.prototype.id,
  PagamentosRelations
> {
  constructor(
    @inject('datasources.db_mysql') dataSource: DbMysqlDataSource,
  ) {
    super(Pagamentos, dataSource);
  }
}
