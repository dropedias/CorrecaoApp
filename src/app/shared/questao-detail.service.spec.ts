import { TestBed } from '@angular/core/testing';

import { QuestaoDetailService } from './questao-detail.service';

describe('QuestaoDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestaoDetailService = TestBed.get(QuestaoDetailService);
    expect(service).toBeTruthy();
  });
});
