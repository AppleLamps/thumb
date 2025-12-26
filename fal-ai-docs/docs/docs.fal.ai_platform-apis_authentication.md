---
url: "https://docs.fal.ai/platform-apis/authentication"
title: "Authentication - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/authentication#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Authentication

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

On this page

- [Generating API Keys](https://docs.fal.ai/platform-apis/authentication#generating-api-keys)
- [Scopes](https://docs.fal.ai/platform-apis/authentication#scopes)
- [Authentication Format](https://docs.fal.ai/platform-apis/authentication#authentication-format)
- [Usage Examples](https://docs.fal.ai/platform-apis/authentication#usage-examples)
- [cURL](https://docs.fal.ai/platform-apis/authentication#curl)
- [Python](https://docs.fal.ai/platform-apis/authentication#python)
- [JavaScript](https://docs.fal.ai/platform-apis/authentication#javascript)
- [Best Practices](https://docs.fal.ai/platform-apis/authentication#best-practices)
- [Troubleshooting](https://docs.fal.ai/platform-apis/authentication#troubleshooting)
- [401 Unauthorized](https://docs.fal.ai/platform-apis/authentication#401-unauthorized)
- [403 Forbidden](https://docs.fal.ai/platform-apis/authentication#403-forbidden)

## [​](https://docs.fal.ai/platform-apis/authentication\#generating-api-keys)  Generating API Keys

Navigate to the dashboard keys page and generate a key from the UI: [fal.ai/dashboard/keys](https://fal.ai/dashboard/keys)

## [​](https://docs.fal.ai/platform-apis/authentication\#scopes)  Scopes

Platform APIs may require different API key scopes.[Learn more about key-based authentication and scopes](https://docs.fal.ai/model-apis/authentication/key-based).

## API Scope

Most Platform APIs accept **API scope** keys. This scope is suitable for most use cases including model discovery, pricing, and analytics.

## Admin Scope

Some Platform APIs require **Admin scope** keys for access to sensitive data.

Check the specific Platform API documentation to see which scope is required. If you’re unsure, start with an API scope key. You can always generate an Admin scope key later if needed.

API keys should be kept secure and never exposed in client-side code or public repositories.

## [​](https://docs.fal.ai/platform-apis/authentication\#authentication-format)  Authentication Format

Include your API key in the `Authorization` header with the `Key` prefix:

Report incorrect code

Copy

Ask AI

```
Authorization: Key YOUR_API_KEY
```

For endpoints requiring Admin scope:

Report incorrect code

Copy

Ask AI

```
Authorization: Key YOUR_ADMIN_API_KEY
```

## [​](https://docs.fal.ai/platform-apis/authentication\#usage-examples)  Usage Examples

### [​](https://docs.fal.ai/platform-apis/authentication\#curl)  cURL

Using an API scope key for model listing:

Report incorrect code

Copy

Ask AI

```
curl -X GET "https://api.fal.ai/v1/models?limit=10" \
  -H "Authorization: Key YOUR_API_KEY"
```

Using an Admin scope key for usage data:

Report incorrect code

Copy

Ask AI

```
curl -X GET "https://api.fal.ai/v1/models/usage" \
  -H "Authorization: Key YOUR_ADMIN_API_KEY"
```

### [​](https://docs.fal.ai/platform-apis/authentication\#python)  Python

Using an API scope key:

Report incorrect code

Copy

Ask AI

```
import requests

headers = {
    "Authorization": "Key YOUR_API_KEY"
}

response = requests.get(
    "https://api.fal.ai/v1/models",
    headers=headers,
    params={"limit": 10}
)

print(response.json())
```

### [​](https://docs.fal.ai/platform-apis/authentication\#javascript)  JavaScript

Using an API scope key:

Report incorrect code

Copy

Ask AI

```
const response = await fetch('https://api.fal.ai/v1/models?limit=10', {
  headers: {
    'Authorization': 'Key YOUR_API_KEY'
  }
});

const data = await response.json();
console.log(data);
```

## [​](https://docs.fal.ai/platform-apis/authentication\#best-practices)  Best Practices

- Store API keys in environment variables
- Use the minimum required scope for your use case
- Rotate keys regularly
- Keep Admin API keys secure and never expose them client-side

## [​](https://docs.fal.ai/platform-apis/authentication\#troubleshooting)  Troubleshooting

### [​](https://docs.fal.ai/platform-apis/authentication\#401-unauthorized)  401 Unauthorized

- Verify your API key is correct
- Ensure the `Authorization` header includes the `Key` prefix
- Check that your API key hasn’t been revoked

### [​](https://docs.fal.ai/platform-apis/authentication\#403-forbidden)  403 Forbidden

Your API key may not have the required scope for the endpoint. Check the endpoint documentation to determine if it requires an Admin scope key, and generate one from the dashboard if needed.

Was this page helpful?

YesNo

[Introduction to Platform APIs\\
\\
Previous](https://docs.fal.ai/platform-apis) [OpenAPI Schema\\
\\
Next](https://docs.fal.ai/platform-apis/openapi-schema)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)