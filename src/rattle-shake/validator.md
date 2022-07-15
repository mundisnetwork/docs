---
title: Validator nodes
---
This section describes how to run a Mundis DEVNET validator node.

## Hardware & Software Requirements

The following requirements for running your validator are mandatory, as stated in the [Registration](/rattle-shake/register) section.

- _Software_ : `Ubuntu 20.04 x64` (Server or Desktop) is the only supported OS for the DEVNET.
- _Hardware_ :
  * CPU
    * 2.6GHz, or faster, 8 cores / 16 threads, or more
    * AVX2 instruction support
    * Support for AVX512f and/or SHA-NI instructions is helpful
  * RAM: 16GB, or more
  * Disks
    * Accounts & Ledger disk: 500GB stored on PCIe Gen3 x4 NVME SSD, or better
    * Operating System: 200GB
    * The OS may be installed on the Accounts & Ledger disk, though testing has shown better performance with the ledger on its own disk
  * GPU: not necessary at this time
- _Network_ :
  * Ensure **the machine used is not behind a residential NAT** to avoid NAT traversal issues. 
  * **A cloud-hosted machine with a public IP address works best.**
  * Ensure that IP **ports 8000 through 10000 are not blocked for Internet inbound and outbound traffic**.

## Installation
1. Download and install the [mundis_0.9.27-2_amd64.deb](https://release.mundis.io/v0.9.27/mundis_0.9.27-2_amd64.deb) package:
```shell
curl -O https://release.mundis.io/v0.9.27/mundis_0.9.27-2_amd64.deb
sudo dpkg -i mundis_0.9.27-2_amd64.deb
```

2. Copy your `validator-keypair.json` identity keypair file generated during [Registration](/rattle-shake/register#2-generate-your-public-key) to the `/var/lib/mundis/validator-identity.json` location.

3. Configure DEVNET endpoint and default identity:
```shell
mundis config set --url https://api.devnet.mundis.io
mundis config set -k /var/lib/mundis/validator-identity.json
```

4. Airdrop some coins and create your vote account:
```shell
mundis airdrop 5
mundis create-vote-account /var/lib/mundis/validator-vote-account.json /var/lib/mundis/validator-identity.json /var/lib/mundis/validator-identity.json --allow-unsafe-authorized-withdrawer
```

4. (Optional) If you have a dedicated disk for Accounts & Ledger files, you need to mount it under `/mnt`. The validator node uses the `/mnt/ledger` and `/mnt/accounts` folders to store data. 

5. Start your node with:
```shell
sudo systemctl enable --now mundis-validator.service
```

4. Watch the log file for metrics submission:
```shell
sudo cat /var/log/mundis/validator.log | grep "mundis_metrics::metrics"
```

A normal output should start with something like this:
```
[2022-07-15T07:12:13.906368322Z INFO  mundis_metrics::metrics] metrics configuration: host=http://metrics.devnet.mundis.io:8086 db=devnet username=admin
[2022-07-15T07:12:13.910107077Z INFO  mundis_metrics::metrics] host id: AL49z2TdM7vnSR7yiJU1n9VbsLgJ8TRQuUqrNYqj4V4
[2022-07-15T07:12:23.932712091Z INFO  mundis_metrics::metrics] submitting 1198 points
[2022-07-15T07:12:33.936277831Z INFO  mundis_metrics::metrics] submitting 1553 points
[2022-07-15T07:12:43.958806809Z INFO  mundis_metrics::metrics] submitting 1536 points
[2022-07-15T07:12:53.977352171Z INFO  mundis_metrics::metrics] submitting 1563 points
[2022-07-15T07:13:03.994330118Z INFO  mundis_metrics::metrics] submitting 1456 points
[2022-07-15T07:13:14.007761702Z INFO  mundis_metrics::metrics] submitting 1441 points
```

5. Access the [DEVNET Metrics dashboard](http://metrics.devnet.mundis.io:3000/d/local/devnet-cluster-monitor?orgId=1&refresh=30s&var-datasource=default&var-testnet=devnet&var-hostid=All) and look for your public key as shown in the following image.
If you don't find it, read the [Troubleshooting](#Troubleshooting) section.

![](/img/metrics-dashboard.png)

## Troubleshooting
**1. The `/var/log/mundis/validator.log` file is empty or does not exist.**

Most probably your validator node failed to start. Look in the syslog to find the startup problem:
```shell
journalctl -e -n10000 | grep start-mundis-validator
```

Reach out to us on [Discord](https://discord.gg/8G2xEFJ5h7u) under the `RATTLE&SHAKE THE DEVNET / #validator-chat` channel if you can't figure out the problem. We'll do our best to help.
