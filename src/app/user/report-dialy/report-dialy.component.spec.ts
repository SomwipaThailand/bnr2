import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDialyComponent } from './report-dialy.component';

describe('ReportDialyComponent', () => {
  let component: ReportDialyComponent;
  let fixture: ComponentFixture<ReportDialyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDialyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDialyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
