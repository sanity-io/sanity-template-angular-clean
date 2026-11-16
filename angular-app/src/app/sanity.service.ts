import { Injectable } from '@angular/core';
import {
  createClient,
  ClientConfig,
  ClientPerspective,
  SanityClient,
} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { createDataAttribute } from '@sanity/visual-editing-standalone';
import { Subject } from 'rxjs';

import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { environment } from '../environments/environment';
import { Post } from './types';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  private client: SanityClient;
  private imageUrlBuilder: ImageUrlBuilder;
  private clientConfig: ClientConfig = environment.sanity;
  private readonly refreshSubject = new Subject<void>();

  /**
   * Preview mode is on when a viewer token is configured and the app is
   * loaded by the Presentation tool (in its iframe or a popup it opened).
   */
  readonly previewMode =
    Boolean(environment.preview.token) &&
    (window.self !== window.top || Boolean(window.opener));

  /** Emits when Presentation asks for fresh content. */
  readonly refresh$ = this.refreshSubject.asObservable();

  constructor() {
    this.client = createClient(
      this.previewMode
        ? {
            ...this.clientConfig,
            useCdn: false,
            token: environment.preview.token,
            perspective: 'drafts',
            stega: { enabled: true, studioUrl: environment.preview.studioUrl },
          }
        : this.clientConfig,
    );
    this.imageUrlBuilder = imageUrlBuilder(this.client);
  }

  getImageUrlBuilder(source: SanityImageSource): ImageUrlBuilder {
    return this.imageUrlBuilder.image(source);
  }

  getAllPosts(): Promise<Post[]> {
    return this.client.fetch(
      '*[_type == "post" && defined(slug.current)]|order(_createdAt desc)',
    );
  }
  getPost(slug: string): Promise<Post> {
    return this.client.fetch('*[_type == "post" && slug.current == $slug][0]', {
      slug,
    });
  }

  /** `data-sanity` value for fields that can't carry stega, like images. */
  dataAttribute(document: Post, path: string): string | null {
    if (!this.previewMode) {
      return null;
    }
    return createDataAttribute({
      baseUrl: environment.preview.studioUrl,
      id: document._id,
      type: document._type,
      path,
    }).toString();
  }

  refresh(): void {
    this.refreshSubject.next();
  }

  setPerspective(perspective: ClientPerspective): void {
    if (
      JSON.stringify(perspective) ===
      JSON.stringify(this.client.config().perspective)
    ) {
      return;
    }
    this.client = this.client.withConfig({ perspective });
    this.refresh();
  }
}
