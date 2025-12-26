---
url: "https://docs.fal.ai/platform-apis/v1/models"
title: "Model search - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/v1/models#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

API Reference

Model search

[![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg)Home](https://docs.fal.ai/) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg)Model APIs](https://docs.fal.ai/model-apis) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg)Serverless](https://docs.fal.ai/serverless) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg)Compute](https://docs.fal.ai/compute) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg)Platform APIs](https://docs.fal.ai/platform-apis) [Changelog](https://docs.fal.ai/changelog)

- [Status](https://status.fal.ai/)
- [Community](https://discord.gg/fal-ai)
- [Blog](https://blog.fal.ai/)

- [Introduction](https://docs.fal.ai/platform-apis)

- [Authentication](https://docs.fal.ai/platform-apis/authentication)

- [OpenAPI Schema](https://docs.fal.ai/platform-apis/openapi-schema)

##### API Reference

- [Platform APIs for Models](https://docs.fal.ai/platform-apis/for-models)
- [GET\\
\\
Model search](https://docs.fal.ai/platform-apis/v1/models)
- [GET\\
\\
Pricing](https://docs.fal.ai/platform-apis/v1/models/pricing)
- [POST\\
\\
Estimate cost](https://docs.fal.ai/platform-apis/v1/models/pricing/estimate)
- [GET\\
\\
Usage](https://docs.fal.ai/platform-apis/v1/models/usage)
- [GET\\
\\
Analytics](https://docs.fal.ai/platform-apis/v1/models/analytics)
- [DEL\\
\\
Delete request payloads](https://docs.fal.ai/platform-apis/v1/models/requests/payloads)
- [Platform APIs for Serverless](https://docs.fal.ai/platform-apis/for-serverless)
- [GET\\
\\
Queue Size](https://docs.fal.ai/platform-apis/v1/serverless/apps/queue)
- [GET\\
\\
Metrics](https://docs.fal.ai/platform-apis/v1/serverless/metrics)
- [GET\\
\\
List files (root)](https://docs.fal.ai/platform-apis/v1/serverless/files/list)
- [GET\\
\\
List files (directory)](https://docs.fal.ai/platform-apis/v1/serverless/files/list/%7Bdir%7D)
- [GET\\
\\
Download file](https://docs.fal.ai/platform-apis/v1/serverless/files/file/%7Bfile%7D)
- [POST\\
\\
Upload file from URL](https://docs.fal.ai/platform-apis/v1/serverless/files/file/url/%7Bfile%7D)
- [POST\\
\\
Upload local file (multipart/form-data)](https://docs.fal.ai/platform-apis/v1/serverless/files/file/local/%7Btarget_path%7D)
- [POST\\
\\
Logs history (paginated)](https://docs.fal.ai/platform-apis/v1/serverless/logs/history)
- [POST\\
\\
Logs stream (SSE)](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream)
- [Platform APIs for Compute](https://docs.fal.ai/platform-apis/for-compute)
- [GET\\
\\
List Compute Instances](https://docs.fal.ai/platform-apis/v1/compute/instances/list)
- [GET\\
\\
Get Compute Instance](https://docs.fal.ai/platform-apis/v1/compute/instances/get)
- [POST\\
\\
Create Compute Instance](https://docs.fal.ai/platform-apis/v1/compute/instances/create)
- [DEL\\
\\
Delete Compute Instance](https://docs.fal.ai/platform-apis/v1/compute/instances/delete)

Model search

cURL

Copy

Ask AI

```
curl --request GET \
  --url https://api.fal.ai/v1/models \
  --header 'Authorization: Key <api-key>'
```

200

400

404

429

500

Copy

Ask AI

```
{
  "models": [\
    {\
      "endpoint_id": "fal-ai/flux/dev",\
      "metadata": {\
        "display_name": "FLUX.1 [dev]",\
        "category": "text-to-image",\
        "description": "Fast text-to-image generation",\
        "status": "active",\
        "tags": [\
          "fast",\
          "pro"\
        ],\
        "updated_at": "2025-01-15T12:00:00Z",\
        "is_favorited": false,\
        "thumbnail_url": "https://fal.media/files/example.jpg",\
        "model_url": "https://fal.run/fal-ai/flux/dev",\
        "date": "2024-08-01T00:00:00Z",\
        "highlighted": true,\
        "pinned": false\
      }\
    }\
  ],
  "next_cursor": null,
  "has_more": false
}
```

GET

/

models

Try it

Model search

cURL

Copy

Ask AI

```
curl --request GET \
  --url https://api.fal.ai/v1/models \
  --header 'Authorization: Key <api-key>'
```

200

400

404

429

500

Copy

Ask AI

```
{
  "models": [\
    {\
      "endpoint_id": "fal-ai/flux/dev",\
      "metadata": {\
        "display_name": "FLUX.1 [dev]",\
        "category": "text-to-image",\
        "description": "Fast text-to-image generation",\
        "status": "active",\
        "tags": [\
          "fast",\
          "pro"\
        ],\
        "updated_at": "2025-01-15T12:00:00Z",\
        "is_favorited": false,\
        "thumbnail_url": "https://fal.media/files/example.jpg",\
        "model_url": "https://fal.run/fal-ai/flux/dev",\
        "date": "2024-08-01T00:00:00Z",\
        "highlighted": true,\
        "pinned": false\
      }\
    }\
  ],
  "next_cursor": null,
  "has_more": false
}
```

#### Authorizations

[​](https://docs.fal.ai/platform-apis/v1/models#authorization-authorization)

Authorization

string

header

required

API key must be prefixed with "Key ", e.g. Authorization: Key YOUR\_API\_KEY

#### Query Parameters

[​](https://docs.fal.ai/platform-apis/v1/models#parameter-limit)

limit

integer

Maximum number of items to return. Actual maximum depends on query type and expansion parameters.

Required range: `x >= 1`

Example:

`50`

[​](https://docs.fal.ai/platform-apis/v1/models#parameter-cursor)

cursor

string

Pagination cursor from previous response. Encodes the page number.

Example:

`"Mg=="`

[​](https://docs.fal.ai/platform-apis/v1/models#parameter-one-of-0)

endpoint\_id

stringstring\[\]

Endpoint ID(s) to retrieve (e.g., 'fal-ai/flux/dev'). Can be a single value or multiple values (1-50 models). When combined with search params, narrows results to these IDs. Use array syntax: ?endpoint\_id=model1&endpoint\_id=model2

Example:

```
["fal-ai/flux/dev", "fal-ai/flux-pro"]
```

[​](https://docs.fal.ai/platform-apis/v1/models#parameter-q)

q

string

Free-text search query to filter models by name, description, or category

Example:

`"text to image"`

[​](https://docs.fal.ai/platform-apis/v1/models#parameter-category)

category

string

Filter by category (e.g., 'text-to-image', 'image-to-video', 'training')

Example:

`"text-to-image"`

[​](https://docs.fal.ai/platform-apis/v1/models#parameter-status)

status

enum<string>

Filter models by status - omit to include all statuses

Available options:

`active`,

`deprecated`

Example:

`"active"`

[​](https://docs.fal.ai/platform-apis/v1/models#parameter-one-of-0)

expand

stringstring\[\]

Fields to expand in the response. Supported values: 'openapi-3.0' (includes full OpenAPI 3.0 schema in 'openapi' field)

Example:

```
["openapi-3.0"]
```

#### Response

200

application/json

Successfully retrieved model endpoints

Response containing model data with pagination support

[​](https://docs.fal.ai/platform-apis/v1/models#response-models)

models

object\[\]

required

Array of model information

Showchild attributes

[​](https://docs.fal.ai/platform-apis/v1/models#response-has-more)

has\_more

boolean

required

Boolean indicating if more results are available (convenience field derived from next\_cursor)

[​](https://docs.fal.ai/platform-apis/v1/models#response-next-cursor-one-of-0)

next\_cursor

string \| null

Cursor for the next page of results, null if no more pages

Was this page helpful?

YesNo

[Platform APIs for Models\\
\\
Previous](https://docs.fal.ai/platform-apis/for-models) [Pricing\\
\\
Next](https://docs.fal.ai/platform-apis/v1/models/pricing)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)