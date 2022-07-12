package lk.ijse.spring.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.servlet.MultipartConfigElement;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "lk.ijse.spring")
public class WebAppConfig {

   @Bean
   public ModelMapper modelMapper(){
       return new ModelMapper();
   }

   @Bean
    public CommonsMultipartResolver multipartResolver(){
       CommonsMultipartResolver commonsMultipartResolver = new CommonsMultipartResolver();
       commonsMultipartResolver.setMaxUploadSize(20000000);
       return commonsMultipartResolver;
   }



}
