import { pdf } from '@react-pdf/renderer';
import { CVDocument } from '../components/CVDocument';

export const downloadCV = async (): Promise<void> => {
  const blob = await pdf(<CVDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Marwa-Abdullah-Elawady-CV.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
