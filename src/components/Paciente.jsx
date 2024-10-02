/* eslint-disable react/react-in-jsx-scope */
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Paciente = ({item, setModal, Modal, handleEditarPaciente}) => {

  const {paciente, fecha, id} = item;

  const formatear = (fecha) =>{
    const nuevaFecha = new Date(fecha);
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return nuevaFecha.toLocaleDateString('es-AR', opciones);
  };


  return (
    <View style={styles.contenedor}>

        <Text style={styles.label}>
        Paciente:
        </Text>

        <Text style={styles.texto}>
        {paciente}
        </Text>

        <Text style={styles.fecha}>
            {formatear(fecha)}
        </Text>

        <View style={styles.contenedorBtn}>

           <Pressable
              style={[styles.btn, styles.btnEditar]}
              onPress={()=>{
                setModal(!Modal);
                handleEditarPaciente(id);
              }}>
            <Text style={[styles.btnTxt]}>Editar</Text>
           </Pressable>

           <Pressable style={[styles.btn, styles.btnEliminar]}>
            <Text style={[styles.btnTxt]}>Eliminar</Text>
           </Pressable>

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    contenedor:{
      backgroundColor: '#FFF',
      padding: 20,
      borderRadius: 15,
      borderBottomColor: '#94a3B8',
      borderBottomWidth: 2,
      gap: 10,
      marginVertical: 10,
    },
    label: {
      color: '#374151',
      textTransform: 'uppercase',
      fontWeight: '700',
    },
    texto: {
      color: '#6D28D9',
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 10,
    },
    fecha: {
        color: '#374151',
    },
    contenedorBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    btnTxt: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
    },
    btn: {
        padding: 15,
        flex: 1,
    },
    btnEditar: {
        backgroundColor: '#0f7bf0',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    btnEliminar: {
        backgroundColor: '#EF4444',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
  });

export default Paciente;
