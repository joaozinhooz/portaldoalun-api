import { AppDataSource } from '@config/app_data_source'
import { Professor } from '@modules/models/professor'

type AddProfessorModels = {
    nome: string
    email: string
    senha: string
    area: Area
}

export class ProfessorServices {
    async cadastrar (data: AddProfessorModels): Promise<void> {
        const professorRepository = AppDataSource.getRepository(Professor)
        const professor = professorRepository.create(data)
        await professorRepository.save(professor)
    
    }
}