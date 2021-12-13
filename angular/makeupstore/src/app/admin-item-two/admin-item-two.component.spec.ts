import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemTwoComponent } from './admin-item-two.component';

describe('AdminItemTwoComponent', () => {
  let component: AdminItemTwoComponent;
  let fixture: ComponentFixture<AdminItemTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
