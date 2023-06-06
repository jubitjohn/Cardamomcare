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
  const [showResult, setShowResult] = useState(false);

  const handleNChange = (value) => {
    // setNValue(value);
    if (value !== '') {
      setNValue(parseInt(value));
    } else {
      setNValue(0);
    }
  };

  const handlePChange = (value) => {
    // setPValue(value);
    if (value !== '') {
      setPValue(parseInt(value));
    } else {
      setPValue(0);
    }
  };

  const handleKChange = (value) => {
    // setKValue(value);
    if (value !== '') {
      setKValue(parseInt(value));
    } else {
      setKValue(0);
    }
  };

  const handleUnitChange = (value) => {
    setUnit(value);
  };

  const handlePlotSizeChange = (value) => {
    // setPlotSize(value);
    if (value !== '') {
      setPlotSize(parseInt(value));
    } else {
      setPlotSize(0);
    }
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
    setShowResult(true);
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
      <View style={styles.topsection}>
      <View style={styles.nutsection}>
        <Text style={styles.sectionTitle}>Nutrient Quantities</Text>
        <View style={styles.mainsubbox}>
        <View style={styles.valueSelector}>
          <Text style={styles.valueLabel}>N</Text>
          <View style={styles.inputout}>
          <TextInput
            style={styles.valueInputnpk}
            value={nValue.toString()}
            onChangeText={handleNChange}
            keyboardType="numeric"
          />
          </View>
        </View>
        <View style={styles.valueSelector}>
          <Text style={styles.valueLabel}>P</Text>
          <View style={styles.inputout}>
          <TextInput
            style={styles.valueInputnpk}
            value={pValue.toString()}
            onChangeText={handlePChange}
            keyboardType="numeric"
          />
          </View>
        </View>
        <View style={styles.valueSelector}>
          <Text style={styles.valueLabel}>K</Text>
          <View style={styles.inputout}>
          <TextInput
            style={styles.valueInputnpk}
            value={kValue.toString()}
            onChangeText={handleKChange}
            keyboardType="numeric"
          />
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
      <TouchableOpacity
        onPress={handleCalculate}
        disabled={!formCompleted}
        style={[styles.calculateButton, !formCompleted && styles.disabledButton]}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      </View>
      {showResult && (
        <View style={styles.resultsection}>
          <Text style={styles.cardAboveInfo}>Choose your preferred fertilizer combination:</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardHeading}>DAP/MOP/Urea</Text>
            <View style={styles.cardInfoRow}>
              <View style={styles.cardInfoColumn}>
                <Text style={styles.cardInfoLabel}>DAP</Text>
                <Text style={styles.cardInfoValue}>2296 kg</Text>
                <Text style={styles.cardsubInfoValue}>46 Bags</Text>
              </View>
              <View style={styles.cardInfoColumn}>
                <Text style={styles.cardInfoLabel}>MOP</Text>
                <Text style={styles.cardInfoValue}>1447 KG</Text>
                <Text style={styles.cardsubInfoValue}>29 bags</Text>
              </View>
              <View style={styles.cardInfoColumn}>
                <Text style={styles.cardInfoLabel}>Urea</Text>
                <Text style={styles.cardInfoValue}>224 kg</Text>
                <Text style={styles.cardsubInfoValue}>8 Bags</Text>
              </View>
            </View>
          </View>
        </View>
        </View>
      )}
      
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  disabledButton:{
    opacity:0.5
  },
  container: {
    backgroundColor:'#E8E8E8',
  },
  topsection:{
    backgroundColor:'white',
    height:570,
    width: '100%',
    padding:25,
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  // resultsection:{
  //   backgroundColor:"pink",
    
  // },
  section: {
    marginBottom: 20,
  },
  nutsection: {
    marginBottom: 20,
    height:160
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
  valueSelector: {
    flex:1,
    alignItems: "center",
    marginBottom: 0,
    paddingRight:0, 
  },
  
  // valueSelectornpk: {
  //   flexDirection: "column",
  //   alignItems: "center",
  //   height:40,
  //   marginBottom: 0,
  //   paddingRight:5, 
  //   backgroundColor:"purple",
  // },
  nutrientval:{
    borderRadius:20,
    // backgroundColor:"#E8E8E8",
    backgroundColor:"pink",
    borderWidth:2,
    borderColor:"white",
    marginTop:6,
    marginRight:10,
    width:80,
    alignItems: "center",
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
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    paddingHorizontal:15,
    padding:15,
    flexDirection: "row",
  },
  valueInput:{
    textAlign:"center",
    fontSize:25,
    fontWeight:"semibold",
    width:80,
    flexGrow:1
  },
  inputout:{
    borderRadius:25,
    // backgroundColor:"#E8E8E8",
    backgroundColor:"#E8E8E8",
    borderWidth:2,
    borderColor:"white",
    marginTop:6,
    marginRight:10,
    width:90,
  },
  valueInputnpk:{
    borderColor: "white",
    borderRadius:29,
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    marginRight:10,
    marginLeft:10,
    padding:10,
    textAlign:"center",
    fontSize:16,
    fontWeight:"semibold",
  },
  valueInputplot:{
    flex: 1,
    height: 70,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight:10,
    marginLeft:10,
    textAlign:"center",
    fontSize:25,
    fontWeight:"semibold",
  },
  cardContainer: {
    // Styles for the card container
    width: 320,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius:20,
    paddingBottom:40,
    marginBottom:50,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  card: {
    // Styles for the card
  },
  cardAboveInfo:{
    paddingTop:20,
    paddingLeft:18,
    fontSize: 18,
    fontWeight: "bold",
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 10,
    paddingLeft:5,
    color:'#151515'
  },
  cardInfoRow: {
    // Styles for the row containing the card information
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:5,
  },
  cardInfoColumn: {
    // Styles for each column in the row
    flex: 1,
  },
  cardInfoLabel:{
    color:'#474747',
    fontSize: 15,
    fontWeight: 500,
  },
  cardInfoValue:{
    fontSize: 20,
    color:"grey"
  },
  cardsubInfoValue:{
    color:"grey"
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
