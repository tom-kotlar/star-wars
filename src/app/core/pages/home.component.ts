import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="flex-column">
      <img
        src="https://media.tenor.com/L60s9x5LqsMAAAAC/star-wars-lightsaber.gif"
        width="100%"
        style="padding-top: 70px"
        class="flex align-items-center justify-content-center"
        alt="Mandalorian Starwars Intro"
      />

      <a
        href="https://tenor.com/users/pushlint"
        style="text-decoration: none"
        class="flex align-items-center justify-content-center"
        >
        Credits
      </a
      >
    </div>
  `,
})
export class HomeComponent {}
