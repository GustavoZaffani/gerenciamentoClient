import {Motivo} from "../motivoLiberacao/motivo";

export class Liberacao {

  estab: number;
  descricao: string;
  prioridade: number;
  idLibProc: string;
  userIdReq: string;
  dataHrSolic: string;
  idPess: number;
  pessoa: string;
  idAcao: number;
  cor: number;
  red: number;
  green: number;
  blue: number;
  idDocto: number;
  idMotivo: Motivo;
  motivo: Motivo;
  estabSelected: string;
}
