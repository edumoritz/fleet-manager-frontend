import { MenuHeaderModule } from '@shared/components/menu-header/menu-header.module';
import { AuthGuard } from '@core/guards/auth.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people.component';

@NgModule({
  imports: [
    CommonModule,
    MenuHeaderModule,
    RouterModule.forChild([
			{
				path: "",
				component: ListPeopleComponent,
				canActivate: [AuthGuard]
			}
		])
  ],
  declarations: [ListPeopleComponent]
})
export class ListPeopleModule { }
