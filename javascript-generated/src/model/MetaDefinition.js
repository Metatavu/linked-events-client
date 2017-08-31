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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.MetaDefinition = factory(root.LinkedeventsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MetaDefinition model module.
   * @module model/MetaDefinition
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>MetaDefinition</code>.
   * Meta record for result pagination. All results from API are paginated, ie. delivered in chunks of X results. This records describes how many results there are in total, and how to access previous and next pages.
   * @alias module:model/MetaDefinition
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MetaDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetaDefinition} obj Optional instance to populate.
   * @return {module:model/MetaDefinition} The populated <code>MetaDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
      if (data.hasOwnProperty('previous')) {
        obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
      }
    }
    return obj;
  }

  /**
   * Total amount of items found
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * URL for the next page of items
   * @member {String} next
   */
  exports.prototype['next'] = undefined;
  /**
   * URL for the previous page of items
   * @member {String} previous
   */
  exports.prototype['previous'] = undefined;



  return exports;
}));


