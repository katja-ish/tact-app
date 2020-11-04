import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet, Button } from 'react-native';

function SettingsDetails({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text fontSize="medium">Всякие настройки</Text>
        <Text fontSize="medium">@username</Text>
        <View style={styles.avatar}></View>
        <Button title="Изменить аккаунт" onPress={() => navigation.navigate('Account')} />
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
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: Colors.LEMON_PIE,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default SettingsDetails;
