import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Place } from 'src/app/estructura';

@Component({
  selector: 'app-btn-whatsapp',
  templateUrl: './btn-whatsapp.component.html',
  styleUrls: ['./btn-whatsapp.component.css']
})
export class BtnWhatsappComponent {

  @Input() pedido?:any
  
  url = "https://wa.me/51936826512"

 // pedir = input<Place>()

  @Input() mensaje:boolean=false
  @Output() mensajeChange = new EventEmitter();


  abrirMensaje() {
    const msn="?text=Pedido:%0A"+this.pedido.descripcion+"%0Acod: "+this.pedido.cod+"%0ATamaño: "+this.pedido.size+"%0APiezas: "+this.pedido.parts;
    this.url+=msn
  }

}
