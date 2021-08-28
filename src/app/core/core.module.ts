import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingModule } from "@shared/components/loading/loading.module";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { AuthModule } from "@features/auth/auth.module";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		LoadingModule,
		AuthModule,
		DynamicDialogModule
	],
	exports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule
	],

	providers: [DialogService]
})
export class CoreModule {}
