import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['the initial goal','another one'])
  goal = this.goals.asObservable();
  
  constructor() { }

  changegoals(goal){ 
    this.goals.next(goal);
  }

}
