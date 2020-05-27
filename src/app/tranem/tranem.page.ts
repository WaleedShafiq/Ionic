import { Component, OnInit } from '@angular/core';
import { TranemModel } from './tranem.model';
import { TranemService } from './tranem.service';

@Component({
  selector: 'app-tranem',
  templateUrl: './tranem.page.html',
  styleUrls: ['./tranem.page.scss'],
})
export class TranemPage implements OnInit {

  tranems: TranemModel[];

  constructor(private tranemService: TranemService) { }

  ngOnInit() {
    this.tranems = this.tranemService.getAllTranem();
  }

}
