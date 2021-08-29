import { ButtonModule } from "primeng/button";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuHeaderComponent } from "./menu-header.component";

import { MenubarModule } from "primeng/menubar";

@NgModule({
	imports: [CommonModule, MenubarModule, ButtonModule],
	exports: [MenuHeaderComponent],
	declarations: [MenuHeaderComponent]
})
export class MenuHeaderModule {}
