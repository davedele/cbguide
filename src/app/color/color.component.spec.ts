/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ColorComponent } from './color.component';

describe('Component: Color', () => {
  it('should create an instance', () => {
    let component = new ColorComponent();
    expect(component).toBeTruthy();
  });
});
