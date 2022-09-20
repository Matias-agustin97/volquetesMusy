import React from 'react'

const Contacto = () => {
  return (
    <section className='contacto-cont'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1641.4774100772852!2d-58.409703!3d-34.630582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb04765013f3%3A0xf7ccd25c4dfb55b8!2s24%20de%20Noviembre%201656%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1663547634656!5m2!1ses!2sus" width="600" height="450" className='mapita' allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <form action="contacto.php" method='POST' className='formulario'>
        <label htmlFor="Nombre">Nombre</label>
        <input type="text" id='Nombre'name='Nombre' />
        <label htmlFor='Email'>Email</label>
        <input type="text" id='Email' name='Email'/>
        <label htmlFor="Asunto">Asunto</label>
        <input type="text" id='Asunto' name='Asunto'/>
        <label htmlFor="Mensaje">Mensaje</label>
        <textarea name="Mensaje" id="mensaje" cols="30" rows="10" ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contacto