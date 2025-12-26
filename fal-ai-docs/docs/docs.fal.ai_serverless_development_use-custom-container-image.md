---
url: "https://docs.fal.ai/serverless/development/use-custom-container-image"
title: "Use a Custom Container Image - fal"
---

[Skip to main content](https://docs.fal.ai/serverless/development/use-custom-container-image#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Development

Use a Custom Container Image

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

- [fal Specific Considerations](https://docs.fal.ai/serverless/development/use-custom-container-image#fal-specific-considerations)
- [Required Package Versions](https://docs.fal.ai/serverless/development/use-custom-container-image#required-package-versions)
- [Ensure Curl](https://docs.fal.ai/serverless/development/use-custom-container-image#ensure-curl)
- [1\. File Upload Instead of COPY](https://docs.fal.ai/serverless/development/use-custom-container-image#1-file-upload-instead-of-copy)
- [2\. Container Image Best Practices](https://docs.fal.ai/serverless/development/use-custom-container-image#2-container-image-best-practices)
- [Use Fal Base Image](https://docs.fal.ai/serverless/development/use-custom-container-image#use-fal-base-image)
- [Pin All Package Versions](https://docs.fal.ai/serverless/development/use-custom-container-image#pin-all-package-versions)
- [Clean Up Package Caches](https://docs.fal.ai/serverless/development/use-custom-container-image#clean-up-package-caches)
- [Use Multi-Stage Builds for Smaller Images](https://docs.fal.ai/serverless/development/use-custom-container-image#use-multi-stage-builds-for-smaller-images)
- [Docker Templates](https://docs.fal.ai/serverless/development/use-custom-container-image#docker-templates)
- [Base Python Template](https://docs.fal.ai/serverless/development/use-custom-container-image#base-python-template)
- [PyTorch + HuggingFace Template](https://docs.fal.ai/serverless/development/use-custom-container-image#pytorch-%2B-huggingface-template)
- [Custom CUDA Template](https://docs.fal.ai/serverless/development/use-custom-container-image#custom-cuda-template)
- [Common Issues & Solutions](https://docs.fal.ai/serverless/development/use-custom-container-image#common-issues-%26-solutions)
- [fal Dependency Conflicts](https://docs.fal.ai/serverless/development/use-custom-container-image#fal-dependency-conflicts)
- [Python Binary Not Found](https://docs.fal.ai/serverless/development/use-custom-container-image#python-binary-not-found)
- [CUDA Related Issues](https://docs.fal.ai/serverless/development/use-custom-container-image#cuda-related-issues)
- [Container Validation Checklist](https://docs.fal.ai/serverless/development/use-custom-container-image#container-validation-checklist)
- [Using Private Docker Registries](https://docs.fal.ai/serverless/development/use-custom-container-image#using-private-docker-registries)
- [Dockerhub](https://docs.fal.ai/serverless/development/use-custom-container-image#dockerhub)
- [Google Artifact Registry](https://docs.fal.ai/serverless/development/use-custom-container-image#google-artifact-registry)
- [Amazon Elastic Container Registry](https://docs.fal.ai/serverless/development/use-custom-container-image#amazon-elastic-container-registry)
- [Build Secrets](https://docs.fal.ai/serverless/development/use-custom-container-image#build-secrets)
- [Disable Build Cache](https://docs.fal.ai/serverless/development/use-custom-container-image#disable-build-cache)
- [Next steps](https://docs.fal.ai/serverless/development/use-custom-container-image#next-steps)

**Container-based example app**
Check out the [container-based example app](https://docs.fal.ai/serverless/tutorials/deploy-models-with-custom-containers) for understanding the
basics of running a containerized application on fal.

Report incorrect code

Copy

Ask AI

```
import fal
from fal.container import ContainerImage
from fal.toolkit import Image, optimize

from pydantic import BaseModel, Field

dockerfile_str = """
FROM python:3.11

RUN apt-get update && apt-get install -y ffmpeg

RUN python -m venv .venv
ENV PATH="$PWD/.venv/bin:$PATH"
RUN pip install "accelerate" "transformers>=4.30.2" "diffusers>=0.26" "torch>=2.2.0"
"""

class Input(BaseModel):
    prompt: str = Field(
        description="The prompt to generate an image from.",
        examples=[\
            "A cinematic shot of a baby racoon wearing an intricate italian priest robe.",\
        ],
    )

class Output(BaseModel):
    image: Image = Field(
        description="The generated image.",
    )

class FalModel(fal.App):
    image = ContainerImage.from_dockerfile_str(dockerfile_str)
    machine_type = "GPU"

    def setup(self) -> None:
        import torch
        from diffusers import AutoPipelineForText2Image

        # Load SDXL
        self.pipeline = AutoPipelineForText2Image.from_pretrained(
            "stabilityai/stable-diffusion-xl-base-1.0",
            torch_dtype=torch.float16,
            variant="fp16",
        )
        self.pipeline.to("cuda")

        # Apply fal's spatial optimizer to the pipeline.
        self.pipeline.unet = optimize(self.pipeline.unet)
        self.pipeline.vae = optimize(self.pipeline.vae)

        # Warm up the model.
        self.pipeline(
            prompt="a cat",
            num_inference_steps=30,
        )

    @fal.endpoint("/")
    def text_to_image(self, input: Input) -> Output:
        result = self.pipeline(
            prompt=input.prompt,
            num_inference_steps=30,
        )
        [image] = result.images
        return Output(image=Image.from_pil(image))
```

Voila! 🎉 The highlighted changes are the only modifications you need to make; the rest remains your familiar fal application.

**Dockerfile Keywords**Please check our [Dockerfile best practices](https://docs.fal.ai/serverless/development/use-custom-container-image) for
more information on how to optimize your Dockerfile.

## [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#fal-specific-considerations)  fal Specific Considerations

When deploying your application on fal, you don’t need to worry about enabling Docker Buildx or BuildKit. We take care of it for you. However, there are several fal-specific requirements you must follow:

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#required-package-versions)  Required Package Versions

fal has specific dependencies that **must** be installed with exact versions:

- `pydantic==2.10.6`
- `protobuf==4.25.1`
- `boto3==1.35.74`

**CRITICAL**: These packages must be installed **LAST** in your Dockerfile to ensure they override any conflicting versions installed by other dependencies.

Report incorrect code

Copy

Ask AI

```
FROM falai/base:3.11-12.1.0

# Install your application dependencies first
RUN pip install torch transformers your-packages

# ALWAYS install fal packages last to avoid version conflicts
RUN pip install --no-cache-dir \\
    boto3==1.35.74 \\
    protobuf==4.25.1 \\
    pydantic==2.10.6
```

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#ensure-curl)  Ensure Curl

Report incorrect code

Copy

Ask AI

```
FROM ubuntu:22.04

# Install Curl
RUN apt-get update && apt-get install -y curl
```

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#1-file-upload-instead-of-copy)  1\. File Upload Instead of COPY

`COPY` and `ADD` (from local filesystem) are not supported as of now to copy files into the container
from the host. Instead you can use fal’s `fal.toolkit` to upload files and
refer them in the container using links.

**Note**If you are curious about the differences between `COPY` and `ADD`, check out
the [following link](https://www.baeldung.com/ops/docker-copy-add).

Report incorrect code

Copy

Ask AI

```
json_url = File.from_path("my-file.json", repository="cdn").url

dockerfile_str = f"""
FROM python:3.11-slim
RUN apt-get update && apt-get install -y curl
RUN curl '{json_url}' > my-file.json
"""
```

or you can use `ADD` to directly download the file from the URL:

Report incorrect code

Copy

Ask AI

```
json_url = File.from_path("requirements.txt", repository="cdn").url

dockerfile_str = f"""
FROM python:3.11-slim
ADD {json_url} /app/requirements.txt
WORKDIR /app
RUN pip install -r requirements.txt
"""
```

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#2-container-image-best-practices)  2\. Container Image Best Practices

When building container images for fal, follow these best practices:

#### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#use-fal-base-image)  Use Fal Base Image

Its recommended to use `falai/base:3.11-12.1.0` as your base image as it comes with the right python version, cuda and more.
Most importantly its small size improves startup times!

#### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#pin-all-package-versions)  Pin All Package Versions

This ensures reproducibility of builds leaving no doors open for issues with newer package versions and incompatibility!

Report incorrect code

Copy

Ask AI

```
# Good: Pinned versions ensure reproducible builds
RUN pip install torch==2.6.0 transformers==4.51.3

# Bad: Unpinned versions can break your app
RUN pip install torch transformers
```

#### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#clean-up-package-caches)  Clean Up Package Caches

Cleaning up package caches reduces build time and startup time, making for a faster iteration and coldstart!

Report incorrect code

Copy

Ask AI

```
RUN apt-get update && apt-get install -y package \\
    && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir package==version
```

#### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#use-multi-stage-builds-for-smaller-images)  Use Multi-Stage Builds for Smaller Images

Multi Stage builds are a great way to significantly reduce the image size, saving time building and downloading the container on startup!

Report incorrect code

Copy

Ask AI

```
# Build stage
FROM python:3.11 as builder
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Runtime stage
FROM python:3.11-slim
COPY --from=builder /root/.local /root/.local
```

## [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#docker-templates)  Docker Templates

To help you get started quickly and avoid common pitfalls, here are production-ready Docker templates for common use cases:

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#base-python-template)  Base Python Template

Perfect for applications that only need Python packages from pip or simple apt packages.

Report incorrect code

Copy

Ask AI

```
dockerfile_str = """
FROM falai/base:3.11-12.1.0

USER root

RUN apt-get update && apt-get install -y --no-install-recommends \\
    git \\
    wget \\
    curl \\
    && rm -rf /var/lib/apt/lists/*

# Install your application packages
RUN pip install --no-cache-dir \\
    requests==2.31.0 \\
    numpy==1.24.3 \\
    pandas==2.0.3

# IMPORTANT: Install fal-required packages LAST to ensure correct versions
RUN pip install --no-cache-dir \\
    boto3==1.35.74 \\
    protobuf==4.25.1 \\
    pydantic==2.10.6
"""

class FalModel(fal.App):
    image=ContainerImage.from_dockerfile_str(dockerfile_str),
    # Your application code
```

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#pytorch-+-huggingface-template)  PyTorch + HuggingFace Template

For deep learning applications using PyTorch and HuggingFace ecosystem.

Report incorrect code

Copy

Ask AI

```
FROM falai/base:3.11-12.1.0

# Install PyTorch with CUDA support first
RUN pip install --no-cache-dir \\
    torch==2.6.0 \\
    accelerate==1.6.0 \\
    transformers==4.51.3 \\
    diffusers==0.31.0 \\
    hf_transfer==0.1.9 \\
    peft==0.15.0 \\
    sentencepiece==0.2.0 \\
    --extra-index-url \\
    https://download.pytorch.org/whl/cu124

# IMPORTANT: Install fal-required packages LAST to ensure correct versions
RUN pip install --no-cache-dir \\
    boto3==1.35.74 \\
    protobuf==4.25.1 \\
    pydantic==2.10.6

# Set CUDA environment variables
ENV CUDA_HOME=/usr/local/cuda
ENV PATH=$CUDA_HOME/bin:$PATH
ENV LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
ENV TORCH_CUDA_ARCH_LIST="6.0 6.1 7.0 7.5 8.0 8.6 8.9 9.0 9.0a"
```

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#custom-cuda-template)  Custom CUDA Template

For some applications, you might require a different cuda runtime, here is an example to get CUDA 12.8:

Report incorrect code

Copy

Ask AI

```
FROM nvidia/cuda:12.8.0-runtime-ubuntu22.04

# Avoid prompts during apt install
ENV DEBIAN_FRONTEND=noninteractive \\
    PYTHONDONTWRITEBYTECODE=1 \\
    PYTHONUNBUFFERED=1

# Install Python and system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \\
    software-properties-common \\
    && add-apt-repository ppa:deadsnakes/ppa \\
    && apt-get update && apt-get install -y --no-install-recommends \\
    python3.11 \\
    python3.11-dev \\
    python3.11-venv \\
    python3-pip \\
    wget \\
    curl \\
    ca-certificates \\
    ffmpeg \\
    libsndfile1 \\
    && rm -rf /var/lib/apt/lists/*

# IMPORTANT: Create symlinks for python binary accessibility
# fal requires the python binary to be accessible via standard paths
RUN ln -sf /usr/bin/python3.11 /usr/bin/python3 && \\
    ln -sf /usr/bin/python3.11 /usr/bin/python

# Upgrade pip
RUN python3 -m pip install --no-cache-dir --upgrade pip

# Install PyTorch first (CUDA 12.8 compatible)
RUN pip install torch==2.7.0 -f https://download.pytorch.org/whl/cu128/torch_stable.html

# Install your packages
RUN pip install --no-cache-dir \
    stable-audio-tools==0.0.19 \
    librosa==0.10.1 \
    soundfile==0.12.1

# IMPORTANT: Install fal-required packages LAST to ensure correct versions
RUN pip install --no-cache-dir \\
    boto3==1.35.74 \\
    protobuf==4.25.1 \\
    pydantic==2.10.6
```

## [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#common-issues-&-solutions)  Common Issues & Solutions

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#fal-dependency-conflicts)  fal Dependency Conflicts

**Problem**: `ImportError` or version conflicts with pydantic, protobuf, or boto3**Solution**: Always install fal-required packages last:

Report incorrect code

Copy

Ask AI

```
# Install all other packages first
RUN pip install torch transformers your-other-packages

# Install fal-required packages LAST
RUN pip install --no-cache-dir \\
    boto3==1.35.74 \\
    protobuf==4.25.1 \\
    pydantic==2.10.6
```

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#python-binary-not-found)  Python Binary Not Found

**Problem**: `python: command not found` or `/usr/bin/env: python: No such file or directory`**Solution**: Create proper symlinks when using custom base images:

Report incorrect code

Copy

Ask AI

```
RUN ln -sf /usr/bin/python3.11 /usr/bin/python3 && \\
    ln -sf /usr/bin/python3.11 /usr/bin/python
```

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#cuda-related-issues)  CUDA Related Issues

**Example Problem**: `RuntimeError: No CUDA GPUs are available`**Solution**: Ensure CUDA environment variables are set:

Report incorrect code

Copy

Ask AI

```
ENV CUDA_HOME=/usr/local/cuda
ENV PATH=$CUDA_HOME/bin:$PATH
ENV LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
```

## [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#container-validation-checklist)  Container Validation Checklist

Before deploying your container app, ensure:

- [ ]  All package versions are pinned
- [ ]  fal-required packages (pydantic==2.10.6, protobuf==4.25.1, boto3==1.35.74) are installed LAST
- [ ]  Curl is installed
- [ ]  Container builds without errors with fal run

## [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#using-private-docker-registries)  Using Private Docker Registries

To use private docker registries, you need to provide registry credentials like so:

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#dockerhub)  Dockerhub

Report incorrect code

Copy

Ask AI

```
class FalModel(fal.App):
    image=ContainerImage.from_dockerfile_str(
        "FROM myuser/image:tag",
        registries={
            "https://index.docker.io/v1/": {
                "username": "myuser",
                "password": "$DOCKERHUB_TOKEN",  # use `fal secrets set` first to create this secret
            },
        },
    ),

    ...
```

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#google-artifact-registry)  Google Artifact Registry

We recommend using a service account and setting a base64-encoded version of the key as a Fal secret, which you can then use in your code:

1

Create a JSON key for a service account. It should be automatically downloaded to your computer.

2

Encode it in base64 with a command like:

Report incorrect code

Copy

Ask AI

```
cat key.json | base64
```

3

Set the result as a Fal secret:

Report incorrect code

Copy

Ask AI

```
fal secrets set GOOGLE_AR_JSON_BASE64=<value from above>
```

4

Use the secret as the password, and `_json_key_base64` as the username for the Artifact Registry in your code:

Report incorrect code

Copy

Ask AI

```
class FalModel(fal.App):
    image=ContainerImage.from_dockerfile_str(
        "FROM us-central1-docker.pkg.dev/myuser/image:tag",
        registries={
            "us-central1-docker.pkg.dev": {
                "username": "_json_key_base64",
                "password": "$GOOGLE_AR_JSON_BASE64",
            },
        },
    ),
)
    ...
```

For more details and options check out [Google’s documentation](https://cloud.google.com/artifact-registry/docs/docker/authentication).

### [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#amazon-elastic-container-registry)  Amazon Elastic Container Registry

Use `aws ecr get-login-password --region us-east-1` to get a token ( [see docs](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ecr/get-login-password.html)). Make sure that the token matches the region of your repo, otherwise you will get a 400 error.**Note:** tokens only last 12 hours, so it’s best to auto-generate one on the fly with `boto3` and AWS credentials.

Report incorrect code

Copy

Ask AI

```
# Optional: automatically generate a new ECR token since they expire every 12 hours
import os
import boto3

def get_ecr_token(region: str) -> str:
    ecr_client = boto3.client(
        'ecr',
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
        region_name=region
    )

    response = ecr_client.get_authorization_token()
    auth_data = response['authorizationData'][0]
    token = auth_data['authorizationToken']

    # Decode from base64, format is "AWS:password"
    decoded_token = base64.b64decode(token).decode('utf-8')
    _, password = decoded_token.split(':', 1)

    return password

ecr_token = get_ecr_token("us-east-1")
# End Optional

class FalModel(fal.App):
    image=ContainerImage.from_dockerfile_str(
        "FROM 123456789012.dkr.ecr.us-east-1.amazonaws.com/image:tag",
        registries={
            "1234567890.dkr.ecr.us-east-1.amazonaws.com": {
                "username": "AWS",
                "password": ecr_token,
            },
        },
    ),

    ...
```

## [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#build-secrets)  Build Secrets

We currently only support [secret mounts](https://docs.docker.com/build/building/secrets/#secret-mounts).

Report incorrect code

Copy

Ask AI

```
class FalModel(fal.App):
    image=ContainerImage.from_dockerfile_str(
        """
        FROM python:3.11
        RUN --mount=type=secret,id=aws-key-id,env=AWS_ACCESS_KEY_ID \
            --mount=type=secret,id=aws-secret-key,env=AWS_SECRET_ACCESS_KEY \
            --mount=type=secret,id=aws-session-token,env=AWS_SESSION_TOKEN \
            aws s3 cp ...
        """,
        secrets={
            # use `fal secrets set` first to create these secrets
            "aws-key-id": "$AWS_ACCESS_KEY_ID",
            "aws-secret-key": "$AWS_SECRET_ACCESS_KEY",
            "aws-session-token": "$AWS_SESSION_TOKEN",
        },
    ),

    ...
```

## [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#disable-build-cache)  Disable Build Cache

Container image builds are cached by default to improve build times.
However, in some cases you may want to disable the cache and force a rebuild of the container image.You can pass the `--force-env-build` flag to the `fal deploy` or `fal run` command to disable the build cache.

Report incorrect code

Copy

Ask AI

```
fal deploy --force-env-build path/to/my_app.py::MyApp
fal run --force-env-build path/to/my_app.py::MyApp
```

## [​](https://docs.fal.ai/serverless/development/use-custom-container-image\#next-steps)  Next steps

**Optimize your container image**Check our [Optimize Container Images](https://docs.fal.ai/serverless/optimizations/optimize-container-images) guide for more information on how to optimize your container image.

Was this page helpful?

YesNo

[Test Models and Endpoints\\
\\
Previous](https://docs.fal.ai/serverless/development/test-models-and-endpoints) [Handle request cancellations\\
\\
Next](https://docs.fal.ai/serverless/development/handle-cancellations)

Ctrl+I

### 🔒 Need Serverless Access?

×

Don't have access to fal Serverless yet? Request access to deploy your custom models with instant GPU scaling.


[Request Access](https://fal.ai/dashboard/serverless-get-started)

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)