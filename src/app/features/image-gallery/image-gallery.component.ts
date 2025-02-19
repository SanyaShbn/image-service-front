import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../core/services/image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: any[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    this.imageService.getImages().subscribe(
      (response: any[]) => {
        this.images = response;
      },
      (error) => {
        console.error('Error loading images:', error);
      }
    );
  }

  onDelete(id: string) {
    this.imageService.deleteImage(id).subscribe(
      () => {
        this.loadImages();
      },
      (error) => {
        console.error('Error deleting image:', error);
      }
    );
  }
}
