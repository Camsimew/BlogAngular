import { Component, inject, NgModule, OnInit, TrackByFunction } from '@angular/core';
import { PostsComponent } from '../../components/posts/posts.component';
import { Post } from '../../interfaces/interface.post';
import { PostsService } from '../../services/posts.service';
import { NgClass, NgFor, NgForOf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'lista-posts',
  standalone: true,
  imports: [PostsComponent, NgFor, NgClass, NgForOf, RouterOutlet, HeroComponent],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {

  arrPosts: Post[] = [];
  arrCategorias: string[] = [];

  postsService = inject(PostsService)
  post: Post | null = null;

  trackByIndex: TrackByFunction<Post> | undefined;

  ngOnInit() {
    this.arrPosts = this.postsService.getAll();
    this.arrCategorias = this.postsService.getCategorias();
  }

  onChangeCategory($event: Event) {
    const select = $event.target as HTMLSelectElement;
    if (select.value === 'todos') {
      this.arrPosts = this.postsService.getAll();
    } else {
      this.arrPosts = this.postsService.getByCategoria(select.value);
    }

  }
}