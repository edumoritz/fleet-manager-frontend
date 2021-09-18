import { environment } from "./../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IStatisticsDTO } from "@shared/interfaces/statistics";

@Injectable({
	providedIn: "root"
})
export class HomeService {
	constructor(private http: HttpClient) {}

	async getStatistics() {
		const statistics = await this.http
			.get<IStatisticsDTO>(`${environment.api_url}/statistics`)
			.toPromise();

		return statistics;
	}
}
