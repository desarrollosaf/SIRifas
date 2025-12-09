import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
let CropperComponent = class CropperComponent {
    sanitizer;
    showImageCropper = false;
    imageUrl = 'images/others/placeholder.jpg';
    // imageUrl: string = '';
    isLoadImageFailed = false;
    isNoFileChosen = false;
    imageChangedEvent = null;
    croppedImage = '';
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        if (this.imageUrl) {
            this.showImageCropper = true;
        }
    }
    fileChangeEvent(event) {
        this.showImageCropper = false;
        const target = event.target;
        if (target?.files?.length) {
            this.imageChangedEvent = event;
            this.showImageCropper = true;
            this.isLoadImageFailed = false;
            this.isNoFileChosen = false;
            this.imageUrl = '';
        }
        else {
            this.isNoFileChosen = true;
            this.isLoadImageFailed = false;
        }
    }
    imageCropped(event) {
        this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || '');
        // event.blob can be used to upload the cropped image
        // Download button
        let downloadButton = document.querySelector('#croppedImageDownload');
        downloadButton.setAttribute('href', event.objectUrl);
    }
    imageLoaded(image) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
        this.showImageCropper = false;
        this.isLoadImageFailed = true;
        this.isNoFileChosen = false;
        console.log('Failed to load image');
    }
};
CropperComponent = __decorate([
    Component({
        selector: 'app-cropper',
        imports: [
            RouterLink,
            FormsModule,
            ImageCropperComponent
        ],
        templateUrl: './cropper.component.html'
    })
], CropperComponent);
export { CropperComponent };
//# sourceMappingURL=cropper.component.js.map