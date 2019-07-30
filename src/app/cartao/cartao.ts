import {Credenciadora} from '../credenciadora/credenciadora';
import {Bandeira} from '../bandeira/bandeira';

export class Cartao {

  id: number;
  descricao: string;
  credenciadora: Credenciadora;
  cnpj: string;
  limite: number;
  vencimento: number;
  tipo: string;
  bandeira: Bandeira;
  melhorData: number;
}
