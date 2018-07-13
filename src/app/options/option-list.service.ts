import { Injectable } from '@angular/core';

@Injectable()
export class OptionListService {

  constructor() { }

  get options() {
    return [
      'Notebooks',
      'Homeworks',
      'Assessments'
    ]
  }

}
