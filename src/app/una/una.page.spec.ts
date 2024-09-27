import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UnaPage } from './una.page';

describe('unaPage', () => {
  let component: UnaPage;
  let fixture: ComponentFixture<UnaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
