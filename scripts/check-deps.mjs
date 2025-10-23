import depcheck from "depcheck";

const options = {
  skipMissing: true,
  ignoreMatches: [
    "@cloudflare/workers-types",
    "@tailwindcss/typography",
    "autoprefixer",
    "postcss",
    "tailwindcss",
    "typescript",
    "lovable-tagger",
  ],
  specials: [
    depcheck.special.eslint,
    depcheck.special.next,
    depcheck.special.postcss,
    depcheck.special.tsconfig,
  ],
};

const result = await depcheck(process.cwd(), options);

const unusedDeps = result.dependencies;
const unusedDevDeps = result.devDependencies;

if (unusedDeps.length || unusedDevDeps.length) {
  if (unusedDeps.length) {
    console.error("Unused dependencies:\n" + unusedDeps.map((name) => ` - ${name}`).join("\n"));
  }
  if (unusedDevDeps.length) {
    console.error("Unused devDependencies:\n" + unusedDevDeps.map((name) => ` - ${name}`).join("\n"));
  }
  process.exit(1);
}

console.log("depcheck: no unused dependencies found");
