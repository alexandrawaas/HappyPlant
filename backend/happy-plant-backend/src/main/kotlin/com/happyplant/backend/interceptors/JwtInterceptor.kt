package com.happyplant.backend.interceptors

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Component
import org.springframework.web.servlet.HandlerInterceptor
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import com.happyplant.backend.utilities.AuthTokenUtil
import com.happyplant.backend.utilities.AuthTokenBlacklist

@Component
class JwtInterceptor : HandlerInterceptor {

    private val authTokenUtil: AuthTokenUtil

    constructor(authTokenUtil: AuthTokenUtil) {
        this.authTokenUtil = authTokenUtil
    }

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        val path = request.requestURI
        if (path.startsWith("/auth")) {
            return true
        }

        val authHeader = request.getHeader("Authorization")
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            val token = authHeader.substring(7)
            if (authTokenUtil.validateToken(token) && !AuthTokenBlacklist.isTokenBlacklisted(token)) {
                return true
            }
        }
        response.sendError(HttpStatus.UNAUTHORIZED.value(), "Unauthorized")
        return false
    }
}
