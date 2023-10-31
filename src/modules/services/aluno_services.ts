import { AppDataSource } from '@config/app_data_source'
import { Aluno } from '@modules/models/aluno'

export class AlunoServices {
    async cadastrar (nome: string, turma: string, notas: number): Promise<void> {
        const alunoRepository = AppDataSource.getRepository(Aluno)
        const aluno = alunoRepository.create({ nome, turma, notas })
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
