import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {AssociatedTaskInterface} from "../../interface/associatedTask.interface";

export function uniqueNameValidator(existingNames: AssociatedTaskInterface[] ): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return existingNames.find(item => item.nameUser.toLowerCase() == value.toLowerCase()) ? { notUnique: true } : null;
  };
}
