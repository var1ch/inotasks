import React from 'react';
import { View, Pressable } from 'react-native';
import styles from './styles';
import { Icon } from '../../../../../view/components';

interface Props {
  onMenuPress: () => void;
  onAddPress: (value: boolean) => void;
}

const BottomBar = (props: Props) => {
  return (
    <View style={styles.bottomBar}>
      <Pressable onPress={() => props.onMenuPress()}>
        <Icon iconName="menu-sheet" size={30} />
      </Pressable>
      <Pressable
        onPress={() => {
          props.onAddPress(true);
        }}>
        <Icon iconName="plus" size={30} />
      </Pressable>
    </View>
  );
};
export default BottomBar;
