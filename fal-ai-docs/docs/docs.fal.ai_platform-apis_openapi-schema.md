---
url: "https://docs.fal.ai/platform-apis/openapi-schema"
title: "OpenAPI Schema - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/openapi-schema#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

OpenAPI Schema

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

- [Download](https://docs.fal.ai/platform-apis/openapi-schema#download)
- [Use Cases](https://docs.fal.ai/platform-apis/openapi-schema#use-cases)
- [Schema URL](https://docs.fal.ai/platform-apis/openapi-schema#schema-url)
- [Integration Examples](https://docs.fal.ai/platform-apis/openapi-schema#integration-examples)
- [Postman](https://docs.fal.ai/platform-apis/openapi-schema#postman)
- [OpenAPI Generator](https://docs.fal.ai/platform-apis/openapi-schema#openapi-generator)
- [Swagger UI](https://docs.fal.ai/platform-apis/openapi-schema#swagger-ui)
- [Specification Details](https://docs.fal.ai/platform-apis/openapi-schema#specification-details)

## [​](https://docs.fal.ai/platform-apis/openapi-schema\#download)  Download

Download the complete OpenAPI schema to integrate with your tools and workflows: [**OpenAPI Specification** \\
\\
Download the OpenAPI 3.1 JSON schema](https://api.fal.ai/v1/openapi.json)

## [​](https://docs.fal.ai/platform-apis/openapi-schema\#use-cases)  Use Cases

The OpenAPI schema enables you to:

- **Generate Client SDKs**: Use tools like OpenAPI Generator to create client libraries in your preferred language
- **API Testing**: Import into testing tools like Postman or Insomnia
- **Code Generation**: Generate type definitions and API interfaces
- **Documentation**: Use with documentation generators and API explorers
- **Validation**: Validate API requests and responses against the schema

## [​](https://docs.fal.ai/platform-apis/openapi-schema\#schema-url)  Schema URL

Report incorrect code

Copy

Ask AI

```
https://api.fal.ai/v1/openapi.json
```

## [​](https://docs.fal.ai/platform-apis/openapi-schema\#integration-examples)  Integration Examples

### [​](https://docs.fal.ai/platform-apis/openapi-schema\#postman)  Postman

1. Open Postman
2. Click **Import**
3. Select **Link** and paste the schema URL
4. Postman will generate a collection from the OpenAPI spec

### [​](https://docs.fal.ai/platform-apis/openapi-schema\#openapi-generator)  OpenAPI Generator

Generate a client library using the OpenAPI Generator:

Report incorrect code

Copy

Ask AI

```
openapi-generator-cli generate \
  -i https://api.fal.ai/v1/openapi.json \
  -g python \
  -o ./fal-api-client
```

### [​](https://docs.fal.ai/platform-apis/openapi-schema\#swagger-ui)  Swagger UI

View the API documentation in Swagger UI:

Report incorrect code

Copy

Ask AI

```
docker run -p 8080:8080 \
  -e SWAGGER_JSON_URL=https://api.fal.ai/v1/openapi.json \
  swaggerapi/swagger-ui
```

## [​](https://docs.fal.ai/platform-apis/openapi-schema\#specification-details)  Specification Details

- **Version**: OpenAPI 3.1.0
- **Format**: JSON
- **Authentication**: API Key (Admin keys required)
- **Base URL**: `https://api.fal.ai/v1`

Was this page helpful?

YesNo

[Authentication\\
\\
Previous](https://docs.fal.ai/platform-apis/authentication) [Platform APIs for Models\\
\\
Next](https://docs.fal.ai/platform-apis/for-models)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)