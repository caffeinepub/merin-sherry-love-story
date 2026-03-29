// Combined 10,000 reasons — imports from all four data files
import { reasons1 } from "./reasons1";
import { reasons2 } from "./reasons2";
import { reasons3 } from "./reasons3";
import { reasons4 } from "./reasons4";

export const allReasons: string[] = [
  ...reasons1,
  ...reasons2,
  ...reasons3,
  ...reasons4,
];

export const totalReasons = allReasons.length;

// Re-export the legacy export so any existing imports still work
export const reasons = allReasons;
