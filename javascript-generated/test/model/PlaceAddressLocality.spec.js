/**
 * Linked Events information API
 * Linked Events provides categorized data on events and places using JSON-LD format.  Events can be searched by date and location. Location can be exact address or larger area such as neighbourhood or borough  JSON-LD format is streamlined using include mechanism. API users can request that certain fields are included directly into the result, instead of being hyperlinks to objects.  Several fields are multilingual. These are implemented as object with each language variant as property. In this specification each multilingual field has (fi,sv,en) property triplet as example.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LinkedeventsClient);
  }
}(this, function(expect, LinkedeventsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LinkedeventsClient.PlaceAddressLocality();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PlaceAddressLocality', function() {
    it('should create an instance of PlaceAddressLocality', function() {
      // uncomment below and update the code to test PlaceAddressLocality
      //var instane = new LinkedeventsClient.PlaceAddressLocality();
      //expect(instance).to.be.a(LinkedeventsClient.PlaceAddressLocality);
    });

    it('should have the property fi (base name: "fi")', function() {
      // uncomment below and update the code to test the property fi
      //var instane = new LinkedeventsClient.PlaceAddressLocality();
      //expect(instance).to.be();
    });

    it('should have the property sv (base name: "sv")', function() {
      // uncomment below and update the code to test the property sv
      //var instane = new LinkedeventsClient.PlaceAddressLocality();
      //expect(instance).to.be();
    });

    it('should have the property en (base name: "en")', function() {
      // uncomment below and update the code to test the property en
      //var instane = new LinkedeventsClient.PlaceAddressLocality();
      //expect(instance).to.be();
    });

  });

}));