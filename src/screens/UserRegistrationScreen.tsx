
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { UserRegistrationRequest, UserRegistrationResponse } from './api';

const UserRegistrationScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async () => {
    try {
      const request: UserRegistrationRequest = {
        username,
        password,
        email,
        role,
      };

      // Make API call to register user
      const response: UserRegistrationResponse = await registerUser(request);

      if (response.success) {
        Alert.alert('Success', 'User registered successfully');
      } else {
        Alert.alert('Error', response.errorMessage);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while registering user');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default UserRegistrationScreen;