import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    }
  ]
})
export class AddTeamComponent implements OnInit {
  startDate!:any;

  @Output()
  dateChange: EventEmitter<MatDatepickerInputEvent<any>> = new EventEmitter();
  date!: string;
  date1!:string;
  validateDate!: any;

  constructor( private fb: UntypedFormBuilder,private http: HttpClient,private route:Router) { }
  public gameId =['ZA-AL', 'VE-AL'];
  public gameTag = ['STANDARD', 'SATURDAY', 'SUNDAY'];
  public gender =["Male","Female","Mixed"]
  selected1!:string;
  selected2! :string;
  public addTeam!: UntypedFormGroup;
  public gameDetail! : UntypedFormGroup;

  minDate = new Date();

  ngOnInit(): void {

    console.log(this.gameId);
    this.addTeam = this.fb.group({
      id:['',Validators.required],
      tag:['',Validators.required],
      idTag:['',Validators.required],
      desc:['',Validators.required],
      StartDate:['',Validators.required],
      EndDate:['',Validators.required]
    })

    this.gameDetail = this.fb.group({
      TeamCode : ['',Validators.required],
      TeamName :['',Validators.required],
      Gender :['',Validators.required],
      PlayerCount :['',Validators.required],
      TeamMemberCount:['',Validators.required]
    })

    console.log(this.addTeam.value);
    
  }

  changeId(val:any)
  {
    console.log(val);
    this.selected1 = val;
  }

  changeTag(val:any)
  {
    console.log(val)
    this.selected2 = this.selected1 + "/"+val;
    this.addTeam.get('idTag')?.setValue(this.selected2);
    this.addTeam.get('idTag')?.disable()
  }
  
  createTeam()
  {
    console.log(this.addTeam.get('StartDate')?.value);
    this.addTeam.get('StartDate')?.setValue(this.date);
    this.addTeam.get('EndDate')?.setValue(this.date1);
    console.log(this.addTeam.getRawValue(),this.addTeam);
  }

  createGame()
{
  // this.addTeam.get('StartDate')?.setValue(moment(this.addTeam.get('StartDate')?.value._d).format('YYYY/MM/DD'));
  console.log(this.gameDetail.value,this.addTeam.getRawValue());
  
}

onDateChange(eve:any)
{
   console.log(moment(eve.value._d).format('YYYY-MM-DD'));
   this.validateDate = moment(eve.value._d);
   this.date = moment(eve.value._d).format('YYYY-MM-DD');

}

onEndDateChange(val:any)
{
  this.date1 = moment(val.value._d).format('YYYY-MM-DD');
}

backToMenu()
{
  //  this.addTeam.reset();
  //  this.gameDetail.reset();

  this.route.navigate(['/createTeam']);
}


}
