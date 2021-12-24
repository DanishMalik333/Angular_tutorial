import { Component, OnInit } from '@angular/core';
//import { trigger, style, transition, animate, query, stagger, keyframes } from '@angular/animations';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [

  //   trigger('goals', [

  //     transition('* => *', [

  //       query(':enter', style({ opacity: 0 }), { optional: true }),

  //       query(':enter', stagger('300', [
  //         animate('.6s ease in', keyframes([
  //           style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
  //           style({ opacity: -5, transform: 'translateY(35px)', offset: .3 }),
  //           style({ opacity: 0, transform: 'translateY(0)', offset: 1 }),
  //         ]))]
  //         )
  //         ,{ optional: true })        
  //       ])
  //   ])    
  // ]
})
export class HomeComponent implements OnInit {

  itemcount: number;
  btntext: string = 'Add an item';
  goaltext: string = 'My first life goal';
  goals = [];

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.goal.subscribe(res => this.goals = res)
    this.itemcount = this.goals.length;
    this._data.changegoals(this.goals);
  }
  addItem() {
    if (this.goaltext != "") {
      this.goals.push(this.goaltext)
      this.goaltext = '';
      this.itemcount = this.goals.length;
      this._data.changegoals(this.goals);
    }

  }
  removeitem(i) {
    this.goals.splice(i, 1)
    this.itemcount = this.goals.length;
    this._data.changegoals(this.goals);
  }


}
