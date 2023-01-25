import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviadorMetrepayComponent } from './enviador-metrepay.component';

describe('EnviadorMetrepayComponent', () => {
  let component: EnviadorMetrepayComponent;
  let fixture: ComponentFixture<EnviadorMetrepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviadorMetrepayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviadorMetrepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
