import React from 'react';
import { Text } from '@app/theme';
import { View, SafeAreaView, StyleSheet, Button } from 'react-native';

function SettingsDetails({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text fontSize="large">SettingsDetails Screen</Text>
        <Text fontSize="medium">Всякие настройки</Text>
        <Text fontSize="medium">Еще настройки</Text>
        <Button title="Изменить аккаунт" onPress={() => navigation.navigate('Account')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default SettingsDetails;
