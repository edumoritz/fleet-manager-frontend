import { Injectable } from "@angular/core";
import { LoadingComponent } from "@shared/components/loading/loading.component";
import { DialogService } from "primeng/dynamicdialog";
import { DynamicDialogRef } from "primeng/dynamicdialog";

@Injectable({ providedIn: "root" })
export class LoadingService {
	constructor(public dialogService: DialogService) {}

	ref: DynamicDialogRef;

	show() {
		this.ref = this.dialogService.open(LoadingComponent, {
			header: "Loading...",
			closeOnEscape: false,
			closable: false,
			width: "400px",
			transitionOptions: "0ms",
			contentStyle: { "max-height": "500px", overflow: "auto" },
			baseZIndex: 10000
		});
	}

	close() {
		if (this.ref) {
			this.ref.close();
		}
	}
}
