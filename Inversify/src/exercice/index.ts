import 'reflect-metadata';

import { container } from "./container";
import { ModuleUserTheia } from "./ModuleUserTheia";

const moduleUserTheia = container.get(ModuleUserTheia);
moduleUserTheia.showUsers();

/*
Exercice 1 :
Dans le fichier ModuleUserTheia.ts remplacer le new UserService()
par de l'injection de dépendance au niveau du constructeur

Exercice 2 :
Ajouter les décorateurs @injectable() sur les classes UserService et ModuleUserTheia

Exercice 3 :
Configurer les services dans container.ts :
A la clé ModuleUserTheia passer une instance de ModuleUserTheia en Singleton (ne pas utiliser toConstantValue)
A la clé UserService passer la variable fakeUserService avec toConstantValue
*/
