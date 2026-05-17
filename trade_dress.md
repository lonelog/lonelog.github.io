# Trade Dress — Solo RPG Notation Template

## Color Palette

| Role | Hex | Usage |
|---|---|---|
| Black | `#000000` | Primary text, headings, UI elements |
| Subtitle Gray | `#666666` | Subtitles, version label, blockquote text, table header border, callout border |
| Code Text | `#585260` | Code block text |
| Code Background | `#efecf4` | Alternating table rows (odd), code block background (currently disabled) |
| Inline Code Green | `#188038` | Inline code highlight |
| White | `#FFFFFF` | Page fill |

---

## Font System

| Role | Family | Notes |
|---|---|---|
| Display / UI | Montserrat | Headings, cover title, TOC title, table headers, callout titles |
| Body | Lora | Running text, blockquotes, table body, footer |
| Monospace | Consolas | Code blocks, inline code |

---

## Page Layout

- **Format:** Half-letter — 5.5 × 8.5 in (KDP digest format)
- **Margins:** top 1.5 cm · bottom 1.8 cm · left 1.5 cm · right 1.5 cm
- **Footer descent:** 0.25 in from bottom edge (KDP safe zone)
- **Page fill:** white

---

## Body Typography

- **Font:** Lora Medium, 11 pt
- **Color:** black (`#000000`)
- **Alignment:** justified
- **Leading:** 0.65 em
- **Line breaks:** simple

---

## Heading Hierarchy

> Note: Markdown `##` maps to Typst level 1, `###` to level 2, `####` to level 3.

| Level | Markdown | Font | Size | Weight | Color | Space before | Space after |
|---|---|---|---|---|---|---|---|
| H1 | `##` | Montserrat | 16 pt | Bold | Black | 1.5 em | 0.8 em |
| H2 | `###` | Montserrat | 14 pt | SemiBold | Black | 1.0 em | 0.5 em |
| H3 | `####` | Montserrat | 12 pt | SemiBold | Black | 0.8 em | 0.4 em |

---

## Cover Page

- **Alignment:** right-aligned block
- **Top offset:** 5 cm from top before content block
- **Logo:** 60% width, right-aligned; if absent, 3 cm of vertical space instead
- **Title:** Montserrat Black, 32 pt, black
- **Subtitle:** Montserrat SemiBold, 11 pt, `#666666`; 0.5 em gap below title
- **Version:** Montserrat Medium, 11 pt, `#666666`; prefixed with "Version "
- **CC License stamp:** 25% width, bottom + center, offset 1.5 cm from bottom
- **Page numbering:** none on cover

---

## Table of Contents

- **TOC title:** Montserrat Bold, 16 pt, black; 2 em before, 1.5 em after
- **Level 1 entries:** Montserrat SemiBold, black
- **Level 2+ entries:** Lora, 10 pt, black
- **Indent:** 1.2 em
- **Page numbering scheme:** roman numerals (`i`, `ii`, …), restarting at 1
- **Footer:** Lora 11 pt, black; odd pages right-aligned, even pages left-aligned

---

## Tables

| Element | Style |
|---|---|
| Width | Full column width, breakable across pages |
| Header border | Bottom: 0.5 pt + `#666666` |
| Header fill | None (no background) |
| Odd body rows | Fill: `#efecf4` |
| Even body rows | No fill |
| Header cells | Montserrat SemiBold, 10 pt, black |
| Body cells | Lora, 10 pt, black |
| Cell inset | x: 8 pt · y: 6 pt |

---

## Code Blocks (fenced)

- **Font:** Consolas, 11 pt
- **Text color:** `#585260`
- **Background:** `#efecf4` (currently commented out — no background rendered)
- **Inset:** 10 pt all sides
- **Border radius:** 2 pt
- **Width:** 100%

---

## Inline Code

- **Font:** Consolas, 11 pt
- **Color:** `#188038` (green)

---

## Block Quotes

- **Font:** Lora Italic, 10 pt
- **Color:** `#666666`
- **Horizontal padding:** 1.5 em left and right
- **Leading:** 0.65 em
- **Vertical spacing:** 1 em before and after

---

## Callout Boxes

- **Border:** 0.5 pt + `#666666`, radius 2 pt
- **Inset:** x: 12 pt · y: 10 pt
- **Title (optional):** Montserrat SemiBold, 10 pt, black
- **Title gap:** 0.4 em below title before body
- **Body:** Lora, 11 pt, black
- **Vertical spacing:** 0.8 em before and after

---

## Footer / Page Numbering (main body)

- **Font:** Lora, 11 pt, black
- **Scheme:** arabic numerals (`1`, `2`, …), restarting at 1
- **Odd pages:** right-aligned
- **Even pages:** left-aligned
- **Footer descent:** 0.25 in from bottom edge
