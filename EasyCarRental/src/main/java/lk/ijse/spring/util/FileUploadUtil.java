package lk.ijse.spring.util;

import lombok.SneakyThrows;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class FileUploadUtil {

    @SneakyThrows
    public static void saveFile(String fileName , MultipartFile multipartFile){
        Path uploadDirectory = Paths.get("Files-Upload");

       InputStream inputStream= multipartFile.getInputStream();
        Path filePath= uploadDirectory.resolve(fileName);
        Files.copy(inputStream,filePath, StandardCopyOption.REPLACE_EXISTING);
    }
}
