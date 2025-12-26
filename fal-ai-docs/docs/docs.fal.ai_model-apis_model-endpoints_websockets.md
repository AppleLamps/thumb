---
url: "https://docs.fal.ai/model-apis/model-endpoints/websockets"
title: "HTTP over WebSockets API | fal.ai Reference - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/model-endpoints/websockets#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Models Endpoints

HTTP over WebSockets API \| fal.ai Reference

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

- [WebSocket Endpoint](https://docs.fal.ai/model-apis/model-endpoints/websockets#websocket-endpoint)
- [Communication Protocol](https://docs.fal.ai/model-apis/model-endpoints/websockets#communication-protocol)
- [Example Interaction](https://docs.fal.ai/model-apis/model-endpoints/websockets#example-interaction)
- [Example Program](https://docs.fal.ai/model-apis/model-endpoints/websockets#example-program)
- [Example Program with Stream](https://docs.fal.ai/model-apis/model-endpoints/websockets#example-program-with-stream)

### [​](https://docs.fal.ai/model-apis/model-endpoints/websockets\#websocket-endpoint)  WebSocket Endpoint

To utilize the WebSocket functionality, use the `wss` protocol with the the `ws.fal.run` domain:

Report incorrect code

Copy

Ask AI

```
wss://ws.fal.run/{model_id}
```

### [​](https://docs.fal.ai/model-apis/model-endpoints/websockets\#communication-protocol)  Communication Protocol

Once connected, the communication follows a specific protocol with JSON messages for control flow and raw data for the actual response stream:

1. **Payload Message:** Send a JSON message containing the payload for your application. This is equivalent to the request body you would send to the HTTP endpoint.
2. **Start Metadata:** Receive a JSON message containing the HTTP response headers from your application. This allows you to understand the type and structure of the incoming response stream.
3. **Response Stream:** Receive the actual response data as a sequence of messages. These can be binary chunks for media content or a JSON object for structured data, depending on the `Content-Type` header.
4. **End Metadata:** Receive a final JSON message indicating the end of the response stream. This signals that the request has been fully processed and the next payload will be processed.

### [​](https://docs.fal.ai/model-apis/model-endpoints/websockets\#example-interaction)  Example Interaction

Here’s an example of a typical interaction with the WebSocket API:**Client Sends (Payload Message):**

Report incorrect code

Copy

Ask AI

```
{"prompt": "generate a 10-second audio clip of a cat purring"}
```

**Server Responds (Start Metadata):**

Report incorrect code

Copy

Ask AI

```
{
  "type": "start",
  "request_id": "5d76da89-5d75-4887-a715-4302bf435614",
  "status": 200,
  "headers": {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Transfer-Encoding": "chunked",
    // ...
  }
}
```

**Server Sends (Response Stream):**

Report incorrect code

Copy

Ask AI

```
<binary audio data chunk 1>
<binary audio data chunk 2>
...
<binary audio data chunk N>
```

**Server Sends (Completion Message):**

Report incorrect code

Copy

Ask AI

```
{
  "type": "end",
  "request_id": "5d76da89-5d75-4887-a715-4302bf435614",
  "status": 200,
  "time_to_first_byte_seconds": 0.577083
}
```

**Benefits of WebSockets**

- **Real-time Updates:** Ideal for applications that require immediate feedback, such as interactive AI models or live data visualization.
- **Efficient Data Transfer:** Enables streaming large data volumes without the overhead of multiple HTTP requests.
- **Persistent Connection:** Reduces latency and improves performance by maintaining an open connection throughout the interaction.

This WebSocket integration provides a powerful mechanism for building dynamic and responsive AI applications on the fal platform. By leveraging the streaming capabilities, you can unlock new possibilities for creative and interactive user experiences.

### [​](https://docs.fal.ai/model-apis/model-endpoints/websockets\#example-program)  Example Program

For instance, should you want to make fast prompts to any LLM, you can use `fal-ai/any-llm`.

Report incorrect code

Copy

Ask AI

```
import fal.apps

with fal.apps.ws("fal-ai/any-llm") as connection:
    for i in range(3):
        connection.send(
            {
                "model": "google/gemini-flash-1.5",
                "prompt": f"What is the meaning of life? Respond in {i} words.",
            }
        )

    # they should be in order
    for i in range(3):
        import json

        response = json.loads(connection.recv())
        print(response)
```

And running this program would output:

Report incorrect code

Copy

Ask AI

```
{'output': '(Silence)\n', 'partial': False, 'error': None}
{'output': 'Growth\n', 'partial': False, 'error': None}
{'output': 'Personal fulfillment.\n', 'partial': False, 'error': None}
```

### [​](https://docs.fal.ai/model-apis/model-endpoints/websockets\#example-program-with-stream)  Example Program with Stream

The `fal-ai/any-llm/stream` model is a streaming model that can generate text in real-time. Here’s an example of how you can use it:

Report incorrect code

Copy

Ask AI

```
with fal.apps.ws("fal-ai/any-llm/stream") as connection:
    # NOTE: this app responds in 'text/event-stream' format
    # For example:
    #
    #    event: event
    #    data: {"output": "Growth", "partial": true, "error": null}

    for i in range(3):
        connection.send(
            {
                "model": "google/gemini-flash-1.5",
                "prompt": f"What is the meaning of life? Respond in {i+1} words.",
            }
        )

    for i in range(3):
        for bs in connection.stream():
            lines = bs.decode().replace("\r\n", "\n").split("\n")

            event = {}
            for line in lines:
                if not line:
                    continue
                key, value = line.split(":", 1)
                event[key] = value.strip()

            print(event["data"])

        print("----")
```

And running this program would output:

Report incorrect code

Copy

Ask AI

```
{"output": "Perspective", "partial": true, "error": null}
{"output": "Perspective.\n", "partial": true, "error": null}
{"output": "Perspective.\n", "partial": true, "error": null}
{"output": "Perspective.\n", "partial": false, "error": null}
----
{"output": "Find", "partial": true, "error": null}
{"output": "Find meaning.\n", "partial": true, "error": null}
{"output": "Find meaning.\n", "partial": true, "error": null}
{"output": "Find meaning.\n", "partial": false, "error": null}
----
{"output": "Be", "partial": true, "error": null}
{"output": "Be, love, grow.\n", "partial": true, "error": null}
{"output": "Be, love, grow.\n", "partial": true, "error": null}
{"output": "Be, love, grow.\n", "partial": false, "error": null}
----
```

Was this page helpful?

YesNo

[Synchronous Requests API \| fal.ai Reference\\
\\
Previous](https://docs.fal.ai/model-apis/model-endpoints/synchronous-requests) [Server-side integration API \| fal.ai Reference\\
\\
Next](https://docs.fal.ai/model-apis/model-endpoints/server-side)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)