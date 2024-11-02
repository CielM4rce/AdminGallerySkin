import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PeticionesService } from '../peticiones.service';
import { MatChipsModule } from '@angular/material/chips';
import { ListItemsComponent } from '../container/list-items/list-items.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-container2',
  templateUrl: './container2.component.html',
  styleUrls: ['./container2.component.css'],
  standalone:true,
  imports:[CommonModule,MatChipsModule,ReactiveFormsModule,ListItemsComponent,FooterComponent,RouterModule]
})
export class Container2Component {


  constructor(public _services:PeticionesService){
    
  }
  buscando:string="data"
  busqueda = new FormControl("",Validators.minLength(1));
  //clase = new FormControl()
  public typeList:any=["Todos","Anime","Peliculas","VideoJuegos","Marcas","Musica","Autos y Motos","Paisajes","Animales","Caricaturas","Otros","PS5"];
  
  
 

}
