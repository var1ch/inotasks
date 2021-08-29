import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../../../../resources';

export default StyleSheet.create({
  bottomBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.Margins.marginDefault,
    paddingVertical: sizes.Margins.marginMiddle,
    borderTopLeftRadius: sizes.Component.cardBorderRadius,
    borderTopRightRadius: sizes.Component.cardBorderRadius,
    backgroundColor: colors.theme.dark.lightest,
  },
  bottomBarButtonsText: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: sizes.FontSizes.button,
    color: colors.text.textWhite,
  },
});
