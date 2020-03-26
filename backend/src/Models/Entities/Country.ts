import { Entity, Column, PrimaryGeneratedColumn, Db } from 'typeorm'

@Entity({ name: "countries" })
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;
    
    @Column()
    confirmed: number;

    @Column()
    deaths: number;

    @Column("float")
    mortality: number;
}
// Modelos