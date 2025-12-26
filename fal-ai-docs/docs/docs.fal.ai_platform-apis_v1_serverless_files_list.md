---
url: "https://docs.fal.ai/platform-apis/v1/serverless/files/list"
title: "List files (root) - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/v1/serverless/files/list#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

API Reference

List files (root)

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

List files (root)

cURL

Copy

Ask AI

```
curl --request GET \
  --url https://api.fal.ai/v1/serverless/files/list \
  --header 'Authorization: Key <api-key>'
```

200

401

429

500

Copy

Ask AI

```
[\
  {\
    "path": "datasets",\
    "name": "datasets",\
    "created_time": "2024-11-08T00:00:00.000Z",\
    "updated_time": "2024-11-09T00:00:00.000Z",\
    "is_file": false,\
    "size": 0\
  }\
]
```

GET

/

serverless

/

files

/

list

Try it

List files (root)

cURL

Copy

Ask AI

```
curl --request GET \
  --url https://api.fal.ai/v1/serverless/files/list \
  --header 'Authorization: Key <api-key>'
```

200

401

429

500

Copy

Ask AI

```
[\
  {\
    "path": "datasets",\
    "name": "datasets",\
    "created_time": "2024-11-08T00:00:00.000Z",\
    "updated_time": "2024-11-09T00:00:00.000Z",\
    "is_file": false,\
    "size": 0\
  }\
]
```

#### Authorizations

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/list#authorization-authorization)

Authorization

string

header

required

API key must be prefixed with "Key ", e.g. Authorization: Key YOUR\_API\_KEY

#### Response

200

application/json

Successfully listed files

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/list#response-items-path)

path

string

required

Full file or folder path

Example:

`"datasets/images/cat.jpg"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/list#response-items-name)

name

string

required

Base name of the file or folder

Example:

`"cat.jpg"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/list#response-items-created-time)

created\_time

string<date-time>

required

Creation timestamp (UTC ISO 8601)

Example:

`"2024-11-08T00:00:00.000Z"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/list#response-items-updated-time)

updated\_time

string<date-time>

required

Last update timestamp (UTC ISO 8601)

Example:

`"2024-11-09T00:00:00.000Z"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/list#response-items-is-file)

is\_file

boolean

required

True if this item is a file, false if it is a folder

Example:

`true`

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/list#response-items-size)

size

number

required

File size in bytes (0 for folders)

Example:

`1250023`

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/list#response-items-checksum-sha256)

checksum\_sha256

string

Optional SHA256 checksum

Example:

`"b1946ac92492d2347c6235b4d2611184d5c3f1f0f44aa7b27d3b1d5b0f5a6a11"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/files/list#response-items-checksum-md5)

checksum\_md5

string

Optional MD5 checksum

Example:

`"9e107d9d372bb6826bd81d3542a419d6"`

Was this page helpful?

YesNo

[Metrics\\
\\
Previous](https://docs.fal.ai/platform-apis/v1/serverless/metrics) [List files (directory)\\
\\
Next](https://docs.fal.ai/platform-apis/v1/serverless/files/list/%7Bdir%7D)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)