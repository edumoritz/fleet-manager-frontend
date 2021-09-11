import { MenuHeaderModule } from '@shared/components/menu-header/menu-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPeopleComponent } from './register-people.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    MenuHeaderModule,
    RouterModule.forChild([
			{
				path: "",
				component: RegisterPeopleComponent,
				canActivate: [AuthGuard]
			}
		])
  ],
  declarations: [RegisterPeopleComponent]
})
export class RegisterPeopleModule { }
