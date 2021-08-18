interface Persona {

    nombreCompleto: string
    edad: number
    direccion: Direccion
}

interface Direccion {
    pais: string
    casaNo: number
}

export const ObjectosLiterales = () => {

    const persona: Persona = {
        nombreCompleto : 'kevin',
        edad: 20,
        direccion: {
            pais: 'Perú',
            casaNo: 10 
        }
    }

    return (
        <>
            <h3>Objectos Literales </h3>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 ) }
                </pre>
            </code>
        </>
    )
}