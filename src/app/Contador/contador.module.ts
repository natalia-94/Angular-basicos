import { NgModule } from '@angular/core';

//Components
import { ContadorComponent } from './Contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports: [

    ]
})
export class ContadorModule{

}