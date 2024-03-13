import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album, albums } from '../album';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrl: './albums-detail.component.css',
})
export class AlbumsDetailComponent implements OnInit {
[x: string]: any;
  album: Album | undefined;
  editingTitle = false;
  newTitle: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}
  
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));

    this.album = albums.find(
      (album) => album.id === idFromRoute
    );
  }
  editTitle() {
    this.editingTitle = true;
    this.newTitle = this.album?.title;
  }

  saveTitle() {
    if (this.album && this.newTitle) {
      this.albumsService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(
        (response) => {
          alert('Album title updated successfully!');
          this.editingTitle = false;
        }

      );
    }
  }
  returnToHome() {
    // Navigate back to the home page
    this.router.navigate(['/']);
  }
}