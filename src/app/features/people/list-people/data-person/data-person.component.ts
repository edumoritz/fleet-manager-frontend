import { Component, Input, OnInit } from "@angular/core";
import { IGetPeople } from "@shared/interfaces/people";

@Component({
	selector: "fleet-data-person",
	templateUrl: "./data-person.component.html",
	styleUrls: ["./data-person.component.scss"]
})
export class DataPersonComponent implements OnInit {
	@Input() person: IGetPeople;
	@Input() index: number;

	constructor() {}

	ngOnInit() {}
}
