import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from '../interfaces/interface.post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  httpClient = inject(HttpClient)
  baseUrl: string = 'http://localhost:4200/';

  posts: Post[] = [

    {
      titulo: "Innovaciones en energía renovable",
      texto: "Las energías renovables están en auge, con avances significativos en la eficiencia de los paneles solares y la energía eólica. Estos desarrollos son cruciales para combatir el cambio climático.",
      autor: "Laura Martínez",
      imagen: new URL("https://static.smartgridsinfo.es/media/2023/11/energias-renovables-red-electrica-hidraulica-solar-fotovoltaica-eolica.png"),
      fecha: new Date("2024-03-05"),
      categoria: "Medio Ambiente",
    },
    {
      titulo: "La importancia de la educación financiera",
      texto: "La educación financiera es vital para la estabilidad económica personal. Entender conceptos como el ahorro, la inversión y la planificación presupuestaria puede marcar una gran diferencia en la vida de las personas.",
      autor: "José Fernández",
      imagen: new URL("https://www.ceupe.com/images/easyblog_articles/4569/b2ap3_large_tipos-de-maestrias-en-finanzas.jpg"),
      fecha: new Date("2024-02-20"),
      categoria: "Finanzas"
    },
    {
      titulo: "El impacto del 5G en la comunicación global",
      texto: "La tecnología 5G promete revolucionar la comunicación global con velocidades de descarga increíblemente rápidas y latencia mínima.",
      autor: "Ana González",
      imagen: new URL("https://cnnespanol.cnn.com/wp-content/uploads/2022/02/5G.jpeg?quality=100&strip=info&w=768&h=375&crop=1"),
      fecha: new Date("2024-06-10"),
      categoria: "Tecnología"
    },
    {
      titulo: "Tendencias de moda para el verano 2024",
      texto: "El verano 2024 trae consigo tendencias de moda vibrantes y coloridas. Desde estampados tropicales hasta estilos minimalistas, descubre lo que estará en auge esta temporada.",
      autor: "Lucía Ramírez",
      imagen: new URL("https://hips.hearstapps.com/hmg-prod/images/tendencias-primavera-verano-2024-13-658778632a599.jpg?resize=980:*"),
      fecha: new Date("2024-06-01"),
      categoria: "Moda"
    },
    {
      titulo: "El auge de los vehículos eléctricos",
      texto: "Los vehículos eléctricos están ganando popularidad rápidamente gracias a sus beneficios ambientales y la reducción de costos operativos. Nuevos modelos están surgiendo con mayor autonomía y eficiencia.",
      autor: "David Sánchez",
      imagen: new URL("https://programacion.net/files/new/new_02244_.jpg"),
      fecha: new Date("2024-04-15"),
      categoria: "Tecnología"
    },

    {
      titulo: "Estrategias para mejorar la productividad en el trabajo remoto",
      texto: "El trabajo remoto ha llegado para quedarse. Conoce estrategias efectivas para mantener la productividad y el equilibrio entre la vida laboral y personal.",
      autor: "Elena Torres",
      imagen: new URL("https://chvmpionmind.com/wp-content/uploads/2023/05/trabajo-en-remoto.jpg"),
      fecha: new Date("2024-03-22"),
      categoria: "Finanzas"
    },
  ];


  create(newPost: Post) {
    this.posts.push(newPost);
  }

  getAll(): Post[] {
    return this.posts;
  }

  getByCategoria(categoria: string): Post[] {
    return this.posts.filter(pst => pst.categoria === categoria);
  }


  getCategorias(): string[] {
    const arr: string[] = [];
    for (let pst of this.posts) {
      if (!arr.includes(pst.categoria)) {
        arr.push(pst.categoria);
      }
    }
    return arr;

  }

}
