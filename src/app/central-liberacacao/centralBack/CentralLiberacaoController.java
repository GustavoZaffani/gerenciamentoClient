package br.com.viasoft.centralliberacao.controller;

import br.com.viasoft.centralliberacao.model.centralliberacao.LiberacaoUp;
import br.com.viasoft.centralliberacao.repository.CentralLiberacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

import static java.util.logging.Level.SEVERE;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@RestController
public class CentralLiberacaoController {

    private static final Logger LOGGER = Logger.getLogger(CentralLiberacaoController.class.getName());

    final
    CentralLiberacaoRepository centralLiberacaoRepository;

    @Autowired
    public CentralLiberacaoController(CentralLiberacaoRepository centralLiberacaoRepository) {

        this.centralLiberacaoRepository = centralLiberacaoRepository;
    }

    @GetMapping(value = "/api/liberacoes/{userId}")
    public ResponseEntity liberacoesAllByUser(@PathVariable("userId") String userId) {
        try {
            return ResponseEntity.ok()
                    .body(centralLiberacaoRepository.findAllLiberacoesByUser(userId));
        } catch (Exception ex) {
            LOGGER.log(SEVERE, ex.getMessage());
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body("Erro ao carregar liberações.\n" +
                            "Verifique o log do servidor para maiores detalhes.");
        }
    }

    @GetMapping(value = "/api/liberacoes/{userId}/{estab}")
    public ResponseEntity liberacoesByUser(@PathVariable("userId") String userId,
                                           @PathVariable("estab") Integer estab) {
        try {
            return ResponseEntity.ok()
                    .body(centralLiberacaoRepository.findLiberacoesByUser(estab, userId));
        } catch (Exception ex) {
            LOGGER.log(SEVERE, ex.getMessage());
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body("Erro ao carregar liberações.\n" +
                            "Verifique o log do servidor para maiores detalhes.");
        }
    }

    @GetMapping(value = "/api/liberacao/{idLibProc}/{estab}/{userId}")
    public ResponseEntity getDetalhesLiberacao(@PathVariable("idLibProc") Integer idLibProc,
                                               @PathVariable("estab") Integer estab,
                                               @PathVariable("userId") String userId) {
        try {
            return ResponseEntity.ok().body(centralLiberacaoRepository.findDetalheLiberacao(idLibProc, estab, userId));
        } catch (Exception ex) {
            LOGGER.log(SEVERE, ex.getMessage());
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body("Erro ao carregar liberação.\n" +
                            "Verifique o log do servidor para maiores detalhes.");
        }
    }

    @PostMapping(value = "/api/liberacao/update")
    public ResponseEntity updateLiberacao(@RequestBody LiberacaoUp liberacaoUp) {

        try {
            if (centralLiberacaoRepository.updateLiberacao(liberacaoUp)) {
                return ResponseEntity.ok("Liberação atualizada com sucesso");
            } else {
                return ResponseEntity.ok("Nenhuma liberação foi atualizada");
            }
        } catch (Exception ex) {
            LOGGER.log(SEVERE, ex.getMessage());
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body("Erro ao atualizar liberação.\n" +
                            "Verifique o log do servidor para maiores detalhes.");
        }
    }
}