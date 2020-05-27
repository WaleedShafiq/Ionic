import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranemService } from '../tranem.service';
import { TranemModel } from '../tranem.model';

@Component({
  selector: 'app-tranem-detail',
  templateUrl: './tranem-detail.page.html',
  styleUrls: ['./tranem-detail.page.scss'],
})
export class TranemDetailPage implements OnInit {

  loadedTranema: TranemModel;
  constructor(private activatedRoute: ActivatedRoute, private tranemService: TranemService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('tranemaId')) {
        this.router.navigate(['/tranem']);
        return;
      }
      const tranemaId = paramMap.get('tranemaId');
      this.loadedTranema =  this.tranemService.getTranemaById(tranemaId);
    });
  }

}
