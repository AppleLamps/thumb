---
url: "https://docs.fal.ai/model-apis/client"
title: "Client Libraries - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/client#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Client Libraries

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

- [Introduction](https://docs.fal.ai/model-apis/client#introduction)
- [Supported Languages](https://docs.fal.ai/model-apis/client#supported-languages)
- [Installation](https://docs.fal.ai/model-apis/client#installation)
- [Features](https://docs.fal.ai/model-apis/client#features)
- [1\. Call an endpoint](https://docs.fal.ai/model-apis/client#1-call-an-endpoint)
- [2\. Queue Management](https://docs.fal.ai/model-apis/client#2-queue-management)
- [Submit a Request](https://docs.fal.ai/model-apis/client#submit-a-request)
- [Check Request Status](https://docs.fal.ai/model-apis/client#check-request-status)
- [Retrieve Request Result](https://docs.fal.ai/model-apis/client#retrieve-request-result)
- [3\. File Uploads](https://docs.fal.ai/model-apis/client#3-file-uploads)
- [4\. Streaming](https://docs.fal.ai/model-apis/client#4-streaming)
- [5\. Realtime Communication](https://docs.fal.ai/model-apis/client#5-realtime-communication)
- [6\. Run](https://docs.fal.ai/model-apis/client#6-run)
- [API References](https://docs.fal.ai/model-apis/client#api-references)
- [Examples](https://docs.fal.ai/model-apis/client#examples)
- [Migration Guide](https://docs.fal.ai/model-apis/client#migration-guide)
- [JavaScript: Migrating from serverless-client to client](https://docs.fal.ai/model-apis/client#javascript%3A-migrating-from-serverless-client-to-client)
- [Support](https://docs.fal.ai/model-apis/client#support)

## [​](https://docs.fal.ai/model-apis/client\#introduction)  Introduction

fal provides official client libraries for multiple programming languages, offering a seamless interface to interact with our platform.

## [​](https://docs.fal.ai/model-apis/client\#supported-languages)  Supported Languages

We officially support the following languages:

## JavaScript/TypeScript

## Python

## Swift (iOS)

## Java

## Kotlin

## Dart (Flutter)

**Don’t see your language?**We are working on adding support for more languages. Reach out on our [Discord Community](https://discord.gg/fal-ai) and let us know which language you would like to see next.In the meantime, you can use the [REST API directly](https://docs.fal.ai/model-apis/model-endpoints).

## [​](https://docs.fal.ai/model-apis/client\#installation)  Installation

First, add the client as a dependency in your project:

npm

yarn

pnpm

bun

pip

Flutter

Swift Package

Gradle (Java)

Maven (Java)

Gradle (Kotlin)

Maven (Kotlin)

Report incorrect code

Copy

Ask AI

```
npm install --save @fal-ai/client
```

**Java Async Support**If your code relies on asynchronous operations via `CompletableFuture` or `Future`, you can use the `ai.fal.client:fal-client-async` artifact instead, which contains the necessary APIs for asynchronous programming.

## [​](https://docs.fal.ai/model-apis/client\#features)  Features

### [​](https://docs.fal.ai/model-apis/client\#1-call-an-endpoint)  1\. Call an endpoint

Endpoints requests are managed by a queue system. This allows fal to provide a reliable and scalable service.The `subscribe` method allows you to submit a request to the queue and wait for the result.

JavaScript/TypeScript

Python

Python (async)

Swift

Java

Kotlin

Dart (Flutter)

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

const result = await fal.subscribe("fal-ai/flux/dev", {
  input: {
    prompt: "a cat",
    seed: 6252023,
    image_size: "landscape_4_3",
    num_images: 4,
  },
  logs: true,
  onQueueUpdate: (update) => {
    if (update.status === "IN_PROGRESS") {
      update.logs.map((log) => log.message).forEach(console.log);
    }
  },
  headers: { "X-Custom-Header": "value" }, // Optional: custom headers
});

console.log(result.data);
console.log(result.requestId);
```

### [​](https://docs.fal.ai/model-apis/client\#2-queue-management)  2\. Queue Management

You can manage the queue using the following methods:

#### [​](https://docs.fal.ai/model-apis/client\#submit-a-request)  Submit a Request

Submit a request to the queue using the `queue.submit` method.

JavaScript/TypeScript

Python

Python (async)

Swift

Java

Kotlin

Dart (Flutter)

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

const { request_id } = await fal.queue.submit("fal-ai/flux/dev", {
  input: {
    prompt: "a cat",
    seed: 6252023,
    image_size: "landscape_4_3",
    num_images: 4,
  },
  webhookUrl: "https://optional.webhook.url/for/results",
  headers: { "X-Custom-Header": "value" }, // Optional: custom headers
});
```

This is useful when you want to submit a request to the queue and retrieve the result later. You can save the `request_id` and use it to retrieve the result later.

**Webhooks**For long-running requests, such as **training jobs**, you can use webhooks to receive the result asynchronously. You can specify the webhook URL when submitting a request.

**Custom Headers**Both `submit` and `subscribe` methods support an optional `headers` parameter that allows you to pass custom HTTP headers with your request. This can be useful for adding custom metadata, tracking information, or other request-specific headers.

TypeScript

Python

Report incorrect code

Copy

Ask AI

```
headers: { "X-Custom-Header": "value", "X-Request-ID": "12345" }
```

You can also use the `X-Fal-Object-Lifecycle-Preference` header to control how long images and other objects generated by your request remain available:

TypeScript

Python

Report incorrect code

Copy

Ask AI

```
headers: { "X-Fal-Object-Lifecycle-Preference": JSON.stringify({ expiration_duration_seconds: 3600 }) }
```

#### [​](https://docs.fal.ai/model-apis/client\#check-request-status)  Check Request Status

Retrieve the status of a specific request in the queue:

JavaScript/TypeScript

Python

Python (async)

Swift

Java

Kotlin

Dart (Flutter)

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

const status = await fal.queue.status("fal-ai/flux/dev", {
  requestId: "764cabcf-b745-4b3e-ae38-1200304cf45b",
  logs: true,
});
```

#### [​](https://docs.fal.ai/model-apis/client\#retrieve-request-result)  Retrieve Request Result

Get the result of a specific request from the queue:

JavaScript/TypeScript

Python

Python (async)

Swift

Java

Kotlin

Dart (Flutter)

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

const result = await fal.queue.result("fal-ai/flux/dev", {
  requestId: "764cabcf-b745-4b3e-ae38-1200304cf45b",
});

console.log(result.data);
console.log(result.requestId);
```

### [​](https://docs.fal.ai/model-apis/client\#3-file-uploads)  3\. File Uploads

Some endpoints require files as input. However, since the endpoints run asynchronously, processed by the queue, you will need to provide URLs to the files instead of the actual file content.Luckily, the client library provides a way to upload files to the server and get a URL to use in the request.

JavaScript/TypeScript

Python

Python (async)

Swift

Java

Kotlin

Dart (Flutter)

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

const file = new File(["Hello, World!"], "hello.txt", { type: "text/plain" });
const url = await fal.storage.upload(file);
```

### [​](https://docs.fal.ai/model-apis/client\#4-streaming)  4\. Streaming

Some endpoints support streaming, which delivers progressive results (like image previews or video updates) as they’re generated:

**Streaming vs Realtime:** Both enable real-time communication but serve different purposes:

- **Streaming (SSE)**: One-way, server → client. Best for progressive output like image generation previews or video updates.
- **Realtime (WebSocket)**: Bidirectional, persistent connection. Best for interactive apps with back-to-back requests.

See [Section 5](https://docs.fal.ai/model-apis/client#5-realtime-communication) for realtime communication.

**Endpoint Path**The `stream()` function automatically appends `/stream` to the endpoint ID. For example, `fal.stream("fal-ai/flux/dev", ...)` connects to `https://fal.run/fal-ai/flux/dev/stream`.If you’re building your own streaming endpoint, you must define it at the `/stream` path using `@fal.endpoint("/stream")`. See the [Streaming Endpoints guide](https://docs.fal.ai/serverless/development/streaming) for details.

Endpoints that support streaming:

JavaScript/TypeScript

Python

Python (async)

Swift

Java

Kotlin

Dart (Flutter)

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

const stream = await fal.stream("fal-ai/flux/dev", {
  input: {
    prompt: "a cat",
    seed: 6252023,
    image_size: "landscape_4_3",
    num_images: 4,
  },
});

for await (const event of stream) {
  console.log(event);
}

const result = await stream.done();
```

### [​](https://docs.fal.ai/model-apis/client\#5-realtime-communication)  5\. Realtime Communication

For the endpoints that support real-time inference via WebSockets, you can use the realtime client that abstracts the WebSocket connection, re-connection, serialization, and provides a simple interface to interact with the endpoint:

The realtime client connects to a `/realtime` endpoint path on the model. Only models that explicitly support realtime inference (like `fal-ai/fast-lcm-diffusion`) can be used. Standard queue-based models do not have a realtime endpoint.

JavaScript/TypeScript

Python

Python (async)

Swift

Java

Kotlin

Dart (Flutter)

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

const connection = fal.realtime.connect("fal-ai/fast-lcm-diffusion", {
  onResult: (result) => {
    console.log(result);
  },
  onError: (error) => {
    console.error(error);
  },
});

connection.send({
  prompt: "a cat",
  sync_mode: true,
});
```

The realtime client uses msgpack for binary serialization across all SDKs. The `realtime()` / `realtime_async()` methods in Python provide a `RealtimeConnection` with `send()` and `recv()` methods, while JavaScript uses callback-based `onResult` and `onError` handlers.**When to use Realtime vs Streaming:**

- Use `realtime()` for interactive apps where you send multiple requests over a persistent WebSocket connection (e.g., `fal-ai/fast-lcm-diffusion` for low-latency image generation).
- Use `stream()` for receiving progressive output from a single request (e.g., `fal-ai/flux/dev/stream` for image generation previews).

### [​](https://docs.fal.ai/model-apis/client\#6-run)  6\. Run

The endpoints can also be called directly instead of using the queue system.

**Prefer the queue**We **do not recommend** this use most use cases as it will block the client
until the response is received. Moreover, if the connection is closed before
the response is received, the request will be lost.

JavaScript/TypeScript

Python

Python (async)

Swift

Java

Kotlin

Dart (Flutter)

Report incorrect code

Copy

Ask AI

```
import { fal } from "@fal-ai/client";

const result = await fal.run("fal-ai/flux/dev", {
  input: {
    prompt: "a cat",
    seed: 6252023,
    image_size: "landscape_4_3",
    num_images: 4,
  },
});

console.log(result.data);
console.log(result.requestId);
```

## [​](https://docs.fal.ai/model-apis/client\#api-references)  API References

For a complete list of available methods and their parameters, please refer to the language-specific API Reference documentation:

- [JavaScript/TypeScript API Reference](https://fal-ai.github.io/fal-js/reference)
- [Python API Reference](https://fal-ai.github.io/fal/client)
- [Swift (iOS) API Reference](https://swiftpackageindex.com/fal-ai/fal-swift/documentation/falclient)
- [Java API Reference](https://fal-ai.github.io/fal-java/fal-client/index.html)
- [Kotlin API Reference](https://fal-ai.github.io/fal-java/fal-client-kotlin/fal-client-kotlin/ai.fal.client.kt/index.html)
- [Dart (Flutter) API Reference](https://pub.dev/documentation/fal_client/latest)

## [​](https://docs.fal.ai/model-apis/client\#examples)  Examples

Check out some of the examples below to see real-world use cases of the client libraries:

- **JavaScript**: See `fal.realtime` in action with SDXL Lightning: [https://github.com/fal-ai/sdxl-lightning-demo-app](https://github.com/fal-ai/sdxl-lightning-demo-app)
- **Dart (Flutter)**: Simple Flutter app using fal image inference: [https://pub.dev/packages/fal\_client/example](https://pub.dev/packages/fal_client/example)

## [​](https://docs.fal.ai/model-apis/client\#migration-guide)  Migration Guide

### [​](https://docs.fal.ai/model-apis/client\#javascript:-migrating-from-serverless-client-to-client)  JavaScript: Migrating from `serverless-client` to `client`

As fal no longer uses “serverless” as part of the AI provider branding, we also made sure that’s reflected in our libraries. However, that’s not the only thing that changed in the new client. There was lot’s of improvements that happened thanks to our community feedback.So, if you were using the `@fal-ai/serverless-client` package, you can upgrade to the new `@fal-ai/client` package by following these steps:

1

Remove the `@fal-ai/serverless-client` package from your project:

Report incorrect code

Copy

Ask AI

```
npm uninstall @fal-ai/serverless-client
```

2

Install the new `@fal-ai/client` package:

Report incorrect code

Copy

Ask AI

```
npm install --save @fal-ai/client
```

3

Update your imports:

Report incorrect code

Copy

Ask AI

```
import * as fal from "@fal-ai/serverless-client";
import { fal } from "@fal-ai/client";
```

4

Now APIs return a `Result<Output>` type that contains the `data` which is the API output and the `requestId`. This is a breaking change from the previous version, that allows us to return extra data to the caller without future breaking changes.

Report incorrect code

Copy

Ask AI

```
const data = fal.subscribe(endpointId, { input });
const { data, requestId } = fal.subscribe(endpointId, { input });
```

**Note**The `fal` object is now a named export from the package that represents a singleton instance of the `FalClient` and was added to make it as easy as possible to migrate from the old singleton-only client. However, starting in `1.0.0` you can create multiple instances of the `FalClient` with the `createFalClient` function.

## [​](https://docs.fal.ai/model-apis/client\#support)  Support

If you encounter any issues or have questions, please:

- Visit the respective GitHub repositories:
  - [JavaScript/TypeScript](https://github.com/fal-ai/fal-js)
  - [Python](https://github.com/fal-ai/fal)
  - [Swift](https://github.com/fal-ai/fal-swift)
  - [Java/Kotlin](https://github.com/fal-ai/fal-java)
  - [Dart (Flutter)](https://github.com/fal-ai/fal-dart)
- Join our [Discord Community](https://discord.gg/fal-ai)

Was this page helpful?

YesNo

[Workflow endpoints API \| fal.ai Reference\\
\\
Previous](https://docs.fal.ai/model-apis/model-endpoints/workflows) [Authentication Authentication \| fal.ai Model APIs Docs\\
\\
Next](https://docs.fal.ai/model-apis/authentication)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)