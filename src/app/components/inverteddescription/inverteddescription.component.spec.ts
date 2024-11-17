import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverteddescriptionComponent } from './inverteddescription.component';

describe('InverteddescriptionComponent', () => {
  let component: InverteddescriptionComponent;
  let fixture: ComponentFixture<InverteddescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InverteddescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InverteddescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
