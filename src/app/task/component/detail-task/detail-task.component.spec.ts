import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTaskComponent } from './detail-task.component';

describe('DetailTaskComponent', () => {
  let component: DetailTaskComponent;
  let fixture: ComponentFixture<DetailTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailTaskComponent]
    });
    fixture = TestBed.createComponent(DetailTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
