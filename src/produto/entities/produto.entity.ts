import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

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

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
    categoria: Categoria;
}