import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoListComponent } from './questao-list.component';

describe('QuestaoListComponent', () => {
  let component: QuestaoListComponent;
  let fixture: ComponentFixture<QuestaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
