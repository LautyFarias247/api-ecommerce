import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDto } from 'src/dto/category.dto';
import { Category } from 'src/schemas/category.schema';

@Injectable()
export class CategoriesService {
	constructor(@InjectModel(Category.name) private categoriesModel: Model<Category>) { }

	async findAllCategories() {
		const allCategories = await this.categoriesModel.find()

		return allCategories
	}

	async createCategory(categoryDto: CategoryDto) {
		const newCategory = await this.categoriesModel.create(categoryDto)
		return newCategory
	}

	async deleteCategory(_id: string) {
		return await this.categoriesModel.findByIdAndDelete(_id)
	}
	
	async updateCategory(_id: string,category: CategoryDto) {
		return this.categoriesModel.findByIdAndUpdate(_id,category,{ new: true })
	}
}
