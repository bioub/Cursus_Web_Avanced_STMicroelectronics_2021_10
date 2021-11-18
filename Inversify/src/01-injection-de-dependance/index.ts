import { Cafe } from "./Cafe";
import { Tasse } from "./Tasse";
import { The } from "./The";

const the = new The('Sencha');
const tasseDeCafe = new Tasse(the);
tasseDeCafe.showContenu();
