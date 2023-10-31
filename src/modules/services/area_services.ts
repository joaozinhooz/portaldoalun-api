import { AppDataSource } from '@config/app_data_source'
import { Area } from '@modules/models/area'

type AddAreaModels = {
    nome: string
    professor: string
    materias: string
}

export class AreaServices {
    async cadastrar (data: AddAreaModels): Promise<void> {
        const areaRepository = AppDataSource.getRepository(Area)
        const area = areaRepository.create(data)
        await areaRepository.save(area)
    }

    async listar (): Promise<Area[]> {
        const alunoRepository = AppDataSource.getRepository(Area)
        const lista = await alunoRepository.find({})
        return lista
    }

    async buscarAreaId (id: number): Promise<Area | null> {
        const categoriaRepository = AppDataSource.getRepository(Area)
        return await categoriaRepository.findOneBy({ id })
    }
}