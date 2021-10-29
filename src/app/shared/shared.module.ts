import { PasswordModule } from "primeng/password";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { ToolbarModule } from "primeng/toolbar";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ButtonModule,
		InputTextModule,
		PasswordModule,
		DropdownModule,
		TableModule,
		ToolbarModule
	],
	exports: [
		CommonModule,
		FormsModule,
		ButtonModule,
		InputTextModule,
		PasswordModule,
		DropdownModule,
		TableModule,
		ToolbarModule
	]
})
export class SharedModule {}
