import React from 'react'

const NuevoProducto = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'> Agregar Producto</h2>
            <form>
              <div className='form-group'>
                <label htmlFor='nombree'>Nombre Producto:</label>
                <input type='text' className='form-control' id='nombre' placeholder='Nombre del producto' name='nombre'/>
              </div>
              <div className='form-group'>
                <label htmlFor='precio'>Precio Producto:</label>
                <input type='number' id='precio' className='form-control' placeholder='Nombre del producto' name='nombre'/>
              </div>
              <input type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100' value={'Agregar'}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NuevoProducto