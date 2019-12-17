import { Store, select } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cart$: Observable<[]>

  constructor(
    private store: Store<{ cart: [] }>
  ) {
    this.cart$ = store.pipe(select('cart'))
  }
}
