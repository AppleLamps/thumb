---
url: "https://docs.fal.ai/model-apis/fast-flux"
title: "Fastest FLUX Endpoint - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/fast-flux#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Guides

Fastest FLUX Endpoint

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

- [Image Uploads Should Not Waste GPU Cycles](https://docs.fal.ai/model-apis/fast-flux#image-uploads-should-not-waste-gpu-cycles)

[![image-7](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/image-7.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=63ca3f10d0a6a8ed0b743648881b95a1)\\
\\
**fal-ai/ flux/schnell** \\
\\
`text-to-image`FLUX.1 \[schnell\] is a 12 billion parameter flow transformer that generates high-quality images from text in 1 to 4 steps, suitable for personal and commercial use.`optimized`](https://fal.ai/models/fal-ai/flux/schnell) [![image-8](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/image-8.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=77817a3db0b964ce72ac78f06b891404)\\
\\
**fal-ai/ flux/dev** \\
\\
`text-to-image`FLUX.1 \[dev\] is a 12 billion parameter flow transformer that generates high-quality images from text. It is suitable for personal and commercial use.`flux`](https://fal.ai/models/fal-ai/flux/dev)

Here is a quick guide on how to use this model from an API in less than 1 minute.Before we proceed, you need to create an [API key](https://fal.ai/dashboard/keys).This key secret will be used to authenticate your requests to the fal API.

Report incorrect code

Copy

Ask AI

```
fal.config({
  credentials: "PASTE_YOUR_FAL_KEY_HERE",
});
```

Now you can call our Model API endpoint using the [fal js client](https://docs.fal.ai/model-apis/model-endpoints):

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

const result = await fal.subscribe("fal-ai/flux/dev", {
  input: {
    prompt:
      "photo of a rhino dressed suit and tie sitting at a table in a bar with a bar stools, award winning photography, Elke vogelsang",
  },
});
```

**Note:**

#### [​](https://docs.fal.ai/model-apis/fast-flux\#image-uploads-should-not-waste-gpu-cycles)  Image Uploads Should Not Waste GPU Cycles

We upload the output image in a background thread so we don’t charge any GPU
time for time spent on the GPU that is not directly inference.

Was this page helpful?

YesNo

[Using fal within an n8n workflow\\
\\
Previous](https://docs.fal.ai/model-apis/guides/n8n) [Fastest SDXL Endpoint \| fal.ai Model APIs Docs\\
\\
Next](https://docs.fal.ai/model-apis/fast-sdxl)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)