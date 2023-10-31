import { AlunoServices } from '@modules/services/aluno_services'
import { type Request, type Response } from 'express'

export class AlunoController {
    async cadastrarAluno (request: Request, response: Response): Promise<Response> {
        const servicesAluno = new AlunoServices()
        const { nome, turma, notas } = request.body
        await servicesAluno.cadastrar(nome, turma, notas)
        return response.json().status(201)
    }

    async listarAluno (request: Request, response: Response): Promise<Response> {
        const servicesAluno = new AlunoServices()
        const alunos = await servicesAluno.listar()
        return response.json(alunos)
    }

    async buscarAlunoId (request: Request, response: Response): Promise<Response> {
        const servicesAluno = new AlunoServices()
        const aluno = await servicesAluno.buscarAlunoId(parseInt(request.params.id))
        return response.json(aluno)
    }
}
