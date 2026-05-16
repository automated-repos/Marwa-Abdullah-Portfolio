import { pdf } from '@react-pdf/renderer';
import { CVDocument } from '../components/CVDocument';

export const downloadCV = async (): Promise<void> => {
  const newWindow = window.open('', '_blank');
  const blob = await pdf(<CVDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  if (newWindow) {
    newWindow.location.href = url;
  }
};
