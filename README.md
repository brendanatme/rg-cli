# RG-CLI

A React generator CLI tool

Inspired by `ng-cli` &mdash; but does so much less.

Generates components (just components for now) in JavaScript or TypeScript.

## Why

So we can quickly bang out React components that follow best practices off the bat, and create a clean folder structure &mdash; especially useful in large projects

## Requirements

- tested and working in Node v10+
- probably works in lower versions &mdash; we're really not doing anything fancy here

## Installation

```
npm install -g rg-cli
```

## Usage

From your project root, in terminal, run: `rg g c [component-name]`

For example: `rg g c text-input`

## What It Does

Generates a component folder at ./src/components/[my-component-name], relative to your `cwd`.

## Changing the Output Directory

You can change the output directory by passing it in the `--dir` flag

For example:

```
rg g c --dir="my/favourite/components" text-input
```

The `--dir` flag is evaluated relative to your `cwd`.

## Generating TypeScript

The generator generates JavaScript by default; to generate TypeScript, use the `--type=ts` flag.

```
rg g c --type=ts text-input
```

## Generating Sass

The generator generates CSS stylesheets by default; to generate Scss, use the `--style=scss` flag.

## Generated Folder Structure

The component folder looks contains these files:

- `my-component-name.component.(s)css`
- `my-component-name.component.(js|ts)x`
- `my-component-name.container.(js|ts)x`
- `index.(js|ts)`

## Configuring RG-CLI for your project

RG-CLI will look for an `rg.config.json` file in your current working directory; if it finds it, it will use the options set in their by default. Any command-line arguments passed will take precendence over the config file.

An example `rg.config.json` file:

```json
{
  "dir": "client/src/components",
  "type": "ts",
  "style": "scss"
}
```

## Importing Your Generated Component

After generating a component, you can import it like so:

JavaScript:

```javascript
import MyComponent from '[components-dir]/my-component';
```

TypeScript:

```typescript
import { MyComponent } from '[components-dir]/my-component';
```
