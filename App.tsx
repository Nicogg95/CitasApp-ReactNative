/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Modal,
  Pressable,
  View,
  FlatList,
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';


const App = () => {

  const [modal, setModal] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  
  const handleEditarPaciente = (id) =>{
     
    const pacienteEditado = pacientes.filter(pacienteState => pacienteState.id === id)[0];
    setPaciente(pacienteEditado);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas {" "}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnNuevaCita}
        onPress={()=>setModal(!modal)}>
        <Text style={styles.txtNuevaCita}>Nueva cita</Text>
      </Pressable>
      <View>
        {pacientes ? 
          <FlatList
            style={styles.listado}
            data={pacientes}
            keyExtractor={ (item) => item.id}
            renderItem = {({item}) => {
              return(
              <Paciente item={item}
                setModal={setModal}
                modal={modal}
                handleEditarPaciente={handleEditarPaciente}
              />
              );
            }}
          />
          :
          <Text>No hay pacientes registrados.</Text>
        }
      </View>
      <Formulario  
        modal={modal}
        setModal={setModal}
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente={paciente}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    color: "#374151",
    fontSize: 30,
    fontWeight: "700",
  },
  tituloBold: {
    fontWeight: "900",
    color: "#6D28D9",
  },
  btnNuevaCita: {
    backgroundColor: "green",
    padding: 20,
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 15,
  },
  txtNuevaCita:{
    textAlign: "center",
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: "900",
    fontSize: 18,
  },
  listado: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
});

export default App;
