import { __decorate } from "tslib";
import { NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArchwizardModule } from '@rg-software/angular-archwizard';
import { FeatherIconDirective } from '../../../../core/feather-icon/feather-icon.directive';
let WizardComponent = class WizardComponent {
    formBuilder;
    validationForm1;
    validationForm2;
    isForm1Submitted;
    isForm2Submitted;
    wizardForm;
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        /**
         * form1 value validation
         */
        this.validationForm1 = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.required]
        });
        /**
         * formw value validation
         */
        this.validationForm2 = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            mobileNumber: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.isForm1Submitted = false;
        this.isForm2Submitted = false;
    }
    /**
     * Wizard finish function
     */
    finishFunction() {
        alert('Successfully Completed');
    }
    /**
     * Returns form
     */
    get form1() {
        return this.validationForm1.controls;
    }
    /**
     * Returns form
     */
    get form2() {
        return this.validationForm2.controls;
    }
    /**
     * Go to next step while form value is valid
     */
    form1Submit() {
        if (this.validationForm1.valid) {
            this.wizardForm.goToNextStep();
        }
        this.isForm1Submitted = true;
    }
    /**
     * Go to next step while form value is valid
     */
    form2Submit() {
        if (this.validationForm2.valid) {
            this.wizardForm.goToNextStep();
        }
        this.isForm2Submitted = true;
    }
};
__decorate([
    ViewChild('wizardForm')
], WizardComponent.prototype, "wizardForm", void 0);
WizardComponent = __decorate([
    Component({
        selector: 'app-wizard',
        imports: [
            RouterLink,
            ArchwizardModule,
            NgClass,
            ReactiveFormsModule,
            FeatherIconDirective
        ],
        templateUrl: './wizard.component.html'
    })
], WizardComponent);
export { WizardComponent };
//# sourceMappingURL=wizard.component.js.map