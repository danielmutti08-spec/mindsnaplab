
// Funzione di approssimazione CDF (error rate <0.00001%)
export function normalCDF(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp(-z * z / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}

// IQ a percentile
export function iqToPercentile(iq: number): number {
  const z = (iq - 100) / 15;
  return Math.round(normalCDF(z) * 100);
}

// Percentile a IQ
export function percentileToIQ(percentile: number): number {
  // Inverse CDF (approssimazione)
  const p = percentile / 100;
  if (p <= 0) return 55;
  if (p >= 1) return 145;
  
  // Approssimazione Beasley-Springer-Moro
  const a1 = -39.6968302866538, a2 = 220.946098424521, a3 = -275.928510446969;
  const a4 = 138.357751867269,  a5 = -30.6647980661472, a6 = 2.50662827745924;
  const b1 = -54.4760987982241, b2 = 161.585836858041, b3 = -155.698979859887;
  const b4 = 66.8013118877197,  b5 = -13.2806815528857;
  const c1 = -0.00778489400243029, c2 = -0.322396458041136, c3 = -2.40075827716184;
  const c4 = -2.54973253934373,    c5 = 4.37466414146497,   c6 = 2.93816398269878;
  const d1 = 0.00778469570904146, d2 = 0.32246712907004,  d3 = 2.445134137143;
  const d4 = 3.75440866190742;

  const pLow  = 0.02425;
  const pHigh = 1 - pLow;
  
  let q, r, z;
  if (p < pLow) {
    q = Math.sqrt(-2 * Math.log(p));
    z = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
        ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
  } else if (p <= pHigh) {
    q = p - 0.5;
    r = q * q;
    z = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q /
        (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
  } else {
    q = Math.sqrt(-2 * Math.log(1 - p));
    z = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
         ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
  }
  
  return Math.round(100 + z * 15);
}

export const IQ_CONVERSION_TABLE: Record<number, { iq: number; percentile: number }> = {
  0:  { iq: 55,  percentile: 0.1  },
  1:  { iq: 58,  percentile: 0.3  },
  2:  { iq: 62,  percentile: 0.6  },
  3:  { iq: 66,  percentile: 1.2  },
  4:  { iq: 70,  percentile: 2.3  },
  5:  { iq: 74,  percentile: 4.2  },
  6:  { iq: 78,  percentile: 7.1  },
  7:  { iq: 82,  percentile: 11.5 },
  8:  { iq: 86,  percentile: 17.4 },
  9:  { iq: 90,  percentile: 25.2 },
  10: { iq: 93,  percentile: 32.1 },
  11: { iq: 96,  percentile: 39.4 },
  12: { iq: 100, percentile: 50.0 }, // MEDIA
  13: { iq: 104, percentile: 60.6 },
  14: { iq: 108, percentile: 70.3 },
  15: { iq: 112, percentile: 78.8 },
  16: { iq: 116, percentile: 85.7 },
  17: { iq: 120, percentile: 90.9 },
  18: { iq: 124, percentile: 94.5 },
  19: { iq: 128, percentile: 96.9 },
  20: { iq: 132, percentile: 98.3 },
  21: { iq: 136, percentile: 99.1 },
  22: { iq: 140, percentile: 99.6 },
  23: { iq: 144, percentile: 99.8 },
  24: { iq: 148, percentile: 99.9 },
  25: { iq: 155, percentile: 99.99 },
};

export function calculateIQFromScore(correctAnswers: number): { iq: number; percentile: number; rarity: string } {
  const result = IQ_CONVERSION_TABLE[correctAnswers] ?? IQ_CONVERSION_TABLE[15];
  
  // Calcola rarity (1 in X persone)
  const rarity = `1 in ${Math.round(100 / (100 - result.percentile))}`;
  
  return { ...result, rarity };
}
