import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereismytripComponent } from './whereismytrip.component';

describe('WhereismytripComponent', () => {
  let component: WhereismytripComponent;
  let fixture: ComponentFixture<WhereismytripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereismytripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereismytripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
