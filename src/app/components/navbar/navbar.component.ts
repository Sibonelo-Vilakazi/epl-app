import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarList =[{
    name:"Matches",
    active:true
  },
  {
    name:"News",
    active:false
  },
    {
      name:"Table",
      active:false
    },
    {
      name:"Stats",
      active:false
    },
    {
      name:"Players",
      active:false
    }
]
  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tab :any){
    for(let nav of this.navbarList){
      if(nav==tab){
        nav.active=true;
      }else{
        nav.active=false
      }
    }

  }
}
