import { Component, OnInit } from '@angular/core';
import { Map } from 'ol';
import { DeflateRaw } from 'zlib';

export interface Punto{
  latitud: number,
  longitud: number
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent  implements OnInit {

  map! : Map;
  //draw!: Draw;
  //modify!


  constructor() { }

  ngOnInit() {}

}
