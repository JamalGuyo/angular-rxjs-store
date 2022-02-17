import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { State } from './state';

// INITIAL STATE OF THE STORE
const state: State = {
  playlist: [],
};

export class Store {
  // DEFINE BEHAVIOUR SUBJECT
  private subject = new BehaviorSubject<State>(state);

  // DEFINE STORE
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  // GET ALL VALUES FROM STORE
  get values() {
    return this.subject.value;
  }

  //   GET SPECIFIC VALUE FROM STORE
  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name)) as Observable<T>;
  }

  //   ADD / UPDATE STORE DATA
  set(name: string, state: any) {
    this.subject.next({
      ...this.values,
      [name]: state,
    });
  }
}
