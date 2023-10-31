import { ProfessorController } from '@modules/controllers/professor_controller'
import { Router } from 'express'

const professorController = new ProfessorController()

export default async (router: Router): Promise<void> => {
    router.post('/aluno', professorController.cadastrarProfessor)
}
