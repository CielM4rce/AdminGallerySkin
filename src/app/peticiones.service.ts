import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FieldPath, Firestore, OrderByDirection, addDoc, collection, collectionData, doc, docData, limit, orderBy, query, where } from '@angular/fire/firestore';
import { Place } from './estructura';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  public ListPlace!:Place[] ;
  public ListPlaceFilter:Place[]=[] ;
  public ModalSelect: Place | undefined;
  //public observale:Observable<Place[]>
  

  public ultCod?:number

  constructor(private firestore:Firestore) {
    this.getPlaces().subscribe(places =>{
      //console.log(places);
    
      this.ListPlace=places
      //this.ListPlaceFilter=places
      this.ultCod= (this.ListPlace[0].cod)+1
      console.log(this.ListPlace)
    })
  }


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
    const placeRef =  collection(this.firestore, 'place',)
    const shared  =   doc(placeRef,"HpJBSCDryHiNSnMUPmoQ");
    //const placexD =  query(placeRef, orderBy("ingreso","desc"));
    const data = collectionData(placeRef,{ idField:"Id"}) as Observable<Place[]>
    
   
    //const res= list.subscribe(places=>this.listPlaces=places) 
    //return collectionData(this.firestore.collection('place', ref => ref.orderBy('ingreso')))
  }
  
  buscar(titulo:any){
    console.log(titulo)
    //console.log( this.place.find(x => x.descripcion == "dragon ball"));
    //let busqueda = this.place.filter(persona => persona.titulo == 'Hello')
    let busqueda2 = this.ListPlace.filter(persona => isEqual(persona.descripcion,titulo))
    //let busqueda3= this.place.filter(persona => persona.descripcion.localeCompare("hello"))
    console.log(busqueda2)
    this.ListPlaceFilter=busqueda2;
  }

   filtrar(clase:string){
    //console.log(clase);
    let filtrar = this.ListPlace.filter(x => x.clase.includes(clase));
    this.ListPlaceFilter=filtrar;
    console.log(filtrar)
  }

  itemSelect(cod:any){
    return this.ListPlace.find((data)=>data.cod==cod)
  }

  getItemSelect(cod:string):Observable<Place>{
    //const placeRef = collection(this.firestore, 'place')
    const placeRef =  collection(this.firestore, 'place',)
    const shared  =   doc(placeRef,cod);
    return docData(shared,{idField:"ingreso"}) as Observable<Place>
    // return collectionData(shared,{ idField:"Id"}) as Observable<Place[]>
  }
}
//.collection("place")
//.orderBy("ingreso", "desc")
function isEqual(str1:string, str2:string) {
  return str1.toUpperCase().includes(str2.toUpperCase());
} // isEqual
