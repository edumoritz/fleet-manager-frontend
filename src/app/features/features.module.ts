import { FeaturesRoutingModule } from "./features-routing.module";
import { FeaturesComponent } from "./features.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuHeaderModule } from "@shared/components/menu-header/menu-header.module";

@NgModule({
	declarations: [FeaturesComponent],
	imports: [CommonModule, MenuHeaderModule, FeaturesRoutingModule],
	bootstrap: [FeaturesComponent]
})
export class FeaturesModule {}
