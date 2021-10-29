export class PaginationModel {
	count: number;
	currentPage: number;
	lastPage: number;
	nextPage?: number;
	prevPage?: number;

	constructor(
		count: number,
		currentPage: number,
		lastPage: number,
		nextPage?: number,
		prevPage?: number
	) {
		this.count = count;
		this.currentPage = currentPage;
		this.lastPage = lastPage;
		this.nextPage = nextPage;
		this.prevPage = prevPage;
	}
}
