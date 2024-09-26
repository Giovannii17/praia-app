import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { dentistaPage } from './dentista.page';

describe('dentistaPage', () => {
  let component: dentistaPage;
  let fixture: ComponentFixture<dentistaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [dentistaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(dentistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
