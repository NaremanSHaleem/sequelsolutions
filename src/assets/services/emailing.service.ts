import { Injectable } from '@angular/core';
import { IMailItems } from 'src/assets/interfaces/IMailItems';

@Injectable({
  providedIn: 'root'
})
export class EmailingService {
 mailItems: IMailItems;
constructor() { }
public onSubmit(name, email, subject, msg){
  console.log(name + email + subject + msg);
}
}
