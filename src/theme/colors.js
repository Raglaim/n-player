// src/theme/colors.js

// 1. Pure Base Themes (When 'Adaptive Theme Coloring / Combine' is turned OFF)
export const baseThemes = {
  dark: {
    backgroundDark: 'oklch(15% 0.02 0)',
    background: 'oklch(20% 0.02 0)',
    backgroundLight: 'oklch(25% 0.02 0)',
    text: 'oklch(90% 0.02 0)',
    textMuted: 'oklch(70% 0.02 0)',
    border: 'oklch(30% 0.02 0)',
    borderMuted: 'oklch(22% 0.02 0)',
    highlight: 'rgba(255, 255, 255, 0.15)',
    glassBg: 'rgba(35, 34, 41, 0.65)',
  },
  light: {
    backgroundDark: 'oklch(90% 0 0)',
    background: 'oklch(85% 0 0)',
    backgroundLight: 'oklch(80% 0 0)',
    text: 'oklch(5% 0 0)',
    textMuted: 'oklch(25% 0 0)',
    border: 'oklch(65% 0 0)',
    borderMuted: 'oklch(80% 0 0)',
    highlight: 'rgba(5, 5, 5, 0.15)',
    glassBg: 'rgba(217, 217, 217, 0.35)',
  }
};

export const accents = {
  red: {
    primary: 'oklch(60% 0.18 25)',
    secondary: 'oklch(40% 0.1 25)',
    combineDark: {
      backgroundDark: 'oklch(15% 0.01 0)',
      background: 'oklch(20% 0.01 0)',
      backgroundLight: 'oklch(25% 0.01 0)',
      text: 'oklch(90% 0.01 0)',
      textMuted: 'oklch(70% 0.01 0)',
      border: 'oklch(30% 0.01 0)',
      borderMuted: 'oklch(22% 0.01 0)',
      highlight: 'rgba(255, 255, 255, 0.15)',
      glassBg: 'rgba(36, 33, 33, 0.65)',
    },
    combineLight: {
      backgroundDark: 'oklch(90% 0.01 0)',
      background: 'oklch(85% 0.01 0)',
      backgroundLight: 'oklch(80% 0.01 0)',
      text: 'oklch(5% 0.01 0)',
      textMuted: 'oklch(25% 0.01 0)',
      border: 'oklch(65% 0.01 0)',
      borderMuted: 'oklch(80% 0.01 0)',
      highlight: 'rgba(5, 5, 5, 0.15)',
      glassBg: 'rgba(217, 217, 217, 0.35)',
    }
  },
  orange: {
    primary: 'oklch(70% 0.18 50)',
    secondary: 'oklch(55% 0.1 50)',
    combineDark: {
      backgroundDark: 'oklch(15% 0.01 50)',
      background: 'oklch(20% 0.01 50)',
      backgroundLight: 'oklch(25% 0.01 50)',
      text: 'oklch(90% 0.01 50)',
      textMuted: 'oklch(70% 0.01 50)',
      border: 'oklch(30% 0.01 50)',
      borderMuted: 'oklch(22% 0.01 50)',
      highlight: 'rgba(255, 255, 255, 0.15)',
      glassBg: 'rgba(36, 34, 33, 0.65)',
    },
    combineLight: {
      backgroundDark: 'oklch(90% 0.01 50)',
      background: 'oklch(85% 0.01 50)',
      backgroundLight: 'oklch(80% 0.01 50)',
      text: 'oklch(5% 0.01 50)',
      textMuted: 'oklch(25% 0.01 50)',
      border: 'oklch(65% 0.01 50)',
      borderMuted: 'oklch(80% 0.01 50)',
      highlight: 'rgba(5, 5, 5, 0.15)',
      glassBg: 'rgba(217, 217, 217, 0.35)',
    }
  },
  yellow: {
    primary: 'oklch(85% 0.18 100)',
    secondary: 'oklch(75% 0.12 100)',
    combineDark: {
      backgroundDark: 'oklch(15% 0.01 100)',
      background: 'oklch(20% 0.01 100)',
      backgroundLight: 'oklch(25% 0.01 100)',
      text: 'oklch(90% 0.01 100)',
      textMuted: 'oklch(70% 0.01 100)',
      border: 'oklch(30% 0.01 100)',
      borderMuted: 'oklch(22% 0.01 100)',
      highlight: 'rgba(255, 255, 255, 0.15)',
      glassBg: 'rgba(35, 35, 33, 0.65)',
    },
    combineLight: {
      backgroundDark: 'oklch(90% 0.01 100)',
      background: 'oklch(85% 0.01 100)',
      backgroundLight: 'oklch(80% 0.01 100)',
      text: 'oklch(5% 0.01 100)',
      textMuted: 'oklch(25% 0.01 100)',
      border: 'oklch(65% 0.01 100)',
      borderMuted: 'oklch(80% 0.01 100)',
      highlight: 'rgba(5, 5, 5, 0.15)',
      glassBg: 'rgba(217, 217, 217, 0.35)',
    }
  },
  green: {
    primary: 'oklch(75% 0.18 150)',
    secondary: 'oklch(70% 0.12 150)',
    combineDark: {
      backgroundDark: 'oklch(15% 0.01 150)',
      background: 'oklch(20% 0.01 150)',
      backgroundLight: 'oklch(25% 0.01 150)',
      text: 'oklch(90% 0.01 150)',
      textMuted: 'oklch(70% 0.01 150)',
      border: 'oklch(30% 0.01 150)',
      borderMuted: 'oklch(22% 0.01 150)',
      highlight: 'rgba(255, 255, 255, 0.15)',
      glassBg: 'rgba(33, 36, 34, 0.65)',
    },
    combineLight: {
      backgroundDark: 'oklch(90% 0.01 150)',
      background: 'oklch(85% 0.01 150)',
      backgroundLight: 'oklch(80% 0.01 150)',
      text: 'oklch(5% 0.01 150)',
      textMuted: 'oklch(25% 0.01 150)',
      border: 'oklch(65% 0.01 150)',
      borderMuted: 'oklch(80% 0.01 150)',
      highlight: 'rgba(5, 5, 5, 0.15)',
      glassBg: 'rgba(217, 217, 217, 0.35)',
    }
  },
  blue: {
    primary: 'oklch(70% 0.15 240)',
    secondary: 'oklch(65% 0.1 240)',
    combineDark: {
      backgroundDark: 'oklch(15% 0.01 240)',
      background: 'oklch(20% 0.01 240)',
      backgroundLight: 'oklch(25% 0.01 240)',
      text: 'oklch(90% 0.01 240)',
      textMuted: 'oklch(70% 0.01 240)',
      border: 'oklch(30% 0.01 240)',
      borderMuted: 'oklch(22% 0.01 240)',
      highlight: 'rgba(255, 255, 255, 0.15)',
      glassBg: 'rgba(33, 34, 36, 0.65)',
    },
    combineLight: {
      backgroundDark: 'oklch(90% 0.01 240)',
      background: 'oklch(85% 0.01 240)',
      backgroundLight: 'oklch(80% 0.01 240)',
      text: 'oklch(5% 0.01 240)',
      textMuted: 'oklch(25% 0.01 240)',
      border: 'oklch(65% 0.01 240)',
      borderMuted: 'oklch(80% 0.01 240)',
      highlight: 'rgba(5, 5, 5, 0.15)',
      glassBg: 'rgba(217, 217, 217, 0.35)',
    }
  },
  purple: {
    primary: 'oklch(70% 0.18 285)',
    secondary: 'oklch(55% 0.08 285)',
    combineDark: {
      backgroundDark: 'oklch(15% 0.01 285)',
      background: 'oklch(20% 0.01 285)',
      backgroundLight: 'oklch(25% 0.01 285)',
      text: 'oklch(90% 0.01 285)',
      textMuted: 'oklch(70% 0.01 285)',
      border: 'oklch(30% 0.01 285)',
      borderMuted: 'oklch(22% 0.01 285)',
      highlight: 'rgba(255, 255, 255, 0.15)',
      glassBg: 'rgba(35, 34, 41, 0.65)',
    },
    combineLight: {
      backgroundDark: 'oklch(90% 0.01 285)',
      background: 'oklch(85% 0.01 285)',
      backgroundLight: 'oklch(80% 0.01 285)',
      text: 'oklch(5% 0.01 285)',
      textMuted: 'oklch(25% 0.01 285)',
      border: 'oklch(65% 0.01 285)',
      borderMuted: 'oklch(80% 0.01 285)',
      highlight: 'rgba(5, 5, 5, 0.15)',
      glassBg: 'rgba(217, 217, 217, 0.35)',
    }
  },
  pink: {
    primary: 'oklch(65% 0.18 330)',
    secondary: 'oklch(55% 0.12 330)',
    combineDark: {
      backgroundDark: 'oklch(15% 0.01 330)',
      background: 'oklch(20% 0.01 330)',
      backgroundLight: 'oklch(25% 0.01 330)',
      text: 'oklch(90% 0.01 330)',
      textMuted: 'oklch(70% 0.01 330)',
      border: 'oklch(30% 0.01 330)',
      borderMuted: 'oklch(22% 0.01 330)',
      highlight: 'rgba(255, 255, 255, 0.15)',
      glassBg: 'rgba(36, 33, 35, 0.65)',
    },
    combineLight: {
      backgroundDark: 'oklch(90% 0.01 330)',
      background: 'oklch(85% 0.01 330)',
      backgroundLight: 'oklch(80% 0.01 330)',
      text: 'oklch(5% 0.01 330)',
      textMuted: 'oklch(25% 0.01 330)',
      border: 'oklch(65% 0.01 330)',
      borderMuted: 'oklch(80% 0.01 330)',
      highlight: 'rgba(5, 5, 5, 0.15)',
      glassBg: 'rgba(217, 217, 217, 0.35)',
    }
  }
};

export const alerts = {
  danger: 'oklch(65% 0.18 25)',
  warning: 'oklch(75% 0.15 70)',
  success: 'oklch(65% 0.15 150)',
  info: 'oklch(65% 0.15 240)',
};