package lk.ijse.spring.util;

import lk.ijse.spring.dto.ImageDTO;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class FileDownloadUtil {
    private Path foundFile=null;


    private void searchFile(Path path,String fileName){
        foundFile=null;
        try {
            Files.list(path).forEach(file -> {
                if (file.getFileName().toString().startsWith(fileName)){
                    System.out.println("file  found");
                    foundFile=file;
                    return;
                }
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public Resource getFileAsResource(ImageDTO imageDTO) {

        String pathDirectory = null;
        Path path =null;
        String imageName=imageDTO.getImageId()+imageDTO.getImageView()+".jpeg";

        switch (imageDTO.getImageType()){

            case "car" :  pathDirectory = "D:\\AAD\\Spring Project\\milestone 02 backend\\Easy_Car_Rental_System-Spring-Project-\\EasyCarRental\\src\\main\\resources\\static\\image\\CarImage";
                path= Paths.get(pathDirectory);
                searchFile(path,imageName);
                break;

            case "driverLicence" : pathDirectory = "D:\\AAD\\Spring Project\\milestone 02 backend\\Easy_Car_Rental_System-Spring-Project-\\EasyCarRental\\src\\main\\resources\\static\\image\\driversLicenceImage";
                path= Paths.get(pathDirectory);
                searchFile(path,imageName);
                break;

            case "idCard" :   pathDirectory = "D:\\AAD\\Spring Project\\milestone 02 backend\\Easy_Car_Rental_System-Spring-Project-\\EasyCarRental\\src\\main\\resources\\static\\image\\NICImage";
                path= Paths.get(pathDirectory);
                searchFile(path,imageName);
                break;


        }
        try {
            if (foundFile != null) {
                return new UrlResource(foundFile.toUri());
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

       return null;

    }
}
