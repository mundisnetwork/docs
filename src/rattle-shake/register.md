---
title: Registration
---

Register for The Mundis incentivized devnet program, Rattle & Shake! Eligible applicants may receive compensation from the Mundis Foundation for actively participating as a validator and successfully completing one or more stages of Rattle & Shake.

The Mundis Foundation awards future MDIS mainnet coins for successfully participating in each stage of Rattle & Shake.

Please note: Mundis networks are permissionless and therefore anyone can begin running a validator node at any time. Registration and KYC are only required to receive compensation or delegations from the Mundis Foundation. Please note that U.S. entities and individuals are not eligible to receive compensation at this time.

## Requirements

### 1. Get the appropriate hardware & software

OS: We build and run on Ubuntu 20.04

Hardware Recommendations:

* CPU
  * 8 cores / 16 threads, or more
  * 2.6GHz, or faster
  * AVX2 instruction support (to use official release binaries, self-compile otherwise)
  * Support for AVX512f and/or SHA-NI instructions is helpful
* RAM
  * 16GB, or more
* Disk
  * PCIe Gen3 x4 NVME SSD, or better
  * Accounts: 500GB, or larger, stored on SSD
  * Ledger: 1TB or larger, stored on SSD
  * OS: (Optional) 500GB, or larger. SATA disks are acceptable for the OS partition.
  * The OS may be installed on the ledger disk, though testing has shown better performance with the ledger on its own disk
  * Accounts and ledger can be stored on the same disk, however due to high IOPS, this is not recommended
* GPU
  * Not strictly necessary at this time

### 2. Generate your public key

In order to obtain your allotment of MDIS coins, you need to publish your validator's identity public key under your [keybase.io](https://keybase.io) account.

1. Generate your validator's identity keypair by running:

```
mundis-keygen new -o ~/validator-keypair.json
```

2. View your identity public key by running:

```
mundis-keygen pubkey ~/validator-keypair.json
```

Your validator identity keypair uniquely identifies your validator within the network. **It is crucial to back-up this information**.

If you don’t back up this information, you **WILL NOT BE ABLE TO RECOVER YOUR VALIDATOR**, if you lose access to it. If this happens, YOU WILL LOSE YOUR ALLOCATION OF SOL TOO.

To back-up your validator identify keypair, **back-up your "validator-keypair.json” file to a secure location.**

3. Link your validator pubkey to a Keybase account

You must link your Mundis pubkey to a [keybase.io](https://keybase.io) account. The following instructions describe how to do that by installing Keybase on your server.

1. Download & Install [Keybase](https://keybase.io/download) on your machine.
2. Log in to your Keybase account on your server. Create a Keybase account first if you don’t already have one. Here’s a list of basic [Keybase CLI commands](https://keybase.io/docs/command_line/basics).
3. Create a Mundis directory in your public file folder: ``mkdir /keybase/public/<KEYBASE_USERNAME>/mundis``
4. Publish your validator's identity public key by creating an empty file in your Keybase public file folder in the following format: ``/keybase/public/<KEYBASE_USERNAME>/mundis/validator-<BASE58_PUBKEY>``. For example:
```
/keybase/public/<KEYBASE_USERNAME>/mundis/validator-<BASE58_PUBKEY>
```
5. Check that your public key was published by pointing your browser to: ``https://keybase.pub/<KEYBASE_USERNAME>/mundis/validator-<BASE58_PUBKEY>``


### 3. Fill the Validator Registration Form

Fill the registration form by pointing your browser to: [https://mundis.io/registration](https://mundis.io/registration)

### 4. Wait for the approval

Wait for the approval from us before starting your validator.

### Legal stuff

Participants must read and agree with the [Rattle & Shake participation agreement](terms.md) and pass KYC/AML to be eligible for rewards.

Mundis doesn’t intend to share any confidential information during the Rattle & Shake. However, if we do, it will be called out as such within our communications verbally, by email, etc. Unless information is specifically called out as such, the information should not be considered confidential and we welcome you to share it.
