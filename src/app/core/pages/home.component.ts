import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
      <div class="flex-column">

          <iframe width="100%" height="600" class="" [src]="intro | sanitizer"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
          </iframe>

          <a
                  routerLink="https://youtu.be/8NoOsPwYacA"
                  style="text-decoration: none"
                  class="flex align-items-center justify-content-center"
          >
              Credits
          </a>
      </div>
  `,
})
export class HomeComponent {

  intro = 'https://www.youtube.com/embed/8NoOsPwYacA'

}
