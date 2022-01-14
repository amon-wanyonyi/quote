import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  Numbers:number = 0;
  quotes:Quote[] = [
    new Quote("Master", "Dr. Eduardo Chivambo Mondlane", "A luta continua", new Date(1,1,2022))
  ]

  constructor() { }

  ngOnInit(): void {
  }

  fun(d:any) {
    d.date = new Date(d.date)
    this.quotes.push(d)
  }

  dels(Del:any,i:number) {
    if (Del) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[i].publisher}?`)
      if(toDelete) {
        this.quotes.slice(i,1)
      }
    }
  }

  vote(i:number) {
    this.quotes[i].vote = this.quotes[i].vote + 1
    if(this.quotes[i].vote > this.Numbers) {
      this.Numbers = this.quotes[i].vote
    }
  }

}
