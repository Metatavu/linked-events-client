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
    define(['ApiClient', 'model/OfferDescription', 'model/OfferInfoUrl', 'model/OfferPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OfferDescription'), require('./OfferInfoUrl'), require('./OfferPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.Offer = factory(root.LinkedeventsClient.ApiClient, root.LinkedeventsClient.OfferDescription, root.LinkedeventsClient.OfferInfoUrl, root.LinkedeventsClient.OfferPrice);
  }
}(this, function(ApiClient, OfferDescription, OfferInfoUrl, OfferPrice) {
  'use strict';




  /**
   * The Offer model module.
   * @module model/Offer
   * @version 0.0.13
   */

  /**
   * Constructs a new <code>Offer</code>.
   * information record for this event. The prices are not in a structured format and the format depends on information source. An exception to this is the case of free event. These are indicated using is_free flag, which is searchable.
   * @alias module:model/Offer
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Offer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Offer} obj Optional instance to populate.
   * @return {module:model/Offer} The populated <code>Offer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('price')) {
        obj['price'] = OfferPrice.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('info_url')) {
        obj['info_url'] = OfferInfoUrl.constructFromObject(data['info_url']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = OfferDescription.constructFromObject(data['description']);
      }
      if (data.hasOwnProperty('is_free')) {
        obj['is_free'] = ApiClient.convertToType(data['is_free'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OfferPrice} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {module:model/OfferInfoUrl} info_url
   */
  exports.prototype['info_url'] = undefined;
  /**
   * @member {module:model/OfferDescription} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Whether the event is of free admission
   * @member {Boolean} is_free
   */
  exports.prototype['is_free'] = undefined;



  return exports;
}));


