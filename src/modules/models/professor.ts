import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Area } from './area'

@Entity('professores')
export class Professor {
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        nome: string

    @Column({ unique: true })
        email: string

    @Column()
        senha: string

    @Column({ array: true })
        areas: Area[]
}
