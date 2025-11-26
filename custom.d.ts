// custom.d.ts

declare module '*.css' {
  // Option 1: Déclare le module comme étant de type any (le plus simple)
  // const content: any;
  // export default content;

  // Option 2: Déclare le module comme étant une chaîne vide (pour les imports side-effect)
  // C'est souvent plus précis pour les globals.css
  export {};
}