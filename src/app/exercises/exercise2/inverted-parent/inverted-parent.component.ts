import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inverted-parent',
  templateUrl: './inverted-parent.component.html',
  styleUrls: ['./inverted-parent.component.css'],
})
export class InvertedParentComponent implements OnInit {
  childData!: string;
  capturedEvent(value: string) {
    this.childData = value;
  }
  constructor() {}

  ngOnInit() {}
}
