import { PersonRegisterStepsControl } from "./../../person-register-steps.contol";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "fleet-step-cnh",
	templateUrl: "./step-cnh.component.html",
	styleUrls: ["./step-cnh.component.scss"]
})
export class StepCnhComponent implements OnInit {
	formCnh: FormGroup;

	constructor(
		private fb: FormBuilder,
		private stepControl: PersonRegisterStepsControl
	) {}

	ngOnInit() {
		this.formCnh = this.fb.group({
			registration_number: [
				"",
				Validators.compose([Validators.required])
			],
			due_date: ["", Validators.compose([Validators.required])],
			category: ["", Validators.compose([Validators.required])]
		});
	}

	nextStep(step: number) {
		console.log(this.formCnh.value);
		this.stepControl.next(step);
	}
}
