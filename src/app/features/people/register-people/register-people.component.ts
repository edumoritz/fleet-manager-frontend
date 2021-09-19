import { Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

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
					Validators.minLength(3)
				])
			],
			last_name: [
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(3)
				])
			]
		});
	}

	onSubmit() {
		console.log(this.formPeople.value);
	}
}
