import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaPaginaComponent } from './casa-pagina.component';

describe('CasaPaginaComponent', () => {
  let component: CasaPaginaComponent;
  let fixture: ComponentFixture<CasaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasaPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
