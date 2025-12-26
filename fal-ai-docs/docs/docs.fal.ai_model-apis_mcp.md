---
url: "https://docs.fal.ai/model-apis/mcp"
title: "Connect fal to Cursor - fal"
---

[Skip to main content](https://docs.fal.ai/model-apis/mcp#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Connect fal to Cursor

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

- [Connect fal to Cursor with MCP](https://docs.fal.ai/model-apis/mcp#connect-fal-to-cursor-with-mcp)
- [Step 1: Open Command Palette](https://docs.fal.ai/model-apis/mcp#step-1%3A-open-command-palette)
- [Step 2: Search for MCP Settings](https://docs.fal.ai/model-apis/mcp#step-2%3A-search-for-mcp-settings)
- [Step 3: Add Custom MCP](https://docs.fal.ai/model-apis/mcp#step-3%3A-add-custom-mcp)
- [Step 4: Configure fal Server](https://docs.fal.ai/model-apis/mcp#step-4%3A-configure-fal-server)
- [What You Can Do With MCP](https://docs.fal.ai/model-apis/mcp#what-you-can-do-with-mcp)
- [What is MCP?](https://docs.fal.ai/model-apis/mcp#what-is-mcp)
- [Need Help?](https://docs.fal.ai/model-apis/mcp#need-help)

## [​](https://docs.fal.ai/model-apis/mcp\#connect-fal-to-cursor-with-mcp)  Connect fal to Cursor with MCP

The Model Context Protocol (MCP) enables Cursor to access the entire fal documentation and fal.ai website directly within your IDE. This supercharges your development workflow and makes migration seamless by giving you instant access to:

- **Complete documentation** \- Browse all fal docs without leaving your IDE
- **API references** \- Get real-time information about models, endpoints, and parameters
- **Code examples** \- Access working code snippets and best practices instantly
- **Contextual assistance** \- AI-powered suggestions based on fal’s complete knowledge base

Follow these simple steps to get started:

### [​](https://docs.fal.ai/model-apis/mcp\#step-1:-open-command-palette)  Step 1: Open Command Palette

On Cursor, use `Cmd+Shift+P` (`Ctrl+Shift+P` on Windows) to open up the command palette.

### [​](https://docs.fal.ai/model-apis/mcp\#step-2:-search-for-mcp-settings)  Step 2: Search for MCP Settings

Search for “Open MCP settings”.

### [​](https://docs.fal.ai/model-apis/mcp\#step-3:-add-custom-mcp)  Step 3: Add Custom MCP

Select **Add custom MCP**. This will open the `mcp.json` file.

### [​](https://docs.fal.ai/model-apis/mcp\#step-4:-configure-fal-server)  Step 4: Configure fal Server

In `mcp.json`, add the following configuration:

Report incorrect code

Copy

Ask AI

```
{
  "mcpServers": {
    "fal": {
      "url": "https://docs.fal.ai/mcp"
    }
  }
}
```

That’s it! Save the file and restart Cursor. You now have the complete fal ecosystem at your fingertips.

## [​](https://docs.fal.ai/model-apis/mcp\#what-you-can-do-with-mcp)  What You Can Do With MCP

Once connected, Cursor can:

- **Answer questions** about any fal model, API, or feature using the complete documentation
- **Generate code** with context from fal’s entire knowledge base
- **Debug faster** with instant access to error explanations and solutions
- **Migrate seamlessly** from other platforms with contextual guidance
- **Discover features** you didn’t know existed through intelligent suggestions

## [​](https://docs.fal.ai/model-apis/mcp\#what-is-mcp)  What is MCP?

Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to LLMs. By connecting Cursor to fal via MCP, you’re giving your AI assistant complete access to fal’s documentation and resources, making it an expert in all things fal.

## [​](https://docs.fal.ai/model-apis/mcp\#need-help)  Need Help?

If you encounter any issues or have questions, please visit our [support page](https://docs.fal.ai/model-apis/support) or join our [Discord community](https://discord.gg/fal-ai).

Was this page helpful?

YesNo

[Introduction to Model APIs\\
\\
Previous](https://docs.fal.ai/model-apis) [Quickstart\\
\\
Next](https://docs.fal.ai/model-apis/quickstart)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)