import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MostrarUsersComponent } from './mostrar-users/mostrar-users.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MostrarUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MostrarUsersComponent
  ]
})
export class ComponentsModule { }
