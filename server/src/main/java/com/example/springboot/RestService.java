import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RestService {
    private final RestTemplate restTemplate;

    public RestService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String makeHttpRequest() {
        String apiUrl = "http://localhost:8080/";
        return restTemplate.getForObject(apiUrl, String.class);
    }
}