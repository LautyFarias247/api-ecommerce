import { Controller, Get, Post, Put, Delete, Body, Param, ConflictException,NotFoundException, HttpCode } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from 'src/dto/category.dto';


@Controller('categories')
export class CategoriesController {
	constructor(private categoriesService: CategoriesService){}

	@Get()
	async findAllCategories() {
		return await this.categoriesService.findAllCategories()
	}

	@Post()
	async createProduct(@Body() body: CategoryDto) {
		try {
			return await this.categoriesService.createCategory(body)

		} catch (error) {
			console.log(error);
			
			if (error.code === 11000) throw new ConflictException('Categoría ya existente')
			throw error
		}
	}

	@Put(':_id')
	async updateCategory(@Param('_id') _id: string,@Body() body: CategoryDto) {
		const updatedCategory = await this.categoriesService.updateCategory(_id,body)
		if (!updatedCategory) throw new NotFoundException('Categoría no encontrada')
		return updatedCategory
	}
	@Delete(':_id')
	@HttpCode(204)
	async deleteCategory(@Param('_id') _id: string) {
		const Category = await this.categoriesService.deleteCategory(_id)
		if (!Category) throw new NotFoundException('Categoría no encontrada')
	}
}
