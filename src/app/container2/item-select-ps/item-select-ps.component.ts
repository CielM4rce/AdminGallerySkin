import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Place, placePedido } from 'src/app/estructura';
import { PeticionesService } from 'src/app/peticiones.service';
import { MatChipsModule } from '@angular/material/chips';
import { FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { BtnWhatsappComponent } from '../btn-whatsapp/btn-whatsapp.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-select-ps',
  standalone: true,
  imports: [MatChipsModule,ReactiveFormsModule,BtnWhatsappComponent],
  templateUrl: './item-select-ps.component.html',
  styleUrl: './item-select-ps.component.css'
})
export class ItemSelectPsComponent {


  private route = inject(ActivatedRoute);
  private services = inject(PeticionesService);
  private toast = inject(ToastrService);
  public imgMockup = 0
  public seleccion = toSignal<Place>(
    this.route.params.pipe(
      switchMap(({cod})=>this.services.getItemSelect(cod).pipe(delay(2000))) 
    )
  )
  
  pedido?:placePedido
  public size = new FormControl("",Validators.required)
  stadoWhatsapp:boolean =false;

  changeImg(_t7: number) {
        console.log (_t7)
        this.imgMockup = _t7

    }

  btnPedido(){
    if(this.size.valid){
      this.pedido={
        place:this.seleccion()!,
        size:this.size.value!,
        Precio:10,
        Piezas:['']
      }
      console.log(this.pedido)
      this.stadoWhatsapp=true;
    }else{
      this.toast.error("Completa las Opciones","Error Pedido")
    }
    
  }
}
