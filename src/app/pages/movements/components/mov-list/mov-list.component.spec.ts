import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovListComponent } from './mov-list.component';

describe('MovListComponent', () => {
  let component: MovListComponent;
  let fixture: ComponentFixture<MovListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
