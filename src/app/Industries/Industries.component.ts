import { Component, OnInit } from '@angular/core';
import { IndustriesService } from 'src/assets/services/industries.service';
import { Industry } from 'src/assets/interfaces/industry';

@Component({
  selector: 'app-Industries',
  templateUrl: './Industries.component.html',
  styleUrls: ['./Industries.component.css']
})
export class IndustriesComponent implements OnInit {
  public industries: Industry[];
  constructor(indusServics: IndustriesService) {
    this.industries = indusServics.industries;
    // console.log(this.industries);
  }
  hide = true;
  // expanding(row, box) {
  //   const clickedBoxId = box.getElementsByTagName('input')[0].value;
  //   const asideDiv = row.getElementsByClassName("asideNav")[0];
  //   console.log(row);
  //   if (!box.classList.contains('expand')) {
  //     row.getElementsByClassName("asideNav")[0].classList.remove('hide');
  //     for (let index = 0; index < 6; index++) {
  //       if (index + 1 != clickedBoxId) {
  //         //for others

  //         row.getElementsByClassName("industryBox")[index].classList.add('hide');
  //         console.log(row.getElementsByClassName("asideNav")[0]);
  //         const icon = row.getElementsByClassName("ServiceBoxhead")[index].innerHTML;
  //         const headline = row.getElementsByClassName("textH2")[index].innerHTML;
          
  //         asideDiv.insertAdjacentHTML('beforeend', icon );
  //         // row.getElementsByClassName("industryBox")[index].classList.remove('expand');
  //         // row.getElementsByClassName('industryBox')[index].getElementsByTagName('p')[0].classList.add('hide');
  //         // row.getElementsByClassName('industryBox')[index].classList.add('inexpand');
  //         // row.getElementsByClassName('boxServices')[index].classList.add('noBorder');
  //         // row.getElementsByClassName('boxServices')[index].classList.add('autoHight');
  //         // row.getElementsByClassName('boxServices')[index].classList.add('left');
  //         // row.getElementsByClassName('boxServices')[index].classList.add('block');

  //       } else{
  //         //for me
  //       box.classList.add('expand');
  //       box.classList.add('right');
  //       box.classList.remove('inexpand');
  //       box.getElementsByTagName('p')[0].classList.remove('hide');
  //       box.getElementsByClassName('boxServices')[0].classList.add('noBorder');
  //       }
  //     }

  //   } else {

  //     for (let index = 0; index < 6; index++) {
   
  //         row.getElementsByClassName('industryBox')[index].classList.remove('hide');
  //         // row.getElementsByClassName('industryBox')[index].classList.remove('inexpand');
  //         // row.getElementsByClassName('industryBox')[index].getElementsByTagName('p')[0].classList.remove('hide');
  //         row.getElementsByClassName('boxServices')[index].classList.remove('noBorder');
  //         // row.getElementsByClassName('boxServices')[index].classList.remove('autoHight');
  //         box.classList.remove('expand');
  //     }
  //   }
  // }

  ngOnInit() {
  }

}
