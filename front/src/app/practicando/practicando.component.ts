import { Component, OnInit } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';
import { FotoComponent } from "../componentes/foto/foto.component";

@Component({
  selector: 'app-practicando',
  templateUrl: './practicando.component.html',
  standalone:true,
  imports: [HijoComponent, FotoComponent]
})
export class PracticandoComponent  implements OnInit {

  constructor() { }

  // input y output son para que los componentes se comuniquen
  // input sirve para que un componente hijo reciba datos del papa
  // output para que el hijo mande un evento al papa
  ngOnInit() {

  }

  receiveMessage(message: string){
    console.log(message)
  }

}
