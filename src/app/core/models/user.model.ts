import { TypeUserEnum } from "@shared/enum/type-user.enum";

export class User {
	username: string;
	password: string;
	type_user?: TypeUserEnum;
}
