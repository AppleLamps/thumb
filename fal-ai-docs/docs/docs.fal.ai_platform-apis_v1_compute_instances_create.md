---
url: "https://docs.fal.ai/platform-apis/v1/compute/instances/create"
title: "Create Compute Instance - fal"
---

[Skip to main content](https://docs.fal.ai/platform-apis/v1/compute/instances/create#content-area)

[fal home page![light logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/light.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=04c374284984bf56c89974379f02b7a2)![dark logo](https://mintcdn.com/fal-d8505a2e/_1QeqsRe91WUAOCJ/logo/dark.svg?fit=max&auto=format&n=_1QeqsRe91WUAOCJ&q=85&s=b136c77964ac416a72cb0bcba775d7c7)](https://fal.ai/)

Search...

Ctrl KAsk AI

Search...

Navigation

API Reference

Create Compute Instance

[![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/home.svg)Home](https://docs.fal.ai/) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/ar-cube-1.svg)Model APIs](https://docs.fal.ai/model-apis) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/rocket.svg)Serverless](https://docs.fal.ai/serverless) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/chip.svg)Compute](https://docs.fal.ai/compute) [![https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg](https://mintlify.s3.us-west-1.amazonaws.com/fal-d8505a2e/images/icons/file-json.svg)Platform APIs](https://docs.fal.ai/platform-apis) [Changelog](https://docs.fal.ai/changelog)

- [Status](https://status.fal.ai/)
- [Community](https://discord.gg/fal-ai)
- [Blog](https://blog.fal.ai/)

- [Introduction](https://docs.fal.ai/platform-apis)

- [Authentication](https://docs.fal.ai/platform-apis/authentication)

- [OpenAPI Schema](https://docs.fal.ai/platform-apis/openapi-schema)

##### API Reference

- [Platform APIs for Models](https://docs.fal.ai/platform-apis/for-models)
- [GET\\
\\
Model search](https://docs.fal.ai/platform-apis/v1/models)
- [GET\\
\\
Pricing](https://docs.fal.ai/platform-apis/v1/models/pricing)
- [POST\\
\\
Estimate cost](https://docs.fal.ai/platform-apis/v1/models/pricing/estimate)
- [GET\\
\\
Usage](https://docs.fal.ai/platform-apis/v1/models/usage)
- [GET\\
\\
Analytics](https://docs.fal.ai/platform-apis/v1/models/analytics)
- [DEL\\
\\
Delete request payloads](https://docs.fal.ai/platform-apis/v1/models/requests/payloads)
- [Platform APIs for Serverless](https://docs.fal.ai/platform-apis/for-serverless)
- [GET\\
\\
Queue Size](https://docs.fal.ai/platform-apis/v1/serverless/apps/queue)
- [GET\\
\\
Metrics](https://docs.fal.ai/platform-apis/v1/serverless/metrics)
- [GET\\
\\
List files (root)](https://docs.fal.ai/platform-apis/v1/serverless/files/list)
- [GET\\
\\
List files (directory)](https://docs.fal.ai/platform-apis/v1/serverless/files/list/%7Bdir%7D)
- [GET\\
\\
Download file](https://docs.fal.ai/platform-apis/v1/serverless/files/file/%7Bfile%7D)
- [POST\\
\\
Upload file from URL](https://docs.fal.ai/platform-apis/v1/serverless/files/file/url/%7Bfile%7D)
- [POST\\
\\
Upload local file (multipart/form-data)](https://docs.fal.ai/platform-apis/v1/serverless/files/file/local/%7Btarget_path%7D)
- [POST\\
\\
Logs history (paginated)](https://docs.fal.ai/platform-apis/v1/serverless/logs/history)
- [POST\\
\\
Logs stream (SSE)](https://docs.fal.ai/platform-apis/v1/serverless/logs/stream)
- [Platform APIs for Compute](https://docs.fal.ai/platform-apis/for-compute)
- [GET\\
\\
List Compute Instances](https://docs.fal.ai/platform-apis/v1/compute/instances/list)
- [GET\\
\\
Get Compute Instance](https://docs.fal.ai/platform-apis/v1/compute/instances/get)
- [POST\\
\\
Create Compute Instance](https://docs.fal.ai/platform-apis/v1/compute/instances/create)
- [DEL\\
\\
Delete Compute Instance](https://docs.fal.ai/platform-apis/v1/compute/instances/delete)

Create Compute Instance

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.fal.ai/v1/compute/instances \
  --header 'Authorization: Key <api-key>' \
  --header 'Content-Type: application/json' \
  --data '
{
  "instance_type": "gpu_8x_h100_sxm5",
  "ssh_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC7Kl4... user@host",
  "sector": "sector_1"
}
'
```

201

400

401

403

429

500

Copy

Ask AI

```
{
  "id": "inst_abc123xyz",
  "instance_type": "gpu_8x_h100_sxm5",
  "region": "us-west",
  "sector": "sector_1",
  "status": "provisioning",
  "creator_user_nickname": "developer"
}
```

POST

/

compute

/

instances

Try it

Create Compute Instance

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.fal.ai/v1/compute/instances \
  --header 'Authorization: Key <api-key>' \
  --header 'Content-Type: application/json' \
  --data '
{
  "instance_type": "gpu_8x_h100_sxm5",
  "ssh_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC7Kl4... user@host",
  "sector": "sector_1"
}
'
```

201

400

401

403

429

500

Copy

Ask AI

```
{
  "id": "inst_abc123xyz",
  "instance_type": "gpu_8x_h100_sxm5",
  "region": "us-west",
  "sector": "sector_1",
  "status": "provisioning",
  "creator_user_nickname": "developer"
}
```

#### Authorizations

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#authorization-authorization)

Authorization

string

header

required

Admin API key must be prefixed with "Key ", e.g. Authorization: Key YOUR\_ADMIN\_API\_KEY

#### Headers

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#parameter-idempotency-key)

Idempotency-Key

string

Optional idempotency key for safe request retries

Example:

`"550e8400-e29b-41d4-a716-446655440000"`

#### Body

application/json

Request body for creating a new compute instance with SSH access

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#body-instance-type)

instance\_type

enum<string>

required

Type of compute instance to create

Available options:

`gpu_8x_h100_sxm5`,

`gpu_1x_h100_sxm5`

Example:

`"gpu_1x_h100_sxm5"`

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#body-ssh-key)

ssh\_key

string

required

SSH public key for accessing the instance (e.g., 'ssh-rsa AAAAB3...')

Minimum string length: `1`

Example:

`"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC... user@host"`

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#body-sector)

sector

enum<string>

Sector for InfiniBand configuration (only valid with gpu\_8x\_h100\_sxm5)

Available options:

`sector_1`,

`sector_2`,

`sector_3`

Example:

`"sector_1"`

#### Response

201

application/json

Compute instance created successfully

Compute instance details including configuration, location, and status

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#response-id)

id

string

required

Unique identifier for the compute instance

Example:

`"inst_abc123xyz"`

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#response-instance-type)

instance\_type

enum<string>

required

Type of compute instance (GPU configuration)

Available options:

`gpu_8x_h100_sxm5`,

`gpu_1x_h100_sxm5`

Example:

`"gpu_1x_h100_sxm5"`

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#response-region)

region

enum<string>

required

Geographical region where the instance is located

Available options:

`us-west`,

`us-central`,

`us-east`,

`eu-north`,

`eu-west`,

`other`

Example:

`"us-west"`

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#response-status)

status

enum<string>

required

Current operational status of the instance

Available options:

`ready`,

`init`,

`pending`,

`provisioning`,

`stopped`,

`unknown`

Example:

`"ready"`

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#response-sector)

sector

enum<string>

Sector identifier for instance placement within the region (if applicable)

Available options:

`sector_1`,

`sector_2`,

`sector_3`

Example:

`"sector_1"`

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#response-ip)

ip

string

IP address of the instance (available when instance is ready)

Example:

`"203.0.113.42"`

[​](https://docs.fal.ai/platform-apis/v1/compute/instances/create#response-creator-user-nickname)

creator\_user\_nickname

string

Nickname of the user who created this instance

Example:

`"developer"`

Was this page helpful?

YesNo

[Get Compute Instance\\
\\
Previous](https://docs.fal.ai/platform-apis/v1/compute/instances/get) [Delete Compute Instance\\
\\
Next](https://docs.fal.ai/platform-apis/v1/compute/instances/delete)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

[Create support ticket](mailto:support@fal.ai)