import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 99181,
  "explorers": [],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "https://images.ctfassets.net/9bazykntljf6/62CceHSYsRS4D9fgDSkLRB/877cb8f26954e1743ff535fd7fdaf78f/avacloud-placeholder.svg",
    "width": 256,
    "height": 256,
    "format": "svg"
  },
  "infoURL": "https://avacloud.io",
  "name": "QaUser9727 Testnet",
  "nativeCurrency": {
    "name": "QaUser9727 Testnet Token",
    "symbol": "PCE",
    "decimals": 18
  },
  "networkId": 99181,
  "redFlags": [],
  "rpc": [
    "https://99181.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"
  ],
  "shortName": "QaUser9727 Testnet",
  "slug": "qauser9727-testnet",
  "testnet": true
} as const satisfies Chain;