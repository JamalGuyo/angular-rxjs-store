import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@app/store';
import { environment as env } from '@env/environment';
import { Observable, tap } from 'rxjs';

export interface Song {
  id: number;
  artist: string;
  track: string;
  listened: boolean;
  favourite: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private store: Store, private http: HttpClient) {}

  getPlaylist(): Observable<Song[]> {
    return this.http.get<Song[]>(`${env.api}/playlist`).pipe(
      tap((playlist: Song[]) => {
        this.store.set('playlist', playlist);
      })
    );
  }

  toggle(event: { [track: string]: Song }) {
    return (
      this.http
        .put(`${env.api}/playlist/${event['track'].id}`, event['track'])
        // .pipe(tap((data) => console.log(data)))
        .subscribe((track: any) => {
          const value = this.store.values;
          const playlist = value.playlist.map((song: Song) => {
            if (event['track'].id === song.id) {
              return { ...song, ...event['track'] };
            } else {
              return song;
            }
          });
          this.store.set('playlist', playlist);
        })
    );
  }
}
