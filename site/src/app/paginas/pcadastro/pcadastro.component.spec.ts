import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcadastroComponent } from './pcadastro.component';

describe('PcadastroComponent', () => {
  let component: PcadastroComponent;
  let fixture: ComponentFixture<PcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
