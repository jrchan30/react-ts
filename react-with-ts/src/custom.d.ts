declare module '*.css' {
  const css: { [key: string]: string };
  export default css;
}

// declare module '*.svg' {
//   const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & {
//       title?: string | undefined;
//     }
//   >;
//   export default ReactComponent;
// }
