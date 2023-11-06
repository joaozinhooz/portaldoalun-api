import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Turma } from '../../../src/modules/models/turma'

@Entity('alunos')
export class Aluno {
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        nome: string

    @Column({ unique: true })
        email: string

    @Column()
        senha: string

    @Column()
        turma: Turma

    @Column()
        notas: number
}
