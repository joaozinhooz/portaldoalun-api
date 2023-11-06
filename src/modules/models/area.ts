import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('areas')
export class Area {
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        nome: string

    @Column()
        materias: string
}
