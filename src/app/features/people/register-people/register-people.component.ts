import { Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { patternCPF } from "@shared/helpers/patterns.helper";

@Component({
	templateUrl: "./register-people.component.html",
	styleUrls: ["./register-people.component.scss"]
})
export class RegisterPeopleComponent implements OnInit {
	formPeople: FormGroup;

	constructor(private router: Router, private fb: FormBuilder) {}

	ngOnInit() {
		this.createForm();
	}

	createForm() {
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
			],
			registration_number: [
				"",
				Validators.compose([Validators.required])
			],
			due_date: ["", Validators.compose([Validators.required])],
			category: ["", Validators.compose([Validators.required])],
			ddi: ["", Validators.compose([Validators.required])],
			ddd: ["", Validators.compose([Validators.required])],
			phone_number: ["", Validators.compose([Validators.required])]
		});
	}

	onSubmit() {
		console.log(this.formPeople.value);
	}

	get getType() {
		return typeof this.formPeople.controls.registration_number;
	}
}
