import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class PersonRegisterStepsControl {
	private stepActive$: Subject<number> = new Subject();

	next(step: number) {
		this.stepActive$.next(step);
	}

	getIndexStep() {
		return this.stepActive$;
	}
}
