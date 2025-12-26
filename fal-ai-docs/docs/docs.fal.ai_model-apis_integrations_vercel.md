---
url: "https://docs.fal.ai/model-apis/integrations/vercel"
title: "Add fal.ai to your Next.js app Integration - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/integrations/vercel#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Integrations

Add fal.ai to your Next.js app Integration

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

- [You will learn how to:](https://docs.fal.ai/model-apis/integrations/vercel#you-will-learn-how-to%3A)
- [Prerequisites](https://docs.fal.ai/model-apis/integrations/vercel#prerequisites)
- [Vercel official integration](https://docs.fal.ai/model-apis/integrations/vercel#vercel-official-integration)
- [Manual setup](https://docs.fal.ai/model-apis/integrations/vercel#manual-setup)

## [​](https://docs.fal.ai/model-apis/integrations/vercel\#you-will-learn-how-to:)  You will learn how to:

- Connect a Next.js app deployed on Vercel to fal.ai

## [​](https://docs.fal.ai/model-apis/integrations/vercel\#prerequisites)  Prerequisites

1

A [fal.ai](https://fal.ai/) account

2

A [Vercel account](https://vercel.com/)

3

A Next.js app. Check the [Next.js guide](https://docs.fal.ai/model-apis/integrations/nextjs) if you don’t have one yet.

4

App deployed on Vercel. Run `npx vercel` in your app directory to deploy it in case you haven’t done it yet.

## [​](https://docs.fal.ai/model-apis/integrations/vercel\#vercel-official-integration)  Vercel official integration

The recommended way to add fal.ai to your app deployed on Vercel is to use the official integration. You can find it in the [Vercel marketplace](https://vercel.com/integrations/fal).Click on **Add integration** and follow the steps. After you’re done, re-deploy your app and you’re good to go!

![Vercel integration](https://integrations-og-image.vercel.sh/api/og/fal?42673700034a7509d66487f3ed68a2bd)

## [​](https://docs.fal.ai/model-apis/integrations/vercel\#manual-setup)  Manual setup

You can also manually add fal credentials to your Vercel environment manually.

1

Go to your [fal.ai dashboard](https://fal.ai/dashboard/keys), create an **API-scoped** key and copy it. Make sure you create an alias do identify which app is using it.

2

Go to your app settings in Vercel and add a new environment variable called `FAL_KEY` with the value of the key you just copied. You can choose other names, but keep in mind that the default convention of fal-provided libraries is `FAL_KEY`.

3

Re-deploy your app and you’re good to go!

Was this page helpful?

YesNo

[Add fal.ai to your Next.js app Integration\\
\\
Previous](https://docs.fal.ai/model-apis/integrations/nextjs) [Real-Time Models \| fal.ai Real-Time Models\\
\\
Next](https://docs.fal.ai/model-apis/real-time)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)