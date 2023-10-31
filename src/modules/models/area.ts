import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('area')
export class Area {
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        nome: string

    @Column({ unique: true })
        professor: Professor

    @Column()
        materias: string

}