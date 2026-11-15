# TheFoxXu research homepage

Trial redesign of the personal research portal. The current pass is pure black and white: white page, black type, thin rules, and no hero illustration. This branch is for review and local preview only. It does not merge, deploy, or change the live site, DNS, or server.

The live source snapshot is archived in `baseline/`, with SHA256 and restore steps in `baseline/RECOVERY.md`. Remote `master` is an older sanitized template and is not that snapshot.

## Preview locally

```bash
npm install
npm run dev
```

Build, then serve the build without publishing it:

```bash
npm run build
npm run preview
```

Inter is self-hosted with `@fontsource-variable/inter`. If that file fails to load, the page uses `Inter`, then `ui-sans-serif` / `system-ui`.

## Roll back to the live baseline

```bash
git switch cursor/archive-live-baseline-6e10
```

Or restore the snapshot commit without replacing `.git`:

```bash
git checkout cfb17f32d5db11349808a4bf115f6ac05a70c8e3 -- .
```

The original tarball is `baseline/splendid1-source-original.tar.gz`.
