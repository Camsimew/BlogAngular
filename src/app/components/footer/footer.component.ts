import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, PostsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  router = inject(Router);

  postsService = inject(PostsService)


}
