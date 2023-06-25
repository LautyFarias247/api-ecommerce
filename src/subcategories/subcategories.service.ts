import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubcategoryDto } from 'src/dto/subcategory.dto';
import { Subcategory } from 'src/schemas/subcategory.schema-';

@Injectable()
export class SubcategoriesService {
	constructor(@InjectModel(Subcategory.name) private SubcategoriesModel: Model<Subcategory>) { }

	async findAllCategories() {
		const allSubcategories = await this.SubcategoriesModel.find()

		return allSubcategories
	}

	async createCategory(SubcategoryDto: SubcategoryDto) {
		const newSubcategory = await this.SubcategoriesModel.create(SubcategoryDto)
		return newSubcategory
	}

	async deleteCategory(_id: string) {
		return await this.SubcategoriesModel.findByIdAndDelete(_id)
	}
	
	async updateCategory(_id: string,Subcategory: SubcategoryDto) {
		return this.SubcategoriesModel.findByIdAndUpdate(_id,Subcategory,{ new: true })
	}
}
