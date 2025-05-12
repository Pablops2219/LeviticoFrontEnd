import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNoeComponent } from './main-noe.component';

describe('MainNoeComponent', () => {
  let component: MainNoeComponent;
  let fixture: ComponentFixture<MainNoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNoeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
