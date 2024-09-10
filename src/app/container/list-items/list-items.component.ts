import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, OnInit, Input } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
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

  modalSelect:Place={
    cod: 0,
    titulo: '',
    listUrl: [],
    clase: [],
    descripcion: '',
    precio: 0,
    ingreso:  new Timestamp(122133,312312)
  }
  itemWhatsapp={
    cod:0,
    descripcion:"",
    size:"",
    parts:""
  }

  sizes = ['Selecciona Tamaño','13" (30 x 19.2 cm)','15" (36.5 x 25 cm)','17" (39.4 x 26.8 cm)'];
  parts = ["Selecciona Piezas","Solo tapa","Tapa y borde teclado","Tapa, borde teclado, borde pantalla"]
  //size=new FormControl("sa");

  pedir= new FormGroup({
    size : new FormControl(this.sizes[0]),
    part : new FormControl(this.parts[0]),
  });
  //parts=new FormControl();
  stadoWhatsapp: boolean = false;

  /*itemWhatsapp= new FormGroup({
    cod: new FormControl(this.modalSelect.cod),
    descripcion: new FormControl(this.modalSelect.descripcion)
  })*

  /*itemWhatsapp= new FormGroup({
    cod: new FormControl(this.modalSelect.cod),
    descripcion: new FormControl(this.modalSelect.descripcion)
  })*/

  

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
   
  }

  
  async llamar(){
    await this._services.getPlaces1()
     this.place= await this._services.ListPlace;
  }
  buscar(){
    let busqueda2 = this._services.ListPlace.filter(persona => isEqual(persona.descripcion,"dragon"));
    console.log(busqueda2);
    this.place=busqueda2;
  }

  select(data: Place) {
    console.log(data)
    this.modalSelect=data;
  }

  pedido() {
    
      this.itemWhatsapp.cod=this.modalSelect.cod;
      this.itemWhatsapp.descripcion=this.modalSelect.descripcion;
      this.itemWhatsapp.size=this.pedir.value.size!;
      this.itemWhatsapp.parts=this.pedir.value.part!;
      this.stadoWhatsapp=true;
      console.log(this.itemWhatsapp);
    }

}
function isEqual(str1:string, str2:string) {
  return str1.toUpperCase().includes(str2.toUpperCase());
} 
