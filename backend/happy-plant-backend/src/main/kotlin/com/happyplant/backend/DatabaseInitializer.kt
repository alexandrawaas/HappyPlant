package com.happyplant.backend

import jakarta.annotation.PostConstruct
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.ApplicationContext
import org.springframework.core.io.FileSystemResource
import org.springframework.jdbc.datasource.init.ScriptUtils
import org.springframework.stereotype.Component
import javax.sql.DataSource

@Component
class DatabaseInitializer {

    @Autowired
    private lateinit var applicationContext: ApplicationContext

    @Autowired
    private lateinit var dataSource: DataSource

    @Value("\${schema.create.enabled}")
    private val isEnabled = false

    @PostConstruct
    fun initializeDatabase() {
        if(!isEnabled) {
            println("skipping re-initialization. to execute, set property schema.create.enabled=true")
            return;
        }

        println("initializing database :)")
        val createScript = FileSystemResource("create.sql")
        val connection = dataSource.connection
        ScriptUtils.executeSqlScript(connection, createScript)
        connection.close()

    }
}
