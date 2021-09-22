import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeBorrado: string = '';
  heroes: string[] = ['Spiderman', 'Capitan America' ,'Ironman','Hulk']
  
  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
