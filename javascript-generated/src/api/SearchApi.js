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
    define(['ApiClient', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.SearchApi = factory(root.LinkedeventsClient.ApiClient, root.LinkedeventsClient.InlineResponse200);
  }
}(this, function(ApiClient, InlineResponse200) {
  'use strict';

  /**
   * Search service.
   * @module api/SearchApi
   * @version 0.0.3
   */

  /**
   * Constructs a new SearchApi. 
   * @alias module:api/SearchApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Search through events and places
     * &lt;h2 id&#x3D;\&quot;using-search-endpoint\&quot;&gt;Using the search endpoint&lt;/h2&gt; &lt;p&gt;This is the supposedly intelligent Elasticsearch Finnish full-text search for both events and places.     The results are sorted by relevance score shown in the &lt;code&gt;score&lt;/code&gt; field. The search parameter is &lt;code&gt;?q&#x3D;&lt;/code&gt;. &lt;h4 id&#x3D;\&quot;specifying-resource-type\&quot;&gt;Specifying resource type&lt;/h4&gt; &lt;p&gt;In the default case, both events and places are returned. The type of each resource is returned in the     &lt;code&gt;resource_type&lt;/code&gt; field. You may use the parameter &lt;code&gt;type&lt;/code&gt; to ask for only &lt;code&gt;event&lt;/code&gt; or &lt;code&gt;place&lt;/code&gt;. &lt;h4 id&#x3D;\&quot;events-with-decay-score\&quot;&gt;Future events with time decay&lt;/h4&gt; &lt;p&gt;When searching for events only (&lt;code&gt;?type&#x3D;event&lt;/code&gt;), by default only future events are returned, with a decay function applied so that next     events get a higher relevance score. This means that     events in the near future are returned first:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;search/?type&#x3D;event&amp;q&#x3D;sibelius &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?type&#x3D;event&amp;q&#x3D;sibelius\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;events-with-time-filtering\&quot;&gt;Events with time filtering&lt;/h4&gt; &lt;p&gt;When searching for events only (&lt;code&gt;?type&#x3D;event&lt;/code&gt;), you may also search for events in the specified time range using     &lt;code&gt;start&lt;/code&gt; or &lt;code&gt;end&lt;/code&gt; or both. In this case, relevance score is calculated only based on Finnish tokenization of the search string, with no time preference:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;search/?type&#x3D;event&amp;q&#x3D;sibelius&amp;start&#x3D;2017-01-01 &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?type&#x3D;event&amp;q&#x3D;sibelius&amp;start&#x3D;2017-01-01\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;autocomplete\&quot;&gt;Autocomplete&lt;/h4&gt;         &lt;p&gt;For fast autocomplete substring match in the resource name, use the &lt;code&gt;?input&#x3D;&lt;/code&gt; parameter instead.             When searching for events only (&lt;code&gt;?type&#x3D;event&lt;/code&gt;), by default only future events are returned, with a decay function applied so that next     events get a higher relevance score. May be combined with &lt;code&gt;start&lt;/code&gt; and &lt;code&gt;end&lt;/code&gt;. &lt;pre&gt;&lt;code&gt;search/?type&#x3D;place&amp;input&#x3D;sibe &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?type&#x3D;event&amp;input&#x3D;sibe\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {String} opts.type Comma-delimited list of resource types to search for. Currently allowed values are &#x60;event&#x60; and &#x60;place&#x60;. &#x60;type&#x3D;event&#x60; must be specified for event date filtering and relevancy sorting.
     * @param {String} opts.q Search for events and places matching this string. Mutually exclusive with &#x60;input&#x60; typeahead search.
     * @param {String} opts.input Return autocompletition suggestions for this string. Mutually exclusive with &#x60;q&#x60; full-text search.
     * @param {Date} opts.start Search for events beginning or ending after this time. Dates can be specified using ISO 8601 (\&quot;2016-01-12\&quot;) and additionally \&quot;today\&quot;.
     * @param {Date} opts.end Search for events beginning or ending before this time. Dates can be specified using ISO 8601 (\&quot;2016-01-12\&quot;) and additionally \&quot;today\&quot;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    this.eventSearchWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'type': opts['type'],
        'q': opts['q'],
        'input': opts['input'],
        'start': opts['start'],
        'end': opts['end']
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
        '/search/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search through events and places
     * &lt;h2 id&#x3D;\&quot;using-search-endpoint\&quot;&gt;Using the search endpoint&lt;/h2&gt; &lt;p&gt;This is the supposedly intelligent Elasticsearch Finnish full-text search for both events and places.     The results are sorted by relevance score shown in the &lt;code&gt;score&lt;/code&gt; field. The search parameter is &lt;code&gt;?q&#x3D;&lt;/code&gt;. &lt;h4 id&#x3D;\&quot;specifying-resource-type\&quot;&gt;Specifying resource type&lt;/h4&gt; &lt;p&gt;In the default case, both events and places are returned. The type of each resource is returned in the     &lt;code&gt;resource_type&lt;/code&gt; field. You may use the parameter &lt;code&gt;type&lt;/code&gt; to ask for only &lt;code&gt;event&lt;/code&gt; or &lt;code&gt;place&lt;/code&gt;. &lt;h4 id&#x3D;\&quot;events-with-decay-score\&quot;&gt;Future events with time decay&lt;/h4&gt; &lt;p&gt;When searching for events only (&lt;code&gt;?type&#x3D;event&lt;/code&gt;), by default only future events are returned, with a decay function applied so that next     events get a higher relevance score. This means that     events in the near future are returned first:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;search/?type&#x3D;event&amp;q&#x3D;sibelius &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?type&#x3D;event&amp;q&#x3D;sibelius\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;events-with-time-filtering\&quot;&gt;Events with time filtering&lt;/h4&gt; &lt;p&gt;When searching for events only (&lt;code&gt;?type&#x3D;event&lt;/code&gt;), you may also search for events in the specified time range using     &lt;code&gt;start&lt;/code&gt; or &lt;code&gt;end&lt;/code&gt; or both. In this case, relevance score is calculated only based on Finnish tokenization of the search string, with no time preference:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;search/?type&#x3D;event&amp;q&#x3D;sibelius&amp;start&#x3D;2017-01-01 &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?type&#x3D;event&amp;q&#x3D;sibelius&amp;start&#x3D;2017-01-01\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;autocomplete\&quot;&gt;Autocomplete&lt;/h4&gt;         &lt;p&gt;For fast autocomplete substring match in the resource name, use the &lt;code&gt;?input&#x3D;&lt;/code&gt; parameter instead.             When searching for events only (&lt;code&gt;?type&#x3D;event&lt;/code&gt;), by default only future events are returned, with a decay function applied so that next     events get a higher relevance score. May be combined with &lt;code&gt;start&lt;/code&gt; and &lt;code&gt;end&lt;/code&gt;. &lt;pre&gt;&lt;code&gt;search/?type&#x3D;place&amp;input&#x3D;sibe &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?type&#x3D;event&amp;input&#x3D;sibe\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {String} opts.type Comma-delimited list of resource types to search for. Currently allowed values are &#x60;event&#x60; and &#x60;place&#x60;. &#x60;type&#x3D;event&#x60; must be specified for event date filtering and relevancy sorting.
     * @param {String} opts.q Search for events and places matching this string. Mutually exclusive with &#x60;input&#x60; typeahead search.
     * @param {String} opts.input Return autocompletition suggestions for this string. Mutually exclusive with &#x60;q&#x60; full-text search.
     * @param {Date} opts.start Search for events beginning or ending after this time. Dates can be specified using ISO 8601 (\&quot;2016-01-12\&quot;) and additionally \&quot;today\&quot;.
     * @param {Date} opts.end Search for events beginning or ending before this time. Dates can be specified using ISO 8601 (\&quot;2016-01-12\&quot;) and additionally \&quot;today\&quot;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    this.eventSearch = function(opts) {
      return this.eventSearchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
