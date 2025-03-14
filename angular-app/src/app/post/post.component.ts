import { Component, OnInit, inject } from '@angular/core';
import { SanityService } from '../sanity.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../types';
import { NgIf } from '@angular/common';
import { SanityImagePipe } from '../sanity-image.pipe';
import { PortableTextToHTML } from '../portable-text.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  imports: [NgIf, SanityImagePipe, PortableTextToHTML],
})
export class PostComponent implements OnInit {
  private sanityService = inject(SanityService);
  private route = inject(ActivatedRoute);

  post: Post | undefined;
  slug: string = '';

  constructor() {
    this.slug = this.route.snapshot.params['slug'];
  }

  ngOnInit(): void {
    this.getPost(this.slug);
  }

  async getPost(slug: string): Promise<Post> {
    this.post = await this.sanityService.getPost(slug);
    console.log(this.post);
    return this.post;
  }
}
