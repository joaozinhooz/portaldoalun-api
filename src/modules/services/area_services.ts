import { AppDataSource } from '@config/app_data_source'
import { Area } from '@modules/models/area'
import { Professor } from '@modules/models/professor'

type AddAreaModels = {
    nome: string
    professor: Professor
    materias: string
}

export class AreaServices {

    async cadastrar (data: AddAreaModels): Promise<void> {
        const alunoRepository = AppDataSource.getRepository(Area)
        const aluno = alunoRepository.create(data)
        await alunoRepository.save(aluno)
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