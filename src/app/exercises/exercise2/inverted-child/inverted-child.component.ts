import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inverted-child',
  templateUrl: './inverted-child.component.html',
  styleUrls: ['./inverted-child.component.css'],
})
export class InvertedChildComponent implements OnInit {
  childInput: string = '';
  @Output('emitedEvent') event = new EventEmitter<string>();
  constructor() {}

  onSubmit() {
    this.event.emit(this.childInput);
  }
  ngOnInit() {}
}
