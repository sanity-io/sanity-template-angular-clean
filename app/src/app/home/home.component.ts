import { SanityService } from './../sanity.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private sanityService: SanityService) {}
  ngOnInit(): void {
    this.getAllPosts();
  }

  async getAllPosts(): Promise<Post[]> {
    this.posts = await this.sanityService.getAllPosts();
    return this.posts;
  }
}
