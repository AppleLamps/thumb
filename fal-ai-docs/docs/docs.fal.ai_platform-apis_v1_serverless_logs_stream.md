---
url: "https://docs.fal.ai/platform-apis/v1/serverless/logs/stream"
title: "Logs stream (SSE) - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

API Reference

Logs stream (SSE)

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

Logs stream (SSE)

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.fal.ai/v1/serverless/logs/stream \
  --header 'Authorization: Key <api-key>' \
  --header 'Content-Type: application/json' \
  --data '
[\
  {\
    "key": "fal_job_id",\
    "value": "job_123"\
  }\
]
'
```

401

429

500

Copy

Ask AI

```
{
  "error": {
    "type": "authorization_error",
    "message": "Authentication required"
  }
}
```

POST

/

serverless

/

logs

/

stream

Try it

Logs stream (SSE)

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.fal.ai/v1/serverless/logs/stream \
  --header 'Authorization: Key <api-key>' \
  --header 'Content-Type: application/json' \
  --data '
[\
  {\
    "key": "fal_job_id",\
    "value": "job_123"\
  }\
]
'
```

401

429

500

Copy

Ask AI

```
{
  "error": {
    "type": "authorization_error",
    "message": "Authentication required"
  }
}
```

#### Authorizations

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#authorization-authorization)

Authorization

string

header

required

API key must be prefixed with "Key ", e.g. Authorization: Key YOUR\_API\_KEY

#### Query Parameters

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#parameter-one-of-0)

start

string<date-time>string

Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago.

Example:

`"2025-01-01T00:00:00Z"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#parameter-one-of-0)

end

string<date-time>string

End date in ISO8601 format (e.g., '2025-01-31T23:59:59Z' or '2025-01-31'). Defaults to current time.

Example:

`"2025-01-31T23:59:59Z"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#parameter-app-id)

app\_id

string\[\]

Filter by app IDs

Example:

```
["my-app"]
```

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#parameter-revision)

revision

string

Filter by revision

Example:

`"rev_abc123"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#parameter-run-source)

run\_source

enum<string>

Filter by run source

Available options:

`grpc-run`,

`grpc-register`,

`gateway`,

`cron`

Example:

`"grpc-run"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#parameter-one-of-0)

traceback

boolean \| null

default:false

Include tracebacks

Example:

`false`

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#parameter-search)

search

string

Free-text search

Example:

`"error"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#parameter-level)

level

string

Minimum log level

Example:

`"error"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#parameter-job-id)

job\_id

string

Filter by job id

Example:

`"job_123"`

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#parameter-request-id)

request\_id

string

Filter by request id

Example:

`"req_abc123"`

#### Body

application/json

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#body-items-key)

key

string

required

Label key to filter

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#body-items-value-one-of-0)

value

stringstring\[\]

required

Filter value

[​](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream#body-items-condition-type)

condition\_type

enum<string>

Condition type for label filtering

Available options:

`equals`,

`in`,

`not_equals`,

`not_in`

#### Response

200

text/event-stream

SSE stream started

Was this page helpful?

YesNo

[Logs history (paginated)\\
\\
Previous](https://docs.fal.ai/platform-apis/v1/serverless/logs/history) [Platform APIs for Compute\\
\\
Next](https://docs.fal.ai/platform-apis/for-compute)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)