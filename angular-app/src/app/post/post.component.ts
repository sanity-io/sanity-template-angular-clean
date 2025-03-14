import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  input,
} from '@angular/core';
import { SanityService } from '../sanity.service';
import { Post } from '../types';
import { NgIf } from '@angular/common';
import { SanityImagePipe } from '../sanity-image.pipe';
import { PortableTextToHTML } from '../portable-text.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  imports: [NgIf, SanityImagePipe, PortableTextToHTML],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  slug = input.required<string>();
  private sanityService = inject(SanityService);

  post: Post | undefined;

  ngOnInit(): void {
    this.getPost(this.slug());
  }

  async getPost(slug: string): Promise<Post> {
    this.post = await this.sanityService.getPost(slug);
    console.log(this.post);
    return this.post;
  }
}
