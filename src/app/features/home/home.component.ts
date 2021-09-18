import { ToastTypeEnum } from "@shared/enum/toast.enum";
import { ToastHelper } from "@shared/helpers/toast.helper";
import { LoadingService } from "@core/services/loading.service";
import { Component, OnInit } from "@angular/core";
import { HomeService } from "@core/services/home.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	runs: number;

	clients: number;

	conductors: number;

	vehicles: number;

	constructor(
		private homeService: HomeService,
		private loadingService: LoadingService
	) {}

	ngOnInit() {
		this.getStatistics();
	}

	async getStatistics() {
		this.loadingService.show();

		try {
			const statistics = await this.homeService.getStatistics();

			this.runs = statistics.running;
			this.clients = statistics.clients;
			this.conductors = statistics.conductors;
			this.vehicles = statistics.vehicles;

			this.loadingService.close();
		} catch (error) {
			this.loadingService.close();

			ToastHelper.showMiniToast({
				title: ToastTypeEnum.ERROR,
				type: ToastTypeEnum.ERROR,
				description: "Ocorreu um erro ao pesquisas estatisticas!"
			});
		}
	}
}
