import { NgModule, ModuleWithProviders } from '@angular/core';
import { Ng8ViewerComponent } from './ng8-viewer/ng8-viewer.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [Ng8ViewerComponent],
  imports: [
    CommonModule, MatButtonModule, MatIconModule
  ],
  exports: [Ng8ViewerComponent]
})
export class Ng8ImageViewerLibModule { 
  static forRoot(config?: Ng8ImageViewerLibModule): ModuleWithProviders {
    return {
      ngModule: Ng8ImageViewerLibModule,
      providers: [{provide: 'config', useValue: config}]
    };
  }
}
