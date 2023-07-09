import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";

const SlotBooking = ({ naviagtion }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Select Time</Text>
      </View>

      <View style={styles.section}>
        <Calendar
          style={{
            borderColor: "gray",
            width: "100%",
          }}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "green",
            },
          }}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.timeSlots}>
          {Array.from({ length: 9 }, (_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeSlot,
                selectedTimeSlot === index && styles.selectedTimeSlot,
                selectedTimeSlot === null && styles.defaultTimeSlot,
              ]}
              onPress={() => handleTimeSlotSelect(index)}
            >
              <Text style={styles.timeSlotText}>
                {9 + index < 12
                  ? `${9 + index}:00 am`
                  : `${9 + index - 11}:00 pm`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
        <Text style={styles.buttonArrow}>➡</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  calendarButton: {
    padding: 5,
    backgroundColor: "green",
    borderRadius: 5,
  },
  calendarButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  calendarDates: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  calendarDate: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  selectedDate: {
    backgroundColor: "green",
  },
  calendarDateText: {
    fontSize: 16,
    color: "#000",
  },
  selectedDateText: {
    color: "#fff",
  },
  timeSlots: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  timeSlot: {
    padding: 10,
    width: "33%",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  selectedTimeSlot: {
    backgroundColor: "green",
  },
  defaultTimeSlot: {
    backgroundColor: "#d1f1ce",
  },
  timeSlotText: {
    fontSize: 16,
    color: "#000",
  },
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    marginRight: 5,
  },
  buttonArrow: {
    fontSize: 16,
    color: "#fff",
  },
});

export default SlotBooking;
