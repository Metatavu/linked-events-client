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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Event', 'model/EventInfoUrl', 'model/EventName', 'model/Eventlink', 'model/IdRef', 'model/Image', 'model/ImageUrl', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/Keyword', 'model/KeywordName', 'model/KeywordSet', 'model/Language', 'model/LanguageName', 'model/MetaDefinition', 'model/Offer', 'model/OfferDescription', 'model/OfferInfoUrl', 'model/OfferPrice', 'model/Place', 'model/PlaceAddressLocality', 'model/PlaceCustomData', 'model/PlaceDescription', 'model/PlaceInfoUrl', 'model/PlaceName', 'model/PlacePosition', 'model/PlaceStreetAddress', 'model/PlaceTelephone', 'api/EventApi', 'api/FilterApi', 'api/ImageApi', 'api/LanguageApi', 'api/SearchApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Event'), require('./model/EventInfoUrl'), require('./model/EventName'), require('./model/Eventlink'), require('./model/IdRef'), require('./model/Image'), require('./model/ImageUrl'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/Keyword'), require('./model/KeywordName'), require('./model/KeywordSet'), require('./model/Language'), require('./model/LanguageName'), require('./model/MetaDefinition'), require('./model/Offer'), require('./model/OfferDescription'), require('./model/OfferInfoUrl'), require('./model/OfferPrice'), require('./model/Place'), require('./model/PlaceAddressLocality'), require('./model/PlaceCustomData'), require('./model/PlaceDescription'), require('./model/PlaceInfoUrl'), require('./model/PlaceName'), require('./model/PlacePosition'), require('./model/PlaceStreetAddress'), require('./model/PlaceTelephone'), require('./api/EventApi'), require('./api/FilterApi'), require('./api/ImageApi'), require('./api/LanguageApi'), require('./api/SearchApi'));
  }
}(function(ApiClient, Event, EventInfoUrl, EventName, Eventlink, IdRef, Image, ImageUrl, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, Keyword, KeywordName, KeywordSet, Language, LanguageName, MetaDefinition, Offer, OfferDescription, OfferInfoUrl, OfferPrice, Place, PlaceAddressLocality, PlaceCustomData, PlaceDescription, PlaceInfoUrl, PlaceName, PlacePosition, PlaceStreetAddress, PlaceTelephone, EventApi, FilterApi, ImageApi, LanguageApi, SearchApi) {
  'use strict';

  /**
   * Linked_Events_provides_categorized_data_on_events_and_places_using_JSON_LD_format_Events_can_be_searched_by_date_and_location__Location_can_be_exact_address_or_largerarea_such_as_neighbourhood_or_boroughJSON_LD_format_is_streamlined_using_include_mechanism__API_users_can_request_that_certainfields_are_included_directly_into_the_result_instead_of_being_hyperlinks_to_objects_Several_fields_are_multilingual__These_are_implemented_as_object_with_each_language_variantas_property__In_this_specification_each_multilingual_field_has__fisven_property_triplet_asexample_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var LinkedeventsClient = require('index'); // See note below*.
   * var xxxSvc = new LinkedeventsClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new LinkedeventsClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new LinkedeventsClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new LinkedeventsClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.8
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The EventInfoUrl model constructor.
     * @property {module:model/EventInfoUrl}
     */
    EventInfoUrl: EventInfoUrl,
    /**
     * The EventName model constructor.
     * @property {module:model/EventName}
     */
    EventName: EventName,
    /**
     * The Eventlink model constructor.
     * @property {module:model/Eventlink}
     */
    Eventlink: Eventlink,
    /**
     * The IdRef model constructor.
     * @property {module:model/IdRef}
     */
    IdRef: IdRef,
    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image: Image,
    /**
     * The ImageUrl model constructor.
     * @property {module:model/ImageUrl}
     */
    ImageUrl: ImageUrl,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The Keyword model constructor.
     * @property {module:model/Keyword}
     */
    Keyword: Keyword,
    /**
     * The KeywordName model constructor.
     * @property {module:model/KeywordName}
     */
    KeywordName: KeywordName,
    /**
     * The KeywordSet model constructor.
     * @property {module:model/KeywordSet}
     */
    KeywordSet: KeywordSet,
    /**
     * The Language model constructor.
     * @property {module:model/Language}
     */
    Language: Language,
    /**
     * The LanguageName model constructor.
     * @property {module:model/LanguageName}
     */
    LanguageName: LanguageName,
    /**
     * The MetaDefinition model constructor.
     * @property {module:model/MetaDefinition}
     */
    MetaDefinition: MetaDefinition,
    /**
     * The Offer model constructor.
     * @property {module:model/Offer}
     */
    Offer: Offer,
    /**
     * The OfferDescription model constructor.
     * @property {module:model/OfferDescription}
     */
    OfferDescription: OfferDescription,
    /**
     * The OfferInfoUrl model constructor.
     * @property {module:model/OfferInfoUrl}
     */
    OfferInfoUrl: OfferInfoUrl,
    /**
     * The OfferPrice model constructor.
     * @property {module:model/OfferPrice}
     */
    OfferPrice: OfferPrice,
    /**
     * The Place model constructor.
     * @property {module:model/Place}
     */
    Place: Place,
    /**
     * The PlaceAddressLocality model constructor.
     * @property {module:model/PlaceAddressLocality}
     */
    PlaceAddressLocality: PlaceAddressLocality,
    /**
     * The PlaceCustomData model constructor.
     * @property {module:model/PlaceCustomData}
     */
    PlaceCustomData: PlaceCustomData,
    /**
     * The PlaceDescription model constructor.
     * @property {module:model/PlaceDescription}
     */
    PlaceDescription: PlaceDescription,
    /**
     * The PlaceInfoUrl model constructor.
     * @property {module:model/PlaceInfoUrl}
     */
    PlaceInfoUrl: PlaceInfoUrl,
    /**
     * The PlaceName model constructor.
     * @property {module:model/PlaceName}
     */
    PlaceName: PlaceName,
    /**
     * The PlacePosition model constructor.
     * @property {module:model/PlacePosition}
     */
    PlacePosition: PlacePosition,
    /**
     * The PlaceStreetAddress model constructor.
     * @property {module:model/PlaceStreetAddress}
     */
    PlaceStreetAddress: PlaceStreetAddress,
    /**
     * The PlaceTelephone model constructor.
     * @property {module:model/PlaceTelephone}
     */
    PlaceTelephone: PlaceTelephone,
    /**
     * The EventApi service constructor.
     * @property {module:api/EventApi}
     */
    EventApi: EventApi,
    /**
     * The FilterApi service constructor.
     * @property {module:api/FilterApi}
     */
    FilterApi: FilterApi,
    /**
     * The ImageApi service constructor.
     * @property {module:api/ImageApi}
     */
    ImageApi: ImageApi,
    /**
     * The LanguageApi service constructor.
     * @property {module:api/LanguageApi}
     */
    LanguageApi: LanguageApi,
    /**
     * The SearchApi service constructor.
     * @property {module:api/SearchApi}
     */
    SearchApi: SearchApi
  };

  return exports;
}));
