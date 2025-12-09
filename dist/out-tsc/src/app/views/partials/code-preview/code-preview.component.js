import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Highlight } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
let CodePreviewComponent = class CodePreviewComponent {
    // Public properties
    codeContent;
    defaultNavActiveId = undefined;
    copy = 'copy';
    constructor() { }
    copied(e) {
        if (e.isSuccess) {
            this.copy = 'copied';
            setTimeout(() => {
                this.copy = 'copy';
            }, 500);
        }
    }
};
__decorate([
    Input()
], CodePreviewComponent.prototype, "codeContent", void 0);
CodePreviewComponent = __decorate([
    Component({
        selector: 'app-code-preview',
        imports: [
            NgbNavModule,
            Highlight,
            ClipboardModule
        ],
        templateUrl: './code-preview.component.html'
    })
], CodePreviewComponent);
export { CodePreviewComponent };
//# sourceMappingURL=code-preview.component.js.map