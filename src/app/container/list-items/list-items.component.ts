import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Place } from 'src/app/estructura';
import { PeticionesService } from 'src/app/peticiones.service';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit{

  @Input() buscarData?:string
  defaultImage= "assets/lg.gif"


  place ?:Place[];

  constructor(public _services:PeticionesService){
    
  }
  ngOnInit(): void {
    this._services.getPlaces().subscribe(places =>{
      //console.log(places);
      this.place = places
      this._services.ListPlace=places
      this._services.ListPlaceFilter=places
      this._services.ultCod= (this.place[0].cod)+1
      console.log(this._services.ListPlace)
    })

    //this.llamar()
    //this._services.data();
   
  }

  
  async llamar(){
    await this._services.getPlaces1()
     this.place= await this._services.ListPlace;
  }
  buscar(){
    //console.log( this.place.find(x => x.descripcion == "dragon ball"));
    //let busqueda = this.place.filter(persona => persona.titulo == 'Hello')
    let busqueda2 = this._services.ListPlace.filter(persona => isEqual(persona.descripcion,"dragon"))
    //let busqueda3= this.place.filter(persona => persona.descripcion.localeCompare("hello"))
    console.log(busqueda2)
    this.place=busqueda2;
  }

}
function isEqual(str1:string, str2:string) {
  return str1.toUpperCase().includes(str2.toUpperCase());
} // isEqual
