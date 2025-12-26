---
url: "https://docs.fal.ai/serverless/cli/deploy"
title: "fal deploy - fal"
---

[Skip to main content](https://docs.fal.ai/serverless/cli/deploy#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

CLI Reference

fal deploy

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

Report incorrect code

Copy

Ask AI

```
Usage: fal deploy [-h] [--output {pretty,json}] [--json] [--team TEAM] [--app-name APP_NAME]
                  [--auth AUTH] [--strategy {recreate,rolling}] [--no-scale] [--reset-scale]
                  [--force-env-build]
                  [app_ref]

Deploy a fal application. If no app reference is provided, the command will look for a pyproject.toml file with a  section and deploy the application specified with the provided app name.

Positional Arguments:
  app_ref               Application reference. Either a file path or a file path and a function name separated by '::'. If no reference is provided, the command will look for a pyproject.toml file with a  section and deploy the application specified with the provided app name.
                        File path example: path/to/myfile.py::MyApp
                        App name example: my-app (configure team in pyproject.toml)

Options:
  -h, --help            show this help message and exit
  --team TEAM           The team to use.
  --app-name APP_NAME   Application name to deploy with.
  --auth AUTH           Application authentication mode (private, public).
  --strategy {recreate,rolling}
                        Deployment strategy.
  --no-scale            Use the previous deployment of the application for scale settings. This is the default behavior.
  --reset-scale         Use the application code for scale settings.
  --force-env-build     Ignore the environment build cache and force rebuild.

Output:
  --output {pretty,json}
                        Modify the command output
  --json                Output in JSON format (same as --output json)

Examples:
  fal deploy
  fal deploy path/to/myfile.py
  fal deploy path/to/myfile.py::MyApp
  fal deploy path/to/myfile.py::MyApp --app-name myapp --auth public
  fal deploy my-app
```

Was this page helpful?

YesNo

[fal apps delete-rev\\
\\
Previous](https://docs.fal.ai/serverless/cli/apps/delete-rev) [fal files\\
\\
Next](https://docs.fal.ai/serverless/cli/files)

Ctrl+I

### 🔒 Need Serverless Access?

×

Don't have access to fal Serverless yet? Request access to deploy your custom models with instant GPU scaling.


[Request Access](https://fal.ai/dashboard/serverless-get-started)

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)