import { ExceptionServer } from "./../model/exception-server.model";
import { AuthService } from "./../core/services/auth.service";
import { Injectable } from "@angular/core";
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpErrorResponse,
	HttpEvent
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private accountService: AuthService) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const token = this.accountService.getAuthorizationToken();
		let request: HttpRequest<any> = req;

		if (token && !this.accountService.isTokenExpired(token)) {
			request = req.clone({
				headers: req.headers.set("Authorization", `Bearer ${token}`)
			});
		}

		return next
			.handle(request)
			.pipe(catchError((err) => this.handleError(err)));
	}

	private handleError(error: HttpErrorResponse) {
		const {
			message,
			statusCode,
			error: errorType
		} = error.error as ExceptionServer;

		const exceptionServer: ExceptionServer = {
			statusCode,
			message,
			error: errorType
		};

		return throwError(exceptionServer);
	}
}
