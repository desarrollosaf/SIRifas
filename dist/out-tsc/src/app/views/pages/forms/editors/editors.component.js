import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
let EditorsComponent = class EditorsComponent {
    htmlText = `<p> If You Can Think It, You Can Do It. </p>`;
    quillConfig = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                ['code-block'],
                //  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
                [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
                //  [{ 'direction': 'rtl' }],                         // text direction
                //  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'align': [] }],
                //  ['clean'],                                         // remove formatting button
                //  ['link'],
                ['link', 'image', 'video']
            ],
        },
    };
    constructor() { }
    onSelectionChanged = (event) => {
        if (event.oldRange == null) {
            this.onFocus();
        }
        if (event.range == null) {
            this.onBlur();
        }
    };
    onContentChanged = (event) => {
        // console.log(event.html);
    };
    onFocus = () => {
        console.log("On Focus");
    };
    onBlur = () => {
        console.log("Blurred");
    };
};
EditorsComponent = __decorate([
    Component({
        selector: 'app-editors',
        imports: [
            RouterLink,
            QuillModule,
            FormsModule
        ],
        templateUrl: './editors.component.html'
    })
], EditorsComponent);
export { EditorsComponent };
//# sourceMappingURL=editors.component.js.map