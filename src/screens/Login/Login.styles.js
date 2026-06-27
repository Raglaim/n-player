import { StyleSheet } from 'react-native';

export const getStyles = (theme) => {
  return StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.backgroundDark,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
};