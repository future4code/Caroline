export class Frame {
    private Size: FrameSize
    private Type: FrameType
  
    constructor(Size: string, Type: string) {
      this.Size = Size as FrameSize
      this.Type = Type as FrameType
    } 
    public CalculatePrice () {
    }
  }
  
  export enum FrameSize {
    PEQUENA = 'PEQUENA',
    MEDIA = 'MEDIA',
    GRANDE = 'GRANDE'
  }

  export enum FrameType {
    CRUA = 'CRUA',
    LISA = 'LISA',
    CLASSICA = 'CLASSICA',
    VINTAGE = 'VINTAGE',
    MADEIRA = 'MADEIRA',
  }
  
