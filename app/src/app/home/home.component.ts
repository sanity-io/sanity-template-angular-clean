import { SanityService } from './../sanity.service';
import { Component, OnInit } from '@angular/core';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Observable } from 'rxjs';

export interface Post {
  _id: string;
  title: string;
  excerpt?: string;
  slug: {
    current: string;
  };
  mainImage?: SanityImageSource;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private sanityService: SanityService) {
    this.posts$ = this.sanityService.fetch(
      '*[_type == "post" && defined(slug.current)]|order(_createdAt desc)'
    );
  }
  ngOnInit(): void {}
}
