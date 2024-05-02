package com.happyplant.backend.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.slf4j.LoggerFactory
import jakarta.servlet.Filter
import jakarta.servlet.ServletRequest
import jakarta.servlet.ServletResponse
import jakarta.servlet.FilterChain
import com.happyplant.backend.utility.AuthTokenUtil
import com.happyplant.backend.interceptor.JwtInterceptor

@Configuration
class SecurityConfig : WebMvcConfigurer {

    private val logger = LoggerFactory.getLogger(SecurityConfig::class.java)

    init {
        logger.info("SecurityConfig loaded")
    }

    @Bean
    fun jwtInterceptor(authTokenUtil: AuthTokenUtil): JwtInterceptor {
        return JwtInterceptor(authTokenUtil)
    }

    override fun addInterceptors(registry: InterceptorRegistry) {
        registry.addInterceptor(jwtInterceptor(AuthTokenUtil()))
            .addPathPatterns("/assignments/**")
            .addPathPatterns("/inventory/**")
            .addPathPatterns("/plants/**")
            .addPathPatterns("/rooms/**")
            .addPathPatterns("/test/secure")
            .excludePathPatterns("/auth/**")
            .excludePathPatterns("/species/**")
            .excludePathPatterns("/test/unsecure")
    }

    private class DummyFilter : Filter {
        override fun doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain) {
            chain.doFilter(request, response)
        }
    }
}
