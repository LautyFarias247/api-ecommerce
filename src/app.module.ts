import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';


@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.env`,
			isGlobal: true
		}),
		MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rvgswds.mongodb.net/database?retryWrites=true&w=majority`),
		ProductsModule],
})
export class AppModule { }
