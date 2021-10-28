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

	ngOnInit() {
		this.peopleService.getPeople().subscribe((peopleResponse) => {
			console.log(peopleResponse);

			this.data = peopleResponse.data;
		});
	}
}
