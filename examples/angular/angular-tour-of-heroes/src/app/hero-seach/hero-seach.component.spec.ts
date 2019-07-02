import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSeachComponent } from './hero-seach.component';

describe('HeroSeachComponent', () => {
  let component: HeroSeachComponent;
  let fixture: ComponentFixture<HeroSeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
