import { pdf } from '@react-pdf/renderer';
import { CVDocument } from '../components/CVDocument';

export const downloadCV = async (): Promise<void> => {
  const blob = await pdf(<CVDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
};
