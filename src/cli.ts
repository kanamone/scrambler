#!/usr/bin/env node

// eslint-disable-next-line node/shebang
import { createScrambler } from '.'

// DEFINITION FORMAT:
// {digits}-{n1}-{n2}-{seed}-{stages}

const definitionPattern = /^(\d+)-(\d+)-(\d+)-(\d+)-(\d+)$/

const [,, definition, input] = process.argv

if (!definitionPattern.test(definition)) {
  error('Invalid definition Pattern. Use: digits-n1-n2-seed-stages')
}

const [digits, n1, n2, seed, stages] = definition.split('-').map(Number)

if (Number.isNaN(digits) || Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(seed) || Number.isNaN(stages)) {
  error('Invalid definition values. Use: digits-n1-n2-seed-stages')
}

if (input === undefined || !/^\d+$/.test(input)) {
  error('Input must be a positive number')
}

const scrambler = createScrambler({
  digits,
  n1: BigInt(n1),
  n2: BigInt(n2),
  seed,
  stages
})

const from = BigInt(input)

if (from < 0) {
  error('Input must be a positive number')
}

const to = scrambler.scramble(from)

process.stdout.write(`${to}\n`)

function error (message: string): never {
  console.error(message)
  // eslint-disable-next-line no-process-exit
  process.exit(1)
}
