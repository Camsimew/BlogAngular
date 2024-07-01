import { Component, Input, NgModule, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/interface.post';

@Component({
  selector: 'app-nuevo-post',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, FormsModule],
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


  onSubmit() {
    this.postsService.create(this.formulario.value);
    alert('Se ha publicado un nuevo');
    this.router.navigateByUrl('/users');
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      this.formulario.reset();

    } else {
      this.errorMessages = ['Por favor, complete todos los campos correctamente.'];
    }

    //this.router.navigateByUrl('/posts');
    // } catch({ error }: any) {
    // this.errorMessages = error.map((err: any) => err.message)

  }
}
