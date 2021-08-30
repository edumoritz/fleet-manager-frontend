import { AuthService } from "@core/services/auth.service";
import { MenuItem, PrimeIcons } from "primeng/api";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-menu-header",
	templateUrl: "./menu-header.component.html",
	styleUrls: ["./menu-header.component.scss"]
})
export class MenuHeaderComponent implements OnInit {
	items: MenuItem[];

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.items = [
			{ label: "Home", icon: PrimeIcons.HOME },
			{
				label: "Cadastros",
				icon: PrimeIcons.PLUS,
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
				icon: PrimeIcons.LIST,
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
				label: "Sair",
				icon: PrimeIcons.POWER_OFF,
				command: () => this.authService.logout()
			}
		];
	}
}
