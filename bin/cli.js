const path = require("path");
const fs = require("fs-extra");
const { execSync } = require("child_process");

function copyTemplate(srcDir, destDir) {
  fs.copySync(srcDir, destDir, {
    filter: (src, dest) => {
      const excludes = [
        "node_modules",
        ".git",
        "dist",
        "build",
        "bin",
        ".npmignore",
        "package-lock.json",
        "pnpm-lock.yaml",
        "yarn.lock",
        ".DS_Store",
        ".gitignore",
        "npm-debug.log",
        "Thumbs.db",
      ];
      return !excludes.some((ex) => src.includes(ex));
    },
  });
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Usage: create-turborepo-config <target-directory>");
    process.exit(1);
  }
  const targetDir = path.resolve(process.cwd(), args[0]);
  if (fs.existsSync(targetDir)) {
    if (fs.readdirSync(targetDir).length > 0) {
      console.error(
        "Target directory is not empty. Please choose an empty directory."
      );
      process.exit(1);
    }
  } else {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const templateDir = path.resolve(__dirname, "../template");
  copyTemplate(templateDir, targetDir);

  try {
    execSync("git init", { cwd: targetDir, stdio: "ignore" });
  } catch {}

  console.log(`\nTurborepo monorepo scaffolded at: ${targetDir}`);
  console.log("Next steps:");
  console.log(`  cd ${args[0]}`);
  console.log("  pnpm install (or npm install)");
  console.log("  pnpm dev (or npm run dev)");
}

main();
