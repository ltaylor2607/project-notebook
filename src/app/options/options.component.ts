import { Component, OnInit } from '@angular/core';
import { OptionListService } from './option-list.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  providers: [
    OptionListService
  ]
})
export class OptionsComponent implements OnInit {
  optionList: string[];

  constructor(optionListService: OptionListService) {
    this.optionList = optionListService.options;
   }

  ngOnInit() {
  }

}
