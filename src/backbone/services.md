---
title: Global Services
---

Some critical services are needed for a Metaverse to work. These services are hereafter named L0 services. L0 services are deployed by L0 and run inside Architect nodes. They are native L0 system programs that can be consumed by L1 chains or external actors. Consuming an L0 service might incur fees, depending on the nature of the action. Actions that alter the state of the ledger will have transaction fees because they require transaction validation.

## Identities

Identities in the Multiverse are not real identities, although they can be if a participant chooses to do so. An identity is simply a means for the participant to create a public profile so he can be identified in the ecosystem; a profile must have a name and optionally an avatar. Mundis has several roles for participants in the ecosystem:

* **Architect** – validates L0 blocks and participates in global governance
* **Governor** – validates blocks for an L1 chain and participates in the governance of the L1
* **Citizen** – has an active role in the Multiverse or in a specific world

Architects and Governors are required to have a Multiverse identity because they perform block validation. It is in their direct economic interest to be trusted by citizens, and the more trust they have, the more stake-weight votes they get, increasing their chances of receiving block rewards.

Participants become Citizens by getting an identity in the Multiverse. Some L0 services might be restricted only to Citizens (e.g., LaunchPad), but an L1 chain can also make its services available only to Citizens if the builder of the L1 chooses to do so.

The Identity Service is not a full-featured identity management solution and is not designed to be so. At its minimum, it keeps a global mapping between L0 addresses and user profiles.

## Name Resolution

Like the Identity Service, name resolution provides friendly names for machine-readable identifiers such as addresses, content hashes, and metadata, like current Internet domains. The Name Service supports forward and reverse-address resolution, making it possible to associate metadata such as canonical names with Mundis addresses. The Name Service is like DNS, the Internet's Domain Name Service, but has significantly different architecture due to the specifics of blockchains and the Multiverse. Like DNS, the Name Service operates on a system of dot-separated hierarchical names. The owner of a domain has complete control over sub-domains. It provides similar functionality to ENS ([Ethereum Name Service](https://ens.domains/about/)).

The name resolution service uses the top-level domain (TLD) (e.g., "**.meta** "). Worlds and assets (tokens, NFTs) can get friendly names so they can be easily referenced, advertised, and found by other participants. In addition, name resolution plays an important part in Layer 2 - Human-Computer Interface (HCI), where the Mundis internet browser will use the Name Service to resolve Multiverse addresses based on their friendly names, creating an Internet-like user experience for navigating the Multiverse.

Like ENS, the Name Service has two components:
* Name Registry – maintains a list of all domains (and subdomains) and stores some critical pieces of information about each domain: the owner of the domain, the resolver, and the TTL for all domain-specific records
* Resolvers – translate names into L0 and L1 addresses.

Domain owners can transfer the domain to a new owner or change ownership of subdomains. L0 will have a system resolver for all L0 addresses, but L1 chains need to implement their own resolver to translate names into L1 addresses. 

## Positioning

Mundis has the notion of multi-space which are variable size 2D planes that have their origin at _(0, 0)_ and expand to _(Wi, Hi)_ where W is the width of a plane and H is the height. A location _(xi, yi)_ is basically a unique set of coordinates where _0 <= xi <= Wi_ and _0 <= yi <= Hi_. Based on simple 2D geometry, we can compute distance, area, perimeter, and other location-specific indicators in a plane and give routing instructions to a specific place.

The number and size of initially available 2D planes will be initially set in L0 genesis and can increase or decrease in the future if Architects vote to do so.

Each L0/L1 asset can have a location and size to be positioned and identified in the Multiverse.

## Storage and CDN

[IPFS](https://block.academy/researches/ipfs.draft3.pdf) provides a high throughput content-addressed block storage model with content-addressed hyperlinks. IPFS is peer-to-peer; no nodes are privileged. IPFS nodes store IPFS objects in local storage. Nodes connect to each other and transfer objects. These objects represent files and other data structures. Architects are IPFS nodes identified by the cryptographic hash of their Mundis address. 

Developers decide how much data will be stored in Distributed Storage, how long, and at what cost. Once a data object is committed to the Distributed Store, Architects will pin the objects in IPFS for permanent storage and receive rent for doing so. 

To deliver fast Distributed Storage resources, Architects will also host CDN services to accelerate IPFS file reads. This creates a geographically distributed content network that serves content to users by bringing it closer to where they are. CDN nodes use caching, a process that temporarily stores copies of files, so that you can access Multiverse content from an Layer 2-enabled device faster, using CDN nodes that are close to you. CDNs can cache any type of content like web pages, images, videos, audio, and binary files. As a result, users can watch a movie, play games, and maybe check their NFTs without having to wait a long time for content to load.

Objects in the Multiverse can have persistent data resources as binary large objects (BLOBs). Distributed Storage users need to incentivize architects to pin BLOBs objects on IPFS.  BLOBs open a new world of possibilities for builders to create distributed, decentralized applications like games, databases, data-sharing networks, and much more. L1 creators can host their binary data in public cloud services like AWS or in Mundis. The main difference is that storing BLOBs directly in Mundis enables true decentralization and trust. BLOBs published in the Anima Distributed Storage are public, immutable, and hard to censor by central authorities like AWS, Azure, GCP, etc.

BLOBs play an important role in Layer 2 because they can be (but are not limited to):

* static web content (HTML, CSS, and JavaScript). Developers can create simple websites, dApps, WebGL games and GUIs. Layer 2 will render Mundis web content.
* 2D/3D assets developed using the toolkits of choice (e.g., Unity, Unreal Engine) or other libraries

## Garbage Collection

Garbage collection is a form of automatic resource management widely used in software development. The garbage collector attempts to reclaim memory occupied by objects that are no longer in use. Mundis does garbage collection (or pruning) to prune L1 chains that are no longer supported by Governors. Garbage collection is executed at the end of each L0 epoch and can trigger L1 shard reorganization.

## Bridges

A cornerstone technology of blockchain interoperability is the blockchain bridge. Blockchain bridges are ways for two economically sovereign and technologically diverse chains to communicate with each other. Bridge designs come in various flavors ranging from centralized and trusted to more decentralized and trustless [3]. Decentralized, trustless bridges are implemented using system programs for bridging with Turing-complete enabled blockchains like Ethereum and Solana or specific protocols like [XCLAIM](https://eprint.iacr.org/2018/643.pdf).

Mundis goes one step forward and provides system-level services for bridging with current notable blockchains like Ethereum, Binance Smart Chain, Solana, Elrond using Simple Payment Verification (SPV). SPV is a term for a set of methods used by light blockchain clients to verify network state without fully storing the entire chain. It's a kind of Merkle-proof used to verify the presence of a transaction in a block by comparing it against the root hash in that block's header. This allows reaching a probabilistic level of certainty about on-chain events with minimum trust required in respect to network nodes. SPV services are essentially system programs deployed on L0 for each blockchain.

Wherever possible, SPV services will use existing blockchain layer 2 solutions to accelerate transaction processing. One very good example is the Polygon protocol for Ethereum.




