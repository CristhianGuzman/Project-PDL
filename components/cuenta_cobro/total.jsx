import {Button} from 'antd';
const Total = ({total}) =>{
    return(
        <div className='all'>
            <div>
                <h1 className='title1' style={{width: '170px'}}>Total</h1>
                <p>$ {total} </p>
            </div>
            <div>
                <Button className='title1' type='primary' >Imprimir</Button>
            </div>
        </div>
        
            
        
        


    )
}

export default Total;