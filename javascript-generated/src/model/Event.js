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
    define(['ApiClient', 'model/EventInfoUrl', 'model/EventName', 'model/Eventlink', 'model/IdRef', 'model/Image', 'model/Keyword', 'model/Language', 'model/Offer', 'model/Place'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EventInfoUrl'), require('./EventName'), require('./Eventlink'), require('./IdRef'), require('./Image'), require('./Keyword'), require('./Language'), require('./Offer'), require('./Place'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.Event = factory(root.LinkedeventsClient.ApiClient, root.LinkedeventsClient.EventInfoUrl, root.LinkedeventsClient.EventName, root.LinkedeventsClient.Eventlink, root.LinkedeventsClient.IdRef, root.LinkedeventsClient.Image, root.LinkedeventsClient.Keyword, root.LinkedeventsClient.Language, root.LinkedeventsClient.Offer, root.LinkedeventsClient.Place);
  }
}(this, function(ApiClient, EventInfoUrl, EventName, Eventlink, IdRef, Image, Keyword, Language, Offer, Place) {
  'use strict';




  /**
   * The Event model module.
   * @module model/Event
   * @version 0.0.23
   */

  /**
   * Constructs a new <code>Event</code>.
   * Describes the actual events. Linked events API supports organizing events into hierarchies. This is implemented with collection events called \&quot;super events\&quot;. Super events are normal event objects, that reference contained events in \&quot;sub_events\&quot; property. Currently there are two major use cases: events such as \&quot;Helsinki Festival\&quot;, which consist of unique events over a span of time and recurring events such as theatrical productions with multiple showings. It is implementation dependent how the grouping of events is done. It should be noted that grouping might be automatic based on eg. event name and thus group unrelated events together and miss related events. Users of data are advised to prepare for this.
   * @alias module:model/Event
   * @class
   * @param location {module:model/Place} 
   * @param keywords {Array.<module:model/IdRef>} array of keyword uri references
   * @param publicationStatus {String} Only available in POST/PUT. Specifies whether the event should be published in the API ('public') or not ('draft').
   * @param startTime {Date} Time the event will start
   */
  var exports = function(location, keywords, publicationStatus, startTime) {
    var _this = this;


    _this['location'] = location;
    _this['keywords'] = keywords;




    _this['publication_status'] = publicationStatus;
















    _this['start_time'] = startTime;








  };

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = Place.constructFromObject(data['location']);
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], [IdRef]);
      }
      if (data.hasOwnProperty('in_language')) {
        obj['in_language'] = ApiClient.convertToType(data['in_language'], [Language]);
      }
      if (data.hasOwnProperty('super_event')) {
        obj['super_event'] = IdRef.constructFromObject(data['super_event']);
      }
      if (data.hasOwnProperty('super_event_type')) {
        obj['super_event_type'] = ApiClient.convertToType(data['super_event_type'], 'String');
      }
      if (data.hasOwnProperty('event_status')) {
        obj['event_status'] = ApiClient.convertToType(data['event_status'], 'String');
      }
      if (data.hasOwnProperty('publication_status')) {
        obj['publication_status'] = ApiClient.convertToType(data['publication_status'], 'String');
      }
      if (data.hasOwnProperty('external_links')) {
        obj['external_links'] = ApiClient.convertToType(data['external_links'], [Eventlink]);
      }
      if (data.hasOwnProperty('offers')) {
        obj['offers'] = ApiClient.convertToType(data['offers'], [Offer]);
      }
      if (data.hasOwnProperty('sub_events')) {
        obj['sub_events'] = ApiClient.convertToType(data['sub_events'], [IdRef]);
      }
      if (data.hasOwnProperty('custom_data')) {
        obj['custom_data'] = ApiClient.convertToType(data['custom_data'], Object);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = EventName.constructFromObject(data['name']);
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [Image]);
      }
      if (data.hasOwnProperty('created_time')) {
        obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
      }
      if (data.hasOwnProperty('last_modified_time')) {
        obj['last_modified_time'] = ApiClient.convertToType(data['last_modified_time'], 'Date');
      }
      if (data.hasOwnProperty('info_url')) {
        obj['info_url'] = EventInfoUrl.constructFromObject(data['info_url']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], Object);
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], Object);
      }
      if (data.hasOwnProperty('@context')) {
        obj['@context'] = ApiClient.convertToType(data['@context'], 'String');
      }
      if (data.hasOwnProperty('@type')) {
        obj['@type'] = ApiClient.convertToType(data['@type'], 'String');
      }
      if (data.hasOwnProperty('date_published')) {
        obj['date_published'] = ApiClient.convertToType(data['date_published'], 'Date');
      }
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], Object);
      }
      if (data.hasOwnProperty('location_extra_info')) {
        obj['location_extra_info'] = ApiClient.convertToType(data['location_extra_info'], Object);
      }
      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
      }
      if (data.hasOwnProperty('end_time')) {
        obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
      }
      if (data.hasOwnProperty('has_start_time')) {
        obj['has_start_time'] = ApiClient.convertToType(data['has_start_time'], 'Boolean');
      }
      if (data.hasOwnProperty('has_end_time')) {
        obj['has_end_time'] = ApiClient.convertToType(data['has_end_time'], 'Boolean');
      }
      if (data.hasOwnProperty('audience')) {
        obj['audience'] = ApiClient.convertToType(data['audience'], [Keyword]);
      }
      if (data.hasOwnProperty('data_source')) {
        obj['data_source'] = ApiClient.convertToType(data['data_source'], 'String');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
      }
      if (data.hasOwnProperty('last_modified_by')) {
        obj['last_modified_by'] = ApiClient.convertToType(data['last_modified_by'], 'String');
      }
      if (data.hasOwnProperty('publisher')) {
        obj['publisher'] = ApiClient.convertToType(data['publisher'], 'String');
      }
    }
    return obj;
  }

  /**
   * consists of source prefix and source specific identifier. These should be URIs uniquely identifying the event, and preferably also well formed http-URLs pointing to more information about the event.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Place} location
   */
  exports.prototype['location'] = undefined;
  /**
   * array of keyword uri references
   * @member {Array.<module:model/IdRef>} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * the languages spoken or supported at the event
   * @member {Array.<module:model/Language>} in_language
   */
  exports.prototype['in_language'] = undefined;
  /**
   * references the aggregate event containing this event
   * @member {module:model/IdRef} super_event
   */
  exports.prototype['super_event'] = undefined;
  /**
   * If the event has sub_events, describes the type of the event. Current options are 'null' and 'recurring', which means a repeating event.
   * @member {String} super_event_type
   */
  exports.prototype['super_event_type'] = undefined;
  /**
   * As defined in schema.org/Event. Postponed events do not have a date set, rescheduled events have been moved to different date.
   * @member {String} event_status
   */
  exports.prototype['event_status'] = undefined;
  /**
   * Only available in POST/PUT. Specifies whether the event should be published in the API ('public') or not ('draft').
   * @member {String} publication_status
   */
  exports.prototype['publication_status'] = undefined;
  /**
   * See external link definition
   * @member {Array.<module:model/Eventlink>} external_links
   */
  exports.prototype['external_links'] = undefined;
  /**
   * See offer definition
   * @member {Array.<module:model/Offer>} offers
   */
  exports.prototype['offers'] = undefined;
  /**
   * for aggregate events this contains references to all sub events. Usually this means that the sub events are part of series. The field 'super_event_type' tells the type of the aggregate event.
   * @member {Array.<module:model/IdRef>} sub_events
   */
  exports.prototype['sub_events'] = undefined;
  /**
   * Key value field for custom data. FIXME: is there 6Aika-wide use case for this?
   * @member {Object} custom_data
   */
  exports.prototype['custom_data'] = undefined;
  /**
   * @member {module:model/EventName} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/Image>} images
   */
  exports.prototype['images'] = undefined;
  /**
   * Creation time for the event entry.
   * @member {Date} created_time
   */
  exports.prototype['created_time'] = undefined;
  /**
   * Time this event was modified in the datastore behind the API (not necessarily in the originating system)
   * @member {Date} last_modified_time
   */
  exports.prototype['last_modified_time'] = undefined;
  /**
   * @member {module:model/EventInfoUrl} info_url
   */
  exports.prototype['info_url'] = undefined;
  /**
   * Description for the event, several chapters(FIXME, verify)
   * @member {Object} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Short description for the event, recommended limit 140 characters
   * @member {Object} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * @member {String} @context
   */
  exports.prototype['@context'] = undefined;
  /**
   * @member {String} @type
   */
  exports.prototype['@type'] = undefined;
  /**
   * Date this event is free to be published
   * @member {Date} date_published
   */
  exports.prototype['date_published'] = undefined;
  /**
   * organization responsible for the practical implementation of the event
   * @member {Object} provider
   */
  exports.prototype['provider'] = undefined;
  /**
   * Unstructured extra info about location (like \"eastern door of railway station\")
   * @member {Object} location_extra_info
   */
  exports.prototype['location_extra_info'] = undefined;
  /**
   * Time the event will start
   * @member {Date} start_time
   */
  exports.prototype['start_time'] = undefined;
  /**
   * Time the event will end
   * @member {Date} end_time
   */
  exports.prototype['end_time'] = undefined;
  /**
   * @member {Boolean} has_start_time
   */
  exports.prototype['has_start_time'] = undefined;
  /**
   * @member {Boolean} has_end_time
   */
  exports.prototype['has_end_time'] = undefined;
  /**
   * @member {Array.<module:model/Keyword>} audience
   */
  exports.prototype['audience'] = undefined;
  /**
   * Unique identifier (URI)for the system from which this event came from, preferably URL with more information about the system and its policies
   * @member {String} data_source
   */
  exports.prototype['data_source'] = undefined;
  /**
   * FIXME(verify) Which API user created this keyword
   * @member {String} created_by
   */
  exports.prototype['created_by'] = undefined;
  /**
   * FIXME(verify) Which API user most recently edited this keyword
   * @member {String} last_modified_by
   */
  exports.prototype['last_modified_by'] = undefined;
  /**
   * Organization responsible for this event record.
   * @member {String} publisher
   */
  exports.prototype['publisher'] = undefined;



  return exports;
}));


