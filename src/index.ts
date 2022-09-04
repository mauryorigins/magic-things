// ---Dependacies
import Print from './Components/Print/Print';
import {
  infoMagicCard1, infoMagicCard2, infoMagicCard3, infoMagicCard4
} from '../others/DataCards';
import Add from './Components/Add/Add';
// import DeleteFirst from './Components/Delete/DeleteFirst';
// import DeleteLast from './Components/Delete/DeleteLast';
// import SearchCN from './Components/Serching/SearchCN';
import Modify from './Components/Serching/Modify';

// ---Interface
export interface Card {
  cardName: string;
  set: string;
  manaCost: number;
  cardType: string;
  oracleText: string;
  collectorNumber: number;
  rarity: string;
  price: number;
}
// ---const
let magicCard: Array<Card> = [];

// ---Mehotds
export function Update(newMagicCard:Array<Card>) {
  magicCard = newMagicCard;
}

// --- component
function main() {
  console.log('---------- Cool Programing ----------\n');
  Print(magicCard);
  Add(magicCard, infoMagicCard1);
  Add(magicCard, infoMagicCard2);
  Add(magicCard, infoMagicCard3);
  console.log('primera impresion');
  // Print(magicCard);
  // DeleteFirst(magicCard);
  // console.log('segunda impresion');
  // Print(magicCard);
  // DeleteLast(magicCard);
  // console.log('Tercera impresion');
  // Print(magicCard);
  // SearchCN(magicCard, 4);
  Modify(magicCard, 384, infoMagicCard4);
  console.log('Tercera impresion');
  Print(magicCard);
  console.log('--------------------------------------\n');
}

main();
