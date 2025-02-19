import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'http://localhost:8081/api/images';

  constructor(private http: HttpClient) {}

  uploadImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  getImages(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteImage(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
