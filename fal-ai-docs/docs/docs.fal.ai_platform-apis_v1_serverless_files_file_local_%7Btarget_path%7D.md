---
url: "https://docs.fal.ai/platform-apis/v1/serverless/files/file/local/%7Btarget_path%7D"
title: "Upload local file (multipart/form-data) - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/v1/serverless/files/file/local/%7Btarget_path%7D#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

API Reference

Upload local file (multipart/form-data)

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

Upload local file (multipart/form-data)

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.fal.ai/v1/serverless/files/file/local/{target_path} \
  --header 'Authorization: Key <api-key>' \
  --header 'Content-Type: multipart/form-data' \
  --form 'file_upload=<unknown>'
```

200

400

401

429

500

Copy

Ask AI

```
true
```

POST

/

serverless

/

files

/

file

/

local

/

{target\_path}

Try it

Upload local file (multipart/form-data)

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.fal.ai/v1/serverless/files/file/local/{target_path} \
  --header 'Authorization: Key <api-key>' \
  --header 'Content-Type: multipart/form-data' \
  --form 'file_upload=<unknown>'
```

200

400

401

429

500

Copy

Ask AI

```
true
```

#### Authorizations

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/file/local/%7Btarget_path%7D#authorization-authorization)

Authorization

string

header

required

API key must be prefixed with "Key ", e.g. Authorization: Key YOUR\_API\_KEY

#### Path Parameters

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/file/local/%7Btarget_path%7D#parameter-target-path)

target\_path

string

required

Target path (including filename)

Example:

`"datasets/images/cat.jpg"`

#### Query Parameters

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/file/local/%7Btarget_path%7D#parameter-one-of-0)

unzip

boolean \| null

default:false

If true and the uploaded file is a ZIP, it will be extracted

Example:

`false`

#### Body

multipart/form-data

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/file/local/%7Btarget_path%7D#body-file-upload)

file\_upload

any

Binary file content

#### Response

200

application/json

Upload completed

Indicates whether the operation was successful

Was this page helpful?

YesNo

[Upload file from URL\\
\\
Previous](https://docs.fal.ai/platform-apis/v1/serverless/files/file/url/%7Bfile%7D) [Logs history (paginated)\\
\\
Next](https://docs.fal.ai/platform-apis/v1/serverless/logs/history)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)