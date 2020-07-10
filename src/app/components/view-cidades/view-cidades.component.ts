import { Component, OnInit, Input } from '@angular/core';
import { Profissional } from '../../profissional';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-view-cidades',
  templateUrl: './view-cidades.component.html',
  styleUrls: ['./view-cidades.component.css']
})
export class ViewCidadesComponent implements OnInit {

  @Input() cidade: Profissional;

    location: string;
    name: string;
    photo: string;
    services: string;
    zodiac: string;

  constructor() { }

  ngOnInit(): void {
    if(this.cidade != null){
      this.location = this.cidade.location;
      this.services = this.cidade.services;
    }
  }

}
