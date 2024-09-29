import {AbstractControl, FormArray, ValidatorFn} from '@angular/forms';

export function atLeastOneSkillValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const skillsArray = control as FormArray;
    const hasAtLeastOneSkill = skillsArray.controls.some(skill => skill.value.trim() !== '');
    return hasAtLeastOneSkill ? null : { 'atLeastOneSkill': true };
  };
}
