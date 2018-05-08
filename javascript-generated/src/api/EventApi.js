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
    define(['ApiClient', 'model/Event', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.EventApi = factory(root.LinkedeventsClient.ApiClient, root.LinkedeventsClient.Event, root.LinkedeventsClient.InlineResponse200);
  }
}(this, function(ApiClient, Event, InlineResponse200) {
  'use strict';

  /**
   * Event service.
   * @module api/EventApi
   * @version 0.0.8
   */

  /**
   * Constructs a new EventApi. 
   * @alias module:api/EventApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new event
     * @param {Object} opts Optional parameters
     * @param {module:model/Event} opts.eventObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */
    this.eventCreateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['eventObject'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Event;

      return this.apiClient.callApi(
        '/event/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new event
     * @param {Object} opts Optional parameters
     * @param {module:model/Event} opts.eventObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    this.eventCreate = function(opts) {
      return this.eventCreateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an event
     * Deletes an event
     * @param {String} id Identifier for the event to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.eventDeleteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/event/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an event
     * Deletes an event
     * @param {String} id Identifier for the event to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.eventDelete = function(id) {
      return this.eventDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return a list of events
     * &lt;h2 id&#x3D;\&quot;filtering-retrieved-events\&quot;&gt;Filtering retrieved events&lt;/h2&gt; &lt;p&gt;Query parameters can be used to filter the retrieved events by the following criteria.&lt;/p&gt; &lt;h3 id&#x3D;\&quot;event-time\&quot;&gt;Event time&lt;/h3&gt; &lt;p&gt;Use &lt;code&gt;start&lt;/code&gt; and &lt;code&gt;end&lt;/code&gt; to restrict the date range of returned events. Any events that intersect with the given date range will be returned.&lt;/p&gt; &lt;p&gt;The parameters &lt;code&gt;start&lt;/code&gt; and &lt;code&gt;end&lt;/code&gt; can be given in the following formats:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;ISO 8601 (including the time of day)&lt;/li&gt; &lt;li&gt;yyyy-mm-dd&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;In addition, &lt;code&gt;today&lt;/code&gt; can be used as the value.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?start&#x3D;2014-01-15&amp;amp;end&#x3D;2014-01-20 &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?start&#x3D;2014-01-15&amp;amp;end&#x3D;2014-01-20\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h3 id&#x3D;\&quot;event-location\&quot;&gt;Event location&lt;/h3&gt; &lt;h4 id&#x3D;\&quot;bounding-box\&quot;&gt;Bounding box&lt;/h4&gt; &lt;p&gt;To restrict the retrieved events to a geographical region, use the query parameter &lt;code&gt;bbox&lt;/code&gt; in the format&lt;/p&gt; &lt;pre&gt;&lt;code&gt;bbox&#x3D;west,south,east,north &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;Where &lt;code&gt;west&lt;/code&gt; is the longitude of the rectangle&#39;s western boundary, &lt;code&gt;south&lt;/code&gt; is the latitude of the rectangle&#39;s southern boundary, and so on.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?bbox&#x3D;24.9348,60.1762,24.9681,60.1889 &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?bbox&#x3D;24.9348,60.1762,24.9681,60.1889\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;specific-location\&quot;&gt;Specific location&lt;/h4&gt; &lt;p&gt;To restrict the retrieved events to a known location(s), use the query parameter &lt;code&gt;location&lt;/code&gt;, separating values by commas if you wish to query for several locations.&lt;/p&gt; &lt;p&gt;Location ids are found at the &lt;code&gt;place&lt;/code&gt; endpoint, which lists the locations in decreasing number of events found. Most locations originate from the Helsinki service point registry (tprek), hence the format &lt;code&gt;tprek:28473&lt;/code&gt;. An easy way to locate service points is to browse &lt;code&gt;servicemap.hel.fi&lt;/code&gt;, which uses the same location ids, e.g. &lt;code&gt;servicemap.hel.fi/unit/28473&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?location&#x3D;tprek:28473 &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?location&#x3D;tprek:28473\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;district\&quot;&gt;District&lt;/h4&gt; &lt;p&gt;To restrict the retrieved events to city district(s), use the query parameter &lt;code&gt;division&lt;/code&gt;, separating values by commas if you wish to query for several divisions.&lt;/p&gt; &lt;p&gt;City of Helsinki neighborhoods (kaupunginosa), districts (peruspiiri) and subdistricts (osa-alue) are supported.     &lt;a href&#x3D;\&quot;http://kartta.hel.fi/?setlanguage&#x3D;en&amp;e&#x3D;25498873&amp;n&#x3D;6674660&amp;r&#x3D;16&amp;w&#x3D;***&amp;l&#x3D;Karttasarja%2Ckaupunginosat%2Cosaalueet_WFS%2Cperuspiiri_WFS&amp;o&#x3D;100%2C100%2C100%2C100&amp;swtab&#x3D;kaikki\&quot;&gt;         Check the divisions on the Helsinki map service.&lt;/a&gt; &lt;/p&gt; &lt;p&gt; You may query either by specific OCD division type &lt;code&gt;peruspiiri:malmi&lt;/code&gt;, or by division name &lt;code&gt;malmi&lt;/code&gt;. The latter query checks all divisions with the name, regardless of division type.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?division&#x3D;malmi &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?division&#x3D;malmi\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h3 id&#x3D;\&quot;event-category\&quot;&gt;Event category&lt;/h3&gt; &lt;p&gt;To restrict the retrieved events by category, use the query parameter &lt;code&gt;keyword&lt;/code&gt;, separating values by commas if you wish to query for several locations.&lt;/p&gt; &lt;p&gt;Keyword ids are found at the &lt;code&gt;keyword&lt;/code&gt; endpoint, which lists the keywords in decreasing number of events found. The common keywords used in all events originate from the general Finnish ontology (yso), hence the format &lt;code&gt;yso:p4354&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?keyword&#x3D;yso:p4354 &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?keyword&#x3D;yso:p4354\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h3 id&#x3D;\&quot;event-text\&quot;&gt;Event text&lt;/h3&gt; &lt;p&gt;To find out events that contain a specific string in any of the text fields, use the query parameter &lt;code&gt;text&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?text&#x3D;shostakovich &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?text&#x3D;shostakovich\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h2 id&#x3D;\&quot;getting-detailed-data\&quot;&gt;Getting detailed data&lt;/h2&gt; &lt;p&gt;In the default case, keywords, locations, and other fields that refer to separate resources are only displayed as simple references.&lt;/p&gt; &lt;p&gt;If you want to include the complete data from related resources in the current response, use the keyword &lt;code&gt;include&lt;/code&gt;. For example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?include&#x3D;location,keywords &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?include&#x3D;location,keywords\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Embed given reference-type fields directly into the response, otherwise they are returned as URI references.
     * @param {String} opts.text Search (case insensitive) through all multilingual text fields (name, description, short_description, info_url) of an event (every language). Multilingual fields contain the text that users are expected to care about, thus multilinguality is useful discriminator.
     * @param {String} opts.lastModifiedSince Search for events that have been modified since or at this time.
     * @param {Date} opts.start Search for events beginning or ending after this time. Dates can be specified using ISO 8601 (\&quot;2016-01-12\&quot;) and additionally \&quot;today\&quot;.
     * @param {Date} opts.end Search for events beginning or ending before this time. Dates can be specified using ISO 8601 (\&quot;2016-01-12\&quot;) and additionally \&quot;today\&quot;.
     * @param {Array.<String>} opts.bbox Search for events that are within this bounding box. Decimal coordinates are given in order west, south, east, north. Period is used as decimal separator.
     * @param {String} opts.dataSource Search for events that come from the specified source system
     * @param {Array.<Number>} opts.location Search for events in given locations as specified by id. Multiple ids are separated by comma
     * @param {String} opts.division You may filter places by specific OCD division id, or by division name. The latter query checks all divisions with the name, regardless of division type.
     * @param {String} opts.keyword Search for events with given keywords as specified by id. Multiple ids are separated by comma
     * @param {module:model/String} opts.recurring Search for events based on whether they are part of recurring event set. &#39;super&#39; specifies recurring, while &#39;sub&#39; is non-recurring.
     * @param {Number} opts.minDuration Search for events that are longer than given time in seconds
     * @param {Number} opts.maxDuration Search for events that are shorter than given time in seconds
     * @param {String} opts.publisher Search for events published by the given organization
     * @param {String} opts.sort Sort the returned events in the given order. Possible sorting criteria are &#39;start_time&#39;, &#39;end_time&#39;, &#39;days_left&#39; and &#39;last_modified_time&#39;. The default ordering is &#39;-last_modified_time&#39;.
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {String} opts.addressLocalityFi Search for events in given address localities (fi). Multiple localities can be entered by separating them by a comma
     * @param {String} opts.addressLocalitySv Search for events in given address localities (sv). Multiple localities can be entered by separating them by a comma
     * @param {String} opts.addressLocalityEn Search for events in given address localities (en). Multiple localities can be entered by separating them by a comma
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    this.eventListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'text': opts['text'],
        'last_modified_since': opts['lastModifiedSince'],
        'start': opts['start'],
        'end': opts['end'],
        'bbox': this.apiClient.buildCollectionParam(opts['bbox'], 'csv'),
        'data_source': opts['dataSource'],
        'location': this.apiClient.buildCollectionParam(opts['location'], 'csv'),
        'division': opts['division'],
        'keyword': opts['keyword'],
        'recurring': opts['recurring'],
        'min_duration': opts['minDuration'],
        'max_duration': opts['maxDuration'],
        'publisher': opts['publisher'],
        'sort': opts['sort'],
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'address_locality_fi': opts['addressLocalityFi'],
        'address_locality_sv': opts['addressLocalitySv'],
        'address_locality_en': opts['addressLocalityEn']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/event/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return a list of events
     * &lt;h2 id&#x3D;\&quot;filtering-retrieved-events\&quot;&gt;Filtering retrieved events&lt;/h2&gt; &lt;p&gt;Query parameters can be used to filter the retrieved events by the following criteria.&lt;/p&gt; &lt;h3 id&#x3D;\&quot;event-time\&quot;&gt;Event time&lt;/h3&gt; &lt;p&gt;Use &lt;code&gt;start&lt;/code&gt; and &lt;code&gt;end&lt;/code&gt; to restrict the date range of returned events. Any events that intersect with the given date range will be returned.&lt;/p&gt; &lt;p&gt;The parameters &lt;code&gt;start&lt;/code&gt; and &lt;code&gt;end&lt;/code&gt; can be given in the following formats:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;ISO 8601 (including the time of day)&lt;/li&gt; &lt;li&gt;yyyy-mm-dd&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;In addition, &lt;code&gt;today&lt;/code&gt; can be used as the value.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?start&#x3D;2014-01-15&amp;amp;end&#x3D;2014-01-20 &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?start&#x3D;2014-01-15&amp;amp;end&#x3D;2014-01-20\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h3 id&#x3D;\&quot;event-location\&quot;&gt;Event location&lt;/h3&gt; &lt;h4 id&#x3D;\&quot;bounding-box\&quot;&gt;Bounding box&lt;/h4&gt; &lt;p&gt;To restrict the retrieved events to a geographical region, use the query parameter &lt;code&gt;bbox&lt;/code&gt; in the format&lt;/p&gt; &lt;pre&gt;&lt;code&gt;bbox&#x3D;west,south,east,north &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;Where &lt;code&gt;west&lt;/code&gt; is the longitude of the rectangle&#39;s western boundary, &lt;code&gt;south&lt;/code&gt; is the latitude of the rectangle&#39;s southern boundary, and so on.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?bbox&#x3D;24.9348,60.1762,24.9681,60.1889 &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?bbox&#x3D;24.9348,60.1762,24.9681,60.1889\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;specific-location\&quot;&gt;Specific location&lt;/h4&gt; &lt;p&gt;To restrict the retrieved events to a known location(s), use the query parameter &lt;code&gt;location&lt;/code&gt;, separating values by commas if you wish to query for several locations.&lt;/p&gt; &lt;p&gt;Location ids are found at the &lt;code&gt;place&lt;/code&gt; endpoint, which lists the locations in decreasing number of events found. Most locations originate from the Helsinki service point registry (tprek), hence the format &lt;code&gt;tprek:28473&lt;/code&gt;. An easy way to locate service points is to browse &lt;code&gt;servicemap.hel.fi&lt;/code&gt;, which uses the same location ids, e.g. &lt;code&gt;servicemap.hel.fi/unit/28473&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?location&#x3D;tprek:28473 &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?location&#x3D;tprek:28473\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;district\&quot;&gt;District&lt;/h4&gt; &lt;p&gt;To restrict the retrieved events to city district(s), use the query parameter &lt;code&gt;division&lt;/code&gt;, separating values by commas if you wish to query for several divisions.&lt;/p&gt; &lt;p&gt;City of Helsinki neighborhoods (kaupunginosa), districts (peruspiiri) and subdistricts (osa-alue) are supported.     &lt;a href&#x3D;\&quot;http://kartta.hel.fi/?setlanguage&#x3D;en&amp;e&#x3D;25498873&amp;n&#x3D;6674660&amp;r&#x3D;16&amp;w&#x3D;***&amp;l&#x3D;Karttasarja%2Ckaupunginosat%2Cosaalueet_WFS%2Cperuspiiri_WFS&amp;o&#x3D;100%2C100%2C100%2C100&amp;swtab&#x3D;kaikki\&quot;&gt;         Check the divisions on the Helsinki map service.&lt;/a&gt; &lt;/p&gt; &lt;p&gt; You may query either by specific OCD division type &lt;code&gt;peruspiiri:malmi&lt;/code&gt;, or by division name &lt;code&gt;malmi&lt;/code&gt;. The latter query checks all divisions with the name, regardless of division type.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?division&#x3D;malmi &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?division&#x3D;malmi\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h3 id&#x3D;\&quot;event-category\&quot;&gt;Event category&lt;/h3&gt; &lt;p&gt;To restrict the retrieved events by category, use the query parameter &lt;code&gt;keyword&lt;/code&gt;, separating values by commas if you wish to query for several locations.&lt;/p&gt; &lt;p&gt;Keyword ids are found at the &lt;code&gt;keyword&lt;/code&gt; endpoint, which lists the keywords in decreasing number of events found. The common keywords used in all events originate from the general Finnish ontology (yso), hence the format &lt;code&gt;yso:p4354&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?keyword&#x3D;yso:p4354 &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?keyword&#x3D;yso:p4354\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h3 id&#x3D;\&quot;event-text\&quot;&gt;Event text&lt;/h3&gt; &lt;p&gt;To find out events that contain a specific string in any of the text fields, use the query parameter &lt;code&gt;text&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?text&#x3D;shostakovich &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?text&#x3D;shostakovich\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h2 id&#x3D;\&quot;getting-detailed-data\&quot;&gt;Getting detailed data&lt;/h2&gt; &lt;p&gt;In the default case, keywords, locations, and other fields that refer to separate resources are only displayed as simple references.&lt;/p&gt; &lt;p&gt;If you want to include the complete data from related resources in the current response, use the keyword &lt;code&gt;include&lt;/code&gt;. For example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;event/?include&#x3D;location,keywords &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?include&#x3D;location,keywords\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Embed given reference-type fields directly into the response, otherwise they are returned as URI references.
     * @param {String} opts.text Search (case insensitive) through all multilingual text fields (name, description, short_description, info_url) of an event (every language). Multilingual fields contain the text that users are expected to care about, thus multilinguality is useful discriminator.
     * @param {String} opts.lastModifiedSince Search for events that have been modified since or at this time.
     * @param {Date} opts.start Search for events beginning or ending after this time. Dates can be specified using ISO 8601 (\&quot;2016-01-12\&quot;) and additionally \&quot;today\&quot;.
     * @param {Date} opts.end Search for events beginning or ending before this time. Dates can be specified using ISO 8601 (\&quot;2016-01-12\&quot;) and additionally \&quot;today\&quot;.
     * @param {Array.<String>} opts.bbox Search for events that are within this bounding box. Decimal coordinates are given in order west, south, east, north. Period is used as decimal separator.
     * @param {String} opts.dataSource Search for events that come from the specified source system
     * @param {Array.<Number>} opts.location Search for events in given locations as specified by id. Multiple ids are separated by comma
     * @param {String} opts.division You may filter places by specific OCD division id, or by division name. The latter query checks all divisions with the name, regardless of division type.
     * @param {String} opts.keyword Search for events with given keywords as specified by id. Multiple ids are separated by comma
     * @param {module:model/String} opts.recurring Search for events based on whether they are part of recurring event set. &#39;super&#39; specifies recurring, while &#39;sub&#39; is non-recurring.
     * @param {Number} opts.minDuration Search for events that are longer than given time in seconds
     * @param {Number} opts.maxDuration Search for events that are shorter than given time in seconds
     * @param {String} opts.publisher Search for events published by the given organization
     * @param {String} opts.sort Sort the returned events in the given order. Possible sorting criteria are &#39;start_time&#39;, &#39;end_time&#39;, &#39;days_left&#39; and &#39;last_modified_time&#39;. The default ordering is &#39;-last_modified_time&#39;.
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {String} opts.addressLocalityFi Search for events in given address localities (fi). Multiple localities can be entered by separating them by a comma
     * @param {String} opts.addressLocalitySv Search for events in given address localities (sv). Multiple localities can be entered by separating them by a comma
     * @param {String} opts.addressLocalityEn Search for events in given address localities (en). Multiple localities can be entered by separating them by a comma
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    this.eventList = function(opts) {
      return this.eventListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve single event by id
     * @param {String} id Event identifier as defined in event schema
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */
    this.eventRetrieveWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventRetrieve");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Event;

      return this.apiClient.callApi(
        '/event/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve single event by id
     * @param {String} id Event identifier as defined in event schema
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    this.eventRetrieve = function(id) {
      return this.eventRetrieveWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an event
     * Events can be updated if the user has appropriate access permissions. The original implementation behaves like PATCH, ie. if some field is left out from the PUT call, its value is retained in database. In order to ensure consistent behaviour, users should always supply every field in PUT call.
     * @param {String} id Identifier for the event to be updated
     * @param {Object} opts Optional parameters
     * @param {module:model/Event} opts.eventObject Event object that should replace the existing event, note that some implementations may retain unspecified fields at their original values.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */
    this.eventUpdateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['eventObject'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Event;

      return this.apiClient.callApi(
        '/event/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an event
     * Events can be updated if the user has appropriate access permissions. The original implementation behaves like PATCH, ie. if some field is left out from the PUT call, its value is retained in database. In order to ensure consistent behaviour, users should always supply every field in PUT call.
     * @param {String} id Identifier for the event to be updated
     * @param {Object} opts Optional parameters
     * @param {module:model/Event} opts.eventObject Event object that should replace the existing event, note that some implementations may retain unspecified fields at their original values.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    this.eventUpdate = function(id, opts) {
      return this.eventUpdateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
