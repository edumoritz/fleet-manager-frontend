import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { LoadingModule } from "@shared/components/loading/loading.module";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		LoadingModule,
		DynamicDialogModule
	],
	exports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule
	],

	providers: [DialogService]
})
export class CoreModule {}
