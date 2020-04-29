import { TipoQuestao } from './tipo-questao.model';
import { Candidato } from './candidato.model';
import { Nota } from './nota.model';

export class Questao {
    IdQuestao: number;
    DescricaoQuestao: string;    
    IdTipoQuestao: number;
    TipoQuestao: TipoQuestao;    
    Candidatos : Candidato[];
}
