---
url: "https://docs.fal.ai/model-apis/authentication/github"
title: "GitHub Authentication Authentication - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/authentication/github#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Authentication

GitHub Authentication Authentication

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

- [Logging in](https://docs.fal.ai/model-apis/authentication/github#logging-in)

## [​](https://docs.fal.ai/model-apis/authentication/github\#logging-in)  Logging in

[Installing fal](https://docs.fal.ai/model-apis/quickstart) Python library lets you use the `fal` CLI, which you can use to authenticate. In your terminal, you can run the following command:

Report incorrect code

Copy

Ask AI

```
fal auth login
```

Follow the instructions on your terminal to confirm your credentials. Once you’re done, you should get a success message in your terminal.

**Beta alert!**fal sdk is an enterprise feature. Once you run the login command, you will get
an error that you should reach out to [support@fal.ai](mailto:support@fal.ai). Shoot us an email with how
you are planning to use fal, and we will make sure to get you access asap.

Now you’re ready to write your first fal function!

**Note:**Your login credentials are persisted on your local machine and cannot be transferred to another machine. If you want to use fal in your CI/CD, you will need to use [key-based credentials](https://docs.fal.ai/model-apis/authentication/key-based).

Was this page helpful?

YesNo

[Key-Based Authentication\\
\\
Previous](https://docs.fal.ai/model-apis/authentication/key-based) [Add fal.ai to your Next.js app Integration\\
\\
Next](https://docs.fal.ai/model-apis/integrations/nextjs)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)