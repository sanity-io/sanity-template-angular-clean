import { SanityService } from './../sanity.service';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  resource,
} from '@angular/core';

import { WelcomeComponent } from '../welcome/welcome.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [WelcomeComponent, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private sanityService = inject(SanityService);

  postsResource = resource({
    loader: () => this.sanityService.getAllPosts(),
    defaultValue: [],
  });
}
