import { Component, OnInit, Input } from '@angular/core';
import { TranemModel } from '../tranem.model';

@Component({
  selector: 'app-tranem-item',
  templateUrl: './tranem-item.component.html',
  styleUrls: ['./tranem-item.component.scss'],
})
export class TranemItemComponent implements OnInit {

  @Input() tranemItem: TranemModel;
  constructor() { }

  ngOnInit() {}

}
