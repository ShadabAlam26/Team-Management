import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpController : HttpTestingController;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    httpController = TestBed.inject<HttpTestingController>(HttpTestingController)
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('Get the team details',()=>{

    service.teamList().subscribe(
      {
        next:(res)=>{
            expect(res[0].PublicTeamId).toEqual(teamList[0].PublicTeamId)
        }
      }
    )
   })
});
