import { Host, Inject, forwardRef } from '@angular/core';
import { ClrWizardPage } from "@clr/angular";

abstract class WizardStep {
    constructor(
        @Host() @Inject(forwardRef(() => ClrWizardPage)) protected parent: ClrWizardPage) {
    }

    nextStepDisabled(disabled = true) {
        this.parent.nextStepDisabled = disabled;

    }

    nextStep(callback: (...args: any[]) => void) {
        callback(callback.arguments);
    }
}
