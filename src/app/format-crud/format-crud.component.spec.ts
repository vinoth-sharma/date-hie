import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatCrudComponent } from './format-crud.component';

describe('FormatCrudComponent', () => {
  let component: FormatCrudComponent;
  let fixture: ComponentFixture<FormatCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
