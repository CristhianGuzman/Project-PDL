import { useEffect, useState } from "react";


const Cliente = ({cliente}) =>{

    const [clienteEstado, setClienteEstado] = useState({});
    
    



    return(
        <div>
            
            <h1 className='title1' style={{width:'430px'}}>
                Cliente 
            </h1>
            <pre>
                <p className='margenLetra'>
                    Nombre:                                   {cliente.name}
                </p>
                <p className='margenLetra'>
                    C.C:                                           {cliente.cedula}
                </p>
                <p className='margenLetra'>
                    Dirección:                                {cliente.address}
                </p>
                <p className='margenLetra'>
                    Correo:                                     {cliente.email}
                </p>
                <p className='margenLetra'>
                    Telefono:                                 {cliente.phoneNumb}
                </p>
            </pre>
        </div>
        

    )
}

export default Cliente; 