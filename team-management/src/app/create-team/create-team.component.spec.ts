import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { LoginService } from '../service/login.service';

import { CreateTeamComponent } from './create-team.component';

describe('CreateTeamComponent', () => {
  let component: CreateTeamComponent;
  let service : LoginService;
  let fixture: ComponentFixture<CreateTeamComponent>;
  let mockPostService: any;

  const teamList = [ {
    "id": 1,
    "GameActivityId": "SOCCER-ZA-AL",
    "GameActivityTag": "STANDARD",
    "GameActivityIdTag": "SOCCER-ZA-AL/STANDARD",
    "GameActivityDescription": "Indoor",
    "PublicTeamId": "CT849523938",
    "TeamCode": "TestAsp",
    "TeamName": "TestAsp",
    "StartDate": "2021-12-28",
    "EndDate": null,
    "GenderCode": "Male",
    "Gender": "Males",
    "TeamMemberCount": 0,
    "PlayerCount": 0,
    "TeamPersonCount": "0 / 0",
    "HasUnionTeamConnection": true,
    "HasSponsorContract": false,
    "IsPublished": true,
    "IsUnionTeam": false,
    "IsDeleteAllowed": false,
    "IsDeactivateAllowed": true,
    "IsReactivateAllowed": false,
    "IsEditAllowed": true
  },
  {
    "id": 2,
    "GameActivityId": "SOCCER-VE-AL",
    "GameActivityTag": "SATURDAY",
    "GameActivityIdTag": "SOCCER-VE-AL/SATURDAY",
    "GameActivityDescription": "Outdoor - Saturday",
    "PublicTeamId": "CT351860394",
    "TeamCode": "Local Spero 2",
    "TeamName": "Local Spero 2",
    "StartDate": "2022-05-24",
    "EndDate": null,
    "GenderCode": "Mixed",
    "Gender": "Mixed",
    "TeamMemberCount": 5,
    "PlayerCount": 5,
    "TeamPersonCount": "5 / 5",
    "HasUnionTeamConnection": false,
    "HasSponsorContract": false,
    "IsPublished": true,
    "IsUnionTeam": false,
    "IsDeleteAllowed": false,
    "IsDeactivateAllowed": true,
    "IsReactivateAllowed": false,
    "IsEditAllowed": true
  },
  {
    "id": 3,
    "GameActivityId": "SOCCER-VE-AL",
    "GameActivityTag": "SATURDAY",
    "GameActivityIdTag": "SOCCER-VE-AL/SATURDAY",
    "GameActivityDescription": "Outdoor - Saturday",
    "PublicTeamId": "CT2132712315",
    "TeamCode": "PCP",
    "TeamName": "PCP",
    "StartDate": "2021-05-01",
    "EndDate": null,
    "GenderCode": "Female",
    "Gender": "Females",
    "TeamMemberCount": 1,
    "PlayerCount": 1,
    "TeamPersonCount": "1 / 1",
    "HasUnionTeamConnection": false,
    "HasSponsorContract": false,
    "IsPublished": false,
    "IsUnionTeam": false,
    "IsDeleteAllowed": false,
    "IsDeactivateAllowed": true,
    "IsReactivateAllowed": false,
    "IsEditAllowed": true
  },
  {
    "id": 4,
    "GameActivityId": "SOCCER-VE-AL",
    "GameActivityTag": "SATURDAY",
    "GameActivityIdTag": "SOCCER-VE-AL/SATURDAY",
    "GameActivityDescription": "Outdoor - Saturday",
    "PublicTeamId": "CT563058118",
    "TeamCode": "VPI",
    "TeamName": "VPI",
    "StartDate": "2021-05-01",
    "EndDate": null,
    "GenderCode": "Unknown",
    "Gender": "Unknown",
    "TeamMemberCount": 0,
    "PlayerCount": 0,
    "TeamPersonCount": "0 / 0",
    "HasUnionTeamConnection": false,
    "HasSponsorContract": false,
    "IsPublished": false,
    "IsUnionTeam": false,
    "IsDeleteAllowed": false,
    "IsDeactivateAllowed": true,
    "IsReactivateAllowed": false,
    "IsEditAllowed": true
  }];
  beforeEach(async () => {

     TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,MatDialogModule],
      providers:[LoginService,MatDialog],
      declarations: [ CreateTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getTeamDetails() be called once on ngOnInit & data fetching correctly', () => {
    service = TestBed.get(LoginService)
    const mySpy = spyOn(service,'teamList').and.callThrough();
    spyOn(component, 'getTeamDetails').and.callThrough();

    component.getTeamDetails();
    expect(service).toBeDefined();
    expect(mySpy).toBeDefined();
    expect(component.getTeamDetails).toHaveBeenCalledTimes(1);
    service.teamList().subscribe({
       next:(res) => expect(res.length).toEqual(teamList.length)
    });
});

});
