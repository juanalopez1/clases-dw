import { Component, OnInit } from '@angular/core';
import { ImageCropperComponent, ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-foto',
  standalone: true,
  imports: [ImageCropperComponent, IonButton, IonInput],
  templateUrl: './foto.component.html',
})
export class FotoComponent {

  private _imageBlob : Blob | null | undefined = undefined;

  imageChangedEvent: Event | null = null;
    croppedImage: SafeUrl  = '';

    constructor(
      private sanitizer: DomSanitizer
    ) {
    }

    fileChangeEvent(event: Event): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
      this._imageBlob = event.blob
      // event.blob can be used to upload the cropped image
    }
    imageLoaded(image: LoadedImage) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

    // falta boton para guardar y la logica!!!
}
