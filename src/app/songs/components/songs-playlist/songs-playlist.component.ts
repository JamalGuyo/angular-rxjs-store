import { Component, OnDestroy, OnInit } from '@angular/core';
import { SongsService } from '@app/songs/services/songs.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'src/app/store';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <h1>Songs Playlist</h1>
      <hr />
      <div *ngFor="let song of playlist$ | async; let i = index">
        {{ i }} {{ song.artist }} - {{ song.track }}
      </div>
    </div>
  `,
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$!: Observable<any[]>;
  subscription!: Subscription;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylists$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
