// ---Dependacies
import { Card, Update } from '../../index';
// ---Component
export default function DeleteFirst(magicCard:Card[]) {
  let DelCard:Card[] = [];
  for (let i = 0; i < magicCard.length; i++) {
    const deleteFirst:Card = magicCard[i];
    if (i !== 0) { DelCard = [...DelCard, deleteFirst]; }
  }
  Update(DelCard);
}
