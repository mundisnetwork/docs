---
title: Layer 0
--- 

The role of L0 is to coordinate the Multiverse and all associated Metaverses. It's a blockchain based on a global timeline of events with an optimized pBFT replicated state machine that can do sub-second finality times. It runs on a globally distributed "clock" with Proof-of-Stake (PoS) consensus, built to address the needs of our Multiverse.

The global "clock" is not a consensus algorithm but a computational algorithm that provides a way to cryptographically verify the ordering of events to solve the agreement on global time. It's a VDF hash-chain used to checkpoint L1 worlds and coordinate global consensus. It allows near-instant finality up to hundreds of thousands of transactions per second.

The L0 chain needs actors that can process transactions and participate in consensus. These actors are named validators in existing blockchains, but in Mundis, we call them Validators.

L0 Validators are the keepers of the Multiverse. Besides validation tasks for transactions and consensus, they also participate in global governance. Therefore, it is desirable to have many L0 Validators for the ecosystem to be decentralized, and Mundis does not limit this number as some existing blockchains do. As the Multiverse grows, more L0 Validators will be needed to increase the performance of the ecosystem.

##  Delegated Proof-of-Stake

Layer 0 is a Proof-of-Stake (PoS) based blockchain forked from the Solana codebase. We chose Solana as a starting point because of its fast block times, Proof of History innovation and very high throughput. Building on Solana itself was not possible because it would require changing the Solana main-net to accommodate all changes required for Mundis-specific features.

To become an Architect, a participant needs to stake tokens to become eligible. A PoS network is one in which a set of trustless entities can achieve consensus (i.e., agree) on the validity of a sequence of transactions. Research on this topic demonstrated that consensus could be reached if less than 1/3 of the Architects are dishonest (Byzantine).

The network may be stalled if dishonest architects exceed 1/3 of the total number of architects. Dishonest architects may simply decline to participate, preventing the remaining architects from achieving the required 2/3 super-majority. In this case, the network can no longer produce transactions. If dishonest architects account for 2/3 or more of the total nodes, they can conspire to make any form of arbitrary transaction. This is the worst-case situation because the network can no longer produce actual transactions but only those injected by the dishonest 2/3 super-majority.

Ideally, Mundis will have many architects to promote decentralization and to make corruption economically unfeasible.

Proof-of-Stake introduces the idea of "stake" to the design of consensus-based networks, which means participants have "skin in the game." The "stake" can be forfeited if they are found to be misbehaving. This is called slashing and enables the network to be designed more efficiently with penalties for architects that engage in bad behavior. It's important to note that slashing isn't a substitute for security. Slashing merely allows for repercussions for improper behavior by architects that would cause the network to be momentarily disrupted or inefficient.

Proof of Stake in Mundis confers varying degrees of authority on the architects who secure the Metaverse. Each architect has a different voting power based on the value of their active investment. As a result, if architect A votes for consensus with twice as much stake as architects B and C, this is comparable to both B and C voting for consensus.

With slashing, architects are discouraged from bad behavior that would negatively impact the network. Slashing also reduces an architect's influence on the network by reducing his stake-weight. It can also encourage users to find a more honest architect to stake their funds in. For example, if an architect choses to submit more than one block at a time, the network will consider it bad behavior. It will create two forks, and the network must choose the right fork to commit to the ledger. Even if the other architects eventually commit the correct block, the additional cost of fork resolution will cause a slow-down. This is considered bad behavior, and the architect that submitted the extra block will be slashed.

Mundis citizens can choose trustworthy architects that provide the best service to the network. If an architect is honest, was never slashed, and has a good relationship with its stakeholders, it should receive more stake than an architect who lacks one or more of these characteristics. The staking mechanism is designed to favor well-behaved architects, thereby boosting the ecosystem's performance and safety.

Architects are rewarded according to their stake. This means it's in their best interest to attract and retain stake by showing good performance and returns, transparency, honesty, and a good relationship with his stakers. This means that architects' financial compensation is aligned with the network's goals.

An architect must not receive a large portion of stake, because that would put too much authority in one node and create centralization. Also, a very powerful architect might be hacked or could unexpectedly change its behavior in a bad way ("go rogue"). Mundis imposes high-order limits on how much stake an architect can attract. This largely depends on the number of active architects and is a mechanism designed to prevent centralization of wealth and emergence of super-architects.

## Global Timeline

Mundis has a single, global timeline for the entire ecosystem that gives a verifiable, exact order of events that happen in the Metaverse. It's a universally synchronized "clock" all validators use to synchronize themselves with the rest of the network. This clock is not based on actual time (i.e., seconds) because that would require agreement on the actual time and trustless synchronization of time-based clocks throughout the Mundis network.

Methods to synchronize time between remote computers have been out there a long time, but those methods require communication and agreement between nodes. Also, a dishonest node can ignore his turn and claim his clock is the correct one and everyone else's clock is wrong.

Time sync issues can be resolved through a variety of techniques that establish trustless synchronization of time-based clocks in a network. The problem is that their accuracy also degrades their performance a lot. Imagine a solution that simply creates slots that are one year long. If an architect receives a block that has a wrong year, it may assume the leader that proposed the block has a problem with his clock since it's unlikely the architect has a clock that is one year off. Also, if the interval is short, an architect could have no way to determine whose clock is skewed, as network agreement would take longer than the actual clock skew. Without an agreement, architects cannot properly order the block proposals in a way that that they don't overlap or collide.

To circumvent clock synchronization issues, Mundis does not use real clock time or "wall clock time." Instead, it uses a "clock" based on the time it takes to run an SHA-265 VDF (Verifiable Delay Function) a fixed number of times. This was originally proposed by Solana as Proof of History. All computers using the fastest generally available processors will be limited to computing a fixed number of SHA-256 hashes per second [[Shinobi Systems: Primer]](https://www.shinobi-systems.com/primer.html). This looping VDF that runs a fixed number of times can be said to closely approximate a second's duration.

Mundis measures time in "ticks," which are the number of times the [VDF](/terminology#vdf) loops, approximating a fraction of a second. All architects run this "clock" on their node by running the looping VDF as quickly as they can. The actual Metaverse time is represented by values produced by the VDF. By providing an initial value I and a value computed after N iterations starting from that initial value, an architect can measure how much Metaverse time passed between N and I by running the looping VDF.
It is important to remember that Multiverse time is measured in ticks and was not designed to approximate human time, but to be the global reference "clock" for the Multiverse. L1 chains have no control over global passage of time.

## Consenus

Layer 0 must be fast, both in terms of overall throughput and latency. While Proof-of-Stake can guarantee consensus if the super-majority of nodes are honest, it cannot guarantee that it occurs quickly or with high throughput. Mundis builds on Solana's Tower BFT asynchronous implementation that relies on the Multiverse timeline for fast consensus.

The algorithm offers both liveness and safety if at most (n-1)/3 nodes are byzantine. Mundis is an asynchronous distributed system where nodes are connected by a public network. The network may delay or fail to deliver messages, duplicate them, or deliver them in a different order. If replicas are unable to execute a request, they must move to a new view to provide liveness. 

The time period when the super-majority 2n+1 of non-faulty replicas are in the same view must be maximized, and this period of time must increase exponentially until the requested operation executes.

Blocks are chained together to create a cryptographically provable sequence. By receiving 66% of stake-weighted votes, any block can "prove" it's part of L0. The sequence of submitted blocks should be ordered; otherwise, multiple nodes will submit blocks simultaneously, and computing the order of blocks will be a costly and time-consuming process based on fork resolution algorithms.

This is where the concept of "leader timetable" comes in. The set of architects that could vote is known before a round starts. Architects "register" as voting nodes, and stakers assign (delegate) their stake to voting nodes, allowing those architects to cast stake-weighted votes to select valid blocks. The set of architects that can submit blocks is known beforehand, so it's possible to organize the network in a way that only one architect is allowed to submit one block at one time.

Each block is produced during a slot, and each slot in the leader timetable is allocated to one architect. Thus, the leader timetable provides an ordered succession of architects, and only the architect that has the allocated slot in the timetable can propose a block during that given slot. This way, the architect already sorted prospective blocks, making it easy to detect and reject an out-of-order block proposal.

For example, consider are four architects (A1, A2, A3, A4) and the following leader timetable: `A1 -> A4 -> A3 -> A2 -> A4 -> A1 -> A2 -> A3`

A1, A2, A3, A4 must submit blocks exactly in the order above, with the sole exception a slot might be skipped if the architect assigned to that slot is unavailable or misbehaving.
Slots are organized into epochs. The leader timetable for the current epoch _En_ is determined by data from epoch _E(n-2)_ Therefore, the leader timetable for epoch _En_ s known for the duration of one full epoch, which is plenty of time for everybody to know the leader timetable.

The leader timetable must not be the same for the epoch _E(n+1)_ and it must be impossible to determine in a deterministic way. Mundis uses a random number generator to select architects based on their stake-weight, performance, and availability. While architects will get slots roughly in proportion to their stake-weight, the exact slots an architect will have are non-deterministic and impossible to predict.

A random number generator is seeded with the previous state of the network to compute the leader timetable at the end of epoch _En_. The generated random values are not predictable or controllable by any one architect because they come from the agreed state of the network, which cannot be intentionally coordinated or enforced. Because the leader timetable is always computable from data that is available to every architect without requiring any network communication, each architect can independently compute the leader timetable for epoch _E(n+1)_. This is a significant performance enhancement because it eliminates a round of network communication between architects.

Once a leader timetable has been set, it is up to each architect to adhere to it and propose blocks when "their turn" comes around, as specified by the timetable. But what prevents architects from emitting blocks in the wrong order? Architects rely on the Multiverse timeline to synchronize on half-second boundaries. They query the VDF "clock" once per tick, which provides a sequence of numbers for each slot representing the total time spent in a slot. This enables the sequence to be invalidated more rapidly if it turns out to be incorrect. For instance, sampling ten values per slot enables an architect to accept or reject sequences faster, as each number may be examined in parallel in 1/10th the time it took the original architect to compute the sequence. This is an inherent property of VDFs, and it means legitimate architects cannot be "flooded" by dishonest architects. If validation would take the same time as the production of values, a bad actor can submit many bad blocks and cause other architects to spend a lot of time verifying these blocks. If blocks can be checked much faster than it takes to produce them, an attacker needs to spend a vast number of resources to generate this kind of attack, making it impractical.

The leader streams blocks as it verifies transactions. Transaction validation and streaming to neighboring architects are done in parallel to decrease latency. The timeline's VDF begins with the last SHA-256 value computed from the previous block's timeline. In the new block, the architect includes transactions, and the timeline sequence values. When his allocated slot ends, the architect completes the block, signs it, and streams it to the network for validation. Other architects can easily verify the proposed block's timeline value and slot using the data they have before they vote on the block. The next selected leader repeats the entire process by doing the same thing using the previously emitted block as its starting point. The block also keeps the signature of the leader who proposed it, allowing other architects to prove that block for that slot was proposed by the correct leader. This allows architects to follow in leader sequence with minimal overhead, contributing to the speed of the network. The leader timetable is censorship-resistant, which means an architect cannot exclude another architect by emitting a competing block in another leader's slot.

Since Mundis has an embedded global clock, the pBFT timeouts can be encoded in the ledger itself using a two-step process. [[Tower BFT]](https://medium.com/solana-labs/tower-bft-solanas-high-performance-implementation-of-pbft-464725911e79):

1. when casting a vote, it has an initial timeout of _N_ timeline hashes. An architect guarantees with slashing that once a vote has been cast, he must not vote only for timeline child hashes of that vote, for at least _N_ hashes
2. the timeouts for all the previous votes double. Voting is limited to a predetermined number of slots. Each slot has a potential rollback point, but each subsequent vote doubles the length of time required to stall the network before it can unroll that vote. Adding new blocks to the ledger increases the likelihood of previous blocks being confirmed. The number of slots to which old votes are pledged doubles with each slot. Once a super-majority votes on a timeline hash, that hash becomes canonical and cannot be reverted.

To avoid being isolated from the rest of the network, each architect guarantees that they vote only when a super-majority of the network votes on the same ledger. Each architect keeps track of the timeout period an ancestor vote exceeds a predetermined threshold and ensures a super-majority of the network has voted on a fork containing that vote. In practice, architects check if the super-majority has voted on a slot that will commit to a timeout of 10 minutes, and if not, they don't vote.

When timeouts start to happen, expired votes are cleared, and timeouts double for ancestors if the child has an equal timeout.

This technique enables the network to stream blocks continuously without blocking the ledger until a super-majority observes the same ledger. Every architect can compute the timeouts for every other architect from the timeline itself without any network communication, making the BFT implementation asynchronous in nature.

Micro forks are quickly discarded. When an architect detects multiple forks, honest architects compute the effective stake-weighted timeout of every fork and pick the heaviest one. The network generates rewards only for votes that reach the 2³² timeout. Therefore, architects are incentivized to vote for the heaviest fork since the fork with the largest amount of stake-weighted timeouts will generate the largest amount of rewards.

Let's assume there we have leaders A1, A2, A3, and the leader timetable is `A1->A2->A3`. Let's see what happens if A3 is malicious and decides to propose a block at the same time as A2. A3 will have to create a new fork based on A1's block, but the leader schedule says that A2 is the next leader after A1. If A3 emits a block that has the same timeline value as A2, other architects will know A3 is cheating because it proposed a block during A2's slot. To make it more believable, A3 must forge the fact that A2 never proposed a block. If A2's block is missing, A3 must first spend A2's slot to produce a timeline proving it waited for the full duration of A2's slot before beginning its own slot. Only then would it start emitting its own block, including the next timeline sequence. Other architects will accept A3's block as valid since A3 is the new correct leader in the correct slot. Therefore, A3 must compute enough timeline hashes to show it waited for A2's slot before proposing its block. In the meantime, A2 already submits its block that forks off A1's block. From the perspective of the network, the following events occur:

1. A1 completes a valid block with the correct timeline value.
2. A2 immediately starts streaming its new block, and the network sees that A2 is active and producing a block properly forked of A1 and with the correct timeline value:
   1. if A2 is faster at computing timeline than A3, A2 will complete its block the same time A3 starts emitting its block, which is a fork of A1's block. By this time, the network saw A2's block, so it rejects A3's block. Due to network latencies, some architects may get both blocks and may not be able to tell which one to vote. In this case, the super-majority would have to see A3's complete block well before any of A2's block to accept it
   2. if A2 is slower at computing timeline than A3, then A3 can send its block before A2 finishes. It is unlikely for A3 to be much faster than A2 so it can begin its block before a significant fraction of A2's block is already done and seen by the network

The relative speed of A3 against A2 decides how A3 can censor A2. Still, A3 would have to be much faster than A2 and have any chance of censoring A2. This is because all validators can compute the recursive VDF in comparable time, so it's unlikely for A3 to be so much faster than A2 to compete with him for a block in his slot. 

If A3 loses, it will not be allowed to propose a block for its slot. This is because once A3 proposes a block that it's a fork of A1 (pretending A2 never produced a block and was skipped), if it loses (and chances are he will), any attempt to propose a different block forked off A2 for his slot, means producing two blocks for A3's slot (an A1 - A3 block and an A2 - A3 block). This is considered misbehavior and will result in slashing for A3.

Therefore, A3's attempt to censor A2 by competing in A2's slot will fail with a high probability. For every failed attempt, A3 loses out on any chance to emit a block during its slot. On balance, it's a losing strategy for A3 most of the time, so he is very unlikely to try it.

In summary, L0 is a Proof of Stake network that works reliably if more than 1/3 of nodes are honest. In addition, the network's speed is increased through the natural fork avoidance mechanisms built into the leader timetable and the global timeline mechanism that ensures that the leader timetable is enforced while maintaining high speed and low latency.


## L1 Sharding

Mundis is a dynamic ecosystem where all L1 chains are grouped into shards and asynchronously attached to L0. The proposed approach is designed with the following objectives:

* **High scalability**: increasing or decreasing the number of L1 chains should not affect the performance of L0
* **Traceability**: L0 should determine in a deterministic way the grouping of L1 chains into shards
* **Efficiency**: shards should be balanced appropriately between L0 architects, and an L1 chain can be Garbage collected once it loses the support of its governors

L0 constantly receives hashes of finalized blocks from L1 chains. Finalized block hashes are stored in the L0 global timeline to keep up with the state of all L1 chains and vice-versa. Communication between L1 and L0 chains is made using message queues and an extension of the XCM format. L1 chains need to send at least one valid block per L0 epoch. Failure to do so will cause the L1 chain to be "jailed" and his L0 genesis stake to be slashed by 0.01%. A jailed L1 chain will not receive any inter-chain transactions. This process will continue until L0 receives a valid block from the L1 jailed chain.

At the end of an L0 epoch, L1 shard reorganization and garbage collection are triggered to rebalance L1 chains. Rebalancing will garbage collect (prune) obsolete L1 chains and possibly re-group them into new shards.

**A special note:** 

Mundis assumes that L1 chains are byzantine by default. L0 does not verify or execute any L1 transactions, so it is the responsibility of users to ensure an L1 chain is trusted before exchanging assets with that chain.






