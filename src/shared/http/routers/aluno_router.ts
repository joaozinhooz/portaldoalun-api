import { Router } from 'express'
import { AlunoController } from '@modules/controllers/aluno_controller'

const alunoController = new AlunoController()

export default async (router: Router): Promise<void> => {
    router.post('/aluno', alunoController.cadastrarAluno)
    router.get('/aluno', alunoController.listarAluno)
    router.get('/aluno/:id', alunoController.buscarAlunoId)
}
