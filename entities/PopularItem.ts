// src/entities/PopularItem.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PopularItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("decimal", { precision: 5, scale: 2 })
    price: number;

    @Column()
    imageUrl: string;
}