import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMovsComponent } from './last-movs.component';

describe('LastMovsComponent', () => {
  let component: LastMovsComponent;
  let fixture: ComponentFixture<LastMovsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastMovsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMovsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
