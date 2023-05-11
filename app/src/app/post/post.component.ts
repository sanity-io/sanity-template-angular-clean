import { Component, OnInit } from '@angular/core';
import { SanityService } from '../sanity.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/types';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post;
  slug: string = '';

  constructor(
    private sanityService: SanityService,
    private route: ActivatedRoute
  ) {
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
