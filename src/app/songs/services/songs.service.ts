import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@app/store';
import { environment as env } from '@env/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private store: Store, private http: HttpClient) {}

  getPlaylists$ = this.http
    .get(env.api)
    .pipe(tap((playlist) => this.store.set('playlist', playlist)));
}
