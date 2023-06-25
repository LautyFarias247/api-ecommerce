import { Controller, Get, Post, Put, Delete, ConflictException, NotFoundException, Param, Body, HttpCode } from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { SubcategoryDto } from 'src/dto/subcategory.dto';

@Controller('subcategories')
export class SubcategoriesController {
	constructor(private subcategoriesService: SubcategoriesService){}

	@Get()
	async findAllCategories() {
		return await this.subcategoriesService.findAllCategories()
	}

	@Post()
	async createProduct(@Body() body: SubcategoryDto) {
		try {
			return await this.subcategoriesService.createCategory(body)

		} catch (error) {
			console.log(error);
			
			if (error.code === 11000) throw new ConflictException('Categoría ya existente')
			throw error
		}
	}

	@Put(':_id')
	async updateCategory(@Param('_id') _id: string,@Body() body: SubcategoryDto) {
		const updatedCategory = await this.subcategoriesService.updateCategory(_id,body)
		if (!updatedCategory) throw new NotFoundException('Categoría no encontrada')
		return updatedCategory
	}
	@Delete(':_id')
	@HttpCode(204)
	async deleteCategory(@Param('_id') _id: string) {
		const Category = await this.subcategoriesService.deleteCategory(_id)
		if (!Category) throw new NotFoundException('Categoría no encontrada')
	}
}
