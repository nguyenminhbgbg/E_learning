import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Support = () => {
    return (
      <View style={styles.container}>
        <Text>Support for you: 012345678</Text>
        <Button
          title="Liên hệ với chúng tôi để gửi yêu cầu, thắc mắc.!!!"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
