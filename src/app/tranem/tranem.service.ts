import { Injectable } from '@angular/core';
import { TranemModel } from './tranem.model';

@Injectable({
  providedIn: 'root'
})
export class TranemService {
 private tranems: TranemModel[] = [
    {id: '1', name: 'الرب', content: 'لي راعي'},
    {id: '2', name: 'هارمي', content: 'لي راعي'},
    {id: '3', name: 'كل يوم', content: 'لي راعي'},


  ];
  constructor() { }

  getAllTranem() {
    return [...this.tranems];
  }

  getTranemaById(tranemaId: string) {
    return {...this.tranems.find(tranmea => {
      return tranmea.id === tranemaId;
    })};
  }
}
