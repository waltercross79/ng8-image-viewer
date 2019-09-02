# Ng8ImageViewer

All the functional code comes from this project:
https://github.com/jpilfold/ngx-image-viewer

I have only added @angular/material and material icons and updated all dependencies to Angular 8+.

Additionally, I have removed the full screen option because I don't need it in my project that this viewer is a dependency of.

## Material icons
This library expects that the consumer will provide the icons - usually by adding this link:
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

## Material theme
This library does not specify any theming - it is expected that the consumer will provide the material themes.

## Animations
The consumer has to import either NoopAnimationModule or BrowserAnimationsModule as required by the Angular Material.