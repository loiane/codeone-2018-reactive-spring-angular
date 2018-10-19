import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, filter, takeUntil } from 'rxjs/operators';
import { ShoppingCartStoreService } from '../../store/shopping-cart-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {

  searchQuery = '';
  cartCount$: Observable<number>;
  destroySub = new Subject();

  constructor(private service: ShoppingCartStoreService) { }

  ngOnInit() {
    this.cartCount$ = this.service.getCartCount();
  }

  watchSearch() {
    of(this.searchQuery)
      .pipe(
        delay(2000),
        filter(query => query.length > 3),
        takeUntil(this.destroySub)
      )
      .subscribe(query => this.service.dispatchSearch(query));
  }

  ngOnDestroy() {
    this.destroySub.next(true);
    this.destroySub.complete();
  }

  checkoutCart() {

  }

}
