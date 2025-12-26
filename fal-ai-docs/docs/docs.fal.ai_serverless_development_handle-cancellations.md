---
url: "https://docs.fal.ai/serverless/development/handle-cancellations"
title: "Handle request cancellations - fal"
---

[Skip to main content](https://docs.fal.ai/serverless/development/handle-cancellations#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Development

Handle request cancellations

[![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg)Home](https://docs.fal.ai/) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg)Model APIs](https://docs.fal.ai/model-apis) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg)Serverless](https://docs.fal.ai/serverless) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg)Compute](https://docs.fal.ai/compute) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg)Platform APIs](https://docs.fal.ai/platform-apis) [Changelog](https://docs.fal.ai/changelog)

- [Status](https://status.fal.ai/)
- [Community](https://discord.gg/fal-ai)
- [Blog](https://blog.fal.ai/)

- [Introduction](https://docs.fal.ai/serverless)

- [Connect to Cursor](https://docs.fal.ai/serverless/mcp)

##### Getting Started

- [Quick Start](https://docs.fal.ai/serverless/getting-started/quick-start)
- [Deploy Your First Image Generator](https://docs.fal.ai/serverless/getting-started/deploy-your-first-image-generator)
- [Installation & Setup](https://docs.fal.ai/serverless/getting-started/installation)
- [Core Concepts](https://docs.fal.ai/serverless/getting-started/core-concepts)

##### Tutorials

- [Deploy a Text-to-Image Model](https://docs.fal.ai/serverless/tutorials/deploy-text-to-image-model)
- [Deploy a Text-to-Video Model](https://docs.fal.ai/serverless/tutorials/deploy-text-to-video-model)
- [Deploy a Text-to-Speech Model](https://docs.fal.ai/serverless/tutorials/deploy-text-to-speech-model)
- [Deploy a Text-to-Music Model](https://docs.fal.ai/serverless/tutorials/deploy-text-to-music-model)
- [Deploy a ComfyUI SDXL Turbo App](https://docs.fal.ai/serverless/tutorials/deploy-comfyui-server)
- [Deploy Multi-GPU Inference](https://docs.fal.ai/serverless/tutorials/deploy-multi-gpu-inference)
- [Deploy Models with Custom Containers](https://docs.fal.ai/serverless/tutorials/deploy-models-with-custom-containers)

##### Deployment & Operations

- [Deploy to Production](https://docs.fal.ai/serverless/deployment-operations/deploy-to-production)
- [Manage Deployments](https://docs.fal.ai/serverless/deployment-operations/manage-deployments)
- [Manage Secrets Securely](https://docs.fal.ai/serverless/deployment-operations/manage-secrets-securely)
- [Monitor Performance](https://docs.fal.ai/serverless/deployment-operations/monitor-performance)
- [Scale Your Application](https://docs.fal.ai/serverless/deployment-operations/scale-your-application)

##### Development

- [Handle Inputs and Outputs](https://docs.fal.ai/serverless/development/handle-inputs-and-outputs)
- [Download Model Weights and Files](https://docs.fal.ai/serverless/development/download-model-weights-and-files)
- [Import Code](https://docs.fal.ai/serverless/development/import-code)
- [Use Persistent Storage](https://docs.fal.ai/serverless/development/use-persistent-storage)
- [Streaming Endpoints](https://docs.fal.ai/serverless/development/streaming)
- [Realtime Endpoints](https://docs.fal.ai/serverless/development/realtime)
- [Test Models and Endpoints](https://docs.fal.ai/serverless/development/test-models-and-endpoints)
- [Use a Custom Container Image](https://docs.fal.ai/serverless/development/use-custom-container-image)
- [Handle request cancellations](https://docs.fal.ai/serverless/development/handle-cancellations)
- [Use KV Store](https://docs.fal.ai/serverless/development/use-kv-store)
- [Add Health Check Endpoint](https://docs.fal.ai/serverless/development/add-health-check-endpoint)

##### Multi-GPU Workloads

- [Overview](https://docs.fal.ai/serverless/distributed/overview)
- [Event Streaming](https://docs.fal.ai/serverless/distributed/streaming)
- [API Reference](https://docs.fal.ai/serverless/distributed/api-reference)

##### Advanced Optimizations

- [Optimize Routing Behavior](https://docs.fal.ai/serverless/optimizations/optimize-routing-behavior)
- [Optimize Model Performance](https://docs.fal.ai/serverless/optimizations/optimize-model-performance)
- [Optimize Startup with Compiled Caches](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches)
- [Optimize Container Images](https://docs.fal.ai/serverless/optimizations/optimize-container-images)

##### Migrations

- [Migrate an External Docker Server](https://docs.fal.ai/serverless/migrations/migrate-external-docker-server)
- [Migrate from Replicate](https://docs.fal.ai/serverless/migrations/migrate-from-replicate)

##### CLI Reference

- [Installation](https://docs.fal.ai/serverless/cli/installation)
- [fal auth](https://docs.fal.ai/serverless/cli/auth)
- fal apps

- [fal deploy](https://docs.fal.ai/serverless/cli/deploy)
- [fal files](https://docs.fal.ai/serverless/cli/files)
- [fal run](https://docs.fal.ai/serverless/cli/run)
- [fal queue](https://docs.fal.ai/serverless/cli/queue)
- [fal keys](https://docs.fal.ai/serverless/cli/keys)
- [fal profile](https://docs.fal.ai/serverless/cli/profile)
- [fal secrets](https://docs.fal.ai/serverless/cli/secrets)
- [fal doctor](https://docs.fal.ai/serverless/cli/doctor)
- [fal create](https://docs.fal.ai/serverless/cli/create)
- [fal runners](https://docs.fal.ai/serverless/cli/runners)

##### Python SDK

- [fal.App Class Reference](https://docs.fal.ai/serverless/python/fal-app-reference)
- [fal.api.SyncServerlessClient](https://docs.fal.ai/serverless/python/client)
- [Python SDK API Reference](https://docs.fal.ai/serverless/python/api-reference)

##### API Reference

- [Platform APIs for Serverless](https://docs.fal.ai/serverless/platform-apis)

On this page

- [Handling cancellations](https://docs.fal.ai/serverless/development/handle-cancellations#handling-cancellations)
- [Example](https://docs.fal.ai/serverless/development/handle-cancellations#example)

## [​](https://docs.fal.ai/serverless/development/handle-cancellations\#handling-cancellations)  Handling cancellations

A cancellation is received in the same endpoint that is processing the request with a `/cancel` suffix.So for the endpoint `/predict` you will receive a request to `/predict/cancel`.Request id are passed in the `x-fal-request-id` header for both the request and the cancellation.

## [​](https://docs.fal.ai/serverless/development/handle-cancellations\#example)  Example

Report incorrect code

Copy

Ask AI

```
import asyncio

import fal
from fal.exceptions import RequestCancelledException
import fastapi
from pydantic import BaseModel

class HelloInput(BaseModel):
    name: str

class MyApp(fal.App):
    _tasks: dict[str, asyncio.Task] = {}

    async def _predict(self, input: HelloInput):
        await asyncio.sleep(10)
        return "Hello, " + input.name

    @fal.endpoint("/predict")
    async def predict(
        self,
        input: HelloInput,
        x_fal_request_id: str | None = fastapi.Header(None),
    ):
        if not x_fal_request_id:
            raise ValueError("x-fal-request-id is required")

        task = asyncio.create_task(self._predict(input))
        self._tasks[x_fal_request_id] = task
        try:
            return await task
        except asyncio.CancelledError:
            # Run any cancellation logic here to leave the app in good state
            print("Request cancelled")
            raise RequestCancelledException("Request cancelled")
        finally:
            self._tasks.pop(x_fal_request_id)

    @fal.endpoint("/predict/cancel")
    async def predict_cancel(
        self,
        x_fal_request_id: str | None = fastapi.Header(None),
    ):
        if not x_fal_request_id:
            raise ValueError("x-fal-request-id is required")

        if x_fal_request_id not in self._tasks:
            raise ValueError("No task to cancel")

        if self._tasks[x_fal_request_id].done():
            raise ValueError("Task is already done")

        print(f"Cancelling request {x_fal_request_id}")
        self._tasks[x_fal_request_id].cancel()
```

Was this page helpful?

YesNo

[Use a Custom Container Image\\
\\
Previous](https://docs.fal.ai/serverless/development/use-custom-container-image) [Use KV Store\\
\\
Next](https://docs.fal.ai/serverless/development/use-kv-store)

Ctrl+I

### 🔒 Need Serverless Access?

×

Don't have access to fal Serverless yet? Request access to deploy your custom models with instant GPU scaling.


[Request Access](https://fal.ai/dashboard/serverless-get-started)

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)