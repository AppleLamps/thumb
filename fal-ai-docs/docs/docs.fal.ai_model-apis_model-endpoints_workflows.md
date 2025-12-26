---
url: "https://docs.fal.ai/model-apis/model-endpoints/workflows"
title: "Workflow endpoints API | fal.ai Reference - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/model-endpoints/workflows#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Models Endpoints

Workflow endpoints API \| fal.ai Reference

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

- [Workflow as an API](https://docs.fal.ai/model-apis/model-endpoints/workflows#workflow-as-an-api)
- [Workflow events](https://docs.fal.ai/model-apis/model-endpoints/workflows#workflow-events)
- [The submit event](https://docs.fal.ai/model-apis/model-endpoints/workflows#the-submit-event)
- [The completion event](https://docs.fal.ai/model-apis/model-endpoints/workflows#the-completion-event)
- [The output event](https://docs.fal.ai/model-apis/model-endpoints/workflows#the-output-event)
- [The error event](https://docs.fal.ai/model-apis/model-endpoints/workflows#the-error-event)
- [Example](https://docs.fal.ai/model-apis/model-endpoints/workflows#example)
- [Type definitions](https://docs.fal.ai/model-apis/model-endpoints/workflows#type-definitions)

## [​](https://docs.fal.ai/model-apis/model-endpoints/workflows\#workflow-as-an-api)  Workflow as an API

Workflow APIs work the same way as other model endpoints, you can simply send a request and get a response back. However, it is common for workflows to contain multiple steps and produce intermediate results, as each step contains their own response that could be relevant in your use-case.Therefore, workflows benefit from the **streaming** feature, which allows you to get partial results as they are being generated.

## [​](https://docs.fal.ai/model-apis/model-endpoints/workflows\#workflow-events)  Workflow events

The workflow API will trigger a few events during its execution, these events can be used to monitor the progress of the workflow and get intermediate results. Below are the events that you can expect from a workflow stream:

### [​](https://docs.fal.ai/model-apis/model-endpoints/workflows\#the-submit-event)  The `submit` event

This events is triggered every time a new step has been submitted to execution. It contains the `app_id`, `request_id` and the `node_id`.

Report incorrect code

Copy

Ask AI

```
{
  "type": "submit",
  "node_id": "stable_diffusion_xl",
  "app_id": "fal-ai/fast-sdxl",
  "request_id": "d778bdf4-0275-47c2-9f23-16c27041cbeb"
}
```

### [​](https://docs.fal.ai/model-apis/model-endpoints/workflows\#the-completion-event)  The `completion` event

This event is triggered upon the completion of a specific step.

Report incorrect code

Copy

Ask AI

```
{
  "type": "completion",
  "node_id": "stable_diffusion_xl",
  "output": {
    "images": [\
      {\
        "url": "https://fal.media/result.jpeg",\
        "width": 1024,\
        "height": 1024,\
        "content_type": "image/jpeg"\
      }\
    ],
    "timings": { "inference": 2.1733 },
    "seed": 6252023,
    "has_nsfw_concepts": [false],
    "prompt": "a cute puppy"
  }
}
```

### [​](https://docs.fal.ai/model-apis/model-endpoints/workflows\#the-output-event)  The `output` event

The `output` event means that the workflow has completed and the final result is ready.

Report incorrect code

Copy

Ask AI

```
{
  "type": "output",
  "output": {
    "images": [\
      {\
        "url": "https://fal.media/result.jpeg",\
        "width": 1024,\
        "height": 1024,\
        "content_type": "image/jpeg"\
      }\
    ]
  }
}
```

### [​](https://docs.fal.ai/model-apis/model-endpoints/workflows\#the-error-event)  The `error` event

The `error` event is triggered when an error occurs during the execution of a step. The `error` object contains the `error.status` with the HTTP status code, an error `message` as well as `error.body` with the underlying error serialized.

Report incorrect code

Copy

Ask AI

```
{
  "type": "error",
  "node_id": "stable_diffusion_xl",
  "message": "Error while fetching the result of the request d778bdf4-0275-47c2-9f23-16c27041cbeb",
  "error": {
    "status": 422,
    "body": {
      "detail": [\
        {\
          "loc": ["body", "num_images"],\
          "msg": "ensure this value is less than or equal to 8",\
          "type": "value_error.number.not_le",\
          "ctx": { "limit_value": 8 }\
        }\
      ]
    }
  }
}
```

## [​](https://docs.fal.ai/model-apis/model-endpoints/workflows\#example)  Example

A cool and simple example of the power of workflows is `workflows/fal-ai/sdxl-sticker`, which consists of three steps:

1

Generates an image using `fal-ai/fast-sdxl`.

2

Remove the background of the image using `fal-ai/imageutils/rembg`.

3

Converts the image to a sticker using `fal-ai/face-to-sticker`.

What could be a tedious process of running and coordinating three different models is now a single endpoint that you can call with a single request.

- Javascript

- python

- python (async)

- Swift


Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

const stream = await fal.stream("workflows/fal-ai/sdxl-sticker", {
input: {
  prompt: "a face of a cute puppy, in the style of pixar animation",
},
});

for await (const event of stream) {
console.log("partial", event);
}

const result = await stream.done();

console.log("final result", result);
```

Report incorrect code

Copy

Ask AI

```
import fal_client

stream = fal_client.stream(
    "workflows/fal-ai/sdxl-sticker",
    arguments={
        "prompt": "a face of a cute puppy, in the style of pixar animation",
    },
)
for event in stream:
    print(event)
```

Report incorrect code

Copy

Ask AI

```
import asyncio
import fal_client

async def main():
    stream = await fal_client.stream_async(
        "workflows/fal-ai/sdxl-sticker",
        arguments={
            "prompt": "a face of a cute puppy, in the style of pixar animation",
        },
    )

    async for event in stream:
        print(event)

if __name__ == "__main__":
    asyncio.run(main())
```

**Coming soon**The Swift client does not support streaming yet.

## [​](https://docs.fal.ai/model-apis/model-endpoints/workflows\#type-definitions)  Type definitions

Below are the type definition in TypeScript of events that you can expect from a workflow stream:

Report incorrect code

Copy

Ask AI

```
type WorkflowBaseEvent = {
  type: "submit" | "completion" | "error" | "output";
  node_id: string;
};

export type WorkflowSubmitEvent = WorkflowBaseEvent & {
  type: "submit";
  app_id: string;
  request_id: string;
};

export type WorkflowCompletionEvent<Output = any> = WorkflowBaseEvent & {
  type: "completion";
  app_id: string;
  output: Output;
};

export type WorkflowDoneEvent<Output = any> = WorkflowBaseEvent & {
  type: "output";
  output: Output;
};

export type WorkflowErrorEvent = WorkflowBaseEvent & {
  type: "error";
  message: string;
  error: any;
};
```

Was this page helpful?

YesNo

[Server-side integration API \| fal.ai Reference\\
\\
Previous](https://docs.fal.ai/model-apis/model-endpoints/server-side) [Client Libraries\\
\\
Next](https://docs.fal.ai/model-apis/client)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)