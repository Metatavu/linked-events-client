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
    define(['ApiClient', 'model/Language', 'model/MetaDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Language'), require('./MetaDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.InlineResponse2005 = factory(root.LinkedeventsClient.ApiClient, root.LinkedeventsClient.Language, root.LinkedeventsClient.MetaDefinition);
  }
}(this, function(ApiClient, Language, MetaDefinition) {
  'use strict';




  /**
   * The InlineResponse2005 model module.
   * @module model/InlineResponse2005
   * @version 0.0.13
   */

  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:model/InlineResponse2005
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2005} obj Optional instance to populate.
   * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = MetaDefinition.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Language]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MetaDefinition} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {Array.<module:model/Language>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


