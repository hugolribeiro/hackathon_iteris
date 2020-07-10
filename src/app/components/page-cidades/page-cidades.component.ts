import { Component, OnInit } from '@angular/core';
import { Profissional } from '../../profissional';
import { ProfissionaisApiService } from '../../services/profissionais-api.service';


@Component({
  selector: 'app-page-cidades',
  templateUrl: './page-cidades.component.html',
  styleUrls: ['./page-cidades.component.css']
})
export class PageCidadesComponent implements OnInit {

  listaCidades: Profissional[];

  constructor(private profissionalApi: ProfissionaisApiService) { }

  ngOnInit(): void {
    this.profissionalApi.List().subscribe((lista)=>{
      this.listaCidades = lista;
  })
}

}
