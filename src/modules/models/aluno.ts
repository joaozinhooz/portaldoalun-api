import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('alunos')
export class Aluno {
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        nome: string

    @Column()
        turma: string

    @Column()
        notas: number
}
