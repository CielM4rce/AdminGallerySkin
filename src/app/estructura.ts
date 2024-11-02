import { Timestamp } from "@angular/fire/firestore";

export interface Place {
    id?:string;
    cod:number;
    titulo:string;
    listUrl:Array<string>;
    clase:Array<string>;
    descripcion:string
    precio:number;
    ingreso:Timestamp;
   
}

export interface placePedido{
    place:Place;
    Piezas:Array<string>;
    size:string;
    Precio:number;
}