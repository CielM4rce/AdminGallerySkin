import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  public ListImg:any=['data'];

  constructor(private http:HttpClient) { }

  public getTypeImages(){
   return this.http.get('https://marketpandi.000webhostapp.com/data/salidaTypeImg.php');
  }

  public getAllImages(){
    return this.http.get('https://marketpandi.000webhostapp.com/data/salidaGallery.php');
  }

  public getAllImage(){
    this.http.get('https://marketpandi.000webhostapp.com/data/salidaGallery.php').subscribe(data=>{
      this.ListImg=data;
    })
  }
}
