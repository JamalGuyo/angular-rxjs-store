import { Component, OnInit } from '@angular/core';
import { Song, SongsService } from '@app/songs/services/songs.service';
import { filter, map, Observable } from 'rxjs';
import { Store } from 'src/app/store';

@Component({
  selector: 'songs-listened',
  template: ` <div class="songs">
    <songs-list [list]="listened$ | async" (toggle)="onToggle($event)">
      Listened
    </songs-list>
  </div>`,
})
export class SongsListenedComponent implements OnInit {
  listened$!: Observable<Song[]>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.listened$ = this.store.select('playlist').pipe(
      filter((data: any) => data),
      map((playlist: Song[]) => playlist.filter((track) => track.listened))
    );
  }

  onToggle(event: { [track: string]: Song }) {
    this.songsService.toggle(event);
  }
}
