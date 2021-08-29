import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../../../../resources';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.Margins.marginDefault,
    borderTopLeftRadius: sizes.Component.cardBorderRadius,
    borderTopRightRadius: sizes.Component.cardBorderRadius,
    backgroundColor: colors.theme.dark.lighter,
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
  button: {
    paddingLeft: sizes.Margins.marginDefault,
  },
});
