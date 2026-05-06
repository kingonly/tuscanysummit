export type ItemType =
  | "opening"
  | "keynote"
  | "talk"
  | "panel"
  | "workshop"
  | "discussion"
  | "break"
  | "closing";

export interface AgendaItem {
  type: ItemType;
  title: string;
  speaker?: string;
  description?: string;
  moderator?: string;
  panelists?: string[];
  tbd?: boolean;
}

export interface AMRow {
  time: string;
  item: AgendaItem;
}

export interface PMRow {
  time: string;
  isBreak?: boolean;
  trackA?: AgendaItem;
  trackB?: AgendaItem;
}

const death_of_bitcoin_companies: AgendaItem = {
  type: "keynote",
  title: "The Death Of Bitcoin Companies",
  speaker: "Marco Argentieri",
  description:
    "Bitcoin won. ETFs, corporate treasuries, institutional adoption. The war is over. But too many companies are still fighting it. This talk argues the \u201CBitcoin company\u201D label is now a ceiling, not a moat, and the builders who drop the tribal identity will capture the real opportunity ahead.",
};

const lightning_as_trust_network: AgendaItem = {
  type: "keynote",
  title: "Lightning as a Trust Network",
  speaker: "John Carvalho",
  description:
    "Some scaling research for the Lightning Network, and the case for re-orienting our understanding of LN \u2014 and Bitcoin scaling \u2014 as methods for coordinating trust, not trustlessness, and what that means for our priorities and design choices. The goal is to help peers understand how current trends and work may be dead ends, despite being very interesting and fitting together, and where they can pivot with their research goals instead.",
};

export const day1AM: AMRow[] = [
  {
    time: "10:00 \u2013 10:10",
    item: { type: "opening", title: "Opening" },
  },
  {
    time: "10:10 \u2013 10:40",
    item: {
      type: "keynote",
      title: "The State of Bitcoin",
      speaker: "Giacomo Zucco",
    },
  },
  {
    time: "10:45 \u2013 11:15",
    item: death_of_bitcoin_companies,
  },
  {
    time: "11:15 \u2013 11:30",
    item: { type: "break", title: "Coffee break" },
  },
  {
    time: "11:30 \u2013 12:15",
    item: {
      type: "panel",
      title: "Building Bitcoin Companies",
      moderator: "Roy Sheinfeld",
      panelists: [
        "Marco Argentieri",
        "Sergej Kotliar",
        "Andre Neves",
        "Ethan Marcus",
      ],
    },
  },
];

export const day2AM: AMRow[] = [
  {
    time: "10:00 \u2013 10:10",
    item: { type: "opening", title: "Opening" },
  },
  {
    time: "10:10 \u2013 10:40",
    item: { type: "keynote", title: "Keynote", tbd: true },
  },
  {
    time: "10:45 \u2013 11:15",
    item: lightning_as_trust_network,
  },
  {
    time: "11:15 \u2013 11:30",
    item: { type: "break", title: "Coffee break" },
  },
  {
    time: "11:30 \u2013 12:15",
    item: {
      type: "panel",
      title: "The Future of L2",
      moderator: "Giacomo Zucco",
      panelists: [
        "John Carvalho",
        "Steven Roose",
        "Elias Rohrer",
        "Kilian Rausch",
      ],
    },
  },
];

export const day1PM: PMRow[] = [
  {
    time: "14:00 \u2013 14:30",
    trackA: {
      type: "talk",
      title: "Lightning fast P2P with Arkade",
      speaker: "Anna",
      description: "Our journey to non-custodial L2 escrows.",
    },
    trackB: {
      type: "talk",
      title: "Introducing LDK Server",
      speaker: "Elias Rohrer",
      description:
        "LDK Server is a new Lightning daemon implementation based on LDK / LDK Node. In this introductory talk we'll give an overview of the feature roadmap and a quick demo of its current capabilities.",
    },
  },
  { time: "14:30 \u2013 14:45", isBreak: true },
  {
    time: "14:45 \u2013 15:15",
    trackA: {
      type: "talk",
      title: "Confidential Computing: The Missing Piece of Sovereign Infrastructure",
      speaker: "Aljaz Ceru",
      description:
        "Confidential computing unlocks better self-custodial experiences for Bitcoin payments and enables an extra layer of protection for all kinds of sensitive applications. Its trust assumptions are baked into the hardware and enable service providers to prove what is actually running (ecash mints, federations, swap services, ASP, LSP, SOs) while at the same time protecting the secrets. We already have verifiable builds in Bitcoin signers; with this we can build verifiable 3rd-party services.",
    },
    trackB: {
      type: "talk",
      title: "From Prompt to Payment: AI Agents on Bitcoin",
      speaker: "Moritz Kaminski",
      description:
        "This talk explores how Bitcoin integrates with X402 and MPP, alongside emerging tools that enable agents to autonomously pay for APIs, data, and services. We'll examine activity across these ecosystems, share real-world demos, and highlight what's still missing to unlock machine-native commerce with Bitcoin.",
    },
  },
  { time: "15:15 \u2013 15:30", isBreak: true },
  {
    time: "15:30 \u2013 16:15",
    trackA: {
      type: "workshop",
      title: "Building Multi-Layer Bitcoin Apps with KaleidoSDK & Wallet",
      speaker: "Walter Maffione",
      description:
        "Explore how to build next-gen Bitcoin applications using KaleidoSDK and CLI. This hands-on workshop showcases the Kaleido Wallet browser extension and its multi-layer capabilities (Spark, Arkade, RGB Lightning). Learn how to integrate atomic swaps, manage assets across layers, and create seamless user experiences on Bitcoin's evolving stack.",
    },
    trackB: {
      type: "talk",
      title: "Bitcoin PIPEs: Covenants & ZKPs Without Soft Forks",
      speaker: "Scott Odell",
      description:
        "Bitcoin PIPEs v2 is a cryptographic primitive using witness encryption and non-interactive ZKPs to emulate missing opcodes (OP_VAULT, OP_CTV, et al), enforce arbitrary spending conditions, and bring more expressivity to Bitcoin without changing consensus. With PIPEs, as the first witness encryption scheme made practical for Bitcoin 10m block times, spending logic enforcement shifts from Bitcoin Script to purely cryptography.",
    },
  },
];

export const day2PM: PMRow[] = [
  {
    time: "14:00 \u2013 14:30",
    trackA: {
      type: "talk",
      title: "Wallet-Linked Offers: The Missing Incentive Layer",
      speaker: "Tomas Chojnacki",
      description:
        "Bitcoin merchant infrastructure is here. Payment volume isn't. The missing piece is incentives \u2014 the same lever card networks used to drive mass payment adoption. We built the Bitcoin-native equivalent: merchant-funded wallet-linked offers on Lightning and NWC that deliver instant sats-back to any Lightning wallet, at any BTCPay Server merchant, without surveillance. Live demo included.",
    },
    trackB: {
      type: "talk",
      title: "Lightning as the Execution Layer for the Dollar Economy",
      speaker: "Viktor Ihnatiuk",
      description:
        "Lightning spent a decade proving it could move Bitcoin instantly and cheaply. The missing piece was a stable unit of account. With USDT now settling over Lightning on Bitcoin rails, the network is completing its transition from a payments experiment to the backbone of global dollar infrastructure.",
    },
  },
  { time: "14:30 \u2013 14:45", isBreak: true },
  {
    time: "14:45 \u2013 15:15",
    trackA: {
      type: "talk",
      title: "B-SSL: Trustless Key Recovery in Self-Custody",
      speaker: "Francesco Madonna",
      description:
        "B-SSL is a Taproot-based, covenant-free vault architecture that makes Bitcoin self-custody survive key loss. Even if all keys are lost, funds remain recoverable through time-locked paths involving custodians \u2014 who cannot collude due to enforced delays. It removes the need for trust: keep full ownership of your funds while B-SSL ensures you can always regain access.",
    },
    trackB: {
      type: "discussion",
      title: "P2Poolv2 Payouts",
      speaker: "Kulpreet Singh",
      description:
        "P2Poolv2's payout mechanism lets miners trade their PoW shares for BTC using atomic swaps \u2014 potentially through Boltz. However, the liquidity and cross-chain nature of our swaps is a concern, and it seems LN implementations have stopped supporting cross-chain swaps (does Core Lightning still maintain it?). The goal is to brainstorm with Lightning developers how we can address these concerns, and to share how Ark seems more promising for decentralising payouts.",
    },
  },
  { time: "15:15 \u2013 15:30", isBreak: true },
  {
    time: "15:30 \u2013 16:15",
    trackA: {
      type: "workshop",
      title: "Introducing Paykit",
      speaker: "Denys Zaliskyi",
      description:
        "Participants should leave with a clear mental model of Paykit and an idea of how to integrate it into an existing wallet or payment processor. Paykit is introduced as a meta-payment routing layer that maps a single public key to multiple payment methods. Covers basic concepts, interfaces, and a wallet-integration demo.",
    },
    trackB: {
      type: "discussion",
      title: "Beyond Payments: RGB as Sovereign Identity Infrastructure",
      speaker: "Michael Chobanian",
      description:
        "Can Bitcoin's Layer 2 stack replace passports, voting systems, and state registries? This discussion explores a concrete architecture: RGB tokens as digital citizenship credentials, Holepunch for P2P citizen communication, Lightning for governance micropayments, and AI-arbitrated dispute resolution \u2014 all without a single centralized authority. What protocol primitives are missing? Where does the trust model break? What happens when a digital jurisdiction has no territory? Bring skepticism.",
    },
  },
  { time: "16:15 \u2013 16:30", isBreak: true },
  {
    time: "16:30 \u2013 17:15",
    trackA: {
      type: "workshop",
      title: "Marketing With AI: From Prompts to Process",
      speaker: "Danny Stagg",
      description:
        "Learn how to use AI for marketing. We'll cover processes, tools, and real examples, giving builders the knowledge to set up and apply AI to their own marketing straight away.",
    },
    trackB: {
      type: "workshop",
      title: "Glow: Breez SDK Playground",
      speaker: "Roy Sheinfeld",
    },
  },
];
