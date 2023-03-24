class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts = () => {
    return console.log(this.products)
  };

  addProducts = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if(!title || !description || !price || !thumbnail || !code || !stock) {
      console.log(`Todos los campos son obligatorios, por favor ingresa de nuevo.`)
      return
    }
    const codeControl = this.products.find(e => e.code === code)
    if (codeControl) {
      console.error('No puede haber campos repetidos');
      return
    } else {
      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }
      this.products.push(product)
    }

  };

  getProductById = (searchId) => {
    const productById = this.products.find(p => p.id === searchId)
    if(!productById){
      console.error('Product not found');
      return
    } else {
      return console.log(productById);
    }
  }
}

const controladorDeProductos = new ProductManager()
controladorDeProductos.getProducts()
controladorDeProductos.addProducts('producto de prueba', 'este es un producto de prueba', 200, 'sin imagen', 'abc123',25)
controladorDeProductos.getProducts()
controladorDeProductos.addProducts('producto de prueba', 'este es un producto de prueba', 200, 'sin imagen', 'abc123',25)
controladorDeProductos.getProducts()
controladorDeProductos.getProductById(2)
controladorDeProductos.getProductById(1)

