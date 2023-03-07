import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'sanitizer'
})
export class SanitaizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url: string): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + '?autoplay=1&mute=1')
  }

}
