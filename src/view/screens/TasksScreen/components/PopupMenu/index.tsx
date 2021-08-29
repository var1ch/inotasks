import React from 'react';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';

const PopupMenu = (props: any) => {
  return (
    <Menu>
      <MenuTrigger
        customStyles={{
          triggerText: {
            paddingLeft: 16,
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
          },
        }}
        text={'blah'}
      />
      <MenuOptions customStyles={{ optionText: { fontSize: 18 } }}>
        <MenuOption onSelect={() => {}} text={'Sort'} />
        <MenuOption onSelect={() => {}} text={'Search'} />
      </MenuOptions>
    </Menu>
  );
};

export default PopupMenu;
