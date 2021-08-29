import { StyleSheet } from 'react-native';
import { colors, sizes } from '../resources';

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.theme.dark.lighter,
    elevation: 0,
  },
  headerTitleStyle: {
    color: colors.text.textWhite,
    fontFamily: 'Comfortaa-Bold',
  },
  dotsMenuIcon: {
    paddingRight: sizes.Margins.marginSmall,
  },
});
