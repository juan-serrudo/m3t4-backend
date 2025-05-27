import { DataSource } from 'typeorm';
import { Inventorys } from 'src/inventory/infrastructure/persistence/inventorys.entity';

export const inventorysProviders = [
  {
    provide: 'INVENTORYS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Inventorys),
    inject: ['DATA_SOURCE'],
  },
];
