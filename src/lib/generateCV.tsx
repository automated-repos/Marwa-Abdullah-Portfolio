import { pdf } from '@react-pdf/renderer';
import { CVDocument } from '../components/CVDocument';

const isMobile = () => /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

export const downloadCV = async (): Promise<void> => {
  const newWindow = isMobile() ? null : window.open('', '_blank');
  const blob = await pdf(<CVDocument />).toBlob();
  const url = URL.createObjectURL(blob);

  if (newWindow) {
    newWindow.location.href = url;
  } else {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Marwa-Abdullah-Elawady-CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};
