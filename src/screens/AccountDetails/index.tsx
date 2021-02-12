import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet, Button } from 'react-native';
import ButtonLight from '@app/components/_atoms/ButtonLight';
import ButtonSquare from '@app/components/_atoms/ButtonSquare';
// import { FaceIcon } from '@modulz/radix-icons';
// import { SunIcon } from '@radix-ui/react-icons';

function AccountDetails({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* <FaceIcon /> */}
      {/* <div>
        <SunIcon />
      </div> */}

      <Button onPress={() => navigation.navigate('Settings')} title={'Настройки'} />
      {/* Навигация по rn кнопке */}

      <ButtonSquare icon="⚙️" onPress={() => navigation.navigate('Settings')} style={styles.nav} />
      {/* Навигация не работает на кастомных кнопках */}

      <View style={styles.flex}>
        <View style={styles.avatar}></View>
        <Text style={styles.username}>Имя Фамилия</Text>
      </View>
      <View style={styles.shareContainer}>
        <Text fontSize={'big'} style={styles.shareLink}>
          tact.app/semilunar
        </Text>
        <Text style={styles.shareText}>Поделитесь быстрой ссылкой с друзьями, чтобы общаться</Text>
      </View>
      <View style={styles.buttons}>
        <ButtonLight text={'Уведомления'} height={50} />
        <ButtonLight text={'Мой словарь'} height={50} />
        <ButtonLight text={'Как работает приложение'} height={50} />
        <ButtonLight text={'Выйти'} value={''} height={50} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    // paddingVertical: 30,
    // position: 'relative',
    height: '100%',
  },
  flex: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  nav: {
    // position: 'absolute',
    // alignSelf: 'flex-end',
    // top: 10,
    // right: 10,
  },
  username: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '600',
    color: Colors.SOFT_BLACK,
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: '#c4c4c4',
    borderRadius: 25,
    marginBottom: 16,
    marginTop: 25,
  },
  label: {
    marginBottom: 10,
  },
  shareContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    height: 110,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 42,
  },
  shareLink: {
    color: Colors.SOFT_BLACK,
    opacity: 0.6,
    marginBottom: 12,
  },
  shareText: {
    textAlign: 'center',
    color: Colors.SOFT_BLACK,
    opacity: 0.35,
  },
  buttons: {
    flexDirection: 'column',
  },
});

export default AccountDetails;
