import { Component, Input, NgModule, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgFor, TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/interface.post';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nuevo-post',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, FormsModule, TitleCasePipe],
  templateUrl: './nuevo-post.component.html',
  styleUrl: './nuevo-post.component.css'
})
export class NuevoPostComponent {


  @Input() post: Post | null = null;
  errorMessages: string[] = [];

  postsService = inject(PostsService);

  router = inject(Router);

  formulario: FormGroup = new FormGroup({
    titulo: new FormControl(),
    texto: new FormControl(),
    autor: new FormControl(),
    imagen: new FormControl(),
    fecha: new FormControl(),
    categoria: new FormControl(),

  });


  ngOnInit() {
  }

  onSubmit() {
    if (this.formulario.valid) {
      const newPost = this.formulario.value;

      this.postsService.create(newPost);

      const storedPosts = localStorage.getItem('posts');
      const posts = storedPosts ? JSON.parse(storedPosts) : [];
      posts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(posts));


      Swal.fire({
        title: 'Post creado',
        text: 'Se ha creado un nuevo post',
        icon: 'success'
      });

      console.log(newPost);
      this.formulario.reset();
    } else {
      this.errorMessages = ['Por favor, complete todos los campos correctamente.'];
    }
  }
}