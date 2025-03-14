import { SanityService } from './../sanity.service';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  resource,
} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgIf, WelcomeComponent, NgFor, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private sanityService = inject(SanityService);

  postsResource = resource({
    loader: () => this.sanityService.getAllPosts(),
    defaultValue: [],
  });
}
