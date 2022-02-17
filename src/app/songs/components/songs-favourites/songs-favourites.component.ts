import { Component, OnInit } from '@angular/core';
import { Song, SongsService } from '@app/songs/services/songs.service';
import { filter, map, Observable } from 'rxjs';
import { Store } from 'src/app/store';

@Component({
  selector: 'songs-favourites',
  template: ` <div>
    <songs-list [list]="favourites$ | async" (toggle)="onToggle($event)">
      Favourite
    </songs-list>
  </div>`,
})
export class SongsFavouritesComponent implements OnInit {
  favourites$!: Observable<Song[]>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.favourites$ = this.store.select('playlist').pipe(
      filter((data: any) => data),
      map((playlist: Song[]) => playlist.filter((track) => track.favourite))
    );
  }

  onToggle(event: { [track: string]: Song }) {
    this.songsService.toggle(event);
  }
}
