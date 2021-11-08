export interface IGetPeopleResponse {
	count: number;
	currentPage: number;
	data: IGetPeople[];
	lastPage: number;
	nextPage?: number;
	prevPage?: number;
}

export interface IGetPeople {
	category: string;
	cpf: string;
	due_date: string;
	email: string;
	full_number: string;
	id: number;
	id_cnh: number;
	id_phone: number;
	last_name: string;
	name: string;
	registration_number: string;
}
