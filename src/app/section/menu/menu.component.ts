import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Gallery } from 'src/app/class/gallery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public primaryBtn: boolean = true;
  public menu: number = 1;
  public photos = [];
  public galleryId = 'menu';

  public menuItems: Array<string> = ["All", "Breakfast", "Lunch", "Dinner", "Coffee", "Snacks"];

  constructor(private _service: AppService, public _gallery: Gallery) { }

  ngOnInit(): void {
    this.pexelSearch();
  }

  public pexelSearch(): void {
    this.photos = [];
    let pictures: Array<string>
    for (let query of this.menuItems) {
      query == "All" ? query = "food" : query = query;
      this._service.pexelSearch(query, 12, (new Date()).getDate()).subscribe((res): any => {
        let photos: any = res;
        pictures = [];
        for (let p of photos.photos) {
          pictures.push(p.src.landscape);
        }
        query == "food" ? query = "All" : query = query;
        this.photos[query] = pictures;
        setTimeout(() => {
          this.addToGalary("All");
        }, 1000);
      });
    }
  }

  public addToGalary(key: string): void {
    let galleryItems: GalleryItem[];
    galleryItems = this.photos[key].map(photo =>
      new ImageItem({ src: photo, thumb: photo })
    );
    this._gallery.lightboxNoThumb(galleryItems, this.galleryId);
  }
}
