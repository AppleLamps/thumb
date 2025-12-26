---
url: "https://docs.fal.ai/compute/quickstart"
title: "Quickstart with Compute - fal"
---

[Skip to main content](https://docs.fal.ai/compute/quickstart#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Quickstart with Compute

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

- [Prerequisites](https://docs.fal.ai/compute/quickstart#prerequisites)
- [Generate SSH Key (if needed)](https://docs.fal.ai/compute/quickstart#generate-ssh-key-if-needed)
- [Step 1: Create Your Instance](https://docs.fal.ai/compute/quickstart#step-1%3A-create-your-instance)
- [Step 2: Connect to Your Instance](https://docs.fal.ai/compute/quickstart#step-2%3A-connect-to-your-instance)
- [Step 3: Verify Your Setup](https://docs.fal.ai/compute/quickstart#step-3%3A-verify-your-setup)
- [Step 4: Install Your Dependencies](https://docs.fal.ai/compute/quickstart#step-4%3A-install-your-dependencies)
- [Step 5: Run Your First Workload](https://docs.fal.ai/compute/quickstart#step-5%3A-run-your-first-workload)
- [Step 6: Transfer Your Data](https://docs.fal.ai/compute/quickstart#step-6%3A-transfer-your-data)
- [Next Steps](https://docs.fal.ai/compute/quickstart#next-steps)
- [For Machine Learning](https://docs.fal.ai/compute/quickstart#for-machine-learning)
- [For Multi-GPU Workloads (8xH100)](https://docs.fal.ai/compute/quickstart#for-multi-gpu-workloads-8xh100)
- [For Multi-Node Clusters](https://docs.fal.ai/compute/quickstart#for-multi-node-clusters)
- [Managing Your Instance](https://docs.fal.ai/compute/quickstart#managing-your-instance)
- [Troubleshooting](https://docs.fal.ai/compute/quickstart#troubleshooting)
- [Common Issues](https://docs.fal.ai/compute/quickstart#common-issues)
- [Getting Help](https://docs.fal.ai/compute/quickstart#getting-help)

**Enterprise**To request access and learn more about fal Compute, please visit the [dashboard](https://fal.ai/dashboard) to get started.

## [​](https://docs.fal.ai/compute/quickstart\#prerequisites)  Prerequisites

Before you begin, make sure you have:

- A fal.ai account with Compute access
- An SSH key pair for secure instance access
- Basic familiarity with SSH and command line tools

### [​](https://docs.fal.ai/compute/quickstart\#generate-ssh-key-if-needed)  Generate SSH Key (if needed)

If you don’t have an SSH key pair, generate one:

Report incorrect code

Copy

Ask AI

```
# Generate a new SSH key pair
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Display your public key (you'll need this for instance creation)
cat ~/.ssh/id_rsa.pub
```

## [​](https://docs.fal.ai/compute/quickstart\#step-1:-create-your-instance)  Step 1: Create Your Instance

1

Access the Dashboard

- Navigate to the [fal Compute Dashboard](https://fal.ai/dashboard/compute)
- Click the **“Create”** button

2

Configure Your Instance

- **Instance Type**: Choose between:

  - `1xH100-SXM`: Single GPU for development and smaller workloads
  - `8xH100-SXM`: Eight GPUs for large-scale training and inference
- **Sector Selection**:

  - **Default**: For single-instance workloads
  - **Specific Sector**: For multi-node clusters with InfiniBand connectivity
- **SSH Key**: Paste your public SSH key for secure access

3

Launch Instance

- Review your configuration
- Click **“Create”** to provision your instance
- Wait for the instance to reach “ready” state (typically 2-3 minutes)

## [​](https://docs.fal.ai/compute/quickstart\#step-2:-connect-to-your-instance)  Step 2: Connect to Your Instance

Once your instance is running, you’ll receive connection details:

Report incorrect code

Copy

Ask AI

```
# Connect via SSH (replace with your actual connection details)
ssh ubuntu@your-instance-ip

# Example connection
ssh ubuntu@203.0.113.10
```

## [​](https://docs.fal.ai/compute/quickstart\#step-3:-verify-your-setup)  Step 3: Verify Your Setup

After connecting, check your GPU resources:

Report incorrect code

Copy

Ask AI

```
# Check GPU availability
nvidia-smi

# Verify CUDA installation
nvcc --version

# Check storage
df -h

# View system resources
htop
```

Expected output for 1xH100-SXM:

Report incorrect code

Copy

Ask AI

```
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 525.xx.xx    Driver Version: 525.xx.xx    CUDA Version: 12.x   |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA H100-SXM...  Off  | 00000000:01:00.0 Off |                    0 |
| N/A   27C    P0    68W / 700W |      0MiB / 81920MiB |      0%      Default |
|                               |                      |             Disabled |
+-------------------------------+----------------------+----------------------+
```

## [​](https://docs.fal.ai/compute/quickstart\#step-4:-install-your-dependencies)  Step 4: Install Your Dependencies

Install your required software stack:

Report incorrect code

Copy

Ask AI

```
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Python and pip (if not already installed)
sudo apt install python3 python3-pip -y

# Install common ML libraries
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121

# Verify PyTorch can see your GPU
python3 -c "import torch; print(f'CUDA available: {torch.cuda.is_available()}'); print(f'GPU count: {torch.cuda.device_count()}')"
```

## [​](https://docs.fal.ai/compute/quickstart\#step-5:-run-your-first-workload)  Step 5: Run Your First Workload

Test your setup with a simple GPU workload:

test\_gpu.py

Report incorrect code

Copy

Ask AI

```
import torch
import time

# Check if CUDA is available
print(f"CUDA available: {torch.cuda.is_available()}")
print(f"GPU count: {torch.cuda.device_count()}")

if torch.cuda.is_available():
    # Create large tensors on GPU
    device = torch.device('cuda')

    # Simple matrix multiplication test
    print("Running GPU compute test...")
    start_time = time.time()

    a = torch.randn(10000, 10000, device=device)
    b = torch.randn(10000, 10000, device=device)
    c = torch.matmul(a, b)

    end_time = time.time()
    print(f"Matrix multiplication completed in {end_time - start_time:.2f} seconds")
    print(f"GPU memory used: {torch.cuda.memory_allocated(device) / 1024**3:.2f} GB")
```

Run the test:

Report incorrect code

Copy

Ask AI

```
python3 test_gpu.py
```

## [​](https://docs.fal.ai/compute/quickstart\#step-6:-transfer-your-data)  Step 6: Transfer Your Data

For training workloads, you’ll need to transfer your datasets:

Report incorrect code

Copy

Ask AI

```
# Using scp to transfer files
scp -r /local/path/to/dataset user@your-instance-ip:/remote/path/

# Using rsync for large datasets
rsync -avz -P /local/path/to/dataset/ user@your-instance-ip:/remote/path/dataset/

# Or download directly on the instance
wget https://example.com/dataset.tar.gz
tar -xzf dataset.tar.gz
```

## [​](https://docs.fal.ai/compute/quickstart\#next-steps)  Next Steps

Now that your instance is running, you can:

### [​](https://docs.fal.ai/compute/quickstart\#for-machine-learning)  For Machine Learning

- **Training**: Start your training scripts with dedicated GPU resources
- **Fine-tuning**: Adapt pre-trained models with your custom datasets
- **Inference**: Deploy models for batch or real-time inference

### [​](https://docs.fal.ai/compute/quickstart\#for-multi-gpu-workloads-8xh100)  For Multi-GPU Workloads (8xH100)

- **Distributed Training**: Use frameworks like DeepSpeed, Horovod, or PyTorch DDP
- **Model Parallelism**: Split large models across multiple GPUs
- **Data Parallelism**: Process multiple batches simultaneously

### [​](https://docs.fal.ai/compute/quickstart\#for-multi-node-clusters)  For Multi-Node Clusters

- **InfiniBand Setup**: Configure high-speed inter-node communication
- **Cluster Management**: Use tools like SLURM or Kubernetes for job scheduling
- **Distributed Computing**: Scale workloads across multiple instances

## [​](https://docs.fal.ai/compute/quickstart\#managing-your-instance)  Managing Your Instance

Report incorrect code

Copy

Ask AI

```
# Monitor GPU usage
watch -n 1 nvidia-smi

# Check disk usage
df -h

# Monitor system resources
htop

# Check network connectivity (for multi-node)
ibstatus  # InfiniBand status
```

## [​](https://docs.fal.ai/compute/quickstart\#troubleshooting)  Troubleshooting

### [​](https://docs.fal.ai/compute/quickstart\#common-issues)  Common Issues

**SSH Connection Failed**

- Verify your SSH key is correctly configured
- Check instance status in the dashboard
- Ensure your IP is not blocked by firewalls

**GPU Not Detected**

- Run `nvidia-smi` to check GPU status
- Verify CUDA installation with `nvcc --version`
- Restart the instance if GPU drivers aren’t loaded

**Out of Memory Errors**

- Monitor GPU memory with `nvidia-smi`
- Reduce batch sizes in your training scripts
- Use gradient checkpointing to save memory

### [​](https://docs.fal.ai/compute/quickstart\#getting-help)  Getting Help

- Check the [fal.ai documentation](https://docs.fal.ai/compute/quickstart#) for detailed guides
- Contact support through the dashboard for technical issues
- Join the community forums for user discussions

Was this page helpful?

YesNo

[Connect fal to Cursor\\
\\
Previous](https://docs.fal.ai/compute/mcp) [Platform APIs for Compute\\
\\
Next](https://docs.fal.ai/compute/platform-apis)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)