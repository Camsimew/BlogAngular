import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { HeroComponent } from './components/hero/hero.component';
import { PostsComponent } from './components/posts/posts.component';
import { NuevoPostComponent } from './pages/nuevo-post/nuevo-post.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ListaPostsComponent, HeroComponent, NuevoPostComponent, PostsComponent, NavBarComponent, FooterComponent]
})
export class AppComponent {


}
