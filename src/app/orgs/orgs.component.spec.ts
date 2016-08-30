/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { OrgsComponent } from './orgs.component';

describe('Component: Orgs', () => {
  it('should create an instance', () => {
    let component = new OrgsComponent();
    expect(component).toBeTruthy();
  });
});
