import { Validators } from "@angular/forms";
import { PersonRegisterStepsControl } from "./../../person-register-steps.contol";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "fleet-step-phones",
	templateUrl: "./step-phones.component.html",
	styleUrls: ["./step-phones.component.scss"]
})
export class StepPhonesComponent implements OnInit {
	formPhone: FormGroup;

	constructor(
		private fb: FormBuilder,
		private stepControl: PersonRegisterStepsControl
	) {}

	ngOnInit() {
		this.formPhone = this.fb.group({
			ddi: ["", Validators.compose([Validators.required])],
			ddd: ["", Validators.compose([Validators.required])],
			phone_number: ["", Validators.compose([Validators.required])]
		});
	}

	nextStep(step: number) {
		console.log(this.formPhone.value);
		this.stepControl.next(step);
	}
}
