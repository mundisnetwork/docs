--- 
title: Security
---

Mundis is a bridging protocol where each L1 chain is sovereign and must maintain its own validator set and economic security. Since L1 chains are sovereign, the L0 chain is protected from L1 chain attacks. 

L0 and L1 chains assume a byzantine adversarial model, where a minimum of _2*n/3+1_ Architects must be honest. Mundis uses a pBFT variant where the global timeline is used as a time source, reducing pBFT-specific messaging overhead and latency. If _2*n/3+1_ Architects are honest or haven't been compromised, Mundis can achieve secure consensus.

The L0 event timeline also records L1 block headers and basic Markle proofs needed for inter-L1 asset transfers. The timeline acts as an audit and additional verification mechanism for L1 chains. An L1 inter-chain transfer is secured by the ordered source and destination chain. Merkle proofs stored in the timeline that allows both ends of a transfer to be ordered and individually verifiable on each L1 chain.
