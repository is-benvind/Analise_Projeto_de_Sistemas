class Escola {
  cep: string;
  constructor(cep: string){
    this.cep = cep;
  }
}

class Turma {
  codigo: string;
  ano: number;
  aluno: Aluno[];
  disciplina: Disciplina[];
  constructor(codigo: string, ano: number, aluno: Aluno[], disciplina: Disciplina[]){
    this.codigo = codigo;
    this.ano = ano;
    this.aluno = aluno;
    this.disciplina = disciplina;

  }

  public addAluno(): void{

  }
}

class Pessoa {
  nome: string;
  cpf: string;
  cep: string;
  constructor(nome: string, cpf: string, cep: string){
    this.nome = nome;
    this.cpf = cpf;
    this.cep = cep;
  }
}

class Aluno extends Pessoa {
  matricula: string;
  constructor(nome, cpf, cep, matricula: string){
    super(nome, cpf, cep);
    this.matricula = matricula;
  }

  public fazerProva(): void{

  }
}

class Professor extends Pessoa {
  siape: string;
  formacao: string;
  salario: number;
  constructor(nome, cpf, cep, siape: string, formacao: string, salario: number){
    super(nome, cpf, cep);
    this.siape = siape;
    this.formacao = formacao;
    this.salario = salario;
  }

  public elaborarProva(): void{

  }
}

class Disciplina {
  nome: string;
  cargaHoraria: number;
  constructor(nome: string, cargaHoraria: number){
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
  }
}