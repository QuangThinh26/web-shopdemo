import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesseageComponent } from './messeage.component';

describe('MesseageComponent', () => {
  let component: MesseageComponent;
  let fixture: ComponentFixture<MesseageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesseageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesseageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
