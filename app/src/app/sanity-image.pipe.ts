import { Pipe, PipeTransform } from '@angular/core';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityService } from './sanity.service';

@Pipe({ name: 'sanityImage' })
export class SanityImagePipe implements PipeTransform {
  constructor(private sanityService: SanityService) {}

  transform(value: SanityImageSource, width?: number): string {
    if (width) {
      return this.sanityService
        .getImageUrlBuilder(value)
        .width(width)
        .auto('format')
        .url();
    }
    return this.sanityService.getImageUrlBuilder(value).auto('format').url();
  }
}
