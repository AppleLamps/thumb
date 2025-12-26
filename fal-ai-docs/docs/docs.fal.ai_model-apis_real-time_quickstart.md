---
url: "https://docs.fal.ai/model-apis/real-time/quickstart"
title: "Real Time Models Quickstart | fal.ai Real-Time Models - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/real-time/quickstart#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Real-Time

Real Time Models Quickstart \| fal.ai Real-Time Models

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

All our Model Endpoint’s support HTTP/REST. Additionally our real-time models support WebSockets. You can use the HTTP/REST endpoint for any real time model but if you are sending back to back requests using websockets gives the best results.

The realtime client connects to a `/realtime` endpoint path on the model. Only models that explicitly support realtime inference (like `fal-ai/fast-lcm-diffusion` or `fal-ai/fast-turbo-diffusion`) can be used with the realtime client. Standard queue-based models do not have a realtime endpoint.

[![image-6](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/image-6.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=c4ed37d4c5ef36528cfa2b6a79eddcd9)\\
\\
**fal-ai/ fast-lcm-diffusion** \\
\\
`text-to-image`Run SDXL at the speed of light`real-time``lcm`](https://fal.ai/models/fal-ai/fast-lcm-diffusion) [![image-5](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/image-5.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=a5eb3affecfe0e642fd722ebf728f088)\\
\\
**fal-ai/ fast-turbo-diffusion** \\
\\
`text-to-image`Run SDXL at the speed of light`real-time``optimized`](https://fal.ai/models/fal-ai/fast-turbo-diffusion)

Before we proceed, you need to create your [API key](https://fal.ai/dashboard/keys).

JavaScript/TypeScript

Python

Python (async)

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

fal.config({
  credentials: "PASTE_YOUR_FAL_KEY_HERE",
});

const connection = fal.realtime.connect("fal-ai/fast-lcm-diffusion", {
  onResult: (result) => {
    console.log(result);
  },
  onError: (error) => {
    console.error(error);
  },
});

connection.send({
  prompt:
    "an island near sea, with seagulls, moon shining over the sea, light house, boats in the background, fish flying over the sea",
  sync_mode: true,
  image_url:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
});
```

You can read more about the real time clients in our [real time client docs](https://docs.fal.ai/model-apis/client#5-realtime-communication) section.

**Note:**For the fastest inference speed use **512x512** input dimensions for `image_url`.

**To get the best performance from this model:**

- Make sure the image is provided as a base64 encoded data url.
- Make sure the image\_url is exactly **512x512**.
- Make sure sync\_mode is true, this will make sure you also get a base64 encoded data url back from our API.

You can also use **768x768** or **1024x1024** as your image dimensions, the inference will be faster for this configuration compared to random dimensions but wont be as fast as **512x512**.**Video Tutorial:** _Latent Consistency - Build a Real-Time AI Image App with WebSockets, Next.js, and fal.ai by [Nader Dabit](https://twitter.com/dabit3)_

Latent Consistency - Build a Real-Time AI Image App with WebSockets, Excalidraw, Next.js, and Fal.ai - YouTube

[Photo image of Nader Dabit](https://www.youtube.com/channel/UC7mca3O0DmdSG2Cr80sOD7g?embeds_referring_euri=https%3A%2F%2Fdocs.fal.ai%2F)

Nader Dabit

54.5K subscribers

[Latent Consistency - Build a Real-Time AI Image App with WebSockets, Excalidraw, Next.js, and Fal.ai](https://www.youtube.com/watch?v=freyCo3pcz4)

Nader Dabit

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

Full screen is unavailable. [Learn More](https://support.google.com/youtube/answer/6276924)

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=freyCo3pcz4&embeds_referring_euri=https%3A%2F%2Fdocs.fal.ai%2F)

0:00

0:00 / 17:46

•Live

•

Was this page helpful?

YesNo

[Real-Time Models \| fal.ai Real-Time Models\\
\\
Previous](https://docs.fal.ai/model-apis/real-time) [Keeping fal API Secrets Safe \| fal.ai Real-Time Models\\
\\
Next](https://docs.fal.ai/model-apis/real-time/secrets)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)