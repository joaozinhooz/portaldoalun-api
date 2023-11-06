import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
}
