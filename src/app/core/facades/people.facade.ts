import { PeopleFacadeApi } from "./apis/people.facade.api";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGetPeopleResponse } from "@shared/interfaces/people";

@Injectable({ providedIn: "root" })
export class PeopleFacade {
	constructor(private peopleApi: PeopleFacadeApi) {}

	listAll(): Observable<IGetPeopleResponse> {
		return this.peopleApi.listAll();
	}
}
