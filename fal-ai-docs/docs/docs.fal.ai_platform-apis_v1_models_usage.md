---
url: "https://docs.fal.ai/platform-apis/v1/models/usage"
title: "Usage - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/v1/models/usage#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

API Reference

Usage

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

Usage

cURL

Copy

Ask AI

```
curl --request GET \
  --url 'https://api.fal.ai/v1/models/usage?timezone=UTC&bound_to_timeframe=true' \
  --header 'Authorization: Key <api-key>'
```

200

400

401

403

404

429

Copy

Ask AI

```
{
  "time_series": [\
    {\
      "bucket": "2025-01-15T00:00:00-05:00",\
      "results": [\
        {\
          "endpoint_id": "fal-ai/flux/dev",\
          "unit": "image",\
          "quantity": 4,\
          "unit_price": 0.1,\
          "cost": 0.4,\
          "currency": "USD",\
          "auth_method": "Production Key"\
        }\
      ]\
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

usage

Try it

Usage

cURL

Copy

Ask AI

```
curl --request GET \
  --url 'https://api.fal.ai/v1/models/usage?timezone=UTC&bound_to_timeframe=true' \
  --header 'Authorization: Key <api-key>'
```

200

400

401

403

404

429

Copy

Ask AI

```
{
  "time_series": [\
    {\
      "bucket": "2025-01-15T00:00:00-05:00",\
      "results": [\
        {\
          "endpoint_id": "fal-ai/flux/dev",\
          "unit": "image",\
          "quantity": 4,\
          "unit_price": 0.1,\
          "cost": 0.4,\
          "currency": "USD",\
          "auth_method": "Production Key"\
        }\
      ]\
    }\
  ],
  "next_cursor": null,
  "has_more": false
}
```

#### Authorizations

[​](https://docs.fal.ai/platform-apis/v1/models/usage#authorization-authorization)

Authorization

string

header

required

Admin API key must be prefixed with "Key ", e.g. Authorization: Key YOUR\_ADMIN\_API\_KEY

#### Query Parameters

[​](https://docs.fal.ai/platform-apis/v1/models/usage#parameter-limit)

limit

integer

Maximum number of items to return. Actual maximum depends on query type and expansion parameters.

Required range: `x >= 1`

Example:

`50`

[​](https://docs.fal.ai/platform-apis/v1/models/usage#parameter-cursor)

cursor

string

Pagination cursor from previous response. Encodes the page number.

Example:

`"Mg=="`

[​](https://docs.fal.ai/platform-apis/v1/models/usage#parameter-one-of-0)

start

string<date-time>string

Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago.

Example:

`"2025-01-01T00:00:00Z"`

[​](https://docs.fal.ai/platform-apis/v1/models/usage#parameter-one-of-0)

end

string<date-time>string

End date in ISO8601 format (e.g., '2025-01-31T23:59:59Z' or '2025-01-31'). Defaults to current time.

Example:

`"2025-01-31T23:59:59Z"`

[​](https://docs.fal.ai/platform-apis/v1/models/usage#parameter-timezone)

timezone

string

default:UTC

Timezone for date aggregation and boundaries. All timestamps in responses are in UTC, but this controls how dates are bucketed.

Example:

`"UTC"`

[​](https://docs.fal.ai/platform-apis/v1/models/usage#parameter-timeframe)

timeframe

enum<string>

Aggregation timeframe for timeseries data (auto-detected from date range if not specified). Auto-detection uses: minute (<2h), hour (<2d), day (<64d), week (<183d), month (>=183d).

Available options:

`minute`,

`hour`,

`day`,

`week`,

`month`

Example:

`"day"`

[​](https://docs.fal.ai/platform-apis/v1/models/usage#parameter-bound-to-timeframe)

bound\_to\_timeframe

enum<string>

default:true

Whether to adjust start/end dates to align with timeframe boundaries and use exclusive end. Defaults to true. When true, dates are aligned to the start of the timeframe period (e.g., start of day) and end is made exclusive (e.g., start of next day). When false, uses exact dates provided.

Available options:

`true`,

`false`

Example:

`"true"`

[​](https://docs.fal.ai/platform-apis/v1/models/usage#parameter-one-of-0)

endpoint\_id

stringstring\[\]

Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint\_id=model1,model2 or array syntax: ?endpoint\_id=model1&endpoint\_id=model2

Example:

```
["fal-ai/flux/dev"]
```

[​](https://docs.fal.ai/platform-apis/v1/models/usage#parameter-one-of-0)

expand

stringstring\[\]

default:\["time\_series"\]

Data to include in the response. Use 'time\_series' for time-bucketed data, 'summary' for aggregate statistics, and 'auth\_method' to include authentication method information (formatted with user key aliases). At least one of 'time\_series' or 'summary' is required.

Example:

```
["time_series", "auth_method"]
```

#### Response

200

application/json

Usage data retrieved successfully

Response containing usage data with pagination support

[​](https://docs.fal.ai/platform-apis/v1/models/usage#response-next-cursor-one-of-0)

next\_cursor

string \| null

required

Cursor for the next page of results, null if no more pages

[​](https://docs.fal.ai/platform-apis/v1/models/usage#response-has-more)

has\_more

boolean

required

Boolean indicating if more results are available (convenience field derived from next\_cursor)

[​](https://docs.fal.ai/platform-apis/v1/models/usage#response-time-series)

time\_series

object\[\]

Time series usage data grouped by time bucket (when expand includes 'time\_series'). Each bucket contains all usage records for that time period.

Showchild attributes

[​](https://docs.fal.ai/platform-apis/v1/models/usage#response-summary)

summary

object\[\]

Aggregate statistics (when expand includes 'summary')

Showchild attributes

Was this page helpful?

YesNo

[Estimate cost\\
\\
Previous](https://docs.fal.ai/platform-apis/v1/models/pricing/estimate) [Analytics\\
\\
Next](https://docs.fal.ai/platform-apis/v1/models/analytics)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)