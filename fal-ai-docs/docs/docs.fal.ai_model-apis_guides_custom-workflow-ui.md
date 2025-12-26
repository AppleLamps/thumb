---
url: "https://docs.fal.ai/model-apis/guides/custom-workflow-ui"
title: "Custom Workflow UI Tutorial - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/guides/custom-workflow-ui#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Guides

Custom Workflow UI Tutorial

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

- [How to create a custom workflow UI](https://docs.fal.ai/model-apis/guides/custom-workflow-ui#how-to-create-a-custom-workflow-ui)
- [How to find model input and output fields](https://docs.fal.ai/model-apis/guides/custom-workflow-ui#how-to-find-model-input-and-output-fields)
- [How to execute a custom workflow](https://docs.fal.ai/model-apis/guides/custom-workflow-ui#how-to-execute-a-custom-workflow)

## [​](https://docs.fal.ai/model-apis/guides/custom-workflow-ui\#how-to-create-a-custom-workflow-ui)  How to create a custom workflow UI

If you want to create your custom workflow and execute it using the fal API, you need to create a json object that describes the workflow. You can use the following template to create your custom workflow. Basically, a workflow definition must have an input node, a fal model node, and an output node. The input node is the request to the fal API. The fal model node is the model that you want to use. You can add as many fal model nodes as you want. The output node is the response from the fal API.

Report incorrect code

Copy

Ask AI

```
{
  // Input node / Request
  "input": {
    "id": "input",
    "type": "input",
    "depends": [],
    "input": {
      "prompt": ""
    }
  },

  // A fal model node
  "node_1": {
    "id": "node_1",
    "type": "run",
    "depends": ["input"],
    // The app is the model endpoint id
    "app": "fal-ai/flux/dev",
    "input": {
      // The prompt value is coming from the Input node
      "prompt": "$input.prompt"
    }
  },

  // Another fal model node
  "node_2": {
    "id": "node_2",
    "type": "run",
    "depends": ["node_1"],
    // The app is the model endpoint id
    "app": "fal-ai/bria/background/remove",
    "input": {
      // The image_url value is coming from the "node_1" node
      "image_url": "$node_1.images.0.url"
    }
  },

  // Output node / Response
  "output": {
    "id": "output",
    "type": "display",
    "depends": ["node_2"],
    "fields": {
      "image": "$node_2.image"
    }
  }
}
```

## [​](https://docs.fal.ai/model-apis/guides/custom-workflow-ui\#how-to-find-model-input-and-output-fields)  How to find model input and output fields

Every fal model has input and output fields. You can find the input and output fields using the following URL:

Report incorrect code

Copy

Ask AI

```
https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=[endpoint_id]
```

For example:

Report incorrect code

Copy

Ask AI

```
https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=fal-ai/flux/dev
```

## [​](https://docs.fal.ai/model-apis/guides/custom-workflow-ui\#how-to-execute-a-custom-workflow)  How to execute a custom workflow

You can execute a custom workflow using `workflows/execute` endpoint.

Report incorrect code

Copy

Ask AI

```
const stream = await fal.stream(`workflows/execute`, {
    input: {
        // The input to the workflow
        input: {
            prompt: "A beautiful sunset over a calm ocean"
        },
        // The workflow definition
        workflow: {
          "input": {
            "id": "input",
            "type": "input",
            "depends": [],
            "input": {
              "prompt": ""
            }
          },
          "node_1": {
            "id": "node_1",
            "type": "run",
            "depends": ["input"],
            "app": "fal-ai/flux/dev",
            "input": {
              "prompt": "$input.prompt"
            }
          },
          "node_2": {
            "id": "node_2",
            "type": "run",
            "depends": ["node_1"],
            "app": "fal-ai/bria/background/remove",
            "input": {
              "image_url": "$node_1.images.0.url"
            }
          },
          "output": {
            "id": "output",
            "type": "display",
            "depends": ["node_2"],
            "fields": {
              "image": "$node_2.image"
            }
          }
        },
    },
});

stream.on("data", (event) => {
  console.log(event);
});

const result = await stream.done();
```

Was this page helpful?

YesNo

[Convert Speech to Text Tutorial\\
\\
Previous](https://docs.fal.ai/model-apis/guides/convert-speech-to-text) [Using fal within an n8n workflow\\
\\
Next](https://docs.fal.ai/model-apis/guides/n8n)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)