import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entity";
import { DeleteResult, Repository } from "typeorm";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ) {}

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find();
    }

    async findById(id: number): Promise<Produto> {
        const produto = await this.produtoRepository.findOne({ where: { id } });
        
        if (!produto) {
            throw new HttpException(`Produto com ID ${id} não encontrado`, HttpStatus.NOT_FOUND);
        }

        return produto;
    }

    async create(produto: Produto): Promise<Produto> {
        return await this.produtoRepository.save(produto);
    }

    async update(produto: Produto): Promise<Produto> {
        const produtoExistente = await this.produtoRepository.findOne({ where: { id: produto.id } });
        
        if (!produtoExistente) {
            throw new HttpException(`Produto com ID ${produto.id} não encontrado`, HttpStatus.NOT_FOUND);
        }

        return await this.produtoRepository.save(produto);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.produtoRepository.delete(id);
    }

    async produtosAtivos(): Promise<Produto[]> {
        return await this.produtoRepository.find({where: {ativo: true}});
    }
}