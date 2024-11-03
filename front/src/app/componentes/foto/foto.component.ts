import { Component, inject, OnInit } from "@angular/core";
import {
    ImageCropperComponent,
    ImageCroppedEvent,
    LoadedImage,
} from "ngx-image-cropper";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { IonButton, IonInput } from "@ionic/angular/standalone";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiRestService } from "../../services/api-rest.service";
import { firstValueFrom } from "rxjs";

@Component({
    selector: "app-foto",
    standalone: true,
    imports: [ImageCropperComponent, IonButton, IonInput],
    templateUrl: "./foto.component.html",
})
export class FotoComponent {
    private _imageBlob: Blob | null | undefined = undefined;
    private _http = inject(HttpClient);

    imageChangedEvent: Event | null = null;
    croppedImage: SafeUrl = "";

    constructor(private sanitizer: DomSanitizer) {}

    fileChangeEvent(event: Event): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this._imageBlob = event.blob;
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
    async submitImage() {
        if (!this._imageBlob) {
            alert("Primero selecciona una imagen!");
            return;
        }

        const formData = new FormData();
        formData.append("photo", this._imageBlob, "cropped-image.jpg");

        try {
            await firstValueFrom(
                this._http.put("http://localhost/back/picture", formData)
            );
            alert("uploaded");
        } catch (error) {
            console.error("Upload failed", error);
            alert(
                "Upload failed. Please try again. The file may be too large."
            );
        }
    }
}
