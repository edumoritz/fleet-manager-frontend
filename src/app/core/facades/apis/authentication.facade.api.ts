import { AuthenticationLoginDTO } from "./../../models/authentication/authentication.dto";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";
import { User } from "@core/models/user.model";

@Injectable({ providedIn: "root" })
export class AuthenticationFacadeApi {
	constructor(private http: HttpClient) {}

	login(user: User): Observable<AuthenticationLoginDTO> {
		return this.http.post<AuthenticationLoginDTO>(
			`${environment.api_url}/auth/signin`,
			user
		);
	}

	signup(user: User): Observable<void> {
		return this.http.post<void>(`${environment.api_url}/auth/signup`, user);
	}
}
