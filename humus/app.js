const humus = function(factor) {
    const ingrediente = function(cantidad, unidad, nombre) {
        let cantidadIngrediente = factor * cantidad;
        if(cantidadIngrediente > 1) {
            unidad += "s"
        };
        console.log(`${cantidadIngrediente} ${unidad} ${nombre}`)
    }
    ingrediente(1, "caja", "salami")
}