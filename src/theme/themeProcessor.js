import { oklch, formatHex, formatRgb } from 'culori';

// Our core string converter
function parseColor(val) {
  if (typeof val !== 'string' || !val.startsWith('oklch')) return val;
  
  try {
    if (val.includes('/')) {
      return formatRgb(oklch(val)); // Handles 'oklch(... / alpha)' -> rgba()
    }
    return formatHex(oklch(val)); // Handles solid colors -> #hex
  } catch (e) {
    console.warn(`Failed to parse OKLCH color: ${val}`, e);
    return val; // Fallback to raw string if parsing fails
  }
}

// The object mapper that crawls your theme fields automatically
export function processTheme(themeObject) {
  const processed = {};
  
  for (const [key, value] of Object.entries(themeObject)) {
    if (typeof value === 'object' && value !== null) {
      processed[key] = processTheme(value); // Handles nested objects if you expand themes later
    } else {
      processed[key] = parseColor(value);
    }
  }
  
  return processed;
}