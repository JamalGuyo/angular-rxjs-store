import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Store } from 'src/app/store';

@Component({
  selector: 'songs-favourites',
  template: ` <div>
    <h1>Songs Favourites</h1>
    <hr />
    <div *ngFor="let song of favourites$ | async; let i = index">
      {{ i }} {{ song.artist }} - {{ song.track }}
    </div>
  </div>`,
})
export class SongsFavouritesComponent implements OnInit {
  favourites$!: Observable<any[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favourites$ = this.store.select('playlist').pipe(
      filter((data: any) => data),
      map((playlist: any[]) => playlist.filter((track) => track.favourite))
    ) as any;
  }
}
