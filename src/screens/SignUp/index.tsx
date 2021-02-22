import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text } from '@app/theme';
import Input from '@app/components/_atoms/Input';

export default function SignUpScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text fontSize={'h1'}>Sign up</Text>
      <Text fontSize={'small'}>Email</Text>
      <Input
        value={email}
        onChangeText={(userEmail: React.SetStateAction<string>) => setEmail(userEmail)}
      />
      <Text fontSize={'small'}>Пароль</Text>
      <Input
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword: React.SetStateAction<string>) => setPassword(userPassword)}
      />
      <Button title="Зарегистироваться" onPress={() => {}} />
      <Button title="Уже есть аккаунт? Войти" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
