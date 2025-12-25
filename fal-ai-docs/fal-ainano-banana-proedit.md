2. [Home](https://fal.ai/)
4. [Explore](https://fal.ai/models)
6. fal-ai/nano-banana-pro/edit

[Docs](https://docs.fal.ai/) [Blog](https://blog.fal.ai/) [Pricing](https://fal.ai/pricing) [Enterprise](https://fal.ai/enterprise) [Careers](https://fal.ai/careers) [Research Grants](https://fal.ai/grants)

[Log-in](https://fal.ai/login?returnTo=/models/fal-ai/nano-banana-pro/edit/api) [Sign-up](https://fal.ai/login?returnTo=/models/fal-ai/nano-banana-pro/edit/api)

1. [Back to Gallery](https://fal.ai/models)

# Nano Banana Pro Image to Image

fal-ai/nano-banana-pro/edit

Image Editing

Nano Banana Pro (a.k.a Nano Banana 2) is Google's new state-of-the-art image generation and editing model

Inference

Commercial use

Partner

[Schema](https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=fal-ai/nano-banana-pro/edit)

[LLMs](https://fal.ai/models/fal-ai/nano-banana-pro/edit/llms.txt)

[Playground](https://fal.ai/models/fal-ai/nano-banana-pro/edit/playground) [API](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api)

### Table of contents

JavaScript / Node.js

[**1\. Calling the API**](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#api-call)

- [Install the client](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#api-call-install)
- [Setup your API Key](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#api-call-setup)
- [Submit a request](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#api-call-submit-request)

[**2\. Authentication**](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#auth)

- [API Key](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#auth-api-key)

[**3\. Queue**](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#queue)

- [Submit a request](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#queue-submit)
- [Fetch request status](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#queue-status)
- [Get the result](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#queue-result)

[**4\. Files**](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#files)

- [Data URI (base64)](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#files-data-uri)
- [Hosted files (URL)](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#files-from-url)
- [Uploading files](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#files-upload)

[**5\. Schema**](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#schema)

- [Input](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#schema-input)
- [Output](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#schema-output)
- [Other](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#schema-other)

### About

Gemini 3 Pro Image is a text-to-image model that generates images from text descriptions.

### 1\. Calling the API [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#api-call-install)

### Install the client [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#api-call-install)

The client provides a convenient way to interact with the model API.

npmyarnpnpmbun

```
npm install --save @fal-ai/client
```

##### Migrate to @fal-ai/client

The `@fal-ai/serverless-client` package has been deprecated in favor of `@fal-ai/client`. Please check the [migration guide](https://docs.fal.ai/clients/javascript#migration-from-serverless-client-to-client) for more information.

### Setup your API Key [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#api-call-setup)

Set `FAL_KEY` as an environment variable in your runtime.

```
export FAL_KEY="YOUR_API_KEY"
```

### Submit a request [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#api-call-submit-request)

The client API handles the API submit protocol. It will handle the request status updates and return the result when the request is completed.

```
import { fal } from "@fal-ai/client";

const result = await fal.subscribe("fal-ai/nano-banana-pro/edit", {
  input: {
    prompt: "make a photo of the man driving the car down the california coastline",
    image_urls: ["https://storage.googleapis.com/falserverless/example_inputs/nano-banana-edit-input.png", "https://storage.googleapis.com/falserverless/example_inputs/nano-banana-edit-input-2.png"]
  },
  logs: true,
  onQueueUpdate: (update) => {
    if (update.status === "IN_PROGRESS") {
      update.logs.map((log) => log.message).forEach(console.log);
    }
  },
});
console.log(result.data);
console.log(result.requestId);
```

## 2\. Authentication [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#auth)

The API uses an API Key for authentication. It is recommended you set the `FAL_KEY` environment variable in your runtime when possible.

### API Key [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#auth-api-key)

In case your app is running in an environment where you cannot set environment variables, you can set the API Key manually as a client configuration.

```
import { fal } from "@fal-ai/client";

fal.config({
  credentials: "YOUR_FAL_KEY"
});
```

##### Protect your API Key

When running code on the client-side (e.g. in a browser, mobile app or GUI applications), make sure to not expose your `FAL_KEY`. Instead, **use a server-side proxy** to make requests to the API. For more information, check out our [server-side integration guide](https://docs.fal.ai/model-endpoints/server-side).

## 3\. Queue [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#queue)

##### Long-running requests

For long-running requests, such as _training_ jobs or models with slower inference times, it is recommended to check the [Queue](https://docs.fal.ai/model-endpoints/queue) status and rely on [Webhooks](https://docs.fal.ai/model-endpoints/webhooks) instead of blocking while waiting for the result.

### Submit a request [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#queue-submit)

The client API provides a convenient way to submit requests to the model.

```
import { fal } from "@fal-ai/client";

const { request_id } = await fal.queue.submit("fal-ai/nano-banana-pro/edit", {
  input: {
    prompt: "make a photo of the man driving the car down the california coastline",
    image_urls: ["https://storage.googleapis.com/falserverless/example_inputs/nano-banana-edit-input.png", "https://storage.googleapis.com/falserverless/example_inputs/nano-banana-edit-input-2.png"]
  },
  webhookUrl: "https://optional.webhook.url/for/results",
});
```

### Fetch request status [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#queue-status)

You can fetch the status of a request to check if it is completed or still in progress.

```
import { fal } from "@fal-ai/client";

const status = await fal.queue.status("fal-ai/nano-banana-pro/edit", {
  requestId: "764cabcf-b745-4b3e-ae38-1200304cf45b",
  logs: true,
});
```

### Get the result [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#queue-result)

Once the request is completed, you can fetch the result. See the [Output Schema](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api#schema-output) for the expected result format.

```
import { fal } from "@fal-ai/client";

const result = await fal.queue.result("fal-ai/nano-banana-pro/edit", {
  requestId: "764cabcf-b745-4b3e-ae38-1200304cf45b"
});
console.log(result.data);
console.log(result.requestId);
```

## 4\. Files [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#files)

Some attributes in the API accept file URLs as input. Whenever that's the case you can pass your own URL or a Base64 data URI.

### Data URI (base64) [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#files-data-uri)

You can pass a Base64 data URI as a file input. The API will handle the file decoding for you. Keep in mind that for large files, this alternative although convenient can impact the request performance.

### Hosted files (URL) [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#files-from-url)

You can also pass your own URLs as long as they are publicly accessible. Be aware that some hosts might block cross-site requests, rate-limit, or consider the request as a bot.

### Uploading files [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#files-upload)

We provide a convenient file storage that allows you to upload files and use them in your requests. You can upload files using the client API and use the returned URL in your requests.

```
import { fal } from "@fal-ai/client";

const file = new File(["Hello, World!"], "hello.txt", { type: "text/plain" });
const url = await fal.storage.upload(file);
```

##### Auto uploads

The client will auto-upload the file for you if you pass a binary object (e.g. `File`, `Data`).

Read more about file handling in our [file upload guide](https://docs.fal.ai/model-endpoints#file-uploads).

## 5\. Schema [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#schema)

### Input [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#schema-input)

`prompt``string`\\* required

The prompt for image editing.

`num_images``integer`

The number of images to generate. Default value: `1`

`aspect_ratio``AspectRatioEnum`

The aspect ratio of the generated image. Default value: `"auto"`

Possible enum values:`auto, 21:9, 16:9, 3:2, 4:3, 5:4, 1:1, 4:5, 3:4, 2:3, 9:16`

`output_format``OutputFormatEnum`

The format of the generated image. Default value: `"png"`

Possible enum values:`jpeg, png, webp`

`sync_mode``boolean`

If `True`, the media will be returned as a data URI and the output data won't be available in the request history.

`image_urls``list<string>`\\* required

The URLs of the images to use for image-to-image generation or image editing.

`resolution``ResolutionEnum`

The resolution of the image to generate. Default value: `"1K"`

Possible enum values:`1K, 2K, 4K`

`limit_generations``boolean`

Experimental parameter to limit the number of generations from each round of prompting to 1. Set to `True` to to disregard any instructions in the prompt regarding the number of images to generate.

`enable_web_search``boolean`

Enable web search for the image generation task. This will allow the model to use the latest information from the web to generate the image.

```
{
  "prompt": "make a photo of the man driving the car down the california coastline",
  "num_images": 1,
  "aspect_ratio": "auto",
  "output_format": "png",
  "image_urls": [\
    "https://storage.googleapis.com/falserverless/example_inputs/nano-banana-edit-input.png",\
    "https://storage.googleapis.com/falserverless/example_inputs/nano-banana-edit-input-2.png"\
  ],
  "resolution": "1K"
}
```

### Output [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#schema-output)

`images``list<ImageFile>`\\* required

The edited images.

`description``string`\\* required

The description of the generated images.

```
{
  "images": [\
    {\
      "file_name": "nano-banana-multi-edit-output.png",\
      "content_type": "image/png",\
      "url": "https://storage.googleapis.com/falserverless/example_outputs/nano-banana-multi-edit-output.png"\
    }\
  ],
  "description": ""
}
```

### Other types [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#schema-other)

#### ImageFile [\#](https://fal.ai/models/fal-ai/nano-banana-pro/edit/api\#type-ImageFile)

`url``string`\\* required

The URL where the file can be downloaded from.

`content_type``string`

The mime type of the file.

`file_name``string`

The name of the file. It will be auto-generated if not provided.

`file_size``integer`

The size of the file in bytes.

`file_data``string`

File data

`width``integer`

The width of the image

`height``integer`

The height of the image

## Related Models

#### Learn More

[Status](https://status.fal.ai/) [Documentation](https://docs.fal.ai/) [Pricing](https://fal.ai/pricing) [Enterprise](https://fal.ai/enterprise) [Grants](https://fal.ai/grants) [Learn](https://fal.ai/learn) [About Us](https://fal.ai/about) [Careers](https://fal.ai/careers) [Blog](https://blog.fal.ai/) [Get in touch](mailto:support@fal.ai)

Models [AuraFlow](https://fal.ai/models/fal-ai/aura-flow) [Flux.1 \[schnell\]](https://fal.ai/models/fal-ai/flux/schnell) [Flux.1 \[dev\]](https://fal.ai/models/fal-ai/flux/dev) [Flux Realism LoRA](https://fal.ai/models/fal-ai/flux-realism) [Flux LoRA](https://fal.ai/models/fal-ai/flux-lora) [Explore More](https://fal.ai/models)

#### Playgrounds

[Training](https://fal.ai/models/fal-ai/flux-lora-fast-training) [Workflows](https://fal.ai/workflows) [Demos](https://fal.ai/demos)

#### Socials

[Discord](https://discord.gg/fal-ai) [GitHub](https://github.com/fal-ai) [Reddit](https://www.reddit.com/r/fal/) [Twitter](https://twitter.com/fal) [Linkedin](https://www.linkedin.com/company/features-and-labels/)

features and labels, 2025. All Rights Reserved. [Terms of Service](https://fal.ai/terms.html) and [Privacy Policy](https://fal.ai/privacy.html)