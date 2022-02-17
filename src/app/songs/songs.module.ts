import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SongsFavouritesComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';

@NgModule({
  declarations: [
    SongsFavouritesComponent,
    SongsPlaylistComponent,
    SongsListenedComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    SongsFavouritesComponent,
    SongsPlaylistComponent,
    SongsListenedComponent,
  ],
})
export class SongsModule {}
