import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { addListAction } from '../../../state';
import styles from './styles';

const CreateListScreen = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const [listTitle, setListTitle] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Input list title'}
          autoFocus={true}
          value={listTitle}
          onChangeText={(value) => setListTitle(value)}
        />
      </View>
      <Pressable
        style={styles.saveButton}
        onPress={() => {
          if (listTitle === '') return;
          dispatch(addListAction(listTitle));
          setListTitle('');
          navigator.goBack();
        }}>
        <Text style={styles.saveButtonTitle}>CREATE</Text>
      </Pressable>
    </View>
  );
};

export default CreateListScreen;
