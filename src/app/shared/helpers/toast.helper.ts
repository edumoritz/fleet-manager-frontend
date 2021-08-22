import { ToastTypeEnum } from "@shared/enum/toast.enum";
import Swal from "sweetalert2";
import { IMensageToast } from "@model/message-toast.model";

export class ToastHelper {
	static showMessage(message: IMensageToast) {
		Swal.fire({
			position: "top",
			title: message.type.toUpperCase(),
			text: message.description.toUpperCase(),
			icon: message.type,
			timer: message.type === ToastTypeEnum.WARNING ? 5000 : 3000
		});
	}

	static showMiniToast(message: IMensageToast) {
		const Toast = Swal.mixin({
			toast: true,
			position: "top",
			showConfirmButton: false,
			timer: message.type === ToastTypeEnum.WARNING ? 5000 : 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			}
		});

		Toast.fire({
			icon: message.type,
			title: message.description.toUpperCase()
		});
	}
}
