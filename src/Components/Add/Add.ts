// ---Dependacies
import { Update, Card } from '../../index';

// ---Components
export default function Add(magicCard:Array<Card>, infoMagicCard:Card) {
  const newCard = [...magicCard, infoMagicCard];
  Update(newCard);
}
