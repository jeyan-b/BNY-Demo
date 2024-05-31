import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from './states/counter/counter.selector';
import { AppState } from './states/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';

  count$: Observable<number>;

  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount)
  }
}
