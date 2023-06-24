export const productFilters = (query: any) => {
	const { keyword,subcategory,category,minPrice,maxPrice,rating } = query

	let filters: any = {}
	if (keyword) {
		filters.name = new RegExp(keyword,'i');
	}

	if (subcategory) {
		filters.subcategory = subcategory;
	}

	if (category) {
		filters.category = category;
	}

	if (minPrice && maxPrice) {
		filters.price = { $gte: minPrice,$lte: maxPrice };
	} else if (minPrice) {
		filters.price = { $gte: minPrice };
	} else if (maxPrice) {
		filters.price = { $lte: maxPrice };
	}

	if (rating) {
		filters.rating = rating
	}

	return filters
}