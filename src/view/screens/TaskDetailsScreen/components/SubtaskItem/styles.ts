import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../../../../resources';

export default StyleSheet.create({
  subtaskItem: {
    paddingLeft: sizes.Margins.marginDefault * 2,
    paddingBottom: sizes.Margins.marginDefault,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWrapper: {
    flex: 1,
  },
  subtaskItemText: {
    paddingLeft: sizes.Margins.marginSmall,
    fontSize: sizes.FontSizes.title,
    color: colors.text.textWhite,
    fontFamily: sizes.FontWeights.regular,
    textAlign: 'left',
  },
  completedSubtaskItemText: {
    paddingLeft: sizes.Margins.marginSmall,
    fontSize: sizes.FontSizes.title,
    color: '#96A7AF',
    fontFamily: sizes.FontWeights.regular,
    textAlign: 'left',
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
});
