import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { Container2Component } from './container2/container2.component';

const routes: Routes = [
  { path:"", component: Container2Component},
  { path:"Administrador", component: ContainerComponent},
  { path:"Catalogo", component: Container2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
