import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const FertilizerCal= () => {
  const [nValue, setNValue] = useState(0);
  const [pValue, setPValue] = useState(0);
  const [kValue, setKValue] = useState(0);
  const [unit, setUnit] = useState("Acre");
  const [plotSize, setPlotSize] = useState(0);
  const [result, setResult] = useState('');

  const handleNChange = (value) => {
    setNValue(value);
  };

  const handlePChange = (value) => {
    setPValue(value);
  };

  const handleKChange = (value) => {
    setKValue(value);
  };

  const handleUnitChange = (value) => {
    setUnit(value);
  };

  const handlePlotSizeChange = (value) => {
    setPlotSize(value);
  };

  const handleCalculate = () => {
    const resultText = `N:${nValue}, P:${pValue}, K:${kValue}, Unit:${unit}, Plot Size:${plotSize}`;
    setResult(resultText);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nutrient Quantities</Text>
        <View style={styles.valueSelector}>
          <Text style={styles.valueLabel}>N:</Text>
          <TouchableOpacity
            style={styles.valueButton}
            onPress={() => handleNChange(nValue - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.valueInput}
            value={nValue.toString()}
            onChangeText={handleNChange}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.valueButton}
            onPress={() => handleNChange(nValue + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.valueSelector}>
          <Text style={styles.valueLabel}>P:</Text>
          <TouchableOpacity
            style={styles.valueButton}
            onPress={() => handlePChange(pValue - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.valueInput}
            value={pValue.toString()}
            onChangeText={handlePChange}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.valueButton}
            onPress={() => handlePChange(pValue + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.valueSelector}>
          <Text style={styles.valueLabel}>K:</Text>
          <TouchableOpacity
            style={styles.valueButton}
            onPress={() => handleKChange(kValue - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.valueInput}
            value={kValue.toString()}
            onChangeText={handleKChange}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.valueButton}
            onPress={() => handleKChange(kValue + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Unit</Text>
        <TouchableOpacity
          style={[
            styles.optionButton,
            unit === "Acre" && styles.selectedOptionButton,
          ]}
          onPress={() => handleUnitChange("Acre")}
        >
          <Text style={styles.buttonText}>Acre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            unit === "Hectare" && styles.selectedOptionButton,
          ]}
          onPress={() => handleUnitChange("Hectare")}
        >
          <Text style={styles.buttonText}>Hectare</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plot Size</Text>
        <View style={styles.valueSelector}>
          <TouchableOpacity
            style={styles.valueButton}
            onPress={() => handlePlotSizeChange(plotSize - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.valueInput}
            value={plotSize.toString()}
            onChangeText={handlePlotSizeChange}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.valueButton}
            onPress={() => handlePlotSizeChange(plotSize + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.calculateButton}
        onPress={handleCalculate}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <View>
        <Text>{result}</Text>
      </View>
      
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  valueSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  valueLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  valueButton: {
    width: 40,
    height: 40,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 10,
  },
  valueInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  selectedOptionButton: {
    backgroundColor: "#ccc",
  },
  calculateButton: {
    backgroundColor: "#0066cc",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FertilizerCal
