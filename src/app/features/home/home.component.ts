import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	runs = 50;

	clients = 30;

	conductors = 25;

	vehicles = 20;

	constructor() {}

	ngOnInit() {}
}
