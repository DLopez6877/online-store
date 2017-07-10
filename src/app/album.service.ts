import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums(): Album[] {
    return ALBUMS;
  }

  getAlbumById(albumId: number): Album {
    return ALBUMS.filter(album => album.id === albumId)[0]
  }
}
