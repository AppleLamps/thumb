---
url: "https://docs.fal.ai/platform-apis/v1/compute/instances/list"
title: "List Compute Instances - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/v1/compute/instances/list#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

API Reference

List Compute Instances

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

List Compute Instances

cURL

Copy

Ask AI

```
curl --request GET \
  --url https://api.fal.ai/v1/compute/instances \
  --header 'Authorization: Key <api-key>'
```

200

401

403

429

500

Copy

Ask AI

```
{
  "instances": [\
    {\
      "id": "inst_abc123xyz",\
      "instance_type": "gpu_1x_h100_sxm5",\
      "region": "us-west",\
      "sector": "sector_1",\
      "ip": "203.0.113.42",\
      "status": "ready",\
      "creator_user_nickname": "developer"\
    },\
    {\
      "id": "inst_def456uvw",\
      "instance_type": "gpu_8x_h100_sxm5",\
      "region": "us-east",\
      "status": "provisioning",\
      "creator_user_nickname": "developer"\
    }\
  ],
  "next_cursor": null,
  "has_more": false
}
```

GET

/

compute

/

instances

Try it

List Compute Instances

cURL

Copy

Ask AI

```
curl --request GET \
  --url https://api.fal.ai/v1/compute/instances \
  --header 'Authorization: Key <api-key>'
```

200

401

403

429

500

Copy

Ask AI

```
{
  "instances": [\
    {\
      "id": "inst_abc123xyz",\
      "instance_type": "gpu_1x_h100_sxm5",\
      "region": "us-west",\
      "sector": "sector_1",\
      "ip": "203.0.113.42",\
      "status": "ready",\
      "creator_user_nickname": "developer"\
    },\
    {\
      "id": "inst_def456uvw",\
      "instance_type": "gpu_8x_h100_sxm5",\
      "region": "us-east",\
      "status": "provisioning",\
      "creator_user_nickname": "developer"\
    }\
  ],
  "next_cursor": null,
  "has_more": false
}
```

#### Authorizations

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/list#authorization-authorization)

Authorization

string

header

required

Admin API key must be prefixed with "Key ", e.g. Authorization: Key YOUR\_ADMIN\_API\_KEY

#### Query Parameters

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/list#parameter-limit)

limit

integer

Maximum number of items to return. Actual maximum depends on query type and expansion parameters.

Required range: `x >= 1`

Example:

`50`

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/list#parameter-cursor)

cursor

string

Pagination cursor from previous response. Encodes the page number.

Example:

`"Mg=="`

#### Response

200

application/json

Successfully retrieved compute instances

Response containing a list of compute instances with pagination support

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/list#response-next-cursor-one-of-0)

next\_cursor

string \| null

required

Cursor for the next page of results, null if no more pages

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/list#response-has-more)

has\_more

boolean

required

Boolean indicating if more results are available (convenience field derived from next\_cursor)

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/list#response-instances)

instances

object\[\]

required

Array of compute instances belonging to the authenticated user

Showchild attributes

Was this page helpful?

YesNo

[Platform APIs for Compute\\
\\
Previous](https://docs.fal.ai/platform-apis/for-compute) [Get Compute Instance\\
\\
Next](https://docs.fal.ai/platform-apis/v1/compute/instances/get)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)