import { Component, Input, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  standalone:true
})
export class HijoComponent  implements OnInit {
  //@Input() nombre!: string;
  nombre = input<string>()
  mensaje = output<string>()
  constructor() { }

  ngOnInit() {
    this.sendMessage()
  }

  sendMessage(){
    this.mensaje.emit('ayayayay')
  }

}
