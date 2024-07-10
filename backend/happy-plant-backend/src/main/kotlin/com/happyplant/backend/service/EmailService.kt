package com.happyplant.backend.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import org.springframework.stereotype.Service
import java.net.URLEncoder
import io.github.cdimascio.dotenv.Dotenv
import com.happyplant.backend.model.User

@Service
class EmailService {

    private var apiUrl: String? = null

    init {
        val dotenv = Dotenv.configure().load();
        apiUrl = dotenv["API_URL"] ?: throw IllegalStateException("API_URL is not set in .env file");
    }

    @Autowired
    private lateinit var mailSender: JavaMailSender

    fun sendResetPasswordEmail(user: User, resetPasswordCode: String) {
        val recipientAddress = user.email.lowercase()
        val subject = "Passwort zurücksetzen oder ändern"

        val message = mailSender.createMimeMessage()
        val helper = MimeMessageHelper(message, true, "UTF-8")
        helper.setTo(recipientAddress)
        helper.setSubject(subject)

        val htmlContent = """
            <p>Du erhälst diese Nachricht, weil Du (oder jemand anders) das Password für Deinen Account zurücksetzen oder ändern möchte.</p>
            <p>Bitte gib folgenden Code in der Happy-Plants-App ein, um Dein Passwort zurückzusetzen oder zu ändern:</p>
            <h2>$resetPasswordCode</h2>
            <p>Wenn Du Dein Passwort nicht zurücksetzen oder ändern möchten, ignoriere diese Email und Dein Passwort bleibt unverändert.</p>
        """.trimIndent()

        helper.setText(htmlContent, true)
        mailSender.send(message)
    }

    fun sendEmailVerificationEmail(user: User, verifyEmailCode: String) {
        val recipientAddress = user.email.lowercase()
        val subject = "Email-Adresse verifizieren"

        val message = mailSender.createMimeMessage()
        val helper = MimeMessageHelper(message, true, "UTF-8")
        helper.setTo(recipientAddress)
        helper.setSubject(subject)

        val htmlContent = """
            <p>Vielen Dank, dass Du dir einen Account bei uns angelegt hast!</p>
            <p>Bitte gib folgenden Code in das Eingabefeld in der Happy-Plant-App ein, um Deine Email-Adresse zu verifizieren:</p>
            <h2>$verifyEmailCode</h2>
        """.trimIndent()

        helper.setText(htmlContent, true)
        mailSender.send(message)
    }
}
