import { CommonModule, NgFor } from '@angular/common';
import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { UrlHandlingStrategy, UrlSerializer } from '@angular/router';
import { PeticionesService } from 'src/app/peticiones.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatChipsModule],

})
export class FormularioComponent implements OnInit {

  openForm : boolean=false;
  openImg : boolean=false;
  formImg : FormGroup
  url1 : FormControl
  url2 : FormControl

  public typeList:any=["Anime","Peliculas","VideoJuegos","Marcas","Musica","Autos y Motos","Paisajes","Animales","Caricaturas","Otros"];
  constructor(public _services:PeticionesService){
    
    this.formImg = new FormGroup({
      titulo  : new FormControl(""),
      cod     : new FormControl(this._services.ultCod),
      listUrl : new FormArray([(this.url1= new FormControl("",Validators.required)),(this.url2 = new FormControl("",Validators.required))]),
      clase   : new FormControl(),
      descripcion: new FormControl("",Validators.required),
      precio  : new FormControl("",Validators.required),
      ingreso : new FormControl(new Date()),
    })

  }

  public archivoImg: any=["https://cdn.icon-icons.com/icons2/1863/PNG/512/add-a-photo_119470.png"];

  @ViewChild('listchips') listChips?:any



  ngOnInit(): void {
   console.log(new Date())
  }
  addItem(){
    this.openForm=true
    console.log(this.formImg.controls['cod'].setValue(this._services.ultCod))
  }

  closeItem(){
    this.openForm=false
  }


  async onSubmit(){
    console.log(this.formImg.value);
    try{
      const response = await this._services.addPlace(this.formImg.value);
      console.log(response);
      if(response){
        console.log("respondio bien")
      }
      this.formImg.reset()
      this.formImg.controls['ingreso'].setValue(new Date())
      this.formImg.controls['cod'].setValue(this._services.ultCod)
      
    }catch(e){
      const err = e instanceof FirebaseError
      if(err){
        console.log(e.code)
        console.log("error encontrado")
    }
    }
  
  }
}
