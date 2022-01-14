import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() Data = new EventEmitter()

  quotes: Quote = new Quote("","","", new Date())

  fetchData(detail:any) {
    let details = new Quote(detail.value.publisher, detail.value.author, detail.value.quote, detail.value.date)
    this.Data.emit(details)

    detail.reset()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
