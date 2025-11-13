// If @types/react is installed, use its JSX namespace. Otherwise provide a permissive fallback.
// This file aims to reduce editor red squiggles during gradual migration to TypeScript.
declare global {
  // noop - keep global scope available
}

// permissive fallback for JSX intrinsic elements
declare namespace JSX {
  // Minimal fallback types to allow TSX files to type-check when @types/react isn't fully wired.
  // These are permissive and can be tightened later.
  type Element = any;
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Allow importing CSS modules with .module.css
declare module "*.module.css";
