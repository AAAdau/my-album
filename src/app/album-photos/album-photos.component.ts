import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Photo, photos } from '../photo';
import { Album, albums } from '../album';

@Component({
  selector: 'app-albums-photos',
  template: `
    <div>
      <h1>Photos details</h1>
      <div *ngIf="photos && photos.length > 0">
        <div *ngFor="let photo of photos" class="inf">
          <h3>album id: {{ photo.albumId }}</h3>
          <h3>id: {{ photo.id }}</h3>
          <h3>title: {{ photo.title }}</h3>
          <h3>url: {{ photo.url }}</h3>
          <h3>thumbnailUrl: {{ photo.thumbnailUrl }}</h3>
        </div>
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `,
  styleUrl: './album-photos.component.css',

})
export class AlbumsPhotosComponent implements OnInit {
  photos: Photo [] =[];
  album: Album | undefined;
  constructor(    
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));
    this.photos = photos.filter((photo: { albumId: number; }) => photo.albumId === idFromRoute);
    
  }
  goBack(): void {
    window.history.back();
  }
}
