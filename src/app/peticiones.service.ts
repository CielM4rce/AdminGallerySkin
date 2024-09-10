import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FieldPath, Firestore, OrderByDirection, addDoc, collection, collectionData, limit, orderBy, query } from '@angular/fire/firestore';
import { Place } from './estructura';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  public ListPlace:Place[]=[] ;
  public ListPlaceFilter:Place[]=[] ;
  public ModalSelect: Place | undefined;
  //public observale:Observable<Place[]>

  public ultCod?:number

  constructor(private http:HttpClient, private firestore:Firestore) {}

  
  /*  public getTypeImages(){
   return this.http.get('https://marketpandi.000webhostapp.com/data/salidaTypeImg.php');
  }

  public getAllImages(){
    return this.http.get('https://marketpandi.000webhostapp.com/data/salidaGallery.php');
  }

  public getAllImage(){
    this.http.get('https://marketpandi.000webhostapp.com/data/salidaGallery.php').subscribe(data=>{
      this.ListImg=data;
    })
  }*/

  addPlace(place: Place){
    const placeRef = collection(this.firestore,'place');
    return addDoc(placeRef,place);
  }

  
   getPlaces():Observable<Place[]>{
    //const placeRef = collection(this.firestore, 'place')
    const placeRef =  collection(this.firestore, 'place')
    const placexD =  query(placeRef, orderBy("ingreso","desc"));
    return collectionData(placexD,{ idField:"ingreso"}) as Observable<Place[]>
    //const res= list.subscribe(places=>this.listPlaces=places) 
    //return collectionData(this.firestore.collection('place', ref => ref.orderBy('ingreso')))
  }
   getPlaces1(){
    //const placeRef = collection(this.firestore, 'place')
    const placeRef =  collection(this.firestore, 'place')
    const placexD =  query(placeRef, orderBy("ingreso","desc"));
    const data = collectionData(placexD,{ idField:"ingreso"}) as Observable<Place[]>
    
   
    //const res= list.subscribe(places=>this.listPlaces=places) 
    //return collectionData(this.firestore.collection('place', ref => ref.orderBy('ingreso')))
  }
  
  buscar(titulo:any){
    //console.log( this.place.find(x => x.descripcion == "dragon ball"));
    //let busqueda = this.place.filter(persona => persona.titulo == 'Hello')
    let busqueda2 = this.ListPlace.filter(persona => isEqual(persona.descripcion,titulo))
    //let busqueda3= this.place.filter(persona => persona.descripcion.localeCompare("hello"))
    console.log(busqueda2)
    this.ListPlaceFilter=busqueda2;
  }

  filtrar(clase:string){
    console.log(clase);
    let filtrar = this.ListPlace.filter(x => x.clase.includes(clase));
    this.ListPlaceFilter=filtrar;
    console.log(filtrar)
    
  }
}
//.collection("place")
//.orderBy("ingreso", "desc")
function isEqual(str1:string, str2:string) {
  return str1.toUpperCase().includes(str2.toUpperCase());
} // isEqual
