import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DengueCasesDetailsComponent } from './dengue-cases-details.component';

describe('DengueCasesDetailsComponent', () => {
  let component: DengueCasesDetailsComponent;
  let fixture: ComponentFixture<DengueCasesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DengueCasesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DengueCasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
