---
url: "https://docs.fal.ai/model-apis/authentication/key-based"
title: "Key-Based Authentication - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/authentication/key-based#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

⌘KAsk AI

Search...

Navigation

Authentication

Key-Based Authentication

[![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg)Home](https://docs.fal.ai/) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg)Model APIs](https://docs.fal.ai/model-apis) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg)Serverless](https://docs.fal.ai/serverless) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg)Compute](https://docs.fal.ai/compute) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg)Platform APIs](https://docs.fal.ai/platform-apis) [Changelog](https://docs.fal.ai/changelog)

- [Status](https://status.fal.ai/)
- [Community](https://discord.gg/fal-ai)
- [Blog](https://blog.fal.ai/)

- [Introduction](https://docs.fal.ai/model-apis)

- [Connect to Cursor](https://docs.fal.ai/model-apis/mcp)

- [Quickstart](https://docs.fal.ai/model-apis/quickstart)

##### Guides

- [Generate Images from Text Tutorial](https://docs.fal.ai/model-apis/guides/generate-images-from-text)
- [Generate Videos from Image Tutorial](https://docs.fal.ai/model-apis/guides/generate-videos-from-image)
- [Convert Speech to Text](https://docs.fal.ai/model-apis/guides/convert-speech-to-text)
- [Custom Workflow UI](https://docs.fal.ai/model-apis/guides/custom-workflow-ui)
- [Using fal within an n8n workflow](https://docs.fal.ai/model-apis/guides/n8n)
- [Fastest FLUX in the Planet](https://docs.fal.ai/model-apis/fast-flux)
- [Fastest SDXL in the Planet](https://docs.fal.ai/model-apis/fast-sdxl)

##### Models Endpoints

- [Introduction](https://docs.fal.ai/model-apis/model-endpoints)
- [Queue](https://docs.fal.ai/model-apis/model-endpoints/queue)
- [Webhooks](https://docs.fal.ai/model-apis/model-endpoints/webhooks)
- [Synchronous Requests](https://docs.fal.ai/model-apis/model-endpoints/synchronous-requests)
- [HTTP over WebSockets](https://docs.fal.ai/model-apis/model-endpoints/websockets)
- [Server-side integration](https://docs.fal.ai/model-apis/model-endpoints/server-side)
- [Workflows](https://docs.fal.ai/model-apis/model-endpoints/workflows)

- [Client Libraries](https://docs.fal.ai/model-apis/client)

##### Authentication

- [Authentication](https://docs.fal.ai/model-apis/authentication)
- [Key-based](https://docs.fal.ai/model-apis/authentication/key-based)
- [GitHub](https://docs.fal.ai/model-apis/authentication/github)

##### Integrations

- [Next.js](https://docs.fal.ai/model-apis/integrations/nextjs)
- [Vercel](https://docs.fal.ai/model-apis/integrations/vercel)

##### Real-Time

- [Introduction](https://docs.fal.ai/model-apis/real-time)
- [Quickstart](https://docs.fal.ai/model-apis/real-time/quickstart)
- [Keeping fal API Secrets Safe](https://docs.fal.ai/model-apis/real-time/secrets)

##### Reference

- [Errors](https://docs.fal.ai/model-apis/errors)
- [Platform APIs for Models](https://docs.fal.ai/model-apis/platform-apis)

##### Help & Support

- [FAQ](https://docs.fal.ai/model-apis/faq)
- [Support \| fal.ai Model APIs Docs](https://docs.fal.ai/model-apis/support)

On this page

- [Generating the keys](https://docs.fal.ai/model-apis/authentication/key-based#generating-the-keys)
- [Scopes](https://docs.fal.ai/model-apis/authentication/key-based#scopes)
- [API scope](https://docs.fal.ai/model-apis/authentication/key-based#api-scope)
- [ADMIN scope](https://docs.fal.ai/model-apis/authentication/key-based#admin-scope)

There are two main reasons to use key-based authentication:

1. When calling [ready-to-use models](https://fal.ai/models)
2. In headless remote environments or CI/CD (where GitHub authentication is not available)

## [​](https://docs.fal.ai/model-apis/authentication/key-based\#generating-the-keys)  Generating the keys

Navigate to our dashboard keys page and generate a key from the UI [fal.ai/dashboard/keys](https://fal.ai/dashboard/keys)

## [​](https://docs.fal.ai/model-apis/authentication/key-based\#scopes)  Scopes

Scopes provide a way to control the permissions and access level of a given key. By assigning scopes to keys, you can limit the operations that each key can perform. Currently there are only two scopes, `ADMIN` and `API`. If you are just consuming [ready-to-use models](https://fal.ai/models), we recommend that you use the `API` scope.

### [​](https://docs.fal.ai/model-apis/authentication/key-based\#api-scope)  API scope

- Grants access to ready-to-use models.
- Grants access to API-scoped [Platform APIs](https://docs.fal.ai/platform-apis).

### [​](https://docs.fal.ai/model-apis/authentication/key-based\#admin-scope)  ADMIN scope

- Grants full access to private models.
- Grants full access to CLI operations.
- Grants access to ready-to-use models.
- Grants access to API-scoped and ADMIN-scoped [Platform APIs](https://docs.fal.ai/platform-apis).

Was this page helpful?

YesNo

[Authentication Authentication \| fal.ai Model APIs Docs\\
\\
Previous](https://docs.fal.ai/model-apis/authentication) [GitHub Authentication Authentication\\
\\
Next](https://docs.fal.ai/model-apis/authentication/github)

⌘I