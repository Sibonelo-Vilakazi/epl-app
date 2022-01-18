import { Component, Input, OnInit } from '@angular/core';
import { ClubData } from 'src/app/interfaces/club-data';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {

  constructor() { }
  @Input() club_Data !: Array<ClubData>
  ngOnInit(): void {
    console.log(this.club_Data)
  }

}
