import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Product List</h2>
    <div style="position: fixed; top: 0; right: 0; background: black; color: white;">
      <div >Number of viewChecked: {{viewCheckedCount}}</div>
      <div>Highest number of product initialized: {{highestNumberOfProductInitialized}}</div>
      <div>Time spent on page: {{timer | date:'HH:mm:ss'}}</div>
    </div>

    <ul>
      <li *ngFor="let product of products; trackBy: trackByProductId">
        <app-product [product]="product" (initializedCount)="updateHighestNumberOfProductInitialized($event)"></app-product>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductListComponent implements OnInit, AfterViewChecked {
  constructor(private cd: ChangeDetectorRef) {}
  private previousProductsLength: number = 0;
  products: Product[] = [];
  viewCheckedCount = 0;
  highestNumberOfProductInitialized = 0;
  timer = new Date(0, 0, 0);

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    let buffer = 200;
    if (currentScroll + buffer > documentHeight) {
      this.loadProducts();
    }
  }
  trackByProductId(index: number, product: Product): string {
    return product.id;
  }

  ngOnInit() {
    this.loadProducts();
    const delay = 100;
    let timeSpent = 0;
    setInterval(() => {
      this.timer = new Date(0, 0, 0);
      timeSpent += delay;
      this.timer.setSeconds(timeSpent / 1000);
    }, delay);
  }

  updateHighestNumberOfProductInitialized(count: number) {
    this.highestNumberOfProductInitialized = Math.max(
      this.highestNumberOfProductInitialized,
      count
    );
  }

  loadProducts() {
    // DO NOT CHANGE THIS FUNCTION
    const start = this.products.length;
    const newProducts = Array(10)
      .fill('')
      .map((o, i) => ({
        id: (i + start).toString(),
        description: `mock product description ${i + start}`,
      }));
    this.products = this.products.concat(...newProducts).map((p) => ({ ...p }));
    this.cd.markForCheck();
  }

  ngAfterViewChecked(): void {
    if (this.products.length > this.previousProductsLength) {
      this.previousProductsLength = this.products.length;
      ++this.viewCheckedCount;
    }
  }
}

export interface Product {
  id: string;
  description: string;
}
