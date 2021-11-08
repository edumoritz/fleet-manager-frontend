import { Component, Input, OnInit } from "@angular/core";
import { PaginationModel } from "@model/pagination";
import { IGetPeople } from "@shared/interfaces/people";

@Component({
	selector: "fleet-data-person",
	templateUrl: "./data-person.component.html",
	styleUrls: ["./data-person.component.scss"]
})
export class DataPersonComponent implements OnInit {
	@Input() listPeople: IGetPeople[];
	@Input() pagination: PaginationModel;

	first = 0;

	rows = 10;

	constructor() {}

	ngOnInit() {}

	next() {
		this.first = this.first + this.rows;
	}

	prev() {
		this.first = this.first - this.rows;
	}

	isLastPage(): boolean {
		return this.listPeople
			? this.first === this.listPeople.length - this.rows
			: true;
	}

	isFirstPage(): boolean {
		return this.listPeople ? this.first === 0 : true;
	}
}
