import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CodePreviewComponent } from '../../../partials/code-preview/code-preview.component';
const defaultAlert = {
    htmlCode: `<ngb-alert [dismissible]="false" [type]="'primary'">
  A simple primary alert—check it out!
</ngb-alert>

<ngb-alert [dismissible]="false" [type]="'secondary'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'success'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'danger'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'warning'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'info'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'light'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'dark'">...</ngb-alert>`,
    tsCode: `import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    NgbAlertModule,
  ],
  templateUrl: './alerts.component.html'
})
export class AlertsComponent {}`
};
const fillAlert = {
    htmlCode: `<ngb-alert [dismissible]="false" [type]="'fill-primary'">
  A simple primary alert—check it out!
</ngb-alert>`,
    tsCode: `import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    NgbAlertModule,
  ],
  templateUrl: './alerts.component.html'
})
export class AlertsComponent {}`
};
const iconAlert = {
    htmlCode: `<ngb-alert [dismissible]="false" [type]="'primary'">
  <i class="feather icon-alert-circle"></i>
  A simple primary alert—check it out!
</ngb-alert>`,
    tsCode: `import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    NgbAlertModule,
  ],
  templateUrl: './alerts.component.html'
})
export class AlertsComponent {}`
};
const linkAlert = {
    htmlCode: `<ngb-alert [dismissible]="false" [type]="'primary'">
  A simple dark alert with <a href="" (click)="false" class="alert-link">an example link</a>. Give it a click if you like.
</ngb-alert>`,
    tsCode: `import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    NgbAlertModule,
  ],
  templateUrl: './alerts.component.html'
})
export class AlertsComponent {}`
};
const additionalContentAlert = {
    htmlCode: `<ngb-alert [dismissible]="false" [type]="'success'">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</ngb-alert>`,
    tsCode: `import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    NgbAlertModule,
  ],
  templateUrl: './alerts.component.html'
})
export class AlertsComponent {}`
};
const dismissingAlert = {
    htmlCode: `@if (!alert1closed) {
  <ngb-alert [type]="'primary'" (close)="alert1closed=true">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  </ngb-alert>
}`,
    tsCode: `import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    NgbAlertModule,
  ],
  templateUrl: './alerts.component.html'
})
export class AlertsComponent {

  alert1closed: boolean = false;

}`
};
let AlertsComponent = class AlertsComponent {
    defaultAlertCode;
    fillAlertCode;
    iconAlertCode;
    linkAlertCode;
    additionalContentAlertCode;
    dismissingAlertCode;
    alert1closed = false;
    alert2closed = false;
    alert3closed = false;
    alert4closed = false;
    alert5closed = false;
    alert6closed = false;
    alert7closed = false;
    alert8closed = false;
    constructor() { }
    ngOnInit() {
        this.defaultAlertCode = defaultAlert;
        this.fillAlertCode = fillAlert;
        this.iconAlertCode = iconAlert;
        this.linkAlertCode = linkAlert;
        this.additionalContentAlertCode = additionalContentAlert;
        this.dismissingAlertCode = dismissingAlert;
    }
    scrollTo(element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
AlertsComponent = __decorate([
    Component({
        selector: 'app-alerts',
        imports: [
            CodePreviewComponent,
            NgbAlertModule,
        ],
        templateUrl: './alerts.component.html'
    })
], AlertsComponent);
export { AlertsComponent };
//# sourceMappingURL=alerts.component.js.map