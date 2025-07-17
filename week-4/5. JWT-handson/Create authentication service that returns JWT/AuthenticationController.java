package com.cognizant.jwt.controller;

	import com.cognizant.jwt.util.JwtUtil;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.*;

	import java.util.Base64;

	import jakarta.servlet.http.HttpServletRequest; // ✅ This is Jakarta EE (used in Spring Boot 3)


	@RestController
	public class AuthenticationController {

	    private final JwtUtil jwtUtil;

	    public AuthenticationController(JwtUtil jwtUtil) {
	        this.jwtUtil = jwtUtil;
	    }

	    @RequestMapping("/authenticate")
	    public ResponseEntity<?> authenticate(HttpServletRequest request) {
	        String authHeader = request.getHeader("Authorization");

	        if (authHeader != null && authHeader.startsWith("Basic ")) {
	            try {
	                String base64Credentials = authHeader.substring("Basic ".length());
	                byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
	                String credentials = new String(credDecoded);
	                String[] values = credentials.split(":", 2);

	                if (values.length != 2) {
	                    return ResponseEntity.status(400).body("Invalid Basic Auth format");
	                }

	                String username = values[0];
	                String password = values[1];

	                if ("user".equals(username) && "pwd".equals(password)) {
	                    String token = jwtUtil.generateToken(username);
	                    return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
	                } else {
	                    return ResponseEntity.status(401).body("Invalid credentials");
	                }
	            } catch (Exception e) {
	                return ResponseEntity.status(500).body("Authentication failed: " + e.getMessage());
	            }
	        }

	        return ResponseEntity.status(401).body("Authorization header missing or not Basic");
	    }
}
