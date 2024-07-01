import { Routes } from '@angular/router';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { NuevoPostComponent } from './pages/nuevo-post/nuevo-post.component';


export const routes: Routes = [
    { path: 'posts', component: ListaPostsComponent },
    { path: 'nuevo', component: NuevoPostComponent },


];
