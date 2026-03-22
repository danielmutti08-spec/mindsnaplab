
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

export const shareResults = (data: { name: string; score: number | string; label: string }) => {
  const text = `I just completed the ${data.name} on MindSnapLab! My result: ${data.score} ${data.label}. Check your cognitive architecture here:`;
  if (navigator.share) {
    navigator.share({
      title: 'MindSnapLab Results',
      text: text,
      url: window.location.origin,
    }).catch(() => shareOnX(text));
  } else {
    shareOnX(text);
  }
};
