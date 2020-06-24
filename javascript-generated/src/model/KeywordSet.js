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
    define(['ApiClient', 'model/Keyword'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Keyword'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.KeywordSet = factory(root.LinkedeventsClient.ApiClient, root.LinkedeventsClient.Keyword);
  }
}(this, function(ApiClient, Keyword) {
  'use strict';




  /**
   * The KeywordSet model module.
   * @module model/KeywordSet
   * @version 0.0.20
   */

  /**
   * Constructs a new <code>KeywordSet</code>.
   * Keyword sets are used to group keywords together into classification groups. For example, one set of keywords might describe themes used by an event provider and another could be used to describe audience groups.
   * @alias module:model/KeywordSet
   * @class
   * @param id {String} Unique identifier for this keyword_set. These should be URIs identifying the source and the keyword_set itself, and preferably also well formed http-URLs pointing to more information about the keyword.
   * @param name {String} Name for this keyword_set. This should be human readable, such that it could be shown as label in UI
   * @param keywords {Array.<module:model/Keyword>} Keywords that belong to this keyword_set
   */
  var exports = function(id, name, keywords) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;







    _this['keywords'] = keywords;
  };

  /**
   * Constructs a <code>KeywordSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KeywordSet} obj Optional instance to populate.
   * @return {module:model/KeywordSet} The populated <code>KeywordSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('origin_id')) {
        obj['origin_id'] = ApiClient.convertToType(data['origin_id'], 'String');
      }
      if (data.hasOwnProperty('created_time')) {
        obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
      }
      if (data.hasOwnProperty('last_modified_time')) {
        obj['last_modified_time'] = ApiClient.convertToType(data['last_modified_time'], 'Date');
      }
      if (data.hasOwnProperty('data_source')) {
        obj['data_source'] = ApiClient.convertToType(data['data_source'], 'String');
      }
      if (data.hasOwnProperty('last_modified_by')) {
        obj['last_modified_by'] = ApiClient.convertToType(data['last_modified_by'], 'String');
      }
      if (data.hasOwnProperty('usage')) {
        obj['usage'] = ApiClient.convertToType(data['usage'], 'String');
      }
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], [Keyword]);
      }
    }
    return obj;
  }

  /**
   * Unique identifier for this keyword_set. These should be URIs identifying the source and the keyword_set itself, and preferably also well formed http-URLs pointing to more information about the keyword.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name for this keyword_set. This should be human readable, such that it could be shown as label in UI
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Set identifier in the originating system, if any
   * @member {String} origin_id
   */
  exports.prototype['origin_id'] = undefined;
  /**
   * Time when this keyword_set was created (ISO 8601)
   * @member {Date} created_time
   */
  exports.prototype['created_time'] = undefined;
  /**
   * Time when this keyword_set was last modified (ISO 8601)
   * @member {Date} last_modified_time
   */
  exports.prototype['last_modified_time'] = undefined;
  /**
   * Unique identifier (URI)for the system where this keyword_set originated, if any
   * @member {String} data_source
   */
  exports.prototype['data_source'] = undefined;
  /**
   * FIXME(verify) Which API user most recently edited this keyword
   * @member {String} last_modified_by
   */
  exports.prototype['last_modified_by'] = undefined;
  /**
   * Usage type for this keyword_set. These are allow UIs to show the set in appropriate place. FIXME: set of types is not finalized by any stretch
   * @member {module:model/KeywordSet.UsageEnum} usage
   */
  exports.prototype['usage'] = undefined;
  /**
   * Organization that has defined this keyword_set
   * @member {String} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * Keywords that belong to this keyword_set
   * @member {Array.<module:model/Keyword>} keywords
   */
  exports.prototype['keywords'] = undefined;


  /**
   * Allowed values for the <code>usage</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UsageEnum = {
    /**
     * value: "any"
     * @const
     */
    "any": "any",
    /**
     * value: "keyword"
     * @const
     */
    "keyword": "keyword",
    /**
     * value: "audience"
     * @const
     */
    "audience": "audience"  };


  return exports;
}));


