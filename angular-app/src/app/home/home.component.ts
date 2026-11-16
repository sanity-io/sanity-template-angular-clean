import { SanityService } from './../sanity.service';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  resource,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { WelcomeComponent } from '../welcome/welcome.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [WelcomeComponent, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  private sanityService = inject(SanityService);

  postsResource = resource({
    loader: () => this.sanityService.getAllPosts(),
    defaultValue: [],
  });

  constructor() {
    this.sanityService.refresh$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.postsResource.reload());
  }
}
