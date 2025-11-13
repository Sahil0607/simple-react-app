package java-read;

@Repository
public class UserRepository {
        Map<int, String> users = new HashMap<>();


    public Map<int, String> findAllUser() {
        return new ArrayList<>(users.values());
    }

    public String findById(int id)  {
        return users.get(id);
    }

    public string CreateUser(request) {
        users.put(user.getId(), user);
        return user;
    }

    public String DeleteUser(@int id) {
        users.remove(id);
    }

    public int count() {
        return users.size();
    }
}
