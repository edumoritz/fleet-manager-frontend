import { Observable, Subject } from "rxjs";
import { take } from "rxjs/operators";
import { PeopleFacade } from "./../facades/people.facade";
import { Injectable } from "@angular/core";
import { IGetPeopleResponse } from "@shared/interfaces/people";

@Injectable({
	providedIn: "root"
})
export class PeopleService {
	private indexSteps$ = new Subject<number>();

	constructor(private peopleFacade: PeopleFacade) {}

	getPeople(): Observable<IGetPeopleResponse> {
		return this.peopleFacade.listAll().pipe(take(1));
	}

	public getIndexStepsObservable() {
		return this.indexSteps$.asObservable();
	}
}
