import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../../resources';

export default StyleSheet.create({
  container: {
    padding: sizes.Margins.marginDefault,
    backgroundColor: colors.theme.dark.primary,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 50,
    flex: 1,
    paddingHorizontal: sizes.Margins.marginDefault,
    fontSize: sizes.FontSizes.input,
    color: colors.text.textWhite,
    fontFamily: sizes.FontWeights.regular,
    backgroundColor: colors.theme.dark.lightest,
    borderRadius: sizes.Component.regularCornerRadius,
  },
  saveButton: {
    flexDirection: 'row-reverse',
  },
  saveButtonTitle: {
    color: colors.text.textWhite,
    fontSize: sizes.FontSizes.title_1,
    fontFamily: sizes.FontWeights.bold,
  },
});
