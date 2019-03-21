package br.com.viasoft.centralliberacao.repository;

import br.com.viasoft.centralliberacao.model.centralliberacao.LiberacaoCabecalho;
import br.com.viasoft.centralliberacao.model.centralliberacao.LiberacaoDetalhe;
import br.com.viasoft.centralliberacao.model.centralliberacao.LiberacaoUp;

import java.util.List;

public interface CentralLiberacaoRepository {

    List<LiberacaoCabecalho> findLiberacoesByUser(Integer empresa, String userId);

    List<LiberacaoCabecalho> findAllLiberacoesByUser(String userId);

    LiberacaoDetalhe findDetalheLiberacao(Integer idLibProc, Integer estab, String userId);

    boolean updateLiberacao(LiberacaoUp liberacaoUp);

}
