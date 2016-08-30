/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MasonryComponent } from './masonry.component';

describe('Component: Masonry', () => {
  it('should create an instance', () => {
    let component = new MasonryComponent();
    expect(component).toBeTruthy();
  });
});
