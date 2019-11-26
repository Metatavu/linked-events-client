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
    define(['ApiClient', 'model/Image', 'model/ImageUrl', 'model/InlineResponse2001'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Image'), require('../model/ImageUrl'), require('../model/InlineResponse2001'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.ImageApi = factory(root.LinkedeventsClient.ApiClient, root.LinkedeventsClient.Image, root.LinkedeventsClient.ImageUrl, root.LinkedeventsClient.InlineResponse2001);
  }
}(this, function(ApiClient, Image, ImageUrl, InlineResponse2001) {
  'use strict';

  /**
   * Image service.
   * @module api/ImageApi
   * @version 0.0.13
   */

  /**
   * Constructs a new ImageApi. 
   * @alias module:api/ImageApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new image
     * There are two ways to create an image object. The image file can be posted as a multipart request, but the endpoint also accepts a simple JSON object with an external url in the url field. This allows using external images for events without saving them on the API server.
     * @param {Object} opts Optional parameters
     * @param {File} opts.imageFile 
     * @param {module:model/ImageUrl} opts.imageObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.imageCreateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['imageObject'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'image_file': opts['imageFile']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = Image;

      return this.apiClient.callApi(
        '/image/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new image
     * There are two ways to create an image object. The image file can be posted as a multipart request, but the endpoint also accepts a simple JSON object with an external url in the url field. This allows using external images for events without saving them on the API server.
     * @param {Object} opts Optional parameters
     * @param {File} opts.imageFile 
     * @param {module:model/ImageUrl} opts.imageObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.imageCreate = function(opts) {
      return this.imageCreateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of images
     * Image endpoint returns images that are used for events, places or organizers. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {Array.<String>} opts.include Embed given reference-type fields directly into the response, otherwise they are returned as URI references.
     * @param {String} opts.sort return the results in ascending or descending order by the named field. sorting is only supported for some string, integer and datetime fields.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    this.imageListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/image/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a list of images
     * Image endpoint returns images that are used for events, places or organizers. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {Array.<String>} opts.include Embed given reference-type fields directly into the response, otherwise they are returned as URI references.
     * @param {String} opts.sort return the results in ascending or descending order by the named field. sorting is only supported for some string, integer and datetime fields.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    this.imageList = function(opts) {
      return this.imageListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return information for single image
     * @param {String} id The id for the image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.imageRetrieveWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling imageRetrieve");
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
      var returnType = Image;

      return this.apiClient.callApi(
        '/image/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return information for single image
     * @param {String} id The id for the image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.imageRetrieve = function(id) {
      return this.imageRetrieveWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an image
     * Images can be updated if the user has appropriate access permissions. The original implementation behaves like PATCH, ie. if some field is left out from the PUT call, its value is retained in database. In order to ensure consistent behaviour, users should always supply every field in PUT call.
     * @param {String} id Identifier for the image to be updated
     * @param {Object} opts Optional parameters
     * @param {module:model/Image} opts.imageObject Image object that should replace the existing image, note that some implementations may retain unspecified fields at their original values.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.imageUpdateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['imageObject'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling imageUpdate");
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
      var returnType = Image;

      return this.apiClient.callApi(
        '/image/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an image
     * Images can be updated if the user has appropriate access permissions. The original implementation behaves like PATCH, ie. if some field is left out from the PUT call, its value is retained in database. In order to ensure consistent behaviour, users should always supply every field in PUT call.
     * @param {String} id Identifier for the image to be updated
     * @param {Object} opts Optional parameters
     * @param {module:model/Image} opts.imageObject Image object that should replace the existing image, note that some implementations may retain unspecified fields at their original values.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.imageUpdate = function(id, opts) {
      return this.imageUpdateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
