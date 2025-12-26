---
url: "https://docs.fal.ai/model-apis/guides/n8n"
title: "Using fal within an n8n workflow - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/guides/n8n#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Guides

Using fal within an n8n workflow

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

- [Prerequisites](https://docs.fal.ai/model-apis/guides/n8n#prerequisites)
- [Workflow Overview](https://docs.fal.ai/model-apis/guides/n8n#workflow-overview)
- [Step 1: Create Your Workflow](https://docs.fal.ai/model-apis/guides/n8n#step-1%3A-create-your-workflow)
- [Step 2: Submit Request (POST)](https://docs.fal.ai/model-apis/guides/n8n#step-2%3A-submit-request-post)
- [Add HTTP Request Node](https://docs.fal.ai/model-apis/guides/n8n#add-http-request-node)
- [Configure the URL](https://docs.fal.ai/model-apis/guides/n8n#configure-the-url)
- [Set Up Authentication](https://docs.fal.ai/model-apis/guides/n8n#set-up-authentication)
- [Configure Request Body](https://docs.fal.ai/model-apis/guides/n8n#configure-request-body)
- [Execute the Node](https://docs.fal.ai/model-apis/guides/n8n#execute-the-node)
- [Step 3: Check Status (GET)](https://docs.fal.ai/model-apis/guides/n8n#step-3%3A-check-status-get)
- [Add Second HTTP Request Node](https://docs.fal.ai/model-apis/guides/n8n#add-second-http-request-node)
- [Configure Status Check URL](https://docs.fal.ai/model-apis/guides/n8n#configure-status-check-url)
- [Set Authentication](https://docs.fal.ai/model-apis/guides/n8n#set-authentication)
- [Execute the Node](https://docs.fal.ai/model-apis/guides/n8n#execute-the-node-2)
- [Step 4: Retrieve Result (GET)](https://docs.fal.ai/model-apis/guides/n8n#step-4%3A-retrieve-result-get)
- [Add Third HTTP Request Node](https://docs.fal.ai/model-apis/guides/n8n#add-third-http-request-node)
- [Configure Result URL](https://docs.fal.ai/model-apis/guides/n8n#configure-result-url)
- [Set Authentication](https://docs.fal.ai/model-apis/guides/n8n#set-authentication-2)
- [Execute the Node](https://docs.fal.ai/model-apis/guides/n8n#execute-the-node-3)
- [Testing Your Workflow](https://docs.fal.ai/model-apis/guides/n8n#testing-your-workflow)
- [Best Practices](https://docs.fal.ai/model-apis/guides/n8n#best-practices)
- [Troubleshooting](https://docs.fal.ai/model-apis/guides/n8n#troubleshooting)
- [Next Steps](https://docs.fal.ai/model-apis/guides/n8n#next-steps)

## [​](https://docs.fal.ai/model-apis/guides/n8n\#prerequisites)  Prerequisites

- An n8n account ( [https://n8n.io/](https://n8n.io/))
- A fal account ( [https://fal.ai/dashboard](https://fal.ai/dashboard))
- A fal API key (generated from your account dashboard)

## [​](https://docs.fal.ai/model-apis/guides/n8n\#workflow-overview)  Workflow Overview

This n8n workflow consists of three main HTTP requests:

1

Submit Request

Send a POST request to initiate content generation

2

Check Status

Poll the status of your request using GET

3

Retrieve Result

Fetch the final generated content

## [​](https://docs.fal.ai/model-apis/guides/n8n\#step-1:-create-your-workflow)  Step 1: Create Your Workflow

1

In n8n, create a new workflow

2

Start with a **Manual Trigger** node to initiate the workflow manually

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/01.webp?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=86505fc90245b94c09161f2a1762d388)

## [​](https://docs.fal.ai/model-apis/guides/n8n\#step-2:-submit-request-post)  Step 2: Submit Request (POST)

### [​](https://docs.fal.ai/model-apis/guides/n8n\#add-http-request-node)  Add HTTP Request Node

1

Add an **HTTP Request** node after your trigger

2

Set the **Method** to `POST`

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/02.webp?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=cd7de677bed6fd24446726e7fdfd5999)

### [​](https://docs.fal.ai/model-apis/guides/n8n\#configure-the-url)  Configure the URL

1

Navigate to [fal.ai](https://fal.ai/dashboard) and select your desired model (e.g., `fal-ai/veo3/fast`)

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/03.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=3f36e5adf0e0359186dc049e83546101)

2

Click on the **API** tab, select “HTTP (cURL)” and “Submit a request”. Copy and save the URL and data JSON as those will be needed for later.

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/04.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=c9b0c680a03dd7291a1457743c8ebb62)

3

Copy the URL (e.g., `https://queue.fal.run/fal-ai/veo3/fast`) and paste it into the URL field in n8n

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/05.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=c1d3192e62f6b9d6868d2ae32e4004dd)

### [​](https://docs.fal.ai/model-apis/guides/n8n\#set-up-authentication)  Set Up Authentication

1

Navigate to [fal.ai API Keys](https://fal.ai/dashboard/keys), create a new key and copy its value.

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/06.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=d2104fe703ca052d8123a24e5f2a85df)

2

Back in n8n, in the **Authentication** section, select **Generic Credential Type**

3

Choose **Header Auth** from the dropdown

4

Click **\+ Create new credential**

5

Set:

- **Name**: `Authorization`
- **Value**: `Key YOUR_FAL_KEY`

6

Save the credential and close

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/07.webp?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=7dc459c9cb98b714d5faa0e7950ae1dc)

### [​](https://docs.fal.ai/model-apis/guides/n8n\#configure-request-body)  Configure Request Body

1

Toggle **Send Body** to `ON`

2

Set **Body Content Type** to `JSON`

3

Choose **Specify Body** as `USING JSON`

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/08.webp?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=5fc79b5a0908e101aafa7fd35b5d476f)

4

In fal, go again to the model page, select **JSON** from dropdown and copy the payload

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/09.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=6e0c82d5d7c580e9aa49ec9e8ea66ada)

5

Copy the JSON payload and paste it into n8n’s JSON text box

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/10.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=ad419e143400976fa0a08921b391c968)

### [​](https://docs.fal.ai/model-apis/guides/n8n\#execute-the-node)  Execute the Node

1

Click **Execute Node** to test the request. You should receive a response with a request ID.

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/11.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=c8cdd5bb3f4083774e498441e820dbd9)

## [​](https://docs.fal.ai/model-apis/guides/n8n\#step-3:-check-status-get)  Step 3: Check Status (GET)

### [​](https://docs.fal.ai/model-apis/guides/n8n\#add-second-http-request-node)  Add Second HTTP Request Node

1

Click on the first HTTP Request node and add another **HTTP Request** node

2

Set the **Method** to `GET`

### [​](https://docs.fal.ai/model-apis/guides/n8n\#configure-status-check-url)  Configure Status Check URL

1

In fal, go to your model’s **API** section and find the **GET** URL for status checking

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/12.png?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=d8963881f4ac744d8e40644115f0aeaa)

2

Copy this URL and paste it into the URL field

3

You’ll need to replace the request ID from the previous step on this URL, with `{{ $json.request_id }}`

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/13.webp?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=ded90911ad1c72b9f3dd21e580dfdf63)

### [​](https://docs.fal.ai/model-apis/guides/n8n\#set-authentication)  Set Authentication

1

Use the same **Header Auth** credential created earlier

2

Select your existing **Authorization** credential

### [​](https://docs.fal.ai/model-apis/guides/n8n\#execute-the-node-2)  Execute the Node

1. This will check the status of your generation request.

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/14.webp?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=80f6186759e48b38a2512042c4fa2c79)

## [​](https://docs.fal.ai/model-apis/guides/n8n\#step-4:-retrieve-result-get)  Step 4: Retrieve Result (GET)

### [​](https://docs.fal.ai/model-apis/guides/n8n\#add-third-http-request-node)  Add Third HTTP Request Node

1. Add a final **HTTP Request** node
2. Set the **Method** to `GET`

### [​](https://docs.fal.ai/model-apis/guides/n8n\#configure-result-url)  Configure Result URL

1. Use the result URL provided in the status response by setting the URL to `{{ $json.request_url }}`

### [​](https://docs.fal.ai/model-apis/guides/n8n\#set-authentication-2)  Set Authentication

1. Use the same **Header Auth** credential

### [​](https://docs.fal.ai/model-apis/guides/n8n\#execute-the-node-3)  Execute the Node

This will retrieve your final generated content.

## [​](https://docs.fal.ai/model-apis/guides/n8n\#testing-your-workflow)  Testing Your Workflow

1

Save your workflow

2

Click **Execute Workflow** to run the complete process

3

Monitor each node to ensure successful execution

4

Check the final node output for your generated content

## [​](https://docs.fal.ai/model-apis/guides/n8n\#best-practices)  Best Practices

- **Error Handling**: Add error handling nodes to manage failed requests
- **Delays**: Consider adding **Wait** nodes between status checks to avoid overwhelming the API
- **Conditional Logic**: Use **IF** nodes to check status before proceeding to result retrieval
- **Data Transformation**: Use **Set** nodes to extract and format specific data from responses

## [​](https://docs.fal.ai/model-apis/guides/n8n\#troubleshooting)  Troubleshooting

- **401 Unauthorized**: Check that your API key is correctly set in the authentication header
- **Request ID Missing**: Ensure the first POST request completed successfully and returned a request ID
- **Status Still Processing**: Add appropriate delays between status checks
- **Invalid JSON**: Verify your JSON payload matches the model’s expected format

## [​](https://docs.fal.ai/model-apis/guides/n8n\#next-steps)  Next Steps

Once you have a working workflow, you can:

- Connect it to external triggers (webhooks, schedules, etc.)
- Integrate with other services in your n8n workflow
- Add data processing and transformation steps
- Set up notifications for completed generations

Was this page helpful?

YesNo

[Custom Workflow UI Tutorial\\
\\
Previous](https://docs.fal.ai/model-apis/guides/custom-workflow-ui) [Fastest FLUX Endpoint\\
\\
Next](https://docs.fal.ai/model-apis/fast-flux)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/03.png?w=840&fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=c61b6ceb2aa6d7529d4a15546922f8c5)

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/04.png?w=840&fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b245b8fdf7e4ecda70c115e326f1c57f)

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/05.png?w=840&fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=1437aafb58d10c8d116602a442358e27)

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/06.png?w=840&fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=c06b134389d7238174e83910c8e8f97c)

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/09.png?w=840&fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=f2073a2b459b4aa900852d091565fd37)

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/10.png?w=840&fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=51b966c9938322c6fa062eb14d71fd18)

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/11.png?w=840&fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=2054f586e71ea51216b21ef58a5433d0)

![](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/images/n8n/12.png?w=840&fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=6bd21c85bfe9aa7edc7938ea85dabce5)