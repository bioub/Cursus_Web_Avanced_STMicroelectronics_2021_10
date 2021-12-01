# Exercice Webpack

## Supprimer le dossier dist

Installer le paquet npm `rimraf` en `devDependencies`

Devant les scripts `build:dev` et `build:prod` ajouter `rimraf dist` par exemple :

`"build:prod": "rimraf dist && webpack --mode production"`

## JSON5

Le fichier `horloge.ts` importe le fichier `config.json`

Webpack supporte les fichiers `.json` par défaut et les transforme en objet.

Le problème du JSON :
- pas de commentaires,
- pas de single quotes,
- les clés entre quotes,
- ...

Le projet JSON5 propose une évolution qui contourne ces limitations :
https://json5.org/

Installer le paquet npm `json5`

Modifier la config pour autoriser les fichiers `.json5` en  vous inspirant de l'exemple suivant :
https://github.com/webpack/webpack/tree/main/examples/custom-json-modules

## SASS

Renommer le fichier `horloge.css` en `horloge.scss` et lui donner ce contenu :

```
$color: purple;

.horloge {
  font-size: 3em;
  color: $color;
}
```

Installer `sass` et `sass-loader` puis modifier la config webpack pour que les fichiers `.scss` utiliser les 3 loaders (dans cet ordre) : `style-loader`, `css-loader`, `sass-loader`.

Doc : https://github.com/webpack-contrib/sass-loader

## Banner Plugin

En suivant la doc : https://webpack.js.org/plugins/banner-plugin/

Charger le plugin banner dans la liste des plugins comme ceci :
`new webpack.BannerPlugin('Copyright STMicroelectronics')`

Un commentaire devrait apparaitre en début de bundle.

## MiniCssExtractPlugin

Suivre la doc suivante pour remplacer `style-loader` qui écrit le css dans une balise style, par un fichier .css externe qui chargera dans une balise link :

https://webpack.js.org/plugins/mini-css-extract-plugin/


