import { Component, Input, NgModule, inject } from '@angular/core';
import { Post } from '../../interfaces/interface.post';
import { RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { ListaPostsComponent } from '../../pages/lista-posts/lista-posts.component';
import { DatePipe, NgClass, TitleCasePipe } from '@angular/common';
import slugify from 'slugify';



@Component({
  selector: 'posts',
  standalone: true,
  imports: [RouterLink, ListaPostsComponent, DatePipe, NgClass, TitleCasePipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  @Input() post: Post | null = null;

  arrPosts: Post[] = [];

  arrCategorias: string[] = [];

  postsService = inject(PostsService)
  postSeleccionado: Post | undefined;
  postSolo: any;

  getCategoryClass(categoria: string): string {
    return slugify(categoria, { lower: true });
  }

  postRandom() {
    const indiceAleatorio = Math.floor(Math.random() * this.arrPosts.length);
    this.postSeleccionado = this.arrPosts[indiceAleatorio];
  }



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
