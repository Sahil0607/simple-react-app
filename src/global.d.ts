declare namespace JSX {
  interface IntrinsicElements {
    // allow any intrinsic element to reduce noise until full types are added
    [elemName: string]: any;
  }
}
