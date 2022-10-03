import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../service/login.service';
import { AddTeamComponent } from './add-team.component';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';


describe('AddTeamComponent', () => {
  let component: AddTeamComponent;
  let fixture: ComponentFixture<AddTeamComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
};

let serviceSpy = jasmine.createSpyObj('LoginService', ['addTeamDetails']);
serviceSpy.addTeamDetails.and.returnValue(of());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamComponent ],
      imports:[ReactiveFormsModule,FormsModule,RouterTestingModule,MatSelectModule,HttpClientTestingModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatInputModule,BrowserAnimationsModule],
      providers:[{Router,useValue:router},{
        provide: LoginService, useValue: serviceSpy
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeamComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check initial value of two forms',()=>{
     const addTeamVal = component.addTeam
     const gameTeam = component.gameDetail

      const addTeamMock = {
        GameActivityId:'',
        GameActivityTag:'',
        idTag:'',
        GameActivityDescription:'',
        StartDate:'',
        EndDate:''
      }

      const gameMock ={
        TeamCode : '',
        TeamName :'',
        Gender :'',
        PlayerCount :'',
        TeamMemberCount:''
      }

      expect(addTeamVal.value).toEqual(addTeamMock);
      expect(gameTeam.value).toEqual(gameMock)

  })

  it('should be valid if form value is valid', () => {
    component.gameDetail.setValue({
      TeamCode : '001',
      TeamName :'ASP',
      Gender :'Male',
      PlayerCount :'1',
      TeamMemberCount:'1'
    });


    expect(component.gameDetail.valid).toEqual(true);
  });

  it('should post proper value',()=>{
    const formData = {
      TeamCode : '001',
      TeamName :'ASP',
      Gender :'Male',
      PlayerCount :'1',
      TeamMemberCount:'1'
    };
    component.gameDetail.setValue(formData);
    console.log(component.gameDetail.value);
    
    const formData2 = {
      GameActivityId:'SOCCER-ZA-AL',
      GameActivityTag:'STANDARD',
      idTag:'SOCCER-ZA-AL/STANDARD',
      GameActivityDescription:'indoor',
      StartDate:'2022/12/25',
      EndDate:'2022/12/30'
    };

    component.addTeam.setValue(formData2)
    console.log(component.addTeam.getRawValue())

    const newForm = {...component.gameDetail.value,...component.addTeam.getRawValue()}
    console.log(newForm);
    component.createGame();
    expect(serviceSpy.addTeamDetails).toHaveBeenCalledWith(newForm)
  })
});
