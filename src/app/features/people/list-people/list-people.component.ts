import { PaginationModel } from "./../../../model/pagination";
import { Component, OnInit } from "@angular/core";
import { PeopleService } from "@core/services/people.service";
import { IGetPeople } from "@shared/interfaces/people";

@Component({
	selector: "fleet-list-people",
	templateUrl: "./list-people.component.html",
	styleUrls: ["./list-people.component.scss"]
})
export class ListPeopleComponent implements OnInit {
	constructor(private peopleService: PeopleService) {}

	data: IGetPeople[];
	pagination: any;

	ngOnInit() {
		this.peopleService.getPeople().subscribe((peopleResponse) => {
			console.log(peopleResponse);
			const { count, currentPage, lastPage, nextPage, prevPage, data } =
				peopleResponse;

			this.data = data;
			this.pagination = new PaginationModel(
				count,
				currentPage,
				lastPage,
				nextPage,
				prevPage
			);
		});
	}
}
