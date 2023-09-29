class Moradia {
  public Area(){
    return Number;
  }
  public Endereco(){
    return Endereco;
  }
}

class Endereco{
  cep: String;
  constructor(cep: String){
  }
}

class TipoVidro{
  tamanho: Number;
  espessura: Number;
  cor: String;
  constructor(tamanho: Number, espessura: Number, cor: String){
    tamanho = this.tamanho;
    espessura = this.espessura;
    cor = this.cor;
  }
}

class Acabamento{
  revestimentoParede: String;
  revestimentoPiso: String;
  revestimentoForro: String;
  constructor(revestimentoParede: String, revestimentoPiso: String, revestimentoForro: String){
    revestimentoParede = this.revestimentoParede;
    revestimentoPiso = this.revestimentoPiso;
    revestimentoForro= this.revestimentoForro;
  }
}

class TipoTelha{
  tamanho: Number;
  forma: String;
  constructor(tamanho: Number, forma: String){
    tamanho = this.tamanho;
    forma = this.forma;
  }
}

class Casa extends Moradia{
  public TelhadoAreaExterna(){
    return Telhado;
  }
  public TelhadoAreaInterna(){
    return Telhado;
  }
  public ParedeQuarto(){
    return Parede;
  }
  public ParedeBanheiro(){
    return Parede;
  }
  public ParedeCozinha(){
    return Parede;
  }
  public EspelhoCorredor(){
    return Espelho;
  }
}

class Espelho{
  public TipoVidro(){
    return TipoVidro;
  }
  public Altura(){
    return Number;
  }
  public Largura(){
    return Number;
  }
}

class Parede{
  public Altura(){
    return Number;
  }
  public Largura(){
    return Number;
  }
  public Acabamento(){
    return Acabamento;
  }
}

class Telhado{
  public TipoTelha(){
    return TipoTelha;
  }
  public Area(){
    return Number;
  }
}