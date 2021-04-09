import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Practica } from 'src/app/models/practica';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-detalls',
  templateUrl: './detalls.component.html',
  styleUrls: ['./detalls.component.css']
})
export class DetallsComponent implements OnInit {

  public practiques: Practica[];
  public practica: Practica;
  private i: number;
  constructor(private firedb: FirebasedbService, private router: Router,private activateRoute: ActivatedRoute) { 

  this.activateRoute.params.subscribe(
    (params: ParamMap) => {
      if (params['i'] == null) {
        this.router.navigate(["/llsita"])
      } else {
        this.i = Number(params['i']);
        this.firedb.getPractiques().subscribe(
          (originalpractica: Practica[]) => {
            this.practica = originalpractica[this.i];
          }
        )
      }
    }
  );
  }
  ngOnInit(): void {
  }

}
