package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.util.FileDownloadUtil;
import lk.ijse.spring.util.ResponseUtil;
import lombok.SneakyThrows;
import org.hibernate.metamodel.model.convert.spi.JpaAttributeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.annotation.MultipartConfig;
import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@MultipartConfig
@RequestMapping("admin")
@CrossOrigin

public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping(path = "addCar",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addCar(@RequestBody CarDTO carDTO){

        adminService.addCar(carDTO);

        return new ResponseUtil(200,"Car added complete",null);

    }

    @SneakyThrows
    @PostMapping(path = "addCarImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addCarImage(@RequestParam("file") MultipartFile multipartFile){
         String pathDirectory="/home/indika//IJSE/Spring Project/milestone 02 backend/Easy_Rental_Car_System/EasyCarRental/src/main/resources/static/image/";

         Files.copy(multipartFile.getInputStream(),Paths.get(pathDirectory+File.separator+multipartFile.getOriginalFilename()),StandardCopyOption.REPLACE_EXISTING);

        return new ResponseUtil(200,"Car image added complete",null);
    }

    @GetMapping(path = "getCarImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil  getCarImage(@RequestParam String name){
        String pathDirectory="/home/indika//IJSE/Spring Project/milestone 02 backend/Easy_Rental_Car_System/EasyCarRental/src/main/resources/static/image/";
        Path path = Paths.get(pathDirectory + File.separator + name);
        return new ResponseUtil(200,"Car image return complete",path);

    }

    @PutMapping(path = "editCar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil editCar(CarDTO carDTO){
        adminService.editCar(carDTO);
        return new ResponseUtil(200,"car Details Updated",null);
    }


    @DeleteMapping(path = "deleteCar",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCar(CarDTO carDTO){
         adminService.deleteCar(carDTO);
        return new ResponseUtil(200,"car Delete success",null);
    }


    @GetMapping(path = "viewRentalRequest", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil viewRentalRequest(){
        List<RentalRequestDTO> allRentalRequest = adminService.getAllRentalRequest();
        return new ResponseUtil(200,"car Delete success",allRentalRequest);
    }









}
