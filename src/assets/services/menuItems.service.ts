import { Injectable } from '@angular/core';
import { IMenuItems } from 'src/assets/interfaces/ImenuItems';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

constructor() { }
public menuItems: IMenuItems[]=[
  {
    id:1,
    name:'Home',
    scrollToId: 'home',
    class: ''
},  {
  id:1,
  name:'How it works',
  scrollToId: 'howitworks',
  class: ''
},  {
  id:1,
  name:'Industries',
  scrollToId: 'industries',
  class: ''
},  {
  id:1,
  name:'About',
  scrollToId: 'about',
  class: ''
},  {
  id:1,
  name:'pricing',
  scrollToId: 'pricing',
  class: ''
},  {
  id:1,
  name:'Contact',
  scrollToId: 'contact',
  class: ''
}
]
}
