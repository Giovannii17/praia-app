import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DentistaPage } from './dentista.page';

describe('DentistaPage', () => {
  let component: DentistaPage;
  let fixture: ComponentFixture<DentistaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DentistaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DentistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
