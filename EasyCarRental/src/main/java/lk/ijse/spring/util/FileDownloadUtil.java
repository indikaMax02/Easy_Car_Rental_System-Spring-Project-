package lk.ijse.spring.util;

import lombok.SneakyThrows;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.util.StringUtils;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FileDownloadUtil {
   private Path foundFile;

    @SneakyThrows
    public Resource getFileAsResource(String fileCode){

        String pathDirectory="/home/indika//IJSE/Spring Project/milestone 02 backend/Easy_Rental_Car_System/EasyCarRental/src/main/resources/static/image";
        Path uploadDirectory = Paths.get(pathDirectory+File.separator+fileCode);





        if (foundFile != null){
            return new UrlResource(foundFile.toUri());
        }
        return null;
    }
}
