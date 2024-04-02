import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ResultScreen from "./components/ResultScreen";
import { useState } from "react";
import CalcButton from "./components/CalcButton";

export default function App() {
  const [data, setData] = useState("");
  const [mother, setMother] = useState("");
  const [result, setResult] = useState("");
  const [res, setRes] = useState("");

  const DataHandle = (name) => {
    if (!data) setData(name);
    else {
      setData((data) => data + name);
    }
  };
  const OperationHandler = (name) => {
    if (
      data !== "" &&
      data[data.length - 2] !== "+" &&
      data[data.length - 2] !== "-" &&
      data[data.length - 2] !== "*" &&
      data[data.length - 2] !== "/" &&
      data[data.length - 2] !== "%"
    ) {
      setData((data) => data + " " + name + " ");
    }
  };
  const YourMother = () => {
    if (mother === "") {
      setMother(" امك صاحبتي");
    } else {
      setMother("");
    }
  };

  const ResultHandler = () => {
    if (
      data !== "" &&
      data[data.length - 2] !== "+" &&
      data[data.length - 2] !== "-" &&
      data[data.length - 2] !== "*" &&
      data[data.length - 2] !== "/" &&
      data[data.length - 2] !== "%"
    ) {
      setResult("Result: ");
      setRes(eval(data));
    } else {
      setResult("");
      setRes("");
    }
  };

  const ClearAllHandler = () => {
    setData("");
    setResult("");
    setRes("");
  };

  const ClearHandler = () => {
    if (data) {
      setData(data.slice(0, -1));
      if (data.length === 1) {
        setResult("");
        setRes("");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.text}>Tarek Calculator -_-</Text>
      </View>

      <View>
        <ResultScreen
          style={styles.screen}
          data={data}
          mother={mother}
          resultWord={result}
          result={res}
        />
      </View>

      <View>
        <View style={styles.buttonContainer}>
          <CalcButton
            name={"AC"}
            color={"orange"}
            onPress={() => ClearAllHandler()}
          />
          <CalcButton
            name={"x"}
            color={"orange"}
            onPress={() => {
              ClearHandler("x");
            }}
          />
          <CalcButton
            name={"%"}
            color={"orange"}
            onPress={() => {
              OperationHandler("%");
            }}
          />
          <CalcButton
            name={"/"}
            color={"orange"}
            onPress={() => {
              OperationHandler("/");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CalcButton
            name={"7"}
            color={"white"}
            onPress={() => {
              DataHandle("7");
            }}
          />
          <CalcButton
            name={"8"}
            color={"white"}
            onPress={() => {
              DataHandle("8");
            }}
          />
          <CalcButton
            name={"9"}
            color={"white"}
            onPress={() => {
              DataHandle("9");
            }}
          />
          <CalcButton
            name={"*"}
            color={"orange"}
            onPress={() => {
              OperationHandler("*");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CalcButton
            name={"4"}
            color={"white"}
            onPress={() => {
              DataHandle("4");
            }}
          />
          <CalcButton
            name={"5"}
            color={"white"}
            onPress={() => {
              DataHandle("5");
            }}
          />
          <CalcButton
            name={"6"}
            color={"white"}
            onPress={() => {
              DataHandle("6");
            }}
          />
          <CalcButton
            name={"-"}
            color={"orange"}
            onPress={() => {
              OperationHandler("-");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CalcButton
            name={"1"}
            color={"white"}
            onPress={() => {
              DataHandle("1");
            }}
          />
          <CalcButton
            name={"2"}
            color={"white"}
            onPress={() => {
              DataHandle("2");
            }}
          />
          <CalcButton
            name={"3"}
            color={"white"}
            onPress={() => {
              DataHandle("3");
            }}
          />
          <CalcButton
            name={"+"}
            color={"orange"}
            onPress={() => {
              OperationHandler("+");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CalcButton
            name={"."}
            color={"white"}
            onPress={() => {
              DataHandle(".");
            }}
          />
          <CalcButton
            name={"0"}
            color={"white"}
            onPress={() => {
              DataHandle("0");
            }}
          />
          <CalcButton
            name={"^_^"}
            color={"white"}
            onPress={() => {
              YourMother();
            }}
          />
          <CalcButton
            name={"="}
            color={"orange"}
            onPress={() => {
              ResultHandler();
            }}
          />
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  welcome: {
    marginTop: 40,
    padding: 10,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
