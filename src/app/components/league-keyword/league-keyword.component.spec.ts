import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueKeywordComponent } from './league-keyword.component';

describe('LeagueKeywordComponent', () => {
  let component: LeagueKeywordComponent;
  let fixture: ComponentFixture<LeagueKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
