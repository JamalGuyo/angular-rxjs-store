import { Component } from '@angular/core';
import { Store } from 'src/app/store';

@Component({
  selector: 'songs-favourites',
  template: ` <div class="songs">Favourites</div> `,
})
export class SongsFavouritesComponent {
  constructor(private store: Store) {}
}
