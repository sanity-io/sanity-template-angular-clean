import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Post } from '../types';
import { SanityImagePipe } from '../sanity-image.pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [RouterLink, SanityImagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly post = input.required<Post>();
}
