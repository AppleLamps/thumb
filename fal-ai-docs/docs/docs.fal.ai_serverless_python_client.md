---
url: "https://docs.fal.ai/serverless/python/client"
title: "fal.api.SyncServerlessClient - fal"
---

[Skip to main content](https://docs.fal.ai/serverless/python/client#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Python SDK

fal.api.SyncServerlessClient

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

- [Import and Initialize](https://docs.fal.ai/serverless/python/client#import-and-initialize)
- [Overview of Namespaces](https://docs.fal.ai/serverless/python/client#overview-of-namespaces)
- [Apps Namespace](https://docs.fal.ai/serverless/python/client#apps-namespace)
- [List Applications (fal apps list)](https://docs.fal.ai/serverless/python/client#list-applications-fal-apps-list)
- [List App Runners (fal apps runners my-app)](https://docs.fal.ai/serverless/python/client#list-app-runners-fal-apps-runners-my-app)
- [Scale Application (fal apps scale)](https://docs.fal.ai/serverless/python/client#scale-application-fal-apps-scale)
- [Runners Namespace](https://docs.fal.ai/serverless/python/client#runners-namespace)
- [List Runners (fal runners list)](https://docs.fal.ai/serverless/python/client#list-runners-fal-runners-list)
- [Deploy (fal deploy)](https://docs.fal.ai/serverless/python/client#deploy-fal-deploy)
- [Reference](https://docs.fal.ai/serverless/python/client#reference)

The `SyncServerlessClient` is the synchronous Python client for interacting with fal Serverless.
Its namespaces and methods mirror the CLI so you can automate the same workflows from Python.

### [​](https://docs.fal.ai/serverless/python/client\#import-and-initialize)  Import and Initialize

Report incorrect code

Copy

Ask AI

```
from fal.api import SyncServerlessClient

client = SyncServerlessClient(
    host=None,     # Optional. Override API host
    api_key=None,  # Optional. If omitted, read from env/profile
    profile=None,  # Optional. Named profile to use
    team=None,     # Optional. Team context for runner ops
)
```

### [​](https://docs.fal.ai/serverless/python/client\#overview-of-namespaces)  Overview of Namespaces

- `client.apps.*` — corresponds to `fal apps ...`
- `client.runners.*` — corresponds to `fal runners ...`
- `client.deploy(...)` — corresponds to `fal deploy ...`

## [​](https://docs.fal.ai/serverless/python/client\#apps-namespace)  Apps Namespace

Manage your applications: list them, view runners for a specific app, and adjust scaling.

#### [​](https://docs.fal.ai/serverless/python/client\#list-applications-fal-apps-list)  List Applications (fal apps list)

Report incorrect code

Copy

Ask AI

```
apps = client.apps.list()

# Optional app name filter
filtered = client.apps.list(filter="stable")
```

#### [​](https://docs.fal.ai/serverless/python/client\#list-app-runners-fal-apps-runners-my-app)  List App Runners (fal apps runners my-app)

Report incorrect code

Copy

Ask AI

```
app_runners = client.apps.runners("my-app")

# Optional filters
recent = client.apps.runners("my-app", since=datetime.now() - timedelta(hours=1)) # last hour
running_only = client.apps.runners("my-app", state=["running"])                   # by state
```

#### [​](https://docs.fal.ai/serverless/python/client\#scale-application-fal-apps-scale)  Scale Application (fal apps scale)

Maps to CLI flags in `fal apps scale`. Any omitted option keeps the current value.

Report incorrect code

Copy

Ask AI

```
client.apps.scale(
    "my-app",
    keep_alive=300,            # seconds
    max_multiplexing=1,
    max_concurrency=10,
    min_concurrency=1,
    request_timeout=600,       # seconds
    startup_timeout=900,       # seconds
    machine_types=["GPU-H100", "GPU-H200"],
    regions=["us-east-1", "us-west-2"],
    concurrency_buffer=1,
    concurrency_buffer_perc=10,
)
```

## [​](https://docs.fal.ai/serverless/python/client\#runners-namespace)  Runners Namespace

List and manage runners.

#### [​](https://docs.fal.ai/serverless/python/client\#list-runners-fal-runners-list)  List Runners (fal runners list)

Report incorrect code

Copy

Ask AI

```
all_runners = client.runners.list()

# Recent runners only
last_10_min = client.runners.list(since=datetime.now() - timedelta(minutes=10))
```

## [​](https://docs.fal.ai/serverless/python/client\#deploy-fal-deploy)  Deploy (fal deploy)

Programmatic equivalent of `fal deploy`. If `app_ref` is omitted, discovery behavior matches the CLI (e.g., `pyproject.toml`).

Report incorrect code

Copy

Ask AI

```
# Auto-discover
client.deploy()

# Deploy from a file path
client.deploy("path/to/myfile.py")

# Deploy a specific class in a file
client.deploy("path/to/myfile.py::MyApp")

# Deploy by existing app name
client.deploy("my-app")

# With options mirroring CLI flags
client.deploy(
    app_ref="path/to/myfile.py::MyApp",
    app_name="myapp",
    auth="public",                # "private" | "public"
    strategy="rolling"            # "recreate" | "rolling"
    reset_scale=True,             # use previous scaling if False
)
```

## [​](https://docs.fal.ai/serverless/python/client\#reference)  Reference

For the complete Python API surface (types, dataclasses, and method signatures), see the
[auto-generated API reference](https://docs.fal.ai/serverless/python/api-reference).

Was this page helpful?

YesNo

[fal.App Class Reference\\
\\
Previous](https://docs.fal.ai/serverless/python/fal-app-reference) [Python SDK API Reference\\
\\
Next](https://docs.fal.ai/serverless/python/api-reference)

Ctrl+I

### 🔒 Need Serverless Access?

×

Don't have access to fal Serverless yet? Request access to deploy your custom models with instant GPU scaling.


[Request Access](https://fal.ai/dashboard/serverless-get-started)

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)