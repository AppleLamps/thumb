---
url: "https://docs.fal.ai/platform-apis/v1/models/pricing"
title: "Pricing - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/v1/models/pricing#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

API Reference

Pricing

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

Pricing

cURL

Copy

Ask AI

```
curl --request GET \
  --url https://api.fal.ai/v1/models/pricing \
  --header 'Authorization: Key <api-key>'
```

200

400

401

404

429

Copy

Ask AI

```
{
  "prices": [\
    {\
      "endpoint_id": "fal-ai/flux/dev",\
      "unit_price": 0.025,\
      "unit": "image",\
      "currency": "USD"\
    }\
  ],
  "next_cursor": null,
  "has_more": false
}
```

GET

/

models

/

pricing

Try it

Pricing

cURL

Copy

Ask AI

```
curl --request GET \
  --url https://api.fal.ai/v1/models/pricing \
  --header 'Authorization: Key <api-key>'
```

200

400

401

404

429

Copy

Ask AI

```
{
  "prices": [\
    {\
      "endpoint_id": "fal-ai/flux/dev",\
      "unit_price": 0.025,\
      "unit": "image",\
      "currency": "USD"\
    }\
  ],
  "next_cursor": null,
  "has_more": false
}
```

#### Authorizations

[​](https://docs.fal.ai/platform-apis/v1/models/pricing#authorization-authorization)

Authorization

string

header

required

API key must be prefixed with "Key ", e.g. Authorization: Key YOUR\_API\_KEY

#### Query Parameters

[​](https://docs.fal.ai/platform-apis/v1/models/pricing#parameter-one-of-0)

endpoint\_id

stringstring\[\]

required

Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint\_id=model1,model2 or array syntax: ?endpoint\_id=model1&endpoint\_id=model2

Example:

```
["fal-ai/flux/dev"]
```

#### Response

200

application/json

Pricing information retrieved successfully

Response containing pricing information for requested endpoints

[​](https://docs.fal.ai/platform-apis/v1/models/pricing#response-next-cursor-one-of-0)

next\_cursor

string \| null

required

Cursor for the next page of results, null if no more pages

[​](https://docs.fal.ai/platform-apis/v1/models/pricing#response-has-more)

has\_more

boolean

required

Boolean indicating if more results are available (convenience field derived from next\_cursor)

[​](https://docs.fal.ai/platform-apis/v1/models/pricing#response-prices)

prices

object\[\]

required

Pricing information for requested endpoints

Showchild attributes

Was this page helpful?

YesNo

[Model search\\
\\
Previous](https://docs.fal.ai/platform-apis/v1/models) [Estimate cost\\
\\
Next](https://docs.fal.ai/platform-apis/v1/models/pricing/estimate)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)