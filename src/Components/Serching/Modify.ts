// ---Dependacies
import { Card, Update } from '../../index';

// ---Components
export default function Modify(magicCard:Array<Card>, CN:number, infocard:Card) {
  let modifyCard:Card[] = [];
  for (let i = 0; i < magicCard.length; i++) {
    let element:Card = magicCard[i];
    if (magicCard[i].collectorNumber === CN) {
      element = infocard;
    }
    modifyCard = [...modifyCard, element];
  }
  Update(modifyCard);
}
