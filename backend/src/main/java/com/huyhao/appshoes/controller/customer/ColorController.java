package com.huyhao.appshoes.controller.customer;


import com.huyhao.appshoes.common.ResponseCommon;
import com.huyhao.appshoes.payload.common.ErrorResponse;
import com.huyhao.appshoes.services.ColorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public/colors")
@RequiredArgsConstructor
@Slf4j
public class ColorController {
    private final ColorService colorService;
    @GetMapping()
    public ResponseEntity<?> getColorList(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(ResponseCommon.success(colorService.getColorList()));
        } catch (Exception ex) {
            log.error("API /: ", ex);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ResponseCommon.fail(ex.getMessage()));
        }
    }

    @GetMapping("/{idColor}")
    public ResponseEntity<?> getColorById(@PathVariable Long idColor){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(ResponseCommon.success(colorService.getColorById(idColor)));
        } catch (Exception ex) {
            log.error("API /: ", ex);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ResponseCommon.fail(ex.getMessage()));
        }
    }
}
