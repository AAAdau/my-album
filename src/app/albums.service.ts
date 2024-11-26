import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Album, albums } from './album';
import { Photo, photos } from './photo';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  updateAlbum(id: number, newTitle: string) {
    throw new Error('Method not implemented.');
  }
  albums: Album[] =[];
  private apiUrl = 'https://jsonplaceholder.typicode.com'; // API base URL

  constructor(private http: HttpClient) {}  

  createAlbum(albumData: any): Observable<any> {
    const url = `${this.apiUrl}/albums`;
    this.albums.push(albumData);
    return this.http.post(url, albumData);
  }
  /*getAllAlbums(): Observable<any[]> {
    const url = `${this.apiUrl}/albums`;
    return this.http.get<any[]>(url);
  }*/
  getAllAlbums(): Observable<any[]> {
    return of(albums);
  }
  updateAlbumTitle(albumId: number, newTitle: string): Observable<any> {
    const url = `${this.apiUrl}/albums/${albumId}`;
    const updatedAlbum = albums.find(album => album.id === albumId);

    if (updatedAlbum) {
      updatedAlbum.title = newTitle;
    }

    return this.http.put(url, { title: newTitle });
  }
  deleteAlbum(albumId: number): Observable<any> {
    const index = albums.findIndex(album => album.id === albumId);

    if (index !== -1) {
      albums.splice(index, 1);
    }

    return of({}); // Simulating a successful deletion
  }
  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    const album = albums.find(album => album.id === albumId);

    if (album) {
      // Simulating an API call
      const photosWithMatchingAlbumId = photos.filter(photo => photo.albumId === album.id);
      return of(photosWithMatchingAlbumId);
    } else {
      // If the album with the specified ID is not found
      return of([]);
    }
  }
}