package org.factoriaf5.comicbooks.config;

import java.util.Arrays;
import static org.springframework.security.config.Customizer.withDefaults;
// import org.factoriaf5.comicbooks.customers.Customer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.core.userdetails.User.UserBuilder;
// import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration  {

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
              /* .cors(cors -> cors.disable())  */
                /*  .csrf(csfr -> csfr.disable())  */
                .formLogin(form -> form.disable())
                .logout(out -> out
                        .logoutUrl("/logout")
                        .deleteCookies("JSESSIONID"))

                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.POST, "/customers").permitAll()
                        .requestMatchers("/customers/**").permitAll()
                        .requestMatchers("/customers/login").permitAll()
                        .requestMatchers("/genres/**").permitAll()
                        .requestMatchers("/comics/**").permitAll()
                        .requestMatchers("/orders/**").permitAll())

                .httpBasic(withDefaults())
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED));

        return http.build();

    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}


