import { IMensageToast } from "@model/message-toast.model";
import { AuthService } from "./../core/services/auth.service";
import { Injectable } from "@angular/core";
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpErrorResponse
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ToastTypeEnum } from "@shared/enum/toast.enum";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private accountService: AuthService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
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
		const { message } = error.error as ErrorEvent;

		const messageToast: IMensageToast = {
			title: ToastTypeEnum.ERROR,
			type: ToastTypeEnum.ERROR,
			description: message
		};

		return throwError(messageToast);
	}
}
