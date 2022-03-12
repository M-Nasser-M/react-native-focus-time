import React, { useState, useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Focus from "./src/features/Focus/Focus";
import Timer from "./src/features/Timer/Timer";
import { styles } from "./AppStyles";
import FocusHistory from "./src/features/Focus/FocusHistory";

export default function App() {
  const [focusSubject, setFocusSubject] = useState("");
  const [history, setHistory] = useState([]);
  const clearSubject = () => {
    setFocusSubject("");
  };
  const clearHistory = () => {
    setHistory([]);
  };

  useEffect(() => {
    const saveHistory = async () => {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(history));
    };
    saveHistory();
  }, [history]);
  useEffect(() => {
    const loadHistory = async () => {
      const loadedHistory = await AsyncStorage.getItem("focusHistory");
      if (loadHistory && loadedHistory.length > 0)
        setHistory(JSON.parse(loadedHistory));
    };
    loadHistory();
  }, []);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer clearSubject={clearSubject} focusSubject={focusSubject}></Timer>
      ) : (
        <>
          <Focus
            history={history}
            setHistory={setHistory}
            addSubject={setFocusSubject}
          />
          <FocusHistory clearHistory={clearHistory} history={history} />
        </>
      )}
    </View>
  );
}
