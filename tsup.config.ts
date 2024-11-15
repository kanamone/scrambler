import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    cli: "src/cli.ts",
  },
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["esm", "cjs"],
});
