import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../service/produto.service";
import { Produto } from "../entities/produto.entity";

@Controller("/produtos")
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}

    @Get()
    async findAll(): Promise<Produto[]> {
        return await this.produtoService.findAll();
    }

    @Get("/:id")
    async findById(@Param("id", ParseIntPipe) id: number): Promise<Produto> {
        return await this.produtoService.findById(id);
    }

    @Get("/ativos")
    async produtosAtivos(): Promise<Produto[]> {
        return await this.produtoService.produtosAtivos();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() produto: Produto): Promise<Produto> {
        return await this.produtoService.create(produto);
    }

    @Put()
    async update(@Body() produto: Produto): Promise<Produto> {
        return await this.produtoService.update(produto);
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param("id", ParseIntPipe) id: number) {
        return await this.produtoService.delete(id);
    }
}