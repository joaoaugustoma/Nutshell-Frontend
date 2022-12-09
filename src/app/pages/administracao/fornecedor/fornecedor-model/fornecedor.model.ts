import {Endereco} from "../../Endereco/endereco-model/endereco.model";
import {Contato} from "../../contato/contato-model/contato.model";

export interface Fornecedor {
  idPessoa?: String,
  nome?: String,
  contatos?: Contato[],
  status?: String,
  endereco?: Endereco,
  indicadorInscricaoEstadual?: String,
  inscricaoMunicipal?: String,
  inscricaoEstadual?: String,
  nomeFantasia?: String,
  cnpj?: String,
  dataCadastro?: String,
  dataAtualizacao?: String
}
