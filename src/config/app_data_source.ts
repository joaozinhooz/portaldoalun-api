import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: '.database.sqlite',
  synchronize: true,
  entities: ['./src/modules/models/*.{ts,js}']
})
