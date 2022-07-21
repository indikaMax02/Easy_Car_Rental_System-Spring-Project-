package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.ImageDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.FileDownloadUtil;
import lk.ijse.spring.util.ResponseUtil;
import lk.ijse.spring.util.SearchFile;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.annotation.MultipartConfig;
import java.io.File;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
@MultipartConfig
@RequestMapping("admin")
@CrossOrigin

public class AdminController {

}
