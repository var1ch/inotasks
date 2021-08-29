import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../../../../resources';

export default StyleSheet.create({
  taskItem: {
    paddingRight: sizes.Margins.marginDefault,
    paddingLeft: sizes.Margins.marginDefault,
    paddingBottom: sizes.Margins.marginDefault,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWrapper: {
    flex: 1,
  },
  taskItemText: {
    paddingLeft: sizes.Margins.marginSmall,
    fontSize: sizes.FontSizes.title,
    color: colors.text.textWhite,
    fontFamily: sizes.FontWeights.regular,
    textAlign: 'left',
  },
  completedTaskItemText: {
    paddingLeft: sizes.Margins.marginSmall,
    fontSize: sizes.FontSizes.title,
    color: '#96A7AF',
    fontFamily: sizes.FontWeights.regular,
    textAlign: 'left',
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  importantButton: {
    paddingHorizontal: sizes.Margins.marginSmall,
  },
});
