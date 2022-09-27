import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})


export class CreateTeamComponent implements OnInit {

  teamDetails!:any;
  displayedColumns: string[] = ['GameActivityId', 'GameActivityTag','TeamName','StartDate','EndDate','TeamCode'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private team:LoginService,private dialog:MatDialog,private route:Router) { }

  ngOnInit(): void {
     
    this.getTeamDetails();

  }

  getTeamDetails()
  {
    this.team.teamList().subscribe(res=>{
      this.teamDetails = res;
      this.dataSource = new MatTableDataSource(this.teamDetails);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource.paginator)
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(val:any,_enter: string,_exit: string)
  {
      this.dialog.open(DialogComponentComponent, {
        width:'30%',
        data:val,
        enterAnimationDuration:_enter,
        exitAnimationDuration:_exit
     })
  }

  createTeam()
  {
    this.route.navigate(['/add-team'])
  }

  deleteData(row:any,index:number)
  {
      this.team.deleteDetails(row.id).subscribe({
        next:(res)=>{
          alert(`${row.TeamName} Details Deleted Successfully!!!`);
          this.getTeamDetails();
        },
        error:()=>{
          alert("Error while deleting the Team Details!!")
        }
      });
      
  }

  logOut()
  {
      this.route.navigate(['/login']);
      localStorage.removeItem('token')
  }

}
