import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { unaPage } from './una.page';

describe('unaPage', () => {
  let component: unaPage;
  let fixture: ComponentFixture<unaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [unaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(unaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
