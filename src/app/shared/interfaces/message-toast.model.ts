import { ToastTypeEnum } from "@shared/enum/toast.enum";

export interface IMensageToast {
	type: ToastTypeEnum;
	title?: string;
	description: string;
}
