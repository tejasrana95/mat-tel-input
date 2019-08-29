import { TestBed } from '@angular/core/testing';
import { matTelInputService } from './mat-tel-input.service';


describe('matTelInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: matTelInputService = TestBed.get(matTelInputService);
    expect(service).toBeTruthy();
  });
});
