import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../../resources';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.theme.dark.primary,
    flex: 1,
  },
  selectedListTitle: {
    padding: sizes.Margins.marginDefault,
    fontFamily: sizes.FontWeights.bold,
    fontSize: sizes.FontSizes.header6,
    color: colors.text.textWhite,
    textTransform: 'uppercase',
  },
});
