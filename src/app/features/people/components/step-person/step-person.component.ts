import { PersonRegisterStepsControl } from "./../../person-register-steps.contol";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { patternCPF } from "@shared/helpers/patterns.helper";

@Component({
	selector: "fleet-step-person",
	templateUrl: "./step-person.component.html",
	styleUrls: ["./step-person.component.scss"]
})
export class StepPersonComponent implements OnInit {
	formPeople: FormGroup;

	constructor(
		private fb: FormBuilder,
		private stepControl: PersonRegisterStepsControl
	) {}

	ngOnInit() {
		this.formPeople = this.fb.group({
			name: [
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(4)
				])
			],
			last_name: [
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(4)
				])
			],
			email: [
				"",
				Validators.compose([Validators.required, Validators.email])
			],
			cpf: [
				"",
				Validators.compose([
					Validators.required,
					Validators.pattern(patternCPF)
				])
			]
		});
	}

	nextStep(step: number) {
		console.log(this.formPeople.value);
		this.stepControl.next(step);
	}
}
