import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeagueApiService {

  constructor(private http:HttpClient) { }

  getLeagueTableData(filename:string):any{
    return this.http.get(`assets/dummy_data/${filename}.json`);
  }
}
