import React from 'react';
import {View, Text, Modal, StyleSheet, Button} from 'react-native';
import ListHeader from '../components/ListHeader';
import {colors, styles as forGlobalMargin} from '../themes/appTheme';
import {useState} from 'react';

const ModalScreen = () => {
  const [modalvisible, setModalVisible] = useState(false);

  return (
    <View style={forGlobalMargin.gloablMargin}>
      <ListHeader title="Modal Screen" />

      <Button title="Show modal" onPress={() => setModalVisible(true)} />

      <Modal animationType="fade" visible={modalvisible} transparent={true}>
        {/* Background black */}
        <View style={styles.centeredView}>
          {/* Modal content */}
          <View style={styles.modalView}>
            <ListHeader title="Modal" color="#000000" />
            <Text style={{fontWeight: 'bold', marginBottom: 16}}>
              Body modal
            </Text>
            <Button title="Hide modal" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: colors.orange,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 8,
  },
});

export default ModalScreen;
