import * as React from 'react';
import {
  Check,
  CirclePlus,
  Plus,
  DarkMode,
  Delete,
  UnCheck,
  Submit,
  Close,
  TaskCommentary,
  DueDate,
  Subitem,
  Description,
  Repeat,
  Search,
  Dots,
  Sort,
  Tag,
  AddUp,
  AddDown,
  MenuSheet,
  SvgProps,
} from '../../resources';

type IconName =
  | 'check'
  | 'circle-plus'
  | 'plus'
  | 'dark-mode'
  | 'delete'
  | 'uncheck'
  | 'submit'
  | 'close'
  | 'task-commentary'
  | 'due-date'
  | 'subitem'
  | 'description'
  | 'repeat'
  | 'search'
  | 'dots'
  | 'sort'
  | 'tag'
  | 'add-up'
  | 'add-down'
  | 'menu-sheet';

interface Props extends SvgProps {
  iconName: IconName;
}

const Icon = (props: Props) => {
  switch (props.iconName) {
    case 'check':
      return <Check color={props.color} size={props.size} />;
    case 'circle-plus':
      return <CirclePlus color={props.color} size={props.size} />;
    case 'plus':
      return <Plus color={props.color} size={props.size} />;
    case 'dark-mode':
      return <DarkMode color={props.color} size={props.size} />;
    case 'delete':
      return <Delete color={props.color} size={props.size} />;
    case 'uncheck':
      return <UnCheck color={props.color} size={props.size} />;
    case 'submit':
      return <Submit color={props.color} size={props.size} />;
    case 'close':
      return <Close color={props.color} size={props.size} />;
    case 'task-commentary':
      return <TaskCommentary color={props.color} size={props.size} />;
    case 'subitem':
      return <Subitem color={props.color} size={props.size} />;
    case 'due-date':
      return <DueDate color={props.color} size={props.size} />;
    case 'description':
      return <Description color={props.color} size={props.size} />;
    case 'repeat':
      return <Repeat color={props.color} size={props.size} />;
    case 'search':
      return <Search color={props.color} size={props.size} />;
    case 'dots':
      return <Dots color={props.color} size={props.size} />;
    case 'sort':
      return <Sort color={props.color} size={props.size} />;
    case 'add-up':
      return <AddUp color={props.color} size={props.size} />;
    case 'add-down':
      return <AddDown color={props.color} size={props.size} />;
    case 'menu-sheet':
      return <MenuSheet color={props.color} size={props.size} />;
    case 'tag':
      return <Tag color={props.color} size={props.size} />;
  }
};

export default Icon;
