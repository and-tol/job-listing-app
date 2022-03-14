declare module '*.svg' {
  const content: React.FC<React.SVGAttributes<SVGElement>>;
  const src: string;
  export default content;
}
