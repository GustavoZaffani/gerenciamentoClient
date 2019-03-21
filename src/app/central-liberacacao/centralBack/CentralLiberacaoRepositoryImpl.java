package br.com.viasoft.centralliberacao.repository.impl;

import br.com.viasoft.centralliberacao.model.centralliberacao.LiberacaoCabecalho;
import br.com.viasoft.centralliberacao.model.centralliberacao.LiberacaoDetalhe;
import br.com.viasoft.centralliberacao.model.centralliberacao.LiberacaoUp;
import br.com.viasoft.centralliberacao.repository.CentralLiberacaoRepository;
import br.com.viasoft.centralliberacao.service.CentralLiberacaoParametrosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

@Service
public class CentralLiberacaoRepositoryImpl implements CentralLiberacaoRepository {

    final
    NamedParameterJdbcTemplate template;

    final CentralLiberacaoParametrosService parametrosService;

    @Autowired
    public CentralLiberacaoRepositoryImpl(NamedParameterJdbcTemplate template,
                                          CentralLiberacaoParametrosService parametrosService) {
        this.template = template;
        this.parametrosService = parametrosService;
    }

    @Override
    public List<LiberacaoCabecalho> findLiberacoesByUser(Integer empresa, String userId) {
        String sqlCabLiberacoes = "SELECT\n" +
                "    X.ESTAB,\n" +
                "    ACOES.IDACAO,\n" +
                "    ACOES.DESCRICAO,\n" +
                "    ACOES.PRIORIDADE,\n" +
                "    X.IDLIBPROC,\n" +
                "    X.USERIDREQ,\n" +
                "    X.DATAHRSOLIC,\n" +
                "    X.IDPESS,\n" +
                "    V.NOME PESSOA,\n" +
                "    X.IDDOCTO,\n" +
                "    PC.COR,\n" +
                "    X.VALORDOCTO,\n" +
                "    (SELECT DECODE(PD.IDREPRESENTANTE, NULL, '', PD.IDREPRESENTANTE || ' - ' || VP.NOME)\n" +
                "     FROM PESSOADOC PD\n" +
                "     LEFT JOIN V_SIMPLEPESS VP ON (VP.IDPESS = PD.IDREPRESENTANTE)\n" +
                "     WHERE PD.IDPESS = X.IDPESS) AS REPRESENTANTE\n" +
                "FROM TABLE (GETLIBERACOESPEND(\n" +
                "DECODE( NVL((SELECT 1 FROM USERTELAS WHERE ESTAB = :ESTAB AND IDTELA = 1 AND GRUPO = (SELECT GRUPO FROM PUSUARIO WHERE USERID = :USERID)),0), 0,\n" +
                "(SELECT LISTAGG(ESTAB,',') WITHIN GROUP (ORDER BY ESTAB) FROM FILIAL\n" +
                " WHERE EXISTS (SELECT 1 FROM PRIVILEGIO P\n" +
                "            WHERE P.PRIVTIPO = 'F'\n" +
                "            AND P.PRIVACESSO IN ('S' ,'T')\n" +
                "            AND ((P.USERID = :USERID) OR (P.GRUPO = (SELECT GRUPO FROM PUSUARIO WHERE USERID = :USERID)))\n" +
                "            AND CASE PRIVCHAVE1 WHEN '*' THEN TO_NUMBER(FILIAL.ESTAB) ELSE TO_NUMBER(:ESTAB) END = FILIAL.ESTAB)),\n" +
                "  (SELECT ESTAB FROM FILIAL WHERE INATIVA = 'N' AND FILIAL.ESTAB = (SELECT ESTAB FROM FILIAL WHERE ESTAB = :ESTAB) )), :USERID, (SELECT GRUPO FROM PUSUARIO WHERE USERID = :USERID))) X\n" +
                "LEFT JOIN ACOES ON (X.IDACAO = ACOES.IDACAO)\n" +
                "LEFT JOIN V_SIMPLEPESS V ON (V.IDPESS = X.IDPESS)\n" +
                "LEFT JOIN PRIORIDADECOR PC ON (ACOES.PRIORIDADE = PC.PRIORIDADE)\n" +
                "ORDER BY X.ESTAB";
        MapSqlParameterSource params = parametrosService.montaParametrosByUser(empresa, userId);

        List<LiberacaoCabecalho> libs =
                template.query(sqlCabLiberacoes, params, new BeanPropertyRowMapper<>(LiberacaoCabecalho.class));

        montaColors(libs);
        return libs;
    }

    @Override
    public List<LiberacaoCabecalho> findAllLiberacoesByUser(String userId) {
        String sqlCabLiberacoesAll = "SELECT\n" +
                "    X.ESTAB,\n" +
                "    ACOES.IDACAO,\n" +
                "    ACOES.DESCRICAO,\n" +
                "    ACOES.PRIORIDADE,\n" +
                "    X.IDLIBPROC,\n" +
                "    X.USERIDREQ,\n" +
                "    X.DATAHRSOLIC,\n" +
                "    X.IDPESS,\n" +
                "    V.NOME PESSOA,\n" +
                "    X.IDDOCTO,\n" +
                "    PC.COR,\n" +
                "    X.VALORDOCTO,\n" +
                "    (SELECT DECODE(PD.IDREPRESENTANTE, NULL, '', PD.IDREPRESENTANTE || ' - ' || VP.NOME)\n" +
                "     FROM PESSOADOC PD\n" +
                "     LEFT JOIN V_SIMPLEPESS VP ON (VP.IDPESS = PD.IDREPRESENTANTE)\n" +
                "     WHERE PD.IDPESS = X.IDPESS) AS REPRESENTANTE\n" +
                "FROM TABLE (GETLIBERACOESPEND(\n" +
                "DECODE( NVL((SELECT 1 FROM USERTELAS WHERE ESTAB = '' AND IDTELA = 1 AND GRUPO = (SELECT GRUPO FROM PUSUARIO WHERE USERID = :USERID)),0), 0,\n" +
                "(SELECT LISTAGG(ESTAB,',') WITHIN GROUP (ORDER BY ESTAB) FROM FILIAL\n" +
                " WHERE EXISTS (SELECT 1 FROM PRIVILEGIO P\n" +
                "            WHERE P.PRIVTIPO = 'F'\n" +
                "            AND P.PRIVACESSO IN ('S' ,'T')\n" +
                "            AND ((P.USERID = :USERID) OR (P.GRUPO = (SELECT GRUPO FROM PUSUARIO WHERE USERID = :USERID)))\n" +
                "            AND CASE PRIVCHAVE1 WHEN '*' THEN TO_NUMBER(FILIAL.ESTAB) ELSE TO_NUMBER(PRIVCHAVE1) END = FILIAL.ESTAB)),\n" +
                "  (SELECT ESTAB FROM FILIAL WHERE INATIVA = 'N' AND FILIAL.ESTAB = (SELECT ESTAB FROM FILIAL WHERE ESTAB = '') )), :USERID, (SELECT GRUPO FROM PUSUARIO WHERE USERID = :USERID))) X\n" +
                "LEFT JOIN ACOES ON (X.IDACAO = ACOES.IDACAO)\n" +
                "LEFT JOIN V_SIMPLEPESS V ON (V.IDPESS = X.IDPESS)\n" +
                "LEFT JOIN PRIORIDADECOR PC ON (ACOES.PRIORIDADE = PC.PRIORIDADE)\n" +
                "ORDER BY X.ESTAB";
        MapSqlParameterSource params = parametrosService.montaParametrosAllByUser(userId);

        List<LiberacaoCabecalho> libs =
                template.query(sqlCabLiberacoesAll, params, new BeanPropertyRowMapper<>(LiberacaoCabecalho.class));
        return libs;
    }

    @Override
    public LiberacaoDetalhe findDetalheLiberacao(Integer idLibProc,
                                                 Integer estab,
                                                 String userId) {
        String sqlDetLiberacoes = "SELECT\n" +
                "  X.ESTAB,\n" +
                "  X.IDLIBPROC,\n" +
                "  X.IDACAO,\n" +
                "  X.USERIDREQ,\n" +
                "  X.DATAHRSOLIC,\n" +
                "  ACOES.DESCRICAO,\n" +
                "  X.USERIDAUT,\n" +
                "  X.DATAHRAUT,\n" +
                "  TO_CHAR(X.SOLICITACAO)            AS SOLICITACAO,\n" +
                "  X.LIBERACAO,\n" +
                "  X.SITUACAO,\n" +
                "  X.IDPESS,\n" +
                "  X.IDMOTIVO,\n" +
                "  X.MOTIVO,\n" +
                "  CASE X.IDACAO\n" +
                "  WHEN 3\n" +
                "    THEN WM_PODEAUTLIB3(X.IDLIBPROC, :USERID, X.ESTAB)\n" +
                "  WHEN 110\n" +
                "    THEN WM_PODEAUTLIB110(X.IDLIBPROC, :USERID)\n" +
                "  WHEN 113\n" +
                "    THEN WM_PODEAUTLIB113(X.IDLIBPROC, :USERID)\n" +
                "  ELSE 'S'\n" +
                "  END                               AS PODEAUT,\n" +
                "  (SELECT NOME\n" +
                "   FROM V_PESSOADOC\n" +
                "   WHERE V_PESSOADOC.IDPESS = X.IDPESS AND v_pessoadoc.estab = x.estab\n" +
                "  )                                 AS NOME,\n" +
                "  X.IDDOCTO,\n" +
                "  X.ORIGEM,\n" +
                "  COALESCE(TO_CHAR(X.OBSVEND), ' ') AS OBSVEND\n" +
                "FROM TABLE (GETLIBERACOESPEND(:ESTAB, :USERID, (SELECT GRUPO\n" +
                "                                                FROM PUSUARIO\n" +
                "                                                WHERE USERID = :USERID))) X\n" +
                "  LEFT JOIN ACOES\n" +
                "    ON ACOES.IDACAO = X.IDACAO\n" +
                "WHERE X.IDLIBPROC = :IDLIBPROC";
        MapSqlParameterSource params = parametrosService.montaParametrosDetalheLib(idLibProc, estab, userId);
        return template.queryForObject(sqlDetLiberacoes, params, new BeanPropertyRowMapper<>(LiberacaoDetalhe.class));
    }

    @Override
    public boolean updateLiberacao(LiberacaoUp liberacaoUp) {
        String sqlUpdLiberacoes = "UPDATE LIBPROCESSO\n" +
                "SET SITUACAO = :SITUACAO,\n" +
                "  USERIDAUT  = :USERIDAUT,\n" +
                "  DATAHRAUT  = CURRENT_DATE,\n" +
                "  IDMOTIVO   = :IDMOTIVO,\n" +
                "  MOTIVO     = :MOTIVO\n" +
                "WHERE IDLIBPROC = :IDLIBPROC";

        MapSqlParameterSource params = parametrosService.montaParametrosUpdateLiberacao(liberacaoUp);
        if (template.update(sqlUpdLiberacoes, params) > 0) {
            return true;
        } else {
            return false;
        }
    }

    public static void montaColors(List<LiberacaoCabecalho> libs) {
        libs.forEach(liberacaoCabecalho -> {
            if (liberacaoCabecalho.getCor() != null) {
                Color color = new Color(liberacaoCabecalho.getCor());
                liberacaoCabecalho.setRed(color.getBlue());
                liberacaoCabecalho.setGreen(color.getGreen());
                liberacaoCabecalho.setBlue(color.getRed());
            }
        });
    }
}
