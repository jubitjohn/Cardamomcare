import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Button,
  Linking,
} from "react-native";
import styles from "./ModalStyles";

const ModalPopup = (
  {
    isVisible,
    onClose,
    title,
    content,
    hasButton,
    navigateHome,
    openUpgradePopup,
    hasLinkToSettings,
  },
  { navigation }
) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalFormContainer}>
        <View style={styles.modalFormModal}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              onClose();
              if (navigateHome) navigation.navigate("Home");
            }}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalContent}>{content}</Text>
          {hasButton && (
            <Button
              title="Upgrade"
              onPress={() => {
                onClose();
                openUpgradePopup();
              }}
            />
          )}
          {hasLinkToSettings && (
            <Button
              title="Go to Settings"
              onPress={() => {
                onClose();
                Linking.openSettings();
              }}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalPopup;
