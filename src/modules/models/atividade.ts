import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Professor } from './professor'

@Entity('atividade')
export class Atividade {
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        nome: string

    @Column({ unique: true })
        professor: Professor

    @Column()
        materias: string

}