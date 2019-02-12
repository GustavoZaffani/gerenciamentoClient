import {Cartao} from '../cartao/cartao';

export class Conta {

  id: number;
  descricao: string;
  vencimento: string;
  parcelas: string;
  cartao: Cartao;
  valor: number;
  tipoPagamento: string;
  observacao: string;
  dtConta: string;
}
