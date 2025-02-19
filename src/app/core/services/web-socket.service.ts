import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  constructor(private rxStompService: RxStompService) { }

  watchUploadStatus(): Observable<string> {
    return this.rxStompService.watch('/topic/uploadStatus')
      .pipe(map((message) => message.body));
  }
}
