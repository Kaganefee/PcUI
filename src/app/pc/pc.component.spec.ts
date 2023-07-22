/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {PcComponent} from "src/app/pc/pc.component"

describe('PcComponent', () => {
  let component: PcComponent;
  let fixture: ComponentFixture<PcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
