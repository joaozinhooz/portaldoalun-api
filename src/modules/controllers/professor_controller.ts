import { ProfessorServices } from '@modules/services/professor_service'
import { Request, Response } from 'express'

export class ProfessorController {
    async cadastrarProfessor (request: Request, response: Response): Promise<Response> {
        const servicesProfessor = new ProfessorServices()
        await servicesProfessor.cadastrar(request.body)
        return response.json().status(201)
    
    }
}