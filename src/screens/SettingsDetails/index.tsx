import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet, Button } from 'react-native';
import ButtonLight from '@app/components/ButtonLight';

function SettingsDetails({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.avatar}></View>
        <Text style={styles.username}>@username</Text>
        <Button
          title="Изменить аккаунт"
          color={Colors.LAZURE}
          onPress={() => navigation.navigate('Account')}
        />
      </View>
      <View style={styles.statistics}>
        <Text style={styles.statisticsText}>Статистика</Text>
      </View>
      <View style={styles.buttons}>
        <ButtonLight text={'Уведомления'} />
        <ButtonLight text={'Оформление'} />
        <ButtonLight text={'Выйти'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
    justifyContent: 'space-between',
  },
  flex: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    lineHeight: 22,
    color: Colors.LAZURE,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: Colors.SOFT_BLACK,
    borderRadius: 24,
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
  },
  statistics: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_LAZURE,
    height: 100,
    borderRadius: 10,
  },
  statisticsText: {
    fontSize: 18,
    lineHeight: 100,
    textAlign: 'center',
    color: Colors.LAZURE,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 30,
  },
});

export default SettingsDetails;
