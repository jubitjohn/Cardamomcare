import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  modalFormContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginTop: -75,
  },
  modalFormModal: {
    backgroundColor: "#fefefe",
    padding: 25,
    borderRadius: 10,
    alignItems: "center",
    maxWidth: "90%",
    width: 500,
    alignSelf: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 15,
  },
  closeButtonText: {
    color: "#aaa",
    fontSize: 28,
    fontWeight: "bold",
    padding: 5,
  },
});
