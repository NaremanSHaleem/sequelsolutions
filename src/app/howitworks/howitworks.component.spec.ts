/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HowitworksComponent } from './howitworks.component';

describe('HowitworksComponent', () => {
  let component: HowitworksComponent;
  let fixture: ComponentFixture<HowitworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowitworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowitworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
