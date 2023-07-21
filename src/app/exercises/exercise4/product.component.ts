import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    {{ count }}
    <img [src]="'https://picsum.photos/id/'+product.id+'/200/300'">
    <p>{{ product.description }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit, AfterViewInit {
  static productCreationCount: any = {};
  count = 0;

  @Input()
  product: any;

  @Output()
  initializedCount = new EventEmitter();

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    ProductComponent.productCreationCount[this.product.id] =
      (ProductComponent.productCreationCount[this.product.id] ?? 0) + 1;
    this.count = ProductComponent.productCreationCount[this.product.id];
    this.initializedCount.emit(this.count);
  }
}
