import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Burger {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 400 })
	name: string;

	@Column('varchar', { length: 1000 })
	description: string;

	@Column('text')
	imageUrl: string;
}
