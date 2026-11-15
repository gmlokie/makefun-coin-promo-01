// Proof of Fun ($POOF) — make.fun coin-promo-01 entry (Node 22, stdlib only).
//
// The coin: Proof of Fun, mint 2sWdvDErZjNBQ7L4Fh6KJqGx5oVoKrGA6o1eCdADw2os,
// launched on pump.fun from the make.fun-linked wallet dZ91. The coin itself
// is the entry, and this program's only job is to hand in the launch file.
// It copies LAUNCH.json (the coin's mint + the signature of the transaction
// that created it) from the repository root to /output, where the gate reads
// it. Nothing this program writes about the coin is judged — the house reads
// the coin itself from pump.fun.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
