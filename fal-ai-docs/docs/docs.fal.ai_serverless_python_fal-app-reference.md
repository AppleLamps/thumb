---
url: "https://docs.fal.ai/serverless/python/fal-app-reference"
title: "fal.App Class Reference - fal"
---

[Skip to main content](https://docs.fal.ai/serverless/python/fal-app-reference#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Python SDK

fal.App Class Reference

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

- [Basic Usage](https://docs.fal.ai/serverless/python/fal-app-reference#basic-usage)
- [Configuration Options](https://docs.fal.ai/serverless/python/fal-app-reference#configuration-options)
- [Environment Configuration](https://docs.fal.ai/serverless/python/fal-app-reference#environment-configuration)
- [Machine Configuration](https://docs.fal.ai/serverless/python/fal-app-reference#machine-configuration)
- [Timeout Configuration](https://docs.fal.ai/serverless/python/fal-app-reference#timeout-configuration)
- [Authentication](https://docs.fal.ai/serverless/python/fal-app-reference#authentication)
- [App Metadata](https://docs.fal.ai/serverless/python/fal-app-reference#app-metadata)
- [Scaling Configuration](https://docs.fal.ai/serverless/python/fal-app-reference#scaling-configuration)
- [Complete Example](https://docs.fal.ai/serverless/python/fal-app-reference#complete-example)
- [See Also](https://docs.fal.ai/serverless/python/fal-app-reference#see-also)

### [​](https://docs.fal.ai/serverless/python/fal-app-reference\#basic-usage)  Basic Usage

Report incorrect code

Copy

Ask AI

```

import fal

class MyApp(fal.App):
    def setup(self):
        # Initialize models and resources once per runner
        pass

    @fal.endpoint("/")
    def predict(self, input_data):
        # Process requests
        return {"result": "..."}
```

### [​](https://docs.fal.ai/serverless/python/fal-app-reference\#configuration-options)  Configuration Options

You can configure your app using class variables or the `host_kwargs` dictionary for advanced options.

#### [​](https://docs.fal.ai/serverless/python/fal-app-reference\#environment-configuration)  Environment Configuration

##### `requirements` (list\[str\])

List of pip packages to install in the environment.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    requirements = ["numpy==1.24.0", "pandas", "torch>=2.0.0"]
```

##### `local_python_modules` (list\[str\])

List of local Python module names to include in the deployment.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    local_python_modules = ["my_utils", "custom_models"]
```

#### [​](https://docs.fal.ai/serverless/python/fal-app-reference\#machine-configuration)  Machine Configuration

##### `machine_type` (str \| list\[str\])

Hardware type(s) to use. Can be a single type or a list of types in order of preference.
**CPU Machines:**

- `"XS"` \- 0.50 CPU cores, 512MB RAM
- `"S"` \- 1 CPU core, 1GB RAM (default)
- `"M"` \- 2 CPU cores, 2GB RAM
- `"L"` \- 4 CPU cores, 15GB RAM

**GPU Machines:**

- `"GPU-A100"` \- 12 CPU cores, 60GB RAM, 1 GPU core (40GB VRAM)
- `"GPU-H100"` \- 12 CPU cores, 112GB RAM, 1 GPU core (80GB VRAM)
- `"GPU-H200"` \- 12 CPU cores, 112GB RAM, 1 GPU core (141GB VRAM)
- `"GPU-B200"` \- 24 CPU cores, 112GB RAM, 1 GPU core (192GB VRAM)

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    # Single machine type
    machine_type = "GPU-H100"

    # Or with multiple options (fal will pick whichever is available)
    machine_type = ["GPU-H100", "GPU-H200"]
```

##### `num_gpus` (int)

Number of GPUs required for the application.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    machine_type = "GPU-H100"
    num_gpus = 2  # Request 2 H100 GPUs
```

#### [​](https://docs.fal.ai/serverless/python/fal-app-reference\#timeout-configuration)  Timeout Configuration

##### `request_timeout` (int)

Maximum time in seconds for a single request to complete.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    request_timeout = 300  # 5 minutes
```

##### `startup_timeout` (int)

Maximum time in seconds for the environment to start up.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    startup_timeout = 600  # 10 minutes for large model loading
```

#### [​](https://docs.fal.ai/serverless/python/fal-app-reference\#authentication)  Authentication

##### `app_auth` (str)

Authentication mode for the application.Options:

- `"private"`: Only accessible with your API key
- `"public"`: Accessible without authentication
- `"shared"`: Accessible with any valid fal API key
- `None`: Inherit from deployment command

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    app_auth = "shared"  # Allow access with any valid fal key
```

#### [​](https://docs.fal.ai/serverless/python/fal-app-reference\#app-metadata)  App Metadata

##### `app_name` (str)

Custom name for the application. Auto-generated from class name if not specified.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    app_name = "image-generator-v2"
```

#### [​](https://docs.fal.ai/serverless/python/fal-app-reference\#scaling-configuration)  Scaling Configuration

Control how your application scales to handle traffic. These options help balance performance and cost.

##### `keep_alive` (int)

Time in seconds to keep idle runners alive. Default: 10 seconds.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    keep_alive = 300  # Keep runners alive for 5 minutes after last request
```

##### `min_concurrency` (int)

Minimum number of runners to keep running at all times. Default: 0.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    min_concurrency = 2  # Always keep 2 runners ready
```

##### `max_concurrency` (int)

Maximum number of runners that can be created. Default: 10.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    max_concurrency = 50  # Allow up to 50 runners during peak traffic
```

##### `concurrency_buffer` (int)

Number of extra runners to provision beyond current demand. Default: 0.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    concurrency_buffer = 2  # Keep 2 extra runners ready for traffic spikes
```

##### `max_multiplexing` (int)

Maximum number of requests a single runner can handle concurrently. Default: 1.

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    max_multiplexing = 5  # Each runner can handle 5 concurrent requests
```

**Note:**See the [Scaling Guide](https://docs.fal.ai/serverless/deployment-operations/scale-your-application) for detailed explanations and examples of these options.

### [​](https://docs.fal.ai/serverless/python/fal-app-reference\#complete-example)  Complete Example

Here’s a comprehensive example showing all common configuration options:

Report incorrect code

Copy

Ask AI

```
import fal
from typing import Dict, Any

class ImageGenerationApp(fal.App):
    # Environment setup
    requirements = [\
        "torch==2.1.0",\
        "transformers==4.35.0",\
        "diffusers==0.24.0",\
        "accelerate",\
        "pillow",\
    ]
    local_python_modules = ["custom_pipeline"]

    # Machine configuration
    machine_type = ["GPU-H100", "GPU-H200"]  # will pick whichever is available
    num_gpus = 1

    # Timeouts
    request_timeout = 600      # 10 minutes per request
    startup_timeout = 900      # 15 minutes for model loading

    # Authentication
    app_auth = "shared"        # Accessible with any valid fal key
    app_name = "stable-diffusion-xl"

    # Scaling configuration
    keep_alive = 300           # 5 minutes
    min_concurrency = 1        # Keep 1 runner always ready
    max_concurrency = 2       # Scale up to 10 runners max
    concurrency_buffer = 1     # Keep 1 extra runner for spikes
    max_multiplexing = 1       # 1 request per runner (GPU-bound workload)

    def setup(self):
        """Initialize models once per runner."""
        import torch
        from diffusers import DiffusionPipeline

        self.pipe = DiffusionPipeline.from_pretrained(
            "stabilityai/stable-diffusion-xl-base-1.0",
            torch_dtype=torch.float16,
            variant="fp16",
            use_safetensors=True,
        )
        self.pipe.to("cuda")

    @fal.endpoint("/generate")
    def generate(self,
                 prompt: str,
                 negative_prompt: str = "",
                 steps: int = 30,
                 width: int = 1024,
                 height: int = 1024) -> Dict[str, Any]:
        """Generate an image from a text prompt."""

        image = self.pipe(
            prompt=prompt,
            negative_prompt=negative_prompt,
            num_inference_steps=steps,
            width=width,
            height=height,
        ).images[0]

        # Convert to base64 for API response
        import io
        import base64

        buffer = io.BytesIO()
        image.save(buffer, format="PNG")
        image_base64 = base64.b64encode(buffer.getvalue()).decode()

        return {
            "image": image_base64,
            "content_type": "image/png",
            "width": width,
            "height": height,
        }

    @fal.endpoint("/health")
    def health_check(self) -> Dict[str, str]:
        """Simple health check endpoint."""
        return {"status": "healthy", "model": "sdxl"}
```

## [​](https://docs.fal.ai/serverless/python/fal-app-reference\#see-also)  See Also

- [Getting Started Guide](https://docs.fal.ai/serverless/getting-started/quick-start) \- Quick introduction to building your first app
- [Deployment Operations](https://docs.fal.ai/serverless/deployment-operations/deploy-to-production) \- Production deployment best practices
- [Scaling Guide](https://docs.fal.ai/serverless/deployment-operations/scale-your-application) \- Detailed scaling configuration

Was this page helpful?

YesNo

[fal runners\\
\\
Previous](https://docs.fal.ai/serverless/cli/runners) [fal.api.SyncServerlessClient\\
\\
Next](https://docs.fal.ai/serverless/python/client)

Ctrl+I

### 🔒 Need Serverless Access?

×

Don't have access to fal Serverless yet? Request access to deploy your custom models with instant GPU scaling.


[Request Access](https://fal.ai/dashboard/serverless-get-started)

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)