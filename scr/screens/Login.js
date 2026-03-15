import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Login({ entrar }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function validarLogin() {
    if (usuario === "admin" && senha === "123") {
      entrar();
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      
      <Text style={{ fontSize:24 }}>Login</Text>

      <TextInput
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        style={{ borderWidth:1, width:200, margin:10 }}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ borderWidth:1, width:200, margin:10 }}
      />

      <Button title="Entrar" onPress={validarLogin} />

    </View>
  );
}
