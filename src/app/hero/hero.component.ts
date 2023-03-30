import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
primero = {
  ruta:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg",
  alt:"The Hateful Eight",
  imagen:"../../assets/img/1.png",
  numero:"primer puesto de esta semana"
  }
segundo = {
  ruta:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg",
  alt:"Shutter Island",
  imagen:"../../assets/img/2.png",
  numero:"segundo puesto de esta semana"
}
tercero = {
  ruta:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
  alt:"Pulp Fiction",
  imagen:"../../assets/img/3.png",
  numero:"tercer puesto de esta semana"
  }
cuarto = {
  ruta:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg",
  alt:"Scarface",
  imagen:"../../assets/img/4.png",
  numero:"cuarto puesto de esta semana"
}
quinto = {
  ruta:"https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  alt:"The Beach",
  imagen:"../../assets/img/5.png",
  numero:"quinto puesto de esta semana"
  }

}
