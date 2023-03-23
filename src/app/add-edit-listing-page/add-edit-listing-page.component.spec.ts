import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditListingPageComponent } from './add-edit-listing-page.component';

describe('AddEditListingPageComponent', () => {
  let component: AddEditListingPageComponent;
  let fixture: ComponentFixture<AddEditListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditListingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
