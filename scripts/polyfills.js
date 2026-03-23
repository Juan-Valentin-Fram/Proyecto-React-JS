if (!Array.prototype.includes) {
    Array.prototype.includes = function (elementoBuscado) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === elementoBuscado) {
                return true;
            }
        }
        return false;
    };
    console.log("Polyfill de 'includes' cargado correctamente.");
}
