import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCustomComponent } from './generate-custom.component';

describe('GenerateCustomComponent', () => {
  let component: GenerateCustomComponent;
  let fixture: ComponentFixture<GenerateCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
