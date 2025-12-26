---
url: "https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches"
title: "Optimize Startup with Compiled Caches - fal"
---

[Skip to main content](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Advanced Optimizations

Optimize Startup with Compiled Caches

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

- [The Problem](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#the-problem)
- [Quick Start](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#quick-start)
- [API Reference](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#api-reference)
- [synchronized\_inductor\_cache(cache\_key: str)](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#synchronized-inductor-cache-cache-key%3A-str)
- [load\_inductor\_cache(cache\_key: str) -> str](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#load-inductor-cache-cache-key%3A-str-%3E-str)
- [sync\_inductor\_cache(cache\_key: str, dir\_hash: str) -> None](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#sync-inductor-cache-cache-key%3A-str%2C-dir-hash%3A-str-%3E-none)
- [Complete Working Example](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#complete-working-example)
- [Manual Approach (Advanced)](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#manual-approach-advanced)
- [How It Works](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#how-it-works)
- [Storage Locations & Connection Mechanism](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#storage-locations-%26-connection-mechanism)
- [GPU Separation](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#gpu-separation)
- [Process Flow](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#process-flow)
- [Best Practices](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#best-practices)
- [Warmup Coverage](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#warmup-coverage)
- [When to Skip](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#when-to-skip)
- [Troubleshooting](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#troubleshooting)
- [Workers Still Compiling (Cache Not Working)?](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#workers-still-compiling-cache-not-working-)
- [Debugging](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#debugging)
- [See Also](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches#see-also)

When using `torch.compile()` with PyTorch models, the first run compiles optimized CUDA kernels, which can take significant time. By sharing these compiled kernels across workers, you can dramatically reduce startup latency for subsequent workers.

## [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#the-problem)  The Problem

PyTorch’s Inductor compiler (`torch.compile`) generates optimized GPU kernels on first run. Without cache sharing:

- **Every worker recompiles** the same kernels, wasting GPU time
- **Startup latency multiplies** across workers (N workers × compilation time)
- **GPU resources** are used inefficiently during deployment

With Inductor cache sharing:

- **One worker compiles** during initial warmup
- **Other workers load** pre-compiled kernels (significantly faster)
- **Consistent performance** across all workers

## [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#quick-start)  Quick Start

The simplest way to use Inductor caching is with the `synchronized_inductor_cache` context manager:

Report incorrect code

Copy

Ask AI

```
from fal.toolkit import synchronized_inductor_cache

class MyApp(fal.App):
    def setup(self):
        # Load model
        self.model = load_model()

        # Wrap compilation + warmup in cache context
        with synchronized_inductor_cache("my-model/v1"):
            self.model = torch.compile(self.model)
            self.warmup()
```

That’s it! The first worker compiles and saves to `/data/inductor-caches/<GPU_TYPE>/<cache_key>.zip` (on the shared `/data` filesystem accessible to all workers), while subsequent workers load the pre-compiled kernels.

## [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#api-reference)  API Reference

### [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#synchronized-inductor-cache-cache-key:-str)  `synchronized_inductor_cache(cache_key: str)`

A context manager that handles both loading and syncing of Inductor caches automatically.**Parameters:**

- `cache_key` (str): A unique identifier for this cache. Use a descriptive name with versioning (e.g., `"my-model/v1"`).

**Usage:**

Report incorrect code

Copy

Ask AI

```
with synchronized_inductor_cache("my-model/v1"):
    # Any torch.compile() calls and warmup inside this block
    # will use the shared cache
    model = torch.compile(model)
    warmup()
```

**Behavior:**

- Loads existing cache from `/data/inductor-caches/` if available
- After the context exits, syncs any newly compiled kernels back to shared storage
- Handles GPU-specific cache organization automatically

### [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#load-inductor-cache-cache-key:-str-%3E-str)  `load_inductor_cache(cache_key: str) -> str`

Explicitly loads an Inductor cache from shared storage.**Parameters:**

- `cache_key` (str): The cache identifier to load.

**Returns:**

- `str`: A directory hash representing the cache state. Pass this to `sync_inductor_cache()` later.

**Usage:**

Report incorrect code

Copy

Ask AI

```
dir_hash = load_inductor_cache("my-model/v1")
# ... compilation and warmup ...
sync_inductor_cache("my-model/v1", dir_hash)
```

### [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#sync-inductor-cache-cache-key:-str,-dir-hash:-str-%3E-none)  `sync_inductor_cache(cache_key: str, dir_hash: str) -> None`

Syncs the local Inductor cache back to shared storage.**Parameters:**

- `cache_key` (str): The cache identifier to sync.
- `dir_hash` (str): The directory hash returned by `load_inductor_cache()`.

**Behavior:**

- Compares local cache with the hash to detect new compiled kernels
- If changes detected, re-packs and uploads entire cache to `/data/inductor-caches/`
- If no changes, skips upload (no-op)

## [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#complete-working-example)  Complete Working Example

Here’s a complete, runnable example using Stable Diffusion Turbo that demonstrates the actual speedup:

Report incorrect code

Copy

Ask AI

```
import fal
from fal.toolkit import Image, synchronized_inductor_cache
from pydantic import BaseModel, Field

class Input(BaseModel):
    prompt: str = Field(
        description="Text prompt for image generation",
        examples=["A serene lake at sunset with mountains"],
    )
    width: int = Field(
        default=512,
        description="Image width",
    )
    height: int = Field(
        default=512,
        description="Image height",
    )

class Output(BaseModel):
    image: Image

class SDTurbo(fal.App):
    machine_type = "GPU-H100"
    keep_alive = 300  # 5 minutes - keep warm between requests
    startup_timeout = 900  # 15 minutes - allow time for compilation
    requirements = [\
        "torch==2.5.0",\
        "diffusers==0.31.0",\
        "transformers",\
        "accelerate",\
        "nvidia-cuda-nvrtc-cu12",\
    ]

    def setup(self) -> None:
        # Workaround for cuDNN SDPA on CUDA 12.x
        # This makes the NVRTC library globally available for cuDNN kernel compilation
        import ctypes
        import os
        from nvidia.cuda_nvrtc import lib as nvrtc_lib

        nvrtc_lib_path = os.path.dirname(nvrtc_lib.__file__)
        nvrtc_lib_so = os.path.join(nvrtc_lib_path, "libnvrtc.so.12")
        ctypes.CDLL(nvrtc_lib_so, mode=ctypes.RTLD_GLOBAL)

        import torch
        from diffusers import AutoPipelineForText2Image

        print("Loading SD-Turbo model...")
        self.pipeline = AutoPipelineForText2Image.from_pretrained(
            "stabilityai/sd-turbo",
            torch_dtype=torch.float16,
            variant="fp16",
        ).to("cuda")
        print("Model loaded!")

        # Share compiled kernels across workers
        with synchronized_inductor_cache("sd-turbo/v1"):
            print("Compiling UNet with torch.compile()...")
            self.pipeline.unet = torch.compile(
                self.pipeline.unet,
                mode="default",
                dynamic=True,
            )

            # Warmup with common resolutions to trigger compilation
            print("Warming up with common resolutions...")
            for width, height in [(512, 512), (768, 512)]:
                self.pipeline(
                    prompt="warmup",
                    num_inference_steps=1,
                    width=width,
                    height=height,
                    guidance_scale=0.0,  # SD-Turbo doesn't use guidance
                )
            print("Warmup complete!")

            # Prevent recompilation and CUDA graphs threading issues
            self.pipeline.unet.forward = torch._dynamo.run(self.pipeline.unet.forward)

    @fal.endpoint("/")
    def generate(self, input: Input) -> Output:
        """Generate an image from a text prompt."""
        result = self.pipeline(
            prompt=input.prompt,
            num_inference_steps=1,
            width=input.width,
            height=input.height,
            guidance_scale=0.0,  # SD-Turbo doesn't use guidance
        )
        return Output(image=Image.from_pil(result.images[0]))
```

**Try it yourself:**

Report incorrect code

Copy

Ask AI

```
# Save as sd_turbo.py
fal run sd_turbo.py

# First worker: Compiles kernels during warmup
# Subsequent workers: Load pre-compiled kernels (much faster)
```

**What you’ll observe:**

- First worker takes longer during warmup (compilation happening)
- Subsequent workers warmup significantly faster (loading cached kernels)
- All workers produce identical outputs - only startup time changes

## [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#manual-approach-advanced)  Manual Approach (Advanced)

For more control over cache loading and syncing, you can use the explicit API:

Report incorrect code

Copy

Ask AI

```
from fal.toolkit import load_inductor_cache, sync_inductor_cache

class MyApp(fal.App):
    def setup(self):
        # Load existing cache (if available)
        dir_hash = load_inductor_cache("my-model/v1")

        # Compile and warmup
        self.model = torch.compile(self.model)
        self.warmup()

        # Sync back any new kernels
        sync_inductor_cache("my-model/v1", dir_hash)
```

**When to use the manual approach:**

- Multi-stage warmup processes
- Distributed training with controlled sync timing
- Need explicit control over cache load/sync behavior

## [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#how-it-works)  How It Works

### [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#storage-locations-&-connection-mechanism)  Storage Locations & Connection Mechanism

- **Local cache**: `/tmp/inductor-cache/` \- Each worker’s temporary cache
- **Shared cache**: `/data/inductor-caches/<GPU_TYPE>/<key>.zip` \- Persistent, shared across workers

**How torch.compile() finds the cache:**When `load_inductor_cache()` is called, it sets the environment variable:

Report incorrect code

Copy

Ask AI

```
os.environ["TORCHINDUCTOR_CACHE_DIR"] = "/tmp/inductor-cache/"
```

PyTorch’s `torch.compile()` automatically reads this environment variable to locate compiled kernels. You don’t need to configure anything - just call `load_inductor_cache()` before `torch.compile()` and the connection happens automatically.

### [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#gpu-separation)  GPU Separation

Caches are GPU-specific (H100, H200, A100, etc.) and automatically organized by GPU type using `get_gpu_type()`. This ensures compiled kernels match the hardware they’ll run on.

### [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#process-flow)  Process Flow

The behavior differs based on whether a cache already exists:**Cache Miss (First Worker):**

1. Load attempt → Cache not found
2. Compilation phase → torch.compile() generates CUDA kernels
3. Kernels saved to `/tmp/inductor-cache/`
4. Warmup triggers compilation
5. Sync creates `.zip` and uploads to `/data/inductor-caches/<GPU_TYPE>/<cache_key>.zip`

**Cache Hit (Subsequent Workers):**

1. Load attempt → Cache found
2. Extract `.zip` to `/tmp/inductor-cache/`
3. torch.compile() finds existing kernels
4. Warmup uses cached kernels (no compilation)
5. Sync compares hash → Usually no-op (no changes to upload)

**Key Insight:** The “sync” operation is intelligent - it only uploads if new kernels were generated.

This does **not** change model outputs or behavior - only startup speed changes. The compiled model produces identical results to the uncompiled version.

## [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#best-practices)  Best Practices

### [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#warmup-coverage)  Warmup Coverage

Warm up with representative input shapes to maximize cache coverage:

Report incorrect code

Copy

Ask AI

```
with synchronized_inductor_cache("my-model/v1"):
    self.model = torch.compile(
        self.model,
        mode="max-autotune",
        dynamic=True,  # Important! Allows flexibility
    )

    # Cover common input sizes
    for width, height in [(512, 512), (768, 512), (1024, 1024)]:
        self.warmup(width, height)
```

**Tips:**

- Use `dynamic=True` for flexibility across input variations
- Cover 3-5 representative sizes
- Focus on your most common use cases
- **Tradeoff**: More warmup shapes = longer startup, but faster inference

### [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#when-to-skip)  When to Skip

Not all models benefit from Inductor caching:

- **CPU-only models** \- No GPU compilation involved
- **Models without torch.compile** \- No Inductor caching needed
- **Lightweight models** \- Minimal compilation overhead, caching may not be worth it

## [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#troubleshooting)  Troubleshooting

### [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#workers-still-compiling-cache-not-working-)  Workers Still Compiling (Cache Not Working)?

If you see compilation happening on every worker despite using `synchronized_inductor_cache`:**1\. Verify you’re calling warmup inside the cache context**

Report incorrect code

Copy

Ask AI

```
# ❌ Wrong - warmup outside cache context
with synchronized_inductor_cache("model/v1"):
    model = torch.compile(model)
# Warmup after context exits - not cached!
warmup()

# ✅ Correct - warmup inside cache context
with synchronized_inductor_cache("model/v1"):
    model = torch.compile(model)
    warmup()  # Triggers compilation, cache is saved
```

**2\. Use `dynamic=True` for flexible input shapes**

Report incorrect code

Copy

Ask AI

```
# ❌ Without dynamic - compiles separately for each shape
model = torch.compile(model, mode="max-autotune")
warmup(512, 512)   # Compiles for 512x512
# Later: different size triggers recompilation
generate(768, 768)  # Recompiles for 768x768!

# ✅ With dynamic - handles shape variations
model = torch.compile(model, mode="max-autotune", dynamic=True)
warmup(512, 512)   # Compiles with dynamic shapes
generate(768, 768)  # Uses cached kernels! ✓
```

**3\. Cover common input shapes in warmup**If you see compilation during inference, you can add those shapes to warmup (note: this increases startup time):

Report incorrect code

Copy

Ask AI

```
with synchronized_inductor_cache("model/v1"):
    model = torch.compile(model, dynamic=True)

    # Warmup with all commonly used sizes
    for size in [(512, 512), (768, 512), (1024, 1024)]:
        warmup(*size)
```

### [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#debugging)  Debugging

Enable verbose logging to see what PyTorch is doing:

Report incorrect code

Copy

Ask AI

```
import os
os.environ["TORCH_LOGS"] = "recompiles"
os.environ["TORCHINDUCTOR_VERBOSE"] = "1"

# Now you'll see detailed compilation messages
```

## [​](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches\#see-also)  See Also

[**Optimize Model Performance** \\
\\
Learn about torch.compile and the `optimize()` helper](https://docs.fal.ai/serverless/optimizations/optimize-model-performance) [**Use Persistent Storage** \\
\\
Understand the `/data` directory for persistent storage](https://docs.fal.ai/serverless/development/use-persistent-storage) [**Deploy Multi-GPU Inference** \\
\\
Deploy large compiled models across multiple GPUs](https://docs.fal.ai/serverless/tutorials/deploy-multi-gpu-inference)

Was this page helpful?

YesNo

[Optimize Model Performance\\
\\
Previous](https://docs.fal.ai/serverless/optimizations/optimize-model-performance) [Optimize Container Images\\
\\
Next](https://docs.fal.ai/serverless/optimizations/optimize-container-images)

Ctrl+I

### 🔒 Need Serverless Access?

×

Don't have access to fal Serverless yet? Request access to deploy your custom models with instant GPU scaling.


[Request Access](https://fal.ai/dashboard/serverless-get-started)

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)