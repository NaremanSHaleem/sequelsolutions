import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Injectable({
  providedIn: 'root'
})
export class NavegationService {

  constructor(private _scrollToService: ScrollToService) { }

  public triggerScrollTo(_target) {

    const config: ScrollToConfigOptions = {
      target: _target,
      offset: 650,
      duration: 650
    };

    this._scrollToService.scrollTo(config);
  }

}
