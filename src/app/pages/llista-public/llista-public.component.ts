import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Practica } from 'src/app/models/practica';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-llista-public',
  templateUrl: './llista-public.component.html',
  styleUrls: ['./llista-public.component.css']
})
export class LlistaPublicComponent implements OnInit {

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
  veureDetalls(i: number) {
    this.practica = this.practiques[i];
    this.router.navigate(["llista", i]);
  }

}
