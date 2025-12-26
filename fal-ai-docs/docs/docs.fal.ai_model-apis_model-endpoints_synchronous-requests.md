---
url: "https://docs.fal.ai/model-apis/model-endpoints/synchronous-requests"
title: "Synchronous Requests API | fal.ai Reference - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/model-endpoints/synchronous-requests#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Models Endpoints

Synchronous Requests API \| fal.ai Reference

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

- [Submit a request](https://docs.fal.ai/model-apis/model-endpoints/synchronous-requests#submit-a-request)
- [Object Lifecycle](https://docs.fal.ai/model-apis/model-endpoints/synchronous-requests#object-lifecycle)

Synchronous endpoints are beneficial if when you know the request is quick and you are looking for minimal latency. The drawbacks are:

- You need to keep the connection open until receiving the result
- The request cannot be interrupted
- If the connection is interrupted there is not way to obtain the result
- You will be charged for the full request whether or not you were able to receive the result

The endpoint format and parameters are similar to the Queue ones:

| Endpoint | Method | Description |
| --- | --- | --- |
| **`https://fal.run/{model_id}`** | POST | Adds a request to the queue for a top-level path |
| **`https://fal.run/{model_id}/{subpath}`** | POST | Adds a request to the queue for an optional subpath |

Parameters:

- `model_id`: the model ID consists of a namespace and model name separated by a slash, e.g. `fal-ai/fast-sdxl`. Many models expose only a single
top-level endpoint, so you can directly call them by `model_id`.
- `subpath`: some models expose different capabilities at different sub-paths, e.g. `fal-ai/flux/dev`. The subpath (`/dev` in this case) should be used

### [​](https://docs.fal.ai/model-apis/model-endpoints/synchronous-requests\#submit-a-request)  Submit a request

Here is an example of using the curl command to submit a synchronous request:

Report incorrect code

Copy

Ask AI

```
curl -X POST https://fal.run/fal-ai/fast-sdxl \
  -H "Authorization: Key $FAL_KEY" \
  -d '{"prompt": "a cat"}'
```

The response will come directly from the model:

Report incorrect code

Copy

Ask AI

```
{
  "images": [\
    {\
      "url": "https://v3.fal.media/files/rabbit/YYbm6L3DaXYHDL1_A4OaL.jpeg",\
      "width": 1024,\
      "height": 1024,\
      "content_type": "image/jpeg"\
    }\
  ],
  "timings": {
    "inference": 2.507048434985336
  },
  "seed": 15860307465884635512,
  "has_nsfw_concepts": [\
    false\
  ],
  "prompt": "a cat"
}
```

### [​](https://docs.fal.ai/model-apis/model-endpoints/synchronous-requests\#object-lifecycle)  Object Lifecycle

You can control how long images and other objects generated by your request remain available by including the `X-Fal-Object-Lifecycle-Preference` header. This header allows you to specify the expiration duration for objects created during the request processing.The header value must be a JSON object with an `expiration_duration_seconds` field specifying the number of seconds the objects should remain available:

Report incorrect code

Copy

Ask AI

```
curl -X POST https://fal.run/fal-ai/fast-sdxl \
  -H "Authorization: Key $FAL_KEY" \
  -H 'X-Fal-Object-Lifecycle-Preference: {"expiration_duration_seconds": 3600}' \
  -d '{"prompt": "a cat"}'
```

In this example, images generated by the request will be available for 3600 seconds (1 hour) before expiring. The expiration duration is calculated from when the objects are created.

**Object Lifecycle**The `X-Fal-Object-Lifecycle-Preference` header applies to all objects (images, files, etc.) generated during request processing. If you need different expiration times for different requests, you can include this header with each request.

Was this page helpful?

YesNo

[Webhooks API \| fal.ai Reference\\
\\
Previous](https://docs.fal.ai/model-apis/model-endpoints/webhooks) [HTTP over WebSockets API \| fal.ai Reference\\
\\
Next](https://docs.fal.ai/model-apis/model-endpoints/websockets)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)