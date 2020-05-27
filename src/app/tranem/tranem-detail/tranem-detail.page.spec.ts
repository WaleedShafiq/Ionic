import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranemDetailPage } from './tranem-detail.page';

describe('TranemDetailPage', () => {
  let component: TranemDetailPage;
  let fixture: ComponentFixture<TranemDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranemDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranemDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
