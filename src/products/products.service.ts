import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Product} from '../schemas/product.schema'
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';

@Injectable()
export class ProductsService {
	constructor(@InjectModel(Product.name) private productsModel: Model<Product>){}

	async findAllProducts(){
		return await this.productsModel.find()
	}
	async createProduct(createProduct: CreateProductDto){
		const newProduct = await this.productsModel.create(createProduct)
		return newProduct
	}

	async findOneProduct(_id: string) {
		return await this.productsModel.findById(_id)
	}
	async deleteProduct(_id: string) {
		return await this.productsModel.findByIdAndDelete(_id)
	}
	async updateProduct(_id: string, product: UpdateProductDto) {
		return this.productsModel.findByIdAndUpdate(_id, product)
	}
}
