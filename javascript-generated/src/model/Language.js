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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LanguageName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LanguageName'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.Language = factory(root.LinkedeventsClient.ApiClient, root.LinkedeventsClient.LanguageName);
  }
}(this, function(ApiClient, LanguageName) {
  'use strict';




  /**
   * The Language model module.
   * @module model/Language
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>Language</code>.
   * Primary purpose of this endpoint is to allow users to identify which languages are supported for multilingual fields. It also has translations for the names of the languages.
   * @alias module:model/Language
   * @class
   * @param id {String} Identifier for the language (typically ISO639-1)
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;

  };

  /**
   * Constructs a <code>Language</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Language} obj Optional instance to populate.
   * @return {module:model/Language} The populated <code>Language</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = LanguageName.constructFromObject(data['name']);
      }
    }
    return obj;
  }

  /**
   * Identifier for the language (typically ISO639-1)
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/LanguageName} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


