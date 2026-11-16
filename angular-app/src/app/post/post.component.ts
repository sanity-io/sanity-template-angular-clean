import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  resource,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { SanityService } from '../sanity.service';
import { SanityImagePipe } from '../sanity-image.pipe';
import { PortableTextToHTML } from '../portable-text.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  imports: [SanityImagePipe, PortableTextToHTML],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PostComponent {
  slug = input.required<string>();
  protected sanityService = inject(SanityService);
  postResource = resource({
    request: this.slug,
    loader: ({ request }) => this.sanityService.getPost(request),
  });

  constructor() {
    this.sanityService.refresh$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.postResource.reload());
  }
}
