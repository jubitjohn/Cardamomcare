import React, { useState, useEffect } from 'react';
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
  const [formCompleted, setFormCompleted] = useState(false);

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

  useEffect(() => {
    if (nValue !== 0 && pValue !== 0 && kValue !== 0 && plotSize !== 0) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  }, [nValue, pValue, kValue, plotSize]);

  const handleCalculate = () => {
    const resultText = `N:${nValue}, P:${pValue}, K:${kValue}, Unit:${unit}, Plot Size:${plotSize}`;
    setResult(resultText);
  };

  // Add a useEffect hook to check form completion whenever the input values change
  

  // return (
  //   <ScrollView style={styles.container}>
  //     <View style={styles.section}>
  //       <Text style={styles.sectionTitle}>Nutrient Quantities</Text>
  //       <View style={styles.valueSelector}>
  //         <Text style={styles.valueLabel}>N:</Text>
  //         <TouchableOpacity
  //           style={styles.valueButton}
  //           onPress={() => handleNChange(nValue - 1)}
  //         >
  //           <Text style={styles.buttonText}>-</Text>
  //         </TouchableOpacity>
  //         <TextInput
  //           style={styles.valueInput}
  //           value={nValue.toString()}
  //           onChangeText={handleNChange}
  //           keyboardType="numeric"
  //         />
  //         <TouchableOpacity
  //           style={styles.valueButton}
  //           onPress={() => handleNChange(nValue + 1)}
  //         >
  //           <Text style={styles.buttonText}>+</Text>
  //         </TouchableOpacity>
  //       </View>
  //       <View style={styles.valueSelector}>
  //         <Text style={styles.valueLabel}>P:</Text>
  //         <TouchableOpacity
  //           style={styles.valueButton}
  //           onPress={() => handlePChange(pValue - 1)}
  //         >
  //           <Text style={styles.buttonText}>-</Text>
  //         </TouchableOpacity>
  //         <TextInput
  //           style={styles.valueInput}
  //           value={pValue.toString()}
  //           onChangeText={handlePChange}
  //           keyboardType="numeric"
  //         />
  //         <TouchableOpacity
  //           style={styles.valueButton}
  //           onPress={() => handlePChange(pValue + 1)}
  //         >
  //           <Text style={styles.buttonText}>+</Text>
  //         </TouchableOpacity>
  //       </View>
  //       <View style={styles.valueSelector}>
  //         <Text style={styles.valueLabel}>K:</Text>
  //         <TouchableOpacity
  //           style={styles.valueButton}
  //           onPress={() => handleKChange(kValue - 1)}
  //         >
  //           <Text style={styles.buttonText}>-</Text>
  //         </TouchableOpacity>
  //         <TextInput
  //           style={styles.valueInput}
  //           value={kValue.toString()}
  //           onChangeText={handleKChange}
  //           keyboardType="numeric"
  //         />
  //         <TouchableOpacity
  //           style={styles.valueButton}
  //           onPress={() => handleKChange(kValue + 1)}
  //         >
  //           <Text style={styles.buttonText}>+</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //     <View style={styles.section}>
  //       <Text style={styles.sectionTitle}>Unit</Text>
  //       <TouchableOpacity
  //         style={[
  //           styles.optionButton,
  //           unit === "Acre" && styles.selectedOptionButton,
  //         ]}
  //         onPress={() => handleUnitChange("Acre")}
  //       >
  //         <Text style={styles.buttonText}>Acre</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity
  //         style={[
  //           styles.optionButton,
  //           unit === "Hectare" && styles.selectedOptionButton,
  //         ]}
  //         onPress={() => handleUnitChange("Hectare")}
  //       >
  //         <Text style={styles.buttonText}>Hectare</Text>
  //       </TouchableOpacity>
  //     </View>
  //     <View style={styles.section}>
  //       <Text style={styles.sectionTitle}>Plot Size</Text>
  //       <View style={styles.valueSelector}>
  //         <TouchableOpacity
  //           style={styles.valueButton}
  //           onPress={() => handlePlotSizeChange(plotSize - 1)}
  //         >
  //           <Text style={styles.buttonText}>-</Text>
  //         </TouchableOpacity>
  //         <TextInput
  //           style={styles.valueInputplot}
  //           value={plotSize.toString()}
  //           onChangeText={handlePlotSizeChange}
  //           keyboardType="numeric"
  //         />
  //         <TouchableOpacity
  //           style={styles.valueButton}
  //           onPress={() => handlePlotSizeChange(plotSize + 1)}
  //         >
  //           <Text style={styles.buttonText}>+</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //     <TouchableOpacity
  //       style={styles.calculateButton}
  //       onPress={handleCalculate}
  //     >
  //       <Text style={styles.buttonText}>Calculate</Text>
  //     </TouchableOpacity>
  //     <View>
  //       <Text>{result}</Text>
  //     </View>
      
  //   </ScrollView>
    
  // );


  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nutrient Quantities</Text>
        <View style={styles.mainsubbox}>
        <View style={styles.valueSelector}>
          <Text style={styles.valueLabel}>N</Text>
          <View style={styles.nutrientval}>
          <TouchableOpacity
            style={styles.valueButtonnpk}
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
            style={styles.valueButtonnpk}
            onPress={() => handleNChange(nValue + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.valueSelector}>
          <Text style={styles.valueLabel}>P</Text>
          <View style={styles.nutrientval}>
          <TouchableOpacity
            style={styles.valueButtonnpk}
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
            style={styles.valueButtonnpk}
            onPress={() => handlePChange(pValue + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.valueSelector}>
          <Text style={styles.valueLabel}>K</Text>
          <View style={styles.nutrientval}>
          <TouchableOpacity
            style={styles.valueButtonnpk}
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
            style={styles.valueButtonnpk}
            onPress={() => handleKChange(kValue + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Unit</Text>
        <View style={styles.sectionunit}>
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
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plot Size</Text>
        <View style={styles.valueSelectorplot}>
          <TouchableOpacity
            style={styles.valueButton}
            onPress={() => handlePlotSizeChange(plotSize - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.valueInputplot}
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
      {/* <TouchableOpacity
        style={styles.calculateButton}
        onPress={handleCalculate}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <View>
        <Text>{result}</Text>
      </View> */}
      <TouchableOpacity
        onPress={handleCalculate}
        disabled={!formCompleted}
        style={[styles.calculateButton, !formCompleted && styles.disabledButton]}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      
      
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  disabledButton:{
    opacity:0.5
  },
  container: {
    flex: 1,
    padding: 25,
  },
  section: {
    marginBottom: 20,
  },
  sectionunit:{
    marginBottom: 20,
    flexDirection:"row"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingBottom: 10,
  },
  sectionTitleplot:{

  },
  valueSelector: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 0,
    paddingRight:10, 
  },
  valueSelectornpk: {
    flexDirection: "column",
    alignItems: "center",
    height:40,
    marginBottom: 0,
    paddingRight:15, 
    backgroundColor:"purple",
  },
  nutrientval:{
    flexDirection: "row",
    alignItems: "center",
    borderRadius:20,
    backgroundColor:"#E8E8E8",
    borderWidth:2,
    borderColor:"white",
    marginTop:6,
  },
  valueSelectorplot: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    padding:20, 
  },
  valueLabel: {
    fontSize: 16,
    marginRight: 5,
    fontWeight:"400",
  },
  mainsubbox:{
    flex: 1,
    height: 110,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    paddingHorizontal:15,
    padding:15,
    flexDirection: "row",
  },
  valueInputplot:{
    flex: 1,
    height: 70,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight:10,
    marginLeft:10,
    textAlign:"center",
    fontSize:25,
    fontWeight:"semibold"

  },
  valueButton: {
    width: 40,
    height: 40,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  valueButtonnpk:{
    width: 25,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  valueInput: {
    // flex: 1,
    height: 40,
    width:30,
    borderRadius: 10,
    paddingHorizontal: 10,
    margin:0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight:500,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    alignItems:"center",
    marginBottom: 5,
    width:130,
    marginRight:6,
    padding: 5,
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:10,
    marginBottom: 5,
    marginRight:45
  },
  selectedOptionButton: {
    backgroundColor: "#ccc",
    padding: 5,
    width:130,
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:10,
    marginBottom: 5,
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
