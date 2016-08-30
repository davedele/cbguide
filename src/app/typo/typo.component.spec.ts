/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TypoComponent } from './typo.component';

describe('Component: Typo', () => {
  it('should create an instance', () => {
    let component = new TypoComponent();
    expect(component).toBeTruthy();
  });
});
