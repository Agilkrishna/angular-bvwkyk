import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  HostListener,
  OnChanges,
  OnInit,
SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Product List</h2>
    <div style="position: fixed; top: 0; right: 0; background: black; color: white;">
      <div>Number of viewChecked: {{ viewCheckedCount }}</div>
      <div>Highest number of product initialized: {{ highestNumberOfProductInitialized }}</div>
      <div>Time spent on page: {{ timer | date: 'HH:mm:ss' }}</div>
    </div>

    <ul>
      <li *ngFor="let product of products">
        <app-product
          [product]="product"
          (initializedCount)="updateHighestNumberOfProductInitialized($event)"
        ></app-product>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit , DoCheck{

  products: Product[] = [];
  viewCheckedCount = 0;
  highestNumberOfProductInitialized = 0;
  timer = new Date(0, 0, 0);
  initialLoadComplete = false;
  constructor(private cdRef: ChangeDetectorRef) {}
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const documentHeight = document.body.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;
    const buffer = 200;
    if (!this.initialLoadComplete && currentScroll >= documentHeight - buffer) {
      this.loadInitialProducts();
    } else if (
      this.initialLoadComplete &&
      currentScroll >= documentHeight - buffer
    ) {
      this.loadProducts();
    }
  }

  ngOnInit() {
    this.loadInitialProducts();

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
  ngDoCheck(){
    this.viewCheckedCount++;
  }
  loadInitialProducts() {
    const initialProducts = Array(10)
      .fill('')
      .map((o, i) => ({
        id: i.toString(),
        description: `mock product description ${i}`,
      }));
    this.products = initialProducts.map((p) => ({ ...p }));
    this.initialLoadComplete = true;
  }

  loadProducts() {
    const start = this.products.length;
    const newProducts = Array(10)
      .fill('')
      .map((o, i) => ({
        id: (i + start).toString(),
        description: `mock product description ${i + start}`,
      }));
    this.products = this.products.concat(...newProducts).map((p) => ({ ...p }));
  }
}


export interface Product {
  id: string;
  description: string;
}
