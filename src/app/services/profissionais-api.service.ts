import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profissional } from '../profissional';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfissionaisApiService {

  constructor(private httpClient: HttpClient) {}

  public List():Observable<Profissional[]> {
    return this.httpClient.get<Profissional[]>('https://it3qwe.firebaseio.com/profissionais.json');
  }
}
