export class Pedido {
    constructor(
      private id: string,
      private papelTamanho: string,
      private papelTipo: string,
      private moldura: string,
      private borda: string
    ) {}
  
    public getId() {
      return this.id
    }
  
    public getpapelTamanho() {
      return this.papelTamanho
    }
  
    public getpapelTipo() {
      return this.papelTipo
    }
  
    public getmoldura() {
      return this.moldura
    }
  
    public getborda() {
      return this.borda
    }
  }