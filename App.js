import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Provider } from "react-redux";
import { store } from "./scr/store/store";

import Login from "./scr/screens/Login";
import Masculino from "./scr/screens/Masculino";
import Feminino from "./scr/screens/Feminino";
import DetalheProduto from "./scr/screens/DetalheProduto";

function Home({ setTela }) {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>

      <Text style={{ fontSize:24 }}>Loja de Roupas</Text>

      <Button
        title="Masculino"
        onPress={() => setTela("masculino")}
      />

      <Button
        title="Feminino"
        onPress={() => setTela("feminino")}
      />

      <Button
        title="Logout"
        onPress={() => setTela("login")}
      />

    </View>
  );
}

function AppInterno() {

  const [tela, setTela] = useState("login");

  if (tela === "login") {
    return <Login entrar={() => setTela("home")} />;
  }

  if (tela === "masculino") {
    return <Masculino voltar={() => setTela("home")} detalhe={() => setTela("detalhe")} />;
  }

  if (tela === "feminino") {
    return <Feminino voltar={() => setTela("home")} detalhe={() => setTela("detalhe")} />;
  }

  if (tela === "detalhe") {
    return <DetalheProduto voltar={() => setTela("home")} />;
  }

  return <Home setTela={setTela} />;
}

export default function App() {
  return (
    <Provider store={store}>
      <AppInterno />
    </Provider>
  );
}
