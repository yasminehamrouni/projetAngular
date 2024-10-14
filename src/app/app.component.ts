import { Component, OnInit } from '@angular/core';
import { FaceSnapDSI23Component } from './face-snap-dsi23/face-snap-dsi23.component';
import { FaceSnap } from '../models/face-snap-dsi3.model'; // Corrigé : vérifier le bon chemin vers le modèle
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapDSI23Component, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  title = 'DSI23';
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(), // Utilisation du constructeur Date() pour la date actuelle
        snaps: 0
      },
      {
        title: 'Three Rock Mountain',
        description: 'Endroit magnifique',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(), // Même chose ici
        snaps: 0
      },
      {
        title: 'Un bon repas',
        description: "Yumm c'est bon !",
        imageUrl:
          'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(), // Et ici aussi
        snaps: 0
      }
    ];
  }
}
