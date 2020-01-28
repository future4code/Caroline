export class Paper {
    private Size: PaperSize
    private Type: PaperType
    constructor(Size: string, Type: string) {
        this.Size = Size  as PaperSize
        this.Type = Type as  PaperType
    }
    public CalculatePrice () {
    }
}
    
export enum PaperSize {
    "13x18" = "13x18",
    "21x30" = "21x30",
    "30x30" = "30x30",
    "30x42" = "30x42",
    "42x60" = "42x60",
  }
  
export enum PaperType {
    BRILHANTE = 'BRILHANTE',
    FOSCO = 'FOSCO',
    FIBRA = 'FIBRA',
    RESINADO = 'RESINADO',
    PEROLA = 'PEROLA',
  }