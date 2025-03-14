import { SanityService } from './../sanity.service';
import { Component, OnInit, inject } from '@angular/core';
import { Post } from '../types';
import { NgIf, NgFor } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgIf, WelcomeComponent, NgFor, CardComponent],
})
export class HomeComponent implements OnInit {
  private sanityService = inject(SanityService);

  posts: Post[] = [];

  ngOnInit(): void {
    this.getAllPosts();
  }

  async getAllPosts(): Promise<Post[]> {
    this.posts = await this.sanityService.getAllPosts();
    return this.posts;
  }
}
