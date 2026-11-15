# 现站源码基线与恢复

这份记录对应 splendid1.xyz 当前主站源码快照，不是远程 `master`。

远程 `master`（`5b1ded772876b2a4f0b1c2fde4eb922d272d71d0`，说明为 “Initial commit: Personal portfolio template”）是一份更早的脱敏模板：含 `src/components/Services.tsx` 和占位文案，没有 `Portfolio.tsx`，也没有 `public/assets/projects/`。附件快照里有尚未进入该远程分支的现站更新。改版必须以本目录为内容基线。

本归档只进入 Git 分支，不合并、不部署，不改线上站点、DNS 或服务器。

## 快照

| 项 | 值 |
| --- | --- |
| 文件 | `baseline/splendid1-source-original.tar.gz` |
| SHA256 | `58e5690f301cb13c3320b0ab95e6e2243d1ea9717b1daa01c33c1f7ab4382b05` |
| 校验 | `baseline/SHA256SUMS` |
| 包内 | 现站源码与 `public/assets/projects/*.webp`。包内没有 `.git`。 |

上传时的文件名是 `splendid1-source-original.tar_c08c.gz`，内容与上表哈希相同。

## 校验

在仓库根目录：

```bash
sha256sum -c baseline/SHA256SUMS
```

输出应为 `baseline/splendid1-source-original.tar.gz: OK`。

## 恢复现站源码，且不覆盖 .git

导入快照的提交是 `cfb17f32d5db11349808a4bf115f6ac05a70c8e3`。归档分支 `cursor/archive-live-baseline-6e10` 在该提交之上只追加本说明。连同说明回到归档：

```bash
git switch cursor/archive-live-baseline-6e10
```

只把跟踪文件回到快照导入提交：

```bash
git checkout cfb17f32d5db11349808a4bf115f6ac05a70c8e3 -- .
```

只从压缩包还原源码时，先解到空目录，再复制进去。不要把压缩包直接解到含 `.git` 的目录上，以免和现有文件混在一起；这个包本身不含 `.git`。

```bash
mkdir -p /tmp/splendid1-restore
tar -xzf baseline/splendid1-source-original.tar.gz -C /tmp/splendid1-restore
# 确认没有 .git 之后，再覆盖工作区源码。不要删除或替换仓库的 .git。
find /tmp/splendid1-restore -name .git -print
tar -C /tmp/splendid1-restore -cf - . | tar -C /path/to/repo -xf -
```

`baseline/` 是后来加上的归档说明，不在原始压缩包里。恢复“与线上快照一致的源码”时，以压缩包内容为准；保留 `baseline/` 不会改变站点构建。

## 与远程 master 的内容差异

现站有、master 没有：

- `src/components/Portfolio.tsx`
- `public/assets/projects/homepage.webp`
- `public/assets/projects/template.webp`
- `public/assets/projects/knowledge.webp`

master 有、现站没有：

- `src/components/Services.tsx`

文案、导航和计时器也以现站文件为准：`index.html`、`src/App.tsx`、`src/index.css`、`Hero.tsx`、`About.tsx`、`Navbar.tsx`、`Contact.tsx`、`UptimeTimer.tsx`。

## 本地预览这条基线（不部署）

```bash
git checkout cfb17f32d5db11349808a4bf115f6ac05a70c8e3
npm install
npm run dev
```

构建：

```bash
npm run build
npm run preview
```
