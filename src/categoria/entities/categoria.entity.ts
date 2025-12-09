import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categoria")
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome: string;

    @Column({ length: 500 })
    descricao: string;

    @Column({ nullable: true })
    icone: string;

    @Column({ length: 7, nullable: true })
    cor: string;

    @Column({ default: 0 })
    ordem: number;

    @Column({ default: true })
    ativo: boolean;
}