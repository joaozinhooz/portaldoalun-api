import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Professor } from './professor'

@Entity('areas')
export class Area {
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        nome: string

    @Column()
        materias: string

    @Column({ array: true })
        professores: Professor[]
}
