import { NgFor } from '@angular/common';
import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChip } from '@angular/material/chips';
import { UrlHandlingStrategy, UrlSerializer } from '@angular/router';
import { PeticionesService } from 'src/app/peticiones.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
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
  /*enviar(data:any,e:Event){
  }  
  }
    e.preventDefault();
    console.log(e); 
    let formulario = new FormData(data);
    formulario.append("types",this.listChips.value);
    formulario.append("cod",this.cod().toString());
    console.log(formulario.get("cod"));
    //console.log(this.listChips.value)
    this.conex(formulario);
    data.reset();
    this.archivoImg=["https://cdn.icon-icons.com/icons2/1863/PNG/512/add-a-photo_119470.png"]
  }

  public capturaImg(event:any){
    const file = event.target.files[0];
    if (file){
      let hola = this.archivoImg;
      let reader = new FileReader();
      reader.onload = function(event){
        hola.unshift(event.target?.result);
      }
      reader.readAsDataURL(file);
    }
    //console.log(this.archivoImg);
  }

  async conex(data:any){
    let response = await fetch('https://marketpandi.000webhostapp.com/data/ingresoImg.php',{
         method: 'POST',
         body  :data
            //headers: {"Content-type": "application/json; charset=UTF-8"}
      });
    if(response.ok){
      let item = await response.json();

      //this.galleryImg.push(item);
      this._services.ListImg.push(item);
      this.listChips.value=[];
      console.log(item);

    }else{
      console.log("No hay respuesta");
    }
  } */

  /*chips(){
    this._services.getTypeImages().subscribe(res=>{
      console.log(res);
      this.typeList=res;
    
    })
  }

  cod(){
    let codigo =parseInt(this._services.ListImg[this._services.ListImg.length-1].cod)+1;
    return codigo
   
  }*/
}
