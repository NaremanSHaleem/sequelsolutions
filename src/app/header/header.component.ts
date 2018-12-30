import { Component, OnInit } from '@angular/core';
import { IMenuItems } from 'src/assets/interfaces/ImenuItems';
import { MenuItemsService } from 'src/assets/services/menuItems.service';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private menuItemsservice: MenuItemsService) { 
    console.log(PageScrollConfig.defaultEasingLogic.valueOf())
    if(PageScrollConfig.defaultScrollOffset >800 ){
      document.getElementsByTagName('li')[0].classList.add('active');
    }
  }
  
  public menuitems = this.menuItemsservice.menuItems;

  ngOnInit() {
  }
public onMenuItemClick(item, list){
  console.log(list[0]);
  const elements = list.getElementsByTagName('li');
  for (let index = 0; index < elements.length; index++) {
    console.log(elements[index]);
    elements[index].classList.remove('active');
    
  }
item.classList.add('active');
}
}
