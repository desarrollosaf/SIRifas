import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropzoneDirective, DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
const DEFAULT_DROPZONE_CONFIG = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
};
let NgxDropzoneWrapperComponent = class NgxDropzoneWrapperComponent {
    config = {
        clickable: true,
        maxFiles: 10,
        autoReset: null,
        errorReset: null,
        cancelReset: null,
        addRemoveLinks: true,
        dictRemoveFile: "Delete",
    };
    directiveRef;
    constructor() { }
    onUploadError(event) {
        console.log('onUploadError:', event);
    }
    onUploadSuccess(event) {
        console.log('onUploadSuccess:', event);
    }
    resetDropzoneUploads() {
        if (this.directiveRef) {
            this.directiveRef.reset();
        }
    }
    onRemovedFile(file) {
        console.log(file);
    }
};
__decorate([
    ViewChild(DropzoneDirective, { static: false })
], NgxDropzoneWrapperComponent.prototype, "directiveRef", void 0);
NgxDropzoneWrapperComponent = __decorate([
    Component({
        selector: 'app-ngx-dropzone-wrapper',
        imports: [
            RouterLink,
            DropzoneModule
        ],
        providers: [
            {
                provide: DROPZONE_CONFIG,
                useValue: DEFAULT_DROPZONE_CONFIG
            }
        ],
        templateUrl: './ngx-dropzone-wrapper.component.html'
    })
], NgxDropzoneWrapperComponent);
export { NgxDropzoneWrapperComponent };
//# sourceMappingURL=ngx-dropzone-wrapper.component.js.map