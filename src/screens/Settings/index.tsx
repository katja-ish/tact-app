import React, { useState } from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet, TextInput, Alert, Button } from 'react-native';
import ControlShevron from '@app/components/_atoms/ControlShevron';
import DatePicker from 'react-native-date-picker';
import Avatar from '@app/components/_atoms/Avatar';
import { ChevronRight } from '@app/assets/icons';

const Settings = () => {
  const [value, onChangeText] = React.useState('what am i doing here i dont belong here');
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <ControlShevron text={'Аватар'} rightAsset={<Avatar />} />
        <ControlShevron text={'Имя'} rightAsset={'Катя Никитина'} />
        <ControlShevron text={'Никнейм'} rightAsset={'semilunar'} />
        <ControlShevron text={'Дата рождения'} rightAsset={'28.04.1999'} />
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="date"
          locale={'ru'}
          minimumDate={new Date('1900-01-01')}
          maximumDate={new Date()}
        />
        {/* 
        <View>{date}</View> */}

        <ControlShevron text={'Друзья'} rightAsset={<ChevronRight />} />

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          maxLength={33}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  flex: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    marginBottom: 10,
    color: Colors.SOFT_BLACK,
  },
  textInput: {
    height: 50,
    fontSize: 16,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#c4c4c4',
    borderRadius: 18,
  },
});

export default Settings;
