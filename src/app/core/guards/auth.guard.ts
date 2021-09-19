/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthRoutingModule } from "./../../features/auth/auth-routing.module";
import { AuthService } from "./../services/auth.service";
import { Injectable } from "@angular/core";
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
	CanActivateChild,
	CanLoad
} from "@angular/router";
import { Route } from "@angular/compiler/src/core";

@Injectable({
	providedIn: AuthRoutingModule
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
	constructor(private router: Router, private authService: AuthService) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		if (this.authService.isUserLoggedIn()) {
			return true;
		} else {
			this.router.navigate(["login/signin"]);

			return false;
		}
	}

	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		return this.canActivate(route, state);
	}

	canLoad(route: Route): boolean {
		const url = window.location.pathname;
		return this.checkAuthState(url);
	}

	private checkAuthState(url: string): boolean {
		if (this.authService.isUserLoggedIn()) {
			return true;
		} else {
			this.router.navigate(["login/signin"]);

			return true;
		}
	}
}
