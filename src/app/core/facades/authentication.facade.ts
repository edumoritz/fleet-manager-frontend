import { AuthenticationLoginDTO } from "./../models/authentication/authentication.dto";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationFacadeApi } from "./apis/authentication.facade.api";
import { User } from "@core/models/user.model";

@Injectable({ providedIn: "root" })
export class AuthenticationFacade {
	constructor(private authenticationApi: AuthenticationFacadeApi) {}

	login(user: User): Observable<AuthenticationLoginDTO> {
		return this.authenticationApi.login(user);
	}

	signup(user: User): Observable<void> {
		return this.authenticationApi.signup(user);
	}
}
