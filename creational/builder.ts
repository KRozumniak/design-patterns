interface Builder {
  producePartA: () => void;
  producePartB: () => void;
  producePartC: () => void;
}

class ConcreteBuilder implements Builder {
  private product: Product1;

  constructor() {
    this.reset();
  }

  reset() {
    this.product = new Product1();
  }

  producePartA() {
    this.product.parts.push('PartA1');
  }

  producePartB() {
    this.product.parts.push('PartB1');
  }

  producePartC() {
    this.product.parts.push('PartC1');
  }

  getProduct() {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Product1 {
  parts: string[] = [];

  listParts() {
    console.log(`Product parts: ${this.parts.join(', ')}`);
  }
}

class Director {
  private builder: Builder;

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  buildMinimalViableProduct() {
    this.builder.producePartA();
  }

  buildFullFeaturedProduct() {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

function clientCode(director: Director) {

  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log('Standard basic product:');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('Standard full featured product:');
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  console.log('Custom product:');
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

const director = new Director();

clientCode(director);