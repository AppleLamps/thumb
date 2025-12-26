---
url: "https://docs.fal.ai/changelog"
title: "Product Changelog - fal"
---

[Skip to main content](https://docs.fal.ai/changelog#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

Product Changelog

[![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg)Home](https://docs.fal.ai/) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg)Model APIs](https://docs.fal.ai/model-apis) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg)Serverless](https://docs.fal.ai/serverless) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg)Compute](https://docs.fal.ai/compute) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg)Platform APIs](https://docs.fal.ai/platform-apis) [Changelog](https://docs.fal.ai/changelog)

- [Status](https://status.fal.ai/)
- [Community](https://discord.gg/fal-ai)
- [Blog](https://blog.fal.ai/)

- [Product Changelog](https://docs.fal.ai/changelog)

FiltersClear

ServerlessCLIDashboardRunnersFilesModels APILogsOnboardingPlatform APIAnalyticsMCPMulti-GPUProduct

[​](https://docs.fal.ai/changelog#december-22%2C-2025)

December 22, 2025

Serverless

## [​](https://docs.fal.ai/changelog\#add-a-health-check-endpoint-to-your-application)  Add a health check endpoint to your application

Add a health check endpoint to your application to automatically replace unhealthy runners.

- **Health check endpoint** \- Pass the `health_check` parameter to the `@fal.endpoint()` decorator to configure an endpoint as your health check
- **Periodic checks and recovery** \- fal periodically (every 15 seconds) calls this endpoint and replace unhealthy runners if it fails for a few consecutive calls

Example:

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    @fal.endpoint("/health", health_check=fal.HealthCheck(failure_threshold=3))
    def health(self) -> HealthResponse:
        if not self.connection.is_alive():
            raise RuntimeError("Lost connection to the external service")
        return HealthResponse(status="ok")
```

See [health check endpoint docs](https://docs.fal.ai/serverless/development/add-health-check-endpoint).

[​](https://docs.fal.ai/changelog#december-22%2C-2025-2)

December 22, 2025

Serverless

## [​](https://docs.fal.ai/changelog\#disable-environment-build-cache)  Disable environment build cache

You can now disable the environment build cache
by passing the `--force-env-build` flag to the `fal deploy` or `fal run` command.See [custom container image docs](https://docs.fal.ai/serverless/development/use-custom-container-image#disable-build-cache).

[​](https://docs.fal.ai/changelog#november-25%2C-2025)

November 25, 2025

Serverless

## [​](https://docs.fal.ai/changelog\#scale-your-application-with-the-new-scaling-delay-feature)  Scale your application with the new scaling delay feature

Scale your application with the new scaling delay feature.

- **Scaling delay** \- the amount of seconds the system will wait for a request to be picked up by a runner before triggering a scale up of a runner

Example:

Report incorrect code

Copy

Ask AI

```
class MyApp(fal.App):
    scaling_delay = 30
    # ...
```

See [scaling docs](https://docs.fal.ai/serverless/deployment-operations/scale-your-application#scaling-delay).

[​](https://docs.fal.ai/changelog#november-17%2C-2025)

November 17, 2025

Serverless

## [​](https://docs.fal.ai/changelog\#reduce-cold-start-times-with-shared-compiled-pytorch-caches)  Reduce cold start times with shared compiled PyTorch caches

Dramatically reduce cold start times for torch.compile() models with the new inductor cache utilities.

- **Load pre-compiled CUDA kernels** in ~2 seconds instead of recompiling for 20-30 seconds on each worker
- **GPU-specific caching** automatically organized by GPU type (H100, H200, A100)
- **Two usage patterns**: Manual control with `load_inductor_cache()` / `sync_inductor_cache()` or automatic with `synchronized_inductor_cache()` context manager
- **Persistent shared storage** at `/data/inductor-caches/<GPU_TYPE>/<cache_key>.zip`
- First worker compiles and shares, subsequent workers load instantly

Example:

Report incorrect code

Copy

Ask AI

```
from fal.toolkit import synchronized_inductor_cache

with synchronized_inductor_cache("mymodel/v1"):
    self.model = torch.compile(self.model)
    self.warmup()  # Compilation happens once, synced automatically
```

See [compilation cache docs](https://docs.fal.ai/serverless/optimizations/optimize-startup-with-compiled-caches).

[​](https://docs.fal.ai/changelog#november-14%2C-2025)

November 14, 2025

ServerlessDashboard

## [​](https://docs.fal.ai/changelog\#get-slack-notifications-for-serverless-app-failures)  Get Slack notifications for serverless app failures

Never miss critical issues with instant Slack alerts for your serverless applications.

- **Connect your workspace** with one-click OAuth installation
- **Choose notification channel** from a dropdown of your Slack channels
- **Instant alerts for**:

  - App startup failures and timeouts
  - Critical platform issues
  - Real-time error notifications
- **Team visibility** \- everyone in the channel sees important updates
- Configure at `https://fal.ai/dashboard/notifications/settings`

[​](https://docs.fal.ai/changelog#november-4%2C-2025)

November 4, 2025

ServerlessDashboardRunnersLogs

## [​](https://docs.fal.ai/changelog\#stop-and-kill-runners-directly-from-the-dashboard)  Stop and kill runners directly from the dashboard

No more switching to the CLI to manage your runners. You now have full lifecycle control right from the dashboard.

- **Graceful shutdown** or **force kill** runners with a single click
- Access at `https://fal.ai/dashboard/apps/{username}/{appname}/runners`

## [​](https://docs.fal.ai/changelog\#stream-platform-logs-to-your-own-endpoint-with-drains)  Stream platform logs to your own endpoint with drains

Integrate fal’s logging with your existing observability stack using the new Serverless Drains feature.

- **Automatic log forwarding** from apps, runners, and file operations in NDJSON format
- Works with Datadog, Splunk, Elasticsearch, or any HTTP endpoint
- Configure at `https://fal.ai/dashboard/drains`

[​](https://docs.fal.ai/changelog#november-2%2C-2025)

November 2, 2025

CLIFilesServerless

## [​](https://docs.fal.ai/changelog\#upload-larger-files-with-improved-timeout-handling)  Upload larger files with improved timeout handling

We’ve significantly improved the reliability of file uploads from URLs, especially for large datasets and model files.

- **Extended timeout to 10 minutes** for `fal files upload` and `fal files upload-url`
- Upload multi-GB files without timeout errors
- See [`fal files` docs](https://docs.fal.ai/serverless/cli/files)

[​](https://docs.fal.ai/changelog#november-1%2C-2025)

November 1, 2025

CLIRunnersServerless

## [​](https://docs.fal.ai/changelog\#restart-all-runners-without-redeploying)  Restart all runners without redeploying

Apply environment changes or recover from bad states instantly with the new `fal apps rollout` command.

- **Restart all runners** for an app without creating a new deployment
- **Graceful by default** (runners finish current requests) or use `--force` for immediate restart
- Pick up new secrets, environment variables, or clear memory issues
- See [`fal apps rollout` docs](https://docs.fal.ai/serverless/cli/apps/rollout)

## [​](https://docs.fal.ai/changelog\#stop-specific-runners-without-affecting-others)  Stop specific runners without affecting others

Target individual runners for maintenance with graceful shutdown via `fal runners stop`.

- Stop specific runners without affecting others, useful for targeted maintenance
- See [`fal runners` docs](https://docs.fal.ai/serverless/cli/runners)

## [​](https://docs.fal.ai/changelog\#debug-production-runners-with-interactive-shell-access)  Debug production runners with interactive shell access

Jump directly into any running container to troubleshoot issues in real-time with `fal runners shell`.

- **SSH-like access** to inspect files, environment variables, and dependencies
- Debug production issues without redeploying
- See [`fal runners shell` docs](https://docs.fal.ai/serverless/cli/runners#shell)

[​](https://docs.fal.ai/changelog#october-31%2C-2025)

October 31, 2025

DashboardServerless

## [​](https://docs.fal.ai/changelog\#see-everything-happening-in-your-app-with-the-events-timeline)  See everything happening in your app with the events timeline

Complete activity history for runners, deployments, and config changes in one place.

- **Unified timeline** of runner events, deployments, and config changes
- Access at `https://fal.ai/dashboard/apps/{username}/{appname}/events`

[​](https://docs.fal.ai/changelog#october-25%2C-2025)

October 25, 2025

DashboardServerlessOnboarding

## [​](https://docs.fal.ai/changelog\#get-from-zero-to-deployed-in-minutes-with-in-app-onboarding)  Get from zero to deployed in minutes with in-app onboarding

New interactive guide walks you through your first serverless deployment step-by-step.

- **Step-by-step walkthrough** from installation to deployment with copy-paste examples
- Access at `https://fal.ai/dashboard/serverless-get-started`

[​](https://docs.fal.ai/changelog#october-22%2C-2025)

October 22, 2025

CLIFiles

## [​](https://docs.fal.ai/changelog\#delete-files-from-fal-storage)  Delete files from fal storage

Remove files and directories with the new `fal files rm` command.

- **Recursive deletion**: `fal files rm path/to/file-or-directory`
- See [`fal files` docs](https://docs.fal.ai/serverless/cli/files)

[​](https://docs.fal.ai/changelog#october-21%2C-2025)

October 21, 2025

Platform APIModels APIAnalyticsServerless

## [​](https://docs.fal.ai/changelog\#platform-apis-v1-officially-released)  Platform APIs v1 officially released

Programmatically manage your model deployments with the new Platform APIs.

- **Model discovery** \- search and metadata retrieval for 600+ models
- **Pricing and cost estimation** \- real-time pricing information
- **Usage tracking** \- detailed line items with quantities and prices
- **Analytics** \- request counts, error rates, and latency percentiles
- Available at `https://api.fal.ai/v1` \- see [docs](https://docs.fal.ai/platform-apis)

## [​](https://docs.fal.ai/changelog\#get-notified-when-you-hit-concurrent-requests-limits)  Get notified when you hit concurrent requests limits

Never wonder why requests are queuing—we now send notifications when you reach your concurrency limit.

- **Email and dashboard notifications** with smart throttling (immediate, 1h, 1d, weekly)
- **Limit value included** in 429 responses for programmatic handling

## [​](https://docs.fal.ai/changelog\#debug-errors-faster-with-the-new-errors-page)  Debug errors faster with the new errors page

Comprehensive error analytics to identify and resolve issues quickly.

- **Server vs client error rates** with 4xx/5xx breakdown and sparklines
- **Error timeline** with status code distribution and endpoint-level breakdown
- Access at `https://fal.ai/dashboard/apps/{username}/{appname}/errors`

[​](https://docs.fal.ai/changelog#october-20%2C-2025)

October 20, 2025

CLIRunnersServerless

## [​](https://docs.fal.ai/changelog\#stop-or-kill-individual-runners-from-the-command-line)  Stop or kill individual runners from the command line

Precise control over each runner’s lifecycle without touching the dashboard.

- **`fal runners stop`** \- gracefully stop a runner, allowing in-flight requests to complete
- **`fal runners kill`** \- immediately terminate a runner without waiting
- See [`fal runners` docs](https://docs.fal.ai/serverless/cli/runners)

[​](https://docs.fal.ai/changelog#october-16%2C-2025)

October 16, 2025

DashboardServerlessCLI

## [​](https://docs.fal.ai/changelog\#see-exactly-how-long-runners-spend-starting-up)  See exactly how long runners spend starting up

Identify GPU availability bottlenecks and optimize cold start times.

- **Pending uptime metrics** show how long runners wait before becoming active
- Track PENDING, DOCKER\_PULL, and SETUP state durations separately

[​](https://docs.fal.ai/changelog#october-15%2C-2025)

October 15, 2025

ServerlessMCPModels API

## [​](https://docs.fal.ai/changelog\#connect-fal-docs-to-cursor-with-mcp)  Connect fal docs to Cursor with MCP

Access the complete fal documentation directly in Cursor using Model Context Protocol.

- **Complete documentation in your IDE** with AI-powered suggestions
- Simple setup: add fal MCP server to your `mcp.json` \- see [guide](https://docs.fal.ai/model-apis/mcp)

## [​](https://docs.fal.ai/changelog\#personalized-dashboard-with-creator-and-developer-views)  Personalized dashboard with creator and developer views

The dashboard now adapts to your workflow with two distinct experiences.

- **Creator view** \- gallery-focused with favorite models and visual generation history
- **Developer view** \- metrics-driven with usage stats, error tracking, and API analytics
- **Quick stats** showing credits, requests, and errors with sparklines

[​](https://docs.fal.ai/changelog#october-13%2C-2025)

October 13, 2025

ServerlessModels APIMulti-GPU

## [​](https://docs.fal.ai/changelog\#add-custom-headers-to-your-api-requests)  Add custom headers to your API requests

Integrate seamlessly with analytics, auth, and middleware by passing custom HTTP headers.

- Add custom headers for analytics, authentication, or middleware integration
- Works with all client libraries

## [​](https://docs.fal.ai/changelog\#multi-gpu-inference-and-training-with-fal-distributed)  Multi-GPU inference and training with fal.distributed

Scale AI workloads across multiple GPUs with the new `fal.distributed` module.

- **Data parallelism** \- generate multiple outputs simultaneously (e.g., 4 images on 4 GPUs)
- **Model parallelism** \- split large models across GPUs for faster generation
- **Distributed training** \- synchronized gradient updates with DDP
- Supports 2, 4, or 8 GPU configurations on H100s and A100s
- See [distributed docs](https://docs.fal.ai/serverless/distributed/overview)

[​](https://docs.fal.ai/changelog#october-10%2C-2025)

October 10, 2025

DashboardServerless

## [​](https://docs.fal.ai/changelog\#dedicated-pages-for-analytics,-runners,-logs,-and-versions)  Dedicated pages for Analytics, Runners, Logs, and Versions

Complete app details redesign gives each deployment aspect its own focused view.

- **New Analytics page** \- runner-focused metrics with date range filtering
- **New Runners page** \- app-scoped runner view with enhanced filters
- **New Logs page** \- dedicated log viewer for debugging
- **New Versions page** \- manage and view app revisions
- **Enhanced Overview** \- endpoint stats and performance metrics at a glance

[​](https://docs.fal.ai/changelog#october-9%2C-2025)

October 9, 2025

Product

## [​](https://docs.fal.ai/changelog\#compare-models-side-by-side-in-the-new-sandbox)  Compare models side-by-side in the new Sandbox

Find the perfect model by testing multiple options in parallel with the same prompt.

- Run multiple models simultaneously with the same prompt
- Available at `https://fal.ai/sandbox`

[​](https://docs.fal.ai/changelog#october-8%2C-2025)

October 8, 2025

Serverless

## [​](https://docs.fal.ai/changelog\#manage-deployments-from-python-without-async/await)  Manage deployments from Python without async/await

New synchronous client makes serverless management feel just like the CLI.

- Manage apps, runners, and deployments programmatically without async/await
- Same API as CLI: `client.apps.*`, `client.runners.*`, `client.deploy()`
- See [Python client docs](https://docs.fal.ai/serverless/python/client)

[​](https://docs.fal.ai/changelog#october-6%2C-2025)

October 6, 2025

Serverless

## [​](https://docs.fal.ai/changelog\#bring-your-own-container-to-any-deployment)  Bring your own container to any deployment

Full control over your runtime environment with custom Docker images.

- Use `ContainerImage.from_dockerfile_str()` or `ContainerImage.from_dockerfile()`
- Install any dependencies, tools, or system packages you need
- See [custom containers guide](https://docs.fal.ai/serverless/development/use-custom-container-image)

[​](https://docs.fal.ai/changelog#october-3%2C-2025)

October 3, 2025

ServerlessCLIDashboardFiles

## [​](https://docs.fal.ai/changelog\#dynamic-auto-scaling-with-percentage-based-buffers)  Dynamic auto-scaling with percentage-based buffers

Scale more intelligently by setting concurrency buffers as percentages instead of fixed numbers.

- Configure buffer as a percentage of current concurrency for dynamic scaling
- See [scaling docs](https://docs.fal.ai/serverless/deployment-operations/scale-your-application)

## [​](https://docs.fal.ai/changelog\#runner-logs-with-streaming-and-filtering)  Runner logs with streaming and filtering

Real-time log streaming and powerful filtering for faster debugging.

- **Stream logs in real-time** with `fal runners logs --follow`
- **Filter by time range** with `--since` and `--until`
- **Search logs** with `--search` parameter
- **Scrollable and searchable** in the dashboard with SSE-powered updates
- See [`fal runners logs` docs](https://docs.fal.ai/serverless/cli/runners#logs)

## [​](https://docs.fal.ai/changelog\#include-local-files-in-your-deployments-automatically)  Include local files in your deployments automatically

Bring configs, utilities, and code from your local machine into serverless apps.

- Specify files with relative or absolute paths to include at runtime
- Works with `fal run` and `fal deploy`
- See [app files docs](https://docs.fal.ai/serverless/development/app-files)

## [​](https://docs.fal.ai/changelog\#find-what-you-need-faster-with-reorganized-navigation)  Find what you need faster with reorganized navigation

Clearer dashboard structure groups features by workflow: Generate, Serverless, and Manage.

- **Generate** group: Sandbox, Model Gallery
- **Serverless** group: Apps, Logs, Files, Runners
- **Manage** group: Usage, Billing, API Keys, Webhooks, Team Members

[​](https://docs.fal.ai/changelog#october-2%2C-2025)

October 2, 2025

DashboardRunnersCLI

## [​](https://docs.fal.ai/changelog\#know-exactly-which-version-each-runner-is-running)  Know exactly which version each runner is running

Track deployments better with revision IDs shown on every runner.

- **Revision ID displayed** on runners to track which version is running
- **State renamed**: “DEAD” → “TERMINATED” for clarity

[​](https://docs.fal.ai/changelog#october-1%2C-2025)

October 1, 2025

LogsDashboardCLIServerless

## [​](https://docs.fal.ai/changelog\#filter-logs-with-custom-labels-and-powerful-queries)  Filter logs with custom labels and powerful queries

Find what you need instantly with EXACT/CONTAINS matching and multi-condition filters.

- **EXACT or CONTAINS** matching for label values
- **Multiple conditions** with OR logic (e.g., `status IN ["error", "warning"]`)
- Available in dashboard and API
- Examples: `error_type = "ValidationError"`, `endpoint CONTAINS "/api/v2/"`

## [​](https://docs.fal.ai/changelog\#see-what-runners-are-doing-during-startup)  See what runners are doing during startup

Track exactly where runners are in the startup process—pending, pulling images, or setting up.

- `fal runners list` now shows PENDING, DOCKER\_PULL, and SETUP states
- Understand deployment progress in real-time

## [​](https://docs.fal.ai/changelog\#view-all-app-endpoints-and-config-at-a-glance)  View all app endpoints and config at a glance

Redesigned app details page surfaces the information you need most.

- Endpoints, configuration, and status all in one place

[​](https://docs.fal.ai/changelog#september-27%2C-2025)

September 27, 2025

CLIServerless

## [​](https://docs.fal.ai/changelog\#monitor-and-clear-your-request-queue-from-the-cli)  Monitor and clear your request queue from the CLI

Check how many requests are queued and flush them when needed.

- `fal queue size app_name` \- check queue size for an app
- `fal queue flush app_name` \- flush all pending requests
- See [`fal queue` docs](https://docs.fal.ai/serverless/cli/queue)

[​](https://docs.fal.ai/changelog#september-10%2C-2025)

September 10, 2025

CLIRunnersServerless

## [​](https://docs.fal.ai/changelog\#view-runner-history-with-time-based-filtering)  View runner history with time-based filtering

See terminated runners and filter by state to debug failures.

- `fal runners list --since "1h"` \- view runners from the last hour (max 24h)
- `fal runners list --state dead` \- filter by state (running, pending, setup, dead)
- Helpful for debugging failed deployments and understanding runner lifecycle
- See [`fal runners list` docs](https://docs.fal.ai/serverless/cli/runners#list)

[​](https://docs.fal.ai/changelog#august-29%2C-2025)

August 29, 2025

CLIFilesServerless

## [​](https://docs.fal.ai/changelog\#reorganize-files-in-fal-storage-without-re-uploading)  Reorganize files in fal storage without re-uploading

Move and rename files instantly with the new `fal files mv` command.

- Rename or move files in fal storage: `fal files mv source destination`
- See [`fal files` docs](https://docs.fal.ai/serverless/cli/files)

[​](https://docs.fal.ai/changelog#august-26%2C-2025)

August 26, 2025

CLIServerless

## [​](https://docs.fal.ai/changelog\#see-all-your-endpoint-urls-immediately-when-testing)  See all your endpoint URLs immediately when testing

No more guessing which URL to use—CLI shows playground, sync, and async routes for every run.

- CLI prints playground, synchronous, and asynchronous routes for `fal run`

Was this page helpful?

YesNo

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)