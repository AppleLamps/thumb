---
url: "https://docs.fal.ai/platform-apis/v1/models/requests/payloads"
title: "Delete request payloads - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/v1/models/requests/payloads#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

API Reference

Delete request payloads

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

Delete request payloads

cURL

Copy

Ask AI

```
curl --request DELETE \
  --url https://api.fal.ai/v1/models/requests/{request_id}/payloads \
  --header 'Authorization: Key <api-key>'
```

200

400

401

403

404

429

500

Copy

Ask AI

```
{
  "cdn_delete_results": [\
    {\
      "link": "https://v3.fal.media/files/abc123/output.png",\
      "exception": null\
    },\
    {\
      "link": "https://v3.fal.media/files/def456/output.mp4",\
      "exception": null\
    }\
  ]
}
```

DELETE

/

models

/

requests

/

{request\_id}

/

payloads

Try it

Delete request payloads

cURL

Copy

Ask AI

```
curl --request DELETE \
  --url https://api.fal.ai/v1/models/requests/{request_id}/payloads \
  --header 'Authorization: Key <api-key>'
```

200

400

401

403

404

429

500

Copy

Ask AI

```
{
  "cdn_delete_results": [\
    {\
      "link": "https://v3.fal.media/files/abc123/output.png",\
      "exception": null\
    },\
    {\
      "link": "https://v3.fal.media/files/def456/output.mp4",\
      "exception": null\
    }\
  ]
}
```

#### Authorizations

[​](https://docs.fal.ai/platform-apis/v1/models/requests/payloads#authorization-authorization)

Authorization

string

header

required

Admin API key must be prefixed with "Key ", e.g. Authorization: Key YOUR\_ADMIN\_API\_KEY

#### Headers

[​](https://docs.fal.ai/platform-apis/v1/models/requests/payloads#parameter-idempotency-key)

Idempotency-Key

string

Optional idempotency key for safe request retries

Example:

`"550e8400-e29b-41d4-a716-446655440000"`

#### Path Parameters

[​](https://docs.fal.ai/platform-apis/v1/models/requests/payloads#parameter-request-id)

request\_id

string<uuid>

required

Unique identifier for the request (UUID format)

Example:

`"a1b2c3d4-e5f6-7890-abcd-ef1234567890"`

#### Response

200

application/json

Request payloads deleted successfully

Response containing the results of deleting request payloads and CDN output files

[​](https://docs.fal.ai/platform-apis/v1/models/requests/payloads#response-cdn-delete-results)

cdn\_delete\_results

object\[\]

required

Array of deletion results for each CDN file associated with the request output

Showchild attributes

Was this page helpful?

YesNo

[Analytics\\
\\
Previous](https://docs.fal.ai/platform-apis/v1/models/analytics) [Platform APIs for Serverless\\
\\
Next](https://docs.fal.ai/platform-apis/for-serverless)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)