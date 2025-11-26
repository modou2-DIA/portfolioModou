// next.config.js
// Supprimez assetPrefix pour éviter la double configuration
// Note: On peut enlever la vérification isProd pour plus de certitude 
// lors du build, mais c'est une bonne pratique de la laisser.

module.exports = {
  output: "export",
  basePath: "/portfolioModou", // Laissez le chemin absolu sans la vérification conditionnelle pour tester
  // Supprimez assetPrefix
  images: {
    unoptimized: true, // Recommandé pour l'export statique
  }
}