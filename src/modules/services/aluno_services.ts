import { AppDataSource } from '@config/app_data_source'
import { Aluno } from '@modules/models/aluno'

type AddAlunoModels = {
    nome: string
    email: string
    senha: string
    // @Column()
    //     area: Area
    notas: number
}

export class AlunoServices {
    async cadastrar (data: AddAlunoModels): Promise<void> {
        const alunoRepository = AppDataSource.getRepository(Aluno)
        const aluno = alunoRepository.create(data)
        await alunoRepository.save(aluno)
    }

    async listar (): Promise<Aluno[]> {
        const alunoRepository = AppDataSource.getRepository(Aluno)
        const lista = await alunoRepository.find({})
        return lista
    }

    async buscarAlunoId (id: number): Promise<Aluno | null> {
        const categoriaRepository = AppDataSource.getRepository(Aluno)
        return await categoriaRepository.findOneBy({ id })
    }
}
