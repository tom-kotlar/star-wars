import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div class="felx-column" >
      <div class="flex align-items-center justify-content-center">
        <button
          routerLink="/home"
          pButton
          type="button"
          icon="bx bx-arrow-back"
          iconPos="left"
          class="p-button-link"
          label="Home"
        ></button>
      </div>

      <img
        src="https://miro.medium.com/max/1400/1*ASPrAbd2qtFVSVuru7Y7Rw.png"
        width="100%"
        alt="404 page"
        style="padding-top: 10px"
        class="flex align-items-center justify-content-center"
      />

      <a
        class="flex align-items-center justify-content-center"
        href="https://dribbble.com/shots/2309412-Daily-UI-404-Error"
        style="text-decoration: none"
        >
        Credits
        </a
      >
    </div>
  `,
})
export class NotFoundComponent {}
