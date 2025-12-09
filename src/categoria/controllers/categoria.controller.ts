import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";
import { Categoria } from "../entities/categoria.entity";

@Controller("/categorias")
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

    @Get()
    async findAll(): Promise<Categoria[]> {
        return await this.categoriaService.findAll();
    }

    @Get("/:id")
    async findById(@Param("id", ParseIntPipe) id: number): Promise<Categoria> {
        return await this.categoriaService.findById(id);
    }

    @Get("/ativas")
    async categoriasAtivas(): Promise<Categoria[]> {
        return await this.categoriaService.categoriasAtivas();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() categoria: Categoria): Promise<Categoria> {
        return await this.categoriaService.create(categoria);
    }

    @Put()
    async update(@Body() categoria: Categoria): Promise<Categoria> {
        return await this.categoriaService.update(categoria);
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param("id", ParseIntPipe) id: number) {
        return await this.categoriaService.delete(id);
    }
}
