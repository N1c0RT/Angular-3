import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloSwitchComponent } from './profilo-switch.component';

describe('ProfiloSwitchComponent', () => {
  let component: ProfiloSwitchComponent;
  let fixture: ComponentFixture<ProfiloSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfiloSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiloSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
