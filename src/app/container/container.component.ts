import { Component } from '@angular/core';
import { FormularioComponent } from "./formulario/formulario.component";
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from "./list-items/list-items.component";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  standalone: true,
  imports: [CommonModule, FormularioComponent, ListItemsComponent],
})
export class ContainerComponent {

}
