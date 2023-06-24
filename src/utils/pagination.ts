export const pagination = async (query:any, filteredProducts:any) => {
	const {resPerPage, page} = query
	
	const productsPerPage = resPerPage || 2
	
	if(page) {
		filteredProducts.skip(productsPerPage * (page - 1))
	}


	filteredProducts.limit(productsPerPage)

	const products = await filteredProducts.exec()
	return products
}