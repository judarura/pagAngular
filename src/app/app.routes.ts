import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
    {path: "", component:InicioComponent},
    {path: "inicio", component:InicioComponent},
    {path:"nosotros", component:NosotrosComponent},
    {path: "productos", component:ProductosComponent}
];
