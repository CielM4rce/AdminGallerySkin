import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { PeticionesService } from 'src/app/peticiones.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(public _services:PeticionesService){}

  public archivoImg: any=["https://cdn.icon-icons.com/icons2/1863/PNG/512/add-a-photo_119470.png"];
  public typeList:any=[];
 // public galleryImg:any=[];
  public ultcod?:any;

  @ViewChild('listchips') listChips?:any



  ngOnInit(): void {
    this.chips();
    this._services.getAllImage();
    //console.log(this.cod())
    //this.chips2();
   // this.data();
  }

  enviar(data:any,e:Event){
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
  } 

  chips(){
    this._services.getTypeImages().subscribe(res=>{
      console.log(res);
      this.typeList=res;
    
    })
  }

  cod(){
    let codigo =parseInt(this._services.ListImg[this._services.ListImg.length-1].cod)+1;
    return codigo
    /*this._services.getAllImages().subscribe(res=>{
      console.log(res);
      let lista:any =[];
      lista=res;
      this._services.ListImg=res
      //this.galleryImg=res
      this.ultcod=parseInt(lista[lista.length-1].cod)+1
      console.log(this.ultcod);
    })*/
  }
}
