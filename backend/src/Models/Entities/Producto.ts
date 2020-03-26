import { Entity, Column, PrimaryGeneratedColumn, Db } from 'typeorm'

@Entity({ name: "productos" })
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    producto: string;
    
    @Column("float")
    precio: number;
}
// Modelos