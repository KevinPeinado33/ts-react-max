export const TiposBasicos = () => {

    const nombre: string = 'kevin'
    const edad: number = 20
    const estaActivo: boolean = true

    const poderes: string[] = ['Volar', 'Velocidad', 'Fuerza', 'Telequinesis']

    return (
        <>
            <h3>Tipos básicos</h3>
            { nombre }, { edad }, { estaActivo ? 'Activo' : 'No activo' }
            <br />
            { poderes.join(', ') }
        </>
    )
}
