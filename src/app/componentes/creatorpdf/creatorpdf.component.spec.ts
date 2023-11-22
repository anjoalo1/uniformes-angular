import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorpdfComponent } from './creatorpdf.component';

describe('CreatorpdfComponent', () => {
  let component: CreatorpdfComponent;
  let fixture: ComponentFixture<CreatorpdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorpdfComponent]
    });
    fixture = TestBed.createComponent(CreatorpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
