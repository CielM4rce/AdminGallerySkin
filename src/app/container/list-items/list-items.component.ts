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
  defaultImage= "assets/lg.gif"
  place ?:Place[];
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
      }else if(params['clase']){
          this._services.filtrar(params['clase'])
      }else{
        this._services.ListPlaceFilter=p
      }
        
      })
    }

    )
  }

  buscar(){
    let busqueda2 = this._services.ListPlace.filter(persona => isEqual(persona.descripcion,"dragon"));
    console.log(busqueda2);
    this.place=busqueda2;
  }

  link(data:Place):Array<string>{

    if(data.bloque=="SkinPlayStation"){
      return ['/Catalogo/Categoria/Lista-Skin/PlayStation/'+data.ingreso]
    }
    else{
      return ['/Catalogo/Categoria/Lista-Skin/'+data.clase+'/'+data.ingreso]
    } 
  }

}
function isEqual(str1:string, str2:string) {
  return str1.toUpperCase().includes(str2.toUpperCase());
} 
