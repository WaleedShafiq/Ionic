import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranemPage } from './tranem.page';

describe('TranemPage', () => {
  let component: TranemPage;
  let fixture: ComponentFixture<TranemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
