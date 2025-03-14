import { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Post {
  _id: string;
  title: string;
  excerpt?: string;
  slug: {
    current: string;
  };
  mainImage?: SanityImageSource;
  body?: PortableTextBlock[];
}
