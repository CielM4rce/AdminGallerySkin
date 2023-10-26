import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/peticiones.service';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit{

  p: number = 1;
  public listaImg:any=[];

  constructor(public _services:PeticionesService){
   
  }
  ngOnInit(): void {
    this.listData();
    //this._services.getAllImage();
  }
  listData(){
    this._services.getAllImages().subscribe(data=>{
      //console.log(data);
      this.listaImg=data
      console.log(this.listaImg);
    })
  }

}
