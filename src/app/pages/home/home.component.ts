
import { Component, OnInit } from '@angular/core';
import { ClubData } from 'src/app/interfaces/club-data';
import { LeagueApiService } from 'src/app/services/league-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public club_data : Array<ClubData> =[];
  constructor(private leagueTableService :LeagueApiService) { }

  ngOnInit(): void {

    this.leagueTableService.getLeagueTableData('league').toPromise()
    .then((res:any)=>{
      this.club_data=res;
      console.log(this.club_data);
    }).catch((err:any)=>{
      console.log(err)
    })
  }

}
