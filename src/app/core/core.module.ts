import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingModule } from "@shared/components/loading/loading.module";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		LoadingModule,
		DynamicDialogModule
	],
	providers: [DialogService]
})
export class CoreModule {}
