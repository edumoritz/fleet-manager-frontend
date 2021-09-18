export class ExceptionServer {
	statusCode: number;
	message: string;
	error: string;

	constructor(object: ExceptionServer) {
		this.error = object.error;
		this.statusCode = object.statusCode;
		this.message = object.message;
	}
}
