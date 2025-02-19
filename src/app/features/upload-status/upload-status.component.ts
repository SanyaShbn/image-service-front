import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../core/services/web-socket.service';

@Component({
  selector: 'app-upload-status',
  templateUrl: './upload-status.component.html',
  styleUrls: ['./upload-status.component.css']
})
export class UploadStatusComponent implements OnInit {
  status: string = '';

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.watchUploadStatus().subscribe(
      (status) => {
        this.status = status;
      },
      (error) => {
        console.error('Error receiving upload status:', error);
      }
    );
  }
}
