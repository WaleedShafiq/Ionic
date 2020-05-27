import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/add/operator/map';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

// tranem: any[] = [];
  constructor(
    // private http: HttpClient
    ) {}

  ngOnInit(): void {
  //  this.getTranemDate();
  }

  // getTranemDate() {
  //   // this.http.get('assets/tranem/tranem.json').subscribe(res => {
  //   //   this.tranem.push(res);
  //     console.log(this.tranem);
  //   // },
  //   // (err) => {
  //   //   alert('failed loading json data');
  //   // });
  // }
}
