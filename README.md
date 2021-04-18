# jsonstorage

Store and retrieve your JSON data for free using simple GET and POST requests [https://www.jsonstorage.net/](https://www.jsonstorage.net). Based on .NET Core and Azure Cosmos DB. Source code of the initial version at /legacy branch.

## Api

Public API does not require authentication (as long as the item was intially created using unauthenticated request).

*Get JSON*:
GET https://api.jsonstorage.net/v1/json/(id)

*Create JSON*:
POST https://api.jsonstorage.net/v1/json

*Update JSON*:
PUT https://api.jsonstorage.net/json/(id)

Entities created from the App always require API key (for editing).

## App

The app is a UI for managing JSON snippets. It provides a few extra features in addition to the public API

![App UI](/docs/images/app.png)

### Items

Item is a piece of content you want to serve. Each item created from the app is tied to your user profile and cannot be edited without the API key.

### Api Keys

Api Key allows editing the content from the API. There are two types of API keys: normal and read-only.

*Update JSON* (authenticated)
[https://api.jsonstorage.net/v1/json/%item_id%?apiKey=%api_key%](https://api.jsonstorage.net/v1/json/%item_id%?apiKey=%api_key%)

### Intents

Intents allow to personalize served content based on one or many of the following:

* Query String
* Request Header
* IP Address
* (more to be added)

You create intents first, and then assign intents and desired outputs to one of the items. The rules are executed top to bottom, the last rule (if applicable) will override the previous one.

![App UI](/docs/images/virtual.png)

## Sample app that uses JsonStorage

* [todomvc-angular2-jsonstorage](https://github.com/adoprog/todomvc-angular2-jsonstorage)

![JsonStorage](https://2.bp.blogspot.com/-iMkQcOCzFcs/WJI4rcHrLyI/AAAAAAAAEM4/Hcggu0JjauEY7NUpqioZIofZFyyuX1ffwCLcB/s1600/Plan.png)

## Related blog posts

* [Build your startup on Azure. Part 1: JsonStorage.net](http://devopssnippets.blogspot.com/2017/03/build-your-startup-on-azure-part-1.html)
* [Build your startup on Azure. Part 2: Creating and publishing the project](http://devopssnippets.blogspot.com/2017/04/build-your-startup-on-azure-part-2.html)
