# rg-cli

A React generator CLI tool

Inspired by `ng-cli` &mdash; but does so much less.

Currently only generates components.

Typscript-compatible only.

## Why

So we can quickly bang out React components that follow best practices off the bat, and create a clean folder structure &mdash; especially useful in large projects

## Requirements

- tested and working in Node v10+
- probably works in lower versions &mdash; we're really not doing anything fancy here

## Installation

`npm install -g rg-cli`

## Usage

From your project root, in terminal, run: `rg g c [component-name]`

For example: `rg g c text-input`

## What It Does

Generates a component folder at ./src/components/[my-component-name], relative to your `cwd`.

## Changing the Output Directory

You can change the output directory by passing it in the `--dir` flag

For example: `rg g c text-input --dir="my/favourite/components"`

The `--dir` flag is evaluated relative to your `cwd`.

## Generated Folder Structure

The component folder looks contains these files:

- `my-component-name.component.scss`
- `my-component-name.component.tsx`
- `my-component-name.container.tsx`
- `my-component-name.test.tsx`
- `index.ts`

## Importing Your Generated Component

After generating a component, you can import it like so:

```typescript
import { MyComponent } from '[components-dir]/my-component';
```
