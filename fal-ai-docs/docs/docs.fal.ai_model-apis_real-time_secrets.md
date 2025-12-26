---
url: "https://docs.fal.ai/model-apis/real-time/secrets"
title: "Keeping fal API Secrets Safe | fal.ai Real-Time Models - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/real-time/secrets#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Real-Time

Keeping fal API Secrets Safe \| fal.ai Real-Time Models

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

The WebSocket connection is established directly from the browser or native mobile application, making it unsafe to embed API keys and secrets directly into the client. To address this, we have developed additional tools to enable secure authentication with our servers without introducing unnecessary intermediaries between the client and our GPU servers. Instead of using traditional API keys, we recommend utilizing short-lived [JWT](https://jwt.io/) tokens for authentication.Easiest way to communicate with fal using websockets is through our [javascript](https://github.com/fal-ai/fal-js) and [swift](https://github.com/fal-ai/fal-swift) clients and a [server proxy](https://docs.fal.ai/model-apis/model-endpoints/server-side).

**Server Side Proxy**Checkout our [Server Side Integration](https://docs.fal.ai/model-apis/model-endpoints/server-side#ready-to-use-proxy-implementations) section to learn more about using a ready made proxy with your Node.js or Next.js app or implement your own.

When `fal.realtime.connect` is invoked the fal client gets a short lived [JWT](https://jwt.io/) token through a server proxy to authenticate with fal services. This token is refreshed automatically by the client when it is needed.

Javascript

Swift

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

fal.config({
  proxyUrl: "/api/fal/proxy",
});

const { send } = fal.realtime.connect("fal-ai/fast-lcm-diffusion", {
  connectionKey: "realtime-demo",
  throttleInterval: 128,
  onResult(result) {
    // display
  },
});
```

Checkout the [FalRealtimeSampleApp (swift)](https://github.com/fal-ai/fal-swift/tree/main/Sources/Samples/FalRealtimeSampleApp) and [realtime demo (js)](https://github.com/fal-ai/fal-js/blob/main/apps/demo-nextjs-app-router/app/realtime/page.tsx) for more details.

Was this page helpful?

YesNo

[Real Time Models Quickstart \| fal.ai Real-Time Models\\
\\
Previous](https://docs.fal.ai/model-apis/real-time/quickstart) [Error Reference\\
\\
Next](https://docs.fal.ai/model-apis/errors)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)