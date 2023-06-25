import { Module } from '@nestjs/common';
import { SubcategoriesController } from './subcategories.controller';
import { SubcategoriesService } from './subcategories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Subcategory, SubcategorySchema } from 'src/schemas/subcategory.schema-';

@Module({
	imports:[MongooseModule.forFeature([
		{
			name: Subcategory.name,
			schema: SubcategorySchema
		}
	])],
  controllers: [SubcategoriesController],
  providers: [SubcategoriesService]
})
export class SubcategoriesModule {}
