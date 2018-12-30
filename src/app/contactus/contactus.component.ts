import { Component, OnInit } from '@angular/core';
import { EmailingService } from 'src/assets/services/emailing.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private emailservice:EmailingService) { }

  public onSubmit(name, email, subject, msg){
    this.emailservice.onSubmit(name, email, subject, msg);
  }
  ngOnInit() {
  }
}
