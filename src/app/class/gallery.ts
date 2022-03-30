import { Injectable } from '@angular/core';
import { GalleryItem, ImageSize, ThumbnailsPosition, Gallery as NgxGallery } from '@ngx-gallery/core';

@Injectable({
    providedIn: 'root'
})
export class Gallery {
    constructor(public _gallery: NgxGallery) { }

    basicLightboxExample(photos: GalleryItem[]) {
        this._gallery.ref().load(photos);
    }

    lightbox(photos: GalleryItem[], galleryId: string) {
        const lightboxGalleryRef = this._gallery.ref(galleryId);
        lightboxGalleryRef.setConfig({
            imageSize: ImageSize.Contain,
            thumbPosition: ThumbnailsPosition.Bottom,
            counter: false,
            dots: true,
            dotsSize: 20,
        });
        lightboxGalleryRef.load(photos);
    }

    lightboxNoThumb(photos: GalleryItem[], galleryId: string) {
        const lightboxGalleryRef = this._gallery.ref(galleryId);
        lightboxGalleryRef.setConfig({
            imageSize: ImageSize.Contain,
            counter: false,
            thumb: false,
            nav: false

        });
        lightboxGalleryRef.load(photos);
    }
}
