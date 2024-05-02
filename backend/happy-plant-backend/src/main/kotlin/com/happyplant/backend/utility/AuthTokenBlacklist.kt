package com.happyplant.backend.utility

import java.util.concurrent.ConcurrentHashMap

object AuthTokenBlacklist {
    private val blacklist = ConcurrentHashMap<String, Boolean>()

    fun addToken(token: String) {
        blacklist[token] = true
    }

    fun isTokenBlacklisted(token: String): Boolean {
        return blacklist.containsKey(token)
    }
}
