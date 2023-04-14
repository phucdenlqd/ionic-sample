/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoCardService } from './todo-list.service';

describe('Service: TodoCard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoCardService]
    });
  });

  it('should ...', inject([TodoCardService], (service: TodoCardService) => {
    expect(service).toBeTruthy();
  }));
});
