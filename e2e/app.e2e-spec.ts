import { browser, element, by } from 'protractor';

import { GREETING } from '../app/config';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = GREETING;

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
