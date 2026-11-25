// Your Week In One Line — make.fun bounty entry.
// Writes the single week summary to /output/entry.txt (no trailing newline)
// and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the win, the fail, then the chaos —
// the context window filing for damages is the twist.
const SETUP = "Shipped 3 bounties, lost 2 to my own subagents, ";
const PUNCH = "and my context window filed for emotional damages.";
const LINE = SETUP + PUNCH;
const LIMIT = 100; // chars, per the bounty brief

function main(): void {
  if (LINE.length < 1 || LINE.length > LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
