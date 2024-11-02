import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, inject } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { switchMap } from 'rxjs';
import { BtnWhatsappComponent } from 'src/app/container2/btn-whatsapp/btn-whatsapp.component';
import { Place } from 'src/app/estructura';
import { PeticionesService } from 'src/app/peticiones.service';




@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
  standalone: true,
  imports: [CommonModule,LazyLoadImageModule,NgxImageZoomModule,ReactiveFormsModule,BtnWhatsappComponent,RouterModule],
})
export class ListItemsComponent implements OnInit{

  private route = inject(ActivatedRoute);

  
 

  //@Input({required:false}) buscarData!:string
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
  

  constructor(public _services:PeticionesService){
    
  }
  ngOnInit(): void {
    this._services.getPlaces().subscribe(p=>{
      //this._services.filtrar(this.busqueda)
      console.log("eperando")
      this.route.params.subscribe(params=>{
        console.log(params)
       // this._services.ListPlaceFilter=p
      if(params['Busqueda']=='Busqueda'){
        this._services.buscar(params['clase'])
      }else if(params['clase']=='Todos'){
        this._services.ListPlaceFilter=p
      }else{
          this._services.filtrar(params['clase'])
      }
        //  this._services.filtrar(params['clase'])
       // }
        
      })
    }

    )
   // this._services.getPlaces().subscribe(places =>{
      //console.log(places);
     // this.place = places
     // this._services.ListPlace=places
     // this._services.ListPlaceFilter=places
    //  this._services.ultCod= (this._services.ListPlace[0].cod)+1
    //  console.log(this._services.ListPlace)
   // })
  // console.log(this.busqueda) 
  }



  
 // async llamar(){
  //  await this._services.getPlaces1()
   //  this.place= await this._services.ListPlace;
  //}
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
