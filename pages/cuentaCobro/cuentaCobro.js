import styles from '../../styles/Home.module.css'
import ShowDate from '../../components/cotizacion/crear/showDate';
import NumOrdenServ from '../../components/cuenta_cobro/numOrdenSer';

import FormaPago from '../../components/cuenta_cobro/formaPago.jsx';
import Cliente from '../../components/cuenta_cobro/cliente'
import Total from '../../components/cuenta_cobro/total.jsx'
import DATA from '../../data/data.json';
import { useState,useEffect } from 'react';



function CuentaCobro(){

  const [estado, setEstado] = useState([]);
  const [cliente, setCliente] = useState({}) 
  const[total, setTotal] = useState(0);  


  useEffect(()=>{console.log(1);})
 

  const buscarcliente = numC =>{
    DATA.cuentas_cobro.map(item=>{
      if(parseInt(item.id) == numC){ 
        setTotal(item.total); 
        llenarTabla(item.producto)
        setCliente(
        {
          id : item.cliente.id,
          name: item.cliente.name,
          cedula: item.cliente.cedula,
          address: item.cliente.address,
          phoneNumb: item.cliente.phoneNumb,
          email: item.cliente.email         
        })
      }
    })
  }

 const llenarTabla = (productos) =>{
    let data = []
    setEstado(data)
    productos.map(item=>{
      data = [...data,
        {
          descripcion: item.name,
          cantidad: item.cantidad,
          precio_unit: item.precio,
          total: item.cantidad * item.precio 
        }
      ];
    })
    setEstado(data) 
  }





  const buscarCuenta = (numC) =>{
    buscarcliente(numC);


  } 


  





  return (
    <div style={{margin:'1%'}}>
      <div className='top'>
        <h1 className={styles.title}>
          Cuenta de cobro
        </h1>
        <ShowDate />
      </div>
      <div>
        <NumOrdenServ buscarCuenta={buscarCuenta} dataSource={estado}/>    
      </div>
      <div style={{display: 'flex'}}>
        
        
        <Cliente cliente={estado} cliente= {cliente}/>
        <Total total={total}/>
      </div>
      

    </div>
    )
}

export default CuentaCobro;