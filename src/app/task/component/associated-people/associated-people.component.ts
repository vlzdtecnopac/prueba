import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as actions from "../../../store/actions";
import {NgZorroAntdModule} from "../../../ng-zorro-antd.module";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import {NzIconModule} from "ng-zorro-antd/icon";
import {AssociatedTaskInterface} from "../../../interface/associatedTask.interface";
import {uniqueNameValidator} from "../../validators/unique-name.validate";
import {atLeastOneSkillValidator} from "../../validators/at-leastOneSkill.validate";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducers";


@Component({
  selector: 'app-associated-people',
  standalone: true,
  imports: [CommonModule, NgZorroAntdModule, NzIconModule, ReactiveFormsModule],
  templateUrl: './associated-people.component.html',
  styleUrls: ['./associated-people.component.scss']
})
export class AssociatedPeopleComponent implements OnInit{

  validateForm: FormGroup;
  listTaskAssociated: AssociatedTaskInterface[] = []

  constructor(private fb: FormBuilder,
              private store: Store<AppState>) {
    this.validateForm = this.fb.group({
      nameUser: ['', [Validators.required, uniqueNameValidator(this.listTaskAssociated)]],
      nameAge: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array<string>([], atLeastOneSkillValidator())
    });
  }

  get skills(): FormArray {
    return this.validateForm.get('skills') as FormArray;
  }

  getValue(event: Event): string {
    const target = event.target as HTMLInputElement;
    return target ? target.value : '';
  }

  addSkill() {
    const skillControl = this.fb.control('', Validators.required);
    this.skills.push(skillControl);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  updateSkill(index: number, newValue: string) {
    this.skills.at(index).setValue(newValue); // O usa patchValue
  }

  submitFormAssociated(): void {
    if (this.validateForm.valid) {
      this.listTaskAssociated.push(this.validateForm.value);
      this.validateForm.get("nameUser")?.setValue("");
      this.validateForm.get("nameAge")?.setValue("");
      this.skills.clear()
      this.addInitialField()
      this.store.dispatch( actions.create({ payload: [...this.listTaskAssociated] }) );
    } else {
      for (const control of Object.keys(this.validateForm.controls)) {
        this.validateForm.controls[control].markAsDirty();
        this.validateForm.controls[control].updateValueAndValidity();
      }
    }
  }

  ngOnInit(): void {
    this.addInitialField()
  }

  addInitialField(): void {
    this.skills.push(this.fb.control('', Validators.required));
  }
}
