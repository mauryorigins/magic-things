// ---Dependacies
import { Card, Update } from '../../index';
// ---Component
export default function DeleteLast(magicCard:Card[]) {
  let DelCard:Card[] = [];
  for (let i = 0; i < magicCard.length - 1; i++) {
    const deleteLast = magicCard[i];
    DelCard = [...DelCard, deleteLast];
  }
  Update(DelCard);
}
