---
url: "https://docs.fal.ai/compute"
title: "Introduction to Compute - fal"
---

[Skip to main content](https://docs.fal.ai/compute#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Introduction to Compute

[![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg)Home](https://docs.fal.ai/) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg)Model APIs](https://docs.fal.ai/model-apis) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg)Serverless](https://docs.fal.ai/serverless) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg)Compute](https://docs.fal.ai/compute) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg)Platform APIs](https://docs.fal.ai/platform-apis) [Changelog](https://docs.fal.ai/changelog)

- [Status](https://status.fal.ai/)
- [Community](https://discord.gg/fal-ai)
- [Blog](https://blog.fal.ai/)

- [Introduction](https://docs.fal.ai/compute)

- [Connect to Cursor](https://docs.fal.ai/compute/mcp)

- [Quickstart](https://docs.fal.ai/compute/quickstart)

##### Reference

- [Platform APIs for Compute](https://docs.fal.ai/compute/platform-apis)

On this page

- [What is fal Compute?](https://docs.fal.ai/compute#what-is-fal-compute)
- [Key Features](https://docs.fal.ai/compute#key-features)
- [Dedicated GPU Resources](https://docs.fal.ai/compute#dedicated-gpu-resources)
- [High-Performance Infrastructure](https://docs.fal.ai/compute#high-performance-infrastructure)
- [Scalability & Performance](https://docs.fal.ai/compute#scalability-%26-performance)
- [Available Instance Types](https://docs.fal.ai/compute#available-instance-types)
- [When to Use fal Compute](https://docs.fal.ai/compute#when-to-use-fal-compute)
- [Machine Learning & AI](https://docs.fal.ai/compute#machine-learning-%26-ai)
- [Research & Development](https://docs.fal.ai/compute#research-%26-development)
- [Architecture Benefits](https://docs.fal.ai/compute#architecture-benefits)
- [InfiniBand Connectivity](https://docs.fal.ai/compute#infiniband-connectivity)
- [Enterprise Features](https://docs.fal.ai/compute#enterprise-features)

## [​](https://docs.fal.ai/compute\#what-is-fal-compute)  What is fal Compute?

fal Compute provides dedicated GPU clusters built for heavy workloads that require consistent, high-performance infrastructure. Our platform offers custom-optimized infrastructure with advanced networking capabilities, high-speed storage, and guaranteed resource availability for research applications.

## [​](https://docs.fal.ai/compute\#key-features)  Key Features

### [​](https://docs.fal.ai/compute\#dedicated-gpu-resources)  Dedicated GPU Resources

- **Full GPU control**: Complete control over your GPU resources for fine-tuning, training, and specialized workflows
- **Dedicated clusters**: Plan and manage your own capacity with guaranteed resource availability
- **Enterprise-grade**: Designed for production workloads with enterprise security and compliance features

### [​](https://docs.fal.ai/compute\#high-performance-infrastructure)  High-Performance Infrastructure

- **Custom-optimized infrastructure**: Infrastructure tailored to your specific workload requirements
- **High-speed SSD storage**: Fast data access for training datasets, efficient model loading, and low-latency I/O operations
- **InfiniBand interconnect**: Ultra-low latency and high bandwidth communication for distributed computing

### [​](https://docs.fal.ai/compute\#scalability-&-performance)  Scalability & Performance

- **Heavy workload support**: Built specifically for compute-intensive tasks that require sustained performance
- **Multi-node clusters**: Deploy multiple instances within the same sector for distributed workloads
- **Scalable architecture**: Scale your workloads across multiple interconnected instances

## [​](https://docs.fal.ai/compute\#available-instance-types)  Available Instance Types

| Instance Type | CPU Cores | RAM | GPU VRAM | Storage |
| --- | --- | --- | --- | --- |
| 1xH100-SXM | 16 | 200GB | 80GB (1x H100) | 1TB SSD |
| 8xH100-SXM | 128 | 1600GB | 640GB (8x H100) | 8TB SSD |

## [​](https://docs.fal.ai/compute\#when-to-use-fal-compute)  When to Use fal Compute

fal Compute is ideal for workloads that require:

### [​](https://docs.fal.ai/compute\#machine-learning-&-ai)  Machine Learning & AI

- **Large language model training**: Train models with billions of parameters across multiple GPUs
- **Custom model fine-tuning**: Dedicated resources for specialized model adaptation
- **Distributed training**: Leverage InfiniBand connectivity for faster multi-node training
- **Batch inference**: Large-scale inference jobs with predictable resource needs

### [​](https://docs.fal.ai/compute\#research-&-development)  Research & Development

- **Academic research**: Sustained compute access for research projects
- **Computer vision**: Process large image and video datasets
- **Scientific computing**: Computational fluid dynamics, molecular dynamics, simulations

## [​](https://docs.fal.ai/compute\#architecture-benefits)  Architecture Benefits

### [​](https://docs.fal.ai/compute\#infiniband-connectivity)  InfiniBand Connectivity

For distributed computing scenarios, fal Compute offers InfiniBand interconnect that provides:

- Ultra-low latency communication between nodes
- High bandwidth for efficient data transfer
- Optimized performance for distributed AI training
- Seamless scaling across multiple instances

### [​](https://docs.fal.ai/compute\#enterprise-features)  Enterprise Features

- Guaranteed resource availability with dedicated clusters
- Enterprise security and compliance capabilities
- Custom infrastructure optimization for specific workloads
- Professional support for production deployments

Ready to get started? Check out our [Quickstart Guide](https://docs.fal.ai/compute/quickstart) to provision your first instance.

Was this page helpful?

YesNo

[Connect fal to Cursor\\
\\
Next](https://docs.fal.ai/compute/mcp)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)