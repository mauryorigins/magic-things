// ---Dependacies
import { Card } from '../../index';

// ---Components
export default function SearchCN(magicCard:Array<Card>, CN:number) {
  for (let i = 0; i < magicCard.length; i++) {
    const element = magicCard[i];
    if (magicCard[i].collectorNumber === CN) {
      console.log(element);
    }
  }
}
