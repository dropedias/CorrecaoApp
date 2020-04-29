import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoDetailComponent } from './questao-detail.component';

describe('QuestaoDetailComponent', () => {
  let component: QuestaoDetailComponent;
  let fixture: ComponentFixture<QuestaoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestaoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
