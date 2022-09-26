import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA)public data:any,private matDialog:MatDialogRef<DialogComponentComponent>) { }

  ngOnInit(): void {

    console.log(this.data);
    
  }

}
