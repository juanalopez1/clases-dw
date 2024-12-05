import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { IonHeader, IonRouterOutlet } from "@ionic/angular/standalone";
import { ImageCropperComponent } from 'ngx-image-cropper';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonRouterOutlet, IonHeader, RouterOutlet, HomeComponent, ImageCropperComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
