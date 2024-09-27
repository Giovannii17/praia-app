import { Component, ViewChild, AfterContentInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, AfterViewInit } from '@angular/core';
import{register} from 'swiper/element/bundle';
import{Swiper} from 'swiper';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],

})
export class Tab1Page implements AfterViewInit{
  ngAfterViewInit(): void {
    register();
  }

  constructor() {}

}
