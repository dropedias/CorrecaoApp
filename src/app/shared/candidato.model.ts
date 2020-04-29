import { Imagem } from './imagem.model';
import { Questao } from './questao.model';

export class Candidato {
    IdCandidato : number;
    NomeCandidato : string;
    ValorNota : number;
    IsLock : Boolean; 
    IdImagem : number;
    Imagem : Imagem;
}
