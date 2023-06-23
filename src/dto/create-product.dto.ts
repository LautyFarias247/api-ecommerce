import { IsString,IsNumber,IsOptional,IsNotEmpty,IsObject } from 'class-validator'

export class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	name: string;
	@IsString()
	@IsNotEmpty()
	category: string;
	@IsNumber()
	@IsNotEmpty()
	price: number;
	@IsObject()
	@IsOptional()
	image: object
	@IsNotEmpty()
	@IsNumber()
	stock: number
}