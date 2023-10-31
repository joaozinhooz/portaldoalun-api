import { AppDataSource } from '@config/app_data_source'

type AddAtividadeModels = {
    nome: string
    professor: string
    materias: string
}

export class AtividadeServices {
    async cadastrar (data: AddAtividadeModels): Promise<void> {
        const atividadeRepository = AppDataSource.getRepository(atividade)
        const atividade = atividadeRepository.create(data)
        await atividadeRepository.save(atividade)
    }

    async listar (): Promise<Atividade[]> {
        const atividadeRepository = AppDataSource.getRepository(atividade)
        const lista = await atividadeRepository.find({})
        return lista
    }

    async buscarAtividadeId (id: number): Promise<Atividade | null> {
        const categoriaRepository = AppDataSource.getRepository(atividade)
        return await categoriaRepository.findOneBy({ id })
    }
}