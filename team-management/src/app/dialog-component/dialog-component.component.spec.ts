import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogComponentComponent } from './dialog-component.component';

describe('DialogComponentComponent', () => {
  let component: DialogComponentComponent;
  let fixture: ComponentFixture<DialogComponentComponent>;

  beforeEach(async () => {
    const GameActivityId="SOCCER-ZA-AL";
    const GameActivityTag = "STANDARD";
    const GameActivityIdTag =  "SOCCER-ZA-AL/STANDARD";
    const GameActivityDescription = "Indoor";
    const TeamCode="TestAsp";
    const TeamName="TestAsp";

    await TestBed.configureTestingModule({
      declarations: [ DialogComponentComponent ],
      imports:[MatDialogModule],
      providers:[MatDialog,{provide:MatDialogRef,useValue:{}},{provide:MAT_DIALOG_DATA,useValue: {
        data: {
          id: GameActivityId,
          tag: GameActivityTag,
          idTag:GameActivityIdTag,
          description: GameActivityDescription,
          teamcode:TeamCode,
          teamName:TeamName
        }
      }
    }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dialog component  data test', () => {

    const expectediD = 'SOCCER-ZA-AL';
    const expectedBody = 'Indoor';
    const expectedtag = "STANDARD";

    expect(component.data.data.id).toEqual(expectediD);
    expect(component.data.data.description).toEqual(expectedBody);
    expect(component.data.data.tag).toEqual(expectedtag);

  });
});
