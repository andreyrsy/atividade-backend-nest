import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { DeleteResult, Repository } from "typeorm";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ) {}

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }

    async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({ where: { id } });
        
        if (!categoria) {
            throw new HttpException(`Categoria com ID ${id} não encontrada`, HttpStatus.NOT_FOUND);
        }

        return categoria;
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria): Promise<Categoria> {
        const categoriaExistente = await this.categoriaRepository.findOne({ where: { id: categoria.id } });
        
        if (!categoriaExistente) {
            throw new HttpException(`Categoria com ID ${categoria.id} não encontrada`, HttpStatus.NOT_FOUND);
        }

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.categoriaRepository.delete(id);
    }

    async categoriasAtivas(): Promise<Categoria[]> {
        return await this.categoriaRepository.find({ where: { ativo: true } });
    }
}