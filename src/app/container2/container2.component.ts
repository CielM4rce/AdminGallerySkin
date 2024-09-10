import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-container2',
  templateUrl: './container2.component.html',
  styleUrls: ['./container2.component.css']
})
export class Container2Component {


  constructor(public _services:PeticionesService){
    
  }
  buscando:string="data"
  busqueda = new FormControl("",Validators.minLength(1));
  clase = new FormControl()
  public typeList:any=["Anime","Peliculas","VideoJuegos","Marcas","Musica","Autos y Motos","Paisajes","Animales","Caricaturas","Otros","PS5"];
  
  
 

}
