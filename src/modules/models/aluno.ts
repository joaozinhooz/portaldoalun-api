import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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

    // @Column()
    //     area: Area

    @Column()
        notas: number
}
