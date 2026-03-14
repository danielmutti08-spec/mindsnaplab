
export const shareOnX = (text: string) =>
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' ' + window.location.origin)}`, '_blank');

export const shareOnWhatsApp = (text: string) =>
  window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + window.location.origin)}`, '_blank');

export const copyLink = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text + ' ' + window.location.origin);
    return true;
  } catch { return false; }
};
