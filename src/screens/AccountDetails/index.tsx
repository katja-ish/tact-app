import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, StyleSheet } from 'react-native';
import ControlShevron from '@app/components/_atoms/ControlShevron';
import SquareButton from '@app/components/_atoms/SquareButton';
import Avatar from '@app/components/_atoms/Avatar';
import ShareLink from '@app/components/_molecules/ShareLink';
import { ChevronRight } from '@app/assets/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
// import { FaceIcon } from '@modulz/radix-icons';
// import { GearIcon } from '@radix-ui/react-icons';

export default function AccountDetails() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SquareButton
          icon="⚙️"
          // icon={ <GearIcon /> }
          onPress={() => navigation.navigate('Settings')}
          style={{ justifyContent: 'flex-end' }}
        />

        <View style={styles.flex}>
          <View style={styles.avatar}></View>
          <Text style={styles.username}>Антон Алмосов</Text>
        </View>

        <ShareLink />

        <View style={styles.controls}>
          <ControlShevron
            text={'Уведомления'}
            rightAsset={<ChevronRight />}
            onPress={() => navigation.navigate('Notifications')}
          />
          <ControlShevron
            text={'Мой словарь'}
            rightAsset={<ChevronRight />}
            onPress={() => navigation.navigate('Dictionary')}
          />
          <ControlShevron text={'Как работает приложение'} rightAsset={<ChevronRight />} />
          <ControlShevron text={'Выйти'} rightAsset={''} />
        </View>
      </View>
    </SafeAreaView>
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
  username: {
    fontSize: 24,
    lineHeight: 22,
    fontWeight: '600',
    color: Colors.SOFT_BLACK,
    marginBottom: 20,
    fontFamily: 'TTCommons-Medium',
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: '#ddd',
    borderRadius: 25,
    marginBottom: 16,
    marginTop: 25,
  },
  controls: {
    flexDirection: 'column',
  },
});

// export default AccountDetails;
