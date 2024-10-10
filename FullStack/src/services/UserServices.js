const userRepository = require("../repositories/UserRepository")

class UserService {
    async getAllUsers() {
        return await userRepository.getAllUsers();
    }
}