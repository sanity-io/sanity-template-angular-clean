import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Post } from '../types';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SanityImagePipe } from '../sanity-image.pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [NgIf, RouterLink, SanityImagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly post = input.required<Post>();
}
