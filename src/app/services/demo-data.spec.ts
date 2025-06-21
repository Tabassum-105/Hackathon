import { TestBed } from '@angular/core/testing';

import { DemoData } from './demo-data';
import {  HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('DemoData', () => {
  let service: DemoData;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DemoData, provideHttpClientTesting()]
    });
    service = TestBed.inject(DemoData);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
