---
title: 2.1 Layer 0 (The Backbone)
---
The Backbone is the blockchain infrastructure of Mundis. It governs all transactions that happen in the Multiverse and all its Metaverses, handles consensus between L0 and L1 validators, and keeps a verified history of all L1 worlds. The Backbone is a development platform that will evolve to be an ecosystem of interconnected worlds.

An infrastructure parachain that provides a global, forward-moving clock, checkpoints L1 chains, handles positioning and global navigation, and drives governance for the Multiverse. It has a fast consensus mechanism designed for speed and sub-second finality, and native support for Multiverse services: Identity Management, Name Service, Decentralized Storage, CDN, Launchpad, Bridges, Garbage Collection, and Location.

## 2.1.1 Ecosystem services

Security

Distributed storage & Content Delivery Network

Identity management

Naming system

Decentralized NFT Market

Decentralized Exchange

Launchpad

## 2.1.2 Layer 0
The role of Layer 0 is to coordinate the Multiverse and all associated Metaverses. It's a blockchain, based on a global timeline of events with an optimized pBFT replicated state machine that can do sub-second finality times.

It runs on a globally distributed "clock" with Proof-of-Stake (PoS) consensus, built to address the needs of our Multiverse. The global "clock" is not a consensus algorithm but a computational algorithm that provides a way to cryptographically verify the ordering of events to solve the agreement on global time.
It's a VDF (Verifiable Delay Functions) hash-chain used to checkpoint L1 worlds and coordinate global consensus. It allows near-instant finality up to hundreds of thousands of transactions per second. 

## 2.1.3 Validators
The L0 chain needs actors that can process transactions and participate in consensus. These actors are named validators in existing blockchains, but in Mundis, we call them L0 validators. L0 validators are the keepers of the Multiverse. Besides validation tasks for transactions and consensus, they also participate in global governance. Therefore, it is desirable to have many L0 validators for the ecosystem to be decentralized, and Mundis does not limit this number as some existing blockchains do. As the Multiverse grows, more validators will be needed to increase the performance of the ecosystem.

## 2.1.4 Delegated Proof-of-Stake
Layer 0 is a Proof-of-Stake (PoS) based blockchain, inspired by the Solana codebase. We chose Solana as a starting point because of its fast block times, Proof of History innovation, and very high throughput.

Building on Solana itself was not possible because it would require changing the Solana mainnet to accommodate all changes needed by Mundis-specific features.

To become an L0 validator, a participant needs to stake tokens to become eligible. A PoS network is one in which a set of trustless entities can achieve consensus (i.e., agree) on the validity of a sequence of transactions. Research on this topic demonstrated that consensus can be reached if less than 1/3 of the validators are dishonest (Byzantine).

The network may be stalled if dishonest validators exceed 1/3 of the total number of validators. Dishonest validators may simply decline to participate, preventing the remaining validators from achieving the required 2/3 super-majority. In this case, the network can no longer produce transactions. If dishonest validators account for 2/3 or more of the total nodes, they can conspire to make any form of arbitrary transaction. This is the worst-case situation because the network can no longer produce actual transactions but only those injected by the dishonest 2/3 super-majority. Ideally, Mundis will have many validators to promote decentralization and make corruption economically unfeasible.

Proof of Stake in Mundis confers varying degrees of authority on the validators who secure the Metaverse. Each validator has a different voting power based on the value of their active investment. As a result, if validator A votes for consensus with twice as much stake as validators B and C, this is comparable to both B and C voting for consensus.
With slashing, validators are discouraged from bad behavior that would negatively impact the network. Slashing also reduces a validator's influence on the network by reducing his stake-weight. It can also encourage users to find a more honest validator to stake their funds in. 

## 2.1.5 Global timeline
Mundis has a single, global timeline for the entire ecosystem that gives a verifiable, exact order of events that happen in the Metaverse. It's a universally synchronized "clock" all validators use to synchronize themselves with the rest of the network. This clock is not based on actual time (i.e., seconds) because that would require agreement on the actual time and trustless synchronization of time-based clocks throughout the Mundis network.
Methods to synchronize time between remote computers have been out there for a long time, but those methods require communication and agreement between nodes. Also, a dishonest node can ignore his turn and claim his clock is the correct one and everyone else's clock is wrong.

Time sync issues can be resolved through a variety of techniques that establish trustless synchronization of time-based clocks in a network. The problem is that their accuracy also degrades their performance a lot. Imagine a solution that simply creates slots that are one year long. If a validator receives a block that has a wrong year, it may assume the leader that proposed the block has a problem with his clock since it's unlikely the validator has a clock that is one year off. Also, if the interval is short, a validator could have no way to determine whose clock is skewed, as network agreement would take longer than the actual clock skew. Without an agreement, validators cannot properly order the block proposals in a way that they don't overlap or collide.

To circumvent clock synchronization issues, Mundis does not use real clock time or "wall clock time." Instead, it uses a "clock" based on the time it takes to run an SHA-265 VDF a fixed number of times. This was originally proposed by Solana as Proof of History. All computers using the fastest generally available processors will be limited to computing a fixed number of SHA-256 hashes per second. This looping VDF that runs a fixed number of times can be said to closely approximate a second's duration.
Mundis measures time in "ticks," which are the number of times the VDF loops, approximating a fraction of a second. All validators run this "clock" on their node by running the looping VDF as quickly as they can. The actual Metaverse time is represented by values produced by the VDF. By providing an initial value I and a value computed after N iterations starting from that initial value, a validator can measure how much Metaverse time passed between N and I by running the looping VDF.

It is important to remember that Multiverse time is measured in ticks and was not designed to approximate human time but to be the global reference "clock" for the Multiverse. L1 parachains have no control over the global passage of time. 

## 2.1.6 Consensus
Layer 0 must be fast, both in terms of overall throughput and latency. While Proof-of-Stake can guarantee consensus if the super-majority of nodes are honest, it cannot guarantee that it occurs quickly or with high throughput. Mundis builds on Solana's Tower BFT asynchronous implementation that relies on the Multiverse timeline for fast consensus.

The algorithm offers both liveness and safety if at most 𝑛−13 nodes are byzantine. Mundis is an asynchronous distributed system where nodes are connected by a public network. The network may delay or fail to deliver messages, duplicate them, or deliver them in a different order. If replicas are unable to execute a request, they must move to a new view to provide liveness.

The period when the super-majority 2n+1 of non-faulty replicas are in the same view must be maximized, and this period must increase exponentially until the requested operation executes.

Blocks are chained together to create a cryptographically provable sequence. By receiving 66% of stake-weighted votes, any block can "prove" it's part of L0. The sequence of submitted blocks should be ordered; otherwise, multiple nodes will submit blocks simultaneously, and computing the order of blocks will be a costly and time-consuming process based on fork resolution algorithms.

This is where the concept of "leader timetable" comes in. The set of validators that could vote is known before a round starts. Validators "register" as voting nodes, and stakers assign (delegate) their stake to voting validators, allowing them to cast stake-weighted votes to select valid blocks. The set of validators that can submit blocks is known beforehand, so it's possible to organize the network in a way that only one validator is allowed to submit one block at one time.

Each block is produced during a slot, and each slot in the leader timetable is allocated to one validator. Thus, the leader timetable provides an ordered succession of validators, and only the validator that has the allocated slot in the timetable can propose a block during that given slot. This way, the validator already sorted prospective blocks, making it easy to detect and reject an out-of-order block proposal. 

For example, consider four validators (A1, A2, A3, A4) and the following leader timetable: 𝐴1→𝐴4→𝐴3→𝐴2→𝐴4→𝐴1→𝐴2→𝐴3

A1, A2, A3, and A4 must submit blocks exactly in the order above, with the sole exception a slot might be skipped if the validator assigned to that slot is unavailable or misbehaving.
Slots are organized into epochs. The leader timetable for the current epoch 𝐸𝑛 is determined by data from epoch 𝐸𝑛−2. Therefore, the leader timetable for epoch 𝐸𝑛 is known for the duration of one full epoch, which is plenty of time for everybody to know the leader timetable.

The leader timetable must not be the same for the epoch 𝐸𝑛+1 and it must be impossible to determine in a deterministic way. Mundis uses a random number generator to select validators based on their stake-weight, performance, and availability. While validators will get slots roughly in proportion to their stake weight, the exact slots a validator will have are non-deterministic and impossible to predict.

A random number generator is seeded with the previous state of the network to compute the leader timetable at the end of epoch 𝐸𝑛. The generated random values are not predictable or controllable by anyone validator because they come from the agreed state of the network, which cannot be intentionally coordinated or enforced. Because the leader timetable is always computable from data that is available to every validator without requiring any network communication, each validator can independently compute the leader timetable for epoch 𝐸𝑛+1. 12

This is a significant performance enhancement because it eliminates a round of network communication between validators.

Once a leader timetable has been set, it is up to each validator to adhere to it and propose blocks when "their turn" comes around, as specified by the timetable. But what prevents validators from emitting blocks in the wrong order? L0 validators rely on the Multiverse timeline to synchronize on half-second boundaries.

To avoid being isolated from the rest of the network, each validator guarantees that they vote only when a super-majority of the network votes on the same ledger. Each validator keeps track of the timeout period an ancestor vote exceeds a predetermined threshold and ensures a super-majority of the network has voted on a fork containing that vote. 

## 2.1.7 L1 state sharding
Mundis is a dynamic ecosystem where all L1 parachains are grouped into shards and asynchronously attached to L0. The proposed approach is designed with the following objectives: 

- High scalability: increasing or decreasing the number of L1 parachains should not affect the performance of L0
- Traceability: L0 should determine in a deterministic way the grouping of L1 parachains into shards
- Efficiency: shards should be balanced appropriately between L0 validators, and an L1 parachain can be garbage collected once it loses the support of its validators 

L0 constantly receives hashes of finalized blocks from L1 chains. Finalized block hashes are stored in the L0 global timeline to keep up with the state of all L1 parachains and vice versa. Communication between L1 and L0 parachains is made using message queues and an extension of the XCM format. L1 parachains need to send at least one valid block per L0 epoch. Failure to do so will cause the L1 parachain to be "jailed" and his L0 genesis stake slashed by 0.01%. A jailed L1 parachain will not receive any inter-chain transactions. This process will continue until L0 receives a valid block from the L1 jailed chain. 

At the end of an L0 epoch, L1 shard reorganization and garbage collection are triggered to rebalance L1 chains. Rebalancing will garbage collect (prune) obsolete L1 parachains and possibly re-group them into new shards. 

_A special note:_ 

Mundis assumes L1 parachains are byzantine by default. L0 does not verify or execute any L1 transactions, so it is the responsibility of users to ensure an L1 parachain is trusted before exchanging assets with that chain.

## 2.1.8 Global services
Some critical services are needed for a Metaverse to work. These services are hereafter named L0 services. L0 services are deployed by L0 and run inside validator nodes. They are native L0 system programs that can be consumed by L1 parachains or external actors. Consuming an L0 service might incur fees, depending on the nature of the action. Actions that alter the state of the ledger will have transaction fees because they require transaction validation. 

## 2.1.9 Identities
Identities in the Multiverse are not real identities, although they can be if a participant chooses to do so. An identity is simply a means for the participant to create a public profile so he can be identified in the ecosystem; a profile must have a name and optionally an avatar. 

Mundis has several roles for participants in the ecosystem: 

- L0 validator – validates L0 blocks and participates in global governance 
- L1 validator – validates blocks for an L1 parachain and participates in the governance of the L1 
- Citizen – has a wallet address and an active role in the Multiverse or in a specific world 
- Company – A business organization account

L0 and L1 validators are required to have a Multiverse identity because they perform block validation. It is in their direct economic interest to be trusted by citizens, and the more trust they have, the more stake-weight votes they get, increasing their chances of receiving block rewards.

Participants become Citizens by getting an identity in the Multiverse. Some L0 services might be restricted only to Citizens (e.g., LaunchPad), but an L1 parachain can also make its services available only to Citizens if the builder of the L1 chooses to do so.

The Identity Service is not a full-featured identity management solution and is not designed to be so. At its minimum, it keeps a global mapping between L0 addresses and user profiles. 

## 2.1.10 Name Resolution
Like the Identity Service, name resolution provides friendly names for machine-readable identifiers such as addresses, content hashes, and metadata, like current Internet domains. The Name Service supports forward and reverse-address resolution, making it possible to associate metadata such as canonical names with Mundis addresses. The Name Service is like DNS, the Internet's Domain Name Service, but has a significantly different architecture due to the specifics of blockchains and the Multiverse. Like DNS, the Name Service operates on a system of dot-separated hierarchical names. The owner of a domain has complete control over sub-domains. It provides similar functionality to ENS (Ethereum Name Service).

The name resolution service uses the top-level domain (TLD) (e.g., ".meta "). Worlds and assets (tokens, NFTs) can get familiar names so they can be easily referenced, advertised, and found by other participants. In addition, name resolution plays an important part in Layer 2 - Human-Computer Interface (HCI), where the Mundis internet browser will use the Name Service to resolve Multiverse addresses based on their friendly names, creating an Internet-like user experience for navigating the Multiverse.

Like ENS, the Name Service has two components:

- **Name Registry** – maintains a list of all domains (and subdomains) and stores some critical pieces of information about each domain: the owner of the domain, the resolver, and the TTL for all domain-specific records
- **Resolvers** – translate names into L0 and L1 addresses

Domain owners can transfer the domain to a new owner or change ownership of subdomains. L0 will have a system resolver for all L0 addresses, but L1 parachains need to implement their own resolver to translate names into L1 addresses.

## 2.1.11 Positioning System
Mundis has the notion of multi-space which are variable size 2D planes that have their origin at (0, 0) and expand to (𝑊𝑖, 𝐻𝑖), where W is the width of a plane and H is the height. A location is a unique set of coordinates (𝑥𝑖, 𝑦𝑖) that identifies a spot in one plane, where: 0 ≤𝑥𝑖 ≤ 𝑊𝑖 and 0 ≤𝑦𝑖 ≤ 𝐻𝑖  

Based on simple 2D geometry, we can compute distance, area, perimeter, and other location-specific indicators in a plane and give routing instructions to a specific place.

The number and size of initially available 2D planes will be initially set in L0 genesis and can increase or decrease in the future if L0 validators vote to do so.

Each L0/L1 asset can have a location and size to be positioned and identified in the Multiverse.

## 2.1.12 Storage and CDN
IPFS provides a high throughput content-addressed block storage model with content-addressed hyperlinks. IPFS is peer-to-peer; no nodes are privileged. IPFS nodes store IPFS objects in local storage. Nodes interconnect and transfer objects. These objects represent files and other data structures. L0 validators are IPFS nodes identified by the cryptographic hash of their Mundis address.

Developers decide how much data will be stored in Distributed Storage, how long, and at what cost. Once a data object is committed to the Distributed Store, L0 validators will pin the objects in IPFS for permanent storage and receive rent for doing so.

To deliver fast Distributed Storage resources, L0 validators will also host CDN services to accelerate IPFS file reads. This creates a geographically distributed content network that serves content to users by bringing it closer to where they are. CDN nodes use caching, a process that temporarily stores copies of files, so that you can access Multiverse content from a Layer 2-enabled device faster, using CDN nodes that are close to you. CDNs can cache any type of content like web pages, images, videos, audio, and binary files. As a result, users can watch a movie, play games, and maybe check their NFTs without having to wait a long time for content to load.

Objects in the Multiverse can have persistent data resources as binary large objects (BLOBs). Distributed Storage users need to incentivize L0 validators to pin BLOBs objects on IPFS.

BLOBs open a new world of possibilities for builders to create distributed, decentralized applications like games, databases, data-sharing networks, and much more. L1 creators can host their binary data in public cloud services like AWS, or in Mundis. The main difference is that storing BLOBs directly in Mundis enables true decentralization and trust. BLOBs published in the Distributed Storage are public, immutable, and hard to censor by central authorities like AWS, Azure, and GCP.

BLOBs play an important role in Layer 2 because they can be (but are not limited to):

- static web content (HTML, CSS, and JavaScript). Developers can create simple websites, dApps, WebGL games, and GUIs. Layer 2 will render Mundis web content.
- 2D/3D assets developed using the toolkits of choice (e.g., Unity, Unreal Engine) or other libraries

## 2.1.13 Garbage Collection
Garbage collection is a form of automatic resource management widely used in software development. The garbage collector attempts to reclaim memory occupied by objects that are no longer in use. Mundis does garbage collection (or pruning) to prune L1 parachains that are no longer supported by L1 validators. Garbage collection is executed at the end of each L0 epoch and can trigger L1 shard reorganization.

## 2.1.14 Bridges
A cornerstone technology of blockchain interoperability is the blockchain bridge. Blockchain bridges are ways for two economically sovereign and technologically diverse parachains to communicate and transfer assets. Bridge designs come in various flavors ranging from centralized and trusted to more decentralized and trustless. Decentralized, trustless bridges are implemented using system programs for bridging with Turing-complete enabled blockchains like Ethereum and Solana or specific protocols like XCLAIM.

Mundis goes one step forward and provides system-level services for bridging with current notable blockchains like Ethereum, Binance Smart Chain, Solana, and Elrond using Simple Payment Verification (SPV).

SPV is a term for a set of methods used by light blockchain clients to verify network state without fully storing the entire chain. It's a kind of Merkle-proof used to verify the presence of a transaction in a block by comparing it against the root hash in that block's header. This allows reaching a probabilistic level of certainty about on-chain events with minimum trust required concerning network nodes. SPV services are essentially system programs deployed on L0 for each blockchain.

Wherever possible, SPV services will use existing blockchain layer 2 solutions to accelerate transaction processing. One very good example is the Polygon protocol for Ethereum. 

## 2.1.15 MetaFi Services
We have designed our MetaFi services to meet the functional experiences required to power our citizens' and our partners’ demand for metaverse entertainment and services. The MetaFi systems will enhance every user experience by providing a DeFi framework to incentivize users while supporting customer business and marketing models.

All Engage-to-earn MetaFi services are hosted in Layer 0 and are provided as public infrastructure to all our partners, brands, and citizens.

These services are modeled around the dynamics of our SocialFi, WorkFi, GameFi, and Administration systems. 

## 2.1.16 Governance
The Layer 0 blockchain and services are governed by L0 validators using DAO structures appropriate for:

- validator rewards, inflation, deflation, voting fees, transaction fees
- L0 forks, new features, bug fixes
- vetting of new Launchpad projects and DEX tokens

## 2.1.17 Wallet
Payments/earnings in Mundis are made/received using the official MUNDIS coin and ecosystem tokens. Mundis will have its own non-custodial L0 wallet to help users keep track and organize their funds, income, expenses, and collectibles. Through the wallet, users can store, stake, swap, and make transfers using the official MUNDIS coin and ecosystem tokens. The wallet will also store NFTs and is available natively in desktop, mobile apps, and the Layer 2 and has built-in asset transfer capabilities between L0/L1 parachains and external blockchains. Citizens can teleport NFTs and tokens from other blockchains into Mundis.

The Mundis wallet is the official app used to manage all ecosystem assets (L0 and L1), it’s considered to be an L0 service. Hence, its development and maintenance will be performed by Mundis.

## 2.1.18 Decentralized NFT Marketplace
Creators can sell their content as NFTs in the NFT marketplace. The Marketplace will be available as a Web 3.0 dApp accessible through any internet browser and will also be embedded in The Construct user interface. NFT sellers have the option to receive payment for their creations in any supported Mundis coin or ecosystem token.

Because the NFT Marketplace is the official app used to publish and trade NFTs across the Mundis ecosystem, it’s considered to be an L0 service. Hence, its development and maintenance will be performed by Mundis. 

## 2.1.19 Decentralized Exchange
A decentralized exchange (or DEX) is a peer-to-peer marketplace where transactions occur directly between crypto traders. Creators and developers that build on Mundis and issue their own tokens across L0 and L1 can choose to list their tokens in the official DEX. The DEX is an L0 service, hence its development and maintenance will be performed by Mundis. 

## 2.1.20 Launchpad
The Launchpad is the central service for exploring and investing in new projects, ideas, and auctions across the entire Mundis ecosystem. Projects are vetted by L0 validators using a DAO-like structure. Development and maintenance will be performed by Mundis.