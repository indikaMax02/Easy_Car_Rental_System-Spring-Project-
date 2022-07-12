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

        switch (imageDTO.getImageType()){

            case "car" :  pathDirectory = "/home/indika/IJSE/Spring Project/milestone 02 backend/Easy_Rental_Car_System/EasyCarRental/src/main/resources/static/image/CarImage";
                path= Paths.get(pathDirectory);
                String imageName=imageDTO.getImageId()+imageDTO.getImageView()+".jpeg";
                searchFile(path,imageName);
                break;

            case "licence" : pathDirectory = "/home/indika/IJSE/Spring Project/milestone 02 backend/Easy_Rental_Car_System/EasyCarRental/src/main/resources/static/image/LicenceImage";
                path= Paths.get(pathDirectory+"/" + imageDTO.getImageId() + imageDTO.getImageType() + ".jpeg");break;

            case "idCard" :   pathDirectory = "/home/indika/IJSE/Spring Project/milestone 02 backend/Easy_Rental_Car_System/EasyCarRental/src/main/resources/static/image/IDCardImage";
                path= Paths.get(pathDirectory+"/" + imageDTO.getImageId() + imageDTO.getImageType() + ".jpeg");break;

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
