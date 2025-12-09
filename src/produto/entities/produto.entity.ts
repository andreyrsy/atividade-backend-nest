import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("produto")
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome: string;

    @Column({ length: 1000 })
    descricao: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    preco: number;

    @Column()
    quantidade: number;

    @Column({ nullable: true })
    foto: string;

    @Column({ default: true })
    ativo: boolean;
}