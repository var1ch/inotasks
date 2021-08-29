import React, { useState } from 'react';
import { View, TextInput, Pressable, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import store from '../../../../../state/store/store';
import { addTaskAction } from '../../../../../state';
import { Icon } from '../../../../components';

interface Props {
  onDispatchTaskPress: () => void;
}

const Input = ({ onDispatchTaskPress }: Props) => {
  const selectedListId = store.getState().lists.selectedListId;
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={'Input task title'}
        autoFocus={true}
        value={text}
        onChangeText={(value: string) => setText(value)}
      />
      <View>
        <Pressable
          onPress={() => {
            if (text === '') return;
            setText('');
            Keyboard.dismiss();
            onDispatchTaskPress();
            dispatch(addTaskAction({ text, selectedListId }));
          }}>
          <View style={styles.button}>
            <Icon iconName="add-up" size={30} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Input;
