import { ButtonModule } from "primeng/button";
import { NgModule } from "@angular/core";
import { MenuHeaderComponent } from "./menu-header.component";

import { MenubarModule } from "primeng/menubar";

@NgModule({
	imports: [MenubarModule, ButtonModule],
	exports: [MenuHeaderComponent],
	declarations: [MenuHeaderComponent]
})
export class MenuHeaderModule {}
