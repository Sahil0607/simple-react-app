package java-read;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Map<int, String> GetAllUsers() {
        return userRepository.findAllUser();
    }

    public String GetUser(int id)  {
        return userRepository.findById(id);
    }

    public string CreateUser(Map<int, String> request) {
        userRepository.save(user);
    }

    public String DeleteUser(int id) {
        userRepository.deleteByID(id);
    }
}
