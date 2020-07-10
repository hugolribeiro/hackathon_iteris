import { Component, OnInit, Input } from '@angular/core';
import { Profissional } from 'src/app/profissional';
import { ProfissionaisApiService } from 'src/app/services/profissionais-api.service';

@Component({
  selector: 'app-profissionais-page',
  templateUrl: './profissionais-page.component.html',
  styleUrls: ['./profissionais-page.component.css']
})
export class ProfissionaisPageComponent implements OnInit {


  listaProfissionais: Profissional[];

  constructor(private profissionalApi:ProfissionaisApiService) { }

  ngOnInit(): void {
    this.profissionalApi.List().subscribe((lista)=>{
      this.listaProfissionais = lista;
    })
  }
}
