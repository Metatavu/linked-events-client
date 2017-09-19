/*
 * Linked Events information API
 * Linked Events provides categorized data on events and places using JSON-LD format.  Events can be searched by date and location. Location can be exact address or larger area such as neighbourhood or borough  JSON-LD format is streamlined using include mechanism. API users can request that certain fields are included directly into the result, instead of being hyperlinks to objects.  Several fields are multilingual. These are implemented as object with each language variant as property. In this specification each multilingual field has (fi,sv,en) property triplet as example.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package fi.metatavu.linkedevents.client.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import fi.metatavu.linkedevents.client.model.EventInfoUrl;
import fi.metatavu.linkedevents.client.model.EventName;
import fi.metatavu.linkedevents.client.model.Eventlink;
import fi.metatavu.linkedevents.client.model.IdRef;
import fi.metatavu.linkedevents.client.model.Image;
import fi.metatavu.linkedevents.client.model.Keyword;
import fi.metatavu.linkedevents.client.model.Language;
import fi.metatavu.linkedevents.client.model.Offer;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;


@com.fasterxml.jackson.annotation.JsonIgnoreProperties(ignoreUnknown = true)
/**
 * Describes the actual events. Linked events API supports organizing events into hierarchies. This is implemented with collection events called \&quot;super events\&quot;. Super events are normal event objects, that reference contained events in \&quot;sub_events\&quot; property. Currently there are two major use cases: events such as \&quot;Helsinki Festival\&quot;, which consist of unique events over a span of time and recurring events such as theatrical productions with multiple showings. It is implementation dependent how the grouping of events is done. It should be noted that grouping might be automatic based on eg. event name and thus group unrelated events together and miss related events. Users of data are advised to prepare for this.
 */
@ApiModel(description = "Describes the actual events. Linked events API supports organizing events into hierarchies. This is implemented with collection events called \"super events\". Super events are normal event objects, that reference contained events in \"sub_events\" property. Currently there are two major use cases: events such as \"Helsinki Festival\", which consist of unique events over a span of time and recurring events such as theatrical productions with multiple showings. It is implementation dependent how the grouping of events is done. It should be noted that grouping might be automatic based on eg. event name and thus group unrelated events together and miss related events. Users of data are advised to prepare for this.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2017-09-19T18:52:34.396+03:00")
public class Event {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("location")
  private IdRef location = null;

  @JsonProperty("keywords")
  private List<IdRef> keywords = new ArrayList<IdRef>();

  @JsonProperty("in_language")
  private List<Language> inLanguage = null;

  @JsonProperty("super_event")
  private String superEvent = null;

  @JsonProperty("super_event_type")
  private String superEventType = null;

  @JsonProperty("event_status")
  private String eventStatus = null;

  @JsonProperty("publication_status")
  private String publicationStatus = null;

  @JsonProperty("external_links")
  private List<Eventlink> externalLinks = null;

  @JsonProperty("offers")
  private List<Offer> offers = null;

  @JsonProperty("sub_events")
  private List<String> subEvents = null;

  @JsonProperty("custom_data")
  private String customData = null;

  @JsonProperty("name")
  private EventName name = null;

  @JsonProperty("images")
  private List<Image> images = null;

  @JsonProperty("created_time")
  private @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor createdTime = null;

  @JsonProperty("last_modified_time")
  private @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor lastModifiedTime = null;

  @JsonProperty("info_url")
  private EventInfoUrl infoUrl = null;

  @JsonProperty("description")
  private Object description = null;

  @JsonProperty("short_description")
  private Object shortDescription = null;

  @JsonProperty("@context")
  private String context = null;

  @JsonProperty("@type")
  private String type = null;

  @JsonProperty("date_published")
  private @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor datePublished = null;

  @JsonProperty("provider")
  private Object provider = null;

  @JsonProperty("location_extra_info")
  private Object locationExtraInfo = null;

  @JsonProperty("start_time")
  private @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor startTime = null;

  @JsonProperty("end_time")
  private @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor endTime = null;

  @JsonProperty("audience")
  private List<Keyword> audience = null;

  @JsonProperty("data_source")
  private String dataSource = null;

  @JsonProperty("created_by")
  private String createdBy = null;

  @JsonProperty("last_modified_by")
  private String lastModifiedBy = null;

  @JsonProperty("publisher")
  private String publisher = null;

  public Event id(String id) {
    this.id = id;
    return this;
  }

   /**
   * consists of source prefix and source specific identifier. These should be URIs uniquely identifying the event, and preferably also well formed http-URLs pointing to more information about the event.
   * @return id
  **/
  @ApiModelProperty(value = "consists of source prefix and source specific identifier. These should be URIs uniquely identifying the event, and preferably also well formed http-URLs pointing to more information about the event.")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Event location(IdRef location) {
    this.location = location;
    return this;
  }

   /**
   * Get location
   * @return location
  **/
  @ApiModelProperty(required = true, value = "")
  public IdRef getLocation() {
    return location;
  }

  public void setLocation(IdRef location) {
    this.location = location;
  }

  public Event keywords(List<IdRef> keywords) {
    this.keywords = keywords;
    return this;
  }

  public Event addKeywordsItem(IdRef keywordsItem) {
    this.keywords.add(keywordsItem);
    return this;
  }

   /**
   * array of keyword uri references
   * @return keywords
  **/
  @ApiModelProperty(required = true, value = "array of keyword uri references")
  public List<IdRef> getKeywords() {
    return keywords;
  }

  public void setKeywords(List<IdRef> keywords) {
    this.keywords = keywords;
  }

  public Event inLanguage(List<Language> inLanguage) {
    this.inLanguage = inLanguage;
    return this;
  }

  public Event addInLanguageItem(Language inLanguageItem) {
    if (this.inLanguage == null) {
      this.inLanguage = new ArrayList<Language>();
    }
    this.inLanguage.add(inLanguageItem);
    return this;
  }

   /**
   * the languages spoken or supported at the event
   * @return inLanguage
  **/
  @ApiModelProperty(value = "the languages spoken or supported at the event")
  public List<Language> getInLanguage() {
    return inLanguage;
  }

  public void setInLanguage(List<Language> inLanguage) {
    this.inLanguage = inLanguage;
  }

  public Event superEvent(String superEvent) {
    this.superEvent = superEvent;
    return this;
  }

   /**
   * references the aggregate event containing this event
   * @return superEvent
  **/
  @ApiModelProperty(value = "references the aggregate event containing this event")
  public String getSuperEvent() {
    return superEvent;
  }

  public void setSuperEvent(String superEvent) {
    this.superEvent = superEvent;
  }

  public Event superEventType(String superEventType) {
    this.superEventType = superEventType;
    return this;
  }

   /**
   * If the event has sub_events, describes the type of the event. Current options are &#39;null&#39; and &#39;recurring&#39;, which means a repeating event.
   * @return superEventType
  **/
  @ApiModelProperty(value = "If the event has sub_events, describes the type of the event. Current options are 'null' and 'recurring', which means a repeating event.")
  public String getSuperEventType() {
    return superEventType;
  }

  public void setSuperEventType(String superEventType) {
    this.superEventType = superEventType;
  }

  public Event eventStatus(String eventStatus) {
    this.eventStatus = eventStatus;
    return this;
  }

   /**
   * As defined in schema.org/Event. Postponed events do not have a date set, rescheduled events have been moved to different date.
   * @return eventStatus
  **/
  @ApiModelProperty(value = "As defined in schema.org/Event. Postponed events do not have a date set, rescheduled events have been moved to different date.")
  public String getEventStatus() {
    return eventStatus;
  }

  public void setEventStatus(String eventStatus) {
    this.eventStatus = eventStatus;
  }

  public Event publicationStatus(String publicationStatus) {
    this.publicationStatus = publicationStatus;
    return this;
  }

   /**
   * Only available in POST/PUT. Specifies whether the event should be published in the API (&#39;public&#39;) or not (&#39;draft&#39;).
   * @return publicationStatus
  **/
  @ApiModelProperty(required = true, value = "Only available in POST/PUT. Specifies whether the event should be published in the API ('public') or not ('draft').")
  public String getPublicationStatus() {
    return publicationStatus;
  }

  public void setPublicationStatus(String publicationStatus) {
    this.publicationStatus = publicationStatus;
  }

  public Event externalLinks(List<Eventlink> externalLinks) {
    this.externalLinks = externalLinks;
    return this;
  }

  public Event addExternalLinksItem(Eventlink externalLinksItem) {
    if (this.externalLinks == null) {
      this.externalLinks = new ArrayList<Eventlink>();
    }
    this.externalLinks.add(externalLinksItem);
    return this;
  }

   /**
   * See external link definition
   * @return externalLinks
  **/
  @ApiModelProperty(value = "See external link definition")
  public List<Eventlink> getExternalLinks() {
    return externalLinks;
  }

  public void setExternalLinks(List<Eventlink> externalLinks) {
    this.externalLinks = externalLinks;
  }

  public Event offers(List<Offer> offers) {
    this.offers = offers;
    return this;
  }

  public Event addOffersItem(Offer offersItem) {
    if (this.offers == null) {
      this.offers = new ArrayList<Offer>();
    }
    this.offers.add(offersItem);
    return this;
  }

   /**
   * See offer definition
   * @return offers
  **/
  @ApiModelProperty(value = "See offer definition")
  public List<Offer> getOffers() {
    return offers;
  }

  public void setOffers(List<Offer> offers) {
    this.offers = offers;
  }

  public Event subEvents(List<String> subEvents) {
    this.subEvents = subEvents;
    return this;
  }

  public Event addSubEventsItem(String subEventsItem) {
    if (this.subEvents == null) {
      this.subEvents = new ArrayList<String>();
    }
    this.subEvents.add(subEventsItem);
    return this;
  }

   /**
   * for aggregate events this contains references to all sub events. Usually this means that the sub events are part of series. The field &#39;super_event_type&#39; tells the type of the aggregate event.
   * @return subEvents
  **/
  @ApiModelProperty(value = "for aggregate events this contains references to all sub events. Usually this means that the sub events are part of series. The field 'super_event_type' tells the type of the aggregate event.")
  public List<String> getSubEvents() {
    return subEvents;
  }

  public void setSubEvents(List<String> subEvents) {
    this.subEvents = subEvents;
  }

  public Event customData(String customData) {
    this.customData = customData;
    return this;
  }

   /**
   * Key value field for custom data. FIXME: is there 6Aika-wide use case for this?
   * @return customData
  **/
  @ApiModelProperty(value = "Key value field for custom data. FIXME: is there 6Aika-wide use case for this?")
  public String getCustomData() {
    return customData;
  }

  public void setCustomData(String customData) {
    this.customData = customData;
  }

  public Event name(EventName name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")
  public EventName getName() {
    return name;
  }

  public void setName(EventName name) {
    this.name = name;
  }

  public Event images(List<Image> images) {
    this.images = images;
    return this;
  }

  public Event addImagesItem(Image imagesItem) {
    if (this.images == null) {
      this.images = new ArrayList<Image>();
    }
    this.images.add(imagesItem);
    return this;
  }

   /**
   * Get images
   * @return images
  **/
  @ApiModelProperty(value = "")
  public List<Image> getImages() {
    return images;
  }

  public void setImages(List<Image> images) {
    this.images = images;
  }

  public Event createdTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor createdTime) {
    this.createdTime = createdTime;
    return this;
  }

   /**
   * Creation time for the event entry.
   * @return createdTime
  **/
  @ApiModelProperty(value = "Creation time for the event entry.")
  public @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor getCreatedTime() {
    return createdTime;
  }

  public void setCreatedTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor createdTime) {
    this.createdTime = createdTime;
  }

  public Event lastModifiedTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor lastModifiedTime) {
    this.lastModifiedTime = lastModifiedTime;
    return this;
  }

   /**
   * Time this event was modified in the datastore behind the API (not necessarily in the originating system)
   * @return lastModifiedTime
  **/
  @ApiModelProperty(value = "Time this event was modified in the datastore behind the API (not necessarily in the originating system)")
  public @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor getLastModifiedTime() {
    return lastModifiedTime;
  }

  public void setLastModifiedTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor lastModifiedTime) {
    this.lastModifiedTime = lastModifiedTime;
  }

  public Event infoUrl(EventInfoUrl infoUrl) {
    this.infoUrl = infoUrl;
    return this;
  }

   /**
   * Get infoUrl
   * @return infoUrl
  **/
  @ApiModelProperty(value = "")
  public EventInfoUrl getInfoUrl() {
    return infoUrl;
  }

  public void setInfoUrl(EventInfoUrl infoUrl) {
    this.infoUrl = infoUrl;
  }

  public Event description(Object description) {
    this.description = description;
    return this;
  }

   /**
   * Description for the event, several chapters(FIXME, verify)
   * @return description
  **/
  @ApiModelProperty(value = "Description for the event, several chapters(FIXME, verify)")
  public Object getDescription() {
    return description;
  }

  public void setDescription(Object description) {
    this.description = description;
  }

  public Event shortDescription(Object shortDescription) {
    this.shortDescription = shortDescription;
    return this;
  }

   /**
   * Short description for the event, recommended limit 140 characters
   * @return shortDescription
  **/
  @ApiModelProperty(value = "Short description for the event, recommended limit 140 characters")
  public Object getShortDescription() {
    return shortDescription;
  }

  public void setShortDescription(Object shortDescription) {
    this.shortDescription = shortDescription;
  }

  public Event context(String context) {
    this.context = context;
    return this;
  }

   /**
   * Get context
   * @return context
  **/
  @ApiModelProperty(value = "")
  public String getContext() {
    return context;
  }

  public void setContext(String context) {
    this.context = context;
  }

  public Event type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(value = "")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Event datePublished(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor datePublished) {
    this.datePublished = datePublished;
    return this;
  }

   /**
   * Date this event is free to be published
   * @return datePublished
  **/
  @ApiModelProperty(value = "Date this event is free to be published")
  public @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor getDatePublished() {
    return datePublished;
  }

  public void setDatePublished(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor datePublished) {
    this.datePublished = datePublished;
  }

  public Event provider(Object provider) {
    this.provider = provider;
    return this;
  }

   /**
   * organization responsible for the practical implementation of the event
   * @return provider
  **/
  @ApiModelProperty(value = "organization responsible for the practical implementation of the event")
  public Object getProvider() {
    return provider;
  }

  public void setProvider(Object provider) {
    this.provider = provider;
  }

  public Event locationExtraInfo(Object locationExtraInfo) {
    this.locationExtraInfo = locationExtraInfo;
    return this;
  }

   /**
   * Unstructured extra info about location (like \&quot;eastern door of railway station\&quot;)
   * @return locationExtraInfo
  **/
  @ApiModelProperty(value = "Unstructured extra info about location (like \"eastern door of railway station\")")
  public Object getLocationExtraInfo() {
    return locationExtraInfo;
  }

  public void setLocationExtraInfo(Object locationExtraInfo) {
    this.locationExtraInfo = locationExtraInfo;
  }

  public Event startTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor startTime) {
    this.startTime = startTime;
    return this;
  }

   /**
   * Time the event will start
   * @return startTime
  **/
  @ApiModelProperty(required = true, value = "Time the event will start")
  public @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor getStartTime() {
    return startTime;
  }

  public void setStartTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor startTime) {
    this.startTime = startTime;
  }

  public Event endTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor endTime) {
    this.endTime = endTime;
    return this;
  }

   /**
   * Time the event will end
   * @return endTime
  **/
  @ApiModelProperty(value = "Time the event will end")
  public @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor getEndTime() {
    return endTime;
  }

  public void setEndTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor endTime) {
    this.endTime = endTime;
  }

  public Event audience(List<Keyword> audience) {
    this.audience = audience;
    return this;
  }

  public Event addAudienceItem(Keyword audienceItem) {
    if (this.audience == null) {
      this.audience = new ArrayList<Keyword>();
    }
    this.audience.add(audienceItem);
    return this;
  }

   /**
   * Get audience
   * @return audience
  **/
  @ApiModelProperty(value = "")
  public List<Keyword> getAudience() {
    return audience;
  }

  public void setAudience(List<Keyword> audience) {
    this.audience = audience;
  }

  public Event dataSource(String dataSource) {
    this.dataSource = dataSource;
    return this;
  }

   /**
   * Unique identifier (URI)for the system from which this event came from, preferably URL with more information about the system and its policies
   * @return dataSource
  **/
  @ApiModelProperty(value = "Unique identifier (URI)for the system from which this event came from, preferably URL with more information about the system and its policies")
  public String getDataSource() {
    return dataSource;
  }

  public void setDataSource(String dataSource) {
    this.dataSource = dataSource;
  }

  public Event createdBy(String createdBy) {
    this.createdBy = createdBy;
    return this;
  }

   /**
   * FIXME(verify) Which API user created this keyword
   * @return createdBy
  **/
  @ApiModelProperty(value = "FIXME(verify) Which API user created this keyword")
  public String getCreatedBy() {
    return createdBy;
  }

  public void setCreatedBy(String createdBy) {
    this.createdBy = createdBy;
  }

  public Event lastModifiedBy(String lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
    return this;
  }

   /**
   * FIXME(verify) Which API user most recently edited this keyword
   * @return lastModifiedBy
  **/
  @ApiModelProperty(value = "FIXME(verify) Which API user most recently edited this keyword")
  public String getLastModifiedBy() {
    return lastModifiedBy;
  }

  public void setLastModifiedBy(String lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
  }

  public Event publisher(String publisher) {
    this.publisher = publisher;
    return this;
  }

   /**
   * Organization responsible for this event record.
   * @return publisher
  **/
  @ApiModelProperty(value = "Organization responsible for this event record.")
  public String getPublisher() {
    return publisher;
  }

  public void setPublisher(String publisher) {
    this.publisher = publisher;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Event event = (Event) o;
    return Objects.equals(this.id, event.id) &&
        Objects.equals(this.location, event.location) &&
        Objects.equals(this.keywords, event.keywords) &&
        Objects.equals(this.inLanguage, event.inLanguage) &&
        Objects.equals(this.superEvent, event.superEvent) &&
        Objects.equals(this.superEventType, event.superEventType) &&
        Objects.equals(this.eventStatus, event.eventStatus) &&
        Objects.equals(this.publicationStatus, event.publicationStatus) &&
        Objects.equals(this.externalLinks, event.externalLinks) &&
        Objects.equals(this.offers, event.offers) &&
        Objects.equals(this.subEvents, event.subEvents) &&
        Objects.equals(this.customData, event.customData) &&
        Objects.equals(this.name, event.name) &&
        Objects.equals(this.images, event.images) &&
        Objects.equals(this.createdTime, event.createdTime) &&
        Objects.equals(this.lastModifiedTime, event.lastModifiedTime) &&
        Objects.equals(this.infoUrl, event.infoUrl) &&
        Objects.equals(this.description, event.description) &&
        Objects.equals(this.shortDescription, event.shortDescription) &&
        Objects.equals(this.context, event.context) &&
        Objects.equals(this.type, event.type) &&
        Objects.equals(this.datePublished, event.datePublished) &&
        Objects.equals(this.provider, event.provider) &&
        Objects.equals(this.locationExtraInfo, event.locationExtraInfo) &&
        Objects.equals(this.startTime, event.startTime) &&
        Objects.equals(this.endTime, event.endTime) &&
        Objects.equals(this.audience, event.audience) &&
        Objects.equals(this.dataSource, event.dataSource) &&
        Objects.equals(this.createdBy, event.createdBy) &&
        Objects.equals(this.lastModifiedBy, event.lastModifiedBy) &&
        Objects.equals(this.publisher, event.publisher);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, location, keywords, inLanguage, superEvent, superEventType, eventStatus, publicationStatus, externalLinks, offers, subEvents, customData, name, images, createdTime, lastModifiedTime, infoUrl, description, shortDescription, context, type, datePublished, provider, locationExtraInfo, startTime, endTime, audience, dataSource, createdBy, lastModifiedBy, publisher);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Event {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    location: ").append(toIndentedString(location)).append("\n");
    sb.append("    keywords: ").append(toIndentedString(keywords)).append("\n");
    sb.append("    inLanguage: ").append(toIndentedString(inLanguage)).append("\n");
    sb.append("    superEvent: ").append(toIndentedString(superEvent)).append("\n");
    sb.append("    superEventType: ").append(toIndentedString(superEventType)).append("\n");
    sb.append("    eventStatus: ").append(toIndentedString(eventStatus)).append("\n");
    sb.append("    publicationStatus: ").append(toIndentedString(publicationStatus)).append("\n");
    sb.append("    externalLinks: ").append(toIndentedString(externalLinks)).append("\n");
    sb.append("    offers: ").append(toIndentedString(offers)).append("\n");
    sb.append("    subEvents: ").append(toIndentedString(subEvents)).append("\n");
    sb.append("    customData: ").append(toIndentedString(customData)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    images: ").append(toIndentedString(images)).append("\n");
    sb.append("    createdTime: ").append(toIndentedString(createdTime)).append("\n");
    sb.append("    lastModifiedTime: ").append(toIndentedString(lastModifiedTime)).append("\n");
    sb.append("    infoUrl: ").append(toIndentedString(infoUrl)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    shortDescription: ").append(toIndentedString(shortDescription)).append("\n");
    sb.append("    context: ").append(toIndentedString(context)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    datePublished: ").append(toIndentedString(datePublished)).append("\n");
    sb.append("    provider: ").append(toIndentedString(provider)).append("\n");
    sb.append("    locationExtraInfo: ").append(toIndentedString(locationExtraInfo)).append("\n");
    sb.append("    startTime: ").append(toIndentedString(startTime)).append("\n");
    sb.append("    endTime: ").append(toIndentedString(endTime)).append("\n");
    sb.append("    audience: ").append(toIndentedString(audience)).append("\n");
    sb.append("    dataSource: ").append(toIndentedString(dataSource)).append("\n");
    sb.append("    createdBy: ").append(toIndentedString(createdBy)).append("\n");
    sb.append("    lastModifiedBy: ").append(toIndentedString(lastModifiedBy)).append("\n");
    sb.append("    publisher: ").append(toIndentedString(publisher)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
  
}

