//import styles from '../../styles/cotizacion.css';
import DATA from '../../data/data.json'

import { useState,useEffect } from 'react';
import { Input,Table,Button} from 'antd';
import {SearchOutlined } from '@ant-design/icons'


const NumOrdenServ = ({buscarCuenta, dataSource}) => {

    

    const style1 ={ width: '200px'};
    const [ordenServ, setOrdenServicio] = useState();
    
    /*useEffect(()=>{
      console.log(dataSource)
    })*/
    

      
      const columns = [
        {
          title: 'Descripción',
          dataIndex: 'descripcion',
        },
        {
          title: 'Cantidad',
          dataIndex: 'cantidad',
          
        },
        {
          title: 'Precio Unit.',
          dataIndex: 'precio_unit',
        },
        {
          title: 'Total',
          dataIndex: 'total',
        },
    ]
      

    

    return(
       
            <div>
                <h1>
                    Orden de servicio
                </h1>
                <Input 
                    refs='s'
                    placeholder='No. Orden'
                    style={style1}
                    name='inputCuenta'
                    value={ordenServ}
                    onChange={evento => {setOrdenServicio(evento.target.value)}}
                />  
                <Button
                    onClick = {()=>buscarCuenta(ordenServ)}
                    type = "primary"
                    //shape = 'circle'
                    icon = {<SearchOutlined />}
                ></Button>
                <h2 style={{marginTop:'50px'}}>Cuenta de Cobro No. {ordenServ}</h2>
                <h1 className='tabla'>Por concepto de</h1>
                <Table 
                    dataSource={dataSource}
                    columns={columns}
                    size="middle"
                    bordered= {true}
                />
            </div>
    )
}

export default NumOrdenServ;