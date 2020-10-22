import {Injectable} from '@angular/core';
import AppState from './app.state';
import {Action, Selector, State, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable()
export class InspirdStoreService {

    constructor(private store: Store<AppState>) {
    }

    public select<K>(selector): Observable<K> {
        return this.store.select(selector);
    }

    public dispatch(action: Action) {
        this.store.dispatch(action);
    }
}
