import { AuthService } from "@core/services/auth.service";
import { MenuItem } from "primeng/api";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-menu-header",
	templateUrl: "./menu-header.component.html",
	styleUrls: ["./menu-header.component.scss"]
})
export class MenuHeaderComponent implements OnInit {
	items: MenuItem[];

	activeItem: MenuItem;

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.items = [
			{ label: "Home", icon: "pi pi-fw pi-home" },
			{
				label: "Cadastros",
				icon: "pi pi-fw pi-plus",
				items: [
					{ label: "Pessoa" },
					{ label: "Usuario" },
					{ label: "Empresa" },
					{ label: "CNH" },
					{ label: "Veiculo" },
					{ label: "Telefone" },
					{ label: "Corrida" },
					{ label: "Manutenção" },
					{ label: "Abastecimento" },
					{ label: "Infração" }
				]
			},
			{
				label: "Editar",
				icon: "pi pi-fw pi-pencil",
				items: [
					{ label: "Pessoa" },
					{ label: "Usuario" },
					{ label: "Empresa" },
					{ label: "CNH" },
					{ label: "Veiculo" },
					{ label: "Telefone" },
					{ label: "Corrida" },
					{ label: "Manutenção" },
					{ label: "Abastecimento" },
					{ label: "Infração" }
				]
			},
			{
				label: "Listar",
				icon: "pi pi-fw pi-list",
				items: [
					{ label: "Pessoa" },
					{ label: "Usuario" },
					{ label: "Empresa" },
					{ label: "CNH" },
					{ label: "Veiculo" },
					{ label: "Telefone" },
					{ label: "Corrida" },
					{ label: "Manutenção" },
					{ label: "Abastecimento" },
					{ label: "Infração" }
				]
			},
			{
				label: "Logout",
				icon: "pi pi-fw pi-power-off",
				command: () => this.authService.logout()
			}
		];

		this.activeItem = this.items[0];
	}
}
