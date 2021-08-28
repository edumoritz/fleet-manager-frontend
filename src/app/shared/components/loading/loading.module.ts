import { ProgressSpinnerModule } from "primeng/progressspinner";
import { NgModule } from "@angular/core";
import { LoadingComponent } from "./loading.component";

@NgModule({
	imports: [ProgressSpinnerModule],
	declarations: [LoadingComponent],
	exports: [LoadingComponent]
})
export class LoadingModule {}
