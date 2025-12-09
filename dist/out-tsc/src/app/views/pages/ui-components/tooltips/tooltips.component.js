import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CodePreviewComponent } from '../../../partials/code-preview/code-preview.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
const defaultTooltips = {
    htmlCode: `<button type="button" class="btn btn-primary me-1" placement="top" ngbTooltip="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-primary me-1" placement="end" ngbTooltip="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-primary me-1" placement="bottom" ngbTooltip="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-primary me-1" placement="start" ngbTooltip="Tooltip on left">
  Tooltip on left
</button>`,
    tsCode: `import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [NgbTooltipModule]
  templateUrl: './tooltips.component.html'
})
export class TooltipsComponent {}`
};
let TooltipsComponent = class TooltipsComponent {
    defaultTooltipsCode;
    constructor() { }
    ngOnInit() {
        this.defaultTooltipsCode = defaultTooltips;
    }
    scrollTo(element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
TooltipsComponent = __decorate([
    Component({
        selector: 'app-tooltips',
        imports: [
            CodePreviewComponent,
            NgbTooltipModule
        ],
        templateUrl: './tooltips.component.html'
    })
], TooltipsComponent);
export { TooltipsComponent };
//# sourceMappingURL=tooltips.component.js.map