/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import {
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import DateTimePicker from 'react-native-ui-datepicker';

const Formulario = ({modal, setModal, setPacientes, pacientes, paciente: pacienteObj}) => {

  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [fecha, setFecha] = useState(new Date());

  useState(()=>{

    if(pacienteObj){
      setImmediate(pacienteObj.id);
      setPaciente(pacienteObj.paciente);
      setTelefono(pacienteObj.telefono);
      setPropietario(pacienteObj.propietario);
      setEmail(pacienteObj.email);
      setSintomas(pacienteObj.sintomas);
      setFecha(pacienteObj.fecha);
    }

  },[pacienteObj]);

  const handleCita = () =>{

    if(!paciente || !propietario || !fecha || !sintomas || !email || !telefono){
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
      );
      return;
    }

    const nuevoPaciente = {
      paciente, propietario, fecha, email, telefono, sintomas, id:Date.now(),
    };

    setPacientes([...pacientes, nuevoPaciente]);
    setModal(!modal);
    // limpiarForm();

  };

  return (
    <Modal
      animationType="slide"
      visible={modal}
    >
      <SafeAreaView style={styles.contenido}>
        <ScrollView>

          <Text style={styles.titulo}>
            Nueva {''}
            <Text style={styles.tituloBold}>
              Cita
            </Text>
          </Text>

          <Pressable style={styles.btnCancelar}
          onPress={()=>setModal(!modal)}>
            <Text style={styles.txtCancelar}>
              X Cerrar
            </Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.labelInput}>
              Nombre Paciente
            </Text>
            <TextInput
              placeholderTextColor={'#000'}
              style={styles.txtInput}
              placeholder="Nombre del paciente"
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.labelInput}>
              Nombre Propietario
            </Text>
            <TextInput
              style={styles.txtInput}
              placeholderTextColor={'#000'}
              placeholder="Nombre del propietario"
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.labelInput}>
              Email de Contacto
            </Text>
            <TextInput
              inputMode="email"
              style={styles.txtInput}
              placeholderTextColor={'#000'}
              placeholder="Email de contacto del dueño"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.labelInput}>
              Numero de Contacto
            </Text>
            <TextInput
              inputMode="tel"
              style={styles.txtInput}
              placeholderTextColor={'#000'}
              placeholder="Telefono de contacto del dueño"
              value={telefono}
              onChangeText={setTelefono}
              maxLength={14}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.labelInput}>
              Fecha de alta
            </Text>
            <View style={styles.fechaContenedor}>
            <DatePicker
                date={fecha}
                locale="es"
                onDateChange={(date)=>setFecha(date)}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.labelInput}>
              Sintomas del paciente
            </Text>
            <TextInput
              style={[styles.txtInput, styles.sintomasInput]}
              placeholderTextColor={'#000'}
              placeholder="Describa los sintomas del paciente"
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={5}
            />
          </View>

          <Pressable style={styles.btnNuevaCita}
          onPress={()=>handleCita()}>
            <Text style={styles.txtNuevaCita}>
              {pacienteObj?.id ? 'Editar Paciente' : 'Agregar Paciente'}
            </Text>
          </Pressable>

        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#2d9e08',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 30,
    color: '#FFF',
  },
  tituloBold: {
    fontWeight: '900',
  },
  labelInput: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 18,
  },
  txtInput: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    color: 'black',
  },
  campo: {
    marginHorizontal: 20,
    marginVertical: 7,
    display: 'flex',
    gap: 10,
  },
  sintomasInput:{
    height: 120,
    textAlignVertical: 'top',
  },
  fechaContenedor: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    borderRadius: 15,
    color: 'black',
  },
  btnCancelar: {
    backgroundColor: 'green',
    padding: 20,
    marginVertical: 25,
    marginHorizontal: 15,
    borderRadius: 15,
  },
  txtCancelar:{
    textAlign: 'center',
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 18,
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#08739e',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 15,
  },
  txtNuevaCita: {
    color: '#FFF',
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
  },
});

export default Formulario;
