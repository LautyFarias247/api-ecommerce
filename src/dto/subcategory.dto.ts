import { IsString,IsNotEmpty } from 'class-validator'

export class SubcategoryDto {
	@IsString()
	@IsNotEmpty()
	name: string;
}
