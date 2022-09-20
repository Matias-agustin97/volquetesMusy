import React from 'react'

const Servicios = () => {
  return (
    <section className='section-servicios' >
          <div className='servicios-header'>Servicios</div>
        <div className='servicios-cont'>
        <div className="servicios-item">
            <h3>Residuos de obra</h3>
            <p>Realizamos retiro de escombros de acuerdo a tus necesidades las 24 hs</p>
           
        </div>
        <div className="servicios-item">
            <h3>Obras Hidraulicas</h3>
            <p>
            Siempre contamos con disponibilidad de volquetes para entrega inmediata
            </p>
        </div>
        <div className="servicios-item">
            <h3>Obras Civiles</h3>
            <p>
            Disponibilidad inmediata, contamos con una amplia flota en óptimo estado para brindar el mejor servicio que nuestros clientes merecen.
            </p>
        </div>
        <div className="servicios-item">
            <h3>Escombros</h3>
            <p>
            Contamos con personal capacitado con todo su instrumento de trabajo y seguro correspondiente.
            </p>
        </div>

    </div>
    </section>
  )
}

export default Servicios