// src/entities/Restaurant.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('restaurant') // Note the lowercase name matching the table name
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("decimal", { precision: 2, scale: 1 })
    rating: number;

    @Column({ name: 'reviewCount' })
    reviewCount: number;

    @Column({ name: 'deliveryTime' })
    deliveryTime: string;

    @Column()
    categories: string;

    @Column({ name: 'imageUrl' })
    imageUrl: string;
}