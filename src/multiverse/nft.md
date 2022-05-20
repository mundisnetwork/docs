---
title: NFTs
---

In Mundis, Non-fungible assets (NFTs) have some important distinctions to fungible assets (tokens). They must be:

* **Unique**: each NFT is uniquely identified by an L0/L1 address in Mundis and optionally an Anima storage hash for its resources. 
* **Ownable**: an NFT can be owned by a single citizen. 
* **Immutable**: once issued, an NFT cannot be destroyed or altered. 
* **Transferrable**: the ownership of an NFT can be transferred between citizens and an L1 chain. 
* **Displayable**: an NFT can be optionally displayed in Layer 2 if it's compatible. 
* **Categorizable**: NFTs must adhere to an ontology in Mundis (i.e., digital art, avatar, car, shoes, etc.) defined.

Mundis NFTs builds and extends the [Metaplex Protocol](https://docs.metaplex.com/) to support:

* creating/minting NFTs
* auctions for primary/secondary sales
* visualizing NFTs in a standard way across wallets and applications
* creating storefronts
* royalties for collaborating on creating content

The mission of Mundis is to standardize the NFT protocol to a greater extent, allowing anyone to easily mint, display and monetize their creations in the Multiverse and all associated Metaverses.

## Standards

To accommodate many NFT use cases, Mundis implements the following types of NFTs:

* **Standard NFT**: a normal NFT (like a Master NFT) that is a non-fungible token and associated metadata but lacks rights to print. It can be a one-of-a-kind artwork that when sold, is transferred from the artist's wallet to the purchaser's wallet.
* **Master NFT**: a non-fungible token and associated metadata that allows creators to control the provenance of prints created from the master NFT. Rights to create prints can be tokenized, the owner of the master NFT can distribute additional tokens to allow users to create prints. Additionally, the creator can set a max supply for the master NFT, just like a regular mint on Mundis, with the main difference being that each print is a numbered NFT created from it. A notable and desirable effect of master NFTs is that as prints are sold, the artwork will remain visible in the artist's wallet as a master NFT, while prints NFTs appear in the purchaser's wallets.
* **Print NFT**:  a copy of a master NFT. Each print has a number associated with it to uniquely identify it. Prints can be created as a part of an auction on the Mundis NFT Marketplace but can also be minted manually by the creator.

Additional mechanisms for revocation, time, use, and data-based expiry, explosion, and selective/non-transferability are available in Mundis to support Metaverse use-cases like issuance, ownership, and management of programmatically governed tokens to facilitate rental agreements, loans, tickets, domain names, gaming items, certifications, credentials, badges, and much more. 

### Transferability

NFTs in Mundis support three degrees of transferability:

* Frozen
* Permissioned transfer
* Permissionless transfer

If the issuer chooses to make transferability permissioned, he must choose a transfer authority to approve transfers. A token holder can then only transfer ownership by invoking the transfer method which will require a signature from the transfer authority. If the token issuer choses to make the token freely transferable, a transfer authority is not required.

In all circumstances, a signature from the transfer receiver is required to correctly invoke the transfer mechanism. This is due to the fact that the transfer method reassigns ownership of the current owner's token account, which by default removes the current delegate. Before the token account is re-frozen, a signature from the new owner is necessary to reset the token manager as a delegate.

### Payment Settlement & Extension

NFT issuers can optionally chose to collect funds throughout a NFT lifecycle and then pay out these funds either upfront or upon invalidation. When choosing to accept funds, the issuer must specify the payment mint and add a paid-claim-approver with the amount specified to ensure it must be paid to claim the token.

It's also feasible to provide invalidators extensions so that they can accept payment and avoid invalidation. It is up to the issuer to use a payment-accepting invalidator and then establish an extension price within it. Allowing the invalidator to be extended proportionally to the initial payment and length is an example extension schema.


### Expiration and Invalidation

When constructing a token-manager, one or more invalidators might be assigned as the only public keys that can perform an invalidation. A permissionless call can invalidate the token in the case of time or usage-based invalidation. After that, all appropriate payments are made, and the product's lifecycle is complete.

Mundis has the following built-in invalidation mechanisms:

1. Time: the issuer can set a duration at issuance or claiming. The token can be invalidated after the expiration date.
2. Usage: the issuer can set a maximum number of usages. Token holders declare usages by signing transactions. If the number of usages exceeds the set maximum usages, the token can be invalidated.
3. Manual revocation: the issuer can specify a revoke authority that can invalidate the certificate anytime.

Mundis also supports different invalidation types. These specify what happens with the token after an invalidation took place:

1. Return: after invalidation, the token will be returned to the issuer
2. Invalidate: after invalidation, the token will remain marked as invalid and can no longer be used
3. Release: after invalidation the token-manager will be deleted and tokens are released

## Auctions

The NFT marketplace will supports four types of auctions derived from English auctions:

1. **Single Item**: can be used to sell Standard NFTs and re-sell Print NFTs, as well as the sale of Master NFTs themselves (and the associated printing rights) if the artist so wishes.
2. **Open Auction**: requires the offering of a Master NFT that specifically has no fixed supply. The auction will only create Print NFTs for bidders. Each bidder is guaranteed to get a unique print. (there are no "winners" in this type of auction). An open auction can:
   1. have a pre-set fixed price
   2. have the bid price set to the last offer 
   3. have no price (be free)
3. **Limited Auction**: a Master NFT may be provided to the auction with a number of copies that represent the number of winner places. For each winner, a Print NFT will be minted and awarded to the winning bidder of that place. For example, the first-place winner will win Print #1; the second-place winner Print #2, etc.
4. **Tiered Auction**: a mix of the previous auction types as winning placements. For instance, the first-place winner could win a Print of Limited Edition NFT A, while the second-place winner could win a Standard NFT, etc. In addition, participants who did not win could get a Participation Print NFT from the Master NFT.

## Royalties

Each NFT can be minted with configurable royalty payments that are then sent automatically back to the original creators whenever an artwork is resold on the NFT marketplace in the future.

## Marketplace

Creators can sell their content as NFTs in the NFT marketplace. The Marketplace will be available in The Construct and as a dApp accessible through any internet browser. NFT sellers have the option to receive payment for their creations in any supported Mundis token.