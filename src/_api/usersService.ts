import { AxiosResponse } from 'axios'
import User, { UserId } from '_types/User'
import apiService from './apiService'

export interface UsersService {
  getProfile(): Promise<User>
  getOne(userId: UserId): Promise<User>
}

const usersService: UsersService = {
  getProfile() {
    return apiService.get('/users/profile').then((res: AxiosResponse<User>) => res.data)
  },
  getOne(userId) {
    return apiService.get(`/users/${userId}`).then((res: AxiosResponse<User>) => res.data)
  },
}

export default usersService