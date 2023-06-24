export const pagination = async (query:any, filteredProducts:any) => {
	const {resPerPage, page} = query
	
	const defaultProducts = 2
	const productsPerPage = Number(resPerPage) || defaultProducts
	
	if(page) {
		filteredProducts.skip(productsPerPage * (page - 1))
	}


	filteredProducts.limit(productsPerPage)

	const products = await filteredProducts.exec()
	return {pagedProducts: products, resPerPage: productsPerPage}
}