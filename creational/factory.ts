interface Product {
  operation: () => string;
}

abstract class Creator {
  abstract factoryMethod(): Product;

  doOperation(): string {
    const product = this.factoryMethod();

    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct1();
  } 
}

class ConcreteCreator2 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct2();
  } 
}

class ConcreteProduct1 implements Product {
  operation() {
    return 'result of concrete product 1';
  };
}

class ConcreteProduct2 implements Product {
  operation() {
    return 'result of concrete product 2';
  };
}

function clientCode(creator: Creator) {
  console.log('Performing operation');
  console.log(creator.doOperation());
}

clientCode(new ConcreteCreator1());
clientCode(new ConcreteCreator2());