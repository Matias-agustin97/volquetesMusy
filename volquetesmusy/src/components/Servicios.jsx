import React from 'react'

const Servicios = React.forwardRef((props,ref) => {
  return (
    <section className='section-servicios' ref={ref} >
          <div className='servicios-header'>Servicios</div>
        <div className='servicios-cont'>
        <div className="servicios-item">
            <h3>Residuos de obra</h3>
            <p>Realizamos retiro de escombros de acuerdo a tus necesidades las 24 hs</p>
            <button><a href='tel:1152871555'>&#128383; Llamenos</a></button>
        </div>
        <div className="servicios-item">
            <h3>Obras Hidraulicas</h3>
            <p>
            Siempre contamos con disponibilidad de volquetes para entrega inmediata
            </p>
            <button><a href='tel:1152871555'>&#128383; Llamenos</a></button>
        </div>
        <div className="servicios-item">
            <h3>Obras Civiles</h3>
            <p>
            Disponibilidad inmediata, contamos con una amplia flota en óptimo estado para brindar el mejor servicio que nuestros clientes merecen.
            </p>
            <button><a href='tel:1152871555'>&#128383; Llamenos</a></button>
        </div>
        <div className="servicios-item ">
            <h3>Escombros</h3>
            <p>
            Recolección (escombros, tierra, maderas, resto de todo tipo de obra,etc.) Brindamos servicios con entregas previamente programadas o también con entregas en el acto, según disponibilidad.
            </p>
            <button><a href='tel:1152871555'>&#128383; Llamenos</a></button>
        </div>

    </div>
    </section>
  )
})

export default Servicios