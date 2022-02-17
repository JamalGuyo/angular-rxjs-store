import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/store';

@Component({
  selector: 'songs-listened',
  template: ` <div class="songs">
    <h1>Songs Listened</h1>
    <hr />
    <div *ngFor="let song of listened$ | async; let i = index">
      {{ i }} {{ song.artist }} - {{ song.track }}
    </div>
  </div>`,
})
export class SongsListenedComponent implements OnInit {
  listened$!: Observable<any[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.listened$ = this.store.select('playlist');
  }
}
