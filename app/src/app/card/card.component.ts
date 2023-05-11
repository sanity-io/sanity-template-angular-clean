import { Component, Input } from '@angular/core';
import { Post } from 'src/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
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
    };
  }
}
