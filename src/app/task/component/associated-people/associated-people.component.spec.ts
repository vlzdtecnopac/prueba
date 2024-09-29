import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedPeopleComponent } from './associated-people.component';

describe('AssociatedPeopleComponent', () => {
  let component: AssociatedPeopleComponent;
  let fixture: ComponentFixture<AssociatedPeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AssociatedPeopleComponent]
    });
    fixture = TestBed.createComponent(AssociatedPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
