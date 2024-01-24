import ElementTypeEmpty from '../components/ElementTypeEmpty';
import ElementTypeParagraph from '../components/ElementTypeParagraph';
import ElementTypeQuote from '../components/ElementTypeQuote';

export function getElementComponent(type: string) {
  switch (type) {
    case 'paragraph':
      return ElementTypeParagraph;
    case 'quote':
      return ElementTypeQuote;
    default:
      return ElementTypeEmpty;
  }
}
