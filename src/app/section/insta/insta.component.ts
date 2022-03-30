import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ImageItem, GalleryItem } from '@ngx-gallery/core';
import { Gallery } from 'src/app/class/gallery';

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.scss']
})
export class InstaComponent implements OnInit {
  public photos: any = [];
  public galleryId = 'insta';
  constructor(private _service: AppService, public _gallery: Gallery) { }

  ngOnInit(): void {
    this._service.pexelSearch("restaurant", 12, (new Date()).getDate()).subscribe((res): any => {
      let photos: any = res;
      let galleryItems: GalleryItem[];
      for (let p of photos.photos) {
        this.photos.push(p.src.landscape);
      }

      galleryItems = this.photos.map(photo =>
        new ImageItem({ src: photo, thumb: photo })
      );

      this._gallery.lightbox(galleryItems, this.galleryId);
    });
  }
}
