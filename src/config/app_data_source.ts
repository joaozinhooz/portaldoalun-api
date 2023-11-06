import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: '.database.sqlite3',
  synchronize: true,
  entities: ['../modules/models/*.{ts,js}']
})
