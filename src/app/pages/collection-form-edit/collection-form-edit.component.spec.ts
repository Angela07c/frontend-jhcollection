import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFormEditComponent } from './collection-form-edit.component';

describe('CollectionFormEditComponent', () => {
  let component: CollectionFormEditComponent;
  let fixture: ComponentFixture<CollectionFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionFormEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
