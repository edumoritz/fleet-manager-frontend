import { FeaturesRoutingModule } from "./features-routing.module";
import { NgModule } from "@angular/core";
import { MenuHeaderModule } from "@shared/components/menu-header/menu-header.module";

@NgModule({
	imports: [MenuHeaderModule, FeaturesRoutingModule]
})
export class FeaturesModule {}
