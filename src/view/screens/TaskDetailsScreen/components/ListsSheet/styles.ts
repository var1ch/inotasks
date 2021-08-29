import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../../../../resources';

export default StyleSheet.create({
  header: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.theme.dark.lighter,
    paddingVertical: 14,
  },
  indicator: {
    position: 'absolute',
    width: 10,
    height: 4,
    backgroundColor: '#999',
  },
  leftIndicator: {
    borderTopStartRadius: 2,
    borderBottomStartRadius: 2,
  },
  rightIndicator: {
    borderTopEndRadius: 2,
    borderBottomEndRadius: 2,
  },
  bottomSheetContentContainer: {
    flex: 1,
    backgroundColor: colors.theme.dark.lighter,
    flexDirection: 'column',
    padding: sizes.Margins.marginDefault,
  },
  title: {
    color: colors.text.textWhite,
    fontSize: sizes.FontSizes.title_1,
    fontFamily: 'Comfortaa-Bold',
  },
  listsTitles: {
    color: colors.text.textWhite,
    fontSize: sizes.FontSizes.body,
    textTransform: 'uppercase',
    fontFamily: 'Comfortaa-Regular',
  },
  createListButtonContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
});
