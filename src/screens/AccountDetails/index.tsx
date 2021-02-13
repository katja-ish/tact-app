import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import ControlShevron from '@app/components/_atoms/ControlShevron';
import SquareButton from '@app/components/_atoms/SquareButton';
import Avatar from '@app/components/_atoms/Avatar';
import ShareLink from '@app/components/_molecules/ShareLink';
// тема с radix-icons не работает
// import { FaceIcon } from '@modulz/radix-icons';

function AccountDetails({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* <FaceIcon /> */}

      <SquareButton
        icon="⚙️"
        onPress={() => navigation.navigate('Settings')}
        style={styles.settingsBtn}
      />

      <View style={styles.flex}>
        <View style={styles.avatar}>
          <Avatar size={80} />
        </View>
        <Text style={styles.username}>Имя Фамилия</Text>
      </View>

      <ShareLink />

      <View style={styles.controls}>
        <ControlShevron
          text={'Уведомления'}
          height={50}
          onPress={() => navigation.navigate('Notifications')}
        />
        <ControlShevron
          text={'Мой словарь'}
          height={50}
          onPress={() => navigation.navigate('Dictionary')}
        />
        <ControlShevron text={'Как работает приложение'} height={50} />
        <ControlShevron text={'Выйти'} rightAsset={''} height={50} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    height: '100%',
  },
  flex: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  settingsBtn: {},
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
  controls: {
    flexDirection: 'column',
  },
});

export default AccountDetails;
