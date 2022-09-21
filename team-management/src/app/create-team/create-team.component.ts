import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { LoginService } from '../service/login.service';

export interface TeamList {
  GameActivityId: string;
  GameActivityTag: string;
  GameActivityIdTag: string;
  GameActivityDescription: string;
  StartDate: string;
  EndDate: string;
  TeamCode:string;
  TeamName:string;
  TeamMemberCount:number;
  PlayerCount:number
}

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})


export class CreateTeamComponent implements OnInit {

  teamDetails!: TeamList[];
  displayedColumns: string[] = ['GameActivityId', 'GameActivityTag', 'GameActivityIdTag', 'GameActivityDescription','StartDate','EndDate','TeamCode','TeamName','TeamMemberCount','PlayerCount'];
  dataSource!: MatTableDataSource<TeamList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private team:LoginService) { }

  ngOnInit(): void {
    this.team.teamList().subscribe(res=>{
      console.log(res);
      // this.teamDetails = res;
      // this.dataSource = new MatTableDataSource(res);
    })
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
