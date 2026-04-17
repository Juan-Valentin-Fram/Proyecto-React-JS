const products = [
    // ALMACÉN
    { 
        id: '1', 
        name: 'Leche La Serenísima 1L', 
        price: 1450, 
        category: 'almacen', 
        img: '/assets/Leche La Serenisima 1 Litro entera.png', 
        stock: 20, 
        description: 'Leche entera clásica La Serenísima, ideal para el desayuno.' 
    },
    { 
        id: '2', 
        name: 'Yerba Mate Playadito 1kg', 
        price: 4200, 
        category: 'almacen', 
        img: '/assets/Yerba mate Playadito suave con palo 1 kg..webp', 
        stock: 15, 
        description: 'Yerba mate suave con palo, elaborada con materias primas seleccionadas.' 
    },
    { 
        id: '3', 
        name: 'Pan de Papa Bimbo Artesano', 
        price: 2800, 
        category: 'almacen', 
        img: '/assets/Pan de papa de hamburguesa Bimbo Artesano 4 uni.webp', 
        stock: 10, 
        description: 'Pan de papa tipo artesano para hamburguesas, 4 unidades.' 
    },
    
    // LÁCTEOS / FRESCOS (Podés usarlos en Almacén o crear la categoría)
    { 
        id: '4', 
        name: 'Queso Crema Casancrem', 
        price: 2100, 
        category: 'almacen', 
        img: '/assets/Queso crema Casancrem clásico 500 grs.webp', 
        stock: 12, 
        description: 'Queso crema clásico Casancrem, envase de 500 grs.' 
    },
    { 
        id: '5', 
        name: 'Yogur Ser PRO+', 
        price: 900, 
        category: 'almacen', 
        img: '/assets/Yogur batido Ser PRO+ con proteínas sabor frutos rojos 175 grs.webp', 
        stock: 25, 
        description: 'Yogur batido con proteínas sabor frutos rojos.' 
    },

    // LIMPIEZA
    { 
        id: '6', 
        name: 'Jabón Líquido Skip 500cc', 
        price: 3500, 
        category: 'limpieza', 
        img: '/assets/Jabón líquido para ropa Skip concentrado bio encimas 500 cc..webp', 
        stock: 8, 
        description: 'Jabón concentrado con bio-enzimas para el cuidado de tu ropa.' 
    },
    { 
        id: '7', 
        name: 'Detergente Magistral Limón', 
        price: 1800, 
        category: 'limpieza', 
        img: '/assets/Detergente Magistral ultra limón en botella 750 cc..webp', 
        stock: 14, 
        description: 'Detergente ultra desengrasante con aroma a limón fresco.' 
    },

    // CUIDADO PERSONAL (Podés agruparlo en Limpieza por ahora)
    { 
        id: '8', 
        name: 'Desodorante Rexona Women', 
        price: 2300, 
        category: 'limpieza', 
        img: '/assets/Desodorante Rexona Active Emotion Women 150 ml.webp', 
        stock: 10, 
        description: 'Protección antibacterial que se activa con el movimiento.' 
    }
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};