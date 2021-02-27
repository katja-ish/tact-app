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
import { ScreenNames } from '@app/types';
import { Screen } from 'react-native-screens';
// import { FaceIcon } from '@modulz/radix-icons';
// import { GearIcon } from '@radix-ui/react-icons';

export const AccountDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ position: 'relative' }}>
      <View style={styles.container}>
        <SquareButton
          icon="⚙️"
          // icon={ <GearIcon /> }
          onPress={() => navigation.navigate(ScreenNames.SETTINGS)}
          style={styles.nav}
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
            onPress={() => navigation.navigate(ScreenNames.NOTIFICATIONS)}
          />
          <ControlShevron
            text={'Мой словарь'}
            rightAsset={<ChevronRight />}
            onPress={() => navigation.navigate(ScreenNames.DICTIONARY)}
          />
          <ControlShevron text={'Как работает приложение'} rightAsset={<ChevronRight />} />
          <ControlShevron text={'Выйти'} rightAsset={''} />
        </View>
      </View>
    </SafeAreaView>
  );
};

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
  nav: {
    position: 'absolute',
  },
});

// export default AccountDetails;
