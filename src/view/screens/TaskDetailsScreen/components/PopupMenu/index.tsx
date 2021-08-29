import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import { changeTaskPriorityAction, Priority } from '../../../../../state';

interface Props {
  taskId: string;
  priority: Priority;
}

const PopupMenu = ({ taskId, priority }: Props) => {
  const dispatch = useDispatch();
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
        text={priority === '' ? 'Set Priority' : priority}
      />
      <MenuOptions customStyles={{ optionText: { fontSize: 18 } }}>
        <MenuOption
          onSelect={() => {
            dispatch(
              changeTaskPriorityAction({
                taskId,
                priority: '!!!',
              }),
            );
          }}
          text="!!!"
        />
        <MenuOption
          onSelect={() => {
            dispatch(
              changeTaskPriorityAction({
                taskId,
                priority: '!!',
              }),
            );
          }}
          text="!!"
        />
        <MenuOption
          onSelect={() => {
            dispatch(
              changeTaskPriorityAction({
                taskId,
                priority: '!',
              }),
            );
          }}
          text="!"
        />
        <MenuOption
          onSelect={() => {
            dispatch(
              changeTaskPriorityAction({
                taskId,
                priority: '',
              }),
            );
          }}
          text="No Priority"
        />
      </MenuOptions>
    </Menu>
  );
};

export default PopupMenu;
