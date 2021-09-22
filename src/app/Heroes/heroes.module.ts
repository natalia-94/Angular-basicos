import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Components
import { HeroeComponent } from './Heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        //solo modulos
        CommonModule
    ]
})
export class HeroesModule{}