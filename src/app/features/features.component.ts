/* eslint-disable prettier/prettier */
import { Component } from "@angular/core";

@Component({
	template: `<app-menu-header></app-menu-header>
<router-outlet name="sub"></router-outlet>
`
})
export class FeaturesComponent {}
