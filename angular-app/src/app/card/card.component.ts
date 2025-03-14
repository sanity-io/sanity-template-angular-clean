import { Component, Input } from '@angular/core';
import { Post } from 'src/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: false,
})
export class CardComponent {
  @Input() post: Post;

  constructor() {
    this.post = {
      _id: '1',
      title: 'My first post',
      excerpt: 'This is my first post.',
      slug: {
        current: 'my-first-post',
      },
      mainImage: {
        asset: {
          url: 'https://via.placeholder.com/400',
        },
        alt: 'Placeholder image',
      },
    };
  }
}
