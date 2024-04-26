class Singleton {
    constructor() {
      if (!Singleton.instance) {
        // A instância única é criada apenas na primeira chamada do construtor
        this.data = Math.random(); // Dados específicos da instância
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  
    getData() {
      return this.data;
    }
  }
  
  // Exemplo de uso:
  
  const instance1 = new Singleton();
  console.log(instance1.getData()); // Saída: 0.12345
  
  const instance2 = new Singleton();
  console.log(instance2.getData()); // Saída: 0.12345
  
  console.log(instance1 === instance2); // Saída: truev