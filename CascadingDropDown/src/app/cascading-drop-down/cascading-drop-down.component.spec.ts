import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingDropDownComponent } from './cascading-drop-down.component';

describe('CascadingDropDownComponent', () => {
  let component: CascadingDropDownComponent;
  let fixture: ComponentFixture<CascadingDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadingDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadingDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
