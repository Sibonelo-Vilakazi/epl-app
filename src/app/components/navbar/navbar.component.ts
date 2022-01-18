import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarList =[{
    name:"Matches",
    active:true,
    link:''
  },
  {
    name:"News",
    active:false,
    link:''
  },
    {
      name:"Table",
      active:false,
      link:'table'
    },
    {
      name:"Stats",
      active:false,
      link:''
    },
    {
      name:"Players",
      active:false,
      link:''
    }
]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  changeTab(tab: any){
    for(let nav of this.navbarList){
      if(nav==tab){
        nav.active=true;
      }else{
        nav.active=false;
      }
    }
    this.router.navigateByUrl(tab.link)

  }

}
