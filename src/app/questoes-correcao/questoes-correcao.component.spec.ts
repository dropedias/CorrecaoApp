import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestoesCorrecaoComponent } from './questoes-correcao.component';

describe('QuestoesCorrecaoComponent', () => {
  let component: QuestoesCorrecaoComponent;
  let fixture: ComponentFixture<QuestoesCorrecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestoesCorrecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestoesCorrecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
