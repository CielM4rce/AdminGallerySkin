import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { delay, map, switchMap } from 'rxjs';
import { Place, placePedido } from 'src/app/estructura';
import { PeticionesService } from 'src/app/peticiones.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatChipsModule } from '@angular/material/chips';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnWhatsappComponent } from "../btn-whatsapp/btn-whatsapp.component";
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-item-select',
  standalone: true,
  imports: [CommonModule,MatChipsModule, ReactiveFormsModule, BtnWhatsappComponent],
  templateUrl: './item-select.component.html',
  styleUrl: './item-select.component.css'
})
export class ItemSelectComponent {

  private _snackBar = inject(MatSnackBar);

  private route     = inject(ActivatedRoute);
  private services  = inject(PeticionesService);

  public seleccion = toSignal<Place>(
    this.route.params.pipe(
      switchMap( ({cod})=> this.services.getItemSelect(cod).pipe(delay(2000) )))
  )



  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 3000,
    });
  }

  partes = [
    {part:"Solo tapa",svg:"assets/siluetas/mac.svg",png:"assets/siluetas/tapa.png",css:"img-mockup-tapa",price:20},
    {part:"Borde teclado",svg:"assets/siluetas/bordeTeclado.svg",png:"assets/siluetas/bordeTeclado.png",css:"img-mockup-bordeteclado",price:20}, 
    {part:"Borde Pantalla",svg:"assets/siluetas/bordePantalla.svg",png:"assets/siluetas/bordePantalla.png",css:"img-mockup-bordepantalla",price:20}, 
    {part:"Teclado",svg:"assets/siluetas/teclado.svg",png:"assets/siluetas/teclado.png",css:"img-mockup-teclado",price:20}, 
  ]
  viewPng:string="";
  viewMockup:string="center-img";

  pedido?:placePedido
  dataPedido = new FormControl<string[]>([],Validators.required)
  size  = new FormControl<string>("",Validators.required)
  stadoWhatsapp: boolean = false;
  
  constructor(){

  }

  viewPart(part:any) {
    console.log(part)
    this.viewPng=part.png;
    this.viewMockup=part.css;
    }
  
  btnPedido(){
   if(this.dataPedido.valid && this.size.valid){
    console.log("valido")
    this.pedido={
      place:this.seleccion()!,
      Piezas:this.dataPedido.value!,
      size:this.size.value!,
      Precio:this.dataPedido.value!.length*20
      
    }
    this.stadoWhatsapp=true;
      return
    }else{
      this.openSnackBar();
    }
  }


}


@Component({
  selector: 'snack-bar-component-example-snack',
  template:`  <span class="example-pizza-party">
                Seleccione piezas y tamaño 
              </span>`,
  styles: `
    .example-pizza-party {
      color: red;
    } `,
  standalone: true,
})
export class PizzaPartyComponent {}