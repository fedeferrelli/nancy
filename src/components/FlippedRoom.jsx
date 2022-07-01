import React from 'react'

function FlippedRoom() {
    return (
        <main className="w-full flex flex-col gap-10 text-lg" id="flipped">
            <section className="border-green-400 border max-w-[1240px] m-auto py-10">

            <div className="text-4xl m-auto  font-sans uppercase font-bold text-center  sm:tracking-wider leading-none ">
          Flipped Room{" "}
        </div>

<p className="max-w-prose m-auto py-10">La tecnología y las actividades de aprendizaje son dos componentes clave de
este modelo. Ambos influencian el entorno de aprendizaje del estudiante de
manera fundamental.</p>

<div className="flex flex-col sm:flex-row gap-10"> 

<div className="sm:w-1/2">

<p>4 PILARES QUE LO FUNDAMENTAN
1 Entorno flexible
Los educadores reorganizan los espacios de aprendizaje para acomodarlos
a las necesidades de una determinada clase o unidad de contenido, y así
apoyar el trabajo de grupo o el aprendizaje individual.
2 Cultura de aprendizaje
Frente al modelo clásico en el que el docente es la fuente de información, en
el aula invertida la instrucción recae sobre el propio alumno y el tiempo de
clase se dedica a profundizar los conocimientos y a enriquecer las
oportunidades de aprendizaje.
3 Contenido dirigido
Los docentes seleccionan lo que quieren enseñar y se convierten en
transmisores de los contenidos y materiales que los alumnos deben estudiar
por sí mismos.
4 Facilitador profesional
El nuevo rol del profesor es fundamental en el aula invertida para seguir y
apoyar el progreso de los alumnos, realimentandolo y evaluándolo.
</p>

</div>

<div className="sm:w-1/2">
<p>
BENEFICIOS DEL MODELO
● Elimina la frustración de docentes y estudiantes en las largas horas de
clases.
● Ayuda a la colaboración y trabajo en equipo.
● Se acelera el proceso de asimilación gracias a la resolución de dudas.
● Apoya el valor de la lectura como técnica de estudio.
● Mejora la percepción del docente hacia el trabajo de sus estudiantes y
su personalidad.
● Aumenta las capacidades de pensamiento crítico, la reflexión y la
creatividad.
● Convierte el aula en un auténtico laboratorio de aprendizaje.
● A través de esta técnica, los estudiantes reciben feedback inmediato
porque los docentes disponen de más tiempo para apoyar con los
conceptos más difíciles.
● La evaluación es continua, a través de actividades específicas para que
el alumno reflexione sobre su proceso de aprendizaje. Esto tiene como
finalidad establecer momentos periódicos de revisión, reciclado y
evaluación de progreso, evitando así los efectos negativos que causan
los exámenes parciales o finales.</p>
</div>
</div>
</section>
            
        </main>
    )
}

export default FlippedRoom
