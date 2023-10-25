/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {styles} from './style';
import Slider from '@react-native-community/slider';
import Modal from 'react-native-modal'; // react-native-modal bileşenini içe aktarın

function App(): JSX.Element {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [indeks, setIndeks] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleWeightChange = (value: any) => {
    setWeight(value);
  };
  const handleHeightChange = (value: any) => {
    setHeight(value);
  };

  const calcIndeks = () => {
    const indeks = weight / Math.pow(height / 100, 2);

    setIndeks(indeks);
    toggleModal(); // Modal'ı aç
  };
  return (
    <SafeAreaView>
      <View style={styles.title_c}>
        <Text style={styles.title_f}>Vücut Kitle İndeksi</Text>
      </View>
      <Text style={styles.label}>Kilo</Text>

      <View style={styles.slider_c}>
        <Slider
          style={styles.slider_w}
          // value={100}
          maximumValue={120}
          minimumValue={0}
          step={0.1}
          onValueChange={(value: number) => setWeight(value)}
        />
        <Text>{weight.toFixed(2)}</Text>
      </View>
      <Text style={styles.label}>Boy</Text>
      <View style={styles.slider_c}>
        <Slider
          style={styles.slider_w}
          // value={100}
          maximumValue={240}
          minimumValue={0}
          step={0.1}
          onValueChange={(value: number) => setHeight(value)}
        />
        <Text>{height.toFixed(1)}</Text>
      </View>

      <View style={styles.title_c}>
        <Button
          onPress={calcIndeks}
          title="Hesapla"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <Modal
        style={{
          justifyContent: 'flex-end', // Alt kısmı kaplamak için alttan başlaması
          margin: 0, // Modalın ekranın tamamını kaplamasını sağlar
        }}
        onBackdropPress={toggleModal}
        isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Vücut Kitle İndeksi</Text>
          <Text style={styles.modalText}>
            İndeks Sonucu: {indeks.toFixed(1)}
          </Text>
          <Button title="Kapat" onPress={toggleModal} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default App;
