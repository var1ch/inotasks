import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../../resources';

export default StyleSheet.create({
  container: {
    padding: sizes.Margins.marginDefault,
    backgroundColor: colors.theme.dark.primary,
    flex: 1,
  },
  // ======= rewrite later ==============
  topElementBlock: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  listTitlePressable: {
    flex: 1,
  },
  listTitle: {
    color: colors.text.textWhite,
    fontFamily: 'Comfortaa-Regular',
    fontSize: sizes.FontSizes.input,
    textAlign: 'left',
  },
  // ====================================
  taskPriority: {
    color: 'red',
    fontFamily: 'Comfortaa-Bold',
    fontSize: sizes.FontSizes.title_1,
    paddingLeft: sizes.Margins.marginDefault,
  },
  titleChangeBlock: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleInput: {
    height: 50,
    flex: 1,
    padding: 0,
    paddingRight: sizes.Margins.marginDefault,
    color: colors.text.textWhite,
    fontFamily: 'Comfortaa-Regular',
    fontSize: sizes.FontSizes.title_1,
  },
  subtasksBlock: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtaskInput: {
    flex: 1,
    height: 50,
    paddingLeft: sizes.Margins.marginDefault,
    color: colors.text.textWhite,
    fontFamily: 'Comfortaa-Regular',
    fontSize: sizes.FontSizes.title_1,
  },
  addDateBlock: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  addDateLabel: {
    paddingLeft: sizes.Margins.marginDefault,
    color: colors.text.placeHolder,
    fontFamily: 'Comfortaa-Regular',
    fontSize: sizes.FontSizes.title_1,
  },
  repeatBlock: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  repeatLabel: {
    paddingLeft: sizes.Margins.marginDefault,
    color: colors.text.placeHolder,
    fontFamily: 'Comfortaa-Regular',
    fontSize: sizes.FontSizes.title_1,
  },
  descriptionBlock: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  descriptionInput: {
    height: 50,
    flex: 1,
    paddingLeft: sizes.Margins.marginDefault,
    color: colors.text.textWhite,
    fontFamily: 'Comfortaa-Regular',
    fontSize: sizes.FontSizes.title_1,
  },
  popupMenu: {},
});
