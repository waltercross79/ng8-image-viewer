import { Component, Sanitizer } from '@angular/core';
import { ImageViewerConfig, CustomEvent } from 'projects/ng8-image-viewer/src/lib/ng8-viewer/ng8-viewer.config.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer) {

  }

  title = 'ng8-image-viewer-tester';

  imageIndexOne = 0;
  imageIndexTwo = 0;

  images = [this.sanitizer.bypassSecurityTrustResourceUrl('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==')];

  config: ImageViewerConfig = {customBtns: [{name: 'print', icon: 'print'}]};

  handleEvent(event: CustomEvent) {
    console.log(`${event.name} has been click on img ${event.imageIndex + 1}`);

    switch (event.name) {
      case 'print':
        console.log('run print logic');
        break;
    }
  }
}
