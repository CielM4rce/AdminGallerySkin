import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Place, placePedido } from 'src/app/estructura';

@Component({
  selector: 'app-btn-whatsapp',
  templateUrl: './btn-whatsapp.component.html',
  styleUrls: ['./btn-whatsapp.component.css'],
  standalone:true,
  imports:[CommonModule,MatIconModule]
})
export class BtnWhatsappComponent {

  @Input() pedido?:placePedido;
  
  url = "https://wa.me/51936826512"

 // pedir = input<Place>()

  @Input() mensaje:boolean=false
  @Output() mensajeChange = new EventEmitter();


  abrirMensaje() {
    const msn="?text=Pedido:%0A"+this.pedido?.place.descripcion+"%0Acod: "+this.pedido?.place.cod+"%0ATamaño: "+this.pedido?.size+"%0APiezas: "+this.pedido?.Piezas;
    this.url+=msn
  }

}
