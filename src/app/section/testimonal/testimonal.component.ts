import { Component, OnInit } from '@angular/core';
import { Testimonal } from 'src/app/class/testimonal';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-testimonal',
  templateUrl: './testimonal.component.html',
  styleUrls: ['./testimonal.component.scss']
})
export class TestimonalComponent implements OnInit {
  public testimonal: Testimonal[];
  public index: number = 0;
  public lastIndex: number = 0;
  constructor(private _service: AppService) { }

  ngOnInit(): void {
    this.pexelSearch("model")
  }

  public pexelSearch(query: string): void {
    this._service.pexelSearch(query, 10, (new Date()).getDate()).subscribe((res): any => {
      let photos: any = res;
      this.testimonal = photos.photos.map(photo =>
        new Testimonal(photo.photographer, photo.src.landscape, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")
      );
      this.lastIndex = this.testimonal.length - 1;
    });
  }

  public navigate(direction: string) {
    direction == "next" ? (this.index == this.lastIndex ? this.index = 0 : this.index++) : (this.index == 0 ? this.index = this.lastIndex : this.index--);
  }
}
