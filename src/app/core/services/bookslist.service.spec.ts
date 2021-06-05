import { TestBed } from '@angular/core/testing';

import { BookslistService } from './bookslist.service';

describe('BookslistService', () => {
  let service: BookslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
