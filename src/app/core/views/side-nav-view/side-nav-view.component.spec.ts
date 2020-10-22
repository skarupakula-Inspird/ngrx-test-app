import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavViewComponent } from './side-nav-view.component';

describe('SideNavViewComponent', () => {
  let component: SideNavViewComponent;
  let fixture: ComponentFixture<SideNavViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
