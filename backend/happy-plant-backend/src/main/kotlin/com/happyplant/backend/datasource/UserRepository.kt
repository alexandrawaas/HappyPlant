package com.happyplant.backend.datasource

import org.apache.catalina.User
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface UserRepository: CrudRepository<User, UUID> {
}