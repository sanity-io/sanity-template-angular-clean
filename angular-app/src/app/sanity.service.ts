import { Injectable } from '@angular/core';
import { createClient, ClientConfig, SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

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

  constructor() {
    this.client = createClient(this.clientConfig);
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
}
