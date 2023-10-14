import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  // posts = [
  //   {
  //     id: 1,
  //     type: 1,
  //     title: 'Cours Français 11/07/2023',
  //     description: "L'objectif du cours",
  //     comments: [
  //       {
  //         id: 1,
  //         message: 'Le support du cours'
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     type: 2,
  //     title: 'Examen Mathématiques 15/07/2023',
  //     description: 'Les sujets à réviser pour l\'examen',
  //     comments: [
  //       {
  //         id: 1,
  //         message: 'Les formules importantes à retenir'
  //       },
  //       {
  //         id: 2,
  //         message: 'Les exercices d\'entraînement recommandés'
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     type: 3,
  //     title: 'Réunion de classe 13/07/2023',
  //     description: 'Ordre du jour et points à discuter',
  //     comments: []
  //   },
  //   {
  //     id: 4,
  //     type: 4,
  //     title: 'Sortie scolaire 18/07/2023',
  //     description: 'Lieu et heure de rendez-vous',
  //     comments: [
  //       {
  //         id: 1,
  //         message: 'Les autorisations parentales nécessaires'
  //       },
  //       {
  //         id: 2,
  //         message: 'La liste des affaires à emporter'
  //       }
  //     ]
  //   },
  //   {
  //     id: 5,
  //     type: 5,
  //     title: 'Devoir d Histoire 12/07/2023',
  //     description: 'Les chapitres à réviser pour le devoir',
  //     comments: []
  //   },
  //   {
  //     id: 6,
  //     type: 6,
  //     title: 'Projet Sciences 14/07/2023',
  //     description: 'Les instructions pour le projet',
  //     comments: [
  //       {
  //         id: 1,
  //         message: 'Les ressources disponibles en ligne'
  //       },
  //       {
  //         id: 2,
  //         message: 'La date de remise du projet'
  //       }
  //     ]
  //   },
  //   {
  //     id: 7,
  //     type: 7,
  //     title: 'Assemblée des délégués 16/07/2023',
  //     description: 'Points à discuter lors de l\'assemblée',
  //     comments: []
  //   },
  //   {
  //     id: 8,
  //     type: 5,
  //     title: 'Devoir d Anglais 19/07/2023',
  //     description: 'Les exercices à compléter pour le devoir',
  //     comments: [
  //       {
  //         id: 1,
  //         message: 'Les sources pour pratiquer la prononciation'
  //       },
  //       {
  //         id: 2,
  //         message: 'Les phrases clés à connaître'
  //       }
  //     ]
  //   },
  //   {
  //     id: 9,
  //     type: 8,
  //     title: 'Club de théâtre 20/07/2023',
  //     description: 'Répétition et préparation de la pièce',
  //     comments: [
  //       {
  //         id: 1,
  //         message: 'Les costumes et accessoires nécessaires'
  //       },
  //       {
  //         id: 2,
  //         message: 'Le planning des répétitions'
  //       }
  //     ]
  //   },
  //   {
  //     id: 10,
  //     type: 5,
  //     title: 'Devoir de Physique 17/07/2023',
  //     description: 'Les concepts importants à étudier pour le devoir',
  //     comments: []
  //   }
  // ];
  
  posts = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      avatar: "https://example.com/avatar1.png",
      image: "https://example.com/image1.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: 50,
      comments: 20,
      shared: 10,
      views: 1000
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      avatar: "https://example.com/avatar2.png",
      image: "https://example.com/image2.png",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      likes: 30,
      comments: 10,
      shared: 5,
      views: 500
    },
    {
      id: "3",
      firstName: "Robert",
      lastName: "Johnson",
      avatar: "https://example.com/avatar3.png",
      image: "https://example.com/image3.png",
      content: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
      likes: 70,
      comments: 15,
      shared: 8,
      views: 800
    },
    {
      id: "4",
      firstName: "Sarah",
      lastName: "Williams",
      avatar: "https://example.com/avatar4.png",
      image: "https://example.com/image4.png",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      likes: 90,
      comments: 25,
      shared: 12,
      views: 1200
    },
    {
      id: "5",
      firstName: "Michael",
      lastName: "Brown",
      avatar: "https://example.com/avatar5.png",
      image: "https://example.com/image5.png",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      likes: 40,
      comments: 18,
      shared: 6,
      views: 700
    },
    {
      id: "6",
      firstName: "Emily",
      lastName: "Taylor",
      avatar: "https://example.com/avatar6.png",
      image: "https://example.com/image6.png",
      content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      likes: 60,
      comments: 22,
      shared: 9,
      views: 900
    },
    {
      id: "7",
      firstName: "David",
      lastName: "Anderson",
      avatar: "https://example.com/avatar7.png",
      image: "https://example.com/image7.png",
      content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
      likes: 55,
      comments: 17,
      shared: 7,
      views: 950
    },
    {
      id: "8",
      firstName: "Olivia",
      lastName: "Thomas",
      avatar: "https://example.com/avatar8.png",
      image: "https://example.com/image8.png",
      content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      likes: 75,
      comments: 12,
      shared: 4,
      views: 850
    },
    {
      id: "9",
      firstName: "James",
      lastName: "Wilson",
      avatar: "https://example.com/avatar9.png",
      image: "https://example.com/image9.png",
      content: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
      likes: 65,
      comments: 14,
      shared: 3,
      views: 750
    },
    {
      id: "10",
      firstName: "Sophia",
      lastName: "Miller",
      avatar: "https://example.com/avatar10.png",
      image: "https://example.com/image10.png",
      content: "Ut labore et dolore magnam aliquam quaerat voluptatem.",
      likes: 80,
      comments: 30,
      shared: 15,
      views: 1100
    }
  ];
  
  
  constructor() { }
  trackByPost(index : any) {
    return index;
  }
  ngOnInit() {}

}
