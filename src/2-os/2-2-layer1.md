---
title: 2.2 Layer 1
---
Interoperable worlds, created as specialized, byzantine state-machines with PoS-based consensus. Each parachain has its own genesis and consensus rules, optional smart-contract support, DAOs, and more.

Based on Substrate SDK, Mundis Blockchain allows developers and partners to build and connect their Parachain to Layer 0.

## 2.2.1 Ecosystem Services
Interoperability/Extensibility: Bridges / Inter-chain data exchange / Cross-chain asset transfers.

Custom consensus rules/governance

Custom economies

Deployment

Custom assets

## 2.2.2 Extensibility
The Mundis Ecosystem is extensible. Based on Substrate SDK, Sovereign blockchains that can have their own tokens and optimize their functionality for specific use cases can be created by our users.  

An L1 parachain is a business-specific application that runs in the Multiverse (i.e., a world or a Metaverse). They are smaller, independent parachains that manage their own consensus and have control over how blocks are generated. L0 does not verify or execute L1 transactions, and it only notarizes valid L1 blocks through the timeline. L1 parachains are independent, interoperable application systems that benefit from L0 Services. Inter-L1 communication is achieved using messages routed through L0.

The main feature of L1 parachains is the ability to move assets between them, enabling complete interoperability of Metaverse worlds and asset interchangeability. Assets are designed to be fungible like coins or tokens or non-fungible such as NFTs.

Consensus inside L1 parachains is Proof of Stake (PoS) with an optimized BFT state-machine designed for high speed and fast finality, enabling fast block production and finality. This is important because L1 parachains need to support a wide range of business and consumer applications, from DeFI systems to games.

L1 parachains can be developed using Substrate as the main SDK. Substrate takes a modular approach to parachain development by defining a rich set of blockchain primitives for developers to use. L1 developers can create their own custom runtime using the Framework for Runtime Aggregation of Modularized Entities (FRAME) and pallets available in Substrate or directly with Substrate Core. 

Upon genesis, an L1 must be registered in the L0 registry, a database-like construct that holds both static and dynamic information on each L1. Part of the registration process is to generate an identity keypair for the new L1, create an L1 genesis account in L0 and deposit an amount of L0 tokens in the respective account. The identity keypair will be used in the genesis configuration of the respective L1 chain.

L1 operations include the suspension and removal of L1 parachains. Suspension can happen only if the L1 parachain account has no more Mundis tokens available in their L0 account registry, and the owner of the L1 parachain must add funds to reinstate his chain.

The removal (garbage collection) of an L1 altogether would come in the following circumstances:
- the L1 parachain is suspended for a long period.
- the L1 parachain doesn't have validator support anymore and is not producing blocks
- through an L0 referendum: this should be an emergency measure only, available for rogue L1 parachains that demonstrate malicious behavior like spamming other L1 parachains with inter-L1 transactions. doesn't have validator support anymore and is not producing blocks

## 2.2.3 L1 validators
L1 validators are nodes that maintain an L1 parachain by validating transactions and participating in the consensus of that L1. Since an L1 has Proof-of-Stake (PoS) consensus, validators must stake Mundis tokens to become eligible validators for an L1 chain.

It's up to the creator of an L1 to recruit validators for its project, and Mundis provides the Launchpad to help. Creators can list new projects for free on the LaunchPad, and citizens decide whether they pledge support for the project or not. A project that has citizen support has a greater chance to attract validators.

The economics of an L1 is also a decisive factor to consider for validators. The creator must carefully design the economics of its new L1 to be attractive (i.e., validators must be rewarded for validating blocks).

## 2.2.4 Ruling system
When creating a new L1 chain, builders can set genesis rules that enforce how the L1 will work. Genesis rules define bootstrap parameters and consensus rules. Bootstrap parameters set the initial state of the L1, the configuration of the economic system (e.g., tokens issued, inflation.), access to L0 Services, and DAO enablement.

Consensus rules, on the other hand, configure how block finality is achieved and what happens when a block is finalized. Rules are flexible to allow any use case to be implemented. Consensus rules also determine the minimum number of validators needed to support the L1 chain. If the L1 parachain does not gather or maintain enough validators support, it will be Garbage Collected by L0 to free up Metaverse resources.

The builder of an L1 parachain can choose a DAO model for governance. The validators will be included in the DAO and have voting rights on the L1 consensus rules. The DAO model promotes active participation in the life of a World and creates decentralization. validators will probably prefer to join an L1 parachain with a DAO model as extra insurance for their stake.  

## 2.2.5 Assets
An L1 parachain can have both fungible and non-fungible assets. Assets are designed to be fungible like tokens or non-fungible like NFTs.  

The main goal of Mundis is to promote interoperability. Exchange of assets must be supported between L1 parachains and between L1 parachains and L0. We chose Parity's cross-consensus message format XCM to enable the native exchange of assets with XCM-enabled blockchains.

XCM provides different methods to transfer assets between chains, as stated in the Cross-Consensus Message (XCM) Format specification:  
- Remote Transfers: control an account on a remote chain, allowing the local parachain to have an address on the remote parachain for receiving funds and to eventually transfer those funds it controls into other accounts on that remote parachain
- Teleporting: movement of an asset happens by destroying it on one side and creating a clone on the other side
- Reverse-Based Transfer: there may be two parachains that want to nominate a third chain, where one includes a native asset that can be used as a reserve for that asset. Then, the derivative form of the asset on each of those parachains would be fully backed, allowing the derivative asset to be exchanged for the underlying asset on the reserve parachain backing it  

The XCM protocol is designed to be:
- Asynchronous: XCM messages in no way assume that the sender will be blocking on its completion
- Absolute: XCM messages are guaranteed to be delivered and interpreted accurately, in order, and in a timely fashion.
- Asymmetric: XCM messages do not have results. Any results must be separately communicated to the sender with an additional message.
- Agnostic: XCM makes no assumptions about the nature of the Consensus System between which messages are being passed.

The actual message parsing between L0 and L1 parachains is handled using queues. L0 can send messages to L1 parachains by posting a message in the L1 chain's input queue. Similarly, an L1 parachain can post a message in the L0 input queue. This also enables the exchange of messages between L1 chains. It is the task of L0 to move transactions from the output queue of one L1 parachain into the input queue of the destination L0 chain. In the L0 timeline, only the hash of the associated metadata is stored. The input/output queues must have a limited size to prevent spamming.  

Anatomy of an L1 inter-chain Interaction:

1. A smart contract that exists on L1 parachain A will route a message to L1 parachain B, where another smart contract is called to make a transfer of some assets within L1 parachain B.

2. Charlie executes the smart contract on L1 parachain A, which initiates a new cross-chain message for the destination of a smart contract on L1 parachain B.

3. A validator of L1 parachain A will place this new cross-chain message in the L0 inbound message queue, along with message id, destination, and a timestamp.

4. An L0 validator picks up the message and determines the destination L1 parachain (using the destination field), and places the message in the inbound message queue of L1 parachain B.

5. An L1 validator of B will see this new message and add it for processing into the next block. While processing, the message will trigger smart contract execution on L1 parachain B and complete the asset transfer as intended.

6. After finalizing the block on L1 parachain B, its hash and message id will be submitted to L0 for inclusion in the global timeline.

7. L0 will notify L1 parachain A that the communication is completed and provide an optional result.

## 2.2.6 Smart Contracts
Substrate provides a Contracts pallet that allows the L1 runtime to deploy and execute WASM smart contracts. As described in the Substrate SDK documentation, the smart-contract code is stored once in a code cache and later retrievable via its hash. This means that multiple smart contracts can be instantiated from the same hash without replicating the code each time. When a smart contract is invoked, the associated code is retrieved and executed via the code hash. This call can modify the smart-contract account's storage entries, instantiate new smart contracts, or invoke other smart contracts.

Contract users must specify a gas limit with each call, as the smart contract's instructions require gas. Unused gas is refunded following the call, regardless of the outcome of the execution. When the gas limit is reached, all calls and state changes (including balance transfers) are reverted only at the contract level of the current call. For instance, if contract A calls B and B runs out of gas in the middle of the call, all of B's calls are reverted. Assuming contract A handles errors correctly, A's other calls and state changes continue to occur.  

## 2.2.7 Security
L1 parachains have Proof of Stake (PoS) consensus and are assumed to be adversarial by default since they are permissionless untrusted networks of unknown participants. An L1 parachain needs active validators and to be alive for several epochs to be considered for inclusion in the L0 timeline and be able to consume L0 services.

In a multichain network, major security issues arise from cross-chain assets, because in PoS chains, attackers can hardly profit from a purely internal attack. On Mundis, if validators act maliciously in the L1 consensus process, anyone can challenge them by submitting fraud proofs to L0. Fraud Proofs present evidence that a state transition was incorrect. The main advantage of Fraud Proofs is that they are not needed for every state transition, but only when things supposedly break down. They require fewer computational resources and are a better fit for a scalability-constrained environment.

There are two types of fraud-proof corresponding to two kinds of malicious actions that can be challenged:

1. a group of L1 validators signed two different headers at the same height.
2. a group of L1 validators voted on a block that included invalid transactions.

The 1st type of fraud-proof can be verified by L0 directly. L0 tracks all public keys of L1 validators and uses the same public-key cryptography and curve with L1 chains. Once the challenge is verified, the slashing process is invoked automatically. Validators who signed the duplicate header will be slashed. The severity depends on the summed voting power of the faulty validators. If the voting power is 33% or more, 100% of the stake will be slashed. These 21 penalties are transferred to an on-chain L0 treasury. L0 will then halt the corrupted L1 chain, and its future would be dependent on an L0 governance decision.

The 2nd type of fraud-proof can't be verified directly by L0. So, once this type of fraud-proof is received, L0 pauses the staking/delegation operation and any cross-chain asset transfers into and out of the L1 chain. A governance process is then triggered on L0 to make a judgment and take corresponding actions. There is ongoing research to automate this process.

Another problem is data availability. While most systems rely on data availability proof that is complex and expensive, Mundis uses a challenge-response game. All L1 validators must continually observe L0, specifically the light client corresponding to its L1 parachain inside the L0, which acts as the Root-of-Trust for cross-chain asset transferring. A malicious group of validators could forge a header and update the light client in L0 but hide block content from honest validators. By doing that, the malicious group may steal cross-chain assets from the mainchain that are locked in the L0 bridge or transfer fake L1 assets to L0.

Suppose an honest L1 parachain validator finds a newly committed block header in the chain's light client on L0 but doesn't have the corresponding block data. In this case, he would submit a query transmission to L0 expressing doubt. If he receives the block afterward, he would then withdraw the query. But if one L1 parachain accumulates many queries on the same height, L0 will emit data availability challenges. In this situation, the header signers’ responsibility is to submit a valid block that justifies the header. Should they fail to do so, their staking would be slashed. If the duration of this challenge-response game is significantly shorter than the unbonding period — and the total staking on the L1 caps the cross-chain assets — there is no chance for attackers to profit by hiding blocks.  

## 2.2.8 Backbone security
Mundis is a bridging protocol where each L1 parachain is sovereign and must maintain its own validator set and economic security. Since L1 parachains are sovereign, the L0 parachain is protected from L1 parachain attacks.

L0 and L1 parachains assume a byzantine adversarial model, where a minimum of 23𝑛+1 L0 validators must be honest. Mundis uses a pBFT variant where the global timeline is used as a time source, reducing pBFT-specific messaging overhead and latency. If 23𝑛+1 L0 validators are honest or haven't been compromised, Mundis can achieve a secure consensus.

The L0 event timeline also records L1 block headers and basic Markle proofs needed for inter-L1 asset transfers. The timeline acts as an audit and additional verification mechanism for L1 chains. An L1 inter-chain transfer is secured by the ordered source and destination chain. Merkle proofs are stored in the timeline that allows both ends of a transfer to be ordered and individually verifiable on each L1 chain. 

