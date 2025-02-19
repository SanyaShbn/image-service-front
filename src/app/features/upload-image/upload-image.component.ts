import { Component } from '@angular/core';
import { ImageService } from '../../core/services/image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  selectedFile: File | null = null;

  constructor(private imageService: ImageService) { }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.imageService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    } else {
      console.error('No file selected.');
    }
  }
}
