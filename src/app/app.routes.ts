import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { Container2Component } from './container2/container2.component';
import { ItemSelectComponent } from './container2/item-select/item-select.component';
import { ListItemsComponent } from './container/list-items/list-items.component';

export const routes: Routes = [
    
    { path:"Administrador", component: ContainerComponent},
    { path:"Catalogo", component: Container2Component,
        children:[
            {
                path:'Categoria/:Busqueda/:clase',
                title:'Lista Completa',
                component:ListItemsComponent
            },
            {
                path:'Categoria/:Busqueda/:clase/:cod',
                title:'Item Selecionado',
                component:ItemSelectComponent
            }
        ]
    },
    { path:"", redirectTo:'/Catalogo/Categoria/Lista-Skin/Todos',pathMatch:'full'}
];
