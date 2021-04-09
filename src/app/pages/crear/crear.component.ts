import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Practica } from 'src/app/models/practica';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  
  public practiques: Practica[];
  public practica: Practica;

  constructor(private firedb: FirebasedbService, private router: Router) {
    this.firedb.getPractiques().subscribe(
      (originalPractiques: Practica[]) => {
        this.practiques = originalPractiques;
      }
    );
    this.practica = new Practica();
  }

  ngOnInit(): void {
  }

  guardarPractica() {
    this.firedb.afegirPractica(this.practica);
  }
}
