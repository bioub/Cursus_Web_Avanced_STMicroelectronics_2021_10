import { Cafe, The } from "./Cafe";
import { Tasse } from "./Tasse";

const the = new The('Sencha');
const tasseDeCafe = new Tasse(the);
tasseDeCafe.showContenu();
