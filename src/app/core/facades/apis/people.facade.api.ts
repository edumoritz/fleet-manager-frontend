import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { IGetPeopleResponse } from "@shared/interfaces/people";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class PeopleFacadeApi {
	constructor(private http: HttpClient) {}

	listAll(): Observable<IGetPeopleResponse> {
		return this.http.get<IGetPeopleResponse>(
			`${environment.api_url}/people`
		);
	}
}
