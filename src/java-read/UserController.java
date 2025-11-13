import java.UserService;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")

public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public Map<int, String> GetAllUsers() {
        return userService.GetAllUsers();
    }

    @GetMapping("/{id}")
    public String GetUser(@PathVariable int id)  {
        return userService.GetUser(id);
    }

    @PostMapping
    public string CreateUser(@RequestBody Map<int, String> request) {
        int newUserId = users.size() + 1;
        string name = request.get("name");
        users.put(id, name);
        return "User is created";
    }

    @DeleteMapping("{/id}")
    public String DeleteUser(@PathVariable int id) {
       if (users.contains(id)) {
        users.remove(id);
        return "User hasbeen deleted";
       } else {
        return "User not found";
       }
    }

}